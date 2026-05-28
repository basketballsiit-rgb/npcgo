"use server";

import { dbVehicle } from "@/lib/db.vehicle";
import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

async function checkUserResourceDeputyAccess(session: any) {
  if (!session) return false;
  if (session.role === "admin" || session.role === "evaluator") return true;

  if (session.role === "staff") {
    const deputySetting = await dbJob.settings.findUnique({
      where: { setting_key: "role_resource_deputy" }
    });
    if (deputySetting?.setting_value === session.userId.toString()) {
      return true;
    }
  }
  return false;
}

export async function getResourceApprovals() {
  const session = await getSession();
  const hasAccess = await checkUserResourceDeputyAccess(session);
  if (!hasAccess) return []; // Only admin/deputy can approve

  const requests = await dbVehicle.vehicle_Requests.findMany({
    where: { status: "Pending_Resource_Deputy_Approval" },
    include: {
      car: true,
      driver: true,
    },
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

export async function updateResourceApprovalStatus(requestId: number, newStatus: string, rejectionReason?: string) {
  const session = await getSession();
  const hasAccess = await checkUserResourceDeputyAccess(session);
  if (!hasAccess) throw new Error("Unauthorized");

  const updateData: any = { status: newStatus };
  if (newStatus === "Rejected" && rejectionReason) {
    updateData.rejectionReason = rejectionReason;
  }

  const request = await dbVehicle.vehicle_Requests.update({
    where: { requestId },
    data: updateData,
    include: { car: true, driver: true }
  });

  if (newStatus === "Pending_Director_Approval") {
    // Notify Director
    try {
      const roleAssignment = await dbJob.settings.findUnique({
        where: { setting_key: "role_director" }
      });

      if (roleAssignment?.setting_value) {
        const directorUserId = parseInt(roleAssignment.setting_value);
        const director = await dbJob.users.findUnique({
          where: { id: directorUserId }
        });
        
        if (director?.line_user_id) {
          const requester = await dbJob.users.findUnique({ where: { id: request.requesterStaffId } });
          const { sendWorkflowNotification } = await import("@/lib/line");
          const { format } = await import("date-fns");
          const { th } = await import("date-fns/locale");
          
          const start = new Date(request.startDateTime);
          const end = new Date(request.endDateTime);
          const dateRange = `${format(start, "d MMM HH:mm", { locale: th })} - ${format(end, "d MMM HH:mm", { locale: th })}`;
          
          await sendWorkflowNotification(director.line_user_id, "to_director", {
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
      console.error("Failed to send LINE to Director", err);
    }
  }

  revalidatePath("/resource-approvals");
  revalidatePath("/");
}
