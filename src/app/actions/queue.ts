"use server";

import { dbVehicle } from "@/lib/db.vehicle";
import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

async function checkUserSchedulerAccess(session: any) {
  if (!session) return false;
  if (session.role === "admin") return true;

  if (session.role === "staff" || session.role === "evaluator") {
    const schedulerSetting = await dbJob.settings.findUnique({
      where: { setting_key: "role_scheduler" }
    });
    if (schedulerSetting?.setting_value === session.userId.toString()) {
      return true;
    }
  }
  return false;
}

export async function getPendingQueue() {
  const session = await getSession();
  const hasAccess = await checkUserSchedulerAccess(session);
  if (!hasAccess) return [];

  const requests = await dbVehicle.vehicle_Requests.findMany({
    where: { status: "Pending_Scheduler" },
    orderBy: { createdAt: "asc" },
  });

  const staffIds = requests.map((req) => req.requesterStaffId);
  const staff = await dbJob.users.findMany({
    where: { id: { in: staffIds } },
    select: { id: true, firstname: true, lastname: true },
  });

  return requests.map((req) => {
    const user = staff.find((s) => s.id === req.requesterStaffId);
    return {
      ...req,
      requesterName: user ? `${user.firstname} ${user.lastname}` : "Unknown",
    };
  });
}

export async function getAvailableResources() {
  const vehicles = await dbVehicle.master_Vehicles.findMany({
    where: { status: "Ready" },
    include: {
      maintenances: {
        where: { status: { notIn: ["COMPLETED", "CANCELLED"] } }
      }
    }
  });
  const drivers = await dbVehicle.master_Drivers.findMany({
    include: {
      leaves: {
        where: { status: "APPROVED" }
      }
    }
  });

  return { vehicles, drivers };
}

export async function assignVehicle(requestId: number, carId: number, driverId: number) {
  const session = await getSession();
  const hasAccess = await checkUserSchedulerAccess(session);
  if (!hasAccess) throw new Error("Unauthorized");

  const request = await dbVehicle.vehicle_Requests.update({
    where: { requestId },
    data: { 
      carId, 
      driverId, 
      status: "Pending_Resource_Deputy_Approval" 
    },
    include: {
      car: true,
      driver: true,
    }
  });

  // Try to notify Resource Deputy
  try {
    const roleAssignment = await dbJob.settings.findUnique({
      where: { setting_key: "role_resource_deputy" }
    });

    if (roleAssignment?.setting_value) {
      const deputyUserId = parseInt(roleAssignment.setting_value);
      const resourceDeputy = await dbJob.users.findUnique({
        where: { id: deputyUserId }
      });
      
      if (resourceDeputy?.line_user_id) {
        const requester = await dbJob.users.findUnique({ where: { id: request.requesterStaffId } });
        const { sendWorkflowNotification } = await import("@/lib/line");
        const { format } = await import("date-fns");
        const { th } = await import("date-fns/locale");
        
        const start = new Date(request.startDateTime);
        const end = new Date(request.endDateTime);
        const dateRange = `${format(start, "d MMM HH:mm", { locale: th })} - ${format(end, "d MMM HH:mm", { locale: th })}`;
        
        await sendWorkflowNotification(resourceDeputy.line_user_id, "to_resource_deputy", {
          requestId: request.requestId,
          requesterName: requester ? `${requester.firstname} ${requester.lastname}` : "ไม่ทราบชื่อ",
          purpose: request.purpose,
          destination: request.destination,
          dateRange: dateRange,
          carInfo: request.car?.licensePlate,
          driverName: request.driver?.driverName
        });
      }
    }
  } catch (err) {
    console.error("Failed to send LINE notification", err);
  }

  revalidatePath("/queue");
  revalidatePath("/");
}

export async function getApprovedSchedules() {
  const session = await getSession();
  if (!session) return [];

  return await dbVehicle.vehicle_Requests.findMany({
    where: { status: { in: ["Approved", "In_Transit", "Completed"] } },
    include: {
      car: true,
      driver: true,
    },
    orderBy: { startDateTime: "asc" },
  });
}

export async function getDriverStats() {
  const session = await getSession();
  if (!session) return [];

  const requests = await dbVehicle.vehicle_Requests.findMany({
    where: { status: { in: ["Approved", "In_Transit", "Completed"] }, driverId: { not: null } },
    include: { driver: true }
  });

  const drivers = await dbVehicle.master_Drivers.findMany();

  const stats = drivers.map(d => {
    const driverReqs = requests.filter(r => r.driverId === d.driverId);
    const inProvince = driverReqs.filter(r => r.province === "น่าน" || !r.province).length;
    const outProvince = driverReqs.filter(r => r.province && r.province !== "น่าน").length;
    return {
      driverId: d.driverId,
      driverName: d.driverName,
      totalTrips: driverReqs.length,
      inProvince,
      outProvince
    };
  });

  return stats;
}

