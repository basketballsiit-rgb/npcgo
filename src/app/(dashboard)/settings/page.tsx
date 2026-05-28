"use client";

import { useEffect, useState } from "react";
import { getSettings, updateSettings } from "@/app/actions/settings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Save } from "lucide-react";
import Swal from "sweetalert2";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<Record<string, string>>({});

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    setLoading(true);
    const data = await getSettings();
    setSettings(data);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    const formData = new FormData(e.currentTarget);
    try {
      await updateSettings(formData);
      Swal.fire({
        title: "สำเร็จ",
        text: "บันทึกการตั้งค่าเรียบร้อยแล้ว",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    } catch (err) {
      Swal.fire({
        title: "ผิดพลาด",
        text: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
        icon: "error"
      });
    }
    setSaving(false);
  };

  if (loading) return <div>กำลังโหลดการตั้งค่า...</div>;

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">ตั้งค่าระบบ (Settings)</h2>
        <p className="text-muted-foreground">ปรับแต่งข้อมูลพื้นฐานของวิทยาลัยและการแจ้งเตือน</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* ข้อมูลวิทยาลัย */}
        <Card>
          <CardHeader>
            <CardTitle>ข้อมูลพื้นฐาน (General)</CardTitle>
            <CardDescription>ข้อมูลที่จะนำไปแสดงในใบพิมพ์ขออนุญาตใช้รถ</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="college_name">ชื่อหน่วยงาน / วิทยาลัย</Label>
              <Input 
                id="college_name" 
                name="college_name" 
                defaultValue={settings.college_name || ""} 
                placeholder="เช่น วิทยาลัยนวัตกรรมวิชาชีพ มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="director_name">ชื่อผู้อำนวยการ (สำหรับเซ็นอนุมัติ)</Label>
              <Input 
                id="director_name" 
                name="director_name" 
                defaultValue={settings.director_name || ""} 
                placeholder="เช่น ผศ.ดร. นามสกุล" 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact_phone">เบอร์โทรศัพท์ติดต่อส่วนกลาง</Label>
              <Input 
                id="contact_phone" 
                name="contact_phone" 
                defaultValue={settings.contact_phone || ""} 
                placeholder="044-xxx-xxx" 
              />
            </div>
          </CardContent>
        </Card>

        {/* การเชื่อมต่อ API */}
        <Card>
          <CardHeader>
            <CardTitle>การเชื่อมต่อ (Integrations)</CardTitle>
            <CardDescription>ตั้งค่า LINE Messaging API เพื่อส่งการแจ้งเตือน</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="line_channel_access_token">LINE Channel Access Token</Label>
              <Input 
                id="line_channel_access_token" 
                name="line_channel_access_token" 
                defaultValue={settings.line_channel_access_token || ""} 
                type="password"
                placeholder="ใส่ Access Token ของ LINE Bot ที่นี่" 
              />
              <p className="text-xs text-muted-foreground">
                Token นี้จะถูกใช้ในการส่งแจ้งเตือนหาหัวหน้าแผนกและผู้ขอใช้รถผ่านแอปพลิเคชัน LINE
              </p>
            </div>
          </CardContent>
          <CardFooter className="bg-slate-50 border-t px-6 py-4">
            <Button type="submit" disabled={saving} className="bg-primary text-white w-full sm:w-auto">
              <Save className="mr-2 h-4 w-4" />
              {saving ? "กำลังบันทึก..." : "บันทึกการตั้งค่าทั้งหมด"}
            </Button>
          </CardFooter>
        </Card>

      </form>
    </div>
  );
}
