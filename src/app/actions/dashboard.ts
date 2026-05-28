"use server";

import { dbVehicle } from "@/lib/db.vehicle";
import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";
import { subDays, startOfDay, endOfDay } from "date-fns";

export async function getDashboardStats() {
  const session = await getSession();
  if (!session) return null;

  const isAdmin = session.role === "admin";
  const userId = parseInt(session.userId);

  // If normal staff, only count their requests
  const whereClause = isAdmin ? {} : { requesterStaffId: userId };

  // 1. Total Requests
  const totalRequests = await dbVehicle.vehicle_Requests.count({
    where: whereClause,
  });

  // 2. Pending Approvals (Waiting for Dept, Scheduler, Resource Deputy, or Director)
  const pendingApprovals = await dbVehicle.vehicle_Requests.count({
    where: {
      ...whereClause,
      status: { 
        in: [
          "Pending_Dept_Approval", 
          "Pending_Scheduler", 
          "Pending_Resource_Deputy_Approval", 
          "Pending_Director_Approval"
        ] 
      },
    },
  });

  // 3. Approved / Scheduled
  const approvedRequests = await dbVehicle.vehicle_Requests.count({
    where: {
      ...whereClause,
      status: "Approved",
    },
  });

  // 4. Available Vehicles (Always show total available to all)
  const availableVehicles = await dbVehicle.master_Vehicles.count({
    where: { status: "Ready" },
  });

  return {
    totalRequests,
    pendingApprovals,
    approvedRequests,
    availableVehicles,
  };
}

export async function getRecentRequests() {
  const session = await getSession();
  if (!session) return [];

  const isAdmin = session.role === "admin";
  const userId = parseInt(session.userId);

  const requests = await dbVehicle.vehicle_Requests.findMany({
    where: isAdmin ? {} : { requesterStaffId: userId },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  // Fetch names and departments
  const staffIds = requests.map(r => r.requesterStaffId);
  const staff = await dbJob.users.findMany({
    where: { id: { in: staffIds } },
    select: { 
      id: true, 
      firstname: true, 
      lastname: true,
      departments: {
        select: {
          name: true
        }
      }
    }
  });

  return requests.map(req => {
    const user = staff.find(s => s.id === req.requesterStaffId);
    return {
      ...req,
      requesterName: user ? `${user.firstname} ${user.lastname}` : "Unknown",
      departmentName: user?.departments?.name || "ไม่ระบุฝ่าย/แผนก",
    };
  });
}

export async function getChartData() {
  const session = await getSession();
  if (!session) return [];

  const isAdmin = session.role === "admin";
  const userId = parseInt(session.userId);
  const whereClause = isAdmin ? {} : { requesterStaffId: userId };

  // Last 7 days chart
  const data = [];
  for (let i = 6; i >= 0; i--) {
    const targetDate = subDays(new Date(), i);
    
    const count = await dbVehicle.vehicle_Requests.count({
      where: {
        ...whereClause,
        createdAt: {
          gte: startOfDay(targetDate),
          lte: endOfDay(targetDate),
        },
      },
    });

    data.push({
      date: targetDate.toLocaleDateString('th-TH', { weekday: 'short' }),
      requests: count,
    });
  }

  return data;
}
