"use client";

import { useActionState, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { loginAction } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import logoImg from "../../../../public/npc_logo_web.jpg";

function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/";
  const errorParam = searchParams.get("error");

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Panel - Branding (Hidden on small screens) */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-teal-900 flex-col items-center justify-center p-12 text-white relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl relative overflow-hidden border-4 border-white">
            <img 
              src={logoImg.src} 
              alt="โลโก้วิทยาลัย" 
              className="w-full h-full object-cover scale-110"
            />
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-wider mb-4">NPC<span className="text-yellow-500">_GO</span></h1>
          <h2 className="text-2xl font-bold mb-2">ระบบขออนุญาตใช้รถ</h2>
          <p className="text-slate-300 text-lg max-w-md">วิทยาลัยสารพัดช่างน่าน</p>
          
          <div className="mt-16 w-16 h-1 bg-teal-500/50 rounded-full mb-8"></div>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} พัฒนาโดย งานศูนย์ดิจิทัลและการสื่อสารภายในองค์กร</p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 xl:p-24 bg-[#f8fafc]">
        <div className="w-full max-w-md">
          
          {/* Mobile Logo (Visible only on small screens) */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-white">
              <img 
                src={logoImg.src} 
                alt="โลโก้วิทยาลัย" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">ยินดีต้อนรับกลับเข้าสู่ระบบ</h2>
            <p className="text-slate-500">กรุณากรอกข้อมูลผู้ใช้งานเพื่อเข้าสู่ระบบ</p>
          </div>

          <form action={formAction} className="space-y-6">
            <input type="hidden" name="redirect" value={redirectUrl} />
            
            <div className="space-y-2">
              <Label htmlFor="username" className="text-slate-700 font-semibold">ชื่อผู้ใช้งาน</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                  <User className="h-5 w-5" />
                </div>
                <Input 
                  id="username" 
                  name="username" 
                  type="text" 
                  required 
                  placeholder="กรอกชื่อผู้ใช้งาน" 
                  className="pl-10 py-6 bg-white border-slate-200 focus-visible:ring-teal-500 rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-slate-700 font-semibold">รหัสผ่าน</Label>
                <a href="#" className="text-sm font-medium text-teal-600 hover:text-teal-800">ลืมรหัสผ่าน?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                  <Lock className="h-5 w-5" />
                </div>
                <Input 
                  id="password" 
                  name="password" 
                  type={showPassword ? "text" : "password"} 
                  required 
                  placeholder="กรอกรหัสผ่าน" 
                  className="pl-10 pr-10 py-6 bg-white border-slate-200 focus-visible:ring-teal-500 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            
            {(state?.error || errorParam) && (
              <div className="p-4 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-xl">
                {state?.error || errorParam}
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full py-6 text-base font-bold bg-[#14b8a6] hover:bg-[#0d9488] text-white rounded-xl shadow-lg shadow-teal-500/30 transition-all hover:-translate-y-0.5" 
              disabled={pending}
            >
              {pending ? "กำลังเข้าสู่ระบบ..." : (
                <>
                  <LogIn className="mr-2 h-5 w-5" /> เข้าสู่ระบบ
                </>
              )}
            </Button>

          </form>

          {/* OIDC Keycloak Divider & Button */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#f8fafc] px-3 text-slate-400 font-medium">หรือเข้าใช้งานด้วย</span>
            </div>
          </div>

          <Button
            type="button"
            onClick={() => {
              window.location.href = `/npcgo/api/auth/login?redirect=${encodeURIComponent(redirectUrl)}`;
            }}
            className="w-full py-6 text-base font-extrabold text-white bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 border-0 cursor-pointer"
          >
            <img 
              src="https://img.icons8.com/color/48/000000/keycloak.png" 
              alt="Keycloak Logo" 
              className="w-5.5 h-5.5 brightness-110 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            เข้าสู่ระบบด้วยบัญชีองค์กร (@npc.ac.th)
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-500"></div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
