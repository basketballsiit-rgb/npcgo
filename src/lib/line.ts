import * as line from "@line/bot-sdk";
import fs from "fs";
import path from "path";

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || "",
  channelSecret: process.env.LINE_CHANNEL_SECRET || "",
};

export const lineClient = new line.messagingApi.MessagingApiClient(config);

// Smart Runtime Base URL Resolver: Bypasses PM2 cache by reading .env file directly from disk recursively
function getRuntimeBaseUrl() {
  try {
    let currentDir = process.cwd();
    // Search up to 5 directory levels starting from process.cwd()
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

    // Secondary fallback search starting from __dirname
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
    console.error("Error parsing .env file for NEXT_PUBLIC_BASE_URL:", err);
  }
  return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
}

export async function sendWorkflowNotification(
  lineUserId: string,
  step: "to_dept_head" | "to_scheduler" | "to_resource_deputy" | "to_director" | "to_driver" | "to_requester_approved" | "to_requester_rejected" | "to_driver_cancelled" | "to_requester_cancelled",
  requestDetails: {
    requestId: number;
    requesterName: string;
    purpose: string;
    destination: string;
    dateRange: string;
    carInfo?: string;
    driverName?: string;
    cancellationReason?: string;
  }
) {
  let token = config.channelAccessToken;
  if (!token || token.includes("YOUR_")) {
    try {
      const { dbJob } = await import("@/lib/db.job");
      const setting = await dbJob.settings.findUnique({
        where: { setting_key: "line_channel_access_token" }
      });
      token = setting?.setting_value || "";
    } catch (err) {
      console.error("Failed to load line token from DB settings:", err);
    }
  }

  if (!token) {
    console.warn("LINE Channel Access Token is missing. Skip sending notification.");
    return;
  }

  const client = new line.messagingApi.MessagingApiClient({
    channelAccessToken: token,
  });

  let title = "แจ้งเตือนระบบขออนุญาตใช้รถ";
  let color = "#1E3A8A"; // Default Blue

  let baseUrl = getRuntimeBaseUrl();
  if (baseUrl.endsWith("/")) {
    baseUrl = baseUrl.slice(0, -1);
  }

  // Ensure /npcgo prefix is included exactly once
  const pathPrefix = "/npcgo";
  let finalBaseUrl = baseUrl;
  if (!finalBaseUrl.includes(pathPrefix)) {
    finalBaseUrl = `${finalBaseUrl}${pathPrefix}`;
  }

  let buttonLabel = "ดูรายละเอียด";
  let showCarDriver = false;
  let targetPath = "/requests";

  switch (step) {
    case "to_dept_head":
      title = "คำขอใหม่ (รองฯฝ่ายอนุมัติ)";
      color = "#F59E0B"; // Amber
      targetPath = "/approvals";
      buttonLabel = "พิจารณาอนุมัติ";
      break;
    case "to_scheduler":
      title = "คำขออนุมัติแล้ว (รอจัดคิวรถ)";
      color = "#10B981"; // Emerald
      targetPath = "/queue";
      buttonLabel = "จัดคิวรถ";
      break;
    case "to_resource_deputy":
      title = "คิวรถพร้อม (รองฯฝ่ายบริหารทรัพยากรอนุมัติ)";
      color = "#8B5CF6"; // Purple
      targetPath = "/resource-approvals";
      buttonLabel = "พิจารณาคิวรถ";
      showCarDriver = true;
      break;
    case "to_director":
      title = "คิวรถพร้อม (ท่านผู้อำนวยการอนุมัติ)";
      color = "#EC4899"; // Pink
      targetPath = "/final-approvals";
      buttonLabel = "พิจารณาอนุมัติขั้นสุดท้าย";
      showCarDriver = true;
      break;
    case "to_driver":
      title = "🚗 แจ้งเตือนงานขับรถใหม่";
      color = "#14B8A6"; // Teal
      targetPath = "/driver";
      buttonLabel = "บันทึกเลขไมล์เดินทาง";
      showCarDriver = true;
      break;
    case "to_requester_approved":
      title = "✅ คำขออนุญาตใช้รถ ได้รับการอนุมัติแล้ว";
      color = "#22C55E"; // Green
      targetPath = "/requests";
      showCarDriver = true;
      break;
    case "to_requester_rejected":
      title = "❌ คำขอถูกปฏิเสธ";
      color = "#EF4444"; // Red
      targetPath = "/requests";
      break;
    case "to_driver_cancelled":
      title = "❌ แจ้งเตือนยกเลิกงานขับรถ";
      color = "#EF4444"; // Red
      targetPath = "/driver";
      showCarDriver = true;
      break;
    case "to_requester_cancelled":
      title = "❌ แจ้งเตือนยกเลิกคำขอใช้รถ";
      color = "#EF4444"; // Red
      targetPath = "/requests";
      showCarDriver = true;
      break;
  }

  // Build secure auto-login URL via LINE User ID
  const buttonUrl = `${finalBaseUrl}/api/auth/line-login?uid=${lineUserId}&redirect=${encodeURIComponent(targetPath)}`;

  const bodyContents: any[] = [
    {
      type: "box",
      layout: "baseline",
      spacing: "sm",
      contents: [
        { type: "text", text: "ผู้ขอ", color: "#aaaaaa", size: "sm", flex: 2 },
        { type: "text", text: requestDetails.requesterName, wrap: true, color: "#666666", size: "sm", flex: 5 },
      ],
    },
    {
      type: "box",
      layout: "baseline",
      spacing: "sm",
      contents: [
        { type: "text", text: "ไปที่", color: "#aaaaaa", size: "sm", flex: 2 },
        { type: "text", text: requestDetails.destination, wrap: true, color: "#666666", size: "sm", flex: 5 },
      ],
    },
    {
      type: "box",
      layout: "baseline",
      spacing: "sm",
      contents: [
        { type: "text", text: "เวลา", color: "#aaaaaa", size: "sm", flex: 2 },
        { type: "text", text: requestDetails.dateRange, wrap: true, color: "#666666", size: "sm", flex: 5 },
      ],
    }
  ];

  if (showCarDriver && requestDetails.carInfo && requestDetails.driverName) {
    bodyContents.push(
      {
        type: "box",
        layout: "baseline",
        spacing: "sm",
        contents: [
          { type: "text", text: "รถยนต์", color: "#aaaaaa", size: "sm", flex: 2 },
          { type: "text", text: requestDetails.carInfo, wrap: true, color: "#2563EB", size: "sm", weight: "bold", flex: 5 },
        ],
      },
      {
        type: "box",
        layout: "baseline",
        spacing: "sm",
        contents: [
          { type: "text", text: "คนขับ", color: "#aaaaaa", size: "sm", flex: 2 },
          { type: "text", text: requestDetails.driverName, wrap: true, color: "#2563EB", size: "sm", weight: "bold", flex: 5 },
        ],
      }
    );
  }

  if (requestDetails.cancellationReason) {
    bodyContents.push({
      type: "box",
      layout: "baseline",
      spacing: "sm",
      contents: [
        { type: "text", text: "เหตุผล", color: "#aaaaaa", size: "sm", flex: 2 },
        { type: "text", text: requestDetails.cancellationReason, wrap: true, color: "#EF4444", size: "sm", weight: "bold", flex: 5 },
      ],
    });
  }

  try {
    await client.pushMessage({
      to: lineUserId,
      messages: [
        {
          type: "flex",
          altText: title,
          contents: {
            type: "bubble",
            header: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: title,
                  weight: "bold",
                  color: "#FFFFFF",
                  size: "md",
                  wrap: true
                },
              ],
              backgroundColor: color,
            },
            body: {
              type: "box",
              layout: "vertical",
              spacing: "md",
              contents: bodyContents,
            },
            footer: {
              type: "box",
              layout: "horizontal",
              spacing: "sm",
              contents: [
                {
                  type: "button",
                  style: "primary",
                  height: "sm",
                  action: {
                    type: "uri",
                    label: buttonLabel,
                    uri: buttonUrl,
                  },
                },
              ],
            },
          },
        },
      ],
    });
  } catch (error) {
    console.error("Error sending LINE notification:", error);
  }
}
