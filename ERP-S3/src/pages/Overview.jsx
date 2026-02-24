import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  DollarSign,
  Users,
  ShoppingCart,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Layers,
  Globe,
  Zap,
  Clock,
} from "lucide-react";

const Overview = () => {
  // Sample Data for Charts
  const revenueData = [
    { name: "Mon", income: 4000, expenses: 2400 },
    { name: "Tue", income: 3000, expenses: 1398 },
    { name: "Wed", income: 2000, expenses: 9800 },
    { name: "Thu", income: 2780, expenses: 3908 },
    { name: "Fri", income: 1890, expenses: 4800 },
    { name: "Sat", income: 2390, expenses: 3800 },
    { name: "Sun", income: 3490, expenses: 4300 },
  ];

  const stats = [
    {
      label: "Total Revenue",
      value: "$542,302",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-emerald-500",
    },
    {
      label: "Active Users",
      value: "12,405",
      change: "+3.2%",
      icon: Users,
      color: "text-blue-500",
    },
    {
      label: "Pending Orders",
      value: "142",
      change: "-2.1%",
      icon: ShoppingCart,
      color: "text-orange-500",
    },
    {
      label: "System Uptime",
      value: "99.99%",
      change: "+0.01%",
      icon: Activity,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="animate-in fade-in duration-700 space-y-6 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Executive <span className="text-emerald-500">Dashboard</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Real-time enterprise resource monitoring and analytics.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 bg-slate-800 px-3 py-1.5 rounded-lg text-xs font-medium text-emerald-400 border border-emerald-500/20">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>{" "}
            Live System Status
          </span>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-emerald-500/20">
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-[#1e293b] p-5 rounded-2xl border border-slate-700/50 flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div className={`p-2 rounded-lg bg-slate-800 ${item.color}`}>
                <item.icon size={20} />
              </div>
              <div
                className={`flex items-center text-xs font-bold ${item.change.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}
              >
                {item.change}{" "}
                {item.change.startsWith("+") ? (
                  <ArrowUpRight size={14} />
                ) : (
                  <ArrowDownRight size={14} />
                )}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                {item.label}
              </p>
              <h3 className="text-2xl font-bold text-white mt-1">
                {item.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Area Chart - Revenue Flow */}
        <div className="lg:col-span-2 bg-[#1e293b] p-6 rounded-3xl border border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg flex items-center gap-2 text-white">
              <Layers size={18} className="text-emerald-500" /> Financial
              Analytics
            </h3>
            <select className="bg-slate-800 text-xs border-none rounded-md text-slate-300 focus:ring-emerald-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
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
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorIncome)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Load / Distribution */}
        <div className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700/50">
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2 text-white">
            <Globe size={18} className="text-blue-500" /> Regional Traffic
          </h3>
          <div className="space-y-5">
            {[
              { region: "North America", val: 85, color: "bg-emerald-500" },
              { region: "Europe", val: 62, color: "bg-blue-500" },
              { region: "Asia Pacific", val: 94, color: "bg-purple-500" },
              { region: "Middle East", val: 30, color: "bg-orange-500" },
            ].map((r, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>{r.region}</span>
                  <span className="text-white font-bold">{r.val}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${r.color}`}
                    style={{ width: `${r.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl">
              <div className="p-2 bg-yellow-500/20 text-yellow-500 rounded-lg">
                <Zap size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase">
                  Server Efficiency
                </p>
                <p className="text-sm font-bold text-white">Optimal (0.42ms)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#1e293b] rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-700/50 flex justify-between items-center">
          <h3 className="font-bold text-white flex items-center gap-2">
            <Clock size={18} className="text-emerald-500" /> Critical Events Log
          </h3>
          <button className="text-emerald-500 text-xs font-bold hover:underline">
            View All Logs
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-widest bg-slate-800/30">
                <th className="p-4 font-medium">Event Source</th>
                <th className="p-4 font-medium">Severity</th>
                <th className="p-4 font-medium">Timestamp</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-300">
              {[
                {
                  source: "S3 Bucket: erp-assets",
                  sev: "Low",
                  time: "14:22:01",
                  status: "Success",
                },
                {
                  source: "Database: main-cluster",
                  sev: "High",
                  time: "13:45:12",
                  status: "Warning",
                },
                {
                  source: "Auth Service",
                  sev: "Medium",
                  time: "12:10:05",
                  status: "Success",
                },
              ].map((log, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-800/50 hover:bg-slate-800/20 transition"
                >
                  <td className="p-4 font-medium">{log.source}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${log.sev === "High" ? "bg-red-500/10 text-red-500" : "bg-blue-500/10 text-blue-500"}`}
                    >
                      {log.sev}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500 font-mono text-xs">
                    {log.time}
                  </td>
                  <td className="p-4 text-emerald-500 font-bold">
                    {log.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
