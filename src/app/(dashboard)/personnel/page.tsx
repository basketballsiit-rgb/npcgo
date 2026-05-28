"use client";

import { useEffect, useState } from "react";
import { getStaffList, addStaff, updateStaff, deleteStaff, getKeyRoles, saveKeyRole, getDepartments, saveDepartmentMapping, addDepartment, updateDepartment, deleteDepartment, saveSignatureBase64, deleteStaffSignature } from "@/app/actions/personnel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, Plus, Trash2, FileImage, Signature, UserCheck, Network, Building2, Users } from "lucide-react";
import { SignaturePad } from "@/components/ui/signature-pad";
import Swal from "sweetalert2";

type Staff = Awaited<ReturnType<typeof getStaffList>>[0];
type Dept = Awaited<ReturnType<typeof getDepartments>>[0];

const ROLE_OPTIONS = [
  { id: "role_director", label: "ผู้อำนวยการวิทยาลัย" },
  { id: "role_academic", label: "รองฯ ฝ่ายวิชาการ" },
  { id: "role_strategy", label: "รองฯ ฝ่ายยุทธศาสตร์และแผนงาน" },
  { id: "role_resource_deputy", label: "รองฯ ฝ่ายบริหารทรัพยากร" },
  { id: "role_student_affairs", label: "รองฯ ฝ่ายพัฒนากิจการนักเรียนฯ" },
  { id: "role_scheduler", label: "หัวหน้างานยานพาหนะ (ผู้จัดตารางรถ)" },
];

