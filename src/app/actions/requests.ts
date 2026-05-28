"use server";

import { z } from "zod";
import { dbVehicle } from "@/lib/db.vehicle";
import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";
import { sendWorkflowNotification } from "@/lib/line";
import { getSettings } from "@/app/actions/settings";
import { format } from "date-fns";

const requestSchema = z.object({
  purpose: z.string().min(1, "กรุณาระบุวัตถุประสงค์"),
  province: z.string().min(1, "กรุณาระบุจังหวัดปลายทาง"),
  destination: z.string().min(1, "กรุณาระบุสถานที่ไป"),
  refOrderNumber: z.string().optional(),
  refOrderDate: z.string().optional(),
  startDateTime: z.string().min(1, "กรุณาระบุวันเวลาเดินทางไป"),
  endDateTime: z.string().min(1, "กรุณาระบุวันเวลาเดินทางกลับ"),
  passengerCount: z.coerce.number().min(1, "จำนวนผู้โดยสารต้องมากกว่า 0"),
  passengerNames: z.string().min(1, "กรุณาระบุรายชื่อผู้โดยสาร"),
  isRecurring: z.coerce.boolean().optional().default(false),
  recurrencePattern: z.string().optional(),
  recurrenceEndDate: z.string().optional(),
});

export async function submitVehicleRequest(formData: FormData) {
  const session = await getSession();
  if (!session) {
    return { success: false, error: "Unauthorized" };
  }

  const data = Object.fromEntries(formData.entries());
  
  // แปลงค่า isRecurring จาก Checkbox / String ให้เป็น Boolean
  if (data.isRecurring === "true" || data.isRecurring === "on") {
    data.isRecurring = "true";
  } else {
    data.isRecurring = "false";
  }
  
  const validatedFields = requestSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { 
      purpose, province, destination, refOrderNumber, refOrderDate, 
      startDateTime, endDateTime, passengerCount, passengerNames,
      isRecurring, recurrencePattern, recurrenceEndDate
    } = validatedFields.data;

    let primaryRequest: any = null;
    let parentId: number | null = null;
    const recurrenceGroupId = isRecurring ? (await import("crypto")).randomUUID() : null;

    if (isRecurring && recurrencePattern && recurrenceEndDate) {
      const startDateObj = new Date(startDateTime);
      const endDateObj = new Date(endDateTime);
      const recurrenceEndObj = new Date(recurrenceEndDate + "T23:59:59");
      
      const durationMs = endDateObj.getTime() - startDateObj.getTime();
      const tempDate = new Date(startDateObj);
      
      const occurrences: { start: Date; end: Date }[] = [];
      
      while (tempDate <= recurrenceEndObj) {
        let shouldInclude = false;
        
        if (recurrencePattern === "DAILY") {
          shouldInclude = true;
        } else if (recurrencePattern === "WEEKDAYS") {
          const day = tempDate.getDay();
          shouldInclude = day >= 1 && day <= 5; // วันจันทร์ - ศุกร์
        } else if (recurrencePattern === "WEEKLY") {
          shouldInclude = tempDate.getDay() === startDateObj.getDay(); // วันเดียวกันในแต่ละสัปดาห์
        }
        
        if (shouldInclude) {
          const occStart = new Date(tempDate);
          occStart.setHours(startDateObj.getHours(), startDateObj.getMinutes(), 0, 0);
          
          const occEnd = new Date(occStart.getTime() + durationMs);
          occurrences.push({ start: occStart, end: occEnd });
        }
        
        tempDate.setDate(tempDate.getDate() + 1);
      }

      // จำกัดไม่เกิน 60 เที่ยวเพื่อป้องกันการส่งข้อมูลล้นระบบ
      const finalOccurrences = occurrences.slice(0, 60);

      if (finalOccurrences.length === 0) {
        return { success: false, error: "ไม่พบวันที่เดินทางที่ตรงกับรูปแบบการจองซ้ำที่เลือก" };
      }

      for (let i = 0; i < finalOccurrences.length; i++) {
        const occ = finalOccurrences[i];
        const newReq: any = await dbVehicle.vehicle_Requests.create({
          data: {
            requesterStaffId: parseInt(session.userId),
            purpose,
            province,
            destination,
            refOrderNumber: refOrderNumber || null,
            refOrderDate: refOrderDate ? new Date(refOrderDate) : null,
            startDateTime: occ.start,
            endDateTime: occ.end,
            passengerCount,
            passengerNames,
            status: "Pending_Dept_Approval",
            isRecurring: true,
            recurrencePattern,
            recurrenceGroupId,
            parentRequestId: parentId as number | null,
          }
        });
        
        if (i === 0) {
          parentId = newReq.requestId;
          primaryRequest = newReq;
        }
      }
    } else {
      // การจองปกติ เที่ยวเดียว
      const newRequest = await dbVehicle.vehicle_Requests.create({
        data: {
          requesterStaffId: parseInt(session.userId),
          purpose,
          province,
          destination,
          refOrderNumber: refOrderNumber || null,
          refOrderDate: refOrderDate ? new Date(refOrderDate) : null,
          startDateTime: new Date(startDateTime),
          endDateTime: new Date(endDateTime),
          passengerCount,
          passengerNames,
          status: "Pending_Dept_Approval",
        }
      });
      primaryRequest = newRequest;
    }

    if (!primaryRequest) {
      return { success: false, error: "เกิดข้อผิดพลาดในการสร้างรายการขอใช้รถ" };
    }

    // 2. Find Deputy Director (รองผู้อำนวยการฝ่าย) based on mapping
    const requester = await dbJob.users.findUnique({
      where: { id: parseInt(session.userId) }
    });

    if (requester?.department_id) {
      // Find which division this department belongs to
      const deptMapping = await dbJob.settings.findUnique({
        where: { setting_key: `dept_map_${requester.department_id}` }
      });

      if (deptMapping?.setting_value) {
        // Find which user is assigned to this division role
        const roleAssignment = await dbJob.settings.findUnique({
          where: { setting_key: deptMapping.setting_value }
        });

        if (roleAssignment?.setting_value) {
          const deputyUserId = parseInt(roleAssignment.setting_value);
          const deputy = await dbJob.users.findUnique({
            where: { id: deputyUserId }
          });

          if (deputy?.line_user_id) {
            let dateRange = `${format(new Date(startDateTime), 'dd/MM/yyyy HH:mm')} - ${format(new Date(endDateTime), 'dd/MM/yyyy HH:mm')}`;
            if (isRecurring && recurrencePattern && recurrenceEndDate) {
              const thaiPattern = recurrencePattern === "DAILY" ? "ทุกวัน" : recurrencePattern === "WEEKDAYS" ? "ทุกจันทร์-ศุกร์" : "ทุกสัปดาห์";
              dateRange = `[ตารางประจำ-${thaiPattern}] ${format(new Date(startDateTime), 'dd/MM/yyyy')} ถึง ${format(new Date(recurrenceEndDate), 'dd/MM/yyyy')}`;
            }

            await sendWorkflowNotification(deputy.line_user_id, "to_dept_head", {
              requestId: primaryRequest.requestId,
              requesterName: session.name,
              purpose,
              destination,
              dateRange,
            });
          }
        }
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting vehicle request:", error);
    return { success: false, error: "Internal Server Error" };
  }
}

export async function getMyRequests() {
  const session = await getSession();
  if (!session) return [];

  try {
    const userId = parseInt(session.userId);
    const isAdmin = session.role === "admin";
    
    // If admin, return all requests. Otherwise, return only user's own requests.
    const requests = await dbVehicle.vehicle_Requests.findMany({
      where: isAdmin ? {} : { requesterStaffId: userId },
      include: {
        car: true,
        driver: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return requests;
  } catch (error) {
    console.error("Error fetching requests:", error);
    return [];
  }
}

export async function deleteVehicleRequest(requestId: number) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    throw new Error("Unauthorized");
  }

  try {
    // Delete any associated fuel logs first to prevent foreign key errors
    await dbVehicle.vehicle_Fuel_Logs.deleteMany({
      where: { requestId }
    });

    // Delete the request
    await dbVehicle.vehicle_Requests.delete({
      where: { requestId }
    });

    return { success: true };
  } catch (error: any) {
    console.error("Failed to delete request:", error);
    throw new Error(`ลบคำขอใช้รถล้มเหลว: ${error.message}`);
  }
}

export async function editVehicleRequest(requestId: number, formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const purpose = formData.get("purpose") as string;
  const destination = formData.get("destination") as string;
  const province = formData.get("province") as string;
  const startDateTime = formData.get("startDateTime") as string;
  const endDateTime = formData.get("endDateTime") as string;
  const passengerCount = parseInt(formData.get("passengerCount") as string) || 1;
  const passengerNames = formData.get("passengerNames") as string;
  const status = formData.get("status") as string;
  const refOrderNumber = formData.get("refOrderNumber") as string;

  if (!purpose || !destination || !startDateTime || !endDateTime) {
    throw new Error("กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน");
  }

  try {
    await dbVehicle.vehicle_Requests.update({
      where: { requestId },
      data: {
        purpose,
        destination,
        province: province || "น่าน",
        startDateTime: new Date(startDateTime),
        endDateTime: new Date(endDateTime),
        passengerCount,
        passengerNames,
        status,
        refOrderNumber: refOrderNumber || null,
      }
    });

    return { success: true };
  } catch (error: any) {
    console.error("Failed to edit request:", error);
    throw new Error(`แก้ไขคำขอใช้รถล้มเหลว: ${error.message}`);
  }
}

export async function saveUserSignature(base64Data: string) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const userId = parseInt(session.userId);
  const fs = await import("fs");
  const path = await import("path");

  const dirPath = path.join(process.cwd(), "public", "signatures");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const destPath = path.join(dirPath, `user_${userId}.png`);

  const base64Image = base64Data
    .replace(/^data:image\/png;base64,/, "")
    .replace(/^data:image\/jpeg;base64,/, "")
    .replace(/^data:image\/jpg;base64,/, "");

  const buffer = Buffer.from(base64Image, "base64");
  fs.writeFileSync(destPath, buffer);
  
  return { success: true };
}
