"use server";

import { dbVehicle } from "@/lib/db.vehicle";
import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

// ==============================
// AUTH HELPERS
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
// VEHICLES
// ==============================

export async function getVehicles() {
  const session = await getSession();
  if (!session) return [];

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) return [];

  return await dbVehicle.master_Vehicles.findMany({
    orderBy: { carId: "desc" },
  });
}

export async function addVehicle(formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  const licensePlate = formData.get("licensePlate") as string;
  const brand = formData.get("brand") as string;
  const type = formData.get("type") as string;
  const capacity = parseInt(formData.get("capacity") as string) || 4;
  const actExpiryDate = formData.get("actExpiryDate") as string;
  const insuranceExpiryDate = formData.get("insuranceExpiryDate") as string;
  const taxExpiryDate = formData.get("taxExpiryDate") as string;

  if (!licensePlate || !type) throw new Error("Missing required fields");

  await dbVehicle.master_Vehicles.create({
    data: {
      licensePlate,
      brand: brand || null,
      carType: type,
      capacity,
      status: "Ready",
      actExpiryDate: actExpiryDate ? new Date(actExpiryDate) : null,
      insuranceExpiryDate: insuranceExpiryDate ? new Date(insuranceExpiryDate) : null,
      taxExpiryDate: taxExpiryDate ? new Date(taxExpiryDate) : null,
    },
  });

  revalidatePath("/resources");
  revalidatePath("/queue");
}

export async function updateVehicleStatus(carId: number, status: string) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  await dbVehicle.master_Vehicles.update({
    where: { carId },
    data: { status },
  });

  revalidatePath("/queue");
}

export async function editVehicle(carId: number, formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  const licensePlate = formData.get("licensePlate") as string;
  const brand = formData.get("brand") as string;
  const type = formData.get("type") as string;
  const capacity = parseInt(formData.get("capacity") as string) || 4;
  const actExpiryDate = formData.get("actExpiryDate") as string;
  const insuranceExpiryDate = formData.get("insuranceExpiryDate") as string;
  const taxExpiryDate = formData.get("taxExpiryDate") as string;

  if (!licensePlate || !type) throw new Error("Missing required fields");

  await dbVehicle.master_Vehicles.update({
    where: { carId },
    data: {
      licensePlate,
      brand: brand || null,
      carType: type,
      capacity,
      actExpiryDate: actExpiryDate ? new Date(actExpiryDate) : null,
      insuranceExpiryDate: insuranceExpiryDate ? new Date(insuranceExpiryDate) : null,
      taxExpiryDate: taxExpiryDate ? new Date(taxExpiryDate) : null,
    },
  });

  revalidatePath("/resources");
  revalidatePath("/queue");
}

export async function deleteVehicle(carId: number) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  await dbVehicle.master_Vehicles.delete({
    where: { carId },
  });

  revalidatePath("/resources");
  revalidatePath("/queue");
}

// ==============================
// DRIVERS
// ==============================

export async function getDrivers() {
  const session = await getSession();
  if (!session) return [];

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) return [];

  return await dbVehicle.master_Drivers.findMany({
    orderBy: { driverId: "desc" },
  });
}

export async function addDriver(formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const lineUserId = formData.get("lineUserId") as string;
  const licenseNumber = formData.get("licenseNumber") as string;
  const licenseExpiryDate = formData.get("licenseExpiryDate") as string;
  const address = formData.get("address") as string;

  if (!name) throw new Error("Missing required fields");

  await dbVehicle.master_Drivers.create({
    data: {
      driverName: name,
      phone: phone || null,
      lineUserId: lineUserId || null,
      licenseNumber: licenseNumber || null,
      licenseExpiryDate: licenseExpiryDate ? new Date(licenseExpiryDate) : null,
      address: address || null,
      status: "Available",
    },
  });

  revalidatePath("/resources");
  revalidatePath("/queue");
}

