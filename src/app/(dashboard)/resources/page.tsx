"use client";

import { useEffect, useState } from "react";
import { 
  getVehicles, getDrivers, addVehicle, addDriver, editVehicle, editDriver, deleteVehicle, deleteDriver,
  getDriverLeaves, addDriverLeave, deleteDriverLeave,
  getVehicleMaintenances, addVehicleMaintenance, deleteVehicleMaintenance,
  getVehicleTaxes, addVehicleTax, deleteVehicleTax,
  getVehicleTires, addVehicleTires, deleteVehicleTires
} from "@/app/actions/resources";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Plus, Pencil, CalendarDays, Car, Users, CalendarX, Wrench, Receipt, CircleDot, AlertTriangle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Swal from "sweetalert2";

type Vehicle = Awaited<ReturnType<typeof getVehicles>>[0];
type Driver = Awaited<ReturnType<typeof getDrivers>>[0];
type DriverLeave = Awaited<ReturnType<typeof getDriverLeaves>>[0];
type VehicleMaintenance = Awaited<ReturnType<typeof getVehicleMaintenances>>[0];
type VehicleTax = Awaited<ReturnType<typeof getVehicleTaxes>>[0];
type VehicleTire = Awaited<ReturnType<typeof getVehicleTires>>[0];

export default function ResourcesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [leaves, setLeaves] = useState<DriverLeave[]>([]);
  const [maintenances, setMaintenances] = useState<VehicleMaintenance[]>([]);
  const [taxes, setTaxes] = useState<VehicleTax[]>([]);
  const [tires, setTires] = useState<VehicleTire[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal states
  const [isVehicleOpen, setIsVehicleOpen] = useState(false);
  const [isDriverOpen, setIsDriverOpen] = useState(false);
  const [isLeaveOpen, setIsLeaveOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [isTaxOpen, setIsTaxOpen] = useState(false);
  const [isTireOpen, setIsTireOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null);

  // Controlled Select states for modals to fix display issues
  const [leaveDriverId, setLeaveDriverId] = useState("");
  const [leaveType, setLeaveType] = useState("SICK");
  
  const [maintCarId, setMaintCarId] = useState("");
  const [maintType, setMaintType] = useState("MAINTENANCE");
  const [maintStatus, setMaintStatus] = useState("SCHEDULED");
  
  const [taxCarId, setTaxCarId] = useState("");
  const [tireCarId, setTireCarId] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [v, d, l, m, t, tr] = await Promise.all([
      getVehicles(), 
      getDrivers(), 
      getDriverLeaves(),
      getVehicleMaintenances(),
      getVehicleTaxes(),
      getVehicleTires()
    ]);
    setVehicles(v);
    setDrivers(d);
    setLeaves(l);
    setMaintenances(m);
    setTaxes(t);
    setTires(tr);
    setLoading(false);
  };

  const handleAddTax = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await addVehicleTax(formData);
      setIsTaxOpen(false);
      setTaxCarId("");
      Swal.fire({ title: "บันทึกประวัติภาษีสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
      loadData();
    } catch (err: any) {
      Swal.fire({ title: "เกิดข้อผิดพลาด", text: err.message || "ไม่สามารถบันทึกข้อมูลได้", icon: "error" });
    }
  };

  const handleDeleteTax = async (id: number) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณแน่ใจหรือไม่ที่จะลบรายการประวัติภาษีนี้?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "ใช่, ลบเลย",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true
    });
    if (!result.isConfirmed) return;
    
    try {
      await deleteVehicleTax(id);
      Swal.fire({ title: "ลบข้อมูลสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
      loadData();
    } catch (err: any) {
      Swal.fire({ title: "เกิดข้อผิดพลาด", text: err.message || "ไม่สามารถลบข้อมูลได้", icon: "error" });
    }
  };

  const handleAddTires = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await addVehicleTires(formData);
      setIsTireOpen(false);
      setTireCarId("");
      Swal.fire({ title: "บันทึกประวัติการเปลี่ยนยางสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
      loadData();
    } catch (err: any) {
      Swal.fire({ title: "เกิดข้อผิดพลาด", text: err.message || "ไม่สามารถบันทึกข้อมูลได้", icon: "error" });
    }
  };

  const handleDeleteTires = async (id: number) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณแน่ใจหรือไม่ที่จะลบประวัติการเปลี่ยนยางนี้?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "ใช่, ลบเลย",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true
    });
    if (!result.isConfirmed) return;
    
    try {
      await deleteVehicleTires(id);
      Swal.fire({ title: "ลบข้อมูลสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
      loadData();
    } catch (err: any) {
      Swal.fire({ title: "เกิดข้อผิดพลาด", text: err.message || "ไม่สามารถลบข้อมูลได้", icon: "error" });
    }
  };

  const handleAddVehicle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await addVehicle(formData);
    setIsVehicleOpen(false);
    loadData();
  };

  const handleAddDriver = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await addDriver(formData);
    setIsDriverOpen(false);
    loadData();
  };

  const handleEditVehicle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingVehicle) return;
    const formData = new FormData(e.currentTarget);
    await editVehicle(editingVehicle.carId, formData);
    setEditingVehicle(null);
    Swal.fire({ title: "บันทึกสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
    loadData();
  };

  const handleEditDriver = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingDriver) return;
    const formData = new FormData(e.currentTarget);
    await editDriver(editingDriver.driverId, formData);
    setEditingDriver(null);
    Swal.fire({ title: "บันทึกสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
    loadData();
  };

  const handleDeleteVehicle = async (id: number) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณแน่ใจหรือไม่ที่จะลบรถคันนี้? การกระทำนี้ไม่สามารถย้อนกลับได้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "ใช่, ลบเลย",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true
    });
    if (!result.isConfirmed) return;
    
    await deleteVehicle(id);
    Swal.fire({ title: "ลบสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
    loadData();
  };

  const handleDeleteDriver = async (id: number) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณแน่ใจหรือไม่ที่จะลบรายชื่อพนักงานขับรถท่านนี้? การกระทำนี้ไม่สามารถย้อนกลับได้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "ใช่, ลบเลย",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true
    });
    if (!result.isConfirmed) return;
    
    await deleteDriver(id);
    Swal.fire({ title: "ลบสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
    loadData();
  };

  const handleAddDriverLeave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await addDriverLeave(formData);
      setIsLeaveOpen(false);
      setLeaveDriverId("");
      setLeaveType("SICK");
      Swal.fire({ title: "บันทึกวันลาสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
      loadData();
    } catch (err: any) {
      Swal.fire({ title: "เกิดข้อผิดพลาด", text: err.message || "ไม่สามารถบันทึกข้อมูลได้", icon: "error" });
    }
  };

  const handleDeleteDriverLeave = async (id: number) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณแน่ใจหรือไม่ที่จะยกเลิกวันลานี้?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "ใช่, ยกเลิกเลย",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true
    });
    if (!result.isConfirmed) return;
    
    await deleteDriverLeave(id);
    Swal.fire({ title: "ลบข้อมูลสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
    loadData();
  };

  const handleAddMaintenance = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await addVehicleMaintenance(formData);
      setIsMaintenanceOpen(false);
      setMaintCarId("");
      setMaintType("MAINTENANCE");
      setMaintStatus("SCHEDULED");
      Swal.fire({ title: "บันทึกข้อมูลการซ่อมบำรุงสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
      loadData();
    } catch (err: any) {
      Swal.fire({ title: "เกิดข้อผิดพลาด", text: err.message || "ไม่สามารถบันทึกข้อมูลได้", icon: "error" });
    }
  };

  const handleDeleteMaintenance = async (id: number) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณแน่ใจหรือไม่ที่จะลบรายการซ่อมบำรุงนี้?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "ใช่, ลบเลย",
      cancelButtonText: "ยกเลิก",
      reverseButtons: true
    });
    if (!result.isConfirmed) return;
    
    await deleteVehicleMaintenance(id);
    Swal.fire({ title: "ลบข้อมูลสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
    loadData();
  };

  const getMaintenanceStatusDetails = (status: string) => {
    switch (status) {
      case "SCHEDULED":
        return { label: "กำหนดการ", className: "bg-blue-50 text-blue-700 border-blue-200" };
      case "IN_PROGRESS":
        return { label: "กำลังดำเนินการ", className: "bg-amber-50 text-amber-700 border-amber-200" };
      case "COMPLETED":
        return { label: "เสร็จสิ้น", className: "bg-green-100 text-green-700 border-green-200" };
      case "CANCELLED":
        return { label: "ยกเลิก", className: "bg-slate-100 text-slate-700 border-slate-300" };
      default:
        return { label: status, className: "bg-gray-50 text-gray-700 border-gray-200" };
    }
  };

  const getMaintenanceTypeLabel = (type: string) => {
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

  const getLeaveTypeDetails = (type: string) => {
    switch (type) {
      case "SICK":
        return { label: "ลาป่วย", className: "bg-red-50 text-red-700 border-red-200" };
      case "PERSONAL":
        return { label: "ลากิจ", className: "bg-amber-50 text-amber-700 border-amber-200" };
      case "VACATION":
        return { label: "ลาพักร้อน", className: "bg-blue-50 text-blue-700 border-blue-200" };
      case "ABSENT":
        return { label: "ขาดงาน/ติดต่อไม่ได้", className: "bg-slate-100 text-slate-700 border-slate-300" };
      default:
        return { label: type, className: "bg-gray-50 text-gray-700 border-gray-200" };
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">จัดการทรัพยากร (Vehicles & Drivers)</h2>
        <p className="text-muted-foreground">เพิ่มหรือลบข้อมูลรถยนต์และพนักงานขับรถของวิทยาลัย</p>
      </div>

      <Tabs defaultValue="vehicles" className="w-full">
        <TabsList className="flex flex-wrap gap-3 bg-transparent p-0 w-fit mb-8">
          <TabsTrigger 
            value="vehicles"
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                       data-active:bg-gradient-to-br data-active:from-teal-400 data-active:to-teal-600 data-active:text-white data-active:shadow-lg data-active:shadow-teal-100/50 data-active:scale-[1.03] data-active:border-transparent
                       data-[active]:bg-gradient-to-br data-[active]:from-teal-400 data-[active]:to-teal-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-teal-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
          >
            <Car className="w-4.5 h-4.5" />
            <span>รถยนต์ราชการ</span>
          </TabsTrigger>
          <TabsTrigger 
            value="drivers"
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                       data-active:bg-gradient-to-br data-active:from-purple-400 data-active:to-purple-600 data-active:text-white data-active:shadow-lg data-active:shadow-purple-100/50 data-active:scale-[1.03] data-active:border-transparent
                       data-[active]:bg-gradient-to-br data-[active]:from-purple-400 data-[active]:to-purple-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-purple-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
          >
            <Users className="w-4.5 h-4.5" />
            <span>พนักงานขับรถ</span>
          </TabsTrigger>
          <TabsTrigger 
            value="leaves"
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                       data-active:bg-gradient-to-br data-active:from-orange-400 data-active:to-orange-600 data-active:text-white data-active:shadow-lg data-active:shadow-orange-100/50 data-active:scale-[1.03] data-active:border-transparent
                       data-[active]:bg-gradient-to-br data-[active]:from-orange-400 data-[active]:to-orange-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-orange-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
          >
            <CalendarX className="w-4.5 h-4.5" />
            <span>วันลาพนักงานขับรถ</span>
          </TabsTrigger>
          <TabsTrigger 
            value="maintenances"
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                       data-active:bg-gradient-to-br data-active:from-blue-500 data-active:to-blue-700 data-active:text-white data-active:shadow-lg data-active:shadow-blue-100/50 data-active:scale-[1.03] data-active:border-transparent
                       data-[active]:bg-gradient-to-br data-[active]:from-blue-500 data-[active]:to-blue-700 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-blue-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
          >
            <Wrench className="w-4.5 h-4.5" />
            <span>ประวัติซ่อมบำรุงรถยนต์</span>
          </TabsTrigger>
          <TabsTrigger 
            value="taxes"
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                       data-active:bg-gradient-to-br data-active:from-emerald-500 data-active:to-emerald-700 data-active:text-white data-active:shadow-lg data-active:shadow-emerald-100/50 data-active:scale-[1.03] data-active:border-transparent
                       data-[active]:bg-gradient-to-br data-[active]:from-emerald-500 data-[active]:to-emerald-700 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-emerald-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
          >
            <Receipt className="w-4.5 h-4.5" />
            <span>ประวัติการต่อภาษี/ทะเบียน</span>
          </TabsTrigger>
          <TabsTrigger 
            value="tires"
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                       data-active:bg-gradient-to-br data-active:from-zinc-600 data-active:to-zinc-800 data-active:text-white data-active:shadow-lg data-active:shadow-zinc-200/50 data-active:scale-[1.03] data-active:border-transparent
                       data-[active]:bg-gradient-to-br data-[active]:from-zinc-600 data-[active]:to-zinc-800 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-zinc-200/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
          >
            <CircleDot className="w-4.5 h-4.5" />
            <span>ประวัติการเปลี่ยนยาง</span>
          </TabsTrigger>
        </TabsList>
        
        {/* VEHICLES TAB */}
        <TabsContent value="vehicles" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">รายการรถยนต์ทั้งหมด</h3>
            <Dialog open={isVehicleOpen} onOpenChange={setIsVehicleOpen}>
              <DialogTrigger render={<Button className="bg-primary text-white" />}>
                <Plus className="mr-2 h-4 w-4" /> เพิ่มรถยนต์
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>เพิ่มรถยนต์ราชการใหม่</DialogTitle>
                  <DialogDescription>กรอกข้อมูลป้ายทะเบียนและประเภทรถ</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddVehicle} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="licensePlate">ป้ายทะเบียน <span className="text-red-500">*</span></Label>
                      <Input id="licensePlate" name="licensePlate" placeholder="เช่น นข 1234 น่าน" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand">ยี่ห้อรถ</Label>
                      <Input id="brand" name="brand" placeholder="เช่น Toyota, Isuzu" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">ประเภทรถ <span className="text-red-500">*</span></Label>
                      <Select name="type" defaultValue="รถตู้">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="รถตู้">รถตู้</SelectItem>
                          <SelectItem value="รถกระบะ">รถกระบะ</SelectItem>
                          <SelectItem value="กระบะ 4 ประตู">กระบะ 4 ประตู</SelectItem>
                          <SelectItem value="รถเก๋ง">รถเก๋ง</SelectItem>
                          <SelectItem value="รถบัส">รถบัส</SelectItem>
                          <SelectItem value="รถ 6 ล้อ">รถ 6 ล้อ</SelectItem>
                          <SelectItem value="รถ 10 ล้อ">รถ 10 ล้อ</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="capacity">ความจุผู้โดยสาร (คน)</Label>
                      <Input id="capacity" name="capacity" type="number" defaultValue="10" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="actExpiryDate">วันหมดอายุ พรบ.</Label>
                      <Input id="actExpiryDate" name="actExpiryDate" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="insuranceExpiryDate">วันหมดอายุ ประกันภัย</Label>
                      <Input id="insuranceExpiryDate" name="insuranceExpiryDate" type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxExpiryDate">วันหมดอายุ ภาษี/ทะเบียน</Label>
                    <Input id="taxExpiryDate" name="taxExpiryDate" type="date" />
                  </div>
                  <Button type="submit" className="w-full">บันทึกข้อมูล</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ป้ายทะเบียน / ยี่ห้อ</TableHead>
                  <TableHead>ประเภท / ความจุ</TableHead>
                  <TableHead>วันหมดอายุ พรบ/ประกัน/ภาษี</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead className="text-right">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={5} className="text-center py-8">กำลังโหลด...</TableCell></TableRow>
                ) : vehicles.length === 0 ? (
                  <TableRow><TableCell colSpan={5} className="text-center py-8 text-muted-foreground">ยังไม่มีข้อมูลรถยนต์ในระบบ</TableCell></TableRow>
                ) : (
                  vehicles.map((v) => (
                    <TableRow key={v.carId}>
                      <TableCell>
                        <div className="font-bold text-slate-800">{v.licensePlate}</div>
                        <div className="text-xs text-muted-foreground">{v.brand || "-"}</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{v.carType}</div>
                        <div className="text-xs text-muted-foreground">{v.capacity} คน</div>
                      </TableCell>
                      <TableCell className="text-xs space-y-1">
                        <div><span className="text-slate-500 font-medium">พรบ:</span> {v.actExpiryDate ? new Date(v.actExpiryDate).toLocaleDateString('th-TH') : "-"}</div>
                        <div><span className="text-slate-500 font-medium">ประกัน:</span> {v.insuranceExpiryDate ? new Date(v.insuranceExpiryDate).toLocaleDateString('th-TH') : "-"}</div>
                        <div><span className="text-slate-500 font-medium">ภาษี:</span> {v.taxExpiryDate ? new Date(v.taxExpiryDate).toLocaleDateString('th-TH') : "-"}</div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${v.status === 'Ready' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                          {v.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => setEditingVehicle(v)} className="text-blue-500 hover:text-blue-700 hover:bg-blue-50">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteVehicle(v.carId)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* EDIT VEHICLE DIALOG */}
          <Dialog open={!!editingVehicle} onOpenChange={(open) => !open && setEditingVehicle(null)}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>แก้ไขข้อมูลรถยนต์</DialogTitle>
                <DialogDescription>อัปเดตข้อมูลของ {editingVehicle?.licensePlate}</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleEditVehicle} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-licensePlate">ป้ายทะเบียน <span className="text-red-500">*</span></Label>
                    <Input id="edit-licensePlate" name="licensePlate" defaultValue={editingVehicle?.licensePlate} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-brand">ยี่ห้อรถ</Label>
                    <Input id="edit-brand" name="brand" defaultValue={editingVehicle?.brand || ""} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-type">ประเภทรถ <span className="text-red-500">*</span></Label>
                    <Select name="type" defaultValue={editingVehicle?.carType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="รถตู้">รถตู้</SelectItem>
                        <SelectItem value="รถกระบะ">รถกระบะ</SelectItem>
                        <SelectItem value="กระบะ 4 ประตู">กระบะ 4 ประตู</SelectItem>
                        <SelectItem value="รถเก๋ง">รถเก๋ง</SelectItem>
                        <SelectItem value="รถบัส">รถบัส</SelectItem>
                        <SelectItem value="รถ 6 ล้อ">รถ 6 ล้อ</SelectItem>
                        <SelectItem value="รถ 10 ล้อ">รถ 10 ล้อ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-capacity">ความจุผู้โดยสาร (คน)</Label>
                    <Input id="edit-capacity" name="capacity" type="number" defaultValue={editingVehicle?.capacity} required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-actExpiryDate">วันหมดอายุ พรบ.</Label>
                    <Input id="edit-actExpiryDate" name="actExpiryDate" type="date" defaultValue={editingVehicle?.actExpiryDate ? new Date(editingVehicle.actExpiryDate).toISOString().split('T')[0] : ""} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-insuranceExpiryDate">วันหมดอายุ ประกันภัย</Label>
                    <Input id="edit-insuranceExpiryDate" name="insuranceExpiryDate" type="date" defaultValue={editingVehicle?.insuranceExpiryDate ? new Date(editingVehicle.insuranceExpiryDate).toISOString().split('T')[0] : ""} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-taxExpiryDate">วันหมดอายุ ภาษี/ทะเบียน</Label>
                  <Input id="edit-taxExpiryDate" name="taxExpiryDate" type="date" defaultValue={editingVehicle?.taxExpiryDate ? new Date(editingVehicle.taxExpiryDate).toISOString().split('T')[0] : ""} />
                </div>
                <Button type="submit" className="w-full">อัปเดตข้อมูล</Button>
              </form>
            </DialogContent>
          </Dialog>
        </TabsContent>

        {/* DRIVERS TAB */}
        <TabsContent value="drivers" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">รายชื่อพนักงานขับรถทั้งหมด</h3>
            <Dialog open={isDriverOpen} onOpenChange={setIsDriverOpen}>
              <DialogTrigger render={<Button className="bg-primary text-white" />}>
                <Plus className="mr-2 h-4 w-4" /> เพิ่มคนขับ
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>เพิ่มพนักงานขับรถใหม่</DialogTitle>
                  <DialogDescription>กรอกข้อมูลชื่อและเบอร์ติดต่อของพนักงาน</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddDriver} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">ชื่อ-นามสกุล <span className="text-red-500">*</span></Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                      <Input id="phone" name="phone" placeholder="เช่น 0891234567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lineUserId">LINE User ID</Label>
                      <Input id="lineUserId" name="lineUserId" placeholder="Uxxxx..." />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="licenseNumber">เลขที่ใบขับขี่</Label>
                      <Input id="licenseNumber" name="licenseNumber" placeholder="เช่น 12345678" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="licenseExpiryDate">วันหมดอายุใบขับขี่</Label>
                      <Input id="licenseExpiryDate" name="licenseExpiryDate" type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">ที่อยู่พนักงานขับรถ</Label>
                    <textarea
                      id="address"
                      name="address"
                      className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="ระบุที่อยู่ปัจจุบัน..."
                    />
                  </div>
                  <Button type="submit" className="w-full">บันทึกข้อมูล</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ชื่อ-นามสกุล</TableHead>
                  <TableHead>ข้อมูลใบขับขี่</TableHead>
                  <TableHead>เบอร์โทรศัพท์ / ที่อยู่</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead className="text-right">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={5} className="text-center py-8">กำลังโหลด...</TableCell></TableRow>
                ) : drivers.length === 0 ? (
                  <TableRow><TableCell colSpan={5} className="text-center py-8 text-muted-foreground">ยังไม่มีข้อมูลพนักงานขับรถในระบบ</TableCell></TableRow>
                ) : (
                  drivers.map((d) => {
                    const expiryDate = d.licenseExpiryDate ? new Date(d.licenseExpiryDate) : null;
                    const isExpired = expiryDate ? expiryDate < new Date() : false;
                    return (
                      <TableRow key={d.driverId}>
                        <TableCell>
                          <div className="font-bold text-slate-800">{d.driverName}</div>
                          {d.lineUserId ? (
                            <div className="text-[10px] text-green-600 font-mono mt-0.5" title="ผูก LINE แล้ว">✅ เชื่อมต่อ LINE แล้ว</div>
                          ) : (
                            <div className="text-[10px] text-red-500 mt-0.5" title="ยังไม่ผูก LINE">❌ ยังไม่มี LINE ID</div>
                          )}
                        </TableCell>
                        <TableCell>
                          {d.licenseNumber ? (
                            <div className="space-y-0.5">
                              <div className="text-xs font-semibold text-slate-700">เลขที่: {d.licenseNumber}</div>
                              {expiryDate && (
                                <div className="text-xs">
                                  <span className="text-slate-500">หมดอายุ: </span>
                                  <span className={isExpired ? "text-red-500 font-semibold animate-pulse" : "text-slate-600"}>
                                    {expiryDate.toLocaleDateString('th-TH')}
                                  </span>
                                  {isExpired && (
                                    <span className="text-red-500 font-bold ml-1 animate-pulse">(หมดอายุ!)</span>
                                  )}
                                </div>
                              )}
                            </div>
                          ) : (
                            <span className="text-xs text-muted-foreground">- ไม่มีข้อมูลใบขับขี่ -</span>
                          )}
                        </TableCell>
                        <TableCell className="text-xs">
                          <div className="font-medium text-slate-700">{d.phone || "-"}</div>
                          {d.address && (
                            <div className="text-slate-500 mt-0.5 max-w-[200px] truncate" title={d.address}>
                              {d.address}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${d.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                            {d.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" onClick={() => setEditingDriver(d)} className="text-blue-500 hover:text-blue-700 hover:bg-blue-50">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteDriver(d.driverId)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>

          {/* EDIT DRIVER DIALOG */}
          <Dialog open={!!editingDriver} onOpenChange={(open) => !open && setEditingDriver(null)}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>แก้ไขข้อมูลพนักงานขับรถ</DialogTitle>
                <DialogDescription>อัปเดตข้อมูลของ {editingDriver?.driverName}</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleEditDriver} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-driver-name">ชื่อ-นามสกุล <span className="text-red-500">*</span></Label>
                  <Input id="edit-driver-name" name="name" defaultValue={editingDriver?.driverName} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-driver-phone">เบอร์โทรศัพท์</Label>
                    <Input id="edit-driver-phone" name="phone" defaultValue={editingDriver?.phone || ""} placeholder="เช่น 0891234567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-driver-lineUserId">LINE User ID</Label>
                    <Input id="edit-driver-lineUserId" name="lineUserId" defaultValue={editingDriver?.lineUserId || ""} placeholder="Uxxxx..." />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-driver-licenseNumber">เลขที่ใบขับขี่</Label>
                    <Input id="edit-driver-licenseNumber" name="licenseNumber" defaultValue={editingDriver?.licenseNumber || ""} placeholder="เช่น 12345678" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-driver-licenseExpiryDate">วันหมดอายุใบขับขี่</Label>
                    <Input
                      id="edit-driver-licenseExpiryDate"
                      name="licenseExpiryDate"
                      type="date"
                      defaultValue={editingDriver?.licenseExpiryDate ? new Date(editingDriver.licenseExpiryDate).toISOString().split('T')[0] : ""}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-driver-address">ที่อยู่พนักงานขับรถ</Label>
                  <textarea
                    id="edit-driver-address"
                    name="address"
                    className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    defaultValue={editingDriver?.address || ""}
                    placeholder="ระบุที่อยู่ปัจจุบัน..."
                  />
                </div>
                <Button type="submit" className="w-full">อัปเดตข้อมูล</Button>
              </form>
            </DialogContent>
          </Dialog>
        </TabsContent>

        {/* LEAVES TAB */}
        <TabsContent value="leaves" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">รายการวันหยุดและวันลาของพนักงานขับรถ</h3>
            <Dialog open={isLeaveOpen} onOpenChange={setIsLeaveOpen}>
              <DialogTrigger render={<Button className="bg-primary text-white hover:bg-primary/90" />}>
                <Plus className="mr-2 h-4 w-4" /> บันทึกวันลาพนักงาน
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>บันทึกประวัติวันหยุด/วันลาของพนักงาน</DialogTitle>
                  <DialogDescription>บันทึกข้อมูลวันที่ที่พนักงานขับรถไม่สามารถปฏิบัติหน้าที่ได้</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddDriverLeave} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="driverId">พนักงานขับรถ <span className="text-red-500">*</span></Label>
                    <Select name="driverId" required value={leaveDriverId} onValueChange={(val) => setLeaveDriverId(val || "")}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="เลือกพนักงานขับรถ...">
                          {drivers.find(d => d.driverId.toString() === leaveDriverId)?.driverName}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {drivers.map((d) => (
                          <SelectItem key={d.driverId} value={d.driverId.toString()}>
                            {d.driverName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="leaveType">ประเภทการลา <span className="text-red-500">*</span></Label>
                    <Select name="leaveType" value={leaveType} onValueChange={(val) => setLeaveType(val || "SICK")}>
                      <SelectTrigger className="w-full">
                        <SelectValue>
                          {leaveType === "SICK" && "ลาป่วย"}
                          {leaveType === "PERSONAL" && "ลากิจ"}
                          {leaveType === "VACATION" && "ลาพักร้อน"}
                          {leaveType === "ABSENT" && "ขาดงาน / ติดต่อไม่ได้"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SICK">ลาป่วย</SelectItem>
                        <SelectItem value="PERSONAL">ลากิจ</SelectItem>
                        <SelectItem value="VACATION">ลาพักร้อน</SelectItem>
                        <SelectItem value="ABSENT">ขาดงาน / ติดต่อไม่ได้</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">ตั้งแต่วันที่ <span className="text-red-500">*</span></Label>
                      <Input id="startDate" name="startDate" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">ถึงวันที่ <span className="text-red-500">*</span></Label>
                      <Input id="endDate" name="endDate" type="date" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">เหตุผลการลา / หมายเหตุ</Label>
                    <Input id="reason" name="reason" placeholder="เช่น เป็นไข้หวัด, ไปทำธุระต่างจังหวัด" />
                  </div>

                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">บันทึกวันลา</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border bg-white shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead>พนักงานขับรถ</TableHead>
                  <TableHead>ประเภทการลา</TableHead>
                  <TableHead>ช่วงเวลาหยุดงาน</TableHead>
                  <TableHead>สาเหตุ / หมายเหตุ</TableHead>
                  <TableHead className="text-right">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={5} className="text-center py-8">กำลังโหลด...</TableCell></TableRow>
                ) : leaves.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                      ไม่มีประวัติการหยุดงานหรือวันลาของพนักงานในระบบ
                    </TableCell>
                  </TableRow>
                ) : (
                  leaves.map((l) => {
                    const typeInfo = getLeaveTypeDetails(l.leaveType);
                    const startStr = new Date(l.startDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
                    const endStr = new Date(l.endDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
                    
                    return (
                      <TableRow key={l.leaveId} className="hover:bg-slate-50/50">
                        <TableCell>
                          <div className="font-bold text-slate-800">{l.driver.driverName}</div>
                          <div className="text-xs text-muted-foreground">{l.driver.phone || "-"}</div>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${typeInfo.className}`}>
                            {typeInfo.label}
                          </span>
                        </TableCell>
                        <TableCell className="font-medium text-slate-700">
                          {startStr === endStr ? startStr : `${startStr} - ${endStr}`}
                        </TableCell>
                        <TableCell className="max-w-[250px] truncate text-slate-600" title={l.reason || ""}>
                          {l.reason || "-"}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleDeleteDriverLeave(l.leaveId)} 
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* VEHICLE MAINTENANCES TAB */}
        <TabsContent value="maintenances" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">ประวัติการซ่อมบำรุงและการดูแลรักษารถยนต์ราชการ</h3>
            <Dialog open={isMaintenanceOpen} onOpenChange={setIsMaintenanceOpen}>
              <DialogTrigger render={<Button className="bg-primary text-white hover:bg-primary/90" />}>
                <Plus className="mr-2 h-4 w-4" /> บันทึกการส่งซ่อมบำรุง
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>บันทึกประวัติการดูแลรักษา/ซ่อมบำรุง</DialogTitle>
                  <DialogDescription>เพิ่มประวัติกิจกรรมซ่อมบำรุง ตรวจเช็คสภาพ หรือเคลมประกันรถยนต์ราชการ</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddMaintenance} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="carId">รถยนต์ราชการ <span className="text-red-500">*</span></Label>
                    <Select name="carId" required value={maintCarId} onValueChange={(val) => setMaintCarId(val || "")}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="เลือกประเภท/ทะเบียนรถ...">
                          {(() => {
                            const v = vehicles.find(v => v.carId.toString() === maintCarId);
                            return v ? `${v.licensePlate} (${v.brand || "ไม่ทราบยี่ห้อ"} - ${v.carType})` : undefined;
                          })()}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {vehicles.map((v) => (
                          <SelectItem key={v.carId} value={v.carId.toString()}>
                            {v.licensePlate} ({v.brand || "ไม่ทราบยี่ห้อ"} - {v.carType})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type">ประเภทการดูแล <span className="text-red-500">*</span></Label>
                      <Select name="type" value={maintType} onValueChange={(val) => setMaintType(val || "MAINTENANCE")}>
                        <SelectTrigger className="w-full">
                          <SelectValue>
                            {maintType === "MAINTENANCE" && "ตรวจเช็คระยะ"}
                            {maintType === "REPAIR" && "ซ่อมแซมความชำรุด"}
                            {maintType === "INSPECTION" && "ตรวจสภาพตามวงรอบ"}
                            {maintType === "ACCIDENT" && "เคลมประกันภัย"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="MAINTENANCE">ตรวจเช็คระยะ</SelectItem>
                          <SelectItem value="REPAIR">ซ่อมแซมความชำรุด</SelectItem>
                          <SelectItem value="INSPECTION">ตรวจสภาพตามวงรอบ</SelectItem>
                          <SelectItem value="ACCIDENT">เคลมประกันภัย</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="status">สถานะ <span className="text-red-500">*</span></Label>
                      <Select name="status" value={maintStatus} onValueChange={(val) => setMaintStatus(val || "SCHEDULED")}>
                        <SelectTrigger className="w-full">
                          <SelectValue>
                            {maintStatus === "SCHEDULED" && "กำหนดการ (Scheduled)"}
                            {maintStatus === "IN_PROGRESS" && "กำลังดำเนินการ (In Progress)"}
                            {maintStatus === "COMPLETED" && "เสร็จสิ้น (Completed)"}
                            {maintStatus === "CANCELLED" && "ยกเลิก (Cancelled)"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SCHEDULED">กำหนดการ (Scheduled)</SelectItem>
                          <SelectItem value="IN_PROGRESS">กำลังดำเนินการ (In Progress)</SelectItem>
                          <SelectItem value="COMPLETED">เสร็จสิ้น (Completed)</SelectItem>
                          <SelectItem value="CANCELLED">ยกเลิก (Cancelled)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">เริ่มส่งซ่อมบำรุง <span className="text-red-500">*</span></Label>
                      <Input id="startDate" name="startDate" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">กำหนดการเสร็จสิ้น <span className="text-red-500">*</span></Label>
                      <Input id="endDate" name="endDate" type="date" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cost">ค่าใช้จ่ายประมาณการ (บาท)</Label>
                    <Input id="cost" name="cost" type="number" step="0.01" placeholder="เช่น 1500 หรือเว้นว่างไว้" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">รายละเอียดอาการชำรุด / รายการดูแลรักษา</Label>
                    <textarea
                      id="details"
                      name="details"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="ระบุ เช่น เปลี่ยนน้ำมันเครื่องและไส้กรอง กรองอากาศ หรือระบุอาการเสีย..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white">บันทึกประวัติซ่อมบำรุง</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border bg-white shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead>ทะเบียนรถ / ยี่ห้อ</TableHead>
                  <TableHead>ประเภทการบำรุง</TableHead>
                  <TableHead>ช่วงเวลาดำเนินการ</TableHead>
                  <TableHead>ค่าซ่อมบำรุง</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead>รายละเอียด / บันทึกชำรุด</TableHead>
                  <TableHead className="text-right">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={7} className="text-center py-8">กำลังโหลด...</TableCell></TableRow>
                ) : maintenances.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      ยังไม่มีประวัติการส่งซ่อมบำรุงรักษาหรือดูแลสภาพรถในระบบ
                    </TableCell>
                  </TableRow>
                ) : (
                  maintenances.map((m) => {
                    const statusInfo = getMaintenanceStatusDetails(m.status);
                    const startStr = new Date(m.startDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
                    const endStr = new Date(m.endDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
                    
                    return (
                      <TableRow key={m.maintenanceId} className="hover:bg-slate-50/50">
                        <TableCell>
                          <div className="font-bold text-slate-800">{m.car.licensePlate}</div>
                          <div className="text-xs text-muted-foreground">{m.car.brand || "-"} ({m.car.carType})</div>
                        </TableCell>
                        <TableCell className="font-medium text-teal-800">
                          {getMaintenanceTypeLabel(m.type)}
                        </TableCell>
                        <TableCell className="text-xs font-medium text-slate-700 text-nowrap">
                          {startStr === endStr ? startStr : `${startStr} - ${endStr}`}
                        </TableCell>
                        <TableCell className="font-bold text-slate-800">
                          {m.cost !== null ? `${m.cost.toLocaleString('th-TH', { minimumFractionDigits: 2 })} ฿` : "-"}
                        </TableCell>
                        <TableCell>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${statusInfo.className}`}>
                            {statusInfo.label}
                          </span>
                        </TableCell>
                        <TableCell className="max-w-[200px] truncate text-slate-600 text-xs" title={m.details || ""}>
                          {m.details || "-"}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleDeleteMaintenance(m.maintenanceId)} 
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* VEHICLE TAXES TAB */}
        <TabsContent value="taxes" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">ประวัติการต่อภาษีและทะเบียนรถยนต์ราชการ</h3>
            <Dialog open={isTaxOpen} onOpenChange={setIsTaxOpen}>
              <DialogTrigger render={<Button className="bg-emerald-600 hover:bg-emerald-700 text-white" />}>
                <Plus className="mr-2 h-4 w-4" /> บันทึกการต่อภาษี
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>บันทึกประวัติการเสียภาษี/ต่อทะเบียน</DialogTitle>
                  <DialogDescription>บันทึกเอกสารใบเสร็จ วันหมดอายุ และค่าใช้จ่าย (ระบุ 0 บาทได้หากเป็นรถหลวง)</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddTax} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="carId">รถยนต์ราชการ <span className="text-red-500">*</span></Label>
                    <Select name="carId" required value={taxCarId} onValueChange={(val) => setTaxCarId(val || "")}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="เลือกประเภท/ทะเบียนรถ...">
                          {(() => {
                            const v = vehicles.find(v => v.carId.toString() === taxCarId);
                            return v ? `${v.licensePlate} (${v.brand || "ไม่ทราบยี่ห้อ"} - ${v.carType})` : undefined;
                          })()}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {vehicles.map((v) => (
                          <SelectItem key={v.carId} value={v.carId.toString()}>
                            {v.licensePlate} ({v.brand || "ไม่ทราบยี่ห้อ"} - {v.carType})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="paymentDate">วันที่ต่อภาษี <span className="text-red-500">*</span></Label>
                      <Input id="paymentDate" name="paymentDate" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">วันหมดอายุถัดไป <span className="text-red-500">*</span></Label>
                      <Input id="expiryDate" name="expiryDate" type="date" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cost">ค่าใช้จ่ายจริง (บาท)</Label>
                      <Input id="cost" name="cost" type="number" step="0.01" placeholder="เช่น 0 หรือเว้นว่างไว้" defaultValue="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="receiptNumber">เลขที่ใบเสร็จ/ป้ายภาษี</Label>
                      <Input id="receiptNumber" name="receiptNumber" placeholder="เช่น เลขเครื่องหมาย หรือเว้นว่าง" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">หมายเหตุเพิ่มเติม</Label>
                    <textarea
                      id="notes"
                      name="notes"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="ระบุรายละเอียดเพิ่มเติม เช่น ได้รับยกเว้นค่าธรรมเนียมตามระเบียบ..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">บันทึกประวัติภาษี</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border bg-white shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead>ทะเบียนรถ / ยี่ห้อ</TableHead>
                  <TableHead>วันที่ชำระภาษี</TableHead>
                  <TableHead>วันหมดอายุถัดไป</TableHead>
                  <TableHead>ค่าชำระภาษี</TableHead>
                  <TableHead>เลขที่ใบเสร็จ / ป้าย</TableHead>
                  <TableHead>หมายเหตุ</TableHead>
                  <TableHead className="text-right">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={7} className="text-center py-8">กำลังโหลด...</TableCell></TableRow>
                ) : taxes.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                      ยังไม่มีประวัติการต่อภาษีหรือทะเบียนรถยนต์ราชการในระบบ
                    </TableCell>
                  </TableRow>
                ) : (
                  taxes.map((t) => {
                    const payStr = new Date(t.paymentDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
                    const expStr = new Date(t.expiryDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
                    const isExpired = new Date(t.expiryDate) <= new Date();

                    return (
                      <TableRow key={t.taxId} className="hover:bg-slate-50/50">
                        <TableCell>
                          <div className="font-bold text-slate-800">{t.car.licensePlate}</div>
                          <div className="text-xs text-muted-foreground">{t.car.brand || "-"} ({t.car.carType})</div>
                        </TableCell>
                        <TableCell className="font-medium text-slate-700">{payStr}</TableCell>
                        <TableCell className="font-semibold">
                          <span className={isExpired ? "text-red-500 font-bold animate-pulse" : "text-emerald-700"}>
                            {expStr}
                          </span>
                          {isExpired && <span className="text-[10px] text-red-500 ml-1 font-bold">(หมดอายุ!)</span>}
                        </TableCell>
                        <TableCell className="font-bold text-slate-800">
                          {t.cost !== null ? `${t.cost.toLocaleString('th-TH', { minimumFractionDigits: 2 })} ฿` : "0.00 ฿"}
                        </TableCell>
                        <TableCell className="text-xs font-mono text-slate-600">{t.receiptNumber || "-"}</TableCell>
                        <TableCell className="max-w-[200px] truncate text-slate-600 text-xs" title={t.notes || ""}>
                          {t.notes || "-"}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleDeleteTax(t.taxId)} 
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        {/* VEHICLE TIRES TAB */}
        <TabsContent value="tires" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">ประวัติการเปลี่ยนยางและตรวจสอบอายุการใช้งานยางรถยนต์</h3>
            <Dialog open={isTireOpen} onOpenChange={setIsTireOpen}>
              <DialogTrigger render={<Button className="bg-zinc-700 hover:bg-zinc-800 text-white" />}>
                <Plus className="mr-2 h-4 w-4" /> บันทึกการเปลี่ยนยาง
              </DialogTrigger>
              <DialogContent className="sm:max-w-[450px]">
                <DialogHeader>
                  <DialogTitle>บันทึกประวัติการเปลี่ยนยางรถยนต์</DialogTitle>
                  <DialogDescription>ระบุข้อมูลวันที่เปลี่ยน ยี่ห้อ สเปกยาง เลขไมล์ และตั้งค่าเลขไมล์เตือนในอนาคต</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddTires} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="carId">รถยนต์ราชการ <span className="text-red-500">*</span></Label>
                    <Select name="carId" required value={tireCarId} onValueChange={(val) => setTireCarId(val || "")}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="เลือกประเภท/ทะเบียนรถ...">
                          {(() => {
                            const v = vehicles.find(v => v.carId.toString() === tireCarId);
                            return v ? `${v.licensePlate} (${v.brand || "ไม่ทราบยี่ห้อ"} - {v.carType})` : undefined;
                          })()}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {vehicles.map((v) => (
                          <SelectItem key={v.carId} value={v.carId.toString()}>
                            {v.licensePlate} ({v.brand || "ไม่ทราบยี่ห้อ"} - {v.carType})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="changeDate">วันที่เปลี่ยนยาง <span className="text-red-500">*</span></Label>
                      <Input id="changeDate" name="changeDate" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="odometerRead">เลขไมล์รถขณะเปลี่ยน (กม.) <span className="text-red-500">*</span></Label>
                      <Input id="odometerRead" name="odometerRead" type="number" placeholder="เช่น 124500" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand">ยี่ห้อยาง</Label>
                      <Input id="brand" name="brand" placeholder="เช่น Michelin, Bridgestone" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="spec">สเปกขนาดยาง</Label>
                      <Input id="spec" name="spec" placeholder="เช่น 195/65R15" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cost">ค่าใช้จ่ายรวม (บาท)</Label>
                      <Input id="cost" name="cost" type="number" step="0.01" placeholder="เช่น 12000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tireCount">จำนวนที่เปลี่ยน (เส้น)</Label>
                      <Input id="tireCount" name="tireCount" type="number" defaultValue="4" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="limitOdometer">เลขไมล์สลับ/แจ้งเตือนรอบถัดไป</Label>
                      <Input id="limitOdometer" name="limitOdometer" type="number" placeholder="เช่น ไมล์เดิม + 50,000 กม." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="limitMonths">อายุการใช้งานแจ้งเตือน (เดือน)</Label>
                      <Input id="limitMonths" name="limitMonths" type="number" defaultValue="36" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">หมายเหตุเพิ่มเติม</Label>
                    <textarea
                      id="notes"
                      name="notes"
                      className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      placeholder="ระบุรายละเอียดเพิ่มเติม เช่น ซื้อยางจากร้านค้าแถวน่าน รับประกัน 1 ปี..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-zinc-700 hover:bg-zinc-800 text-white">บันทึกประวัติเปลี่ยนยาง</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="rounded-md border bg-white shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow>
                  <TableHead>ทะเบียนรถ / ยี่ห้อ</TableHead>
                  <TableHead>วันที่เปลี่ยนยาง</TableHead>
                  <TableHead>เลขไมล์ตอนเปลี่ยน</TableHead>
                  <TableHead>ข้อมูลยาง / สเปก</TableHead>
                  <TableHead>ค่าเปลี่ยน / จำนวน</TableHead>
                  <TableHead>เลขไมล์เปลี่ยนถัดไป</TableHead>
                  <TableHead>วันครบกำหนดอายุยาง</TableHead>
                  <TableHead className="text-right">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={8} className="text-center py-8">กำลังโหลด...</TableCell></TableRow>
                ) : tires.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                      ยังไม่มีประวัติการเปลี่ยนยางรถยนต์ราชการในระบบ
                    </TableCell>
                  </TableRow>
                ) : (
                  tires.map((t) => {
                    const changeStr = new Date(t.changeDate).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
                    
                    const limitMonths = t.limitMonths || 36;
                    const expDate = new Date(t.changeDate);
                    expDate.setMonth(expDate.getMonth() + limitMonths);
                    const expStr = expDate.toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: '2-digit' });
                    const isDateExpired = expDate <= new Date();

                    return (
                      <TableRow key={t.tireId} className="hover:bg-slate-50/50">
                        <TableCell>
                          <div className="font-bold text-slate-800">{t.car.licensePlate}</div>
                          <div className="text-xs text-muted-foreground">{t.car.brand || "-"} ({t.car.carType})</div>
                        </TableCell>
                        <TableCell className="font-medium text-slate-700">{changeStr}</TableCell>
                        <TableCell className="font-mono text-xs">{t.odometerRead.toLocaleString()} กม.</TableCell>
                        <TableCell>
                          <div className="font-semibold text-slate-800 text-xs">{t.brand || "-"}</div>
                          <div className="text-[10px] text-slate-500 font-mono">{t.spec || "-"}</div>
                        </TableCell>
                        <TableCell className="text-xs">
                          <div className="font-bold text-slate-800">{t.cost !== null ? `${t.cost.toLocaleString()} ฿` : "-"}</div>
                          <div className="text-[10px] text-slate-500">{t.tireCount} เส้น</div>
                        </TableCell>
                        <TableCell className="font-mono text-xs text-blue-700 font-semibold">
                          {t.limitOdometer ? `${t.limitOdometer.toLocaleString()} กม.` : "-"}
                        </TableCell>
                        <TableCell className="text-xs">
                          <span className={isDateExpired ? "text-red-500 font-bold animate-pulse" : "text-slate-600"}>
                            {expStr}
                          </span>
                          {isDateExpired && <span className="text-[10px] text-red-500 ml-1 font-bold">(หมดอายุ!)</span>}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleDeleteTires(t.tireId)} 
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
