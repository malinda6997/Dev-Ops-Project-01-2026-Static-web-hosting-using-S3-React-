import React from "react";
import {
  Users,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  Star,
  Search,
  Filter,
  MoreVertical,
  Download,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const Customers = () => {
  const customerStats = [
    {
      label: "Total Customers",
      value: "12,840",
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "VIP Members",
      value: "1,205",
      icon: Star,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
    },
    {
      label: "Active Today",
      value: "458",
      icon: ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      label: "New This Month",
      value: "+124",
      icon: UserPlus,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  const customers = [
    {
      id: "CUS-001",
      name: "Dilshan Perera",
      email: "dilshan@techsl.com",
      phone: "+94 77 123 4567",
      location: "Colombo",
      status: "VIP",
      spent: "$12,500",
      lastOrder: "2 hours ago",
    },
    {
      id: "CUS-002",
      name: "Sarah Mendis",
      email: "sarah.m@gmail.com",
      phone: "+94 71 987 6543",
      location: "Kandy",
      status: "Regular",
      spent: "$4,200",
      lastOrder: "Yesterday",
    },
    {
      id: "CUS-003",
      name: "Lanka Tech Solutions",
      email: "procure@lankatech.lk",
      phone: "+94 11 250 1100",
      location: "Galle",
      status: "VIP",
      spent: "$48,900",
      lastOrder: "3 days ago",
    },
    {
      id: "CUS-004",
      name: "Kasun Rajapaksha",
      email: "kasun.r@yahoo.com",
      phone: "+94 72 444 5555",
      location: "Negombo",
      status: "New",
      spent: "$120",
      lastOrder: "5 mins ago",
    },
    {
      id: "CUS-005",
      name: "Janaki Silva",
      email: "janaki@freelance.com",
      phone: "+94 76 333 2222",
      location: "Matara",
      status: "Regular",
      spent: "$980",
      lastOrder: "1 week ago",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "VIP":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Regular":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "New":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      default:
        return "bg-slate-500/10 text-slate-500 border-slate-500/20";
    }
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-700 space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Customer <span className="text-emerald-500">Intelligence</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Manage relationships, track engagement, and analyze lifetime value.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/20">
            <UserPlus size={18} /> Add Customer
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {customerStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#1e293b] p-6 rounded-[2rem] border border-slate-700/50 flex items-center gap-5"
          >
            <div
              className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}
            >
              <stat.icon size={28} />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">
                {stat.label}
              </p>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Action Bar */}
      <div className="bg-[#1e293b] p-4 rounded-3xl border border-slate-700/50 flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by name, email, or company..."
            className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-3 pl-12 pr-4 text-sm text-slate-200 focus:ring-2 focus:ring-emerald-500 transition"
          />
        </div>
        <div className="flex gap-2">
          <button className="p-3 bg-slate-800 rounded-xl text-slate-400 hover:text-white border border-slate-700">
            <Filter size={20} />
          </button>
          <button className="p-3 bg-slate-800 rounded-xl text-slate-400 hover:text-white border border-slate-700">
            <Download size={20} />
          </button>
        </div>
      </div>

      {/* Customer Directory Table */}
      <div className="bg-[#1e293b] rounded-[2.5rem] border border-slate-700/50 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-[0.2em] bg-slate-800/40">
                <th className="p-6 font-semibold">Customer Details</th>
                <th className="p-6 font-semibold">Contact</th>
                <th className="p-6 font-semibold text-center">Location</th>
                <th className="p-6 font-semibold text-right">Total Spent</th>
                <th className="p-6 font-semibold text-center">Status</th>
                <th className="p-6 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-300">
              {customers.map((cus, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-800/50 hover:bg-slate-800/20 transition group"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-slate-600 font-bold text-emerald-500">
                        {cus.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-white group-hover:text-emerald-400 transition">
                          {cus.name}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono uppercase">
                          {cus.id}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-col gap-1 text-xs">
                      <div className="flex items-center gap-2">
                        <Mail size={12} className="text-slate-500" />{" "}
                        {cus.email}
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={12} className="text-slate-500" />{" "}
                        {cus.phone}
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-400">
                      <MapPin size={12} /> {cus.location}
                    </div>
                  </td>
                  <td className="p-6 text-right font-mono font-bold text-white">
                    {cus.spent}
                  </td>
                  <td className="p-6 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black border ${getStatusStyle(cus.status)}`}
                    >
                      {cus.status}
                    </span>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <button className="p-2 text-slate-500 hover:text-emerald-500 hover:bg-emerald-500/10 rounded-lg transition">
                        <MessageSquare size={18} />
                      </button>
                      <button className="p-2 text-slate-500 hover:text-white hover:bg-slate-700 rounded-lg transition">
                        <MoreVertical size={18} />
                      </button>
                    </div>
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

export default Customers;