export async function getVehicleStats() {
  const session = await getSession();
  if (!session) return [];

  const requests = await dbVehicle.vehicle_Requests.findMany({
    where: { status: { in: ["Approved", "In_Transit", "Completed"] }, carId: { not: null } },
    include: { car: true }
  });

  const vehicles = await dbVehicle.master_Vehicles.findMany();

  const stats = vehicles.map(v => {
    const vehicleReqs = requests.filter(r => r.carId === v.carId);
    const inProvince = vehicleReqs.filter(r => r.province === "น่าน" || !r.province).length;
    const outProvince = vehicleReqs.filter(r => r.province && r.province !== "น่าน").length;
    return {
      carId: v.carId,
      licensePlate: v.licensePlate,
      brand: v.brand || "ไม่ระบุยี่ห้อ",
      carType: v.carType || "ไม่ระบุประเภท",
      totalTrips: vehicleReqs.length,
      inProvince,
      outProvince
    };
  });

  return stats;
}

// 🤖 AI Vision OCR Integration via Gemini 2.5 Flash
export async function analyzeOdometerWithGemini(base64Image: string) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("⚠️ GEMINI_API_KEY is not configured in .env. Falling back to manual entry.");
    return { success: false, error: "ยังไม่ได้ระบุ GEMINI_API_KEY ในไฟล์ .env" };
  }

  try {
    let mimeType = "image/jpeg";
    let rawData = base64Image;
    if (base64Image.startsWith("data:")) {
      const parts = base64Image.split(";base64,");
      if (parts.length === 2) {
        mimeType = parts[0].replace("data:", "");
        rawData = parts[1];
      }
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  inlineData: {
                    mimeType: mimeType,
                    data: rawData,
                  },
                },
                {
                  text: "Analyze this car dashboard/instrument cluster image. Extract the actual total accumulated odometer reading (in kilometers). Look closely for the primary odometer number, which is usually a 5-6 digit integer, distinct from 'Trip A', 'Trip B', temperature, or clock. Return the response strictly as a JSON object with three keys: 'odometer' (integer or null if not found), 'confidence' (integer between 0 and 100 representing confidence score), and 'reason' (brief Thai description explaining the detection or lack thereof). Do not include any markdown block formatting or additional text. Example output: {\"odometer\": 124530, \"confidence\": 95, \"reason\": \"พบตัวเลขไมล์หลักชัดเจน\"}",
                },
              ],
            },
          ],
          generationConfig: {
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API returned status ${response.status}`);
    }

    const data = await response.json();
    const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textResult) {
      throw new Error("Empty response from Gemini API");
    }

    const parsedResult = JSON.parse(textResult.trim());
    return {
      success: true,
      odometer: parsedResult.odometer,
      confidence: parsedResult.confidence,
      reason: parsedResult.reason,
    };
  } catch (error: any) {
    console.error("❌ Gemini Vision OCR Error:", error);
    return { success: false, error: error.message || "ล้มเหลวในการส่งประมวลผลรูปภาพด้วย AI" };
  }
}

// 📦 Record Odometer Departure Action
export async function recordDepartureOdometer(requestId: number, odometer: number, base64Photo?: string) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const fs = await import("fs");
  const path = await import("path");

  // Get the vehicle request
  const request = await dbVehicle.vehicle_Requests.findUnique({
    where: { requestId },
    include: { car: true }
  });
  if (!request) throw new Error("Request not found");

  let photoPath = null;
  if (base64Photo) {
    let mimeType = "image/jpeg";
    let rawData = base64Photo;
    if (base64Photo.startsWith("data:")) {
      const parts = base64Photo.split(";base64,");
      if (parts.length === 2) {
        mimeType = parts[0].replace("data:", "");
        rawData = parts[1];
      }
    }
    const ext = mimeType.split("/")[1] || "jpg";
    const filename = `request_${requestId}_start.${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads", "odometer");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const filePath = path.join(uploadDir, filename);
    fs.writeFileSync(filePath, Buffer.from(rawData, "base64"));
    photoPath = `/uploads/odometer/${filename}`;
  }

  // Update vehicle request status to In_Transit, startOdometer, startOdometerPhoto, departureRecordedAt
  await dbVehicle.vehicle_Requests.update({
    where: { requestId },
    data: {
      status: "In_Transit",
      startOdometer: odometer,
      startOdometerPhoto: photoPath,
      departureRecordedAt: new Date()
    }
  });

  // Update master vehicle status to "In_Use"
  if (request.carId) {
    await dbVehicle.master_Vehicles.update({
      where: { carId: request.carId },
      data: { status: "In_Use" }
    });
  }

  revalidatePath("/queue");
  revalidatePath("/driver");
  revalidatePath("/");
  return { success: true };
}

