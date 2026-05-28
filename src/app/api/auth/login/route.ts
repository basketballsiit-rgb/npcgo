import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const redirectPath = searchParams.get("redirect") || "/";

  const clientId = process.env.KEYCLOAK_CLIENT_ID || "npc-go-client";
  const issuer = process.env.KEYCLOAK_ISSUER;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
  if (!issuer) {
    console.error("KEYCLOAK_ISSUER is missing in environment variables.");
    return new NextResponse("ระบบ OIDC ยังไม่ได้ตั้งค่า KEYCLOAK_ISSUER ในไฟล์ .env", { status: 500 });
  }

  const redirectUri = `${baseUrl}/npcgo/api/auth/callback`;
  
  // Encode the target redirect path to state parameter safely
  const state = encodeURIComponent(JSON.stringify({ redirectPath }));

  const authorizationUrl = `${issuer}/protocol/openid-connect/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=openid%20profile%20email&state=${state}`;

  return NextResponse.redirect(authorizationUrl);
}
