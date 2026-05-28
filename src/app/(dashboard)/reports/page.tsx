"use client";

import { useEffect, useState } from "react";
import { getReportData } from "@/app/actions/reports";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format, subMonths } from "date-fns";
import { th } from "date-fns/locale";
import { Download, Printer } from "lucide-react";
import Swal from "sweetalert2";

type ReportDataType = Awaited<ReturnType<typeof getReportData>>[0];

export default function ReportsPage() {
  const [data, setData] = useState<ReportDataType[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [startDate, setStartDate] = useState(format(subMonths(new Date(), 1), "yyyy-MM-dd"));
  const [endDate, setEndDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [status, setStatus] = useState("all");

  useEffect(() => {
    loadData();
  }, [startDate, endDate, status]);

  const loadData = async () => {
    setLoading(true);
    try {
      const results = await getReportData(startDate, endDate, status);
      setData(results);
    } catch (e) {
      console.error(e);
      Swal.fire({
        title: "ผิดพลาด",
        text: "ไม่สามารถดึงข้อมูลได้ (อาจไม่มีสิทธิ์เข้าถึง)",
        icon: "error"
      });
    }
    setLoading(false);
  };

  const translateStatus = (st: string) => {
    switch (st) {
      case "Pending_Dept_Approval": return "รออนุมัติจากแผนก";
      case "Pending_Scheduler": return "รอจัดคิวรถ";
      case "Approved": return "อนุมัติเรียบร้อย";
      case "Rejected": return "ไม่อนุมัติ";
      default: return st;
    }
  };

  const handleExportCSV = () => {
    if (data.length === 0) {
      Swal.fire({
        title: "ไม่มีข้อมูล",
        text: "ไม่มีข้อมูลสำหรับส่งออก",
        icon: "info"
      });
      return;
    }

    // CSV Header
    const headers = ["วันที่ขอ", "ชื่อผู้ขอ", "แผนก", "สถานที่", "วัตถุประสงค์", "ผู้โดยสาร(คน)", "วันที่เดินทางไป", "วันที่เดินทางกลับ", "รถที่ใช้", "คนขับ", "สถานะ"];
    
    // CSV Rows
    const csvRows = data.map(row => [
      format(new Date(row.createdAt), "dd/MM/yyyy HH:mm"),
      `"${row.requesterName}"`,
      `"${row.departmentName}"`,
      `"${row.destination}"`,
      `"${row.purpose}"`,
      row.passengerCount,
      format(new Date(row.startDateTime), "dd/MM/yyyy HH:mm"),
      format(new Date(row.endDateTime), "dd/MM/yyyy HH:mm"),
      `"${row.carLicense}"`,
      `"${row.driverName}"`,
      `"${translateStatus(row.status)}"`
    ].join(","));

    // Add UTF-8 BOM so Excel opens Thai fonts correctly
    const csvContent = "\uFEFF" + [headers.join(","), ...csvRows].join("\n");
    
    // Download Trigger
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `npcgo_report_${format(new Date(), "yyyyMMdd")}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">รายงาน (Reports)</h2>
          <p className="text-muted-foreground">สรุปข้อมูลประวัติการขออนุญาตใช้รถราชการ</p>
        </div>
        <Button onClick={handleExportCSV} className="bg-green-600 hover:bg-green-700 text-white">
          <Download className="mr-2 h-4 w-4" /> Export Excel (CSV)
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 p-4 bg-white rounded-md border items-end">
        <div className="space-y-1">
          <Label htmlFor="startDate">ตั้งแต่วันที่</Label>
          <Input id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="endDate">ถึงวันที่</Label>
          <Input id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div className="space-y-1 w-[200px]">
          <Label>สถานะคำขอ</Label>
          <Select value={status} onValueChange={(val) => setStatus(val || "all")}>
            <SelectTrigger>
              <SelectValue placeholder="ทุกสถานะ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">ทุกสถานะ</SelectItem>
              <SelectItem value="Approved">อนุมัติเรียบร้อย</SelectItem>
              <SelectItem value="Pending_Dept_Approval">รออนุมัติจากแผนก</SelectItem>
              <SelectItem value="Pending_Scheduler">รอจัดคิวรถ</SelectItem>
              <SelectItem value="Rejected">ไม่อนุมัติ</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" onClick={loadData}>ค้นหาใหม่</Button>
      </div>

      {/* Table */}
      <div className="rounded-md border bg-white overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>วันที่ขอ</TableHead>
              <TableHead>ผู้ขอ / แผนก</TableHead>
              <TableHead>สถานที่</TableHead>
              <TableHead>เดินทางไป</TableHead>
              <TableHead>รถที่ใช้ / คนขับ</TableHead>
              <TableHead>สถานะ</TableHead>
              <TableHead className="text-right">พิมพ์</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow><TableCell colSpan={7} className="text-center py-8">กำลังโหลดข้อมูล...</TableCell></TableRow>
            ) : data.length === 0 ? (
              <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">ไม่พบข้อมูลในช่วงเวลาที่เลือก</TableCell></TableRow>
            ) : (
              data.map((row) => (
                <TableRow key={row.requestId}>
                  <TableCell className="text-sm">{format(new Date(row.createdAt), "dd MMM yyyy", { locale: th })}</TableCell>
                  <TableCell>
                    <div className="font-medium">{row.requesterName}</div>
                    <div className="text-xs text-muted-foreground">{row.departmentName}</div>
                  </TableCell>
                  <TableCell>
                    <div className="max-w-[200px] truncate" title={row.destination}>{row.destination}</div>
                  </TableCell>
                  <TableCell className="text-sm">
                    {format(new Date(row.startDateTime), "dd MMM yyyy", { locale: th })}
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-sm">{row.carLicense}</div>
                    <div className="text-xs text-muted-foreground">{row.driverName}</div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">{translateStatus(row.status)}</span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => window.open(`/npcgo/print/request/${row.requestId}`, '_blank')}
                      title="พิมพ์ใบขออนุญาตใช้รถ"
                      className="text-slate-600 hover:text-primary hover:bg-slate-50"
                    >
                      <Printer className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
