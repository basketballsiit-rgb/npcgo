"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Check } from "lucide-react";

interface SignaturePadProps {
  onSave: (base64Data: string) => void;
  onClear?: () => void;
  height?: number;
}

export function SignaturePad({ onSave, onClear, height = 200 }: SignaturePadProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;
      }
    };

    // Delay initialization slightly to ensure element rect is fully calculated
    const timer = setTimeout(resizeCanvas, 100);

    // Prevent default touch behavior on canvas to stop page scrolling while drawing
    const preventDefault = (e: TouchEvent) => {
      if (e.target === canvas) {
        e.preventDefault();
      }
    };
    
    // Use passive: false to allow preventDefault
    canvas.addEventListener("touchstart", preventDefault, { passive: false });
    canvas.addEventListener("touchmove", preventDefault, { passive: false });

    return () => {
      clearTimeout(timer);
      canvas.removeEventListener("touchstart", preventDefault);
      canvas.removeEventListener("touchmove", preventDefault);
    };
  }, []);

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();

    if ("touches" in e) {
      if (e.touches.length === 0) return null;
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const coords = getCoordinates(e);
    if (!coords) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const coords = getCoordinates(e);
    if (!coords) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    if (onClear) onClear();
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !hasDrawn) return;

    // Retrieve drawing data as base64 png
    const base64Data = canvas.toDataURL("image/png");
    onSave(base64Data);
  };

  return (
    <div className="space-y-3 w-full">
      <div className="relative border-2 border-dashed border-slate-200 hover:border-primary/50 transition-colors rounded-xl bg-white overflow-hidden shadow-inner">
        <canvas
          ref={canvasRef}
          className="w-full cursor-crosshair touch-none"
          style={{ height: `${height}px` }}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
        {!hasDrawn && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-slate-400 text-sm font-light select-none">
            เซ็นลายเซ็นของคุณที่นี่ (ด้วยนิ้วมือ, ปากกา หรือเมาส์)
          </div>
        )}
      </div>

      <div className="flex gap-2 justify-end">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="text-slate-500 hover:text-slate-700 bg-slate-50 border-slate-200"
          onClick={clearCanvas}
        >
          <RotateCcw className="w-3.5 h-3.5 mr-1" />
          ล้างหน้าจอ
        </Button>
        <Button
          type="button"
          size="sm"
          className="bg-primary text-white hover:bg-primary/95"
          disabled={!hasDrawn}
          onClick={saveCanvas}
        >
          <Check className="w-3.5 h-3.5 mr-1" />
          ยืนยันลายเซ็น
        </Button>
      </div>
    </div>
  );
}
