import { getMyRequests } from "@/app/actions/requests";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { 
  Car, Clock, Check, X, Lock, Printer, PlusCircle, Calendar, 
  Users, MapPin, FileText, ChevronRight, User, AlertTriangle
} from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { getSession } from "@/lib/session";
import { AdminRequestActions } from "@/components/ui/admin-request-actions";

// Define steps helper
const getStepsForRequest = (req: any, exists: { deputy: boolean, scheduler: boolean, resource_deputy: boolean, director: boolean }) => {
  const currentStatus = req.status;

  const steps = [
    {
      label: "ลงนามตรวจสอบฝ่าย",
      role: "deputy",
      desc: "รองผู้อำนวยการฝ่ายสังกัดลงชื่อ",
    },
    {
      label: "จัดคิวและคนขับ",
      role: "scheduler",
      desc: "งานยานพาหนะจัดสรรทรัพยากร",
    },
    {
      label: "รองฯ ฝ่ายบริหารฯ ตรวจสอบ",
      role: "resource_deputy",
      desc: "พิจารณาอนุมัติใช้ทรัพยากร",
    },
    {
      label: "ผู้อำนวยการอนุมัติ",
      role: "director",
      desc: "ลงนามอนุมัติขั้นสุดท้าย",
    },
  ];

  return steps.map((step, idx) => {
    let status: "completed" | "active" | "upcoming" | "rejected" = "upcoming";

    if (currentStatus === "Approved") {
      status = "completed";
    } else if (currentStatus === "Rejected") {
      // Determine where it was rejected based on signature existence
      if (!exists.deputy) {
        status = idx === 0 ? "rejected" : "upcoming";
      } else if (!exists.scheduler) {
        if (idx === 0) status = "completed";
        else if (idx === 1) status = "rejected";
        else status = "upcoming";
      } else if (!exists.resource_deputy) {
        if (idx < 2) status = "completed";
        else if (idx === 2) status = "rejected";
        else status = "upcoming";
      } else {
        if (idx < 3) status = "completed";
        else status = "rejected";
      }
    } else {
      // Pending statuses
      const statusOrder = [
        "Pending_Dept_Approval",
        "Pending_Scheduler",
        "Pending_Resource_Deputy_Approval",
        "Pending_Director_Approval",
      ];
      const activeIdx = statusOrder.indexOf(currentStatus);
      if (idx < activeIdx) {
        status = "completed";
      } else if (idx === activeIdx) {
        status = "active";
      } else {
        status = "upcoming";
      }
    }

    return {
      ...step,
      status,
    };
  });
};

