"use server";

import { dbJob } from "@/lib/db.job";
import { getSession } from "@/lib/session";
import { revalidatePath } from "next/cache";

export async function getSettings() {
  const settings = await dbJob.settings.findMany();
  
  // Convert array to key-value object
  const settingsMap: Record<string, string> = {};
  settings.forEach(s => {
    if (s.setting_value !== null) {
      settingsMap[s.setting_key] = s.setting_value;
    }
  });
  
  return settingsMap;
}

export async function updateSettings(formData: FormData) {
  const session = await getSession();
  if (!session || session.role !== "admin") throw new Error("Unauthorized");

  const keysToUpdate = [
    "college_name",
    "director_name",
    "contact_phone",
    "line_channel_access_token",
  ];

  for (const key of keysToUpdate) {
    const value = formData.get(key) as string;
    if (value !== null && value !== undefined) {
      await dbJob.settings.upsert({
        where: { setting_key: key },
        update: { setting_value: value, updated_at: new Date() },
        create: { setting_key: key, setting_value: value },
      });
    }
  }

  revalidatePath("/settings");
  revalidatePath("/print");
}
