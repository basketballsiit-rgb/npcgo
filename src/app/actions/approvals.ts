"use server";

import { dbVehicle } from "@/lib/db.vehicle";
import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export async function getPendingApprovals() {
  const session = await getSession();
  if (!session) return [];

  // Assuming the logged-in user is an Approver (evaluator/admin)
  // Get their own user record to find their department
  const currentUser = await dbJob.users.findUnique({
    where: { id: parseInt(session.userId) },
  });

  if (!currentUser) return [];

  // If they are an admin, they can see all pending requests
  const isAdmin = session.role === "admin";
  
  let staffIds: number[] = [];
  let staffInDepts: any[] = [];
  
  if (isAdmin) {
    staffInDepts = await dbJob.users.findMany({
      select: { id: true, firstname: true, lastname: true },
    });
    staffIds = staffInDepts.map((s) => s.id);
  } else {
    // Find roles assigned to the current user
    const assignedRoles = await dbJob.settings.findMany({
      where: { setting_value: currentUser.id.toString() }
    });
    const roleKeys = assignedRoles.map(r => r.setting_key);
    
    // Find departments mapped to these roles
    const deptMappings = await dbJob.settings.findMany({
      where: {
        setting_key: { startsWith: "dept_map_" },
        setting_value: { in: roleKeys }
      }
    });
    
    const mappedDeptIds = deptMappings
      .map(m => parseInt(m.setting_key.replace("dept_map_", "")))
      .filter(id => !isNaN(id));
      
    // Include user's own department as well
    if (currentUser.department_id && !mappedDeptIds.includes(currentUser.department_id)) {
      mappedDeptIds.push(currentUser.department_id);
    }
    
    staffInDepts = await dbJob.users.findMany({
      where: { department_id: { in: mappedDeptIds } },
      select: { id: true, firstname: true, lastname: true },
    });
    staffIds = staffInDepts.map((s) => s.id);
  }

  // Get requests
  const requests = await dbVehicle.vehicle_Requests.findMany({
    where: {
      status: "Pending_Dept_Approval",
      requesterStaffId: { in: staffIds },
    },
    orderBy: { createdAt: "desc" },
  });

  // Map names
  return requests.map((req) => {
    const staff = staffInDepts.find((s) => s.id === req.requesterStaffId);
    return {
      ...req,
      requesterName: staff ? `${staff.firstname} ${staff.lastname}` : "Unknown",
    };
  });
}

export async function updateRequestStatus(requestId: number, newStatus: string, rejectionReason?: string) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const updateData: any = { status: newStatus };
  if (newStatus === "Rejected" && rejectionReason) {
    updateData.rejectionReason = rejectionReason;
  }

  const request = await dbVehicle.vehicle_Requests.update({
    where: { requestId },
    data: updateData,
  });

  if (newStatus === "Pending_Scheduler") {
    // Notify Scheduler (from mapped role)
    try {
      const roleAssignment = await dbJob.settings.findUnique({
        where: { setting_key: "role_scheduler" }
      });
      
      if (roleAssignment?.setting_value) {
        const schedulerUserId = parseInt(roleAssignment.setting_value);
        const scheduler = await dbJob.users.findUnique({
          where: { id: schedulerUserId }
        });
        
        if (scheduler?.line_user_id) {
          const requester = await dbJob.users.findUnique({ where: { id: request.requesterStaffId } });
          const { sendWorkflowNotification } = await import("@/lib/line");
          const { format } = await import("date-fns");
          const { th } = await import("date-fns/locale");
          
          const start = new Date(request.startDateTime);
          const end = new Date(request.endDateTime);
          const dateRange = `${format(start, "d MMM HH:mm", { locale: th })} - ${format(end, "d MMM HH:mm", { locale: th })}`;
          
          await sendWorkflowNotification(scheduler.line_user_id, "to_scheduler", {
            requestId: request.requestId,
            requesterName: requester ? `${requester.firstname} ${requester.lastname}` : "ไม่ทราบชื่อ",
            purpose: request.purpose,
            destination: request.destination,
            dateRange: dateRange,
          });
        }
      }
    } catch (err) {
      console.error("Failed to send LINE notification to scheduler", err);
    }
  }

  revalidatePath("/approvals");
  revalidatePath("/queue");
}

export async function getUserSignatureInfo() {
  const session = await getSession();
  if (!session) return { hasSignature: false, signatureUrl: null };
  
  const userId = parseInt(session.userId);
  const fs = await import("fs");
  const path = await import("path");
  const filePath = path.join(process.cwd(), "public", "signatures", `user_${userId}.png`);
  const hasSignature = fs.existsSync(filePath);
  
  return {
    hasSignature,
    signatureUrl: hasSignature ? `/npcgo/signatures/user_${userId}.png?v=${Date.now()}` : null
  };
}

export async function saveApproverSignature(
  requestId: number,
  roleKey: string,
  signatureOption: "saved" | "fresh",
  freshBase64Data?: string
) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const userId = parseInt(session.userId);
  const fs = await import("fs");
  const path = await import("path");

  const dirPath = path.join(process.cwd(), "public", "signatures", "requests");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const destPath = path.join(dirPath, `request_${requestId}_${roleKey}.png`);

  if (signatureOption === "saved") {
    // Copy the user's profile signature
    const sourcePath = path.join(process.cwd(), "public", "signatures", `user_${userId}.png`);
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      return { success: true };
    } else {
      throw new Error("ไม่พบรูปภาพลายเซ็นประจำตัวในโปรไฟล์ของคุณ กรุณาเลือก 'เซ็นสดใหม่' หรือตั้งค่าลายเซ็นในโปรไฟล์ของคุณก่อน");
    }
  } else if (signatureOption === "fresh" && freshBase64Data) {
    // Save the fresh canvas data
    const base64Image = freshBase64Data.replace(/^data:image\/png;base64,/, "");
    const buffer = Buffer.from(base64Image, "base64");
    fs.writeFileSync(destPath, buffer);

    // AUTO-SAVE to user's profile signature so they can reuse it next time!
    const userProfileDir = path.join(process.cwd(), "public", "signatures");
    if (!fs.existsSync(userProfileDir)) {
      fs.mkdirSync(userProfileDir, { recursive: true });
    }
    const userProfilePath = path.join(userProfileDir, `user_${userId}.png`);
    fs.writeFileSync(userProfilePath, buffer);

    return { success: true };
  } else {
    throw new Error("ข้อมูลลายเซ็นไม่ถูกต้อง");
  }
}

export async function getCurrentUserRole() {
  const session = await getSession();
  return session?.role || "user";
}
