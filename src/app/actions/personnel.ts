"use server";

import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

// ------------------------------
// Staff & Line ID Management
// ------------------------------

export async function getStaffList() {
  const session = await getSession();
  if (!session || session.role !== "admin") return [];

  const users = await dbJob.users.findMany({
    select: {
      id: true,
      firstname: true,
      lastname: true,
      username: true,
      role: true,
      line_user_id: true,
      departments: {
        select: {
          id: true,
          name: true,
        }
      }
    },
    orderBy: { firstname: "asc" }
  });

  const fs = await import("fs");
  const path = await import("path");
  return users.map((u) => {
    const sigPath = path.join(process.cwd(), "public", "signatures", `user_${u.id}.png`);
    const hasSignature = fs.existsSync(sigPath);
    return {
      ...u,
      hasSignature,
      signatureUrl: hasSignature ? `/npcgo/signatures/user_${u.id}.png?v=${Date.now()}` : null,
    };
  });
}

export async function addStaff(formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const username = formData.get("username") as string;
  const department_id = parseInt(formData.get("department_id") as string);
  const role = formData.get("role") as any;
  const line_user_id = formData.get("line_user_id") as string;
  
  if (!firstname || !lastname || !username || !role) {
    throw new Error("Missing required fields");
  }

  const { hashSync } = await import("bcryptjs");
  const hashedPassword = hashSync("123456", 10);

  await dbJob.users.create({
    data: {
      firstname,
      lastname,
      username,
      password: hashedPassword,
      department_id: isNaN(department_id) ? null : department_id,
      role,
      line_user_id: line_user_id || null,
    }
  });

  revalidatePath("/personnel");
}

export async function updateStaff(userId: number, formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const department_id = parseInt(formData.get("department_id") as string);
  const role = formData.get("role") as any;
  const line_user_id = formData.get("line_user_id") as string;

  if (!firstname || !lastname || !role) {
    throw new Error("Missing required fields");
  }

  await dbJob.users.update({
    where: { id: userId },
    data: {
      firstname,
      lastname,
      department_id: isNaN(department_id) ? null : department_id,
      role,
      line_user_id: line_user_id || null,
    }
  });

  // Handle signature file upload if provided
  const signatureFile = formData.get("signature") as File | null;
  if (signatureFile && signatureFile.size > 0) {
    const fs = await import("fs");
    const path = await import("path");
    const bytes = await signatureFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const dirPath = path.join(process.cwd(), "public", "signatures");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const filePath = path.join(dirPath, `user_${userId}.png`);
    fs.writeFileSync(filePath, buffer);
  }

  revalidatePath("/personnel");
}

export async function saveSignatureBase64(userId: number, base64Data: string) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  const fs = await import("fs");
  const path = await import("path");
  
  const base64Image = base64Data.replace(/^data:image\/png;base64,/, "");
  const buffer = Buffer.from(base64Image, "base64");

  const dirPath = path.join(process.cwd(), "public", "signatures");
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const filePath = path.join(dirPath, `user_${userId}.png`);
  fs.writeFileSync(filePath, buffer);

  revalidatePath("/personnel");
  return { success: true };
}

export async function deleteStaffSignature(userId: number) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  const fs = await import("fs");
  const path = await import("path");
  const filePath = path.join(process.cwd(), "public", "signatures", `user_${userId}.png`);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  revalidatePath("/personnel");
  return { success: true };
}

export async function updateStaffLineId(userId: number, lineUserId: string) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  await dbJob.users.update({
    where: { id: userId },
    data: { line_user_id: lineUserId || null }
  });

  revalidatePath("/personnel");
}

export async function deleteStaff(userId: number) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  // Optional: Prevent deleting oneself
  if (parseInt(session.userId) === userId) {
    throw new Error("ไม่สามารถลบตัวเองออกจากระบบได้");
  }

  await dbJob.users.delete({
    where: { id: userId }
  });

  revalidatePath("/personnel");
}

// ------------------------------
// Key Roles Management
// ------------------------------

export async function getKeyRoles() {
  const settings = await dbJob.settings.findMany({
    where: {
      setting_key: {
        in: ["role_director", "role_resource_deputy", "role_scheduler", "role_academic", "role_strategy", "role_student_affairs"]
      }
    }
  });

  const roles: Record<string, number | null> = {
    role_director: null,
    role_academic: null,
    role_strategy: null,
    role_resource_deputy: null,
    role_student_affairs: null,
    role_scheduler: null,
  };

  settings.forEach(s => {
    if (s.setting_value) {
      roles[s.setting_key] = parseInt(s.setting_value);
    }
  });

  return roles;
}

export async function saveKeyRole(roleKey: string, userId: number | null) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  if (userId === null) {
    await dbJob.settings.deleteMany({
      where: { setting_key: roleKey }
    });
  } else {
    await dbJob.settings.upsert({
      where: { setting_key: roleKey },
      update: { setting_value: userId.toString(), updated_at: new Date() },
      create: { setting_key: roleKey, setting_value: userId.toString() }
    });
  }

  revalidatePath("/personnel");
}

// ------------------------------
// Department Mapping
// ------------------------------

export async function getDepartments() {
  const session = await getSession();
  if (!session) return [];

  const depts = await dbJob.departments.findMany({
    orderBy: { name: "asc" }
  });

  // Fetch mappings
  const settings = await dbJob.settings.findMany({
    where: { setting_key: { startsWith: "dept_map_" } }
  });

  const mapping: Record<number, string> = {};
  settings.forEach(s => {
    const deptId = parseInt(s.setting_key.replace("dept_map_", ""));
    if (!isNaN(deptId) && s.setting_value) {
      mapping[deptId] = s.setting_value;
    }
  });

  return depts.map(d => ({
    ...d,
    mappedRole: mapping[d.id] || null
  }));
}

export async function saveDepartmentMapping(departmentId: number, roleKey: string | null) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  const settingKey = `dept_map_${departmentId}`;

  if (!roleKey) {
    await dbJob.settings.deleteMany({
      where: { setting_key: settingKey }
    });
  } else {
    await dbJob.settings.upsert({
      where: { setting_key: settingKey },
      update: { setting_value: roleKey, updated_at: new Date() },
      create: { setting_key: settingKey, setting_value: roleKey }
    });
  }

  revalidatePath("/personnel");
}

export async function addDepartment(name: string) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  if (!name.trim()) throw new Error("Name is required");

  await dbJob.departments.create({
    data: { name: name.trim() }
  });

  revalidatePath("/personnel");
}

export async function updateDepartment(id: number, name: string) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  if (!name.trim()) throw new Error("Name is required");

  await dbJob.departments.update({
    where: { id },
    data: { name: name.trim() }
  });

  revalidatePath("/personnel");
}

export async function deleteDepartment(id: number) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  // Check if there are users in this department
  const usersCount = await dbJob.users.count({
    where: { department_id: id }
  });

  if (usersCount > 0) {
    throw new Error(`ไม่สามารถลบแผนกได้ เนื่องจากยังมีบุคลากรสังกัดอยู่ในแผนกนี้ ${usersCount} คน`);
  }

  // Also remove mappings
  await dbJob.settings.deleteMany({
    where: { setting_key: `dept_map_${id}` }
  });

  await dbJob.departments.delete({
    where: { id }
  });

  revalidatePath("/personnel");
}