export default function PersonnelPage() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [roles, setRoles] = useState<Record<string, number | null>>({});
  const [depts, setDepts] = useState<Dept[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);
  const [sigMethod, setSigMethod] = useState<"upload" | "draw">("upload");

  // Department Modal States
  const [isAddDeptOpen, setIsAddDeptOpen] = useState(false);
  const [editingDept, setEditingDept] = useState<Dept | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const [s, r, d] = await Promise.all([getStaffList(), getKeyRoles(), getDepartments()]);
    setStaff(s);
    setRoles(r);
    setDepts(d);
    setLoading(false);
  };

  const handleAddStaff = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      await addStaff(formData);
      setIsAddOpen(false);
      Swal.fire({ title: "เพิ่มบุคลากรสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
      loadData();
    } catch (err: any) {
      Swal.fire({ title: "เกิดข้อผิดพลาด", text: err.message || "ไม่สามารถเพิ่มข้อมูลได้", icon: "error" });
    }
  };

  const handleUpdateStaff = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingStaff) return;
    const formData = new FormData(e.currentTarget);
    try {
      await updateStaff(editingStaff.id, formData);
      setEditingStaff(null);
      Swal.fire({ title: "บันทึกสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
      loadData();
    } catch (err: any) {
      Swal.fire({ title: "เกิดข้อผิดพลาด", text: err.message || "ไม่สามารถบันทึกข้อมูลได้", icon: "error" });
    }
  };

  const handleDeleteStaff = async (id: number) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณต้องการลบผู้ใช้งานนี้ออกจากระบบใช่หรือไม่? ข้อมูลประวัติบางส่วนอาจสูญหาย",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ลบข้อมูล",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#d33"
    });

    if (result.isConfirmed) {
      try {
        await deleteStaff(id);
        Swal.fire({ title: "ลบสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
        loadData();
      } catch (err: any) {
        Swal.fire({ title: "ลบไม่ได้", text: err.message || "เกิดข้อผิดพลาด", icon: "error" });
      }
    }
  };

  const handleRoleChange = async (roleKey: string, userIdStr: string) => {
    const userId = userIdStr === "none" ? null : parseInt(userIdStr);
    await saveKeyRole(roleKey, userId);
    loadData();
    // Optional: show small toast
  };

  const handleDeptMappingChange = async (deptId: number, roleKey: string) => {
    const key = roleKey === "none" ? null : roleKey;
    await saveDepartmentMapping(deptId, key);
    loadData();
  };

  const handleAddDept = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    try {
      await addDepartment(name);
      setIsAddDeptOpen(false);
      Swal.fire({ title: "เพิ่มแผนกสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
      loadData();
    } catch (err: any) {
      Swal.fire({ title: "เกิดข้อผิดพลาด", text: err.message || "ไม่สามารถเพิ่มข้อมูลได้", icon: "error" });
    }
  };

  const handleUpdateDept = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingDept) return;
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    try {
      await updateDepartment(editingDept.id, name);
      setEditingDept(null);
      Swal.fire({ title: "บันทึกสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
      loadData();
    } catch (err: any) {
      Swal.fire({ title: "เกิดข้อผิดพลาด", text: err.message || "ไม่สามารถบันทึกข้อมูลได้", icon: "error" });
    }
  };

  const handleDeleteDept = async (id: number) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณต้องการลบแผนกนี้ใช่หรือไม่?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ลบข้อมูล",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#d33"
    });

    if (result.isConfirmed) {
      try {
        await deleteDepartment(id);
        Swal.fire({ title: "ลบสำเร็จ!", icon: "success", timer: 1500, showConfirmButton: false });
        loadData();
      } catch (err: any) {
        Swal.fire({ title: "ลบไม่ได้", text: err.message || "เกิดข้อผิดพลาด", icon: "error" });
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">จัดการบุคลากรและสิทธิ์ (Personnel & Roles)</h2>
        <p className="text-muted-foreground">ตั้งค่าผู้บริหาร, จับคู่แผนก และจัดการ LINE ID ของบุคลากร</p>
      </div>

      <Tabs defaultValue="roles" className="w-full">
        <TabsList className="flex flex-wrap gap-3 bg-transparent p-0 w-fit mb-8">
          <TabsTrigger 
            value="roles"
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                       data-active:bg-gradient-to-br data-active:from-indigo-400 data-active:to-indigo-600 data-active:text-white data-active:shadow-lg data-active:shadow-indigo-100/50 data-active:scale-[1.03] data-active:border-transparent
                       data-[active]:bg-gradient-to-br data-[active]:from-indigo-400 data-[active]:to-indigo-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-indigo-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
          >
            <UserCheck className="w-4.5 h-4.5" />
            <span>ตำแหน่งบริหาร</span>
          </TabsTrigger>
          <TabsTrigger 
            value="mapping"
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                       data-active:bg-gradient-to-br data-active:from-violet-400 data-active:to-violet-600 data-active:text-white data-active:shadow-lg data-active:shadow-violet-100/50 data-active:scale-[1.03] data-active:border-transparent
                       data-[active]:bg-gradient-to-br data-[active]:from-violet-400 data-[active]:to-violet-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-violet-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
          >
            <Network className="w-4.5 h-4.5" />
            <span>จับคู่แผนก/งาน</span>
          </TabsTrigger>
          <TabsTrigger 
            value="departments"
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                       data-active:bg-gradient-to-br data-active:from-cyan-400 data-active:to-cyan-600 data-active:text-white data-active:shadow-lg data-active:shadow-cyan-100/50 data-active:scale-[1.03] data-active:border-transparent
                       data-[active]:bg-gradient-to-br data-[active]:from-cyan-400 data-[active]:to-cyan-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-cyan-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
          >
            <Building2 className="w-4.5 h-4.5" />
            <span>จัดการแผนก</span>
          </TabsTrigger>
          <TabsTrigger 
            value="staff"
            className="flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                       data-active:bg-gradient-to-br data-active:from-teal-400 data-active:to-teal-600 data-active:text-white data-active:shadow-lg data-active:shadow-teal-100/50 data-active:scale-[1.03] data-active:border-transparent
                       data-[active]:bg-gradient-to-br data-[active]:from-teal-400 data-[active]:to-teal-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-teal-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
          >
            <Users className="w-4.5 h-4.5" />
            <span>รายชื่อบุคลากร</span>
          </TabsTrigger>
        </TabsList>
        
        {/* ROLES TAB */}
        <TabsContent value="roles" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>กำหนดผู้รับผิดชอบตำแหน่งบริหาร (Key Roles)</CardTitle>
              <CardDescription>
                เลือกระบุว่าใครดำรงตำแหน่งใด (1 คนสามารถดำรงตำแหน่งได้หลายฝ่าย) 
                เพื่อใช้ในการแจ้งเตือน LINE ให้ถูกคน
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="py-8 text-center text-muted-foreground">กำลังโหลด...</div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2">
                  {ROLE_OPTIONS.map(role => (
                    <div key={role.id} className="space-y-2 p-4 border rounded-lg bg-slate-50/50">
                      <Label className="text-base font-semibold text-slate-800">{role.label}</Label>
                      <Select 
                        value={roles[role.id]?.toString() || "none"}
                        onValueChange={(val) => handleRoleChange(role.id, val || "none")}
                      >
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="เลือกบุคลากร...">
                            {roles[role.id] && staff.find(s => s.id === roles[role.id]) 
                              ? `${staff.find(s => s.id === roles[role.id])?.firstname} ${staff.find(s => s.id === roles[role.id])?.lastname}` 
                              : undefined}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none" className="text-muted-foreground italic">-- ไม่ระบุ --</SelectItem>
                          {staff.map(s => (
                            <SelectItem key={s.id} value={s.id.toString()}>
                              {s.firstname} {s.lastname}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* DEPARTMENT MAPPING TAB */}
        <TabsContent value="mapping" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>จับคู่แผนก/งาน เข้ากับ ฝ่ายบริหาร</CardTitle>
              <CardDescription>
                เวลามีบุคลากรขอใช้รถ ระบบจะดูว่าบุคลากรคนนั้นอยู่แผนก/งานอะไร แล้วส่งการแจ้งเตือนไปยัง "รองผู้อำนวยการ" ของฝ่ายที่แผนกนั้นสังกัดอยู่
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="py-8 text-center text-muted-foreground">กำลังโหลด...</div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader className="bg-slate-50">
                      <TableRow>
                        <TableHead className="w-[40%]">ชื่อแผนก / งาน</TableHead>
                        <TableHead>ขึ้นตรงกับ (สังกัดฝ่าย)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {depts.map(dept => (
                        <TableRow key={dept.id}>
                          <TableCell className="font-medium">{dept.name}</TableCell>
                          <TableCell>
                            <Select 
                              value={dept.mappedRole || "none"}
                              onValueChange={(val) => handleDeptMappingChange(dept.id, val || "none")}
                            >
                              <SelectTrigger className="w-full max-w-xs bg-white">
                                <SelectValue placeholder="เลือกฝ่ายที่สังกัด..." />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none" className="text-muted-foreground italic">-- ไม่ได้สังกัดฝ่ายไหน --</SelectItem>
                                <SelectItem value="role_director">ผู้อำนวยการวิทยาลัย</SelectItem>
                                <SelectItem value="role_academic">ฝ่ายวิชาการ</SelectItem>
                                <SelectItem value="role_strategy">ฝ่ายยุทธศาสตร์และแผนงาน</SelectItem>
                                <SelectItem value="role_resource_deputy">ฝ่ายบริหารทรัพยากร</SelectItem>
                                <SelectItem value="role_student_affairs">ฝ่ายพัฒนากิจการนักเรียนฯ</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* MANAGE DEPARTMENTS TAB */}
        <TabsContent value="departments" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">จัดการแผนก / งาน</h3>
            <Dialog open={isAddDeptOpen} onOpenChange={setIsAddDeptOpen}>
              <DialogTrigger render={<Button className="bg-primary text-white" />}>
                <Plus className="mr-2 h-4 w-4" /> เพิ่มแผนก
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>เพิ่มแผนกใหม่</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddDept} className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="dept-name">ชื่อแผนก / งาน <span className="text-red-500">*</span></Label>
                    <Input id="dept-name" name="name" required placeholder="ระบุชื่อแผนก..." />
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
                  <TableHead>รหัส</TableHead>
                  <TableHead>ชื่อแผนก / งาน</TableHead>
                  <TableHead className="text-right">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={3} className="text-center py-8">กำลังโหลด...</TableCell></TableRow>
                ) : depts.length === 0 ? (
                  <TableRow><TableCell colSpan={3} className="text-center py-8 text-muted-foreground">ไม่มีข้อมูลแผนก</TableCell></TableRow>
                ) : depts.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell className="font-medium text-muted-foreground">{d.id}</TableCell>
                    <TableCell>{d.name}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => setEditingDept(d)} className="text-blue-600">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteDept(d.id)} className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* EDIT DEPT DIALOG */}
          <Dialog open={!!editingDept} onOpenChange={(open) => !open && setEditingDept(null)}>
            <DialogContent className="sm:max-w-[425px]">
              {editingDept && (
                <>
                  <DialogHeader>
                    <DialogTitle>แก้ไขชื่อแผนก</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleUpdateDept} className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="edit-dept-name">ชื่อแผนก / งาน <span className="text-red-500">*</span></Label>
                      <Input id="edit-dept-name" name="name" defaultValue={editingDept.name} required />
                    </div>
                    <Button type="submit" className="w-full">อัปเดตข้อมูล</Button>
                  </form>
                </>
              )}
            </DialogContent>
          </Dialog>
        </TabsContent>

        {/* STAFF LIST TAB */}
        <TabsContent value="staff" className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">รายชื่อบุคลากรทั้งหมด</h3>
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
              <DialogTrigger render={<Button className="bg-primary text-white" />}>
                <Plus className="mr-2 h-4 w-4" /> เพิ่มบุคลากร
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>เพิ่มบุคลากรใหม่</DialogTitle>
                  <DialogDescription>
                    เพิ่มผู้ใช้งานใหม่เข้าระบบ (รหัสผ่านเริ่มต้นคือ 123456)
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddStaff} className="space-y-4 pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">ชื่อ <span className="text-red-500">*</span></Label>
                      <Input id="firstname" name="firstname" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">นามสกุล <span className="text-red-500">*</span></Label>
                      <Input id="lastname" name="lastname" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">ชื่อผู้ใช้ (Username) <span className="text-red-500">*</span></Label>
                      <Input id="username" name="username" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">สิทธิ์การใช้งาน <span className="text-red-500">*</span></Label>
                      <Select name="role" defaultValue="staff">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">แอดมิน (Admin)</SelectItem>
                          <SelectItem value="evaluator">ผู้ประเมิน (Evaluator)</SelectItem>
                          <SelectItem value="staff">พนักงานทั่วไป (Staff)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department_id">แผนก / งาน</Label>
                    <Select name="department_id" onValueChange={(val) => {
                      const sel = document.getElementById('add-dept-value');
                      if (sel) {
                        if (val === 'none') sel.textContent = '-- ไม่ระบุ --';
                        else {
                          const d = depts.find(d => d.id.toString() === val);
                          if (d) sel.textContent = d.name;
                        }
                      }
                    }}>
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกแผนก...">
                          <span id="add-dept-value"></span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none" className="text-muted-foreground italic">-- ไม่ระบุ --</SelectItem>
                        {depts.map(d => (
                          <SelectItem key={d.id} value={d.id.toString()}>{d.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="line_user_id">LINE User ID</Label>
                    <Input id="line_user_id" name="line_user_id" placeholder="Uxxxx..." />
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
                  <TableHead>ชื่อ - นามสกุล</TableHead>
                  <TableHead>แผนก / งาน</TableHead>
                  <TableHead>สิทธิ์ระบบ</TableHead>
                  <TableHead>LINE User ID</TableHead>
                  <TableHead>ลายเซ็น</TableHead>
                  <TableHead className="text-right">จัดการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow><TableCell colSpan={6} className="text-center py-8">กำลังโหลด...</TableCell></TableRow>
                ) : staff.map((s) => (
                  <TableRow key={s.id}>
                    <TableCell className="font-medium">{s.firstname} {s.lastname}</TableCell>
                    <TableCell>{s.departments?.name || "-"}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-[10px] uppercase tracking-wider ${
                        s.role === 'admin' ? 'bg-indigo-100 text-indigo-700' : 
                        s.role === 'evaluator' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {s.role}
                      </span>
                    </TableCell>
                    <TableCell>
                      {s.line_user_id ? (
                        <div className="text-[10px] text-green-600 font-mono mt-0.5" title={s.line_user_id}>✅ เชื่อมต่อ LINE แล้ว</div>
                      ) : (
                        <div className="text-[10px] text-red-500 mt-0.5">❌ ยังไม่มี LINE ID</div>
                      )}
                    </TableCell>
                    <TableCell>
                      {s.hasSignature ? (
                        <img 
                          src={s.signatureUrl || undefined} 
                          alt="Signature Preview" 
                          className="h-8 max-w-[80px] object-contain border rounded bg-slate-50 p-0.5 hover:scale-150 transition-transform cursor-zoom-in" 
                        />
                      ) : (
                        <span className="text-[10px] text-slate-400 italic">ไม่มีลายเซ็น</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => { setEditingStaff(s); setSigMethod("upload"); }} className="text-blue-600">
                        <Pencil className="h-4 w-4 mr-1" /> แก้ไขข้อมูล
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteStaff(s.id)} className="text-red-600 px-2" title="ลบข้อมูลผู้ใช้งาน">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* EDIT STAFF DIALOG */}
          <Dialog open={!!editingStaff} onOpenChange={(open) => !open && setEditingStaff(null)}>
            <DialogContent className="sm:max-w-[500px]">
              {editingStaff && (
                <>
                  <DialogHeader>
                    <DialogTitle>แก้ไขข้อมูลบุคลากร</DialogTitle>
                    <DialogDescription>
                      แก้ไขข้อมูลของ {editingStaff.firstname} {editingStaff.lastname}
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleUpdateStaff} className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="edit-firstname">ชื่อ <span className="text-red-500">*</span></Label>
                        <Input id="edit-firstname" name="firstname" defaultValue={editingStaff.firstname} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="edit-lastname">นามสกุล <span className="text-red-500">*</span></Label>
                        <Input id="edit-lastname" name="lastname" defaultValue={editingStaff.lastname} required />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="edit-department">แผนก / งาน</Label>
                        <Select name="department_id" defaultValue={editingStaff.departments?.id?.toString() || "none"} onValueChange={(val) => {
                          const sel = document.getElementById('edit-dept-value');
                          if (sel) {
                            if (val === 'none') sel.textContent = '-- ไม่ระบุ --';
                            else {
                              const d = depts.find(d => d.id.toString() === val);
                              if (d) sel.textContent = d.name;
                            }
                          }
                        }}>
                          <SelectTrigger>
                            <SelectValue placeholder="เลือกแผนก...">
                              <span id="edit-dept-value">
                                {editingStaff.departments?.id 
                                  ? depts.find(d => d.id === editingStaff.departments?.id)?.name 
                                  : (editingStaff.departments?.id ? undefined : "-- ไม่ระบุ --")}
                              </span>
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none" className="text-muted-foreground italic">-- ไม่ระบุ --</SelectItem>
                            {depts.map(d => (
                              <SelectItem key={d.id} value={d.id.toString()}>{d.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="edit-role">สิทธิ์การใช้งาน <span className="text-red-500">*</span></Label>
                        <Select name="role" defaultValue={editingStaff.role}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">แอดมิน (Admin)</SelectItem>
                            <SelectItem value="evaluator">ผู้ประเมิน (Evaluator)</SelectItem>
                            <SelectItem value="staff">พนักงานทั่วไป (Staff)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="edit-line">LINE User ID</Label>
                      <Input 
                        id="edit-line" 
                        name="line_user_id" 
                        defaultValue={editingStaff.line_user_id || ""} 
                        placeholder="Uxxxx..." 
                      />
                      <p className="text-[10px] text-muted-foreground">ตัวอย่าง: U1a2b3c4d5e6f7g8h9i0j...</p>
                    </div>

                    {/* SIGNATURE SECTION */}
                    <div className="space-y-2 border-t pt-4">
                      <Label className="text-sm font-semibold text-slate-800">ลายเซ็นดิจิทัลประจำตัว (Digital Signature)</Label>
                      
                      {editingStaff.hasSignature ? (
                        <div className="flex items-center justify-between p-3 bg-slate-50 border rounded-lg mb-3">
                          <div className="flex items-center gap-3">
                            <img 
                              src={editingStaff.signatureUrl || undefined} 
                              alt="Current Signature" 
                              className="h-10 max-w-[120px] object-contain bg-white border p-1 rounded" 
                            />
                            <span className="text-xs text-green-600 font-medium">มีลายเซ็นในระบบแล้ว</span>
                          </div>
                          <Button 
                            type="button" 
                            variant="outline" 
                            size="sm" 
                            className="text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50 text-xs px-2 h-8"
                            onClick={async () => {
                              const res = await deleteStaffSignature(editingStaff.id);
                              if (res.success) {
                                Swal.fire({ title: "ลบลายเซ็นสำเร็จ!", icon: "success", timer: 1000, showConfirmButton: false });
                                setEditingStaff(prev => prev ? { ...prev, hasSignature: false, signatureUrl: null } : null);
                                loadData();
                              }
                            }}
                          >
                            ลบลายเซ็นเดิม
                          </Button>
                        </div>
                      ) : (
                        <div className="text-xs text-slate-400 italic bg-slate-50/50 p-2 text-center rounded border border-dashed mb-3">
                          ยังไม่มีการลงทะเบียนลายเซ็นดิจิทัลในระบบ
                        </div>
                      )}

                      {/* Tab Selector */}
                      <div className="flex bg-slate-100 p-0.5 rounded-lg mb-3 w-fit">
                        <button
                          type="button"
                          onClick={() => setSigMethod("upload")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                            sigMethod === "upload" 
                              ? "bg-white text-slate-800 shadow-sm" 
                              : "text-slate-500 hover:text-slate-700"
                          }`}
                        >
                          <FileImage className="w-3.5 h-3.5" />
                          อัปโหลดรูปภาพ
                        </button>
                        <button
                          type="button"
                          onClick={() => setSigMethod("draw")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                            sigMethod === "draw" 
                              ? "bg-white text-slate-800 shadow-sm" 
                              : "text-slate-500 hover:text-slate-700"
                          }`}
                        >
                          <Signature className="w-3.5 h-3.5" />
                          เซ็นชื่อสดผ่านหน้าจอ
                        </button>
                      </div>

                      {sigMethod === "upload" ? (
                        <div className="space-y-1.5">
                          <Input 
                            type="file" 
                            name="signature" 
                            accept="image/*" 
                            className="bg-white file:text-xs" 
                          />
                          <p className="text-[10px] text-slate-400">
                            * รองรับไฟล์ภาพทุกประเภท (แนะนำไฟล์พื้นหลังโปร่งใส .png)
                          </p>
                        </div>
                      ) : (
                        <div className="p-2 border rounded-xl bg-slate-50/50">
                          <SignaturePad 
                            onSave={async (base64) => {
                              try {
                                const res = await saveSignatureBase64(editingStaff.id, base64);
                                if (res.success) {
                                  Swal.fire({ title: "บันทึกลายเซ็นสดสำเร็จ!", icon: "success", timer: 1200, showConfirmButton: false });
                                  
                                  // Trigger reload of data to refresh everything
                                  setEditingStaff(prev => prev ? { 
                                    ...prev, 
                                    hasSignature: true, 
                                    signatureUrl: `${base64}?v=${Date.now()}` 
                                  } : null);
                                  loadData();
                                }
                              } catch (err: any) {
                                Swal.fire({ title: "เกิดข้อผิดพลาด", text: err.message || "ไม่สามารถบันทึกลายเซ็นได้", icon: "error" });
                              }
                            }}
                          />
                        </div>
                      )}
                    </div>

                    <Button type="submit" className="w-full mt-4">บันทึกข้อมูล</Button>
                  </form>
                </>
              )}
            </DialogContent>
          </Dialog>
        </TabsContent>

      </Tabs>
    </div>
  );
}
