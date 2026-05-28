"use server";

import { dbVehicle } from "@/lib/db.vehicle";
import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { startOfMonth, endOfMonth, subMonths } from "date-fns";
import { exec } from "child_process";
import { promisify } from "util";
import path from "path";

const execAsync = promisify(exec);
let isSchemaVerified = false;

async function ensureDatabaseSchema() {
  if (isSchemaVerified) return;
  try {
    // Check if the table exists by doing a quick findFirst
    await dbVehicle.vehicle_Fuel_Logs.findFirst();
    isSchemaVerified = true;
    console.log("Database schema verified: Vehicle_Fuel_Logs table exists.");
  } catch (e: any) {
    console.warn("Database verification failed, attempting schema push...", e.message);
    try {
      const cwd = process.cwd();
      const schemaPath = path.join(cwd, "prisma", "schema.vehicle.prisma");
      console.log(`Running prisma db push for schema: ${schemaPath}`);
      
      const { stdout, stderr } = await execAsync(
        `npx prisma db push --schema="${schemaPath}"`
      );
      console.log("Prisma DB Push stdout:", stdout);
      if (stderr) console.error("Prisma DB Push stderr:", stderr);
      
      isSchemaVerified = true;
    } catch (pushErr: any) {
      console.error("Failed to run prisma db push automatically:", pushErr);
    }
  }
}

// ==============================
// AUTH HELPER
// ==============================

async function checkUserResourceAccess(session: any) {
  if (!session) return false;
  if (session.role === "admin") return true;

  if (session.role === "staff") {
    const schedulerSetting = await dbJob.settings.findUnique({
      where: { setting_key: "role_scheduler" }
    });
    if (schedulerSetting?.setting_value === session.userId.toString()) {
      return true;
    }
  }
  return false;
}

// ==============================
// FUEL LOGS CRUD
// ==============================

export async function getFuelLogs() {
  await ensureDatabaseSchema();
  const session = await getSession();
  if (!session) return [];

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) return [];

  try {
    return await dbVehicle.vehicle_Fuel_Logs.findMany({
      include: {
        car: true,
        request: true
      },
      orderBy: { fillDate: "desc" }
    });
  } catch (err: any) {
    console.error("Failed to fetch fuel logs, returning empty array:", err);
    return [];
  }
}

export async function addFuelLog(formData: FormData) {
  await ensureDatabaseSchema();
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  const amountInput = formData.get("amount") as string;
  const fillDateInput = formData.get("fillDate") as string;
  const carIdInput = formData.get("carId") as string;
  const litersInput = formData.get("liters") as string;
  const odometerReadInput = formData.get("odometerRead") as string;
  const requestIdInput = formData.get("requestId") as string;
  const refSlip = formData.get("refSlip") as string;
  const fuelProvider = formData.get("fuelProvider") as string;
  const notes = formData.get("notes") as string;

  if (!amountInput || !fillDateInput) {
    throw new Error("กรุณากรอกจำนวนเงินและวันที่เติมน้ำมัน");
  }

  const amount = parseFloat(amountInput);
  const fillDate = new Date(fillDateInput);
  const carId = carIdInput ? parseInt(carIdInput) : null;
  const liters = litersInput ? parseFloat(litersInput) : null;
  const odometerRead = odometerReadInput ? parseFloat(odometerReadInput) : null;
  const requestId = requestIdInput ? parseInt(requestIdInput) : null;

  if (isNaN(amount)) throw new Error("จำนวนเงินต้องเป็นตัวเลข");
  if (liters !== null && isNaN(liters)) throw new Error("จำนวนลิตรต้องเป็นตัวเลข");
  if (odometerRead !== null && isNaN(odometerRead)) throw new Error("เลขไมล์ต้องเป็นตัวเลข");

  // Validate if the provided requestId actually exists in database to prevent Foreign Key Violation (P2003)
  if (requestId && !isNaN(requestId)) {
    const requestExists = await dbVehicle.vehicle_Requests.findUnique({
      where: { requestId }
    });
    if (!requestExists) {
      throw new Error(`ไม่พบรหัสใบงานใช้รถ #${requestId} ในระบบ กรุณาตรวจสอบความถูกต้องของรหัสอีกครั้ง หรือเว้นว่างไว้หากไม่มีใบงาน`);
    }
  }

  // Validate if the provided carId actually exists in database to prevent Foreign Key Violation (P2003)
  if (carId && !isNaN(carId)) {
    const carExists = await dbVehicle.master_Vehicles.findUnique({
      where: { carId }
    });
    if (!carExists) {
      throw new Error(`ไม่พบข้อมูลยานพาหนะรหัส #${carId} ในระบบ กรุณาเลือกยานพาหนะที่ถูกต้อง หรือเว้นว่างไว้หากไม่มีข้อมูล`);
    }
  }

  await dbVehicle.vehicle_Fuel_Logs.create({
    data: {
      amount,
      fillDate,
      carId: carId && !isNaN(carId) ? carId : null,
      liters: liters && !isNaN(liters) ? liters : null,
      odometerRead: odometerRead && !isNaN(odometerRead) ? odometerRead : null,
      requestId: requestId && !isNaN(requestId) ? requestId : null,
      refSlip: refSlip || null,
      fuelProvider: fuelProvider || null,
      notes: notes || null
    }
  });

  revalidatePath("/reports/fuel");
  revalidatePath("/reports");
  revalidatePath("/queue");
}

