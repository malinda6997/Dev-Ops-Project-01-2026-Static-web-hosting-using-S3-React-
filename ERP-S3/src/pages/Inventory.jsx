import React from "react";
import {
  Box,
  Search,
  Filter,
  Plus,
  MoreVertical,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  RefreshCcw,
  Warehouse,
  Truck,
  BarChart2,
} from "lucide-react";

const Inventory = () => {
  const inventoryStats = [
    { label: "Total Items", value: "8,245", icon: Box, color: "text-blue-500" },
    {
      label: "Out of Stock",
      value: "12",
      icon: AlertTriangle,
      color: "text-red-500",
    },
    {
      label: "Warehouses",
      value: "04",
      icon: Warehouse,
      color: "text-emerald-500",
    },
    { label: "Incoming", value: "150", icon: Truck, color: "text-orange-500" },
  ];

  const inventoryItems = [
    {
      id: "INV-001",
      name: "Nvidia RTX 4090",
      category: "Hardware",
      stock: 45,
      price: "$1,599",
      status: "In Stock",
      warehouse: "Colombo-01",
    },
    {
      id: "INV-002",
      name: "Dell XPS 15 Laptop",
      category: "Computers",
      stock: 0,
      price: "$2,100",
      status: "Out of Stock",
      warehouse: "Kandy-02",
    },
    {
      id: "INV-003",
      name: "Logitech MX Master 3",
      category: "Peripherals",
      stock: 120,
      price: "$99",
      status: "Low Stock",
      warehouse: "Colombo-01",
    },
    {
      id: "INV-004",
      name: 'Samsung 32" Monitor',
      category: "Displays",
      stock: 25,
      price: "$450",
      status: "In Stock",
      warehouse: "Galle-03",
    },
    {
      id: "INV-005",
      name: "Cisco Core Switch",
      category: "Networking",
      stock: 8,
      price: "$3,200",
      status: "In Stock",
      warehouse: "Colombo-01",
    },
  ];

  return (
    <div className="animate-in fade-in duration-700 space-y-6 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Inventory <span className="text-emerald-500">Asset Manager</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Monitor stock levels, warehouse distribution, and supply flow.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-xl text-sm font-medium border border-slate-700 transition">
            <RefreshCcw size={16} /> Sync
          </button>
          <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/20">
            <Plus size={18} /> Add New Item
          </button>
        </div>
      </div>

      {/* Mini Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {inventoryStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#1e293b] p-5 rounded-2xl border border-slate-700/50 flex items-center gap-4"
          >
            <div className={`p-3 rounded-xl bg-slate-800 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-medium uppercase">
                {stat.label}
              </p>
              <h3 className="text-xl font-bold text-white">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-[#1e293b] p-4 rounded-2xl border border-slate-700/50 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by SKU, Product name or Warehouse..."
            className="w-full bg-slate-800 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-200 focus:ring-2 focus:ring-emerald-500 transition"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-800 px-4 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white border border-slate-700">
            <Filter size={16} /> Filter
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-800 px-4 py-2.5 rounded-xl text-sm text-slate-300 hover:text-white border border-slate-700">
            <BarChart2 size={16} /> Report
          </button>
        </div>
      </div>

      {/* Inventory Table Area */}
      <div className="bg-[#1e293b] rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-xs uppercase tracking-widest bg-slate-800/40">
                <th className="p-4 font-medium">SKU / Product</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Warehouse</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Stock Level</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-300">
              {inventoryItems.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-slate-800/50 hover:bg-slate-800/20 transition group"
                >
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-white group-hover:text-emerald-400 transition">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono uppercase tracking-tighter">
                        {item.id}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-slate-400">{item.category}</td>
                  <td className="p-4 flex items-center gap-2">
                    <Warehouse size={14} className="text-slate-500" />
                    <span>{item.warehouse}</span>
                  </td>
                  <td className="p-4 font-semibold text-white">{item.price}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 w-16 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.stock > 50 ? "bg-emerald-500" : item.stock > 0 ? "bg-orange-500" : "bg-red-500"}`}
                          style={{ width: `${Math.min(item.stock, 100)}%` }}
                        ></div>
                      </div>
                      <span className="font-mono text-xs">{item.stock}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider 
                      ${
                        item.status === "In Stock"
                          ? "bg-emerald-500/10 text-emerald-500"
                          : item.status === "Low Stock"
                            ? "bg-orange-500/10 text-orange-500"
                            : "bg-red-500/10 text-red-500"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <button className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-500 hover:text-white">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-slate-800/20 border-t border-slate-700/50 flex justify-between items-center text-xs text-slate-500">
          <p>Showing 5 of 8,245 active products</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-slate-800 rounded border border-slate-700 hover:text-white transition">
              Previous
            </button>
            <button className="px-3 py-1 bg-slate-800 rounded border border-slate-700 hover:text-white transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