export async function editDriver(driverId: number, formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const lineUserId = formData.get("lineUserId") as string;
  const licenseNumber = formData.get("licenseNumber") as string;
  const licenseExpiryDate = formData.get("licenseExpiryDate") as string;
  const address = formData.get("address") as string;

  if (!name) throw new Error("Missing required fields");

  await dbVehicle.master_Drivers.update({
    where: { driverId },
    data: {
      driverName: name,
      phone: phone || null,
      lineUserId: lineUserId || null,
      licenseNumber: licenseNumber || null,
      licenseExpiryDate: licenseExpiryDate ? new Date(licenseExpiryDate) : null,
      address: address || null,
    },
  });

  revalidatePath("/resources");
  revalidatePath("/queue");
}

export async function deleteDriver(driverId: number) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  await dbVehicle.master_Drivers.delete({
    where: { driverId },
  });

  revalidatePath("/resources");
  revalidatePath("/queue");
}

// ==============================
// DRIVER LEAVES / ABSENCES
// ==============================

export async function getDriverLeaves() {
  const session = await getSession();
  if (!session) return [];

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) return [];

  return await dbVehicle.driver_Leaves.findMany({
    include: {
      driver: true
    },
    orderBy: { startDate: "desc" }
  });
}

export async function addDriverLeave(formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  const driverId = parseInt(formData.get("driverId") as string);
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;
  const leaveType = formData.get("leaveType") as string;
  const reason = formData.get("reason") as string;

  if (isNaN(driverId) || !startDate || !endDate || !leaveType) {
    throw new Error("ข้อมูลไม่ครบถ้วน");
  }

  await dbVehicle.driver_Leaves.create({
    data: {
      driverId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      leaveType,
      reason: reason || null,
      status: "APPROVED"
    }
  });

  revalidatePath("/resources");
  revalidatePath("/queue");
}

export async function deleteDriverLeave(leaveId: number) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  await dbVehicle.driver_Leaves.delete({
    where: { leaveId }
  });

  revalidatePath("/resources");
  revalidatePath("/queue");
}

// ==============================
// VEHICLE MAINTENANCES
// ==============================

export async function getVehicleMaintenances() {
  const session = await getSession();
  if (!session) return [];

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) return [];

  return await dbVehicle.vehicle_Maintenances.findMany({
    include: {
      car: true
    },
    orderBy: { startDate: "desc" }
  });
}

export async function addVehicleMaintenance(formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  const carId = parseInt(formData.get("carId") as string);
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;
  const type = formData.get("type") as string;
  const costInput = formData.get("cost") as string;
  const details = formData.get("details") as string;
  const status = formData.get("status") as string || "SCHEDULED";

  if (isNaN(carId) || !startDate || !endDate || !type) {
    throw new Error("ข้อมูลไม่ครบถ้วน");
  }

  const cost = costInput ? parseFloat(costInput) : null;

  await dbVehicle.vehicle_Maintenances.create({
    data: {
      carId,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      type,
      cost: cost !== null && !isNaN(cost) ? cost : null,
      details: details || null,
      status
    }
  });

  revalidatePath("/resources");
  revalidatePath("/queue");
}

export async function deleteVehicleMaintenance(maintenanceId: number) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  await dbVehicle.vehicle_Maintenances.delete({
    where: { maintenanceId }
  });

  revalidatePath("/resources");
  revalidatePath("/queue");
}

// ==============================
// VEHICLE TAXES
// ==============================

export async function getVehicleTaxes(carId?: number) {
  const session = await getSession();
  if (!session) return [];

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) return [];

  const whereClause = carId ? { carId } : {};

  return await dbVehicle.vehicle_Taxes.findMany({
    where: whereClause,
    include: {
      car: true
    },
    orderBy: { paymentDate: "desc" }
  });
}

