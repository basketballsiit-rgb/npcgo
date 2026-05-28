"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CameraIcon, RefreshCwIcon, CheckCircle2Icon, AlertCircleIcon, Loader2Icon, GaugeIcon } from "lucide-react";
import { analyzeOdometerWithGemini } from "@/app/actions/queue";

interface OdometerScannerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  requestId: number;
  type: "departure" | "arrival";
  onSuccess: () => void;
  onSubmitAction: (requestId: number, odometer: number, base64Photo?: string) => Promise<{ success: boolean; error?: string }>;
  vehiclePlate?: string;
  previousOdometer?: number; // For arrival, we can show previous (start) odometer
}

export function OdometerScannerDialog({
  isOpen,
  onClose,
  requestId,
  type,
  onSuccess,
  onSubmitAction,
  vehiclePlate,
  previousOdometer,
}: OdometerScannerDialogProps) {
  const [photo, setPhoto] = React.useState<string | null>(null);
  const [odometer, setOdometer] = React.useState<string>("");
  const [isScanning, setIsScanning] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [aiResult, setAiResult] = React.useState<{
    success: boolean;
    odometer: number | null;
    confidence: number;
    reason: string;
  } | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  // Reset state when modal is opened/closed
  React.useEffect(() => {
    if (isOpen) {
      setPhoto(null);
      setOdometer("");
      setAiResult(null);
      setError(null);
    }
  }, [isOpen]);

  const handlePhotoCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64 = event.target?.result as string;
      setPhoto(base64);
      
      // Trigger AI OCR Scan immediately after photo selection
      await runAiOdometerScan(base64);
    };
    reader.onerror = () => {
      setError("เกิดข้อผิดพลาดในการโหลดไฟล์รูปภาพ");
    };
    reader.readAsDataURL(file);
  };

  const runAiOdometerScan = async (base64Image: string) => {
    setIsScanning(true);
    setAiResult(null);
    try {
      const res = await analyzeOdometerWithGemini(base64Image);
      if (res.success && res.odometer !== undefined) {
        setAiResult({
          success: true,
          odometer: res.odometer,
          confidence: res.confidence || 0,
          reason: res.reason || "วิเคราะห์ข้อมูลสำเร็จ",
        });
        if (res.odometer !== null) {
          setOdometer(res.odometer.toString());
        }
      } else {
        setAiResult({
          success: false,
          odometer: null,
          confidence: 0,
          reason: res.error || "AI ไม่สามารถอ่านตัวเลขบนแผงหน้าปัดได้",
        });
      }
    } catch (err: any) {
      setAiResult({
        success: false,
        odometer: null,
        confidence: 0,
        reason: err.message || "เกิดข้อผิดพลาดในการติดต่อกับ AI",
      });
    } finally {
      setIsScanning(false);
    }
  };

  const handleSubmit = async () => {
    const odoNum = parseInt(odometer);
    if (isNaN(odoNum) || odoNum <= 0) {
      setError("กรุณากรอกตัวเลขสะสมที่ถูกต้อง (ต้องมากกว่า 0)");
      return;
    }

    if (previousOdometer && odoNum < previousOdometer) {
      setError(`เลขไมล์ปัจจุบัน (${odoNum}) จะต้องไม่น้อยกว่าเลขไมล์เริ่มต้น (${previousOdometer})`);
      return;
    }

    setIsSubmitting(true);
    setError(null);
    try {
      const res = await onSubmitAction(requestId, odoNum, photo || undefined);
      if (res.success) {
        onSuccess();
        onClose();
      } else {
        setError(res.error || "บันทึกข้อมูลล้มเหลว");
      }
    } catch (err: any) {
      setError(err.message || "เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-background border border-border rounded-2xl shadow-2xl p-6 overflow-hidden">
        <DialogHeader className="mb-4">
          <DialogTitle className="flex items-center gap-2 text-xl font-bold font-heading text-primary">
            <GaugeIcon className="w-6 h-6 text-green-500" />
            {type === "departure" ? "บันทึกเลขไมล์ออกเดินทาง" : "บันทึกเลขไมล์เดินทางกลับ"}
          </DialogTitle>
          {vehiclePlate && (
            <p className="text-sm text-muted-foreground mt-1">
              ยานพาหนะทะเบียน: <span className="font-semibold text-foreground bg-secondary px-2 py-0.5 rounded-md">{vehiclePlate}</span>
            </p>
          )}
        </DialogHeader>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scan-laser {
            0% { top: 0%; opacity: 0.3; }
            50% { top: 100%; opacity: 1; }
            100% { top: 0%; opacity: 0.3; }
          }
          .animate-scan-laser {
            animation: scan-laser 2s infinite linear;
          }
        `}} />

        <div className="space-y-5">
          {/* Photo Section */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold text-foreground">
              ถ่ายภาพ/อัปโหลดภาพเลขไมล์หน้ารถ <span className="text-red-500">*</span>
            </Label>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              capture="environment"
              onChange={handlePhotoCapture}
              className="hidden"
            />

            {!photo ? (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-48 border-2 border-dashed border-border hover:border-green-500/50 rounded-xl flex flex-col items-center justify-center gap-3 bg-muted/30 hover:bg-green-500/5 transition-all group duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform duration-300">
                  <CameraIcon className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground text-sm">แตะเพื่อถ่ายรูปหรือเลือกไฟล์</p>
                  <p className="text-xs text-muted-foreground mt-1">แนะนำให้ภาพชัดและเห็นตัวเลข Odometer</p>
                </div>
              </button>
            ) : (
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-black border border-border group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo}
                  alt="Odometer Evidence"
                  className="w-full h-full object-contain"
                />

                {/* Laser Scanning Overlay UI */}
                {isScanning && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col items-center justify-center">
                    {/* Glowing scanning line */}
                    <div className="absolute left-0 right-0 h-1 bg-green-500 shadow-[0_0_15px_#22c55e] animate-scan-laser top-0" />
                    
                    <div className="flex flex-col items-center gap-2 bg-black/60 px-4 py-3 rounded-xl border border-green-500/20 backdrop-blur-md">
                      <Loader2Icon className="w-6 h-6 text-green-400 animate-spin" />
                      <p className="text-xs font-semibold text-green-400 animate-pulse">🤖 กำลังสแกนด้วย Gemini AI...</p>
                    </div>
                  </div>
                )}

                {/* Photo hover re-capture controls */}
                {!isScanning && (
                  <div className="absolute bottom-2 right-2 flex gap-1">
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      className="bg-black/60 hover:bg-black/80 text-white border-0 gap-1 text-xs"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <RefreshCwIcon className="w-3.5 h-3.5" />
                      ถ่ายใหม่
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Previous mileage helper (for return) */}
          {previousOdometer !== undefined && (
            <div className="bg-secondary/40 p-3 rounded-xl border border-border text-xs flex justify-between items-center text-muted-foreground">
              <span>เลขไมล์เริ่มต้นเดินทาง:</span>
              <span className="font-semibold text-foreground text-sm">{previousOdometer.toLocaleString()} กม.</span>
            </div>
          )}

          {/* AI Feedback Status Badge */}
          {aiResult && !isScanning && (
            <div className={`p-3 rounded-xl border flex gap-2.5 text-xs items-start ${
              aiResult.success && aiResult.odometer !== null
                ? "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400"
                : "bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-400"
            }`}>
              {aiResult.success && aiResult.odometer !== null ? (
                <>
                  <CheckCircle2Icon className="w-4.5 h-4.5 shrink-0 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-bold flex items-center gap-1.5">
                      <span>🤖 AI ตรวจสแกนสำเร็จ: {aiResult.odometer.toLocaleString()} กม.</span>
                      <span className="text-[10px] bg-green-500/20 text-green-700 dark:text-green-300 px-1.5 py-0.5 rounded-full font-normal">
                        มั่นใจ {aiResult.confidence}%
                      </span>
                    </p>
                    <p className="mt-0.5 text-muted-foreground">{aiResult.reason}</p>
                  </div>
                </>
              ) : (
                <>
                  <AlertCircleIcon className="w-4.5 h-4.5 shrink-0 text-amber-500 mt-0.5" />
                  <div>
                    <p className="font-bold">⚠️ สแกนด้วย AI ไม่สำเร็จ</p>
                    <p className="mt-0.5 text-muted-foreground">
                      {aiResult.reason} (กรุณากรอกตัวเลขไมล์ด้วยตนเองด้านล่าง)
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Odometer Manual Input */}
          <div className="space-y-1.5">
            <Label htmlFor="odometer-input" className="text-sm font-semibold text-foreground">
              เลขไมล์จริงในปัจจุบัน (กิโลเมตร) <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="odometer-input"
                type="number"
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="ระบุตัวเลขไมล์สะสม..."
                value={odometer}
                onChange={(e) => setOdometer(e.target.value)}
                className="pl-10 text-lg font-mono font-bold border-border focus:border-green-500 focus:ring-green-500"
              />
              <GaugeIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground" />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground">กม.</span>
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-xs flex gap-2 items-center">
              <AlertCircleIcon className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <DialogFooter className="mt-6 border-t pt-4">
          <div className="flex gap-2 w-full">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1"
            >
              ยกเลิก
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || !photo || !odometer}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold"
            >
              {isSubmitting ? (
                <>
                  <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
                  กำลังบันทึก...
                </>
              ) : (
                "ยืนยันบันทึก"
              )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
