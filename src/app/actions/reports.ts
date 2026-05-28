"use server";

import { dbVehicle } from "@/lib/db.vehicle";
import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";
import { startOfDay, endOfDay } from "date-fns";

export async function getReportData(startDateStr: string, endDateStr: string, statusFilter: string) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  const startDate = startDateStr ? startOfDay(new Date(startDateStr)) : undefined;
  const endDate = endDateStr ? endOfDay(new Date(endDateStr)) : undefined;

  // Build where clause
  const where: any = {};
  
  if (startDate && endDate) {
    where.createdAt = {
      gte: startDate,
      lte: endDate,
    };
  }

  if (statusFilter && statusFilter !== "all") {
    where.status = statusFilter;
  }

  // Fetch from DB
  const requests = await dbVehicle.vehicle_Requests.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      car: true,
      driver: true,
    }
  });

  if (requests.length === 0) return [];

  // Fetch users and departments
  const staffIds = Array.from(new Set(requests.map(r => r.requesterStaffId)));
  
  const staffMembers = await dbJob.users.findMany({
    where: { id: { in: staffIds } },
    include: { departments: true }
  });

  // Map data together
  return requests.map(req => {
    const staff = staffMembers.find(s => s.id === req.requesterStaffId);
    return {
      requestId: req.requestId,
      createdAt: req.createdAt,
      startDateTime: req.startDateTime,
      endDateTime: req.endDateTime,
      destination: req.destination,
      purpose: req.purpose,
      passengerCount: req.passengerCount,
      status: req.status,
      requesterName: staff ? `${staff.firstname} ${staff.lastname}` : "Unknown",
      departmentName: staff?.departments?.name || "Unknown",
      carLicense: req.car?.licensePlate || "-",
      driverName: req.driver?.driverName || "-",
    };
  });
}