export async function addVehicleTax(formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  const carId = parseInt(formData.get("carId") as string);
  const paymentDate = formData.get("paymentDate") as string;
  const expiryDate = formData.get("expiryDate") as string;
  const costInput = formData.get("cost") as string;
  const receiptNumber = formData.get("receiptNumber") as string;
  const notes = formData.get("notes") as string;

  if (isNaN(carId) || !paymentDate || !expiryDate) {
    throw new Error("ข้อมูลไม่ครบถ้วน");
  }

  const cost = costInput ? parseFloat(costInput) : 0;

  // 1. Create Tax record
  await dbVehicle.vehicle_Taxes.create({
    data: {
      carId,
      paymentDate: new Date(paymentDate),
      expiryDate: new Date(expiryDate),
      cost: !isNaN(cost) ? cost : 0,
      receiptNumber: receiptNumber || null,
      notes: notes || null
    }
  });

  // 2. Automatically update Master_Vehicles' taxExpiryDate with this new expiry date if it is the latest
  const vehicle = await dbVehicle.master_Vehicles.findUnique({
    where: { carId },
    include: {
      taxes: {
        orderBy: { expiryDate: "desc" },
        take: 1
      }
    }
  });

  if (vehicle && vehicle.taxes.length > 0) {
    const latestExpiry = vehicle.taxes[0].expiryDate;
    await dbVehicle.master_Vehicles.update({
      where: { carId },
      data: { taxExpiryDate: latestExpiry }
    });
  }

  revalidatePath("/resources");
  revalidatePath("/");
  return { success: true };
}

export async function deleteVehicleTax(taxId: number) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  const taxRecord = await dbVehicle.vehicle_Taxes.findUnique({
    where: { taxId }
  });

  if (!taxRecord) throw new Error("ไม่พบรายการภาษี");

  const carId = taxRecord.carId;

  await dbVehicle.vehicle_Taxes.delete({
    where: { taxId }
  });

  // Update Master_Vehicles' taxExpiryDate to the next latest or null
  const vehicle = await dbVehicle.master_Vehicles.findUnique({
    where: { carId },
    include: {
      taxes: {
        orderBy: { expiryDate: "desc" },
        take: 1
      }
    }
  });

  const latestExpiry = vehicle && vehicle.taxes.length > 0 ? vehicle.taxes[0].expiryDate : null;

  await dbVehicle.master_Vehicles.update({
    where: { carId },
    data: { taxExpiryDate: latestExpiry }
  });

  revalidatePath("/resources");
  revalidatePath("/");
  return { success: true };
}

// ==============================
// VEHICLE TIRES
// ==============================

export async function getVehicleTires(carId?: number) {
  const session = await getSession();
  if (!session) return [];

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) return [];

  const whereClause = carId ? { carId } : {};

  return await dbVehicle.vehicle_Tires.findMany({
    where: whereClause,
    include: {
      car: true
    },
    orderBy: { changeDate: "desc" }
  });
}

export async function addVehicleTires(formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  const carId = parseInt(formData.get("carId") as string);
  const changeDate = formData.get("changeDate") as string;
  const odometerRead = parseInt(formData.get("odometerRead") as string);
  const brand = formData.get("brand") as string;
  const spec = formData.get("spec") as string;
  const costInput = formData.get("cost") as string;
  const tireCount = parseInt(formData.get("tireCount") as string) || 4;
  const limitOdometerInput = formData.get("limitOdometer") as string;
  const limitMonths = parseInt(formData.get("limitMonths") as string) || 36;
  const notes = formData.get("notes") as string;

  if (isNaN(carId) || !changeDate || isNaN(odometerRead)) {
    throw new Error("ข้อมูลไม่ครบถ้วน");
  }

  const cost = costInput ? parseFloat(costInput) : null;
  // If limitOdometer is not provided, default to odometerRead + 50000 km
  const limitOdometer = limitOdometerInput ? parseInt(limitOdometerInput) : (odometerRead + 50000);

  await dbVehicle.vehicle_Tires.create({
    data: {
      carId,
      changeDate: new Date(changeDate),
      odometerRead,
      brand: brand || null,
      spec: spec || null,
      cost: cost !== null && !isNaN(cost) ? cost : null,
      tireCount,
      limitOdometer,
      limitMonths,
      notes: notes || null
    }
  });

  revalidatePath("/resources");
  revalidatePath("/");
  return { success: true };
}

export async function deleteVehicleTires(tireId: number) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  await dbVehicle.vehicle_Tires.delete({
    where: { tireId }
  });

  revalidatePath("/resources");
  revalidatePath("/");
  return { success: true };
}

// ==============================
// ODOMETER HELPER & EXPIRY ALERTS
// ==============================

