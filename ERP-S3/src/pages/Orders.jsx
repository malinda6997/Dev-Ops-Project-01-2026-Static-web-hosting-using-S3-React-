import React from "react";
import {
  ShoppingBag,
  Clock,
  CheckCircle2,
  AlertCircle,
  Search,
  Filter,
  Download,
  ExternalLink,
  CreditCard,
  User,
  Calendar,
  MoreHorizontal,
} from "lucide-react";

const Orders = () => {
  const orderStats = [
    {
      label: "Total Orders",
      value: "1,842",
      icon: ShoppingBag,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "Pending",
      value: "45",
      icon: Clock,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
    {
      label: "Completed",
      value: "1,720",
      icon: CheckCircle2,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      label: "Refunded",
      value: "12",
      icon: AlertCircle,
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
  ];

  const orders = [
    {
      id: "#ORD-9921",
      customer: "Dilshan Perera",
      items: 3,
      total: "$1,250.00",
      status: "Delivered",
      date: "Feb 23, 2026",
      method: "Visa",
    },
    {
      id: "#ORD-9922",
      customer: "Sarah Mendis",
      items: 1,
      total: "$450.00",
      status: "Processing",
      date: "Feb 23, 2026",
      method: "MasterCard",
    },
    {
      id: "#ORD-9923",
      customer: "Lanka Tech Solutions",
      items: 12,
      total: "$4,890.00",
      status: "Pending",
      date: "Feb 22, 2026",
      method: "Bank Transfer",
    },
    {
      id: "#ORD-9924",
      customer: "Kasun Rajapaksha",
      items: 2,
      total: "$120.00",
      status: "Delivered",
      date: "Feb 22, 2026",
      method: "PayPal",
    },
    {
      id: "#ORD-9925",
      customer: "Janaki Silva",
      items: 5,
      total: "$980.00",
      status: "Cancelled",
      date: "Feb 21, 2026",
      method: "Visa",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Processing":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "Pending":
        return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Cancelled":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "bg-slate-500/10 text-slate-500 border-slate-500/20";
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-top-4 duration-700 space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Order <span className="text-emerald-500">Pipeline</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Manage transactions, invoices, and fulfillment status.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-700 transition">
            <Download size={18} /> Export CSV
          </button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {orderStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700/50 group hover:border-emerald-500/30 transition-all"
          >
            <div
              className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              <stat.icon size={24} />
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              {stat.label}
            </p>
            <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Advanced Filter & Search */}
      <div className="bg-[#1e293b] p-5 rounded-3xl border border-slate-700/50 flex flex-col lg:flex-row gap-4 items-center shadow-xl">
        <div className="relative flex-1 w-full">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by Order ID, Customer name..."
            className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl py-3 pl-12 pr-4 text-sm text-slate-200 focus:ring-2 focus:ring-emerald-500 transition"
          />
        </div>
        <div className="flex gap-3 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-slate-800 px-6 py-3 rounded-2xl text-sm font-bold text-slate-300 hover:text-white border border-slate-700 transition">
            <Filter size={18} /> Status
          </button>
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-slate-800 px-6 py-3 rounded-2xl text-sm font-bold text-slate-300 hover:text-white border border-slate-700 transition">
            <Calendar size={18} /> Date Range
          </button>
        </div>
      </div>

      {/* Orders Table Container */}
      <div className="bg-[#1e293b] rounded-[2rem] border border-slate-700/50 overflow-hidden shadow-2xl shadow-black/20">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-widest bg-slate-800/50">
                <th className="p-6 font-semibold">Order Details</th>
                <th className="p-6 font-semibold text-center">Date</th>
                <th className="p-6 font-semibold">Payment</th>
                <th className="p-6 font-semibold text-right">Amount</th>
                <th className="p-6 font-semibold text-center">Status</th>
                <th className="p-6 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-300">
              {orders.map((order, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-800/50 hover:bg-slate-800/30 transition group"
                >
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-500">
                        <User size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-white group-hover:text-emerald-400 transition">
                          {order.customer}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono uppercase">
                          {order.id} • {order.items} items
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 text-center text-slate-400 font-medium">
                    {order.date}
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <CreditCard size={14} className="text-slate-500" />
                      <span className="text-xs">{order.method}</span>
                    </div>
                  </td>
                  <td className="p-6 text-right font-bold text-white">
                    {order.total}
                  </td>
                  <td className="p-6 text-center">
                    <span
                      className={`px-3 py-1.5 rounded-xl text-[10px] font-bold border ${getStatusColor(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-400 hover:text-emerald-500">
                        <ExternalLink size={18} />
                      </button>
                      <button className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-400 hover:text-white">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-slate-800/30 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium">
            Displaying page 1 of 54 (Showing 10 results per page)
          </p>
          <div className="flex gap-2">
            <button className="px-5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold border border-slate-700 hover:bg-slate-800 transition">
              Prev
            </button>
            <button className="px-5 py-2 bg-emerald-500 text-white rounded-xl text-xs font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/20">
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
