import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Box,
  BarChart3,
  Menu,
  X,
  Briefcase,
  ShoppingBag,
  Users,
  Truck,
  UserCheck,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Overview", path: "/", icon: LayoutDashboard },
    { name: "Inventory", path: "/inventory", icon: Box },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },

    { name: "Orders", path: "/orders", icon: ShoppingBag },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Supply Chain", path: "/supply-chain", icon: Truck },
    { name: "Human Resources", path: "/hr", icon: UserCheck },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-emerald-500 rounded-lg"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <aside
        className={`fixed left-0 top-0 h-full bg-[#1e293b] border-r border-slate-700 w-64 z-40 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="bg-emerald-500 p-2 rounded-lg">
            <Briefcase size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            NEXUS ERP
          </span>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${location.pathname === item.path ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
