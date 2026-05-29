import { dbVehicle } from "@/lib/db.vehicle";
import { dbJob } from "@/lib/db.job";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { notFound } from "next/navigation";
import { Square, CheckSquare, Lock, Clock, ShieldAlert, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { PrintButton } from "@/components/ui/print-button";
import { Sarabun } from "next/font/google";
import Link from "next/link";
import fs from "fs";
import path from "path";

const sarabun = Sarabun({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
});

const formatThaiDateShort = (date: Date | string | null, includeTime = false) => {
  if (!date) return "";
  const d = new Date(date);
  const day = format(d, "d", { locale: th });
  const month = format(d, "MMM", { locale: th });
  const year = (d.getFullYear() + 543).toString().slice(-2);
  let result = `${day} ${month} ${year}`;
  if (includeTime) {
    result += ` เวลา ${format(d, "HH:mm")} น.`;
  }
  return result;
};

export default async function PrintRequestPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const requestId = parseInt(resolvedParams.id);
  if (isNaN(requestId)) return notFound();

  const request = await dbVehicle.vehicle_Requests.findUnique({
    where: { requestId },
    include: {
      car: true,
      driver: true,
    }
  });

  if (!request) return notFound();

  const requester = await dbJob.users.findUnique({
    where: { id: request.requesterStaffId },
  });

  // 1. Get Deputy Director of Department dynamically
  let departmentDeputyName = "";
  if (requester && requester.department_id) {
    const deptMap = await dbJob.settings.findUnique({
      where: { setting_key: `dept_map_${requester.department_id}` }
    });
    if (deptMap?.setting_value) {
      const roleAssign = await dbJob.settings.findUnique({
        where: { setting_key: deptMap.setting_value }
      });
      if (roleAssign?.setting_value) {
        const deputy = await dbJob.users.findUnique({
          where: { id: parseInt(roleAssign.setting_value) }
        });
        if (deputy) {
          const prefix = deputy.prefix || "";
          departmentDeputyName = `${prefix}${deputy.firstname} ${deputy.lastname}`;
        }
      }
    }
  }

  // 2. Get Scheduler dynamically
  let schedulerName = "นายตรัณ ชำนาญชาติ"; // default fallback
  const schedulerAssign = await dbJob.settings.findUnique({
    where: { setting_key: "role_scheduler" }
  });
  if (schedulerAssign?.setting_value) {
    const schedulerUser = await dbJob.users.findUnique({
      where: { id: parseInt(schedulerAssign.setting_value) }
    });
    if (schedulerUser) {
      const prefix = schedulerUser.prefix || "";
      schedulerName = `${prefix}${schedulerUser.firstname} ${schedulerUser.lastname}`;
    }
  }

  // 3. Get Resource Deputy Director dynamically
  let resourceDeputyName = "นายจักรพงศ์ พรหมสกุลปัญญา"; // default fallback
  const resourceDeputyAssign = await dbJob.settings.findUnique({
    where: { setting_key: "role_resource_deputy" }
  });
  if (resourceDeputyAssign?.setting_value) {
    const resourceDeputyUser = await dbJob.users.findUnique({
      where: { id: parseInt(resourceDeputyAssign.setting_value) }
    });
    if (resourceDeputyUser) {
      const prefix = resourceDeputyUser.prefix || "";
      resourceDeputyName = `${prefix}${resourceDeputyUser.firstname} ${resourceDeputyUser.lastname}`;
    }
  }

  // 4. Get Director dynamically
  let directorName = "นายกเชษฐ์ กิ่งชนะ"; // default fallback
  // Check settings key "director_name" first
  const settingDirectorName = await dbJob.settings.findUnique({
    where: { setting_key: "director_name" }
  });
  if (settingDirectorName?.setting_value && settingDirectorName.setting_value.trim() !== "") {
    directorName = settingDirectorName.setting_value.trim();
  } else {
    // Fall back to role_director assignment
    const directorAssign = await dbJob.settings.findUnique({
      where: { setting_key: "role_director" }
    });
    if (directorAssign?.setting_value) {
      const directorUser = await dbJob.users.findUnique({
        where: { id: parseInt(directorAssign.setting_value) }
      });
      if (directorUser) {
        const prefix = directorUser.prefix || "";
        directorName = `${prefix}${directorUser.firstname} ${directorUser.lastname}`;
      }
    }
  }

  // 5. Get College Name dynamically
  let collegeName = "วิทยาลัยสารพัดช่างน่าน"; // default fallback
  const settingCollegeName = await dbJob.settings.findUnique({
    where: { setting_key: "college_name" }
  });
  if (settingCollegeName?.setting_value && settingCollegeName.setting_value.trim() !== "") {
    collegeName = settingCollegeName.setting_value.trim();
  }


  // Verify and load signatures on Server Side

  const checkSignatureFile = (fileName: string) => {
    const filePath = path.join(process.cwd(), "public", "signatures", fileName);
    return fs.existsSync(filePath);
  };

  const hasRequesterSig = checkSignatureFile(`user_${request.requesterStaffId}.png`);
  const requesterSigUrl = hasRequesterSig ? `/npcgo/signatures/user_${request.requesterStaffId}.png?v=${Date.now()}` : null;

  const hasDeputySig = checkSignatureFile(`requests/request_${requestId}_deputy.png`);
  const deputySigUrl = hasDeputySig ? `/npcgo/signatures/requests/request_${requestId}_deputy.png?v=${Date.now()}` : null;

  const hasSchedulerSig = checkSignatureFile(`requests/request_${requestId}_scheduler.png`);
  const schedulerSigUrl = hasSchedulerSig ? `/npcgo/signatures/requests/request_${requestId}_scheduler.png?v=${Date.now()}` : null;

  const hasResourceDeputySig = checkSignatureFile(`requests/request_${requestId}_resource_deputy.png`);
  const resourceDeputySigUrl = hasResourceDeputySig ? `/npcgo/signatures/requests/request_${requestId}_resource_deputy.png?v=${Date.now()}` : null;

  const hasDirectorSig = checkSignatureFile(`requests/request_${requestId}_director.png`);
  const directorSigUrl = hasDirectorSig ? `/npcgo/signatures/requests/request_${requestId}_director.png?v=${Date.now()}` : null;

  // Strict print restrictions: only printable when fully finalized (Approved or Rejected)
  const isFinalized = request.status === "Approved" || request.status === "Rejected";

  if (!isFinalized) {
    // Determine stepper highlight based on current pending status
    const currentStatus = request.status;
    const steps = [
      { key: "Pending_Dept_Approval", label: "หัวหน้าฝ่าย/รองผู้อำนวยการอนุมัติ", desc: "รองผู้อำนวยการฝ่ายที่สังกัดลงนามตรวจสอบ" },
      { key: "Pending_Scheduler", label: "จัดสรรรถและคนขับรถ", desc: "งานยานพาหนะตรวจสอบและจัดรถยนต์" },
      { key: "Pending_Resource_Deputy_Approval", label: "รองผู้อำนวยการฝ่ายบริหารฯ", desc: "พิจารณาตรวจสอบการใช้งานทรัพยากร" },
      { key: "Pending_Director_Approval", label: "ผู้อำนวยการวิทยาลัยอนุมัติ", desc: "ลงนามอนุมัติใบอนุญาตขั้นสุดท้าย" },
    ];

    const getStepStatus = (stepKey: string) => {
      const statusOrder = [
        "Pending_Dept_Approval",
        "Pending_Scheduler",
        "Pending_Resource_Deputy_Approval",
        "Pending_Director_Approval",
        "Approved"
      ];
      const currentIndex = statusOrder.indexOf(currentStatus);
      const stepIndex = statusOrder.indexOf(stepKey);

      if (currentIndex > stepIndex) return "completed";
      if (currentIndex === stepIndex) return "active";
      return "upcoming";
    };

    return (
      <div className={`min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 md:p-8 ${sarabun.className}`}>
        <div className="max-w-2xl w-full bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 space-y-8 relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500"></div>
          
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 border border-amber-100 shadow-inner animate-pulse">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">
              ฟังก์ชันการพิมพ์ถูกล็อกชั่วคราว
            </h2>
            <p className="text-sm text-slate-500 max-w-md font-light leading-relaxed">
              แบบฟอร์มการขออนุญาตใช้รถยนต์จะสามารถสั่งพิมพ์หรือบันทึกไฟล์ PDF ได้เฉพาะเมื่อ
              <span className="font-semibold text-slate-700 mx-1">คำขอผ่านการอนุมัติครบทุกขั้นตอน</span>
              หรือถูกปฏิเสธแล้วเท่านั้น
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100/50">
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              ขั้นตอนการพิจารณาในปัจจุบัน
            </h3>
            
            <div className="relative pl-6 border-l border-slate-200 space-y-6 ml-2.5">
              {steps.map((step, idx) => {
                const stepStatus = getStepStatus(step.key);
                return (
                  <div key={step.key} className="relative">
                    {/* Step Icon Indicator */}
                    <div className={`absolute -left-[31px] top-0 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center transition-all ${
                      stepStatus === "completed" 
                        ? "border-emerald-500 bg-emerald-500 text-white" 
                        : stepStatus === "active" 
                        ? "border-amber-500 ring-4 ring-amber-100 animate-pulse bg-white" 
                        : "border-slate-300"
                    }`}>
                      {stepStatus === "completed" && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      )}
                      {stepStatus === "active" && (
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                      )}
                    </div>
                    
                    <div>
                      <h4 className={`text-sm font-semibold transition-all ${
                        stepStatus === "completed" 
                          ? "text-emerald-700" 
                          : stepStatus === "active" 
                          ? "text-amber-800" 
                          : "text-slate-400 font-normal"
                      }`}>
                        {step.label}
                      </h4>
                      <p className="text-xs text-slate-400 font-light mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center pt-2">
            <Link
              href="/requests"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors w-full sm:w-auto"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              กลับไปหน้าคำขอของฉัน
            </Link>
            <div className="text-xs text-slate-400 font-light hidden sm:inline-block">
              ID คำขอ: #{request.requestId}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Load all vehicles and drivers for the form fields
  const vehicles = await dbVehicle.master_Vehicles.findMany({
    orderBy: { carType: "asc" }
  });

  const drivers = await dbVehicle.master_Drivers.findMany({
    orderBy: { driverName: "asc" }
  });

  const formattedRequestDate = formatThaiDateShort(request.createdAt);
  const startFormat = formatThaiDateShort(request.startDateTime, true);
  const endFormat = formatThaiDateShort(request.endDateTime, true);

  // Approval Date extraction from updatedAt (when request was marked Approved)
  const approvalDate = request.status === "Approved" ? new Date(request.updatedAt) : null;
  const approvalDay = approvalDate ? format(approvalDate, "d", { locale: th }) : "";
  const approvalMonth = approvalDate ? format(approvalDate, "MMMM", { locale: th }) : "";
  const approvalYear = approvalDate ? (approvalDate.getFullYear() + 543).toString() : "";

  return (
    <div className={`min-h-screen bg-gray-100 py-4 print:py-0 print:bg-white flex justify-center print:block print:m-0 print:p-0 ${sarabun.className} text-[10pt] leading-tight`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { 
            size: A4 portrait; 
            margin: 0mm !important; 
          }
          html, body { 
            width: 210mm;
            height: 297mm;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
            background: white; 
            overflow: hidden !important;
          }
          .print-hidden { display: none !important; }
          .page-container {
            width: 210mm !important;
            height: 296mm !important;
            max-height: 296mm !important;
            margin: 0 !important;
            padding: 10mm 15mm !important; /* Internal padding for A4 */
            overflow: hidden !important;
            page-break-after: avoid !important;
            page-break-before: avoid !important;
            page-break-inside: avoid !important;
            box-sizing: border-box !important;
          }
        }
      `}} />
      
      {/* A4 Paper Container */}
      <div className="w-[210mm] min-h-[297mm] bg-white text-black px-6 py-4 shadow-lg print:shadow-none relative page-container">
        <PrintButton />

        <h1 className="text-[14pt] font-bold text-center mb-3">ใบขออนุญาตใช้รถยนต์</h1>

        <div className="text-right mb-4">
          วันที่ {formattedRequestDate}
        </div>

        <div className="mb-4 space-y-2">
          <div className="flex">
            <span className="w-16 whitespace-nowrap">เรียน</span>
            <span className="whitespace-nowrap">ผู้อำนวยการ{collegeName}</span>
          </div>
          <div className="pl-16 flex items-end">
            <span className="whitespace-nowrap">ข้าพเจ้า</span>
            <span className="flex-1 border-b border-dotted border-black ml-2 px-2 text-center whitespace-nowrap overflow-hidden">
              {requester ? `${requester.firstname} ${requester.lastname}` : ""}
            </span>
            <span className="whitespace-nowrap">มีความจำเป็นต้องขออนุญาตใช้รถยนต์</span>
          </div>
        </div>

        {/* Request Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-end">
            <span className="whitespace-nowrap">เพื่อไปติดต่อราชการเรื่อง</span>
            <span className="flex-1 border-b border-dotted border-black ml-2 px-2 whitespace-nowrap overflow-hidden">{request.purpose}</span>
          </div>
          <div className="flex items-end">
            <span className="whitespace-nowrap">สถานที่</span>
            <span className="flex-1 border-b border-dotted border-black ml-2 px-2 whitespace-nowrap overflow-hidden">{request.destination}</span>
            <span className="ml-4 whitespace-nowrap">ตามคำสั่งเลขที่</span>
            <span className="w-24 border-b border-dotted border-black ml-2 px-2 text-center whitespace-nowrap">{request.refOrderNumber || ""}</span>
            <span className="ml-4 whitespace-nowrap">ลงวันที่</span>
            <span className="w-24 border-b border-dotted border-black ml-2 px-2 text-center whitespace-nowrap">
              {formatThaiDateShort(request.refOrderDate)}
            </span>
          </div>
          <div className="flex items-end">
            <span className="whitespace-nowrap">ตั้งแต่วันที่</span>
            <span className="flex-1 border-b border-dotted border-black ml-2 px-2 text-center whitespace-nowrap">{startFormat}</span>
            <span className="mx-2 whitespace-nowrap">ถึงวันที่</span>
            <span className="flex-1 border-b border-dotted border-black ml-2 px-2 text-center whitespace-nowrap">{endFormat}</span>
          </div>
          <div className="flex items-end">
            <span className="whitespace-nowrap">มีผู้โดยสารไปด้วยจำนวน</span>
            <span className="w-12 border-b border-dotted border-black mx-2 text-center whitespace-nowrap">{request.passengerCount}</span>
            <span className="whitespace-nowrap">คน คือ</span>
            <span className="flex-1 border-b border-dotted border-black ml-2 px-2 whitespace-nowrap overflow-hidden">{request.passengerNames}</span>
          </div>
        </div>

        {/* Signatures */}
        <div className="flex flex-col items-end space-y-6 mb-4">
          {/* Slot 1: Requester */}
          <div className="w-80 text-center">
            <div className="flex items-end justify-center relative h-6">
              <span className="whitespace-nowrap">(ลงชื่อ)</span>
              <span className="flex-1 border-b border-dotted border-black ml-2"></span>
              {hasRequesterSig && requesterSigUrl && (
                <img
                  src={requesterSigUrl}
                  alt="Requester Signature"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-16 object-contain pointer-events-none mix-blend-multiply"
                />
              )}
            </div>
            <div className="mt-4 whitespace-nowrap">( {requester ? `${requester.firstname} ${requester.lastname}` : ""} )</div>
            <div className="mt-1 whitespace-nowrap">ผู้ขออนุญาตใช้รถ</div>
          </div>

          {/* Slot 2: Deputy Director */}
          <div className="w-80 text-center">
            <div className="flex items-end justify-center relative h-6">
              <span className="whitespace-nowrap">(ลงชื่อ)</span>
              <span className="flex-1 border-b border-dotted border-black ml-2"></span>
              {hasDeputySig && deputySigUrl && (
                <img
                  src={deputySigUrl}
                  alt="Deputy Signature"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-16 object-contain pointer-events-none mix-blend-multiply"
                />
              )}
            </div>
            <div className="mt-4 whitespace-nowrap">( {departmentDeputyName || <span className="inline-block w-48 border-b border-dotted border-transparent"></span>} )</div>
            <div className="mt-1 whitespace-nowrap">รองผู้อำนวยการฝ่ายฯ</div>
          </div>
        </div>

        <div className="mb-4 flex">
          <span className="w-16 whitespace-nowrap">เสนอ</span>
          <span className="whitespace-nowrap">ผู้อำนวยการ{collegeName}</span>
        </div>

        {/* Vehicles and Drivers Checkboxes */}
        <div className="pl-16 mb-4 grid grid-cols-2 gap-4">
          <div className="space-y-1">
            {vehicles.map((v) => (
              <div key={v.carId} className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
                {request.carId === v.carId ? (
                  <CheckSquare className="w-4 h-4 text-black flex-shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-black flex-shrink-0" />
                )}
                <span className="truncate">{v.carType} {v.brand || ""} {v.licensePlate}</span>
              </div>
            ))}
          </div>
          <div className="space-y-1">
            {drivers.map((d) => (
              <div key={d.driverId} className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
                {request.driverId === d.driverId ? (
                  <CheckSquare className="w-4 h-4 text-black flex-shrink-0" />
                ) : (
                  <Square className="w-4 h-4 text-black flex-shrink-0" />
                )}
                <span className="truncate">นาย{d.driverName.replace(/^นาย\s*/, '')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Signatures */}
        <div className="flex justify-between items-end mb-4">
          <div className="w-1/2"></div>
          <div className="w-80 text-center space-y-6">
            {/* Slot 3: Scheduler */}
            <div>
              <div className="flex items-end justify-center relative h-6">
                <span className="whitespace-nowrap">(ลงชื่อ)</span>
                <span className="flex-1 border-b border-dotted border-black ml-2"></span>
                {hasSchedulerSig && schedulerSigUrl && (
                  <img
                    src={schedulerSigUrl}
                    alt="Scheduler Signature"
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-16 object-contain pointer-events-none mix-blend-multiply"
                  />
                )}
              </div>
              <div className="mt-4 whitespace-nowrap">( {schedulerName} )</div>
              <div className="mt-1 whitespace-nowrap">ผู้จัดตารางรถ</div>
            </div>

            {/* Slot 4: Resource Deputy */}
            <div>
              <div className="flex items-end justify-center relative h-6">
                <span className="whitespace-nowrap">(ลงชื่อ)</span>
                <span className="flex-1 border-b border-dotted border-black ml-2"></span>
                {hasResourceDeputySig && resourceDeputySigUrl && (
                  <img
                    src={resourceDeputySigUrl}
                    alt="Resource Deputy Signature"
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-16 object-contain pointer-events-none mix-blend-multiply"
                  />
                )}
              </div>
              <div className="mt-4 whitespace-nowrap">( {resourceDeputyName} )</div>
              <div className="mt-1 whitespace-nowrap">รองผู้อำนวยการฝ่ายบริหารฯ</div>
            </div>
          </div>
        </div>

        {/* Approval section */}
        <div className="flex items-end mb-6">
          <span className="mr-8 whitespace-nowrap">คำสั่ง ผู้อำนวยการฯ</span>
          <div className="flex gap-8 flex-1">
            <div className="flex items-center gap-2">
              {request.status === "Approved" ? (
                <CheckSquare className="w-4 h-4 text-black" />
              ) : (
                <Square className="w-4 h-4 text-black" />
              )}
              <span className="whitespace-nowrap">อนุญาต</span>
            </div>
            <div className="flex items-end gap-2 flex-1">
              {request.status === "Rejected" ? (
                <CheckSquare className="w-4 h-4 text-black mb-1" />
              ) : (
                <Square className="w-4 h-4 text-black mb-1" />
              )}
              <span className="whitespace-nowrap">ไม่อนุญาต</span>
              <span className="flex-1 border-b border-dotted border-black ml-2"></span>
            </div>
          </div>
        </div>

        {/* Slot 5: Director */}
        <div className="flex justify-end mt-6">
          <div className="w-80 text-center">
            <div className="flex items-end justify-center relative h-6 mb-4">
              <span className="whitespace-nowrap">(ลงชื่อ)</span>
              <span className="flex-1 border-b border-dotted border-black ml-2"></span>
              {hasDirectorSig && directorSigUrl && (
                <img
                  src={directorSigUrl}
                  alt="Director Signature"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-16 object-contain pointer-events-none mix-blend-multiply"
                />
              )}
            </div>
            <div className="space-y-1">
              <div className="whitespace-nowrap">( {directorName} )</div>
              <div className="whitespace-nowrap">ผู้อำนวยการ{collegeName}</div>
            </div>
            <div className="mt-4 flex items-end justify-center">
              <span className="whitespace-nowrap">วันที่</span>
              <span className="w-10 border-b border-dotted border-black mx-1 text-center font-medium">{approvalDay}</span>
              <span className="whitespace-nowrap">เดือน</span>
              <span className="w-24 border-b border-dotted border-black mx-1 text-center font-medium">{approvalMonth}</span>
              <span className="whitespace-nowrap">พ.ศ.</span>
              <span className="w-12 border-b border-dotted border-black mx-1 text-center font-medium">{approvalYear}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
