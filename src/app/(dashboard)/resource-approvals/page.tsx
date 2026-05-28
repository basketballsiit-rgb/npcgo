"use client";

import { useEffect, useState } from "react";
import { getResourceApprovals, updateResourceApprovalStatus } from "@/app/actions/resource-approvals";
import { saveApproverSignature } from "@/app/actions/approvals";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { Printer, User, MapPin, Calendar, MessageSquare, ClipboardList, Check, X, Car, Users } from "lucide-react";
import Swal from "sweetalert2";
import { SignatureApprovalDialog } from "@/components/ui/signature-approval-dialog";

type RequestType = Awaited<ReturnType<typeof getResourceApprovals>>[0];

export default function ResourceApprovalsPage() {
  const [requests, setRequests] = useState<RequestType[]>([]);
  const [loading, setLoading] = useState(true);
  const [sigOpen, setSigOpen] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);

  // States for inline rejection reasons on mobile
  const [activeRejectionId, setActiveRejectionId] = useState<number | null>(null);
  const [rejectionReasonText, setRejectionReasonText] = useState("");

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = async () => {
    setLoading(true);
    const data = await getResourceApprovals();
    setRequests(data);
    setLoading(false);
  };

  const handleAction = async (requestId: number, status: string, customRejectionReason?: string) => {
    if (status === "Pending_Director_Approval") {
      // Open signature dialog
      setSelectedRequestId(requestId);
      setSigOpen(true);
      return;
    }

    let reason = customRejectionReason;

    // Direct path for rejection
    if (!reason) {
      const result = await Swal.fire({
        title: `ยืนยันการไม่อนุมัติ?`,
        text: `คุณต้องการไม่อนุมัติคิวรถและปฏิเสธคำขอใช้รถนี้ใช่หรือไม่?`,
        input: 'textarea',
        inputPlaceholder: 'ระบุเหตุผลการไม่อนุมัติคิวรถ...',
        inputAttributes: {
          'aria-label': 'ระบุเหตุผลการไม่อนุมัติคิวรถ'
        },
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc2626",
        cancelButtonColor: "#6b7280",
        confirmButtonText: `ยืนยันไม่อนุมัติ`,
        cancelButtonText: "ยกเลิก",
        reverseButtons: true,
        inputValidator: (value) => {
          if (!value || value.trim() === "") {
            return 'กรุณากรอกเหตุผลการไม่อนุมัติคิวรถด้วยครับ';
          }
        }
      });

      if (!result.isConfirmed) return;
      reason = result.value;
    }

    await updateResourceApprovalStatus(requestId, status, reason);
    Swal.fire({
      title: "สำเร็จ",
      text: `ทำรายการไม่อนุมัติคิวรถเรียบร้อยแล้ว`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    });
    
    setActiveRejectionId(null);
    setRejectionReasonText("");
    loadRequests();
  };

  const handleSignatureConfirm = async (signatureOption: "saved" | "fresh", freshBase64Data?: string) => {
    if (!selectedRequestId) return;

    // 1. Save digital signature for resource deputy
    await saveApproverSignature(selectedRequestId, "resource_deputy", signatureOption, freshBase64Data);

    // 2. Update request status to proceed to Director approval
    await updateResourceApprovalStatus(selectedRequestId, "Pending_Director_Approval");

    Swal.fire({
      title: "สำเร็จ",
      text: `อนุมัติคิวรถและลงลายมือชื่อเรียบร้อยแล้ว`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false
    });

    setSigOpen(false);
    setSelectedRequestId(null);
    loadRequests();
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-800 flex items-center gap-2">
            <span className="h-6 w-1.5 rounded-full bg-gradient-to-b from-purple-500 to-indigo-500"></span>
            พิจารณาอนุมัติคิวรถ
          </h2>
          <p className="text-sm text-slate-500 mt-1">รายการขออนุญาตใช้รถที่จัดคิวเรียบร้อยแล้ว รอการตรวจสอบจากรองผู้อำนวยการฝ่ายทรัพยากรฯ</p>
        </div>
        <Badge variant="outline" className="bg-purple-50/50 text-purple-700 border-purple-200/50 px-3 py-1 text-xs font-semibold rounded-full shadow-sm">
          รองฯ ฝ่ายทรัพยากรฯ
        </Badge>
      </div>

      {/* Desktop view: hidden on mobile, shown on md and above */}
      <div className="hidden md:block rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className="font-semibold text-slate-700">วันเวลาเดินทาง</TableHead>
              <TableHead className="font-semibold text-slate-700">สถานที่/ผู้ขอ</TableHead>
              <TableHead className="font-semibold text-slate-700">รถยนต์</TableHead>
              <TableHead className="font-semibold text-slate-700">คนขับ</TableHead>
              <TableHead className="font-semibold text-slate-700">สถานะ</TableHead>
              <TableHead className="text-right font-semibold text-slate-700">จัดการ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-12 text-slate-400">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    <span>กำลังโหลดข้อมูล...</span>
                  </div>
                </TableCell>
              </TableRow>
            ) : requests.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-12 text-slate-400">
                  ไม่มีรายการรออนุมัติ
                </TableCell>
              </TableRow>
            ) : (
              requests.map((req) => (
                <TableRow key={req.requestId} className="hover:bg-slate-50/30 transition-colors">
                  <TableCell>
                    <div className="text-sm font-semibold text-slate-700">{format(new Date(req.startDateTime), "d MMM yy HH:mm", { locale: th })}</div>
                    <div className="text-xs text-slate-400 mt-0.5">ถึง {format(new Date(req.endDateTime), "d MMM yy HH:mm", { locale: th })}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-bold text-slate-800">{req.destination}</div>
                    <div className="text-xs text-slate-500 mt-0.5">โดย {req.requesterName}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-bold text-purple-700">{req.car?.licensePlate || "-"}</div>
                    {req.car?.carType && (
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">{req.car.carType}</div>
                    )}
                    <div className="text-xs text-slate-400 font-light">{req.car?.brand || ""}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-bold text-indigo-700">{req.driver?.driverName || "-"}</div>
                    {req.driver?.phone && (
                      <div className="text-xs text-slate-400 font-light mt-0.5">โทร: {req.driver.phone}</div>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200/50 rounded-full font-medium">
                      รอตรวจสอบคิวรถ
                    </Badge>
                  </TableCell>
                  <TableCell className="space-x-2 whitespace-nowrap text-right">
                    <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50/50 rounded-xl" onClick={() => handleAction(req.requestId, "Rejected")}>
                      ไม่อนุมัติ
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white rounded-xl shadow-sm hover:shadow transition-all" onClick={() => handleAction(req.requestId, "Pending_Director_Approval")}>
                      อนุมัติคิวรถ
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => window.open(`/npcgo/print/request/${req.requestId}`, '_blank')}
                      title="พิมพ์ใบขออนุญาตใช้รถ"
                      className="rounded-xl hover:bg-slate-50 border-slate-200"
                    >
                      <Printer className="h-4 w-4 text-slate-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile view: shown on mobile, hidden on md and above */}
      <div className="md:hidden space-y-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-3 bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-100/60 shadow-sm">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-slate-400 font-light">กำลังโหลดคำขอรอพิจารณา...</p>
          </div>
        ) : requests.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-3 bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-100/60 shadow-sm">
            <div className="p-3 bg-slate-50 rounded-full text-slate-400">
              <ClipboardList className="w-8 h-8" />
            </div>
            <p className="text-sm text-slate-400 font-light">ไม่มีรายการรอพิจารณาอนุมัติ</p>
          </div>
        ) : (
          requests.map((req) => (
            <div 
              key={req.requestId}
              className="bg-white/95 backdrop-blur-sm border border-slate-100 rounded-3xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all duration-300 relative overflow-hidden"
            >
              {/* Soft decorative header glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-500"></div>

              {/* Header Info */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100/50 flex items-center justify-center text-purple-600 font-bold text-sm">
                    {req.requesterName.substring(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm leading-tight">{req.requesterName}</h4>
                    <span className="text-[10px] font-medium text-slate-400 block mt-0.5">
                      ยื่นคำขอเมื่อ {format(new Date(req.createdAt), "d MMM yy", { locale: th })}
                    </span>
                  </div>
                </div>
                <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200/50 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  รอตรวจคิวรถ
                </Badge>
              </div>

              {/* Details card */}
              <div className="space-y-2.5 pt-1">
                {/* Destination */}
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-800 block text-xs leading-normal">
                      {req.destination}
                    </span>
                    <span className="text-slate-500 font-light block mt-0.5 leading-normal">
                      วัตถุประสงค์: {req.purpose}
                    </span>
                  </div>
                </div>

                {/* Date Time */}
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-700 block">
                      ไป: {format(new Date(req.startDateTime), "d MMM yy (HH:mm น.)", { locale: th })}
                    </span>
                    <span className="font-semibold text-slate-400 block mt-0.5">
                      กลับ: {format(new Date(req.endDateTime), "d MMM yy (HH:mm น.)", { locale: th })}
                    </span>
                  </div>
                </div>

                {/* Allocated Vehicle and Driver - Elegant Two-column grid */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {/* Car Box */}
                  <div className="flex items-start gap-2 bg-purple-50/30 p-2.5 rounded-xl border border-purple-100/30">
                    <Car className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <div className="text-[10px] leading-tight">
                      <span className="font-bold text-slate-800 block">ทะเบียนรถ</span>
                      <span className="text-purple-700 font-bold block mt-0.5">{req.car?.licensePlate || "-"}</span>
                      {req.car?.carType && (
                        <span className="text-slate-600 font-semibold block mt-0.5 text-[9px]">{req.car.carType}</span>
                      )}
                      {req.car?.brand && (
                        <span className="text-slate-400 block text-[9px] font-light">{req.car.brand}</span>
                      )}
                    </div>
                  </div>

                  {/* Driver Box */}
                  <div className="flex items-start gap-2 bg-indigo-50/30 p-2.5 rounded-xl border border-indigo-100/30">
                    <Users className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <div className="text-[10px] leading-tight">
                      <span className="font-bold text-slate-800 block">พนักงานขับ</span>
                      <span className="text-indigo-700 font-bold block mt-0.5">{req.driver?.driverName || "-"}</span>
                      {req.driver?.phone && (
                        <span className="text-slate-400 block text-[9px] mt-0.5 font-light">โทร: {req.driver.phone}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {activeRejectionId !== req.requestId ? (
                <div className="grid grid-cols-3 gap-2.5 pt-2">
                  <button 
                    onClick={() => {
                      setActiveRejectionId(req.requestId);
                      setRejectionReasonText("");
                    }}
                    className="flex items-center justify-center gap-1.5 py-3 rounded-2xl border border-red-200 text-red-600 font-bold text-xs hover:bg-red-50/50 active:scale-[0.98] transition-all bg-white"
                  >
                    <X className="w-3.5 h-3.5" />
                    ไม่อนุมัติ
                  </button>
                  <button 
                    onClick={() => handleAction(req.requestId, "Pending_Director_Approval")}
                    className="col-span-2 flex items-center justify-center gap-1.5 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-extrabold text-xs shadow-md shadow-indigo-100/50 hover:from-purple-600 hover:to-indigo-700 active:scale-[0.98] transition-all"
                  >
                    <Check className="w-3.5 h-3.5" />
                    ลงนามอนุมัติคิว
                  </button>
                </div>
              ) : (
                /* Sliding down rejection text area inline inside the card */
                <div className="space-y-3 pt-2 bg-slate-50/60 p-3.5 rounded-2xl border border-red-100/50 animate-in fade-in slide-in-from-top duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      ระบุเหตุผลการไม่อนุมัติคิวรถ
                    </span>
                    <button 
                      onClick={() => setActiveRejectionId(null)}
                      className="text-slate-400 hover:text-slate-600 text-xs p-1"
                    >
                      ยกเลิก
                    </button>
                  </div>
                  <textarea
                    rows={2}
                    value={rejectionReasonText}
                    onChange={(e) => setRejectionReasonText(e.target.value)}
                    placeholder="กรอกเหตุผลการปฏิเสธการจัดสรรคิวรถ..."
                    className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-red-400/80 bg-white placeholder-slate-400 text-slate-700 font-light"
                  />
                  <div className="flex justify-end gap-2">
                    <button 
                      onClick={() => setActiveRejectionId(null)}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-500 font-bold text-[10px] bg-white"
                    >
                      ย้อนกลับ
                    </button>
                    <button 
                      onClick={() => {
                        if (!rejectionReasonText.trim()) {
                          Swal.fire({
                            title: "กรุณาระบุเหตุผล",
                            text: "กรุณากรอกเหตุผลเพื่อใช้ยืนยันการไม่อนุมัติคิวรถด้วยครับ",
                            icon: "warning",
                            confirmButtonColor: "#dc2626"
                          });
                          return;
                        }
                        handleAction(req.requestId, "Rejected", rejectionReasonText);
                      }}
                      className="px-4 py-1.5 rounded-lg bg-red-600 text-white font-extrabold text-[10px] shadow hover:bg-red-700 transition-all"
                    >
                      ส่งไม่อนุมัติ
                    </button>
                  </div>
                </div>
              )}

              {/* Open in print sheet button */}
              <div className="flex justify-end pt-1">
                <button 
                  onClick={() => window.open(`/npcgo/print/request/${req.requestId}`, '_blank')}
                  className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-slate-600 px-2.5 py-1.5 rounded-lg border border-slate-100 hover:bg-slate-50/50 transition-colors"
                >
                  <Printer className="w-3 h-3" />
                  <span>พิมพ์ใบคำขอ</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <SignatureApprovalDialog
        isOpen={sigOpen}
        onClose={() => {
          setSigOpen(false);
          setSelectedRequestId(null);
        }}
        onConfirm={handleSignatureConfirm}
        title="อนุมัติการจัดรถ (รองฝ่ายทรัพยากรฯ)"
        description="กรุณาเลือกลงนามเพื่อตรวจสอบและยืนยันการจัดยานพาหนะและพนักงานขับรถ ก่อนเสนอผู้อำนวยการเพื่ออนุมัติขั้นสุดท้าย"
      />
    </div>
  );
}