export async function deleteFuelLog(fuelLogId: number) {
  await ensureDatabaseSchema();
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  await dbVehicle.vehicle_Fuel_Logs.delete({
    where: { fuelLogId }
  });

  revalidatePath("/reports/fuel");
  revalidatePath("/reports");
  revalidatePath("/queue");
}

// ==============================
// STATS & EFFICIENCY CALCULATIONS
// ==============================

export async function getFuelStats() {
  await ensureDatabaseSchema();
  const session = await getSession();
  if (!session) {
    return {
      totalSpending: 0,
      monthlySpending: 0,
      previousMonthlySpending: 0,
      efficiencyStats: []
    };
  }

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) {
    return {
      totalSpending: 0,
      monthlySpending: 0,
      previousMonthlySpending: 0,
      efficiencyStats: []
    };
  }

  try {
    const now = new Date();
    const currentStart = startOfMonth(now);
    const currentEnd = endOfMonth(now);
    const prevMonth = subMonths(now, 1);
    const prevStart = startOfMonth(prevMonth);
    const prevEnd = endOfMonth(prevMonth);

    // 1. Fetch all fuel logs
    const allLogs = await dbVehicle.vehicle_Fuel_Logs.findMany({
      orderBy: { fillDate: "asc" }
    });

    // Calculate spending metrics
    let totalSpending = 0;
    let monthlySpending = 0;
    let previousMonthlySpending = 0;

    allLogs.forEach(log => {
      totalSpending += log.amount;
      const logDate = new Date(log.fillDate);
      if (logDate >= currentStart && logDate <= currentEnd) {
        monthlySpending += log.amount;
      } else if (logDate >= prevStart && logDate <= prevEnd) {
        previousMonthlySpending += log.amount;
      }
    });

    // 2. Fetch all vehicles to compute vehicle efficiency
    const vehicles = await dbVehicle.master_Vehicles.findMany({
      include: {
        fuelLogs: {
          orderBy: { fillDate: "asc" }
        }
      }
    });

    // 3. Compute efficiency per vehicle using the Odometer Delta Method
    const efficiencyStats = vehicles.map(vehicle => {
      // Filter out logs that don't have odometer or liters recorded
      const validLogs = vehicle.fuelLogs.filter(
        log => log.odometerRead !== null && log.liters !== null && log.liters > 0
      );

      let totalDistance = 0;
      let totalLiters = 0;
      let averageEfficiency = null; // km/L

      if (validLogs.length >= 2) {
        for (let i = 1; i < validLogs.length; i++) {
          const prevOdo = validLogs[i - 1].odometerRead!;
          const currOdo = validLogs[i].odometerRead!;
          const liters = validLogs[i].liters!;

          if (currOdo > prevOdo) {
            totalDistance += (currOdo - prevOdo);
            totalLiters += liters;
          }
        }
      }

      if (totalLiters > 0) {
        averageEfficiency = parseFloat((totalDistance / totalLiters).toFixed(2));
      }

      // Get total spending specifically on this vehicle
      const vehicleSpending = vehicle.fuelLogs.reduce((sum, log) => sum + log.amount, 0);

      return {
        carId: vehicle.carId,
        licensePlate: vehicle.licensePlate,
        brand: vehicle.brand || "ไม่ทราบยี่ห้อ",
        carType: vehicle.carType,
        totalSpending: vehicleSpending,
        averageEfficiency, // km/L
        trackedDistance: totalDistance,
        trackedLiters: totalLiters,
        logsCount: vehicle.fuelLogs.length
      };
    });

    return {
      totalSpending,
      monthlySpending,
      previousMonthlySpending,
      efficiencyStats
    };
  } catch (err: any) {
    console.error("Failed to fetch fuel stats, returning empty metrics:", err);
    return {
      totalSpending: 0,
      monthlySpending: 0,
      previousMonthlySpending: 0,
      efficiencyStats: []
    };
  }
}
