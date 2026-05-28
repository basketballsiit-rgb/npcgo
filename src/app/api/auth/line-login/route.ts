import { NextRequest, NextResponse } from "next/server";
import { dbJob } from "@/lib/db.job";
import { createSession } from "@/lib/session";
import fs from "fs";
import path from "path";

// Smart Base URL Resolver to prevent localhost redirect behind reverse proxies
function getRuntimeBaseUrl() {
  try {
    let currentDir = process.cwd();
    for (let i = 0; i < 5; i++) {
      const envPath = path.join(currentDir, ".env");
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, "utf-8");
        const lines = envContent.split(/\r?\n/);
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("NEXT_PUBLIC_BASE_URL=")) {
            let val = trimmed.substring("NEXT_PUBLIC_BASE_URL=".length).trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.substring(1, val.length - 1);
            }
            if (val) return val;
          }
        }
      }
      const parentDir = path.dirname(currentDir);
      if (parentDir === currentDir) break;
      currentDir = parentDir;
    }

    currentDir = __dirname;
    for (let i = 0; i < 5; i++) {
      const envPath = path.join(currentDir, ".env");
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, "utf-8");
        const lines = envContent.split(/\r?\n/);
        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("NEXT_PUBLIC_BASE_URL=")) {
            let val = trimmed.substring("NEXT_PUBLIC_BASE_URL=".length).trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.substring(1, val.length - 1);
            }
            if (val) return val;
          }
        }
      }
      const parentDir = path.dirname(currentDir);
      if (parentDir === currentDir) break;
      currentDir = parentDir;
    }
  } catch (err) {
    console.error("Error parsing .env file for NEXT_PUBLIC_BASE_URL in line-login:", err);
  }
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const uid = searchParams.get("uid");
  const redirectPath = searchParams.get("redirect") || "/requests";

  let baseUrl = getRuntimeBaseUrl();
  if (baseUrl.endsWith("/")) {
    baseUrl = baseUrl.slice(0, -1);
  }

  if (!uid) {
    console.warn("LINE Auto-Login: Missing LINE UID parameter");
    return NextResponse.redirect(new URL(`${baseUrl}/npcgo/login`));
  }

  try {
    // Find user by registered line_user_id
    const user = await dbJob.users.findFirst({
      where: { line_user_id: uid },
    });

    if (!user) {
      console.warn(`LINE Auto-Login: No user registered with LINE UID: ${uid}`);
      // Redirect to login with error query parameter
      const loginUrl = new URL(`${baseUrl}/npcgo/login`);
      loginUrl.searchParams.set("error", "line_not_registered");
      return NextResponse.redirect(loginUrl);
    }

    const fullName = `${user.prefix || ""}${user.firstname} ${user.lastname}`.trim();
    
    // Create the session cookie
    await createSession(user.id.toString(), user.role, fullName);
    console.log(`LINE Auto-Login SUCCESS: Logged in User ID ${user.id} (${fullName}) via LINE UID.`);

    // Build absolute redirect URL using the resolved base URL instead of internal host
    const targetUrl = new URL(`${baseUrl}/npcgo${redirectPath}`);
    return NextResponse.redirect(targetUrl);
    
  } catch (error) {
    console.error("LINE Auto-Login Error:", error);
    return NextResponse.redirect(new URL(`${baseUrl}/npcgo/login`));
  }
}
