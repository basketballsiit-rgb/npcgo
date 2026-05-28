"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPrintData } from "@/app/actions/print";
import { getSettings } from "@/app/actions/settings";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

type PrintDataType = NonNullable<Awaited<ReturnType<typeof getPrintData>>>;
type SettingsType = Awaited<ReturnType<typeof getSettings>>;

export default function PrintPage() {
  const { requestId } = useParams();
  const [data, setData] = useState<PrintDataType | null>(null);
  const [settings, setSettings] = useState<SettingsType | null>(null);

  useEffect(() => {
    if (requestId) {
      getPrintData(Number(requestId)).then(setData);
      getSettings().then(setSettings);
    }
  }, [requestId]);

  if (!data || !settings) return <div className="p-8 text-center">กำลังโหลดข้อมูลเอกสาร...</div>;

  const collegeName = settings.college_name || "วิทยาลัยนวัตกรรมวิชาชีพ มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน";
  const directorName = settings.director_name || "(.........................................................)";

  return (
    <div className="bg-gray-100 min-h-screen py-8 print:bg-white print:py-0">
      <div className="max-w-4xl mx-auto mb-4 print:hidden flex justify-end">
        <Button onClick={() => window.print()} className="bg-primary shadow-md">
          <Printer className="mr-2 h-4 w-4" /> พิมพ์เอกสาร
        </Button>
      </div>

      <div className="max-w-[21cm] min-h-[29.7cm] bg-white mx-auto shadow-lg print:shadow-none p-12 text-black font-serif print:p-0">
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold">บันทึกข้อความ</h1>
          <div className="text-center font-bold text-xl mb-6">
            แบบฟอร์มขออนุญาตใช้รถราชการ<br />
            {collegeName}
          </div>
        </div>

        <div className="space-y-6 leading-relaxed text-base">
          <div className="flex justify-between">
            <div><strong>ส่วนราชการ:</strong> แผนก {data.departmentName}</div>
            <div><strong>วันที่:</strong> {format(new Date(data.createdAt), "dd MMMM yyyy", { locale: th })}</div>
          </div>

          <div><strong>เรื่อง:</strong> ขออนุญาตใช้รถราชการ</div>

          <p className="indent-10">
            ด้วย ข้าพเจ้า <strong>{data.requesterName}</strong> มีความประสงค์ขออนุญาตใช้รถราชการ
            เพื่อ <strong>{data.purpose}</strong> ณ <strong>{data.destination}</strong>
          </p>

          <p className="indent-10">
            โดยมีผู้โดยสารร่วมเดินทางจำนวน <strong>{data.passengerCount}</strong> คน ดังรายชื่อต่อไปนี้:<br/>
            {data.passengerNames.split(",").map((name, i) => (
              <span key={i} className="ml-10 block">- {name.trim()}</span>
            ))}
          </p>

          <p className="indent-10">
            กำหนดการเดินทางไปในวันที่ <strong>{format(new Date(data.startDateTime), "dd MMMM yyyy เวลา HH:mm น.", { locale: th })}</strong> 
            และเดินทางกลับในวันที่ <strong>{format(new Date(data.endDateTime), "dd MMMM yyyy เวลา HH:mm น.", { locale: th })}</strong>
          </p>

          {data.car && data.driver && (
            <div className="mt-8 p-4 border border-dashed border-gray-400 bg-gray-50 print:bg-transparent print:border-solid">
              <h3 className="font-bold underline mb-2">ข้อมูลรถและพนักงานขับรถ (สำหรับงานยานพาหนะ)</h3>
              <p>รถที่จัดสรร: <strong>{data.car.licensePlate}</strong> ({data.car.carType})</p>
              <p>พนักงานขับรถ: <strong>{data.driver.driverName}</strong> (โทร: {data.driver.phone || "-"})</p>
            </div>
          )}

          <div className="mt-16 flex justify-between">
            <div className="text-center">
              <div className="mb-16">(ลงชื่อ).................................................ผู้ขออนุญาต</div>
              <div>( {data.requesterName} )</div>
              <div>ตำแหน่ง .................................................</div>
            </div>

            <div className="text-center">
              <div className="mt-6 mb-2">ลงชื่อ .................................................... ผู้อนุมัติ</div>
              <div>{directorName}</div>
              <div>ผู้อำนวยการ{collegeName}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