// 🏁 Record Odometer Arrival Action
export async function recordArrivalOdometer(requestId: number, odometer: number, base64Photo?: string) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const fs = await import("fs");
  const path = await import("path");

  // Get the vehicle request
  const request = await dbVehicle.vehicle_Requests.findUnique({
    where: { requestId },
    include: { car: true }
  });
  if (!request) throw new Error("Request not found");

  let photoPath = null;
  if (base64Photo) {
    let mimeType = "image/jpeg";
    let rawData = base64Photo;
    if (base64Photo.startsWith("data:")) {
      const parts = base64Photo.split(";base64,");
      if (parts.length === 2) {
        mimeType = parts[0].replace("data:", "");
        rawData = parts[1];
      }
    }
    const ext = mimeType.split("/")[1] || "jpg";
    const filename = `request_${requestId}_end.${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads", "odometer");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const filePath = path.join(uploadDir, filename);
    fs.writeFileSync(filePath, Buffer.from(rawData, "base64"));
    photoPath = `/uploads/odometer/${filename}`;
  }

  const startOdom = request.startOdometer || odometer;
  const actualDistance = odometer - startOdom;

  // Update vehicle request status to Completed, endOdometer, endOdometerPhoto, actualDistance, arrivalRecordedAt
  await dbVehicle.vehicle_Requests.update({
    where: { requestId },
    data: {
      status: "Completed",
      endOdometer: odometer,
      endOdometerPhoto: photoPath,
      actualDistance: actualDistance > 0 ? actualDistance : 0,
      arrivalRecordedAt: new Date()
    }
  });

  // Update master vehicle status to "Ready"
  if (request.carId) {
    await dbVehicle.master_Vehicles.update({
      where: { carId: request.carId },
      data: { status: "Ready" }
    });
  }

  revalidatePath("/queue");
  revalidatePath("/driver");
  revalidatePath("/");
  return { success: true };
}

export async function cancelDispatchedQueue(requestId: number, reason: string) {
  const session = await getSession();
  const hasAccess = await checkUserSchedulerAccess(session);
  if (!hasAccess) throw new Error("Unauthorized");

  // 1. Get request detail
  const request = await dbVehicle.vehicle_Requests.findUnique({
    where: { requestId },
    include: { car: true, driver: true }
  });
  if (!request) throw new Error("Request not found");

  // 2. Update request status to "Cancelled" and store reason
  const updatedRequest = await dbVehicle.vehicle_Requests.update({
    where: { requestId },
    data: {
      status: "Cancelled",
      rejectionReason: reason
    },
    include: { car: true, driver: true }
  });

  // 3. Reset vehicle status if it was "In_Use"
  if (request.carId && request.car?.status === "In_Use") {
    await dbVehicle.master_Vehicles.update({
      where: { carId: request.carId },
      data: { status: "Ready" }
    });
  }

  // 4. Send LINE Notification to Driver
  try {
    if (request.driver?.lineUserId) {
      const { sendWorkflowNotification } = await import("@/lib/line");
      const { format } = await import("date-fns");
      const { th } = await import("date-fns/locale");
      
      const start = new Date(request.startDateTime);
      const end = new Date(request.endDateTime);
      const dateRange = `${format(start, "d MMM HH:mm", { locale: th })} - ${format(end, "d MMM HH:mm", { locale: th })}`;
      
      await sendWorkflowNotification(request.driver.lineUserId, "to_driver_cancelled", {
        requestId: request.requestId,
        requesterName: "ระบบยานพาหนะส่วนกลาง",
        purpose: request.purpose,
        destination: request.destination,
        dateRange: dateRange,
        carInfo: request.car?.licensePlate,
        driverName: request.driver.driverName,
        cancellationReason: reason
      });
    }
  } catch (err) {
    console.error("Failed to notify driver via LINE", err);
  }

  // 5. Send LINE Notification to Requester
  try {
    const requester = await dbJob.users.findUnique({
      where: { id: request.requesterStaffId }
    });
    if (requester?.line_user_id) {
      const { sendWorkflowNotification } = await import("@/lib/line");
      const { format } = await import("date-fns");
      const { th } = await import("date-fns/locale");
      
      const start = new Date(request.startDateTime);
      const end = new Date(request.endDateTime);
      const dateRange = `${format(start, "d MMM HH:mm", { locale: th })} - ${format(end, "d MMM HH:mm", { locale: th })}`;
      
      await sendWorkflowNotification(requester.line_user_id, "to_requester_cancelled", {
        requestId: request.requestId,
        requesterName: `${requester.firstname} ${requester.lastname}`,
        purpose: request.purpose,
        destination: request.destination,
        dateRange: dateRange,
        carInfo: request.car?.licensePlate,
        driverName: request.driver?.driverName,
        cancellationReason: reason
      });
    }
  } catch (err) {
    console.error("Failed to notify requester via LINE", err);
  }

  revalidatePath("/queue");
  revalidatePath("/driver");
  revalidatePath("/");
  
  return { success: true };
}
