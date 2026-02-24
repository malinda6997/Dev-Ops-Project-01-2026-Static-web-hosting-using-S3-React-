import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  ComposedChart,
  Scatter,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart as PieIcon,
  Target,
  Zap,
  ShieldCheck,
  Globe,
  Cpu,
  MousePointer2,
  Clock,
  Calendar,
} from "lucide-react";

const Analytics = () => {
  // Mock Data
  const performanceData = [
    { name: "Jan", revenue: 4000, profit: 2400, orders: 240 },
    { name: "Feb", revenue: 3000, profit: 1398, orders: 210 },
    { name: "Mar", revenue: 9800, profit: 5800, orders: 450 },
    { name: "Apr", revenue: 3908, profit: 2800, orders: 300 },
    { name: "May", revenue: 4800, profit: 3800, orders: 320 },
    { name: "Jun", revenue: 7800, profit: 4300, orders: 410 },
  ];

  const departmentData = [
    { name: "Production", efficiency: 85, load: 90 },
    { name: "Logistics", efficiency: 72, load: 85 },
    { name: "Sales", efficiency: 94, load: 60 },
    { name: "HR", efficiency: 65, load: 40 },
    { name: "IT", efficiency: 88, load: 75 },
  ];

  return (
    <div className="animate-in fade-in duration-700 space-y-8 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Enterprise <span className="text-emerald-500">Analytics</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Predictive insights and deep data visualization for Q1 2026.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="bg-slate-800 p-2 rounded-xl flex items-center gap-2 border border-slate-700">
            <Calendar size={18} className="text-emerald-500" />
            <span className="text-xs font-medium">Jan 2026 - Jun 2026</span>
          </div>
        </div>
      </div>

      {/* Analytics KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700/50 relative overflow-hidden group">
          <TrendingUp
            className="absolute -right-4 -bottom-4 text-emerald-500/10 group-hover:scale-125 transition-transform"
            size={120}
          />
          <p className="text-slate-500 text-sm font-medium uppercase">
            Conversion Rate
          </p>
          <h3 className="text-4xl font-bold text-white mt-2">12.4%</h3>
          <p className="text-emerald-500 text-xs font-bold mt-2 flex items-center gap-1">
            <TrendingUp size={14} /> +2.4% from last month
          </p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700/50 relative overflow-hidden group">
          <MousePointer2
            className="absolute -right-4 -bottom-4 text-blue-500/10 group-hover:scale-125 transition-transform"
            size={120}
          />
          <p className="text-slate-500 text-sm font-medium uppercase">
            Avg. Session Duration
          </p>
          <h3 className="text-4xl font-bold text-white mt-2">04:22</h3>
          <p className="text-blue-500 text-xs font-bold mt-2 flex items-center gap-1">
            <Clock size={14} /> +15s improvement
          </p>
        </div>
        <div className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700/50 relative overflow-hidden group">
          <ShieldCheck
            className="absolute -right-4 -bottom-4 text-purple-500/10 group-hover:scale-125 transition-transform"
            size={120}
          />
          <p className="text-slate-500 text-sm font-medium uppercase">
            System Integrity
          </p>
          <h3 className="text-4xl font-bold text-white mt-2">99.8%</h3>
          <p className="text-purple-500 text-xs font-bold mt-2 flex items-center gap-1">
            <Zap size={14} /> Optimal Performance
          </p>
        </div>
      </div>

      {/* Chart Row 1: Revenue vs Profit Line Chart */}
      <div className="bg-[#1e293b] p-8 rounded-3xl border border-slate-700/50">
        <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
          <BarChart3 className="text-emerald-500" /> Revenue vs Profit Analytics
        </h3>
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#334155"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                }}
              />
              <Legend verticalAlign="top" height={36} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorRev)"
              />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="#3b82f6"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorProf)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart Row 2: Department Load vs Efficiency (Bar Chart) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#1e293b] p-8 rounded-3xl border border-slate-700/50">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <Cpu className="text-blue-500" /> Department Load Distribution
          </h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#334155"
                  vertical={false}
                />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  cursor={{ fill: "#334155" }}
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #334155",
                  }}
                />
                <Bar
                  dataKey="load"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#1e293b] p-8 rounded-3xl border border-slate-700/50">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
            <Target className="text-orange-500" /> Goal Completion Progress
          </h3>
          <div className="space-y-6">
            {[
              { label: "Market Expansion", val: 75, color: "bg-emerald-500" },
              { label: "Customer Acquisition", val: 40, color: "bg-blue-500" },
              { label: "Product Development", val: 90, color: "bg-purple-500" },
              { label: "Cost Reduction", val: 55, color: "bg-orange-500" },
            ].map((goal, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">{goal.label}</span>
                  <span className="text-white font-bold">{goal.val}%</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div
                    className={`${goal.color} h-full rounded-full transition-all duration-1000`}
                    style={{ width: `${goal.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Row 3: Mixed Analytics Table & Status */}
      <div className="bg-[#1e293b] rounded-3xl border border-slate-700/50 overflow-hidden">
        <div className="p-8 border-b border-slate-700/50">
          <h3 className="text-xl font-bold text-white">
            Advanced Infrastructure Status
          </h3>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-slate-500 text-xs font-bold uppercase mb-2">
              Network Latency
            </p>
            <p className="text-2xl font-mono text-emerald-400">12ms</p>
          </div>
          <div className="text-center">
            <p className="text-slate-500 text-xs font-bold uppercase mb-2">
              Error Rate
            </p>
            <p className="text-2xl font-mono text-red-400">0.02%</p>
          </div>
          <div className="text-center">
            <p className="text-slate-500 text-xs font-bold uppercase mb-2">
              Active Nodes
            </p>
            <p className="text-2xl font-mono text-blue-400">14</p>
          </div>
          <div className="text-center">
            <p className="text-slate-500 text-xs font-bold uppercase mb-2">
              Uptime Index
            </p>
            <p className="text-2xl font-mono text-purple-400">9.99/10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
