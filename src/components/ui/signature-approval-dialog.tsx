"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SignaturePad } from "./signature-pad";
import { getUserSignatureInfo } from "@/app/actions/approvals";
import { Check, ShieldAlert, Sparkles, X, Signature, PenTool } from "lucide-react";
import Image from "next/image";

interface SignatureApprovalDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (signatureOption: "saved" | "fresh", freshBase64Data?: string) => Promise<void>;
  title?: string;
  description?: string;
  actionLabel?: string;
}

export function SignatureApprovalDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "ลงชื่อพิจารณาอนุมัติ",
  description = "กรุณาเลือกลายเซ็นของคุณเพื่อลงนามในเอกสารขออนุญาตใช้รถยนต์",
  actionLabel = "ยืนยันการอนุมัติและลงนาม",
}: SignatureApprovalDialogProps) {
  const [loading, setLoading] = useState(false);
  const [checkingSig, setCheckingSig] = useState(true);
  const [hasSavedSignature, setHasSavedSignature] = useState(false);
  const [signatureUrl, setSignatureUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("saved");
  const [freshSignatureData, setFreshSignatureData] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      checkSignature();
    } else {
      // Reset state on close
      setFreshSignatureData(null);
    }
  }, [isOpen]);

  const checkSignature = async () => {
    try {
      setCheckingSig(true);
      const res = await getUserSignatureInfo();
      setHasSavedSignature(res.hasSignature);
      setSignatureUrl(res.signatureUrl);
      if (res.hasSignature) {
        setActiveTab("saved");
      } else {
        setActiveTab("fresh");
      }
    } catch (err) {
      console.error("Error checking signature:", err);
      setHasSavedSignature(false);
      setActiveTab("fresh");
    } finally {
      setCheckingSig(false);
    }
  };

  const handleFreshSave = (base64Data: string) => {
    setFreshSignatureData(base64Data);
  };

  const handleFreshClear = () => {
    setFreshSignatureData(null);
  };

  const handleConfirm = async () => {
    setLoading(true);
    try {
      if (activeTab === "saved") {
        await onConfirm("saved");
      } else {
        if (!freshSignatureData) {
          alert("กรุณาเซ็นและกด 'ยืนยันลายเซ็น' ก่อนดำเนินการต่อ");
          setLoading(false);
          return;
        }
        await onConfirm("fresh", freshSignatureData);
      }
      onClose();
    } catch (err: any) {
      alert(err.message || "เกิดข้อผิดพลาดในการลงลายมือชื่อ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md p-6 overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-2xl">
        <DialogHeader className="space-y-2 pb-4 border-b border-slate-50">
          <DialogTitle className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-teal-50 text-teal-600">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            {title}
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-500 font-light">
            {description}
          </DialogDescription>
        </DialogHeader>

        {checkingSig ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-3">
            <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs text-slate-400 font-light">กำลังตรวจสอบข้อมูลลายเซ็น...</p>
          </div>
        ) : (
          <div className="py-4">
            {hasSavedSignature ? (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="flex gap-3 bg-transparent p-0 w-full mb-5">
                  <TabsTrigger 
                    value="saved" 
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                               data-active:bg-gradient-to-br data-active:from-emerald-400 data-active:to-emerald-600 data-active:text-white data-active:shadow-lg data-active:shadow-emerald-100/50 data-active:scale-[1.03] data-active:border-transparent
                               data-[active]:bg-gradient-to-br data-[active]:from-emerald-400 data-[active]:to-emerald-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-emerald-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
                  >
                    <Signature className="w-4 h-4" />
                    <span>ใช้ลายเซ็นประวัติ</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="fresh" 
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-300 border border-slate-200/60 shadow-sm bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900
                               data-active:bg-gradient-to-br data-active:from-teal-400 data-active:to-teal-600 data-active:text-white data-active:shadow-lg data-active:shadow-teal-100/50 data-active:scale-[1.03] data-active:border-transparent
                               data-[active]:bg-gradient-to-br data-[active]:from-teal-400 data-[active]:to-teal-600 data-[active]:text-white data-[active]:shadow-lg data-[active]:shadow-teal-100/50 data-[active]:scale-[1.03] data-[active]:border-transparent"
                  >
                    <PenTool className="w-4 h-4" />
                    <span>เซ็นใหม่สดๆ</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="saved" className="space-y-4">
                  <div className="relative border-2 border-slate-100 rounded-2xl p-6 bg-slate-50/50 flex flex-col items-center justify-center overflow-hidden min-h-[180px]">
                    <div className="absolute top-2 left-2 text-[10px] uppercase font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                      ลายเซ็นโปรไฟล์ของคุณ
                    </div>
                    {signatureUrl ? (
                      <div className="relative w-64 h-32 flex items-center justify-center bg-white border border-slate-200/50 shadow-inner rounded-xl p-2">
                        <img
                          src={signatureUrl}
                          alt="ลายเซ็นสำหรับใช้งาน"
                          className="max-h-full max-w-full object-contain filter drop-shadow-md"
                        />
                      </div>
                    ) : (
                      <p className="text-sm text-red-500 font-light">พบข้อผิดพลาดในการโหลดรูปภาพ</p>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="fresh" className="space-y-4">
                  <SignaturePad onSave={handleFreshSave} onClear={handleFreshClear} height={180} />
                  {freshSignatureData && (
                    <div className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 p-2.5 rounded-xl border border-green-100/50">
                      <Check className="w-4 h-4 shrink-0" />
                      <span>บันทึกแบบลายเซ็นใหม่เรียบร้อย พร้อมลงชื่อในทันที</span>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-3 text-amber-700 bg-amber-50 rounded-xl border border-amber-100 text-xs">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>
                    ไม่พบรูปภาพลายเซ็นประจำตัวในฐานข้อมูล กรุณาวาดลายเซ็นสดบนหน้าจอด้านล่างเพื่อทำรายการ
                  </span>
                </div>
                <SignaturePad onSave={handleFreshSave} onClear={handleFreshClear} height={180} />
                {freshSignatureData && (
                  <div className="flex items-center gap-1.5 text-xs text-green-600 bg-green-50 p-2.5 rounded-xl border border-green-100/50">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>บันทึกแบบลายเซ็นใหม่เรียบร้อย พร้อมลงชื่อในทันที</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2 pt-4 border-t border-slate-50">
          <Button
            type="button"
            variant="outline"
            className="w-full sm:w-auto text-slate-500 border-slate-200"
            onClick={onClose}
            disabled={loading}
          >
            <X className="w-4 h-4 mr-1.5" />
            ยกเลิก
          </Button>
          <Button
            type="button"
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white transition-all shadow-md hover:shadow-teal-100"
            onClick={handleConfirm}
            disabled={
              loading ||
              checkingSig ||
              (activeTab === "fresh" && !freshSignatureData)
            }
          >
            {loading ? (
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>กำลังทำรายการ...</span>
              </div>
            ) : (
              <>
                <Check className="w-4 h-4 mr-1.5" />
                {actionLabel}
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
