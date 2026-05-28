import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getSetupResources } from "@/app/actions/first-time-setup";
import { dbJob } from "@/lib/db.job";
import logoImg from "../../../public/npc_logo_web.jpg";
import { SetupFormClient } from "./setup-form-client";

export const metadata = {
  title: "ลงทะเบียนตั้งค่าข้อมูลแรกเข้าใช้งาน | NPC_GO",
  description: "กรุณากรอกสังกัดและตำแหน่งงานในการเข้าใช้ระบบครั้งแรก",
};

export default async function FirstTimeSetupPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  const resolvedSearchParams = await searchParams;
  const targetRedirect = resolvedSearchParams.redirect || "/";

  // Fetch current user details from db
  const userId = parseInt(session.userId);
  const user = await dbJob.users.findUnique({
    where: { id: userId },
    select: { prefix: true, firstname: true, lastname: true, department_id: true, job_id: true }
  });

  // If user profile is already fully complete, bypass this screen!
  if (user && user.department_id && user.job_id) {
    redirect(targetRedirect);
  }

  // Load Setup Resources (departments & jobs lists)
  const { departments, jobs } = await getSetupResources();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Premium glowing decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none"></div>
      
      <div className="w-full max-w-xl bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden relative z-10">
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header section with college logo */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white overflow-hidden mb-4">
              <img 
                src={logoImg.src} 
                alt="วิทยาลัยสารพัดช่างน่าน" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
              ลงทะเบียนตั้งค่าข้อมูลแรกเข้าใช้งาน
            </h2>
            <p className="text-xs text-slate-400 font-medium mt-1 leading-normal max-w-sm">
              สวัสดีคุณ <span className="text-indigo-600 font-bold font-semibold">{session.name}</span> บัญชีสถาบันของคุณลงทะเบียนสำเร็จแล้ว กรุณาระบุสังกัดฝ่ายและตำแหน่งงานเพื่อเปิดใช้งานสิทธิ์การขอใช้รถ
            </p>
          </div>

          <div className="h-[1px] bg-slate-100 my-2"></div>

          {/* Client Interactive Setup Form */}
          <SetupFormClient 
            user={user} 
            departments={departments} 
            jobs={jobs} 
            redirectUrl={targetRedirect} 
          />

        </div>
      </div>
    </div>
  );
}
