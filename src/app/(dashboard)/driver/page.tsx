"use client";

import * as React from "react";
import { getMyDriverTrips } from "@/app/actions/driver";
import { recordDepartureOdometer, recordArrivalOdometer } from "@/app/actions/queue";
import { OdometerScannerDialog } from "@/components/ui/odometer-scanner-dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { CarIcon, MapPinIcon, CalendarIcon, GaugeIcon, ClipboardListIcon, UsersIcon, CheckCircle2Icon, NavigationIcon } from "lucide-react";
import Swal from "sweetalert2";

type TripType = Awaited<ReturnType<typeof getMyDriverTrips>>[0];

export default function DriverPortalPage() {
  const [trips, setTrips] = React.useState<TripType[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [odoOpen, setOdoOpen] = React.useState(false);
  const [odoType, setOdoType] = React.useState<"departure" | "arrival">("departure");
  const [activeTrip, setActiveTrip] = React.useState<TripType | null>(null);

  React.useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = async () => {
    setLoading(true);
    try {
      const res = await getMyDriverTrips();
      setTrips(res);
    } catch (err) {
      console.error("Failed to load driver trips", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenScanner = (trip: TripType, type: "departure" | "arrival") => {
    setActiveTrip(trip);
    setOdoType(type);
    setOdoOpen(true);
  };

  const handleOdometerSuccess = async () => {
    await loadTrips();
    Swal.fire({
      title: "บันทึกข้อมูลสำเร็จ!",
      text: odoType === "departure" ? "เริ่มออกเดินทางเรียบร้อยแล้ว เดินทางปลอดภัยครับ" : "บันทึกทริปและระยะทางวิ่งเสร็จสิ้นแล้ว ขอบคุณครับ",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="max-w-md mx-auto space-y-6 pb-12">
      {/* Header Portal Profile Info */}
      <div className="bg-gradient-to-br from-teal-600 to-indigo-700 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/10 rounded-full blur-md" />
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 rounded-full blur-md" />
        
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-1 bg-white/15 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-xs border border-white/10">
            <CarIcon className="w-3.5 h-3.5" />
            พนักงานขับรถพอร์ทัล
          </div>
          <h2 className="text-2xl font-bold font-heading tracking-tight mt-1">ตารางเดินรถของคุณ</h2>
          <p className="text-white/80 text-xs">จัดการทริปเดินทาง บันทึกภาพเลขไมล์ออกเดินทางและกลับถึงผ่านสมาร์ทโฟน</p>
        </div>
      </div>

      {/* Trip Lists */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2 px-1">
          <ClipboardListIcon className="w-4 h-4" />
          รายการงานขับรถ
        </h3>

        {loading ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
            <p className="text-xs text-muted-foreground">กำลังโหลดรายการตารางเดินรถ...</p>
          </div>
        ) : trips.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 mx-auto">
              <CarIcon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-slate-700">ไม่มีตารางเดินทางที่ได้รับมอบหมาย</p>
              <p className="text-xs text-muted-foreground mt-1">เมื่อคุณมีทริปจองใหม่จากผู้จัดคิว ระบบจะแสดงรายการงานตรงนี้ทันที</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {trips.map((trip) => {
              const isApproved = trip.status === "Approved";
              const isTransit = trip.status === "In_Transit";
              const isCompleted = trip.status === "Completed";

              return (
                <Card 
                  key={trip.requestId} 
                  className={`border-slate-100 overflow-hidden shadow-sm transition-all duration-300 ${
                    isTransit 
                      ? "ring-2 ring-amber-500/20 border-amber-200 bg-amber-50/5" 
                      : isCompleted 
                      ? "bg-slate-50/50" 
                      : "hover:shadow-md"
                  }`}
                >
                  {/* Card Header Status Row */}
                  <CardHeader className="py-3 px-4 bg-slate-50/80 border-b flex flex-row items-center justify-between">
                    <div className="flex flex-col min-w-0">
                      <CardTitle className="text-sm font-semibold truncate text-slate-800" title={trip.destination}>
                        {trip.destination}
                      </CardTitle>
                      <span className="text-[10px] text-muted-foreground mt-0.5">
                        ผู้ขอใช้รถ: <span className="font-medium text-slate-600">{trip.requesterName}</span>
                      </span>
                    </div>

                    <Badge
                      variant="outline"
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                        isCompleted
                          ? "bg-green-500/10 text-green-700 border-green-500/20"
                          : isTransit
                          ? "bg-amber-500/10 text-amber-700 border-amber-500/20 animate-pulse"
                          : "bg-blue-500/10 text-blue-700 border-blue-500/20"
                      }`}
                    >
                      {isCompleted ? "เสร็จสิ้น" : isTransit ? "กำลังเดินทาง" : "คิวจัดเตรียม"}
                    </Badge>
                  </CardHeader>

                  {/* Card Content Trip Meta */}
                  <CardContent className="p-4 space-y-4">
                    {/* Visual timetable & plate */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-slate-100/50 p-2.5 rounded-xl border border-slate-200/40">
                        <p className="text-[10px] text-muted-foreground flex items-center gap-1 font-semibold">
                          <CalendarIcon className="w-3 h-3 text-slate-400" />
                          กำหนดการ
                        </p>
                        <p className="font-bold text-slate-700 mt-1">
                          {format(new Date(trip.startDateTime), "d MMM HH:mm", { locale: th })}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">
                          ถึง {format(new Date(trip.endDateTime), "d MMM HH:mm", { locale: th })}
                        </p>
                      </div>

                      <div className="bg-slate-100/50 p-2.5 rounded-xl border border-slate-200/40">
                        <p className="text-[10px] text-muted-foreground flex items-center gap-1 font-semibold">
                          <CarIcon className="w-3 h-3 text-slate-400" />
                          รถที่ขับ
                        </p>
                        <p className="font-bold text-slate-700 mt-1">
                          {trip.car?.licensePlate || "ไม่ระบุ"}
                        </p>
                        <p className="text-[10px] text-muted-foreground mt-0.5 truncate">
                          {trip.car?.brand || "ไม่ระบุ"} ({trip.car?.carType || "ไม่ระบุ"})
                        </p>
                      </div>
                    </div>

                    {/* Passenger count & Province info */}
                    <div className="flex justify-between items-center text-xs text-slate-600 bg-secondary/20 px-3 py-2 rounded-xl border border-border/40">
                      <span className="flex items-center gap-1.5 font-medium">
                        <UsersIcon className="w-3.5 h-3.5 text-slate-400" />
                        ผู้โดยสาร: <span className="font-semibold text-slate-800">{trip.passengerCount} คน</span>
                      </span>
                      <span className="flex items-center gap-1 bg-white border border-slate-200 px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-700">
                        <MapPinIcon className="w-3 h-3 text-red-500" />
                        {trip.province || "น่าน"}
                      </span>
                    </div>

                    {/* Purpose details */}
                    <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200/20">
                      <span className="font-semibold text-slate-700 block mb-1">วัตถุประสงค์งาน:</span>
                      <span className="line-clamp-2">{trip.purpose}</span>
                    </div>

                    {/* Interactive Action Buttons / Mileage Display */}
                    {isApproved && (
                      <Button
                        type="button"
                        onClick={() => handleOpenScanner(trip, "departure")}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm py-5 rounded-xl shadow-lg shadow-green-500/10 flex items-center justify-center gap-2 group transition-all duration-300 hover:shadow-green-500/20"
                      >
                        <NavigationIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        🛫 เริ่มเดินทาง: ถ่ายรูปและระบุเลขไมล์ออก
                      </Button>
                    )}

                    {isTransit && (
                      <Button
                        type="button"
                        onClick={() => handleOpenScanner(trip, "arrival")}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm py-5 rounded-xl shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2 animate-pulse hover:animate-none group transition-all duration-300 hover:shadow-amber-500/20"
                      >
                        <CheckCircle2Icon className="w-4 h-4" />
                        🏁 กลับถึงแล้ว: ถ่ายรูปและระบุเลขไมล์เข้า
                      </Button>
                    )}

                    {isCompleted && (
                      <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-4 space-y-2 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">ไมล์ออกเดินทาง:</span>
                          <span className="font-mono font-bold text-slate-800 text-sm">
                            {trip.startOdometer?.toLocaleString()} กม.
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">ไมล์เมื่อกลับถึง:</span>
                          <span className="font-mono font-bold text-slate-800 text-sm">
                            {trip.endOdometer?.toLocaleString()} กม.
                          </span>
                        </div>
                        <div className="h-[1px] bg-slate-200 my-1" />
                        <div className="flex justify-between items-center font-bold text-green-700">
                          <span className="flex items-center gap-1">
                            <GaugeIcon className="w-4 h-4" />
                            ระยะทางที่ใช้วิ่งจริง:
                          </span>
                          <span className="text-sm">
                            {trip.actualDistance || 0} กม.
                          </span>
                        </div>
                        {(trip.startOdometerPhoto || trip.endOdometerPhoto) && (
                          <div className="flex gap-2 mt-3 pt-2.5 border-t border-slate-200">
                            {trip.startOdometerPhoto && (
                              <a
                                href={trip.startOdometerPhoto}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 text-center py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-[10px] font-semibold flex items-center justify-center gap-1 text-indigo-600"
                              >
                                📸 รูปไมล์ออก
                              </a>
                            )}
                            {trip.endOdometerPhoto && (
                              <a
                                href={trip.endOdometerPhoto}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 text-center py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-[10px] font-semibold flex items-center justify-center gap-1 text-amber-600"
                              >
                                📸 รูปไมล์เข้า
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* 🤖 Odometer Scanner Dialog */}
      {activeTrip && (
        <OdometerScannerDialog
          isOpen={odoOpen}
          onClose={() => {
            setOdoOpen(false);
            setActiveTrip(null);
          }}
          requestId={activeTrip.requestId}
          type={odoType}
          onSuccess={handleOdometerSuccess}
          onSubmitAction={odoType === "departure" ? recordDepartureOdometer : recordArrivalOdometer}
          vehiclePlate={activeTrip.car?.licensePlate}
          previousOdometer={odoType === "arrival" ? activeTrip.startOdometer || undefined : undefined}
        />
      )}
    </div>
  );
}