export async function getVehicleCurrentOdometer(carId: number): Promise<number> {
  // Get max odometer from request's start/end, fuel logs, and tire logs
  const maxRequestEnd = await dbVehicle.vehicle_Requests.aggregate({
    where: { carId, status: "Completed" },
    _max: { endOdometer: true }
  });
  const maxRequestStart = await dbVehicle.vehicle_Requests.aggregate({
    where: { carId },
    _max: { startOdometer: true }
  });
  const maxFuel = await dbVehicle.vehicle_Fuel_Logs.aggregate({
    where: { carId },
    _max: { odometerRead: true }
  });
  const maxTire = await dbVehicle.vehicle_Tires.aggregate({
    where: { carId },
    _max: { odometerRead: true }
  });

  const currentOdo = Math.max(
    0,
    maxRequestEnd._max.endOdometer || 0,
    maxRequestStart._max.startOdometer || 0,
    maxFuel._max.odometerRead || 0,
    maxTire._max.odometerRead || 0
  );
  return currentOdo;
}

export async function getVehicleAlerts() {
  const session = await getSession();
  if (!session) return [];

  const vehicles = await dbVehicle.master_Vehicles.findMany({
    include: {
      tires: {
        orderBy: { changeDate: "desc" },
        take: 1
      }
    }
  });

  const alerts = [];
  const today = new Date();
  const thirtyDaysLater = new Date();
  thirtyDaysLater.setDate(today.getDate() + 30);

  for (const v of vehicles) {
    // 1. Tax Alert
    if (v.taxExpiryDate) {
      const exp = new Date(v.taxExpiryDate);
      if (exp <= today) {
        alerts.push({
          carId: v.carId,
          licensePlate: v.licensePlate,
          type: "TAX",
          title: "ภาษี/ทะเบียน หมดอายุแล้ว",
          detail: `หมดอายุเมื่อ ${exp.toLocaleDateString('th-TH')}`,
          severity: "high",
        });
      } else if (exp <= thirtyDaysLater) {
        alerts.push({
          carId: v.carId,
          licensePlate: v.licensePlate,
          type: "TAX",
          title: "ภาษี/ทะเบียน ใกล้หมดอายุ",
          detail: `จะหมดอายุในวันที่ ${exp.toLocaleDateString('th-TH')}`,
          severity: "medium",
        });
      }
    }

    // 2. ACT Alert
    if (v.actExpiryDate) {
      const exp = new Date(v.actExpiryDate);
      if (exp <= today) {
        alerts.push({
          carId: v.carId,
          licensePlate: v.licensePlate,
          type: "ACT",
          title: "พ.ร.บ. หมดอายุแล้ว",
          detail: `หมดอายุเมื่อ ${exp.toLocaleDateString('th-TH')}`,
          severity: "high",
        });
      } else if (exp <= thirtyDaysLater) {
        alerts.push({
          carId: v.carId,
          licensePlate: v.licensePlate,
          type: "ACT",
          title: "พ.ร.บ. ใกล้หมดอายุ",
          detail: `จะหมดอายุในวันที่ ${exp.toLocaleDateString('th-TH')}`,
          severity: "medium",
        });
      }
    }

    // 3. Insurance Alert
    if (v.insuranceExpiryDate) {
      const exp = new Date(v.insuranceExpiryDate);
      if (exp <= today) {
        alerts.push({
          carId: v.carId,
          licensePlate: v.licensePlate,
          type: "INSURANCE",
          title: "ประกันภัย หมดอายุแล้ว",
          detail: `หมดอายุเมื่อ ${exp.toLocaleDateString('th-TH')}`,
          severity: "high",
        });
      } else if (exp <= thirtyDaysLater) {
        alerts.push({
          carId: v.carId,
          licensePlate: v.licensePlate,
          type: "INSURANCE",
          title: "ประกันภัย ใกล้หมดอายุ",
          detail: `จะหมดอายุในวันที่ ${exp.toLocaleDateString('th-TH')}`,
          severity: "medium",
        });
      }
    }

    // 4. Tire Alert
    const latestTire = v.tires[0];
    if (latestTire) {
      // Date-based expiry
      const changeDate = new Date(latestTire.changeDate);
      const limitMonths = latestTire.limitMonths || 36;
      const expDate = new Date(changeDate);
      expDate.setMonth(expDate.getMonth() + limitMonths);

      if (expDate <= today) {
        alerts.push({
          carId: v.carId,
          licensePlate: v.licensePlate,
          type: "TIRE_DATE",
          title: "ครบกำหนดเปลี่ยนยาง (ตามอายุการใช้งาน)",
          detail: `ครบกำหนดตั้งแต่วันที่ ${expDate.toLocaleDateString('th-TH')} (เปลี่ยนล่าสุด: ${changeDate.toLocaleDateString('th-TH')})`,
          severity: "high",
        });
      } else if (expDate <= thirtyDaysLater) {
        alerts.push({
          carId: v.carId,
          licensePlate: v.licensePlate,
          type: "TIRE_DATE",
          title: "ใกล้ครบกำหนดเปลี่ยนยาง (ตามอายุการใช้งาน)",
          detail: `จะครบกำหนดในวันที่ ${expDate.toLocaleDateString('th-TH')} (เปลี่ยนล่าสุด: ${changeDate.toLocaleDateString('th-TH')})`,
          severity: "medium",
        });
      }

      // Odometer-based expiry
      if (latestTire.limitOdometer) {
        const currentOdo = await getVehicleCurrentOdometer(v.carId);
        const limitOdo = latestTire.limitOdometer;
        const remainingKm = limitOdo - currentOdo;

        if (remainingKm <= 0) {
          alerts.push({
            carId: v.carId,
            licensePlate: v.licensePlate,
            type: "TIRE_ODO",
            title: "ครบกำหนดเปลี่ยนยาง (ตามเลขไมล์รถยนต์)",
            detail: `วิ่งเกินเลขไมล์เปลี่ยนยางสะสมแล้ว! เลขไมล์ปัจจุบัน: ${currentOdo.toLocaleString()} กม. (เลขไมล์แจ้งเตือน: ${limitOdo.toLocaleString()} กม.)`,
            severity: "high",
          });
        } else if (remainingKm <= 2000) {
          alerts.push({
            carId: v.carId,
            licensePlate: v.licensePlate,
            type: "TIRE_ODO",
            title: "ใกล้ถึงรอบเปลี่ยนยาง (ตามเลขไมล์รถยนต์)",
            detail: `เหลือระยะทางวิ่งอีกเพียง ${remainingKm.toLocaleString()} กม. (เลขไมล์ปัจจุบัน: ${currentOdo.toLocaleString()} กม. / เลขไมล์แจ้งเตือน: ${limitOdo.toLocaleString()} กม.)`,
            severity: "medium",
          });
        }
      }
    }
  }

  return alerts;
}

