"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveFirstTimeSetupAction } from "@/app/actions/first-time-setup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, ClipboardList, Briefcase, ChevronRight, LogIn } from "lucide-react";
import Swal from "sweetalert2";

interface SetupFormProps {
  user: {
    prefix: string | null;
    firstname: string;
    lastname: string;
    department_id: number | null;
    job_id: number | null;
  } | null;
  departments: { id: number; name: string }[];
  jobs: { id: number; title: string }[];
  redirectUrl: string;
}

export function SetupFormClient({ user, departments, jobs, redirectUrl }: SetupFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [prefix, setPrefix] = useState(user?.prefix || "นาย");
  const [firstname, setFirstname] = useState(user?.firstname || "");
  const [lastname, setLastname] = useState(user?.lastname || "");
  const [departmentId, setDepartmentId] = useState("");
  const [jobId, setJobId] = useState("");

  const selectedDept = departments.find((d) => d.id.toString() === departmentId);
  const selectedJob = jobs.find((j) => j.id.toString() === jobId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstname.trim() || !lastname.trim() || !departmentId || !jobId) {
      Swal.fire({
        title: "ข้อมูลไม่ครบถ้วน",
        text: "กรุณากรอกข้อมูลและเลือกฝ่ายสังกัด/ตำแหน่งให้ครบถ้วน",
        icon: "warning",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#4f46e5",
        customClass: {
          popup: 'rounded-3xl p-6 shadow-xl border border-slate-100 bg-white/95 backdrop-blur-md',
          confirmButton: 'rounded-xl font-bold text-sm px-6 py-2.5 shadow-sm'
        }
      });
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("prefix", prefix);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("departmentId", departmentId);
    formData.append("jobId", jobId);

    try {
      const res = await saveFirstTimeSetupAction(formData);

      if (res.success) {
        Swal.fire({
          title: "ตั้งค่าสำเร็จ!",
          text: "ข้อมูลสังกัดและโปรไฟล์ของคุณถูกอัปเดตเรียบร้อยแล้ว ยินดีต้อนรับเข้าใช้งานระบบ!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false
        });
        
        // Refresh page data and redirect
        router.refresh();
        setTimeout(() => {
          router.push(redirectUrl);
        }, 1500);
      } else {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: res.error || "ไม่สามารถบันทึกข้อมูลได้ กรุณาลองใหม่อีกครั้ง",
          icon: "error",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#4f46e5"
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        title: "เกิดข้อผิดพลาดภายใน",
        text: "ระบบไม่สามารถทำรายการได้ในขณะนี้ กรุณาติดต่อผู้ดูแลระบบ",
        icon: "error",
        confirmButtonText: "ตกลง"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 font-sans">
      
      {/* 👤 Section 1: ข้อมูลชื่อและนามสกุลภาษาไทย */}
      <div className="space-y-4">
        <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-1.5">
          <User className="w-4 h-4 text-indigo-500" />
          ข้อมูลชื่อ-สกุลภาษาไทย (แก้ไขตัวสะกดได้)
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {/* Prefix Select */}
          <div className="space-y-1.5 sm:col-span-1">
            <Label htmlFor="prefix" className="text-xs font-semibold text-slate-500">คำนำหน้า</Label>
            <Select value={prefix} onValueChange={(val) => setPrefix(val || "นาย")}>
              <SelectTrigger id="prefix" className="w-full bg-white border-slate-200 focus-visible:ring-indigo-500 rounded-xl h-12 shadow-xs">
                <SelectValue placeholder="คำนำหน้า">
                  {prefix}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="w-auto max-h-56">
                <SelectItem value="นาย">นาย</SelectItem>
                <SelectItem value="นาง">นาง</SelectItem>
                <SelectItem value="นางสาว">นางสาว</SelectItem>
                <SelectItem value="ว่าที่ ร.ต.">ว่าที่ ร.ต.</SelectItem>
                <SelectItem value="ดร.">ดร.</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* First Name Input */}
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="firstname" className="text-xs font-semibold text-slate-500">ชื่อจริง</Label>
            <Input 
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="กรอกชื่อจริงภาษาไทย"
              className="bg-white border-slate-200 focus-visible:ring-indigo-500 rounded-xl h-12 shadow-xs"
            />
          </div>

          {/* Last Name Input */}
          <div className="space-y-1.5 sm:col-span-1">
            <Label htmlFor="lastname" className="text-xs font-semibold text-slate-500">นามสกุล</Label>
            <Input 
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="กรอกนามสกุล"
              className="bg-white border-slate-200 focus-visible:ring-indigo-500 rounded-xl h-12 shadow-xs"
            />
          </div>
        </div>
      </div>

      {/* 🏢 Section 2: ฝ่ายสังกัดและตำแหน่งงาน */}
      <div className="space-y-4 pt-2">
        <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 flex items-center gap-1.5">
          <ClipboardList className="w-4 h-4 text-teal-500" />
          ฝ่ายที่สังกัดและตำแหน่งงานทางวิชาการ
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Department Select */}
          <div className="space-y-1.5">
            <Label htmlFor="departmentId" className="text-xs font-semibold text-slate-500">ฝ่าย / แผนกวิชาที่สังกัด</Label>
            <Select value={departmentId} onValueChange={(val) => setDepartmentId(val || "")}>
              <SelectTrigger id="departmentId" className="w-full bg-white border-slate-200 focus-visible:ring-indigo-500 rounded-xl h-12 shadow-xs">
                <SelectValue placeholder="เลือกแผนกวิชา/งานสังกัด...">
                  {selectedDept ? selectedDept.name : undefined}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="w-auto min-w-(--anchor-width) max-w-md max-h-56">
                {departments.map((dept) => (
                  <SelectItem key={dept.id} value={dept.id.toString()}>
                    {dept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Job Title Select */}
          <div className="space-y-1.5">
            <Label htmlFor="jobId" className="text-xs font-semibold text-slate-500">ตำแหน่งงานหลัก</Label>
            <Select value={jobId} onValueChange={(val) => setJobId(val || "")}>
              <SelectTrigger id="jobId" className="w-full bg-white border-slate-200 focus-visible:ring-indigo-500 rounded-xl h-12 shadow-xs">
                <SelectValue placeholder="เลือกตำแหน่งงาน...">
                  {selectedJob ? selectedJob.title : undefined}
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="w-auto min-w-(--anchor-width) max-w-md max-h-56">
                {jobs.map((job) => (
                  <SelectItem key={job.id} value={job.id.toString()}>
                    {job.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-slate-100 my-4"></div>

      {/* Action Buttons */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 rounded-xl text-base font-extrabold text-white bg-gradient-to-r from-indigo-500 to-teal-500 hover:from-indigo-600 hover:to-teal-600 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="animate-spin rounded-full h-4.5 w-4.5 border-b-2 border-white"></span>
            กำลังบันทึกข้อมูลโปรไฟล์...
          </span>
        ) : (
          <>
            <LogIn className="w-5 h-5 shrink-0" /> บันทึกข้อมูลและเปิดเข้าใช้งานระบบ <ChevronRight className="w-4 h-4 shrink-0" />
          </>
        )}
      </Button>

    </form>
  );
}
