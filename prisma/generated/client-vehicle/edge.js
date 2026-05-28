
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.0.0
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "6.0.0",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Master_VehiclesScalarFieldEnum = {
  carId: 'carId',
  licensePlate: 'licensePlate',
  brand: 'brand',
  carType: 'carType',
  capacity: 'capacity',
  status: 'status',
  actExpiryDate: 'actExpiryDate',
  insuranceExpiryDate: 'insuranceExpiryDate',
  taxExpiryDate: 'taxExpiryDate'
};

exports.Prisma.Master_DriversScalarFieldEnum = {
  driverId: 'driverId',
  driverName: 'driverName',
  phone: 'phone',
  status: 'status',
  lineUserId: 'lineUserId',
  licenseNumber: 'licenseNumber',
  licenseExpiryDate: 'licenseExpiryDate',
  address: 'address'
};

exports.Prisma.Vehicle_RequestsScalarFieldEnum = {
  requestId: 'requestId',
  requesterStaffId: 'requesterStaffId',
  purpose: 'purpose',
  destination: 'destination',
  province: 'province',
  refOrderNumber: 'refOrderNumber',
  refOrderDate: 'refOrderDate',
  startDateTime: 'startDateTime',
  endDateTime: 'endDateTime',
  passengerCount: 'passengerCount',
  passengerNames: 'passengerNames',
  carId: 'carId',
  driverId: 'driverId',
  status: 'status',
  startOdometer: 'startOdometer',
  endOdometer: 'endOdometer',
  startOdometerPhoto: 'startOdometerPhoto',
  endOdometerPhoto: 'endOdometerPhoto',
  actualDistance: 'actualDistance',
  departureRecordedAt: 'departureRecordedAt',
  arrivalRecordedAt: 'arrivalRecordedAt',
  isRecurring: 'isRecurring',
  recurrencePattern: 'recurrencePattern',
  recurrenceGroupId: 'recurrenceGroupId',
  parentRequestId: 'parentRequestId',
  rejectionReason: 'rejectionReason',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Driver_LeavesScalarFieldEnum = {
  leaveId: 'leaveId',
  driverId: 'driverId',
  startDate: 'startDate',
  endDate: 'endDate',
  leaveType: 'leaveType',
  reason: 'reason',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Vehicle_MaintenancesScalarFieldEnum = {
  maintenanceId: 'maintenanceId',
  carId: 'carId',
  startDate: 'startDate',
  endDate: 'endDate',
  type: 'type',
  cost: 'cost',
  details: 'details',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Vehicle_Fuel_LogsScalarFieldEnum = {
  fuelLogId: 'fuelLogId',
  amount: 'amount',
  fillDate: 'fillDate',
  carId: 'carId',
  liters: 'liters',
  odometerRead: 'odometerRead',
  requestId: 'requestId',
  refSlip: 'refSlip',
  fuelProvider: 'fuelProvider',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Vehicle_TaxesScalarFieldEnum = {
  taxId: 'taxId',
  carId: 'carId',
  paymentDate: 'paymentDate',
  expiryDate: 'expiryDate',
  cost: 'cost',
  receiptNumber: 'receiptNumber',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Vehicle_TiresScalarFieldEnum = {
  tireId: 'tireId',
  carId: 'carId',
  changeDate: 'changeDate',
  odometerRead: 'odometerRead',
  brand: 'brand',
  spec: 'spec',
  cost: 'cost',
  tireCount: 'tireCount',
  limitOdometer: 'limitOdometer',
  limitMonths: 'limitMonths',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.Master_VehiclesOrderByRelevanceFieldEnum = {
  licensePlate: 'licensePlate',
  brand: 'brand',
  carType: 'carType',
  status: 'status'
};

exports.Prisma.Master_DriversOrderByRelevanceFieldEnum = {
  driverName: 'driverName',
  phone: 'phone',
  status: 'status',
  lineUserId: 'lineUserId',
  licenseNumber: 'licenseNumber',
  address: 'address'
};

exports.Prisma.Vehicle_RequestsOrderByRelevanceFieldEnum = {
  purpose: 'purpose',
  destination: 'destination',
  province: 'province',
  refOrderNumber: 'refOrderNumber',
  passengerNames: 'passengerNames',
  status: 'status',
  startOdometerPhoto: 'startOdometerPhoto',
  endOdometerPhoto: 'endOdometerPhoto',
  recurrencePattern: 'recurrencePattern',
  recurrenceGroupId: 'recurrenceGroupId',
  rejectionReason: 'rejectionReason'
};

exports.Prisma.Driver_LeavesOrderByRelevanceFieldEnum = {
  leaveType: 'leaveType',
  reason: 'reason',
  status: 'status'
};

exports.Prisma.Vehicle_MaintenancesOrderByRelevanceFieldEnum = {
  type: 'type',
  details: 'details',
  status: 'status'
};

exports.Prisma.Vehicle_Fuel_LogsOrderByRelevanceFieldEnum = {
  refSlip: 'refSlip',
  fuelProvider: 'fuelProvider',
  notes: 'notes'
};

exports.Prisma.Vehicle_TaxesOrderByRelevanceFieldEnum = {
  receiptNumber: 'receiptNumber',
  notes: 'notes'
};

exports.Prisma.Vehicle_TiresOrderByRelevanceFieldEnum = {
  brand: 'brand',
  spec: 'spec',
  notes: 'notes'
};


exports.Prisma.ModelName = {
  Master_Vehicles: 'Master_Vehicles',
  Master_Drivers: 'Master_Drivers',
  Vehicle_Requests: 'Vehicle_Requests',
  Driver_Leaves: 'Driver_Leaves',
  Vehicle_Maintenances: 'Vehicle_Maintenances',
  Vehicle_Fuel_Logs: 'Vehicle_Fuel_Logs',
  Vehicle_Taxes: 'Vehicle_Taxes',
  Vehicle_Tires: 'Vehicle_Tires'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\xampp\\htdocs\\npcgo\\prisma\\generated\\client-vehicle",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\xampp\\htdocs\\npcgo\\prisma\\schema.vehicle.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.0.0",
  "engineVersion": "5dbef10bdbfb579e07d35cc85fb1518d357cb99e",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_VEHICLE",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated/client-vehicle\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL_VEHICLE\")\n}\n\nmodel Master_Vehicles {\n  carId               Int                    @id @default(autoincrement())\n  licensePlate        String\n  brand               String?\n  carType             String\n  capacity            Int                    @default(4)\n  status              String                 @default(\"Ready\")\n  actExpiryDate       DateTime?\n  insuranceExpiryDate DateTime?\n  taxExpiryDate       DateTime? // วันหมดอายุภาษี/ทะเบียนปัจจุบัน\n  requests            Vehicle_Requests[]\n  maintenances        Vehicle_Maintenances[] // ประวัติการส่งซ่อมบำรุงรถยนต์\n  fuelLogs            Vehicle_Fuel_Logs[] // ประวัติการเติมน้ำมัน\n  taxes               Vehicle_Taxes[] // ประวัติการต่อภาษี/ทะเบียน\n  tires               Vehicle_Tires[] // ประวัติการเปลี่ยนยาง\n}\n\nmodel Master_Drivers {\n  driverId          Int                @id @default(autoincrement())\n  driverName        String\n  phone             String?\n  status            String             @default(\"Available\")\n  lineUserId        String?\n  licenseNumber     String? // เลขที่ใบอนุญาตขับขี่\n  licenseExpiryDate DateTime? // วันหมดอายุใบอนุญาตขับขี่\n  address           String?            @db.Text // ที่อยู่สำหรับข้อมูลส่วนตัวคนขับ\n  requests          Vehicle_Requests[]\n  leaves            Driver_Leaves[] // ประวัติการลา/หยุดของพนักงานขับรถ\n}\n\nmodel Vehicle_Requests {\n  requestId        Int       @id @default(autoincrement())\n  requesterStaffId Int // References Staff(staffId) from npc_job\n  purpose          String\n  destination      String\n  province         String    @default(\"น่าน\")\n  refOrderNumber   String?\n  refOrderDate     DateTime?\n  startDateTime    DateTime\n  endDateTime      DateTime\n  passengerCount   Int\n  passengerNames   String    @db.Text\n\n  carId Int?\n  car   Master_Vehicles? @relation(fields: [carId], references: [carId])\n\n  driverId Int?\n  driver   Master_Drivers? @relation(fields: [driverId], references: [driverId])\n\n  status String @default(\"Pending_Dept_Approval\")\n  // Statuses: Pending_Dept_Approval, Pending_Scheduler, Pending_Resource_Deputy_Approval, Pending_Director_Approval, Approved, Rejected, In_Transit, Completed\n\n  // ฟิลด์สำหรับการบันทึกเลขไมล์เดินทางและภาพถ่ายหลักฐาน\n  startOdometer       Int? // เลขไมล์ออกเดินทาง (กิโลเมตร)\n  endOdometer         Int? // เลขไมล์เดินทางกลับ (กิโลเมตร)\n  startOdometerPhoto  String? // เส้นทางรูปภาพไมล์ออก (Evidence Photo)\n  endOdometerPhoto    String? // เส้นทางรูปภาพไมล์เข้า (Evidence Photo)\n  actualDistance      Int? // ระยะทางที่ใช้วิ่งจริง (กิโลเมตร)\n  departureRecordedAt DateTime? // วันเวลาที่บันทึกรถออกเดินทาง\n  arrivalRecordedAt   DateTime? // วันเวลาที่บันทึกรถกลับถึง\n\n  // ฟิลด์สำหรับการจองประจำแบบจองซ้ำ (Recurring Booking)\n  isRecurring       Boolean @default(false) // เป็นตารางเดินทางประจำหรือไม่\n  recurrencePattern String? // รูปแบบ: \"DAILY\" | \"WEEKDAYS\" | \"WEEKLY\"\n  recurrenceGroupId String? // รหัสกลุ่มจองแบบประจำ (UUID)\n  parentRequestId   Int? // รหัสคำขอหลักของตารางนี้\n\n  rejectionReason String? @db.Text // เหตุผลในกรณีพิจารณาไม่อนุมัติคำขอ\n\n  createdAt DateTime            @default(now())\n  updatedAt DateTime            @updatedAt\n  fuelLogs  Vehicle_Fuel_Logs[] // ประวัติการเติมน้ำมัน\n}\n\nmodel Driver_Leaves {\n  leaveId   Int            @id @default(autoincrement())\n  driverId  Int\n  driver    Master_Drivers @relation(fields: [driverId], references: [driverId], onDelete: Cascade)\n  startDate DateTime // เริ่มลางานเมื่อ\n  endDate   DateTime // สิ้นสุดลางานเมื่อ\n  leaveType String // ประเภท: \"SICK\" (ลาป่วย) | \"PERSONAL\" (ลากิจ) | \"VACATION\" (ลาพักร้อน) | \"ABSENT\" (ขาดงาน)\n  reason    String?        @db.Text // เหตุผลการลา\n  status    String         @default(\"APPROVED\") // APPROVED | CANCELLED\n  createdAt DateTime       @default(now())\n  updatedAt DateTime       @updatedAt\n\n  @@index([driverId])\n}\n\nmodel Vehicle_Maintenances {\n  maintenanceId Int             @id @default(autoincrement())\n  carId         Int\n  car           Master_Vehicles @relation(fields: [carId], references: [carId], onDelete: Cascade)\n  startDate     DateTime // วันเริ่มต้นส่งซ่อม/บำรุง\n  endDate       DateTime // วันสิ้นสุด (กำหนดการเสร็จ)\n  type          String // ประเภท: \"MAINTENANCE\" (ตรวจเช็คระยะ) | \"REPAIR\" (ซ่อมแซม) | \"INSPECTION\" (ตรวจสภาพ) | \"ACCIDENT\" (เคลมประกัน)\n  cost          Float? // ค่าใช้จ่ายในการดำเนินการ\n  details       String?         @db.Text // รายละเอียดความชำรุดเสียหาย/การบำรุง\n  status        String          @default(\"SCHEDULED\") // SCHEDULED | IN_PROGRESS | COMPLETED | CANCELLED\n  createdAt     DateTime        @default(now())\n  updatedAt     DateTime        @updatedAt\n\n  @@index([carId])\n}\n\nmodel Vehicle_Fuel_Logs {\n  fuelLogId Int      @id @default(autoincrement())\n  amount    Float // จำนวนเงินค่าน้ำมัน (บาท)\n  fillDate  DateTime // วันที่เติมน้ำมัน\n\n  carId Int?\n  car   Master_Vehicles? @relation(fields: [carId], references: [carId], onDelete: SetNull)\n\n  liters       Float? // จำนวนลิตรที่เติม (คำนวณประสิทธิภาพ)\n  odometerRead Float? // เลขไมล์หน้ารถล่าสุดขณะเติม (กิโลเมตร)\n\n  requestId Int?\n  request   Vehicle_Requests? @relation(fields: [requestId], references: [requestId], onDelete: SetNull)\n\n  refSlip      String? // เลขใบเสร็จ/รหัสสั่งเติมน้ำมัน (ถ้ามี)\n  fuelProvider String? // ผู้ค้าน้ำมัน / ปั๊มน้ำมัน (เช่น ปตท. ในน่าน, นอกจังหวัด)\n  notes        String?  @db.Text\n  createdAt    DateTime @default(now())\n  updatedAt    DateTime @updatedAt\n\n  @@index([carId])\n  @@index([requestId])\n}\n\nmodel Vehicle_Taxes {\n  taxId         Int             @id @default(autoincrement())\n  carId         Int\n  car           Master_Vehicles @relation(fields: [carId], references: [carId], onDelete: Cascade)\n  paymentDate   DateTime // วันที่จ่ายภาษี/ต่อทะเบียน\n  expiryDate    DateTime // วันสิ้นสุดอายุภาษีรอบนี้\n  cost          Float?          @default(0) // ค่าใช้จ่ายจริง (รองรับ 0 บาทสำหรับรถหลวง)\n  receiptNumber String? // เลขที่ใบเสร็จรับเงิน/ป้ายภาษี\n  notes         String?         @db.Text // บันทึก/หมายเหตุเพิ่มเติม\n  createdAt     DateTime        @default(now())\n  updatedAt     DateTime        @updatedAt\n\n  @@index([carId])\n}\n\nmodel Vehicle_Tires {\n  tireId        Int             @id @default(autoincrement())\n  carId         Int\n  car           Master_Vehicles @relation(fields: [carId], references: [carId], onDelete: Cascade)\n  changeDate    DateTime // วันที่เปลี่ยนยาง\n  odometerRead  Int // เลขไมล์รถยนต์ขณะเปลี่ยนยาง (กม.)\n  brand         String? // ยี่ห้อยางรถยนต์\n  spec          String? // สเปกยางรถยนต์ เช่น 195/65R15\n  cost          Float? // ค่าใช้จ่ายรวม\n  tireCount     Int             @default(4) // จำนวนยางที่เปลี่ยน\n  limitOdometer Int? // เลขไมล์แจ้งเตือนเปลี่ยนยางครั้งถัดไป\n  limitMonths   Int?            @default(36) // อายุขัยการใช้งานยาง (เริ่มต้น 36 เดือน)\n  notes         String?         @db.Text\n  createdAt     DateTime        @default(now())\n  updatedAt     DateTime        @updatedAt\n\n  @@index([carId])\n}\n",
  "inlineSchemaHash": "b1a6b43d69d6acd42c9eef63ad95eb40b4ade41c6902a1a3f650e46673942222",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Master_Vehicles\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licensePlate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"capacity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":4,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"Ready\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actExpiryDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insuranceExpiryDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxExpiryDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requests\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle_Requests\",\"nativeType\":null,\"relationName\":\"Master_VehiclesToVehicle_Requests\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"maintenances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle_Maintenances\",\"nativeType\":null,\"relationName\":\"Master_VehiclesToVehicle_Maintenances\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fuelLogs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle_Fuel_Logs\",\"nativeType\":null,\"relationName\":\"Master_VehiclesToVehicle_Fuel_Logs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"taxes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle_Taxes\",\"nativeType\":null,\"relationName\":\"Master_VehiclesToVehicle_Taxes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tires\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle_Tires\",\"nativeType\":null,\"relationName\":\"Master_VehiclesToVehicle_Tires\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Master_Drivers\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"driverId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"driverName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"Available\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lineUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenseNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"licenseExpiryDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requests\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle_Requests\",\"nativeType\":null,\"relationName\":\"Master_DriversToVehicle_Requests\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leaves\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Driver_Leaves\",\"nativeType\":null,\"relationName\":\"Driver_LeavesToMaster_Drivers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vehicle_Requests\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"requestId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requesterStaffId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"purpose\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destination\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"province\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"น่าน\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refOrderNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refOrderDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDateTime\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passengerCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"passengerNames\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Master_Vehicles\",\"nativeType\":null,\"relationName\":\"Master_VehiclesToVehicle_Requests\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"carId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"driverId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"driver\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Master_Drivers\",\"nativeType\":null,\"relationName\":\"Master_DriversToVehicle_Requests\",\"relationFromFields\":[\"driverId\"],\"relationToFields\":[\"driverId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"Pending_Dept_Approval\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startOdometer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endOdometer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startOdometerPhoto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endOdometerPhoto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actualDistance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departureRecordedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"arrivalRecordedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isRecurring\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recurrencePattern\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recurrenceGroupId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parentRequestId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rejectionReason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"fuelLogs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle_Fuel_Logs\",\"nativeType\":null,\"relationName\":\"Vehicle_Fuel_LogsToVehicle_Requests\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Driver_Leaves\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"leaveId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"driverId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"driver\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Master_Drivers\",\"nativeType\":null,\"relationName\":\"Driver_LeavesToMaster_Drivers\",\"relationFromFields\":[\"driverId\"],\"relationToFields\":[\"driverId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leaveType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"APPROVED\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vehicle_Maintenances\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"maintenanceId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Master_Vehicles\",\"nativeType\":null,\"relationName\":\"Master_VehiclesToVehicle_Maintenances\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"carId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"startDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"endDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"details\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":null,\"default\":\"SCHEDULED\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vehicle_Fuel_Logs\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"fuelLogId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fillDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Master_Vehicles\",\"nativeType\":null,\"relationName\":\"Master_VehiclesToVehicle_Fuel_Logs\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"carId\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"liters\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"odometerRead\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requestId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"request\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Vehicle_Requests\",\"nativeType\":null,\"relationName\":\"Vehicle_Fuel_LogsToVehicle_Requests\",\"relationFromFields\":[\"requestId\"],\"relationToFields\":[\"requestId\"],\"relationOnDelete\":\"SetNull\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refSlip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fuelProvider\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vehicle_Taxes\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"taxId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Master_Vehicles\",\"nativeType\":null,\"relationName\":\"Master_VehiclesToVehicle_Taxes\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"carId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"paymentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiryDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"receiptNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Vehicle_Tires\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"tireId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"car\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Master_Vehicles\",\"nativeType\":null,\"relationName\":\"Master_VehiclesToVehicle_Tires\",\"relationFromFields\":[\"carId\"],\"relationToFields\":[\"carId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"changeDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"odometerRead\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spec\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cost\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tireCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":4,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limitOdometer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"limitMonths\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":36,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"notes\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_VEHICLE: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_VEHICLE'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_VEHICLE || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

