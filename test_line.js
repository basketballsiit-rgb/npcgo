const { PrismaClient: PrismaClientJob } = require('./prisma/generated/client-job');
const line = require('@line/bot-sdk');

const dbJob = new PrismaClientJob();

async function main() {
  console.log("=== RUNNING LINE API DIAGNOSTICS ===");
  
  // 1. Fetch token from DB
  const setting = await dbJob.settings.findUnique({
    where: { setting_key: "line_channel_access_token" }
  });
  const token = setting?.setting_value || "";
  
  if (!token) {
    console.error("❌ Error: line_channel_access_token not found in database settings!");
    return;
  }
  
  console.log(`Token loaded successfully (Length: ${token.length})`);
  
  // 2. Initialize MessagingApiClient
  const client = new line.messagingApi.MessagingApiClient({
    channelAccessToken: token,
  });

  const targetLineUserId = "U0e01923bc01804ba3ec7164badd7b84c"; // นายนิพนธ์ ร่องพืช
  
  console.log(`Attempting to send push message to: ${targetLineUserId}`);
  
  try {
    const result = await client.pushMessage({
      to: targetLineUserId,
      messages: [
        {
          type: "text",
          text: "🔔 ทดสอบการแจ้งเตือนจากระบบจองรถยนต์ NPCGO\nเวลาทดสอบ: " + new Date().toLocaleString()
        }
      ]
    });
    console.log("✅ SUCCESS! Message sent successfully. Result:", result);
  } catch (error) {
    console.error("❌ LINE API Call Failed!");
    
    if (error.response) {
      console.error(`Status Code: ${error.response.status}`);
      console.error("Response Headers:", error.response.headers);
      console.error("Response Body:", error.response.data);
    } else {
      console.error("Error Message:", error.message);
      console.error("Full Error Details:", error);
    }
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await dbJob.$disconnect();
  });