export default async function MyRequestsPage() {
  const session = await getSession();
  const isAdmin = session?.role === "admin";
  const requests = await getMyRequests();

  // Helper to check signature file exist on disk
  const checkSig = (requestId: number, roleKey: string) => {
    const filePath = path.join(process.cwd(), "public", "signatures", "requests", `request_${requestId}_${roleKey}.png`);
    return fs.existsSync(filePath);
  };

  const getStatusBadgeInfo = (status: string) => {
    switch (status) {
      case "Pending_Dept_Approval":
        return { text: "รอหัวหน้าฝ่ายตรวจสอบ", color: "bg-amber-50 text-amber-700 border-amber-200/60" };
      case "Pending_Scheduler":
        return { text: "รอจัดคิวรถ", color: "bg-blue-50 text-blue-700 border-blue-200/60" };
      case "Pending_Resource_Deputy_Approval":
        return { text: "รอรองฝ่ายบริหารฯ ตรวจสอบ", color: "bg-indigo-50 text-indigo-700 border-indigo-200/60" };
      case "Pending_Director_Approval":
        return { text: "รอผู้อำนวยการอนุมัติ", color: "bg-violet-50 text-violet-700 border-violet-200/60" };
      case "Approved":
        return { text: "อนุมัติแล้ว", color: "bg-emerald-50 text-emerald-700 border-emerald-200/60" };
      case "Rejected":
        return { text: "ไม่อนุมัติ", color: "bg-rose-50 text-rose-700 border-rose-200/60" };
      default:
        return { text: status, color: "bg-slate-50 text-slate-700 border-slate-200/60" };
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 shadow-xl border border-slate-800">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="relative p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <Car className="w-8 h-8 text-teal-400" />
              {isAdmin ? "ระบบจัดการคำขอใช้รถทั้งหมด (Admin Mode)" : "รายการคำขอใช้รถของฉัน"}
            </h2>
            <p className="text-slate-300 text-sm font-light">
              {isAdmin 
                ? "โหมดผู้ดูแลระบบ: สามารถตรวจสอบ ค้นหา แก้ไข หรือลบข้อมูลคำขอใช้รถราชการทั้งหมดของวิทยาลัย" 
                : "ติดตามขั้นตอนการพิจารณาจัดคิวรถยนต์ส่วนกลางและผลอนุมัติแบบเรียลไทม์"}
            </p>
          </div>
          <Link 
            href="/requests/new" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transform hover:-translate-y-0.5 duration-200 shrink-0"
          >
            <PlusCircle className="w-5 h-5" />
            เขียนใบขออนุญาตใช้รถ
          </Link>
        </div>
      </div>

      {/* Requests Listing */}
      {requests.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <div className="w-20 h-20 bg-slate-50 text-slate-400 border border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <Car className="w-10 h-10 opacity-60" />
          </div>
          <h3 className="text-lg font-bold text-slate-700">ไม่พบประวัติการขอใช้รถ</h3>
          <p className="text-slate-400 text-sm font-light mt-1 max-w-sm text-center">คุณยังไม่เคยส่งคำขอใช้รถยนต์ราชการในระบบ หากต้องการใช้งานกรุณากดปุ่มยื่นคำขอเพื่อดำเนินการ</p>
        </div>
      ) : (
        <div className="space-y-6">
          {requests.map((req) => {
            const badge = getStatusBadgeInfo(req.status);
            const isFinalized = req.status === "Approved" || req.status === "Rejected";
            const steps = getStepsForRequest(req, {
              deputy: checkSig(req.requestId, "deputy"),
              scheduler: checkSig(req.requestId, "scheduler"),
              resource_deputy: checkSig(req.requestId, "resource_deputy"),
              director: checkSig(req.requestId, "director"),
            });

            return (
              <div 
                key={req.requestId} 
                className="bg-white rounded-3xl border border-slate-100 hover:border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Header info */}
                <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold text-slate-400 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg">
                      ID: #{req.requestId}
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${badge.color}`}>
                      {badge.text}
                    </span>
                    {req.refOrderNumber && (
                      <span className="text-xs text-slate-500 flex items-center gap-1.5 bg-slate-100/50 px-2 py-0.5 rounded-lg border border-slate-200/30">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                        เลขคำสั่ง: {req.refOrderNumber}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 font-light flex items-center gap-1.5 self-end sm:self-auto">
                    <Clock className="w-3.5 h-3.5" />
                    ยื่นเมื่อ: {format(new Date(req.createdAt), "dd MMM yyyy HH:mm น.", { locale: th })}
                  </div>
                </div>

                {/* Details body */}
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left: main info */}
                    <div className="lg:col-span-7 space-y-4">
                      <div>
                        <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1">วัตถุประสงค์การใช้รถ</h4>
                        <p className="text-slate-800 text-base font-semibold leading-relaxed">{req.purpose}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="flex items-start gap-2.5">
                          <div className="p-2 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 shrink-0">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400">สถานที่ปลายทาง</p>
                            <p className="text-sm font-semibold text-slate-700">{req.destination}</p>
                            <p className="text-xs text-slate-400 font-light">{req.province}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                            <Calendar className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400">วันเวลาที่เดินทาง</p>
                            <p className="text-xs font-semibold text-slate-700">
                              ไป: {format(new Date(req.startDateTime), "d MMM yy HH:mm", { locale: th })} น.
                            </p>
                            <p className="text-xs font-semibold text-slate-500">
                              กลับ: {format(new Date(req.endDateTime), "d MMM yy HH:mm", { locale: th })} น.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Passenger details */}
                      <div className="pt-2 border-t border-slate-50">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                          <Users className="w-4 h-4 text-slate-400" />
                          <span>ผู้โดยสารทั้งหมด {req.passengerCount} คน</span>
                        </div>
                        <div className="p-3 bg-slate-50/50 rounded-2xl border border-slate-100/50 max-h-24 overflow-y-auto text-xs text-slate-600 leading-relaxed font-light scrollbar-thin font-sans">
                          {req.passengerNames}
                        </div>
                      </div>
                    </div>

                    {/* Right: Allocated Resources (Car & Driver) */}
                    <div className="lg:col-span-5 space-y-4 lg:pl-6 lg:border-l lg:border-slate-100">
                      <div>
                        <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-2">ยานพาหนะและพนักงานขับรถ</h4>
                        
                        {req.car || req.driver ? (
                          <div className="space-y-3 font-sans">
                            {req.car && (
                              <div className="flex items-center gap-3 p-3 bg-emerald-50/30 rounded-2xl border border-emerald-100/40">
                                <div className="p-2 bg-emerald-500 text-white rounded-xl">
                                  <Car className="w-4 h-4" />
                                </div>
                                <div className="text-xs">
                                  <p className="font-bold text-slate-700">{req.car.brand || "รถยนต์ส่วนกลาง"}</p>
                                  <p className="text-slate-500 font-light">ทะเบียน: <span className="font-semibold text-emerald-600">{req.car.licensePlate}</span> ({req.car.carType})</p>
                                </div>
                              </div>
                            )}
                            
                            {req.driver && (
                              <div className="flex items-center gap-3 p-3 bg-blue-50/30 rounded-2xl border border-blue-100/40">
                                <div className="p-2 bg-blue-500 text-white rounded-xl">
                                  <User className="w-4 h-4" />
                                </div>
                                <div className="text-xs">
                                  <p className="font-bold text-slate-700">{req.driver.driverName}</p>
                                  <p className="text-slate-500 font-light">โทร: <span className="font-semibold text-blue-600">{req.driver.phone || "ไม่มีข้อมูล"}</span></p>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center p-6 bg-slate-50/60 rounded-2xl border border-slate-100 border-dashed text-slate-400 text-xs">
                            <Clock className="w-8 h-8 mb-2 opacity-50 animate-pulse text-blue-500" />
                            <p className="font-medium text-slate-500">รอจัดสรรรถราชการและคนขับ</p>
                            <p className="font-light text-[10px] text-slate-400 mt-0.5">ระบบจะแสดงรายละเอียดข้อมูลเมื่อฝ่ายยานพาหนะจัดคิว</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Visual Timeline Stepper */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-3">ไทม์ไลน์และลำดับขั้นตอนการอนุมัติ</h4>
                    
                    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-2 w-full mt-4 bg-slate-50/50 p-4 sm:p-6 rounded-2xl border border-slate-100">
                      {steps.map((step, idx) => {
                        let Icon = Clock;
                        let circleColor = "";
                        let textColor = "";
                        let statusText = "";

                        if (step.status === "completed") {
                          Icon = Check;
                          circleColor = "bg-emerald-500 text-white border-emerald-500 ring-4 ring-emerald-50 shadow-sm";
                          textColor = "text-slate-700 font-semibold";
                          statusText = "เสร็จสิ้น";
                        } else if (step.status === "active") {
                          Icon = Clock;
                          circleColor = "bg-blue-600 text-white border-blue-600 ring-4 ring-blue-50 animate-pulse shadow-sm";
                          textColor = "text-blue-700 font-bold";
                          statusText = "กำลังพิจารณา";
                        } else if (step.status === "rejected") {
                          Icon = X;
                          circleColor = "bg-rose-500 text-white border-rose-500 ring-4 ring-rose-50 shadow-sm";
                          textColor = "text-rose-600 font-bold";
                          statusText = "ไม่อนุมัติ";
                        } else {
                          Icon = Lock;
                          circleColor = "bg-slate-100 text-slate-400 border-slate-200";
                          textColor = "text-slate-400 font-light";
                          statusText = "ยังไม่เริ่ม";
                        }

                        return (
                          <div key={idx} className="flex-1 flex flex-row md:flex-col items-center md:text-center gap-3 md:gap-2 relative z-10 w-full">
                            {/* Connector line (Desktop only) */}
                            {idx < steps.length - 1 && (
                              <div className="hidden md:block absolute top-5 left-[55%] right-[-45%] h-[2px] bg-slate-200 z-[-1]">
                                <div className={`h-full transition-all duration-300 ${
                                  step.status === "completed" && steps[idx + 1].status !== "rejected" ? "bg-emerald-500" :
                                  step.status === "completed" && steps[idx + 1].status === "rejected" ? "bg-rose-300" : ""
                                }`} />
                              </div>
                            )}
                            
                            {/* Circle wrapper */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border font-bold text-sm shrink-0 transition-all duration-300 ${circleColor}`}>
                              <Icon className="w-5 h-5" />
                            </div>

                            {/* Labels details */}
                            <div className="text-left md:text-center space-y-0.5">
                              <p className={`text-xs sm:text-sm leading-tight transition-colors duration-300 ${textColor}`}>
                                {step.label}
                              </p>
                              <p className="text-[10px] text-slate-400 font-light hidden md:block max-w-[140px] mx-auto leading-normal">
                                {step.desc}
                              </p>
                              <span className={`inline-block md:hidden px-2 py-0.5 rounded-full text-[9px] font-bold ${
                                step.status === "completed" ? "bg-emerald-50 text-emerald-600" :
                                step.status === "active" ? "bg-blue-50 text-blue-600 animate-pulse" :
                                step.status === "rejected" ? "bg-rose-50 text-rose-600 animate-bounce" : "bg-slate-50 text-slate-400"
                              }`}>
                                {statusText}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Footer print action */}
                <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
                  <div className="text-xs text-slate-400 font-light flex items-center gap-1.5">
                    {isFinalized ? (
                      <span className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-100/50 font-medium">
                        <Check className="w-3.5 h-3.5" />
                        กระบวนการพิจารณาเสร็จสมบูรณ์
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 text-amber-600 bg-amber-50/80 px-2.5 py-1 rounded-lg border border-amber-100/50 font-medium">
                        <Lock className="w-3.5 h-3.5" />
                        ระบบล็อกการพิมพ์จนกว่าจะอนุมัติเสร็จสิ้น
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    {isFinalized ? (
                      <Link
                        href={`/npcgo/print/request/${req.requestId}`}
                        target="_blank"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md transform hover:-translate-y-0.5 duration-200 shrink-0"
                      >
                        <Printer className="w-4 h-4" />
                        พิมพ์ใบอนุญาตใช้รถ
                      </Link>
                    ) : (
                      <div 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 border border-slate-200 text-slate-400 font-semibold text-xs px-5 py-2.5 rounded-xl cursor-not-allowed shrink-0"
                        title="ไม่สามารถพิมพ์ได้เนื่องจากอยู่ระหว่างพิจารณาอนุมัติ"
                      >
                        <Printer className="w-4 h-4 opacity-50" />
                        พิมพ์ใบอนุญาตใช้รถ (ล็อก)
                      </div>
                    )}

                    {isAdmin && (
                      <div className="border-t sm:border-t-0 pt-2 sm:pt-0 sm:border-l sm:pl-3 border-slate-200 w-full sm:w-auto flex justify-end">
                        <AdminRequestActions request={req} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
