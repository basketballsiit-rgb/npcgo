"use server";

import { dbJob } from "@/lib/db.job";
import { createSession, deleteSession, getSession } from "@/lib/session";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const redirectInput = formData.get("redirect") as string;

  if (!username || !password) {
    return { error: "กรุณากรอกชื่อผู้ใช้และรหัสผ่าน" };
  }

  try {
    const user = await dbJob.users.findUnique({
      where: { username },
    });

    if (!user) {
      return { error: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" };
    }

    // Verify password (assuming PHP password_hash was used)
    const isValid = await bcrypt.compare(password, user.password);
    
    // Fallback: If bcrypt fails and they use MD5 or plain text in old DB
    // const isValid = password === user.password || (await bcrypt.compare(password, user.password));

    if (!isValid && password !== user.password) {
      return { error: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" };
    }

    const fullName = `${user.prefix || ""}${user.firstname} ${user.lastname}`.trim();
    
    // Create session
    await createSession(user.id.toString(), user.role, fullName);
    
  } catch (error) {
    console.error("Login Error:", error);
    return { error: "เกิดข้อผิดพลาดในการเข้าสู่ระบบ" };
  }

  let redirectPath = redirectInput || "/";
  if (!redirectPath.startsWith("/") || redirectPath.startsWith("//")) {
    redirectPath = "/";
  }
  
  redirect(redirectPath);
}

export async function logoutAction() {
  await deleteSession();
  redirect("/login");
}

export async function checkPageAccess(pathname: string) {
  const session = await getSession();
  if (!session) return { authorized: false, isUnauthenticated: true };
  const role = session.role;
  const userIdStr = session.userId;

  // Admin gets full access
  if (role === "admin") return { authorized: true };

  // Define restricted zones for Admin only
  const adminOnlyPaths = ["/personnel", "/settings", "/reports"];
  if (adminOnlyPaths.includes(pathname)) return { authorized: false };

  // Every authenticated user can access main dashboard and requests pages
  if (pathname === "/" || pathname.startsWith("/requests")) {
    return { authorized: true };
  }

  // 1. Department Approver screen (/approvals)
  if (pathname === "/approvals") {
    if (role === "evaluator") return { authorized: true };

    // Dynamic mapping check for staff members assigned as department deputies
    const assignedRoles = await dbJob.settings.findMany({
      where: { setting_value: userIdStr }
    });
    const roleKeys = assignedRoles.map(r => r.setting_key);
    
    const deptMappings = await dbJob.settings.findMany({
      where: {
        setting_key: { startsWith: "dept_map_" },
        setting_value: { in: roleKeys }
      }
    });
    if (deptMappings.length > 0) return { authorized: true };
  }

  // 2. Resource Deputy Approver screen (/resource-approvals)
  if (pathname === "/resource-approvals") {
    if (role === "evaluator") return { authorized: true };

    const resourceSetting = await dbJob.settings.findUnique({
      where: { setting_key: "role_resource_deputy" }
    });
    if (resourceSetting?.setting_value === userIdStr) return { authorized: true };
  }

  // 3. Director Approver screen (/final-approvals)
  if (pathname === "/final-approvals") {
    if (role === "evaluator") return { authorized: true };

    const directorSetting = await dbJob.settings.findUnique({
      where: { setting_key: "role_director" }
    });
    if (directorSetting?.setting_value === userIdStr) return { authorized: true };
  }

  // 4. Scheduler screen (/queue and /resources)
  if (pathname === "/queue" || pathname === "/resources") {
    const schedulerSetting = await dbJob.settings.findUnique({
      where: { setting_key: "role_scheduler" }
    });
    if (schedulerSetting?.setting_value === userIdStr) {
      return { authorized: true };
    }
  }

  return { authorized: false };
}

