"use server";

import { dbJob } from "@/lib/db.job";
import { getSession, createSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export async function saveFirstTimeSetupAction(formData: FormData) {
  const session = await getSession();
  if (!session) {
    return { success: false, error: "เซสชันหมดอายุหรือคุณไม่มีสิทธิ์ดำเนินการ" };
  }

  const userId = parseInt(session.userId);
  const prefix = formData.get("prefix") as string;
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const departmentIdStr = formData.get("departmentId") as string;
  const jobIdStr = formData.get("jobId") as string;

  if (!prefix || !firstname || !lastname || !departmentIdStr || !jobIdStr) {
    return { success: false, error: "กรุณากรอกข้อมูลและเลือกตัวเลือกให้ครบถ้วน" };
  }

  const departmentId = parseInt(departmentIdStr);
  const jobId = parseInt(jobIdStr);

  if (isNaN(departmentId) || isNaN(jobId)) {
    return { success: false, error: "ฝ่ายสังกัดหรือตำแหน่งงานที่เลือกไม่ถูกต้อง" };
  }

  try {
    // 1. Update the User profile
    const updatedUser = await dbJob.users.update({
      where: { id: userId },
      data: {
        prefix,
        firstname,
        lastname,
        department_id: departmentId,
        job_id: jobId,
      },
    });

    // 2. Sync to the user_jobs junction table
    const existingUserJob = await dbJob.user_jobs.findFirst({
      where: {
        user_id: userId,
        job_id: jobId,
      },
    });

    if (!existingUserJob) {
      await dbJob.user_jobs.create({
        data: {
          user_id: userId,
          job_id: jobId,
        },
      });
    }

    const newFullName = `${updatedUser.prefix || ""}${updatedUser.firstname} ${updatedUser.lastname}`.trim();
    
    // 3. Refresh session cookie with the new updated full name and role
    await createSession(updatedUser.id.toString(), updatedUser.role, newFullName);

    revalidatePath("/personnel");
    revalidatePath("/");
    
    return { success: true };
  } catch (err: any) {
    console.error("First-Time Setup Action Error:", err);
    return { success: false, error: err.message || "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์ขณะบันทึกข้อมูล" };
  }
}

// 📦 Fetch departments and jobs for dynamic select inputs
export async function getSetupResources() {
  try {
    const departments = await dbJob.departments.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true }
    });
    
    const jobs = await dbJob.jobs.findMany({
      orderBy: { title: "asc" },
      select: { id: true, title: true }
    });

    return { departments, jobs };
  } catch (err) {
    console.error("Failed to load setup resources:", err);
    return { departments: [], jobs: [] };
  }
}
