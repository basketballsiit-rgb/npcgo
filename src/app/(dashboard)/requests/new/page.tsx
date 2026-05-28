"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitVehicleRequest, saveUserSignature } from "@/app/actions/requests";
import { getUserSignatureInfo } from "@/app/actions/approvals";
import { SignaturePad } from "@/components/ui/signature-pad";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { Check, UploadCloud, Signature, PenTool, Image, HelpCircle } from "lucide-react";
import Swal from "sweetalert2";

const requestSchema = z.object({
  purpose: z.string().min(1, "กรุณาระบุวัตถุประสงค์"),
  otherPurpose: z.string().optional(),
  province: z.string().min(1, "กรุณาระบุจังหวัดปลายทาง"),
  destination: z.string().min(1, "กรุณาระบุสถานที่ไป"),
  refOrderNumber: z.string().optional(),
  refOrderDate: z.string().optional(),
  startDateTime: z.string().min(1, "กรุณาระบุวันเวลาเดินทางไป"),
  endDateTime: z.string().min(1, "กรุณาระบุวันเวลาเดินทางกลับ"),
  passengerCount: z.number().min(1, "จำนวนผู้โดยสารต้องมากกว่า 0"),
  passengerNames: z.string().min(1, "กรุณาระบุรายชื่อผู้โดยสาร"),
  isRecurring: z.boolean(),
  recurrencePattern: z.string().optional(),
  recurrenceEndDate: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.isRecurring) {
    if (!data.recurrencePattern) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "กรุณาระบุรูปแบบการจองซ้ำ",
        path: ["recurrencePattern"],
      });
    }
    if (!data.recurrenceEndDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "กรุณาระบุวันที่สิ้นสุดการจอง",
        path: ["recurrenceEndDate"],
      });
    }
  }
});

type RequestFormValues = z.infer<typeof requestSchema>;

