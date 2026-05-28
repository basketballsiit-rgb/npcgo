"use client";

import { useEffect, useState } from "react";
import { getPendingQueue, getAvailableResources, assignVehicle, getApprovedSchedules, getDriverStats, getVehicleStats, recordDepartureOdometer, recordArrivalOdometer, cancelDispatchedQueue } from "@/app/actions/queue";
import { saveApproverSignature } from "@/app/actions/approvals";
import { OdometerScannerDialog } from "@/components/ui/odometer-scanner-dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  format, isBefore, isAfter, isEqual,
  startOfMonth, endOfMonth, startOfWeek, endOfWeek,
  eachDayOfInterval, addMonths, subMonths, isSameMonth, isSameDay, isToday
} from "date-fns";
import { th } from "date-fns/locale";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Printer, ChevronLeft, ChevronRight, CalendarDays, ShieldAlert } from "lucide-react";
import Swal from "sweetalert2";
import { SignatureApprovalDialog } from "@/components/ui/signature-approval-dialog";

type RequestType = Awaited<ReturnType<typeof getPendingQueue>>[0];
type ResourcesType = Awaited<ReturnType<typeof getAvailableResources>>;

export default function QueuePage() {
  const [requests, setRequests] = useState<RequestType[]>([]);
  const [resources, setResources] = useState<ResourcesType>({ vehicles: [], drivers: [] });
  const [schedules, setSchedules] = useState<any[]>([]);
  const [driverStats, setDriverStats] = useState<any[]>([]);
  const [vehicleStats, setVehicleStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  
  // Odometer scanner modal states
  const [odoOpen, setOdoOpen] = useState(false);
  const [odoType, setOdoType] = useState<"departure" | "arrival">("departure");
  const [activeOdoRequest, setActiveOdoRequest] = useState<any | null>(null);
  
  // Signature modal states
  const [sigOpen, setSigOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);
  const [selectedDriverId, setSelectedDriverId] = useState<number | null>(null);
  
  // State to track selection for each row { requestId: { carId, driverId } }
  const [assignments, setAssignments] = useState<Record<number, { carId: number; driverId: number }>>({});

  // 🎨 Car-based dynamic gradient coloring for visual calendar categories
  const getCarColorClasses = (carId: number) => {
    const colors = [
      { bg: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700", text: "text-white", border: "border-blue-600", label: "text-blue-100" },
      { bg: "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700", text: "text-white", border: "border-teal-600", label: "text-teal-100" },
      { bg: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700", text: "text-white", border: "border-amber-600", label: "text-amber-100" },
      { bg: "bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700", text: "text-white", border: "border-indigo-600", label: "text-indigo-100" },
      { bg: "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700", text: "text-white", border: "border-pink-600", label: "text-pink-100" },
      { bg: "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700", text: "text-white", border: "border-cyan-600", label: "text-cyan-100" },
      { bg: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700", text: "text-white", border: "border-purple-600", label: "text-purple-100" },
      { bg: "bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700", text: "text-white", border: "border-rose-600", label: "text-rose-100" },
    ];
    return colors[carId % colors.length];
  };

  // 📅 Calculate Month Days
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });
  const dayInterval = eachDayOfInterval({ start: startDate, end: endDate });

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const setTodayMonth = () => {
    setCurrentMonth(new Date());
    setSelectedDate(new Date());
  };

  // ❌ ยืนยันและดำเนินการยกเลิกคิวงานพร้อมแจ้งเตือนคนขับและผู้ขอใช้รถ
  const handleCancelQueueConfirm = async (sched: any) => {
    const { value: reason } = await Swal.fire({
      title: "ยืนยันยกเลิกคิวรถราชการ?",
      input: "textarea",
      inputLabel: "กรุณาระบุเหตุผลการยกเลิกคิวงาน (ระบบจะส่ง LINE แจ้งเตือนคนขับและผู้ขอโดยตรง)",
      inputPlaceholder: "ระบุเหตุผลการยกเลิกที่นี่...",
      showCancelButton: true,
      confirmButtonText: "ยืนยันยกเลิกคิวรถ",
      cancelButtonText: "ย้อนกลับ",
      confirmButtonColor: "#e11d48",
      cancelButtonColor: "#6b7280",
      customClass: {
        popup: 'rounded-3xl p-6 shadow-xl border border-slate-100 bg-white/95 backdrop-blur-md',
        confirmButton: 'rounded-xl font-bold text-sm px-6 py-2.5 shadow-sm',
        cancelButton: 'rounded-xl font-bold text-sm px-6 py-2.5 shadow-sm'
      },
      inputValidator: (value) => {
        if (!value) {
          return "คุณจำเป็นต้องระบุเหตุผลเพื่อแจ้งเตือนคนขับและผู้เกี่ยวข้อง!";
        }
      }
    });

    if (reason) {
      Swal.fire({
        title: "กำลังดำเนินการ...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      try {
        await cancelDispatchedQueue(sched.requestId, reason);
        Swal.fire({
          title: "สำเร็จ!",
          text: "ระบบได้ยกเลิกคิวและส่ง LINE แจ้งเตือนผู้ขับรถและผู้ขอเรียบร้อยแล้ว",
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
        loadData();
      } catch (err) {
        console.error("Failed to cancel queue:", err);
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "ไม่สามารถยกเลิกคิวจัดรถได้ กรุณาลองใหม่อีกครั้ง",
          icon: "error",
          confirmButtonText: "ตกลง"
        });
      }
    }
  };

  // 🔍 Show high-fidelity schedule popup on calendar card tap
  const handleShowScheduleDetail = (sched: any) => {
    const startStr = format(new Date(sched.startDateTime), "d MMMM yyyy เวลา HH:mm น.", { locale: th });
    const endStr = format(new Date(sched.endDateTime), "d MMMM yyyy เวลา HH:mm น.", { locale: th });
    
    let actionButtonsHtml = `
      <div class="flex flex-col gap-2 mt-4">
        <a href="/npcgo/print/request/${sched.requestId}" target="_blank" class="swal2-confirm swal2-styled flex items-center justify-center gap-2 bg-slate-600 hover:bg-slate-700 font-bold" style="margin: 0; background-color: #475569; border-radius: 12px; font-size: 13px; padding: 10px 14px;">
          🖨️ พิมพ์ใบงานขออนุญาตใช้รถ
        </a>
    `;

    if (sched.status === "Approved") {
      actionButtonsHtml += `
        <button id="swal-record-odo-dep" class="swal2-confirm swal2-styled bg-indigo-600 hover:bg-indigo-700 font-bold" style="margin: 0; background-color: #4f46e5; border-radius: 12px; font-size: 13px; padding: 10px 14px;">
          🛫 บันทึกเลขไมล์ออกเดินทาง
        </button>
      `;
    } else if (sched.status === "In_Transit") {
      actionButtonsHtml += `
        <button id="swal-record-odo-arr" class="swal2-confirm swal2-styled bg-amber-600 hover:bg-amber-700 animate-pulse font-bold" style="margin: 0; background-color: #d97706; border-radius: 12px; font-size: 13px; padding: 10px 14px;">
          🏁 บันทึกเลขไมล์กลับคลัง
        </button>
      `;
    }

    if (sched.status === "Approved" || sched.status === "In_Transit") {
      actionButtonsHtml += `
        <button id="swal-cancel-queue" class="swal2-confirm swal2-styled bg-rose-600 hover:bg-rose-700 font-bold" style="margin: 0; background-color: #e11d48; border-radius: 12px; font-size: 13px; padding: 10px 14px;">
          ❌ ยกเลิกคิวที่จัดแล้ว
        </button>
      `;
    }

    actionButtonsHtml += `</div>`;

    Swal.fire({
      title: `<span class="text-lg font-black text-slate-800 font-bold">รายละเอียดกำหนดการเดินทาง</span>`,
      html: `
        <div class="text-left space-y-3 text-sm border-t border-slate-100 pt-3">
          <div class="grid grid-cols-3 gap-1">
            <span class="text-slate-400 font-semibold">ปลายทาง:</span>
            <span class="col-span-2 font-black text-slate-800 font-bold">${sched.destination} (${sched.province})</span>
          </div>
          <div class="grid grid-cols-3 gap-1">
            <span class="text-slate-400 font-semibold">วัตถุประสงค์:</span>
            <span class="col-span-2 text-slate-600 font-medium">${sched.purpose || "-"}</span>
          </div>
          <div class="grid grid-cols-3 gap-1">
            <span class="text-slate-400 font-semibold">เวลาไป:</span>
            <span class="col-span-2 text-slate-600 font-bold">${startStr}</span>
          </div>
          <div class="grid grid-cols-3 gap-1">
            <span class="text-slate-400 font-semibold">เวลากลับ:</span>
            <span class="col-span-2 text-slate-600 font-bold">${endStr}</span>
          </div>
          <div class="h-[1px] bg-slate-100 my-2"></div>
          <div class="grid grid-cols-3 gap-1">
            <span class="text-slate-400 font-semibold">รถยนต์:</span>
            <span class="col-span-2 font-black text-slate-800 font-bold">${sched.car?.licensePlate} (${sched.car?.brand || ""} - ${sched.car?.carType || ""})</span>
          </div>
          <div class="grid grid-cols-3 gap-1">
            <span class="text-slate-400 font-semibold">คนขับ:</span>
            <span class="col-span-2 font-black text-slate-800 font-bold">${sched.driver?.driverName} (โทร: ${sched.driver?.phone || "-"})</span>
          </div>
          <div class="grid grid-cols-3 gap-1">
            <span class="text-slate-400 font-semibold">สถานะ:</span>
            <span class="col-span-2 font-bold text-slate-800">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${
                sched.status === "Completed" ? "bg-green-100 text-green-700" :
                sched.status === "In_Transit" ? "bg-amber-100 text-amber-700 animate-pulse" : "bg-blue-100 text-blue-700"
              }">
                ${sched.status === "Completed" ? "เสร็จสิ้น" : sched.status === "In_Transit" ? "กำลังวิ่ง" : "อนุมัติแล้ว"}
              </span>
            </span>
          </div>
          ${sched.status === "Completed" ? `
            <div class="h-[1px] bg-slate-100 my-2"></div>
            <div class="grid grid-cols-3 gap-1 text-green-700 font-bold">
              <span>ระยะทางจริง:</span>
              <span class="col-span-2">${sched.actualDistance || 0} กิโลเมตร</span>
            </div>
            <div class="grid grid-cols-3 gap-1 text-xs text-slate-500 font-medium">
              <span>เลขไมล์สะสม:</span>
              <span class="col-span-2">ไมล์ออก: ${sched.startOdometer || 0} กม. | ไมล์เข้า: ${sched.endOdometer || 0} กม.</span>
            </div>
          ` : ""}
        </div>
        ${actionButtonsHtml}
      `,
      showConfirmButton: true,
      confirmButtonText: "ปิดหน้าต่าง",
      confirmButtonColor: "#14b8a6",
      customClass: {
        popup: 'rounded-3xl p-6 shadow-xl border border-slate-100 bg-white/95 backdrop-blur-md',
        confirmButton: 'rounded-xl font-bold text-sm px-6 py-2.5 shadow-sm'
      },
      didOpen: () => {
        const depBtn = document.getElementById("swal-record-odo-dep");
        const arrBtn = document.getElementById("swal-record-odo-arr");
        const cancelBtn = document.getElementById("swal-cancel-queue");
        
        if (depBtn) {
          depBtn.onclick = () => {
            Swal.close();
            setActiveOdoRequest(sched);
            setOdoType("departure");
            setOdoOpen(true);
          };
        }
        if (arrBtn) {
          arrBtn.onclick = () => {
            Swal.close();
            setActiveOdoRequest(sched);
            setOdoType("arrival");
            setOdoOpen(true);
          };
        }
        if (cancelBtn) {
          cancelBtn.onclick = () => {
            Swal.close();
            handleCancelQueueConfirm(sched);
          };
        }
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [reqs, res, scheds, stats, vStats] = await Promise.all([
      getPendingQueue(), 
      getAvailableResources(),
      getApprovedSchedules(),
      getDriverStats(),
      getVehicleStats()
    ]);
    setRequests(reqs);
    setResources(res);
    setSchedules(scheds);
    setDriverStats(stats);
    setVehicleStats(vStats);
    setLoading(false);
  };

  const isOverlap = (start1: Date, end1: Date, start2: Date, end2: Date) => {
    return (
      (isBefore(start1, end2) || isEqual(start1, end2)) && 
      (isAfter(end1, start2) || isEqual(end1, start2))
    );
  };

  const isResourceBusy = (id: number, type: "car" | "driver", reqStart: Date, reqEnd: Date) => {
    return schedules.some(sched => {
      const field = type === "car" ? sched.carId : sched.driverId;
      if (field !== id) return false;
      return isOverlap(reqStart, reqEnd, new Date(sched.startDateTime), new Date(sched.endDateTime));
    });
  };

  const getDriverLeaveStatus = (driver: any, reqStart: string | Date, reqEnd: string | Date) => {
    if (!driver.leaves || driver.leaves.length === 0) return null;
    
    const reqS = new Date(reqStart);
    const reqE = new Date(reqEnd);

    const activeLeave = driver.leaves.find((leave: any) => {
      const leaveS = new Date(leave.startDate);
      leaveS.setHours(0, 0, 0, 0);
      const leaveE = new Date(leave.endDate);
      leaveE.setHours(23, 59, 59, 999);

      return (reqS <= leaveE && reqE >= leaveS);
    });

    return activeLeave ? activeLeave.leaveType : null;
  };

  const getLeaveText = (type: string) => {
    switch (type) {
      case "SICK":
        return "ลาป่วย";
      case "PERSONAL":
        return "ลากิจ";
      case "VACATION":
        return "ลาพักร้อน";
      case "ABSENT":
        return "ขาดงาน/ติดต่อไม่ได้";
      default:
        return "ลางาน";
    }
  };

  const getVehicleMaintenanceStatus = (vehicle: any, reqStart: string | Date, reqEnd: string | Date) => {
    if (!vehicle.maintenances || vehicle.maintenances.length === 0) return null;
    
    const reqS = new Date(reqStart);
    const reqE = new Date(reqEnd);

    const activeMaintenance = vehicle.maintenances.find((m: any) => {
      const maintS = new Date(m.startDate);
      maintS.setHours(0, 0, 0, 0);
      const maintE = new Date(m.endDate);
      maintE.setHours(23, 59, 59, 999);

      return (reqS <= maintE && reqE >= maintS);
    });

    return activeMaintenance ? activeMaintenance.type : null;
  };

  const getMaintenanceTypeText = (type: string) => {
    switch (type) {
      case "MAINTENANCE":
        return "ตรวจเช็คระยะ";
      case "REPAIR":
        return "ซ่อมแซม";
      case "INSPECTION":
        return "ตรวจสภาพ";
      case "ACCIDENT":
        return "เคลมประกัน";
      default:
        return "ซ่อมบำรุง";
    }
  };

  const handleSelect = (requestId: number, type: "carId" | "driverId", value: string) => {
    setAssignments((prev) => ({
      ...prev,
      [requestId]: {
        ...prev[requestId],
        [type]: parseInt(value),
      },
    }));
  };

  const handleAssign = async (requestId: number) => {
    const assignment = assignments[requestId];
    if (!assignment?.carId || !assignment?.driverId) {
      Swal.fire({
        title: "ข้อมูลไม่ครบถ้วน",
        text: "กรุณาเลือกรถและคนขับให้ครบถ้วนก่อนบันทึก",
        icon: "warning",
        confirmButtonText: "ตกลง"
      });
      return;
    }

    const req = requests.find(r => r.requestId === requestId);
    if (req) {
      // 1. Check vehicle maintenance status
      const car = resources.vehicles.find(v => v.carId === assignment.carId);
      if (car) {
        const maintType = getVehicleMaintenanceStatus(car, req.startDateTime, req.endDateTime);
        if (maintType) {
          const confirmMaint = await Swal.fire({
            title: "แจ้งเตือนสถานะซ่อมบำรุงรถยนต์!",
            html: `รถยนต์ทะเบียน <b>${car.licensePlate}</b> ติดสถานะ <span class="text-red-500 font-bold font-semibold">${getMaintenanceTypeText(maintType)}</span> ในช่วงเวลาเดินทางนี้<br/>คุณแน่ใจหรือไม่ว่าต้องการจัดคิวงานโดยใช้รถคันนี้?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f59e0b",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "ใช่, บังคับใช้รถคันนี้",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true
          });
          if (!confirmMaint.isConfirmed) return;
        }
      }

      // 2. Check driver leave status
      const driver = resources.drivers.find(d => d.driverId === assignment.driverId);
      if (driver) {
        const leaveType = getDriverLeaveStatus(driver, req.startDateTime, req.endDateTime);
        if (leaveType) {
          const confirmLeave = await Swal.fire({
            title: "แจ้งเตือนสถานะวันลาคนขับ!",
            html: `พนักงานขับรถ <b>${driver.driverName}</b> ติดสถานะ <span class="text-red-500 font-bold font-semibold">${getLeaveText(leaveType)}</span> ในช่วงเวลาเดินทางนี้<br/>คุณแน่ใจหรือไม่ว่าต้องการจัดคิวงานให้กับคนขับท่านนี้?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f59e0b",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "ใช่, บังคับจ่ายงาน",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true
          });
          if (!confirmLeave.isConfirmed) return;
        }
      }
    }

    // Trigger signature pad approval
    setSelectedRequestId(requestId);
    setSelectedCarId(assignment.carId);
    setSelectedDriverId(assignment.driverId);
    setSigOpen(true);
  };

  const handleSignatureConfirm = async (signatureOption: "saved" | "fresh", freshBase64Data?: string) => {
    if (!selectedRequestId || !selectedCarId || !selectedDriverId) return;
    
    // 1. Save signature
    await saveApproverSignature(selectedRequestId, "scheduler", signatureOption, freshBase64Data);
    
    // 2. Assign Vehicle
    await assignVehicle(selectedRequestId, selectedCarId, selectedDriverId);
    
    Swal.fire({
      title: "สำเร็จ!",
      text: "จัดคิวและบันทึกลายมือชื่อสำเร็จ!",
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    });
    
    setSigOpen(false);
    setSelectedRequestId(null);
    setSelectedCarId(null);
    setSelectedDriverId(null);
    loadData();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">จัดคิวรถ (Queue Management)</h2>
        <p className="text-muted-foreground">เลือกรถและคนขับสำหรับคำขอที่ผ่านการอนุมัติแล้ว และตรวจสอบการใช้งาน</p>
      </div>

      {/* 📅 Full-Width Premium Monthly Grid Calendar (Placed on Top) */}
      <div className="space-y-4 bg-white/40 backdrop-blur-md border border-slate-200/50 p-6 rounded-3xl shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-teal-50 text-teal-600 rounded-xl">
              <CalendarDays className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-slate-800">ตารางการใช้รถรายเดือน (Monthly Schedule Grid)</h3>
              <p className="text-xs text-slate-500 font-medium">ดูคิวงานและรายละเอียดรถ/คนขับขี่ที่ได้รับการอนุมัติแล้ว</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 self-end sm:self-center bg-slate-100 p-1.5 rounded-xl border border-slate-200/50 shadow-inner">
            <Button variant="ghost" size="icon" onClick={prevMonth} className="h-8 w-8 hover:bg-white rounded-lg">
              <ChevronLeft className="w-4 h-4 text-slate-700" />
            </Button>
            <span className="text-sm font-black text-slate-800 px-3 text-center min-w-[140px] uppercase">
              {format(currentMonth, "MMMM yyyy", { locale: th })}
            </span>
            <Button variant="ghost" size="icon" onClick={nextMonth} className="h-8 w-8 hover:bg-white rounded-lg">
              <ChevronRight className="w-4 h-4 text-slate-700" />
            </Button>
            <div className="h-5 w-[1px] bg-slate-200/80 mx-1"></div>
            <Button onClick={setTodayMonth} className="h-8 bg-white hover:bg-slate-50 text-slate-800 text-xs font-black rounded-lg border border-slate-200 shadow-xs px-3.5">
              วันนี้
            </Button>
          </div>
        </div>

        <Card className="border-slate-200/80 shadow-xs overflow-hidden bg-white/80">
          <CardContent className="p-0">
            {/* Days of Week Header */}
            <div className="grid grid-cols-7 border-b border-slate-100 bg-slate-50/80 text-slate-500 font-black text-[10px] sm:text-xs text-center py-3">
              <div className="text-rose-500">อาทิตย์</div>
              <div>จันทร์</div>
              <div>อังคาร</div>
              <div>พุธ</div>
              <div>พฤหัสบดี</div>
              <div>ศุกร์</div>
              <div className="text-blue-500">เสาร์</div>
            </div>

            {/* Calendar Grid Cells */}
            <div className="grid grid-cols-7 bg-slate-200/50 gap-[1px]">
              {dayInterval.map((day, idx) => {
                const isCurrentMonth = isSameMonth(day, currentMonth);
                const isCurrentDayToday = isToday(day);
                const isDaySelected = selectedDate && isSameDay(day, selectedDate);
                
                // Get schedules on this day
                const daySchedules = schedules.filter(s => {
                  const start = new Date(s.startDateTime);
                  start.setHours(0, 0, 0, 0);
                  const end = new Date(s.endDateTime);
                  end.setHours(23, 59, 59, 999);
                  const target = new Date(day);
                  target.setHours(0, 0, 0, 0);
                  const targetEnd = new Date(day);
                  targetEnd.setHours(23, 59, 59, 999);
                  return target <= end && targetEnd >= start;
                });

                return (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedDate(day)}
                    className={`min-h-[120px] p-2 bg-white flex flex-col justify-between cursor-pointer transition-all duration-200 group relative ${
                      !isCurrentMonth ? "bg-slate-50/40 text-slate-300 opacity-30" : "text-slate-800 hover:bg-slate-50/60"
                    } ${isCurrentDayToday ? "ring-2 ring-teal-500/20 bg-teal-50/20" : ""} ${
                      isDaySelected ? "bg-indigo-50/30 ring-2 ring-indigo-500/30" : ""
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center ${
                        isCurrentDayToday 
                          ? "bg-teal-500 text-white shadow-sm shadow-teal-500/40" 
                          : isDaySelected 
                          ? "bg-indigo-600 text-white shadow-sm"
                          : !isCurrentMonth
                          ? "text-slate-300"
                          : "text-slate-500"
                      }`}>
                        {format(day, "d")}
                      </span>
                      {daySchedules.length > 0 && (
                        <span className="text-[9px] font-extrabold text-teal-700 bg-teal-50 border border-teal-200/60 px-1.5 py-0.2 rounded-full">
                          {daySchedules.length} คัน
                        </span>
                      )}
                    </div>

                    {/* Day Schedule Blocks */}
                    <div className="flex-1 space-y-1 overflow-y-auto max-h-[85px] mt-1 pr-0.5 custom-scrollbar">
                      {daySchedules.map(sched => {
                        const carColor = getCarColorClasses(sched.carId || 0);
                        const startHour = format(new Date(sched.startDateTime), "HH:mm");
                        
                        return (
                          <div
                            key={sched.requestId}
                            onClick={(e) => {
                              e.stopPropagation(); // prevent day selection trigger
                              handleShowScheduleDetail(sched);
                            }}
                            className={`px-1.5 py-1 text-[9px] sm:text-[10px] font-bold rounded-lg border shadow-xs transition-all duration-200 hover:translate-x-0.5 ${carColor.bg} ${carColor.text} ${carColor.border} leading-tight truncate flex flex-col`}
                            title={`${sched.destination} | คนขับ: ${sched.driver?.driverName || "ไม่ระบุ"} | รถ: ${sched.car?.licensePlate}`}
                          >
                            <div className="truncate flex justify-between gap-1 items-center">
                              <span className="truncate">{sched.destination}</span>
                              <span className={`text-[8px] font-semibold ${carColor.label} shrink-0`}>{startHour}</span>
                            </div>
                            <div className={`text-[8px] font-medium truncate ${carColor.label} mt-0.5`}>
                              🚗 {sched.car?.licensePlate} ({sched.driver?.driverName?.split(" ")[0]})
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Visual Statistics Dashboard Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Driver Stats */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-600"></span>
            สถิติการเดินรถของพนักงานขับรถ
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {driverStats.map((stat, index) => {
              const gradients = [
                "from-indigo-500 to-indigo-700 shadow-indigo-500/20",
                "from-purple-500 to-purple-700 shadow-purple-500/20",
                "from-violet-500 to-violet-700 shadow-violet-500/20",
                "from-fuchsia-500 to-fuchsia-700 shadow-fuchsia-500/20"
              ];
              const gradient = gradients[index % gradients.length];
              return (
                <div 
                  key={stat.driverId} 
                  className={`bg-gradient-to-br ${gradient} relative overflow-hidden rounded-2xl shadow-md text-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-md"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 rounded-full blur-md"></div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <h4 className="text-lg font-bold tracking-tight drop-shadow-sm truncate">{stat.driverName}</h4>
                      <div className="h-[1px] bg-white/10 my-3"></div>
                      
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="bg-white/15 backdrop-blur-sm border border-white/10 rounded-xl p-2 shadow-inner">
                          <div className="text-[10px] text-white/80 font-medium">ในจังหวัด</div>
                          <div className="font-extrabold text-xl text-white mt-0.5 drop-shadow-sm">{stat.inProvince}</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2 shadow-inner">
                          <div className="text-[10px] text-white/80 font-medium">ต่างจังหวัด</div>
                          <div className="font-extrabold text-xl text-white mt-0.5 drop-shadow-sm">{stat.outProvince}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3.5 text-center text-xs font-semibold text-white/95 bg-black/15 border border-white/5 py-1 rounded-xl backdrop-blur-sm shadow-sm">
                      รวมทั้งหมด <span className="text-sm font-black underline decoration-2 decoration-white/30 px-1">{stat.totalTrips}</span> เที่ยว
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vehicle Stats */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-teal-900 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-600"></span>
            สถิติการใช้งานรถยนต์รายคัน
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {vehicleStats.map((stat, index) => {
              const gradients = [
                "from-teal-500 to-teal-700 shadow-teal-500/20",
                "from-purple-500 to-purple-700 shadow-purple-500/20",
                "from-orange-500 to-orange-700 shadow-orange-500/20",
                "from-blue-500 to-blue-700 shadow-blue-500/20",
                "from-emerald-500 to-emerald-700 shadow-emerald-500/20",
                "from-pink-500 to-rose-600 shadow-pink-500/20",
                "from-indigo-500 to-indigo-700 shadow-indigo-500/20",
                "from-cyan-500 to-blue-600 shadow-cyan-500/20"
              ];
              const gradient = gradients[index % gradients.length];
              return (
                <div 
                  key={stat.carId} 
                  className={`bg-gradient-to-br ${gradient} relative overflow-hidden rounded-2xl shadow-md text-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-md"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 rounded-full blur-md"></div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex flex-col min-w-0">
                          <h4 className="text-lg font-bold tracking-tight drop-shadow-sm truncate">{stat.licensePlate}</h4>
                          <span className="text-xs text-white/85 font-semibold mt-0.5 drop-shadow-sm truncate">
                            {stat.carType}
                          </span>
                        </div>
                        <span className="text-[9px] font-bold text-white bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 shrink-0 mt-1">
                          {stat.brand}
                        </span>
                      </div>
                      <div className="h-[1px] bg-white/10 my-3"></div>
                      
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="bg-white/15 backdrop-blur-sm border border-white/10 rounded-xl p-2 shadow-inner">
                          <div className="text-[10px] text-white/80 font-medium">ในจังหวัด</div>
                          <div className="font-extrabold text-xl text-white mt-0.5 drop-shadow-sm">{stat.inProvince}</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2 shadow-inner">
                          <div className="text-[10px] text-white/80 font-medium">ต่างจังหวัด</div>
                          <div className="font-extrabold text-xl text-white mt-0.5 drop-shadow-sm">{stat.outProvince}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3.5 text-center text-xs font-semibold text-white/95 bg-black/15 border border-white/5 py-1 rounded-xl backdrop-blur-sm shadow-sm">
                      รวมทั้งหมด <span className="text-sm font-black underline decoration-2 decoration-white/30 px-1">{stat.totalTrips}</span> เที่ยว
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Queue Assignment Table */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">รายการรอจัดคิว</h3>
        <div className="rounded-md border bg-white overflow-x-auto shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>วันเวลาเดินทาง</TableHead>
              <TableHead>สถานที่</TableHead>
              <TableHead>รถยนต์</TableHead>
              <TableHead>คนขับ</TableHead>
              <TableHead className="text-right">จัดการ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">กำลังโหลดข้อมูล...</TableCell>
              </TableRow>
            ) : requests.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">ไม่มีรายการรอจัดคิว</TableCell>
              </TableRow>
            ) : (
              requests.map((req) => (
                <TableRow key={req.requestId}>
                  <TableCell>
                    <div className="font-medium">{format(new Date(req.startDateTime), "d MMM yyyy HH:mm", { locale: th })}</div>
                    <div className="text-sm text-muted-foreground">ถึง {format(new Date(req.endDateTime), "d MMM yyyy HH:mm", { locale: th })}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold">{req.destination}</div>
                    <div className="text-sm text-muted-foreground">{req.passengerCount} คน</div>
                  </TableCell>
                  <TableCell>
                    <Select 
                      value={assignments[req.requestId]?.carId?.toString() || ""}
                      onValueChange={(val) => handleSelect(req.requestId, "carId", val || "")}
                    >
                      <SelectTrigger className={`w-[180px] transition-colors ${(() => {
                        const carId = assignments[req.requestId]?.carId;
                        if (!carId) return "";
                        const car = resources.vehicles.find(v => v.carId === carId);
                        if (!car) return "";
                        const maintType = getVehicleMaintenanceStatus(car, req.startDateTime, req.endDateTime);
                        return maintType ? "border-red-500 text-red-600 bg-red-50 hover:bg-red-50/80" : "";
                      })()}`}>
                        {assignments[req.requestId]?.carId ? (
                          <span className="truncate">
                            {(() => {
                              const car = resources.vehicles.find(v => v.carId === assignments[req.requestId].carId);
                              if (!car) return "";
                              const maintType = getVehicleMaintenanceStatus(car, req.startDateTime, req.endDateTime);
                              return `${car.licensePlate} ${maintType ? `(ซ่อม - ${getMaintenanceTypeText(maintType)})` : ""}`;
                            })()}
                          </span>
                        ) : (
                          <SelectValue placeholder="เลือกรถ..." />
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        {resources.vehicles.map((v) => {
                          const busy = isResourceBusy(v.carId, "car", new Date(req.startDateTime), new Date(req.endDateTime));
                          const maintType = getVehicleMaintenanceStatus(v, req.startDateTime, req.endDateTime);
                          return (
                            <SelectItem 
                              key={v.carId} 
                              value={v.carId.toString()} 
                              disabled={busy}
                              className={maintType ? "text-red-600 focus:text-red-600 focus:bg-red-50 font-medium" : ""}
                            >
                              {v.licensePlate} ({v.carType})
                              {busy ? " (ไม่ว่าง - ติดคิวรถ)" : maintType ? ` (ซ่อมบำรุง - ${getMaintenanceTypeText(maintType)})` : ""}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select 
                      value={assignments[req.requestId]?.driverId?.toString() || ""}
                      onValueChange={(val) => handleSelect(req.requestId, "driverId", val || "")}
                    >
                      <SelectTrigger className={`w-[180px] transition-colors ${(() => {
                        const driverId = assignments[req.requestId]?.driverId;
                        if (!driverId) return "";
                        const driver = resources.drivers.find(d => d.driverId === driverId);
                        if (!driver) return "";
                        const leaveType = getDriverLeaveStatus(driver, req.startDateTime, req.endDateTime);
                        return leaveType ? "border-red-500 text-red-600 bg-red-50 hover:bg-red-50/80" : "";
                      })()}`}>
                        {assignments[req.requestId]?.driverId ? (
                          <span className="truncate">
                            {(() => {
                              const driver = resources.drivers.find(d => d.driverId === assignments[req.requestId].driverId);
                              if (!driver) return "";
                              const leaveType = getDriverLeaveStatus(driver, req.startDateTime, req.endDateTime);
                              return `${driver.driverName} ${leaveType ? `(ลา - ${getLeaveText(leaveType)})` : ""}`;
                            })()}
                          </span>
                        ) : (
                          <SelectValue placeholder="เลือกคนขับ..." />
                        )}
                      </SelectTrigger>
                      <SelectContent>
                        {resources.drivers.map((d) => {
                          const busy = isResourceBusy(d.driverId, "driver", new Date(req.startDateTime), new Date(req.endDateTime));
                          const leaveType = getDriverLeaveStatus(d, req.startDateTime, req.endDateTime);
                          return (
                            <SelectItem 
                              key={d.driverId} 
                              value={d.driverId.toString()} 
                              disabled={busy}
                              className={leaveType ? "text-red-600 focus:text-red-600 focus:bg-red-50 font-medium" : ""}
                            >
                              {d.driverName}
                              {busy ? " (ไม่ว่าง - ติดคิวขับ)" : leaveType ? ` (ลา - ${getLeaveText(leaveType)})` : ""}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      onClick={() => handleAssign(req.requestId)}
                      className="bg-teal-600 hover:bg-teal-700 text-white font-bold"
                    >
                      บันทึกการจัดรถ
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        </div>
      </div>

      {/* Schedules for Selected Date (Rendered full width under Queue Assignment) */}
      <div className="space-y-4 border-t border-slate-200/60 pt-6">
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 text-teal-600 animate-bounce" />
          <h4 className="text-lg font-bold text-slate-800">
            รายละเอียดรถที่ออกวิ่ง วันที่ {selectedDate ? format(selectedDate, "d MMMM yyyy", { locale: th }) : "เลือกวันที่บนปฏิทิน"}
          </h4>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {(() => {
            const filteredSchedules = !selectedDate 
              ? [] 
              : schedules.filter(s => {
                  const start = new Date(s.startDateTime);
                  start.setHours(0, 0, 0, 0);
                  const end = new Date(s.endDateTime);
                  end.setHours(23, 59, 59, 999);
                  return selectedDate >= start && selectedDate <= end;
                });

            if (filteredSchedules.length === 0) {
              return (
                <div className="col-span-full text-center py-10 text-muted-foreground border rounded-2xl border-dashed bg-slate-50/50">
                  ไม่มีกำหนดการใช้รถในวันที่เลือก ({selectedDate ? format(selectedDate, "d MMM yy", { locale: th }) : ""})
                </div>
              );
            }

            return filteredSchedules.map(sched => (
              <Card key={sched.requestId} className="border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300">
                <CardHeader className="py-3 px-4 bg-slate-50/60 border-b flex flex-row items-center justify-between">
                  <div className="flex flex-col min-w-0 flex-1 mr-2">
                    <CardTitle className="text-sm font-black truncate text-slate-800" title={sched.destination}>{sched.destination}</CardTitle>
                    <span className="text-[10px] text-slate-500 mt-0.5 font-bold">
                      ทะเบียน: {sched.car?.licensePlate || "ไม่ระบุ"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <Badge 
                      variant="outline" 
                      className={`font-bold ${
                        sched.status === "Completed"
                          ? "bg-green-100 text-green-700 border-green-200"
                          : sched.status === "In_Transit"
                          ? "bg-amber-100 text-amber-700 border-amber-200"
                          : "bg-blue-100 text-blue-700 border-blue-200"
                      }`}
                    >
                      {sched.status === "Completed" ? "เสร็จสิ้น" : sched.status === "In_Transit" ? "กำลังวิ่ง" : "อนุมัติแล้ว"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <span className="text-slate-400">เวลา:</span> 
                    {format(new Date(sched.startDateTime), "d MMM HH:mm", { locale: th })} - {format(new Date(sched.endDateTime), "d MMM HH:mm", { locale: th })}
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-100/50">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted-foreground font-semibold">รถยนต์</span>
                      <span className="font-bold text-slate-800">{sched.car?.licensePlate || "-"}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] text-muted-foreground font-semibold">พนักงานขับรถ</span>
                      <span className="font-bold text-slate-800">{sched.driver?.driverName || "-"}</span>
                    </div>
                  </div>

                  {/* Odometer Tracking Admin Actions/Details */}
                  {sched.status === "Approved" && (
                    <Button 
                      variant="default"
                      className="w-full mt-1 bg-indigo-600 hover:bg-indigo-700 text-white font-black py-2 rounded-xl" 
                      onClick={() => {
                        setActiveOdoRequest(sched);
                        setOdoType("departure");
                        setOdoOpen(true);
                      }}
                    >
                      🛫 บันทึกเลขไมล์ออกเดินทาง
                    </Button>
                  )}

                  {sched.status === "In_Transit" && (
                    <Button 
                      variant="default"
                      className="w-full mt-1 bg-amber-600 hover:bg-amber-700 text-white font-black py-2 rounded-xl animate-pulse" 
                      onClick={() => {
                        setActiveOdoRequest(sched);
                        setOdoType("arrival");
                        setOdoOpen(true);
                      }}
                    >
                      🏁 บันทึกเลขไมล์กลับถึงคลัง
                    </Button>
                  )}

                  {(sched.status === "Approved" || sched.status === "In_Transit") && (
                    <Button 
                      variant="outline"
                      className="w-full mt-1 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 font-bold py-2 rounded-xl" 
                      onClick={() => handleCancelQueueConfirm(sched)}
                    >
                      ❌ ยกเลิกคิวจัดรถ
                    </Button>
                  )}

                  {sched.status === "Completed" && (
                    <div className="bg-green-500/5 p-3 rounded-xl border border-green-500/10 space-y-1 text-[11px] text-slate-700">
                      <div className="flex justify-between">
                        <span>เลขไมล์เริ่มต้น:</span>
                        <span className="font-bold text-slate-800">{sched.startOdometer?.toLocaleString() || "-"} กม.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>เลขไมล์กลับถึง:</span>
                        <span className="font-bold text-slate-800">{sched.endOdometer?.toLocaleString() || "-"} กม.</span>
                      </div>
                      <div className="h-[1px] bg-slate-200/50 my-1"></div>
                      <div className="flex justify-between font-extrabold text-green-700">
                        <span>ระยะทางที่วิ่งจริง:</span>
                        <span>{sched.actualDistance || 0} กม.</span>
                      </div>
                      {(sched.startOdometerPhoto || sched.endOdometerPhoto) && (
                        <div className="flex gap-2 mt-2 pt-2 border-t border-slate-200/40">
                          {sched.startOdometerPhoto && (
                            <a 
                              href={sched.startOdometerPhoto} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex-1 text-center py-1 bg-white border border-slate-200/60 rounded-lg hover:bg-slate-50 transition-colors text-[9px] font-bold flex items-center justify-center gap-1 text-indigo-600 shadow-xs"
                            >
                              📸 รูปไมล์ออก
                            </a>
                          )}
                          {sched.endOdometerPhoto && (
                            <a 
                              href={sched.endOdometerPhoto} 
                              target="_blank" 
                              rel="noreferrer"
                              className="flex-1 text-center py-1 bg-white border border-slate-200/60 rounded-lg hover:bg-slate-50 transition-colors text-[9px] font-bold flex items-center justify-center gap-1 text-amber-600 shadow-xs"
                            >
                              📸 รูปไมล์เข้า
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <Button 
                    variant="outline" 
                    className="w-full font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 border-slate-200" 
                    onClick={() => window.open(`/npcgo/print/request/${sched.requestId}`, '_blank')}
                  >
                    <Printer className="h-4.5 w-4.5 mr-1 text-slate-500" /> พิมพ์ใบขออนุญาต
                  </Button>
                </CardContent>
              </Card>
            ));
          })()}
        </div>
      </div>

      <SignatureApprovalDialog
        isOpen={sigOpen}
        onClose={() => {
          setSigOpen(false);
          setSelectedRequestId(null);
          setSelectedCarId(null);
          setSelectedDriverId(null);
        }}
        onConfirm={handleSignatureConfirm}
        title="ลงนามจัดคิวรถ (เจ้าหน้าที่ยานพาหนะ)"
        description="กรุณาเลือกลงนามเพื่อบันทึกการจัดรถและคนขับรถ และส่งต่อใบขอใช้รถไปยังผู้อนุมัติลำดับถัดไป"
      />

      {/* 🤖 Odometer Scanner Dialog */}
      {activeOdoRequest && (
        <OdometerScannerDialog
          isOpen={odoOpen}
          onClose={() => {
            setOdoOpen(false);
            setActiveOdoRequest(null);
          }}
          requestId={activeOdoRequest.requestId}
          type={odoType}
          onSuccess={async () => {
            await loadData();
          }}
          onSubmitAction={odoType === "departure" ? recordDepartureOdometer : recordArrivalOdometer}
          vehiclePlate={activeOdoRequest.car?.licensePlate}
          previousOdometer={odoType === "arrival" ? activeOdoRequest.startOdometer || undefined : undefined}
        />
      )}
    </div>
  );
}
