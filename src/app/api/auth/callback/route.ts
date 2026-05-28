import { NextRequest, NextResponse } from "next/server";
import { dbJob } from "@/lib/db.job";
import { createSession } from "@/lib/session";
import bcrypt from "bcryptjs";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");
  const stateStr = searchParams.get("state");
  const error = searchParams.get("error");
  const errorDescription = searchParams.get("error_description");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // Parse state to recover original redirectPath
  let redirectPath = "/";
  if (stateStr) {
    try {
      const decodedState = JSON.parse(decodeURIComponent(stateStr));
      if (decodedState.redirectPath) {
        redirectPath = decodedState.redirectPath;
      }
    } catch (e) {
      console.error("Failed to parse callback state:", e);
    }
  }

  // Handle any Keycloak authorization error
  if (error || !code) {
    console.error("Keycloak Authorization Error:", error, errorDescription);
    const errMsg = errorDescription || error || "การลงชื่อเข้าใช้งานล้มเหลว";
    return NextResponse.redirect(`${baseUrl}/npcgo/login?error=${encodeURIComponent(errMsg)}`);
  }

  const clientId = process.env.KEYCLOAK_CLIENT_ID || "npc-go-client";
  const clientSecret = process.env.KEYCLOAK_CLIENT_SECRET;
  const issuer = process.env.KEYCLOAK_ISSUER;

  if (!issuer) {
    return new NextResponse("OIDC config is incomplete: KEYCLOAK_ISSUER is missing.", { status: 500 });
  }

  try {
    const tokenUrl = `${issuer}/protocol/openid-connect/token`;
    const redirectUri = `${baseUrl}/npcgo/api/auth/callback`;

    // 1. Exchange authorization code for tokens
    const bodyParams = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      client_id: clientId,
      redirect_uri: redirectUri,
    });

    if (clientSecret) {
      bodyParams.append("client_secret", clientSecret);
    }

    const tokenResponse = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: bodyParams.toString(),
    });

    if (!tokenResponse.ok) {
      const errText = await tokenResponse.text();
      console.error("Failed to exchange tokens at Keycloak:", errText);
      return NextResponse.redirect(`${baseUrl}/npcgo/login?error=${encodeURIComponent("ล้มเหลวในการแลกเปลี่ยนสิทธิ์โทเคน OIDC")}`);
    }

    const tokens = await tokenResponse.json();
    const accessToken = tokens.access_token;

    if (!accessToken) {
      return NextResponse.redirect(`${baseUrl}/npcgo/login?error=${encodeURIComponent("ไม่ได้รับสิทธิ์โทเคน OIDC จากเซิร์ฟเวอร์")}`);
    }

    // 2. Retrieve user details using OIDC Userinfo Endpoint
    const userinfoUrl = `${issuer}/protocol/openid-connect/userinfo`;
    const userinfoResponse = await fetch(userinfoUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!userinfoResponse.ok) {
      const errText = await userinfoResponse.text();
      console.error("Failed to retrieve userinfo from Keycloak:", errText);
      return NextResponse.redirect(`${baseUrl}/npcgo/login?error=${encodeURIComponent("ไม่สามารถดึงข้อมูลส่วนตัวผู้ใช้จาก Keycloak")}`);
    }

    const userinfo = await userinfoResponse.json();
    const email = userinfo.email as string | undefined;
    const givenName = userinfo.given_name as string | undefined;
    const familyName = userinfo.family_name as string | undefined;
    const name = userinfo.name as string | undefined;

    if (!email) {
      return NextResponse.redirect(`${baseUrl}/npcgo/login?error=${encodeURIComponent("Keycloak ไม่ได้คืนค่าที่อยู่อีเมลของคุณ")}`);
    }

    // 3. Strict Domain Validation: Must end with @npc.ac.th
    const emailLower = email.toLowerCase();
    if (!emailLower.endsWith("@npc.ac.th")) {
      return NextResponse.redirect(
        `${baseUrl}/npcgo/login?error=${encodeURIComponent(
          "โดเมนอีเมลสถาบันไม่ถูกต้อง กรุณาลงชื่อเข้าใช้ด้วยอีเมล @npc.ac.th ของสถาบันเท่านั้น"
        )}`
      );
    }

    // 4. Extract local part of email as username (e.g. somchai.s)
    const username = emailLower.split("@")[0];

    // 5. Match with existing users in database
    let user = await dbJob.users.findUnique({
      where: { username },
    });

    let isNewUser = false;

    if (!user && givenName && familyName) {
      const cleanGiven = givenName.trim();
      const cleanFamily = familyName.trim();

      // Search by firstname and lastname (handling potential prefixes in the database like 'นาย')
      user = await dbJob.users.findFirst({
        where: {
          lastname: cleanFamily,
          OR: [
            { firstname: cleanGiven },
            { firstname: `นาย${cleanGiven}` },
            { firstname: `นาง${cleanGiven}` },
            { firstname: `นางสาว${cleanGiven}` },
            { firstname: { endsWith: cleanGiven } }
          ]
        }
      });

      if (user) {
        console.log(`SSO Login: Matched existing user ID ${user.id} (${user.firstname} ${user.lastname}) by name. Updating username from "${user.username}" to "${username}".`);
        // Update their username in the database so that subsequent logins match via findUnique directly
        user = await dbJob.users.update({
          where: { id: user.id },
          data: { username }
        });
      }
    }

    if (!user) {
      isNewUser = true;
      // Auto-Provisioning (Auto-Register) a new user as staff
      const tempPass = Math.random().toString(36).substring(2, 12);
      const hashedPassword = await bcrypt.hash(tempPass, 10);

      user = await dbJob.users.create({
        data: {
          username,
          firstname: givenName || name || "User",
          lastname: familyName || "",
          password: hashedPassword,
          role: "staff", // Default role
          prefix: "นาย", // default prefix, user can change later
        },
      });
    }

    const fullName = `${user.prefix || ""}${user.firstname} ${user.lastname}`.trim();

    // 6. Create OIDC Session
    await createSession(user.id.toString(), user.role, fullName);

    // 7. Check Profile Completeness (Redirect to setup if department_id or job_id is null)
    if (isNewUser || !user.department_id || !user.job_id) {
      return NextResponse.redirect(
        `${baseUrl}/npcgo/first-time-setup?redirect=${encodeURIComponent(redirectPath)}`
      );
    }

    // Everything is complete, go to original path or home
    const targetPath = redirectPath.startsWith("/npcgo") ? redirectPath : `/npcgo${redirectPath.startsWith("/") ? "" : "/"}${redirectPath}`;
    return NextResponse.redirect(`${baseUrl}${targetPath}`);
  } catch (err: any) {
    console.error("Keycloak Callback Exception:", err);
    return NextResponse.redirect(
      `${baseUrl}/npcgo/login?error=${encodeURIComponent(err.message || "เกิดข้อผิดพลาดในการดำเนินการ OIDC Callback")}`
    );
  }
}
