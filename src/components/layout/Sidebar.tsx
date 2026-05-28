"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, LayoutDashboard, CalendarClock, CheckSquare, Settings, CheckCircle, CalendarDays, Users, FileText, Fuel } from "lucide-react";

interface SidebarProps {
  role?: string;
  isScheduler?: boolean;
}

export function Sidebar({ role, isScheduler }: SidebarProps) {
  const pathname = usePathname();

  const menuGroups = [
    {
      title: "หน้าหลัก",
      items: [
        { name: "แดชบอร์ด", href: "/", icon: LayoutDashboard },
        { name: "คำขอของฉัน", href: "/requests", icon: FileText },
        { name: "ขออนุญาตใช้รถ", href: "/requests/new", icon: Car },
      ]
    },
    {
      title: "การจัดการ",
      items: [
        { name: "พิจารณาอนุมัติ (รองฝ่ายฯ)", href: "/approvals", icon: CheckCircle, visible: role === "admin" || role === "evaluator" },
        { name: "จัดคิวรถราชการ", href: "/queue", icon: CalendarDays, visible: role === "admin" || isScheduler },
        { name: "พิจารณาคิวรถ (รองฝ่ายทรัพยากรฯ)", href: "/resource-approvals", icon: CheckSquare, visible: role === "admin" || role === "evaluator" },
        { name: "อนุมัติขั้นสุดท้าย (ผู้อำนวยการ)", href: "/final-approvals", icon: CheckCircle, visible: role === "admin" || role === "evaluator" },
        { name: "จัดการทรัพยากร", href: "/resources", icon: Users, visible: role === "admin" || isScheduler },
      ].filter(item => item.visible)
    },
    {
      title: "ระบบ",
      items: [
        { name: "บันทึกค่าน้ำมัน", href: "/reports/fuel", icon: Fuel, visible: role === "admin" || isScheduler },
        { name: "รายงาน", href: "/reports", icon: FileText, visible: role === "admin" },
        { name: "จัดการบุคลากร", href: "/personnel", icon: Users, visible: role === "admin" },
        { name: "ตั้งค่าระบบ", href: "/settings", icon: Settings, visible: role === "admin" },
      ].filter(item => item.visible)
    }
  ].filter(group => group.items.length > 0);

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col bg-[#1e293b] text-slate-300 shadow-xl border-r border-slate-800 shrink-0">
      <div className="flex h-[72px] items-center justify-center border-b border-slate-700/50 bg-[#0f172a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/50">
            <Car className="text-yellow-500 w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-wider leading-tight">NPC_GO</h1>
            <p className="text-[10px] text-yellow-500 font-medium uppercase tracking-widest">Fleet Management</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <nav className="space-y-6 px-4 py-6">
          {menuGroups.map((group, idx) => (
            <div key={idx}>
              <h3 className="mb-2 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {group.title}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                        isActive 
                          ? "bg-slate-800/80 text-yellow-500 border-l-4 border-yellow-500" 
                          : "text-slate-400 hover:bg-slate-800 hover:text-slate-200 border-l-4 border-transparent"
                      }`}
                    >
                      <item.icon className={`h-5 w-5 ${isActive ? "text-yellow-500" : "opacity-75"}`} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-slate-700/50 bg-[#0f172a] space-y-3">
        {/* LINE Chatbot QR Code Card */}
        <div className="rounded-lg bg-slate-800/40 border border-slate-700/40 p-3 flex flex-col items-center text-center space-y-2">
          <p className="text-[11px] font-bold text-yellow-500 flex items-center gap-1.5 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            เพิ่มเพื่อน NPC-GO
          </p>
          <div className="relative p-1.5 bg-white rounded-lg shadow-md hover:scale-[1.03] transition-all duration-200 cursor-default group">
            <img 
              src="/npcgo/line-qrcode.png" 
              alt="LINE QR Code" 
              className="w-24 h-24 rounded-md" 
            />
            <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"></div>
          </div>
          <p className="text-[10px] text-slate-400 leading-normal">
            สแกนเพื่อรับการแจ้งเตือน<br />และโต้ตอบสถานะผ่าน LINE
          </p>
        </div>

        <div className="rounded-lg bg-slate-800/50 p-4 text-xs flex justify-between items-center">
          <div>
            <p className="font-semibold text-slate-300">NPC_GO</p>
            <p className="text-slate-500">v1.0.0</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
        </div>
      </div>
    </aside>
  );
}
