"use server";

import { dbVehicle } from "@/lib/db.vehicle";
import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";

export async function getPrintData(requestId: number) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const request = await dbVehicle.vehicle_Requests.findUnique({
    where: { requestId },
    include: {
      car: true,
      driver: true,
    }
  });

  if (!request) return null;

  const requester = await dbJob.users.findUnique({
    where: { id: request.requesterStaffId },
    include: { departments: true }
  });

  return {
    ...request,
    requesterName: requester ? `${requester.firstname} ${requester.lastname}` : "Unknown",
    departmentName: requester?.departments?.name || "Unknown",
  };
}
