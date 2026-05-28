"use client";

import { useState } from "react";
import { AlertTriangle, ShieldAlert, CalendarRange, CheckCircle2 } from "lucide-react";
import Swal from "sweetalert2";
import { renewVehicleAttribute } from "@/app/actions/resources";
import { useRouter } from "next/navigation";

interface AlertItem {
  carId: number;
  licensePlate: string;
  type: string;
  title: string;
  detail: string;
  severity: string;
}

interface AlertsBannerProps {
  initialAlerts: AlertItem[];
}

export function AlertsBanner({ initialAlerts }: AlertsBannerProps) {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  if (initialAlerts.length === 0) return null;

  const criticalCount = initialAlerts.filter(a => a.severity === "high").length;
  const hasCritical = criticalCount > 0;

  const handleRenewClick = async (alert: AlertItem) => {
    // Only support TAX, ACT, INSURANCE quick renewals
    if (alert.type !== "TAX" && alert.type !== "ACT" && alert.type !== "INSURANCE") {
      Swal.fire({
        title: "แนะนำขั้นตอน",
        text: "สำหรับการเปลี่ยนยางรถยนต์ กรุณาไปที่ระบบ 'จัดการทรัพยากร' เพื่อบันทึกประวัติการเปลี่ยนยางและอัปเดตระยะทาง/เลขไมล์ที่ถูกต้องครับ",
        icon: "info",
        confirmButtonColor: "#3b82f6"
      });
      return;
    }

    const typeLabel = alert.type === "TAX" ? "ทะเบียน/ภาษี" : alert.type === "ACT" ? "พ.ร.บ." : "ประกันภัย";
    const defaultNextYear = new Date();
    defaultNextYear.setFullYear(defaultNextYear.getFullYear() + 1);
    const defaultDateString = defaultNextYear.toISOString().split("T")[0];

    const { value: newDate } = await Swal.fire({
      title: `ต่ออายุ ${typeLabel}`,
      html: `<div class="text-left text-sm text-slate-500 mb-2">ระบุวันหมดอายุรอบถัดไปสำหรับรถทะเบียน <b>${alert.licensePlate}</b></div>`,
      input: "date",
      inputValue: defaultDateString,
      showCancelButton: true,
      confirmButtonText: "บันทึกข้อมูล",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#10b981",
      cancelButtonColor: "#6b7280",
      reverseButtons: true,
      inputValidator: (value) => {
        if (!value) {
          return "กรุณาเลือกวันที่หมดอายุรอบใหม่ด้วยครับ!";
        }
      }
    });

    if (!newDate) return;

    const uniqueId = `${alert.carId}-${alert.type}`;
    setLoadingId(uniqueId);

    try {
      const res = await renewVehicleAttribute(alert.carId, alert.type, newDate);
      if (res.success) {
        Swal.fire({
          title: "อัปเดตสำเร็จ 🎉",
          text: `ต่ออายุ ${typeLabel} รถทะเบียน ${alert.licensePlate} เรียบร้อยแล้ว`,
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
        router.refresh();
      }
    } catch (err: any) {
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: err.message || "ไม่สามารถทำรายการได้",
        icon: "error"
      });
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className={`space-y-3 bg-white/80 backdrop-blur-md border p-6 rounded-2xl shadow-sm transition-all duration-300 ${
      hasCritical ? "border-red-300 shadow-md shadow-red-50/50" : "border-slate-200/50"
    }`}>
      <div className={`flex flex-wrap items-center gap-2 pl-3 mb-4 border-l-4 ${
        hasCritical ? "border-red-600 bg-red-50/50 p-2.5 rounded-r-xl animate-pulse" : "border-rose-500"
      }`}>
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <ShieldAlert className={`w-5 h-5 ${hasCritical ? "text-red-600 animate-bounce" : "text-rose-600 animate-pulse"}`} />
          <span>ระบบตรวจเช็คความพร้อมรถยนต์และแจ้งเตือน</span>
        </h3>
        {hasCritical ? (
          <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-black border border-red-700 shadow-sm animate-pulse flex items-center gap-1">
            🚨 วิกฤต: หมดอายุแล้ว {criticalCount} รายการ (ห้ามนำรถออกใช้งาน)
          </span>
        ) : (
          <span className="bg-rose-50 text-rose-700 text-xs px-2.5 py-1 rounded-full font-bold border border-rose-200 animate-pulse">
            มีเรื่องเร่งด่วน {initialAlerts.length} รายการ
          </span>
        )}
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {initialAlerts.map((alert, index) => {
          const isHigh = alert.severity === "high";
          const uniqueId = `${alert.carId}-${alert.type}`;
          const isLoading = loadingId === uniqueId;
          const showQuickRenew = alert.type === "TAX" || alert.type === "ACT" || alert.type === "INSURANCE";

          return (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl border p-4 flex flex-col justify-between gap-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-md ${
                isHigh 
                  ? "bg-gradient-to-r from-red-600 to-rose-650 border-red-700 text-white shadow-md shadow-red-100/50 animate-pulse" 
                  : "bg-gradient-to-br from-amber-50 to-amber-100/30 border-amber-200 text-amber-950 shadow-sm"
              }`}
            >
              <div className="flex gap-3.5 items-start w-full">
                <div className={`p-2.5 rounded-lg shrink-0 ${
                  isHigh ? "bg-white/20 text-white animate-bounce" : "bg-amber-500/10 text-amber-600"
                }`}>
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-1.5">
                    <span className={`font-bold text-xs px-2.5 py-0.5 rounded-md shadow-xs ${
                      isHigh ? "bg-red-800/80 border border-red-500/50 text-white" : "bg-white/80 border border-slate-200/60 text-slate-800"
                    }`}>{alert.licensePlate}</span>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-inner ${
                      isHigh ? "bg-white text-red-700 border border-white" : "bg-amber-600 text-white"
                    }`}>
                      {alert.type === "TAX" ? "ทะเบียน/ภาษี" : alert.type === "ACT" ? "พ.ร.บ." : alert.type === "INSURANCE" ? "ประกันภัย" : "ยางรถยนต์"}
                    </span>
                  </div>
                  <h5 className={`font-extrabold text-sm ${isHigh ? "text-white" : "text-slate-800"}`}>
                    {isHigh ? `⚠️ ${alert.title}` : alert.title}
                  </h5>
                  <p className={`text-xs mt-1 font-semibold leading-relaxed ${isHigh ? "text-red-100" : "text-slate-500"}`}>{alert.detail}</p>
                </div>
              </div>

              {/* Quick Action Button for Renewals */}
              {showQuickRenew && (
                <div className="flex justify-end pt-1 border-t border-dashed border-current/10 mt-1">
                  <button
                    disabled={isLoading}
                    onClick={() => handleRenewClick(alert)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black transition-all shadow-xs ${
                      isHigh
                        ? "bg-white text-red-700 hover:bg-red-50 active:scale-95"
                        : "bg-amber-600 text-white hover:bg-amber-700 active:scale-95 border border-amber-700/20"
                    } disabled:opacity-50`}
                  >
                    {isLoading ? (
                      <div className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <CalendarRange className="w-3.5 h-3.5" />
                    )}
                    <span>อัปเดตวันหมดอายุใหม่</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