export async function renewVehicleAttribute(carId: number, type: "TAX" | "ACT" | "INSURANCE", newExpiryDate: string) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const isAuthorized = await checkUserResourceAccess(session);
  if (!isAuthorized) throw new Error("Unauthorized");

  const dateValue = new Date(newExpiryDate);
  if (isNaN(dateValue.getTime())) throw new Error("วันที่ไม่ถูกต้อง");

  if (type === "TAX") {
    // 1. Create a Tax history record
    await dbVehicle.vehicle_Taxes.create({
      data: {
        carId,
        paymentDate: new Date(),
        expiryDate: dateValue,
        cost: 0,
        notes: "อัปเดตผ่านปุ่มด่วนหน้าแดชบอร์ด"
      }
    });

    // 2. Update Master_Vehicles
    await dbVehicle.master_Vehicles.update({
      where: { carId },
      data: { taxExpiryDate: dateValue }
    });
  } else if (type === "ACT") {
    await dbVehicle.master_Vehicles.update({
      where: { carId },
      data: { actExpiryDate: dateValue }
    });
  } else if (type === "INSURANCE") {
    await dbVehicle.master_Vehicles.update({
      where: { carId },
      data: { insuranceExpiryDate: dateValue }
    });
  }

  revalidatePath("/");
  revalidatePath("/resources");
  return { success: true };
}
