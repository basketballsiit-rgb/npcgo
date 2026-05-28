import { Sidebar } from "@/components/layout/Sidebar";
import { getSession } from "@/lib/session";
import { LogOut, User, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logoutAction } from "@/app/actions/auth";
import { RouteGuard } from "@/components/layout/RouteGuard";
import { dbJob } from "@/lib/db.job";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  
  let isScheduler = false;
  if (session?.userId) {
    const schedulerSetting = await dbJob.settings.findUnique({
      where: { setting_key: "role_scheduler" }
    });
    isScheduler = schedulerSetting?.setting_value === session.userId;
  }
  
  const getRoleBadgeInfo = (role?: string) => {
    switch(role) {
      case "admin": return { text: "ผู้ดูแลระบบ", color: "bg-orange-100 text-orange-700 border-orange-200" };
      case "evaluator": return { text: "รองผู้อำนวยการ", color: "bg-purple-100 text-purple-700 border-purple-200" };
      default: return { text: "บุคลากร", color: "bg-blue-100 text-blue-700 border-blue-200" };
    }
  };

  const badgeInfo = getRoleBadgeInfo(session?.role);

  return (
    <div className="flex h-screen bg-[#f1f5f9] font-sans">
      <Sidebar role={session?.role} isScheduler={isScheduler} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-[72px] items-center justify-between border-b bg-white px-4 md:px-8 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-base md:text-xl font-bold text-slate-800">ระบบจัดการยานพาหนะ</span>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-slate-700">{session?.name || "ผู้ใช้งาน"}</p>
                <div className={`mt-0.5 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${badgeInfo.color}`}>
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  {badgeInfo.text}
                </div>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200 shrink-0">
                <User className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
            
            <div className="h-6 md:h-8 w-px bg-slate-200"></div>

            <form action={logoutAction}>
              <Button type="submit" variant="ghost" className="text-slate-500 hover:text-red-600 hover:bg-red-50 p-2 md:px-4 md:py-2">
                <LogOut className="h-5 w-5 md:mr-2" />
                <span className="hidden md:inline">ออกจากระบบ</span>
              </Button>
            </form>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-[#f1f5f9] p-4 md:p-8 relative">
          <RouteGuard>{children}</RouteGuard>
        </main>
      </div>
    </div>
  );
}
