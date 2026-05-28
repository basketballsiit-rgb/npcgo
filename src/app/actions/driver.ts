"use server";

import { dbVehicle } from "@/lib/db.vehicle";
import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";

export async function getMyDriverTrips() {
  const session = await getSession();
  if (!session) return [];

  const userId = parseInt(session.userId);
  
  // Find the user's lineUserId or name to associate with Master_Drivers
  const user = await dbJob.users.findUnique({
    where: { id: userId },
    select: { firstname: true, lastname: true, line_user_id: true }
  });

  if (!user) return [];

  const fullName = `${user.firstname} ${user.lastname}`.trim();

  // Find the driver record that matches either lineUserId or driverName
  const driver = await dbVehicle.master_Drivers.findFirst({
    where: {
      OR: [
        user.line_user_id ? { lineUserId: user.line_user_id } : { driverId: -1 }, // fallback
        { driverName: { contains: fullName } }
      ]
    }
  });

  if (!driver) return [];

  // Fetch requests for this driver that are Approved, In_Transit, or Completed
  const requests = await dbVehicle.vehicle_Requests.findMany({
    where: {
      driverId: driver.driverId,
      status: { in: ["Approved", "In_Transit", "Completed"] }
    },
    include: {
      car: true
    },
    orderBy: { startDateTime: "asc" }
  });

  // Fetch requester names
  const requesterStaffIds = requests.map(r => r.requesterStaffId);
  const requesters = await dbJob.users.findMany({
    where: { id: { in: requesterStaffIds } },
    select: { id: true, firstname: true, lastname: true }
  });

  return requests.map(req => {
    const requester = requesters.find(r => r.id === req.requesterStaffId);
    return {
      ...req,
      requesterName: requester ? `${requester.firstname} ${requester.lastname}` : "ไม่ทราบชื่อ"
    };
  });
}