export default function RequestVehiclePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Signature States
  const [checkingSig, setCheckingSig] = useState(true);
  const [hasSavedSignature, setHasSavedSignature] = useState(false);
  const [signatureUrl, setSignatureUrl] = useState<string | null>(null);
  const [signatureMode, setSignatureMode] = useState<"saved" | "draw" | "upload">("draw");
  const [drawnSignatureData, setDrawnSignatureData] = useState<string | null>(null);
  const [uploadedSignatureData, setUploadedSignatureData] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RequestFormValues>({
    resolver: zodResolver(requestSchema),
    defaultValues: {
      passengerCount: 1,
      province: "น่าน",
      isRecurring: false,
    },
  });

  const watchedPurpose = watch("purpose");
  const watchedIsRecurring = watch("isRecurring");

  useEffect(() => {
    checkSignature();
  }, []);

  const checkSignature = async () => {
    try {
      setCheckingSig(true);
      const res = await getUserSignatureInfo();
      setHasSavedSignature(res.hasSignature);
      setSignatureUrl(res.signatureUrl);
      if (res.hasSignature) {
        setSignatureMode("saved");
      } else {
        setSignatureMode("draw");
      }
    } catch (err) {
      console.error("Error checking signature:", err);
      setHasSavedSignature(false);
      setSignatureMode("draw");
    } finally {
      setCheckingSig(false);
    }
  };

  const handleFreshSave = (base64Data: string) => {
    setDrawnSignatureData(base64Data);
  };

  const handleFreshClear = () => {
    setDrawnSignatureData(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      Swal.fire({
        title: "ไฟล์ไม่ถูกต้อง",
        text: "กรุณาแนบไฟล์รูปภาพเท่านั้น (.png, .jpg, .jpeg)",
        icon: "error"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setUploadedSignatureData(event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data: RequestFormValues) => {
    setIsSubmitting(true);

    // Check Signature Validity
    if (signatureMode === "saved" && !hasSavedSignature) {
      Swal.fire({
        title: "ไม่พบลายมือชื่อ",
        text: "คุณยังไม่มีลายมือชื่อประวัติในระบบ กรุณาเลือก 'เซ็นออนไลน์' หรือ 'แนบรูปภาพ' ก่อนส่งคำขอ",
        icon: "warning",
        confirmButtonText: "ตกลง"
      });
      setIsSubmitting(false);
      return;
    }

    if (signatureMode === "draw" && !drawnSignatureData) {
      Swal.fire({
        title: "กรุณาลงลายมือชื่อ",
        text: "กรุณาวาดลายมือชื่อของคุณและกด 'ยืนยันลายเซ็น' ก่อนส่งคำขอ",
        icon: "warning",
        confirmButtonText: "ตกลง"
      });
      setIsSubmitting(false);
      return;
    }

    if (signatureMode === "upload" && !uploadedSignatureData) {
      Swal.fire({
        title: "กรุณาแนบรูปภาพ",
        text: "กรุณาเลือกไฟล์ภาพลายมือชื่อของคุณก่อนส่งคำขอ",
        icon: "warning",
        confirmButtonText: "ตกลง"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Save signature first if in draw or upload mode
      if (signatureMode === "draw" && drawnSignatureData) {
        await saveUserSignature(drawnSignatureData);
      } else if (signatureMode === "upload" && uploadedSignatureData) {
        await saveUserSignature(uploadedSignatureData);
      }

      const formData = new FormData();
      
      // Override purpose if "อื่นๆ" is selected
      const finalPurpose = data.purpose === "อื่นๆ" && data.otherPurpose 
        ? `อื่นๆ: ${data.otherPurpose}` 
        : data.purpose;

      Object.entries(data).forEach(([key, value]) => {
        if (key === "purpose") {
          formData.append(key, finalPurpose);
        } else if (key === "isRecurring") {
          formData.append(key, value ? "true" : "false");
        } else if (key !== "otherPurpose") {
          formData.append(key, value !== undefined && value !== null ? value.toString() : "");
        }
      });

      const res = await submitVehicleRequest(formData);
      setIsSubmitting(false);

      if (res.success) {
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.error(res.errors);
        Swal.fire({
          title: "ข้อมูลไม่ครบถ้วน",
          text: "กรุณาตรวจสอบและกรอกข้อมูลที่จำเป็นให้ครบถ้วนก่อนส่งคำขอ",
          icon: "warning",
          confirmButtonText: "ตกลง"
        });
      }
    } catch (err: any) {
      console.error("Signature save error:", err);
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: err.message || "เกิดข้อผิดพลาดในการลงลายมือชื่อหรือส่งคำขอ",
        icon: "error"
      });
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto mt-10">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mb-4 text-3xl">✓</div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">ส่งคำขอสำเร็จ!</h2>
            <p className="text-green-700 mb-6">ระบบได้ส่งแจ้งเตือนไปยังผู้มีอำนาจอนุมัติเรียบร้อยแล้ว</p>
            <Button onClick={() => window.location.reload()} variant="outline">ส่งคำขอใหม่</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800">แบบฟอร์มขออนุญาตใช้รถ</h2>
        <p className="text-lg text-slate-500 mt-1">กรอกข้อมูลเพื่อขออนุญาตใช้รถราชการ</p>
      </div>

      <Card className="shadow-md border-slate-200">
        <CardHeader className="bg-slate-50 border-b border-slate-100 pb-6">
          <CardTitle className="text-2xl text-teal-800">แบบฟอร์มขออนุญาตใช้รถราชการ</CardTitle>
          <CardDescription className="text-base">วิทยาลัยสารพัดช่างน่าน</CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {/* Section 1: Trip Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 border-b-2 border-teal-100 pb-3">1. ข้อมูลการเดินทาง</h3>
              
              <div className="grid gap-6 sm:grid-cols-1">
                <div className="space-y-3">
                  <Label htmlFor="purpose" className="text-base font-semibold">วัตถุประสงค์ <span className="text-red-500">*</span></Label>
                  <Select value={watchedPurpose || ""} onValueChange={(val) => setValue("purpose", val || "")}>
                    <SelectTrigger className="w-full h-12 text-base">
                      <SelectValue placeholder="เลือกวัตถุประสงค์..." />
                    </SelectTrigger>
                    <SelectContent className="w-auto min-w-(--anchor-width) max-w-md">
                      <SelectItem value="ไปราชการ" className="text-base">ไปราชการ</SelectItem>
                      <SelectItem value="รับ-ส่งเอกสาร" className="text-base">รับ-ส่งเอกสาร</SelectItem>
                      <SelectItem value="พาหนะนักศึกษา" className="text-base">พาหนะนักศึกษา (ทัศนศึกษา/ดูงาน)</SelectItem>
                      <SelectItem value="อื่นๆ" className="text-base">อื่นๆ</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.purpose && <p className="text-sm text-red-500">{errors.purpose.message}</p>}
                  
                  {watchedPurpose === "อื่นๆ" && (
                    <div className="mt-3 animate-in fade-in slide-in-from-top-2">
                      <Input 
                        id="otherPurpose" 
                        {...register("otherPurpose")} 
                        placeholder="โปรดระบุวัตถุประสงค์..." 
                        className="h-12 text-base border-teal-300 focus-visible:ring-teal-500"
                        autoFocus
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">

                <div className="space-y-3">
                  <Label htmlFor="province" className="text-base font-semibold">จังหวัดปลายทาง <span className="text-red-500">*</span></Label>
                  <Input id="province" {...register("province")} placeholder="เช่น น่าน, เชียงใหม่..." className="h-12 text-base" />
                  {errors.province && <p className="text-sm text-red-500">{errors.province.message}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="destination" className="text-base font-semibold">สถานที่ไป (ปลายทาง) <span className="text-red-500">*</span></Label>
                  <Input id="destination" {...register("destination")} placeholder="เช่น วิทยาลัยเทคนิค..." className="h-12 text-base" />
                  {errors.destination && <p className="text-sm text-red-500">{errors.destination.message}</p>}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="refOrderNumber" className="text-base font-semibold">ตามคำสั่ง/หนังสือราชการที่ (ถ้ามี)</Label>
                  <Input id="refOrderNumber" {...register("refOrderNumber")} placeholder="ระบุเลขที่หนังสือ" className="h-12 text-base" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="refOrderDate" className="text-base font-semibold">ลงวันที่ (ถ้ามี)</Label>
                  <Input id="refOrderDate" type="date" {...register("refOrderDate")} className="h-12 text-base" />
                </div>
              </div>
            </div>

            {/* Section 2: Schedule */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 border-b-2 border-teal-100 pb-3">2. วันและเวลาเดินทาง</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-3">
                  <Label htmlFor="startDateTime" className="text-base font-semibold">เดินทางไป (วัน-เวลา) <span className="text-red-500">*</span></Label>
                  <Input id="startDateTime" type="datetime-local" {...register("startDateTime")} className="h-12 text-base" />
                  {errors.startDateTime && <p className="text-sm text-red-500">{errors.startDateTime.message}</p>}
                </div>
                <div className="space-y-3">
                  <Label htmlFor="endDateTime" className="text-base font-semibold">เดินทางกลับ (วัน-เวลา) <span className="text-red-500">*</span></Label>
                  <Input id="endDateTime" type="datetime-local" {...register("endDateTime")} className="h-12 text-base" />
                  {errors.endDateTime && <p className="text-sm text-red-500">{errors.endDateTime.message}</p>}
                </div>
              </div>

              {/* ตัวเลือกการจองแบบประจำ (จองซ้ำ) */}
              <div className="mt-6 p-5 rounded-xl border border-teal-100 bg-teal-50/30 space-y-5">
                <div className="flex items-start space-x-3">
                  <input
                    id="isRecurring"
                    type="checkbox"
                    {...register("isRecurring")}
                    className="h-5 w-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500 mt-1 cursor-pointer"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="isRecurring" className="text-base font-bold text-slate-800 cursor-pointer">
                      จองรถเป็นประจำ (สร้างรายการจองซ้ำต่อเนื่อง)
                    </Label>
                    <p className="text-sm text-slate-500">
                      เลือกเมื่อต้องการจองรถสำหรับตารางสอนหรือตารางออกปฏิบัติงานรายวัน/รายสัปดาห์
                    </p>
                  </div>
                </div>

                {watchedIsRecurring && (
                  <div className="grid gap-6 sm:grid-cols-2 p-4 bg-white rounded-lg border border-teal-100 shadow-sm animate-in fade-in slide-in-from-top-2">
                    <div className="space-y-3">
                      <Label htmlFor="recurrencePattern" className="text-base font-semibold">รูปแบบการจองซ้ำ <span className="text-red-500">*</span></Label>
                      <Select 
                        value={watch("recurrencePattern") || ""} 
                        onValueChange={(val) => setValue("recurrencePattern", val ?? undefined)}
                      >
                        <SelectTrigger className="w-full h-12 text-base border-teal-200">
                          <SelectValue placeholder="เลือกรูปแบบ...">
                            {watch("recurrencePattern") === "DAILY" && "ทุกวัน (รวมเสาร์-อาทิตย์)"}
                            {watch("recurrencePattern") === "WEEKDAYS" && "เฉพาะวันทำงาน (จันทร์ - ศุกร์)"}
                            {watch("recurrencePattern") === "WEEKLY" && "ทุกสัปดาห์ (เฉพาะวันเดียวกันกับวันเดินทางไป)"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent className="w-auto min-w-(--anchor-width) max-w-md">
                          <SelectItem value="DAILY" className="text-base">ทุกวัน (รวมเสาร์-อาทิตย์)</SelectItem>
                          <SelectItem value="WEEKDAYS" className="text-base">เฉพาะวันทำงาน (จันทร์ - ศุกร์)</SelectItem>
                          <SelectItem value="WEEKLY" className="text-base">ทุกสัปดาห์ (เฉพาะวันเดียวกันกับวันเดินทางไป)</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.recurrencePattern && <p className="text-sm text-red-500">{errors.recurrencePattern.message}</p>}
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="recurrenceEndDate" className="text-base font-semibold">สิ้นสุดการจอง ณ วันที่ <span className="text-red-500">*</span></Label>
                      <Input 
                        id="recurrenceEndDate" 
                        type="date" 
                        {...register("recurrenceEndDate")} 
                        className="h-12 text-base border-teal-200" 
                      />
                      {errors.recurrenceEndDate && <p className="text-sm text-red-500">{errors.recurrenceEndDate.message}</p>}
                    </div>

                    {/* Premium Instruction Box */}
                    <div className="sm:col-span-2 p-4 bg-teal-50/40 border border-teal-100 rounded-xl flex gap-3 text-sm text-teal-900 animate-in fade-in duration-300">
                      <HelpCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-bold text-teal-800">💡 คำแนะนำ: วิธีการจอง "ทุกสัปดาห์ ในวันเดียวกัน" (เช่น ทุกวันพุธ ทั้งเดือน)</p>
                        <div className="text-slate-600 text-xs space-y-1.5 leading-relaxed">
                          <p>หากคุณต้องการจองรถยนต์เป็นประจำทุกวันพุธ ต่อเนื่องกัน 1 เดือนเต็ม สามารถทำได้ง่าย ๆ ดังนี้:</p>
                          <ol className="list-decimal pl-4 space-y-1 font-medium text-slate-700">
                            <li>ระบุ <strong className="text-teal-700">"วันที่เดินทางไป" (ด้านบน)</strong> เป็นวันพุธแรกของภารกิจ</li>
                            <li>ติ๊กถูกที่ช่อง <strong className="text-teal-700">"จองรถเป็นประจำ (สร้างรายการจองซ้ำต่อเนื่อง)"</strong></li>
                            <li>เลือกรูปแบบเป็น <strong className="text-teal-700">"ทุกสัปดาห์ (เฉพาะวันเดียวกันกับวันเดินทางไป)"</strong></li>
                            <li>ระบุ <strong className="text-teal-700">"สิ้นสุดการจอง ณ วันที่"</strong> เป็นวันพุธสุดท้ายของเดือน</li>
                          </ol>
                          <p className="text-[11px] text-teal-600/80 mt-1 font-light italic">* ระบบจะคำนวณและสร้างใบขอจองใช้รถแยกแต่ละสัปดาห์ให้โดยอัตโนมัติ เพื่อให้ง่ายต่อการจัดสรรคิวรถและการยกเลิกบางรายการในภายหลัง</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Section 3: Passengers */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 border-b-2 border-teal-100 pb-3">3. ผู้โดยสาร</h3>
              <div className="grid gap-6">
                <div className="space-y-3 w-full sm:w-1/2">
                  <Label htmlFor="passengerCount" className="text-base font-semibold">จำนวนผู้โดยสาร (รวมผู้ขอ) <span className="text-red-500">*</span></Label>
                  <Input id="passengerCount" type="number" min={1} {...register("passengerCount", { valueAsNumber: true })} className="h-12 text-base" />
                  {errors.passengerCount && <p className="text-sm text-red-500">{errors.passengerCount.message}</p>}
                </div>
                <div className="space-y-3">
                  <Label htmlFor="passengerNames" className="text-base font-semibold">รายชื่อผู้โดยสารทั้งหมด <span className="text-red-500">*</span></Label>
                  <Textarea id="passengerNames" {...register("passengerNames")} placeholder="นาย ก., นาง ข., ..." rows={4} className="text-base resize-none" />
                  {errors.passengerNames && <p className="text-sm text-red-500">{errors.passengerNames.message}</p>}
                </div>
              </div>
            </div>

            {/* Section 4: Signature */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 border-b-2 border-teal-100 pb-3">
                4. ลงลายมือชื่อผู้ขออนุญาต <span className="text-red-500">*</span>
              </h3>
              
              {checkingSig ? (
                <div className="flex flex-col items-center justify-center py-8 space-y-2">
                  <div className="w-6 h-6 border-2 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-xs text-slate-400">กำลังโหลดข้อมูลลายเซ็นประจำตัว...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <Tabs value={signatureMode} onValueChange={(val) => setSignatureMode(val as any)} className="w-full">
                    <TabsList className="flex flex-wrap gap-3 bg-transparent p-0 w-full mb-6">
                      {hasSavedSignature && (
                        <TabsTrigger 
                          value="saved" 
                          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                                     data-active:bg-gradient-to-br data-active:from-emerald-400 data-active:to-emerald-600 data-active:text-white data-active:shadow-lg data-active:shadow-emerald-100/50 data-active:scale-[1.03] data-active:border-transparent
                                     data-[active]:bg-gradient-to-br data-[active]:from-emerald-400 data-[active]:to-emerald-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-emerald-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
                        >
                          <Signature className="w-4.5 h-4.5" />
                          <span>ใช้ลายเซ็นประวัติ</span>
                        </TabsTrigger>
                      )}
                      <TabsTrigger 
                        value="draw" 
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                                   data-active:bg-gradient-to-br data-active:from-teal-400 data-active:to-teal-600 data-active:text-white data-active:shadow-lg data-active:shadow-teal-100/50 data-active:scale-[1.03] data-active:border-transparent
                                   data-[active]:bg-gradient-to-br data-[active]:from-teal-400 data-[active]:to-teal-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-teal-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
                      >
                        <PenTool className="w-4.5 h-4.5" />
                        <span>เซ็นออนไลน์สดๆ</span>
                      </TabsTrigger>
                      <TabsTrigger 
                        value="upload" 
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                                   data-active:bg-gradient-to-br data-active:from-indigo-400 data-active:to-indigo-600 data-active:text-white data-active:shadow-lg data-active:shadow-indigo-100/50 data-active:scale-[1.03] data-active:border-transparent
                                   data-[active]:bg-gradient-to-br data-[active]:from-indigo-400 data-[active]:to-indigo-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-indigo-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
                      >
                        <UploadCloud className="w-4.5 h-4.5" />
                        <span>แนบรูปภาพลายเซ็น</span>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="saved" className="pt-4 space-y-3 animate-in fade-in duration-200">
                      <div className="relative border border-slate-200 rounded-2xl p-6 bg-slate-50 flex flex-col items-center justify-center min-h-[160px]">
                        <div className="absolute top-2 left-2 text-[10px] uppercase font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
                          ลายเซ็นในโปรไฟล์ของคุณ
                        </div>
                        {signatureUrl && (
                          <div className="relative w-64 h-32 flex items-center justify-center bg-white border border-slate-200 shadow-inner rounded-xl p-2">
                            <img
                              src={signatureUrl}
                              alt="ลายเซ็นประจำตัว"
                              className="max-h-full max-w-full object-contain filter drop-shadow"
                            />
                          </div>
                        )}
                        <p className="text-xs text-slate-400 mt-3 text-center">
                          ระบบจะนำลายเซ็นในโปรไฟล์ของคุณด้านบน ลงชื่อในช่องผู้ขออนุญาตโดยอัตโนมัติ
                        </p>
                      </div>
                    </TabsContent>

                    <TabsContent value="draw" className="pt-4 space-y-3 animate-in fade-in duration-200">
                      <SignaturePad onSave={handleFreshSave} onClear={handleFreshClear} height={160} />
                      {drawnSignatureData && (
                        <div className="flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                          <span>ยืนยันลายเซ็นเรียบร้อย ลายเซ็นนี้จะถูกบันทึกเป็นลายเซ็นประจำตัวของคุณด้วย</span>
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="upload" className="pt-4 space-y-3 animate-in fade-in duration-200">
                      <div className="space-y-4">
                        <Label
                          htmlFor="sig-upload"
                          className="relative flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-teal-500 rounded-2xl p-6 cursor-pointer bg-slate-50 hover:bg-teal-50/20 transition-all text-center min-h-[160px] group"
                        >
                          <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                            <div className="p-3 bg-white border border-slate-200 shadow-sm rounded-xl text-slate-400 group-hover:text-teal-500 transition-colors">
                              <UploadCloud className="w-6 h-6" />
                            </div>
                            <div className="text-sm font-semibold text-slate-600">แนบไฟล์รูปภาพลายเซ็น</div>
                            <div className="text-xs text-slate-400">รองรับไฟล์ .png, .jpg, .jpeg (ควรเป็นรูปภาพลายเซ็นพื้นหลังสีขาวหรือโปร่งแสง)</div>
                          </div>
                          <input
                            id="sig-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                        </Label>

                        {uploadedSignatureData && (
                          <div className="flex flex-col items-center justify-center border border-emerald-200 bg-emerald-50/20 rounded-2xl p-4 space-y-2">
                            <div className="text-xs uppercase font-bold text-emerald-700">รูปภาพลายเซ็นที่อัปโหลด:</div>
                            <div className="relative w-64 h-32 flex items-center justify-center bg-white border border-slate-200 shadow-inner rounded-xl p-2">
                              <img
                                src={uploadedSignatureData}
                                alt="ลายเซ็นแนบ"
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                            <div className="flex items-center gap-1 text-xs text-emerald-600">
                              <Check className="w-3.5 h-3.5" />
                              <span>อัปโหลดเรียบร้อย ลายเซ็นนี้จะถูกบันทึกเป็นลายเซ็นประจำตัวของคุณ</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
            </div>

            <div className="pt-6 flex justify-end gap-4 border-t border-slate-100">
              <Button type="button" variant="outline" onClick={() => window.history.back()} className="h-12 px-6 text-base">ยกเลิก</Button>
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700 h-12 px-8 text-base shadow-lg shadow-teal-500/30" disabled={isSubmitting}>
                {isSubmitting ? "กำลังส่งคำขอ..." : "ส่งคำขออนุญาต"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
