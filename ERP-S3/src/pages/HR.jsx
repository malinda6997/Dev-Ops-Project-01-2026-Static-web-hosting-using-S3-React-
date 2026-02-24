import React from "react";
import {
  Users,
  UserCheck,
  UserPlus,
  Briefcase,
  Calendar,
  Clock,
  Award,
  DollarSign,
  MoreVertical,
  Search,
  Filter,
  TrendingUp,
} from "lucide-react";

const HR = () => {
  const hrStats = [
    {
      label: "Total Employees",
      value: "142",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "On Duty Today",
      value: "128",
      icon: UserCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      label: "Open Positions",
      value: "08",
      icon: Briefcase,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      label: "Monthly Payroll",
      value: "$84.5k",
      icon: DollarSign,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  const employees = [
    {
      id: "EMP-101",
      name: "Amara Perera",
      role: "DevOps Engineer",
      dept: "IT",
      status: "Active",
      performance: 95,
      avatar: "AP",
    },
    {
      id: "EMP-102",
      name: "Saman Kumara",
      role: "Fullstack Dev",
      dept: "IT",
      status: "In Meeting",
      performance: 88,
      avatar: "SK",
    },
    {
      id: "EMP-105",
      name: "Nimali Silva",
      role: "HR Manager",
      dept: "HR",
      status: "Active",
      performance: 92,
      avatar: "NS",
    },
    {
      id: "EMP-108",
      name: "Kasun Perera",
      role: "Accountant",
      dept: "Finance",
      status: "Away",
      performance: 78,
      avatar: "KP",
    },
  ];

  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Human <span className="text-emerald-500">Capital</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Manage workforce performance, attendance, and organizational
            structure.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/20">
          <UserPlus size={18} /> Onboard Employee
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {hrStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#1e293b] p-6 rounded-[2rem] border border-slate-700/50 flex flex-col justify-between group hover:border-emerald-500/30 transition-all"
          >
            <div
              className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}
            >
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold text-white mt-1">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Employee Directory */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1e293b] p-4 rounded-2xl border border-slate-700/50 flex gap-4">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                size={18}
              />
              <input
                type="text"
                placeholder="Search employee..."
                className="w-full bg-slate-900/50 border-none rounded-xl py-2 pl-10 text-sm text-slate-200 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
            <button className="bg-slate-800 p-2 rounded-xl border border-slate-700 text-slate-400">
              <Filter size={20} />
            </button>
          </div>

          <div className="bg-[#1e293b] rounded-[2rem] border border-slate-700/50 overflow-hidden shadow-xl">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-500 text-xs uppercase bg-slate-800/40">
                  <th className="p-5 font-semibold">Employee</th>
                  <th className="p-5 font-semibold">Department</th>
                  <th className="p-5 font-semibold">Performance</th>
                  <th className="p-5 font-semibold">Status</th>
                  <th className="p-5 font-semibold text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-300">
                {employees.map((emp, i) => (
                  <tr
                    key={i}
                    className="border-b border-slate-800/50 hover:bg-slate-800/20 transition group"
                  >
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center font-bold text-white text-xs shadow-lg">
                          {emp.avatar}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-white group-hover:text-emerald-400 transition">
                            {emp.name}
                          </span>
                          <span className="text-[10px] text-slate-500 uppercase">
                            {emp.role}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-5">
                      <span className="px-2 py-1 bg-slate-800 rounded text-xs">
                        {emp.dept}
                      </span>
                    </td>
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-1.5 w-12 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="bg-emerald-500 h-full"
                            style={{ width: `${emp.performance}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-mono">
                          {emp.performance}%
                        </span>
                      </div>
                    </td>
                    <td className="p-5">
                      <span
                        className={`flex items-center gap-1.5 text-[10px] font-bold ${emp.status === "Active" ? "text-emerald-500" : "text-orange-400"}`}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${emp.status === "Active" ? "bg-emerald-500 animate-pulse" : "bg-orange-400"}`}
                        ></div>
                        {emp.status}
                      </span>
                    </td>
                    <td className="p-5 text-center">
                      <button className="text-slate-500 hover:text-white">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Panel: Quick Insights */}
        <div className="space-y-6">
          <div className="bg-[#1e293b] p-8 rounded-[2.5rem] border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="text-yellow-500" /> Top Performer
            </h3>
            <div className="text-center p-6 bg-slate-900/50 rounded-3xl border border-yellow-500/20 border-dashed">
              <div className="w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black text-slate-900 shadow-xl shadow-yellow-500/20">
                AP
              </div>
              <h4 className="font-bold text-white">Amara Perera</h4>
              <p className="text-xs text-slate-500 mb-4">
                95% Efficiency Score
              </p>
              <div className="flex justify-center gap-2">
                <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                  DevOps MVP
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-[2.5rem] border border-slate-700/50">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-widest text-slate-400">
              <Clock size={16} /> Attendance Overview
            </h3>
            <div className="grid grid-cols-7 gap-1">
              {[...Array(28)].map((_, i) => (
                <div
                  key={i}
                  className={`h-4 rounded-sm ${i % 5 === 0 ? "bg-slate-800" : "bg-emerald-500"}`}
                  title={`Feb ${i + 1}`}
                ></div>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 mt-4 text-center italic">
              February Attendance Heatmap
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HR;
