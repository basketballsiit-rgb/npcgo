"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { checkPageAccess } from "@/app/actions/auth";
import Swal from "sweetalert2";
import { Loader2 } from "lucide-react";

export function RouteGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    let active = true;

    async function verifyAccess() {
      setIsChecking(true);
      try {
        const res = await checkPageAccess(pathname);
        if (!active) return;

        if (res.authorized) {
          setAuthorized(true);
          setIsChecking(false);
        } else if (res.isUnauthenticated) {
          router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
        } else {
          setAuthorized(false);
          // Show alert and redirect
          await Swal.fire({
            title: "ปฏิเสธการเข้าถึง",
            text: "คุณไม่มีสิทธิ์เข้าใช้งานหน้านี้ เนื่องจากข้อจำกัดสิทธิ์ของระบบ",
            icon: "error",
            confirmButtonText: "กลับไปหน้าหลัก",
            confirmButtonColor: "#3b82f6"
          });
          router.replace("/requests");
        }
      } catch (err) {
        console.error("RouteGuard verification error:", err);
        if (active) {
          router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
        }
      }
    }

    verifyAccess();

    return () => {
      active = false;
    };
  }, [pathname, router]);

  if (isChecking) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/80 backdrop-blur-xs z-50 transition-all duration-300">
        <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
          <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
          <p className="text-sm font-medium text-slate-600">กำลังตรวจสอบสิทธิ์การเข้าใช้งาน...</p>
        </div>
      </div>
    );
  }

  return authorized ? <>{children}</> : null;
}
