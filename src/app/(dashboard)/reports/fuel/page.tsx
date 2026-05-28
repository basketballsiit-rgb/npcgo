"use client";

import { useEffect, useState } from "react";
import { getVehicles } from "@/app/actions/resources";
import { getFuelLogs, addFuelLog, deleteFuelLog, getFuelStats } from "@/app/actions/fuel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Fuel, Trash2, Plus, CalendarDays, Coins, TrendingUp, TrendingDown, 
  Info, Award, Sparkles, AlertCircle, FileSpreadsheet
} from "lucide-react";
import { format, subMonths } from "date-fns";
import { th } from "date-fns/locale";
import Swal from "sweetalert2";

type Vehicle = Awaited<ReturnType<typeof getVehicles>>[0];
type FuelLog = Awaited<ReturnType<typeof getFuelLogs>>[0];
type FuelStats = Awaited<ReturnType<typeof getFuelStats>>;

export default function FuelReportPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [logs, setLogs] = useState<FuelLog[]>([]);
  const [stats, setStats] = useState<FuelStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Form Fields State
  const [amount, setAmount] = useState("");
  const [fillDate, setFillDate] = useState(format(new Date(), "yyyy-MM-dd"));
  const [carId, setCarId] = useState("none");
  const [providerType, setProviderType] = useState("ปตท. ในจังหวัดน่าน");
  const [customProvider, setCustomProvider] = useState("");
  const [liters, setLiters] = useState("");
  const [odometerRead, setOdometerRead] = useState("");
  const [requestId, setRequestId] = useState("");
  const [refSlip, setRefSlip] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      const [v, l, s] = await Promise.all([
        getVehicles(),
        getFuelLogs(),
        getFuelStats()
      ]);
      setVehicles(v);
      setLogs(l);
      setStats(s);
    } catch (e) {
      console.error(e);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถดึงข้อมูลค่าน้ำมันได้ (อาจไม่มีสิทธิ์เข้าถึง)",
        icon: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddFuel = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!amount || !fillDate) {
      Swal.fire({ title: "กรุณากรอกข้อมูลให้ครบถ้วน", text: "จำเป็นต้องระบุจำนวนเงินและวันที่", icon: "warning" });
      return;
    }

    setIsSubmitLoading(true);
    try {
      const formData = new FormData();
      formData.append("amount", amount);
      formData.append("fillDate", fillDate);
      formData.append("carId", carId === "none" ? "" : carId);
      
      let finalProvider = providerType;
      if (providerType === "นอกจังหวัด") {
        finalProvider = customProvider ? `นอกจังหวัด: ${customProvider}` : "นอกจังหวัด";
      } else if (providerType === "อื่นๆ") {
        finalProvider = customProvider || "อื่นๆ";
      }
      formData.append("fuelProvider", finalProvider);

      formData.append("liters", liters);
      formData.append("odometerRead", odometerRead);
      formData.append("requestId", requestId);
      formData.append("refSlip", refSlip);
      formData.append("notes", notes);

      await addFuelLog(formData);

      // Reset form fields
      setAmount("");
      setFillDate(format(new Date(), "yyyy-MM-dd"));
      setCarId("none");
      setProviderType("ปตท. ในจังหวัดน่าน");
      setCustomProvider("");
      setLiters("");
      setOdometerRead("");
      setRequestId("");
      setRefSlip("");
      setNotes("");

      setIsDialogOpen(false);
      Swal.fire({
        title: "บันทึกข้อมูลสำเร็จ",
        text: "บันทึกประวัติการใช้จ่ายน้ำมันเรียบร้อยแล้ว",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
      loadData();
    } catch (err: any) {
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: err.message || "ไม่สามารถบันทึกข้อมูลได้",
        icon: "error"
      });
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const handleDeleteLog = async (id: number) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณแน่ใจหรือไม่ที่จะลบรายการนี้? การกระทำนี้ไม่สามารถย้อนกลับได้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "ใช่, ลบรายการ",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true
    });

    if (!result.isConfirmed) return;

    try {
      await deleteFuelLog(id);
      Swal.fire({
        title: "ลบสำเร็จ",
        text: "ลบรายการบันทึกเรียบร้อยแล้ว",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
      loadData();
    } catch (err: any) {
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: err.message || "ไม่สามารถลบข้อมูลได้",
        icon: "error"
      });
    }
  };

  // Helper for efficiency badge styling
  const getEfficiencyBadge = (eff: number | null) => {
    if (eff === null) {
      return (
        <Badge variant="outline" className="bg-slate-50 text-slate-500 border-slate-200 py-1 font-medium">
          รอข้อมูลเพิ่มเติม (เติมน้ำมัน ≥ 2 ครั้ง)
        </Badge>
      );
    }
    if (eff >= 15) {
      return (
        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 py-1 font-medium flex items-center gap-1 w-fit">
          <Sparkles className="w-3.5 h-3.5" /> ประหยัดยอดเยี่ยม ({eff} กม./ลิตร)
        </Badge>
      );
    }
    if (eff >= 10) {
      return (
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 py-1 font-medium w-fit">
          ระดับมาตรฐาน ({eff} กม./ลิตร)
        </Badge>
      );
    }
    return (
      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 py-1 font-medium w-fit">
        อัตราสิ้นเปลืองสูง ({eff} กม./ลิตร)
      </Badge>
    );
  };

  // Fuel trend helper
  const getTrendWidget = () => {
    if (!stats) return null;
    const current = stats.monthlySpending;
    const prev = stats.previousMonthlySpending;
    const diff = current - prev;
    
    if (prev === 0) {
      return (
        <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
          <Info className="w-3 h-3 text-slate-400" /> ไม่พบข้อมูลการเติมน้ำมันในเดือนที่แล้ว
        </div>
      );
    }

    const pct = Math.abs(Math.round((diff / prev) * 100));

    if (diff < 0) {
      return (
        <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
          <TrendingDown className="w-4 h-4" /> ประหยัดงบได้ {pct}% ({Math.abs(diff).toLocaleString()} บาท) เทียบกับเดือนก่อน
        </div>
      );
    } else if (diff > 0) {
      return (
        <div className="text-xs text-amber-600 font-semibold mt-1 flex items-center gap-1">
          <TrendingUp className="w-4 h-4" /> มีรายจ่ายเพิ่มขึ้น {pct}% ({diff.toLocaleString()} บาท) เทียบกับเดือนก่อน
        </div>
      );
    } else {
      return (
        <div className="text-xs text-slate-500 font-semibold mt-1 flex items-center gap-1">
          เท่ากันกับเดือนที่ผ่านมา (0%)
        </div>
      );
    }
  };

  if (loading && logs.length === 0) {
    return (
      <div className="flex h-[60vh] flex-col items-center justify-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-yellow-500"></div>
        <p className="text-sm font-medium text-slate-500">กำลังโหลดข้อมูลและสรุปประสิทธิภาพ...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-slate-800">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-100">
              <Fuel className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">บันทึกค่าน้ำมัน & ประสิทธิภาพรถยนต์</h2>
              <p className="text-sm text-slate-500">ระบบบริหารงบประมาณพลังงานรายคันและประมาณดัชนีอัตราสิ้นเปลือง Km/L</p>
            </div>
          </div>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger render={<Button className="bg-teal-600 hover:bg-teal-700 text-white font-medium shadow-sm transition-all duration-200" />}>
            <Plus className="mr-2 h-4 w-4" /> บันทึกการเติมน้ำมันใหม่
          </DialogTrigger>
          <DialogContent className="max-w-md bg-white text-slate-800 rounded-xl">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <Fuel className="w-5 h-5 text-teal-600" />
                บันทึกการเติมน้ำมันเชื้อเพลิง
              </DialogTitle>
              <DialogDescription className="text-slate-500">
                กรอกข้อมูลการเติมน้ำมันเพื่อบันทึกเป็นค่าใช้จ่ายสะสมและประเมินประสิทธิภาพ
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleAddFuel} className="space-y-4 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="amount" className="text-xs font-semibold text-slate-600">จำนวนเงิน (บาท) <span className="text-red-500">*</span></Label>
                  <Input 
                    id="amount" 
                    type="number" 
                    placeholder="เช่น 1500" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required 
                    min="1"
                    className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="fillDate" className="text-xs font-semibold text-slate-600">วันที่เติมเงิน <span className="text-red-500">*</span></Label>
                  <Input 
                    id="fillDate" 
                    type="date" 
                    value={fillDate}
                    onChange={(e) => setFillDate(e.target.value)}
                    required 
                    className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="carSelect" className="text-xs font-semibold text-slate-600">ระบุคันที่ใช้เติม</Label>
                <Select value={carId} onValueChange={(val) => setCarId(val || "none")}>
                  <SelectTrigger id="carSelect" className="w-full border-slate-200">
                    <SelectValue placeholder="เลือกยานพาหนะ" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="none">ไม่ระบุรถยนต์ (ค่าใช้จ่ายส่วนกลาง)</SelectItem>
                    {vehicles.map((v) => (
                      <SelectItem key={v.carId} value={v.carId.toString()}>
                        {v.brand || "ยานพาหนะ"} - {v.licensePlate} ({v.carType})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="fuelProviderSelect" className="text-xs font-semibold text-slate-600">ผู้ค้าน้ำมัน / ปั๊มน้ำมัน</Label>
                <Select value={providerType} onValueChange={(val) => setProviderType(val || "ปตท. ในจังหวัดน่าน")}>
                  <SelectTrigger id="fuelProviderSelect" className="w-full border-slate-200">
                    <SelectValue placeholder="เลือกผู้ค้าน้ำมัน" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="ปตท. ในจังหวัดน่าน">ปตท. ในจังหวัดน่าน</SelectItem>
                    <SelectItem value="บางจาก ในจังหวัดน่าน">บางจาก ในจังหวัดน่าน</SelectItem>
                    <SelectItem value="พีที ในจังหวัดน่าน">พีที ในจังหวัดน่าน</SelectItem>
                    <SelectItem value="เชลล์ ในจังหวัดน่าน">เชลล์ ในจังหวัดน่าน</SelectItem>
                    <SelectItem value="นอกจังหวัด">นอกจังหวัด (ระบุรายละเอียดเพิ่มเติม)</SelectItem>
                    <SelectItem value="อื่นๆ">อื่นๆ / ระบุชื่อปั๊มเอง</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {(providerType === "นอกจังหวัด" || providerType === "อื่นๆ") && (
                <div className="space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
                  <Label htmlFor="customProviderInput" className="text-xs font-semibold text-teal-700">
                    {providerType === "นอกจังหวัด" ? "รายละเอียดปั๊มน้ำมันนอกจังหวัด" : "ระบุชื่อปั๊มน้ำมัน"} <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="customProviderInput"
                    type="text"
                    required
                    placeholder={providerType === "นอกจังหวัด" ? "ระบุจังหวัด อำเภอ หรือชื่อปั๊ม เช่น ปตท. แพร่" : "ระบุชื่อผู้ค้า/ปั๊มน้ำมัน เช่น ปั๊มชุมชน"}
                    value={customProvider}
                    onChange={(e) => setCustomProvider(e.target.value)}
                    className="border-teal-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              )}

              {carId !== "none" && (
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-3">
                  <p className="text-[11px] font-semibold text-teal-700 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" /> ใส่ข้อมูลด้านล่างเพื่อใช้คำนวณประสิทธิภาพความประหยัด (Km/L)
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="liters" className="text-[11px] font-semibold text-slate-600">จำนวนลิตร (Liters)</Label>
                      <Input 
                        id="liters" 
                        type="number" 
                        step="0.01" 
                        placeholder="เช่น 45.2" 
                        value={liters}
                        onChange={(e) => setLiters(e.target.value)}
                        className="bg-white border-slate-200"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="odometerRead" className="text-[11px] font-semibold text-slate-600">เลขไมล์รถล่าสุด (Km)</Label>
                      <Input 
                        id="odometerRead" 
                        type="number" 
                        placeholder="เช่น 120540" 
                        value={odometerRead}
                        onChange={(e) => setOdometerRead(e.target.value)}
                        className="bg-white border-slate-200"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="requestId" className="text-xs font-semibold text-slate-600">รหัสใบงานใช้รถ (ถ้ามี)</Label>
                  <Input 
                    id="requestId" 
                    type="number" 
                    placeholder="เช่น 12" 
                    value={requestId}
                    onChange={(e) => setRequestId(e.target.value)}
                    className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="refSlip" className="text-xs font-semibold text-slate-600">รหัสใบเสร็จ/Ref ID (ถ้ามี)</Label>
                  <Input 
                    id="refSlip" 
                    type="text" 
                    placeholder="เช่น BILL-0041" 
                    value={refSlip}
                    onChange={(e) => setRefSlip(e.target.value)}
                    className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="notes" className="text-xs font-semibold text-slate-600">หมายเหตุ / รายละเอียดเพิ่มเติม</Label>
                <Textarea 
                  id="notes" 
                  placeholder="เช่น เติมปั๊ม ปตท. ในเมืองน่าน" 
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="border-slate-200 min-h-[60px]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="border-slate-200 text-slate-600">
                  ยกเลิก
                </Button>
                <Button type="submit" disabled={isSubmitLoading} className="bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                  {isSubmitLoading ? "กำลังบันทึก..." : "บันทึกรายการ"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Top Level Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">ค่าใช้จ่ายน้ำมันรวมทั้งหมด</p>
            <p className="text-3xl font-extrabold text-slate-800 tracking-tight">
              {(stats?.totalSpending || 0).toLocaleString()} <span className="text-lg font-bold text-slate-400">บาท</span>
            </p>
            <p className="text-xs text-slate-400">ข้อมูลรวมสะสมตามระบบบันทึก</p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600">
            <Coins className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">รายจ่ายประจำเดือนปัจจุบัน</p>
            <p className="text-3xl font-extrabold text-slate-800 tracking-tight">
              {(stats?.monthlySpending || 0).toLocaleString()} <span className="text-lg font-bold text-slate-400">บาท</span>
            </p>
            {getTrendWidget()}
          </div>
          <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
            <CalendarDays className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div className="space-y-1.5">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">รายจ่ายในเดือนที่ผ่านมา</p>
            <p className="text-3xl font-extrabold text-slate-800 tracking-tight">
              {(stats?.previousMonthlySpending || 0).toLocaleString()} <span className="text-lg font-bold text-slate-400">บาท</span>
            </p>
            <p className="text-xs text-slate-400">เดือน {format(subMonths(new Date(), 1), "LLLL", { locale: th })}</p>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600">
            <FileSpreadsheet className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Main Grid: Efficiency Leaderboard & Transactions */}
      <div className="grid gap-8 lg:grid-cols-1">
        {/* Vehicle Efficiency Leaderboard */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-teal-900/5 to-transparent">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">ตารางวิเคราะห์ดัชนีประสิทธิภาพและการประหยัดน้ำมัน</h3>
                <p className="text-xs text-slate-400">เรียงตามยานพาหนะและรายงานดัชนีเฉลี่ยกิโลเมตรต่อลิตร (Km/L) ด้วยวิธี Odometer Delta</p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow className="border-b border-slate-100">
                  <TableHead className="font-semibold text-slate-600">ทะเบียนรถ</TableHead>
                  <TableHead className="font-semibold text-slate-600">ยี่ห้อ / ประเภท</TableHead>
                  <TableHead className="font-semibold text-slate-600">จำนวนการเติมเงิน</TableHead>
                  <TableHead className="font-semibold text-slate-600">ค่าน้ำมันสะสม</TableHead>
                  <TableHead className="font-semibold text-slate-600">ระยะทางที่บันทึก (กิโลเมตร)</TableHead>
                  <TableHead className="font-semibold text-slate-600">ประสิทธิภาพเชื้อเพลิงเฉลี่ย</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats?.efficiencyStats.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-slate-400">
                      ไม่พบข้อมูลยานพาหนะในระบบ
                    </TableCell>
                  </TableRow>
                ) : (
                  stats?.efficiencyStats.map((item) => (
                    <TableRow key={item.carId} className="hover:bg-slate-50/50 border-b border-slate-100">
                      <TableCell className="font-bold text-slate-700">{item.licensePlate}</TableCell>
                      <TableCell className="text-slate-600">
                        {item.brand} ({item.carType})
                      </TableCell>
                      <TableCell className="text-slate-600">{item.logsCount} ครั้ง</TableCell>
                      <TableCell className="font-bold text-slate-800">
                        {item.totalSpending.toLocaleString()} บาท
                      </TableCell>
                      <TableCell className="text-slate-600">
                        {item.trackedDistance > 0 ? `${item.trackedDistance.toLocaleString()} กม.` : "-"}
                      </TableCell>
                      <TableCell>{getEfficiencyBadge(item.averageEfficiency)}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                <Fuel className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">บันทึกธุรกรรมการเติมน้ำมันล่าสุด</h3>
                <p className="text-xs text-slate-400">ประวัติการจ่ายบิลน้ำมันทั้งหมดแบบเรียลไทม์</p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow className="border-b border-slate-100">
                  <TableHead className="font-semibold text-slate-600">วันที่ทำรายการ</TableHead>
                  <TableHead className="font-semibold text-slate-600">ยานพาหนะ</TableHead>
                  <TableHead className="font-semibold text-slate-600">ผู้ค้าน้ำมัน</TableHead>
                  <TableHead className="font-semibold text-slate-600">จำนวนเงิน</TableHead>
                  <TableHead className="font-semibold text-slate-600">รายละเอียดเพิ่มเติม (ลิตร / ไมล์หน้ารถ / บิลอ้างอิง)</TableHead>
                  <TableHead className="font-semibold text-slate-600">รหัสใบงาน</TableHead>
                  <TableHead className="font-semibold text-slate-600">หมายเหตุ</TableHead>
                  <TableHead className="w-20 text-center font-semibold text-slate-600">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-12 text-slate-400">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <AlertCircle className="w-8 h-8 text-slate-300" />
                        <p className="font-medium">ยังไม่มีการบันทึกค่าน้ำมันเชื้อเพลิงใดๆ</p>
                        <p className="text-xs text-slate-400">สามารถกดปุ่ม "บันทึกการเติมน้ำมันใหม่" ด้านบนเพื่อเริ่มทำรายการ</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  logs.map((log) => (
                    <TableRow key={log.fuelLogId} className="hover:bg-slate-50/50 border-b border-slate-100">
                      <TableCell className="font-semibold text-slate-600">
                        {format(new Date(log.fillDate), "dd MMM yyyy", { locale: th })}
                      </TableCell>
                      <TableCell>
                        {log.car ? (
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-800">{log.car.licensePlate}</span>
                            <span className="text-[10px] text-slate-400">{log.car.brand}</span>
                          </div>
                        ) : (
                          <span className="text-slate-400 font-medium">ค่าสาธารณูปโภคทั่วไป</span>
                        )}
                      </TableCell>
                      <TableCell className="text-xs">
                        {log.fuelProvider ? (
                          <Badge variant="secondary" className="bg-slate-50 text-slate-700 border-slate-200">
                            {log.fuelProvider}
                          </Badge>
                        ) : (
                          <span className="text-slate-400 font-medium">-</span>
                        )}
                      </TableCell>
                      <TableCell className="font-bold text-teal-700">
                        {log.amount.toLocaleString()} บาท
                      </TableCell>
                      <TableCell className="text-xs text-slate-600">
                        <div className="space-y-0.5">
                          {log.liters && <div>เติมน้ำมัน: <span className="font-semibold text-slate-800">{log.liters} ลิตร</span></div>}
                          {log.odometerRead && <div>ไมล์สะสมรถ: <span className="font-semibold text-slate-800">{log.odometerRead.toLocaleString()} กม.</span></div>}
                          {log.refSlip && <div>เลขบิล: <span className="font-mono text-slate-700">{log.refSlip}</span></div>}
                          {!log.liters && !log.odometerRead && !log.refSlip && <span className="text-slate-400">-</span>}
                        </div>
                      </TableCell>
                      <TableCell className="text-xs">
                        {log.requestId ? (
                          <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200">
                            ใบขอใช้รถ #{log.requestId}
                          </Badge>
                        ) : (
                          <span className="text-slate-400 font-medium">-</span>
                        )}
                      </TableCell>
                      <TableCell className="text-xs text-slate-500 max-w-[150px] truncate">
                        {log.notes || "-"}
                      </TableCell>
                      <TableCell className="text-center">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleDeleteLog(log.fuelLogId)}
                          className="text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
