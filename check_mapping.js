const { PrismaClient: PrismaClientJob } = require('./prisma/generated/client-job');
const { PrismaClient: PrismaClientVehicle } = require('./prisma/generated/client-vehicle');

const dbJob = new PrismaClientJob();
const dbVehicle = new PrismaClientVehicle();

async function main() {
  console.log("=== ALL SETTINGS IN DATABASE ===");
  const allSettings = await dbJob.settings.findMany();
  for (const s of allSettings) {
    console.log(` - ${s.setting_key} = "${s.setting_value}"`);
  }

  console.log("\n=== SPECIFIC DIVISION DEPUTIES CHECK ===");
  const divisionKeys = [
    'role_academic',        // ฝ่ายวิชาการ
    'role_strategy',        // ฝ่ายแผนงานฯ / นโยบายและแผน
    'role_student_affairs', // ฝ่ายพัฒนากิจการฯ
    'role_resource_deputy', // ฝ่ายบริหารทรัพยากร
  ];

  for (const key of divisionKeys) {
    const setting = allSettings.find(s => s.setting_key === key);
    if (setting) {
      const userId = parseInt(setting.setting_value);
      if (isNaN(userId)) {
        console.log(`Key [${key}]: Value is non-numeric: "${setting.setting_value}"`);
        continue;
      }
      
      const user = await dbJob.users.findUnique({
        where: { id: userId }
      });
      
      if (user) {
        console.log(`Key [${key}]: Mapped to User ID ${userId} (${user.prefix || ''}${user.firstname} ${user.lastname})`);
        console.log(`   LINE User ID: ${user.line_user_id || '❌ MISSING (Not registered)'}`);
      } else {
        console.log(`Key [${key}]: Mapped to User ID ${userId} but USER DOES NOT EXIST in database!`);
      }
    } else {
      console.log(`Key [${key}]: ❌ NOT FOUND in settings!`);
    }
  }

  console.log("\n=== DEPUTY CHECK FOR RECENT REQUEST ===");
  // Let's get the latest request submitted
  const latestReq = await dbVehicle.vehicle_Requests.findFirst({
    orderBy: { requestId: 'desc' }
  });

  if (latestReq) {
    console.log(`Latest Request ID: #${latestReq.requestId}`);
    const requester = await dbJob.users.findUnique({
      where: { id: latestReq.requesterStaffId }
    });
    if (requester) {
      console.log(`Requester: ID ${requester.id} (${requester.firstname} ${requester.lastname}), Department ID: ${requester.department_id}`);
      if (requester.department_id) {
        const mapKey = `dept_map_${requester.department_id}`;
        const mapSetting = allSettings.find(s => s.setting_key === mapKey);
        if (mapSetting) {
          console.log(`  - Mapping found: ${mapKey} -> "${mapSetting.setting_value}"`);
          const deputySetting = allSettings.find(s => s.setting_key === mapSetting.setting_value);
          if (deputySetting) {
            console.log(`  - Deputy Setting found: ${mapSetting.setting_value} -> "${deputySetting.setting_value}"`);
            const deputyUser = await dbJob.users.findUnique({
              where: { id: parseInt(deputySetting.setting_value) }
            });
            if (deputyUser) {
              console.log(`  - Deputy User: ID ${deputyUser.id} (${deputyUser.firstname} ${deputyUser.lastname})`);
              console.log(`  - Deputy LINE User ID: "${deputyUser.line_user_id || '❌ MISSING'}"`);
            } else {
              console.log(`  - Deputy User ID ${deputySetting.setting_value} does not exist!`);
            }
          } else {
            console.log(`  - Deputy Role key "${mapSetting.setting_value}" does not exist in settings!`);
          }
        } else {
          console.log(`  - Department Mapping "${mapKey}" does not exist in settings!`);
        }
      }
    }
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await dbJob.$disconnect();
    await dbVehicle.$disconnect();
  });
