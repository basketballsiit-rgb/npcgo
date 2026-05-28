"use client";

import { useState } from "react";
import { editVehicleRequest, deleteVehicleRequest } from "@/app/actions/requests";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit, Trash2, ShieldAlert } from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

interface RequestActionsProps {
  request: any;
}

export function AdminRequestActions({ request }: RequestActionsProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form states
  const [purpose, setPurpose] = useState(request.purpose || "");
  const [destination, setDestination] = useState(request.destination || "");
  const [province, setProvince] = useState(request.province || "น่าน");
  const [startDateTime, setStartDateTime] = useState(
    request.startDateTime ? new Date(request.startDateTime).toISOString().slice(0, 16) : ""
  );
  const [endDateTime, setEndDateTime] = useState(
    request.endDateTime ? new Date(request.endDateTime).toISOString().slice(0, 16) : ""
  );
  const [passengerCount, setPassengerCount] = useState(request.passengerCount?.toString() || "1");
  const [passengerNames, setPassengerNames] = useState(request.passengerNames || "");
  const [status, setStatus] = useState(request.status || "Pending_Dept_Approval");
  const [refOrderNumber, setRefOrderNumber] = useState(request.refOrderNumber || "");

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("purpose", purpose);
      formData.append("destination", destination);
      formData.append("province", province);
      formData.append("startDateTime", startDateTime);
      formData.append("endDateTime", endDateTime);
      formData.append("passengerCount", passengerCount);
      formData.append("passengerNames", passengerNames);
      formData.append("status", status);
      formData.append("refOrderNumber", refOrderNumber);

      const res = await editVehicleRequest(request.requestId, formData);
      if (res.success) {
        setIsOpen(false);
        Swal.fire({
          title: "แก้ไขสำเร็จ",
          text: "ปรับปรุงข้อมูลคำขอใช้รถเรียบร้อยแล้ว",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        router.refresh();
      }
    } catch (err: any) {
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: err.message || "ไม่สามารถแก้ไขข้อมูลได้",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "ยืนยันการลบคำขอ?",
      text: `คุณแน่ใจหรือไม่ที่จะลบใบขอใช้รถเลขที่ #${request.requestId}? การกระทำนี้ไม่สามารถย้อนกลับได้`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "ใช่, ลบเลย",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      const res = await deleteVehicleRequest(request.requestId);
      if (res.success) {
        Swal.fire({
          title: "ลบสำเร็จ",
          text: "ลบรายการคำขอเรียบร้อยแล้ว",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        router.refresh();
      }
    } catch (err: any) {
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: err.message || "ไม่สามารถลบข้อมูลได้",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger render={
          <Button
            variant="outline"
            size="sm"
            className="h-8 border-slate-200 text-slate-600 hover:text-teal-600 hover:bg-teal-50 gap-1.5 font-medium rounded-xl text-xs"
          />
        }>
          <Edit className="w-3.5 h-3.5" /> แก้ไข (Admin)
        </DialogTrigger>
        <DialogContent className="max-w-lg bg-white text-slate-800 rounded-2xl max-h-[90vh] overflow-y-auto scrollbar-thin">
          <DialogHeader>
            <DialogTitle className="text-lg font-black text-slate-800 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-teal-600" />
              แก้ไขข้อมูลคำขอใช้รถ #{request.requestId} (โหมดแอดมิน)
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleEdit} className="space-y-4 pt-2">
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-slate-600">วัตถุประสงค์การใช้รถ <span className="text-red-500">*</span></Label>
              <Input
                required
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="border-slate-200"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-slate-600">สถานที่ปลายทาง <span className="text-red-500">*</span></Label>
                <Input
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="border-slate-200"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-slate-600">จังหวัดปลายทาง <span className="text-red-500">*</span></Label>
                <Input
                  required
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  className="border-slate-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-slate-600">วันเวลาเดินทางไป <span className="text-red-500">*</span></Label>
                <Input
                  required
                  type="datetime-local"
                  value={startDateTime}
                  onChange={(e) => setStartDateTime(e.target.value)}
                  className="border-slate-200"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-slate-600">วันเวลาเดินทางกลับ <span className="text-red-500">*</span></Label>
                <Input
                  required
                  type="datetime-local"
                  value={endDateTime}
                  onChange={(e) => setEndDateTime(e.target.value)}
                  className="border-slate-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-slate-600">จำนวนผู้โดยสาร <span className="text-red-500">*</span></Label>
                <Input
                  required
                  type="number"
                  min="1"
                  value={passengerCount}
                  onChange={(e) => setPassengerCount(e.target.value)}
                  className="border-slate-200"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-semibold text-slate-600">เลขที่หนังสือขออนุมัติ / คำสั่ง (ถ้ามี)</Label>
                <Input
                  value={refOrderNumber}
                  onChange={(e) => setRefOrderNumber(e.target.value)}
                  className="border-slate-200"
                  placeholder="เช่น 142/2569"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold text-slate-600">รายชื่อผู้เดินทาง <span className="text-red-500">*</span></Label>
              <Textarea
                required
                value={passengerNames}
                onChange={(e) => setPassengerNames(e.target.value)}
                className="border-slate-200 min-h-[60px]"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold text-slate-600">สถานะคำขอใช้รถ <span className="text-red-500">*</span></Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-full border-slate-200">
                  <SelectValue placeholder="เลือกสถานะ" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="Pending_Dept_Approval">รอหัวหน้าฝ่ายตรวจสอบ (ขั้นตอนที่ 1)</SelectItem>
                  <SelectItem value="Pending_Scheduler">รอจัดคิวรถและคนขับ (ขั้นตอนที่ 2)</SelectItem>
                  <SelectItem value="Pending_Resource_Deputy_Approval">รอรองฝ่ายบริหารฯ ตรวจสอบ (ขั้นตอนที่ 3)</SelectItem>
                  <SelectItem value="Pending_Director_Approval">รอผู้อำนวยการอนุมัติ (ขั้นตอนที่ 4)</SelectItem>
                  <SelectItem value="Approved">อนุมัติแล้ว / พร้อมเดินทาง</SelectItem>
                  <SelectItem value="Rejected">ไม่อนุมัติ</SelectItem>
                  <SelectItem value="In_Transit">กำลังเดินทาง (ออกเดินทางแล้ว)</SelectItem>
                  <SelectItem value="Completed">เสร็จสิ้นภารกิจ (เดินทางกลับถึงแล้ว)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="border-slate-200 text-slate-600">
                ยกเลิก
              </Button>
              <Button type="submit" disabled={loading} className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                {loading ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleDelete}
        className="h-8 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl text-xs"
      >
        <Trash2 className="w-4 h-4" /> ลบ
      </Button>
    </div>
  );
}
