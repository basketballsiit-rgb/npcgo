import { getDashboardStats, getRecentRequests, getChartData } from "@/app/actions/dashboard";
import { getVehicleStats } from "@/app/actions/queue";
import { getVehicleAlerts } from "@/app/actions/resources";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { Car, CheckCircle, CalendarDays, Clock, FileText, ArrowRight, Gauge, Users } from "lucide-react";
import Link from "next/link";
import { ChartComponent } from "./ChartComponent";
import { AlertsBanner } from "./AlertsBanner";

export default async function DashboardPage() {
  const stats = await getDashboardStats() || { totalRequests: 0, pendingApprovals: 0, approvedRequests: 0, availableVehicles: 0 };
  const recentRequests = await getRecentRequests();
  const chartData = await getChartData();
  const vehicleStats = await getVehicleStats() || [];
  const alerts = await getVehicleAlerts() || [];

  const currentDateTime = format(new Date(), "dd/MM/yyyy HH:mm น.", { locale: th });

  // Custom vibrant cards style matching the reference
  const summaryCards = [
    {
      title: "คำขอทั้งหมด",
      value: stats.totalRequests,
      icon: FileText,
      bgColor: "bg-[#2dd4bf]", // Teal 400
      bgClass: "bg-gradient-to-br from-teal-400 to-teal-500",
      desc: "รายการคำขอใช้รถทั้งหมด",
    },
    {
      title: "รอพิจารณา",
      value: stats.pendingApprovals,
      icon: Clock,
      bgColor: "bg-[#a855f7]", // Purple 500
      bgClass: "bg-gradient-to-br from-purple-400 to-purple-600",
      desc: "รอพิจารณาอนุมัติตามลำดับขั้น",
    },
    {
      title: "อนุมัติแล้ว",
      value: stats.approvedRequests,
      icon: CheckCircle,
      bgColor: "bg-[#f97316]", // Orange 500
      bgClass: "bg-gradient-to-br from-orange-400 to-orange-600",
      desc: "จัดคิวและอนุมัติเรียบร้อย",
    },
    {
      title: "รถว่างพร้อมใช้",
      value: stats.availableVehicles,
      icon: Car,
      bgColor: "bg-[#3b82f6]", // Blue 500
      bgClass: "bg-gradient-to-br from-blue-500 to-blue-700",
      desc: "รถส่วนกลางที่พร้อมใช้งาน",
    },
  ];

  return (
    <div className="space-y-6">
      
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-800 to-teal-900 shadow-md">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <Gauge className="w-6 h-6 text-teal-100" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">แดชบอร์ดภาพรวม</h2>
              <p className="text-teal-100/80 text-sm mt-1">ข้อมูลสถิติระบบจัดการยานพาหนะในภาพรวมทั้งหมด</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-teal-100/90 text-sm bg-black/20 px-4 py-2 rounded-full backdrop-blur-md">
            <Clock className="w-4 h-4" />
            <span>{currentDateTime}</span>
          </div>
        </div>
      </div>

      {/* Expiry Alerts Banner */}
      <AlertsBanner initialAlerts={alerts as any} />

      {/* Summary Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card, index) => (
          <div 
            key={index} 
            className={`${card.bgClass} relative overflow-hidden rounded-xl shadow-sm text-white p-6 transition-transform hover:-translate-y-1 duration-300`}
          >
            {/* Decorative circles */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm shadow-inner">
                <card.icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-5xl font-extrabold mb-1 tracking-tight">{card.value}</div>
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-white/80 text-xs mt-1">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vehicle Usage Statistics (Moved up and color-customized) */}
      <div className="space-y-4 mt-8">
        <div className="flex items-center gap-2 border-l-4 border-teal-500 pl-3">
          <h3 className="text-xl font-bold text-slate-800">สถิติการใช้งานรถยนต์รายคัน</h3>
          <span className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full font-semibold border border-slate-200">
            ภาพรวมการใช้รถแต่ละคัน
          </span>
        </div>
        
        {vehicleStats.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 p-12 text-center text-slate-500 bg-white shadow-sm">
            ยังไม่มีข้อมูลสถิติการใช้งานรถยนต์
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vehicleStats.map((stat, index) => {
              // Cycling through vibrant, premium gradients that are completely distinct from the first row's Summary Cards
              const gradients = [
                "from-indigo-500 to-indigo-700 shadow-indigo-500/20",
                "from-pink-500 to-rose-600 shadow-pink-500/20",
                "from-emerald-500 to-emerald-700 shadow-emerald-500/20",
                "from-cyan-500 to-blue-600 shadow-cyan-500/20",
                "from-amber-500 to-amber-700 shadow-amber-500/20",
                "from-violet-500 to-fuchsia-600 shadow-violet-500/20",
                "from-lime-500 to-lime-700 shadow-lime-500/20",
                "from-rose-500 to-rose-700 shadow-rose-500/20"
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div 
                  key={stat.carId} 
                  className={`bg-gradient-to-br ${gradient} relative overflow-hidden rounded-2xl shadow-md text-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  {/* Glassmorphism decorative circles */}
                  <div className="absolute -right-8 -top-8 w-28 h-28 bg-white/10 rounded-full blur-md"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-full blur-md"></div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* License Plate, Type & Brand */}
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex flex-col min-w-0">
                          <h4 className="text-xl font-bold tracking-tight drop-shadow-sm truncate">{stat.licensePlate}</h4>
                          <span className="text-xs text-white/85 font-semibold mt-0.5 drop-shadow-sm truncate">
                            {stat.carType}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-white bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 shrink-0 mt-1">
                          {stat.brand}
                        </span>
                      </div>
                      
                      {/* Divider */}
                      <div className="h-[1px] bg-white/10 my-3.5"></div>
                      
                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="bg-white/15 backdrop-blur-sm border border-white/10 rounded-xl p-2 shadow-inner">
                          <div className="text-[10px] text-white/80 font-medium">ในจังหวัด</div>
                          <div className="font-extrabold text-2xl text-white mt-0.5 drop-shadow-sm">{stat.inProvince}</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-2 shadow-inner">
                          <div className="text-[10px] text-white/80 font-medium">ต่างจังหวัด</div>
                          <div className="font-extrabold text-2xl text-white mt-0.5 drop-shadow-sm">{stat.outProvince}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Total Trips Bottom Badge */}
                    <div className="mt-4 text-center text-xs font-semibold text-white/95 bg-black/15 border border-white/5 py-1.5 rounded-xl backdrop-blur-sm shadow-sm">
                      รวมทั้งหมด <span className="text-sm font-black underline decoration-2 decoration-white/30 px-1">{stat.totalTrips}</span> เที่ยว
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Recent Activity Table & Chart Stacked Layout (Now vertical for full-width legibility) */}
      <div className="space-y-6 mt-8">
        {/* Recent Activity Table */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-100 p-6 bg-slate-50/50">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-600" />
              <h3 className="text-lg font-semibold text-slate-800">คำขอล่าสุด</h3>
              <span className="ml-2 bg-teal-100 text-teal-700 text-xs px-2 py-0.5 rounded-full font-medium border border-teal-200">
                ล่าสุด
              </span>
            </div>
            <Link href="/reports" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
              ดูทั้งหมด <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 bg-slate-50 uppercase font-semibold border-b">
                <tr>
                  <th className="px-6 py-4">ผู้ขอ / แผนก</th>
                  <th className="px-6 py-4">สถานที่</th>
                  <th className="px-6 py-4">วันที่เดินทาง</th>
                  <th className="px-6 py-4">สถานะ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentRequests.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                      ยังไม่มีรายการขอใช้รถ
                    </td>
                  </tr>
                ) : (
                  recentRequests.map((req) => (
                    <tr key={req.requestId} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-slate-800">{req.requesterName}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{req.departmentName}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="max-w-[200px] truncate font-medium text-slate-700" title={req.destination}>
                          {req.destination}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {format(new Date(req.startDateTime), "dd MMM yy", { locale: th })}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                          req.status === 'Approved' ? 'bg-green-50 text-green-700 border-green-200' : 
                          req.status === 'Rejected' ? 'bg-red-50 text-red-700 border-red-200' : 
                          'bg-amber-50 text-amber-700 border-amber-200'
                        }`}>
                          {req.status === 'Approved' ? 'อนุมัติ' : 
                           req.status === 'Rejected' ? 'ไม่อนุมัติ' : 'รอพิจารณา'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart (Full-width underneath) */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 p-6 bg-slate-50/50">
            <h3 className="text-lg font-semibold text-slate-800">สถิติการขอใช้รถ</h3>
            <p className="text-sm text-slate-500 mt-1">จำนวนคำขอใน 7 วันล่าสุด</p>
          </div>
          <div className="p-6 h-[350px]">
            <ChartComponent data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
