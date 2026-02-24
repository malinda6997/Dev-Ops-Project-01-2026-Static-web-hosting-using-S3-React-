import React from "react";
import {
  Truck,
  Ship,
  Plane,
  Globe,
  MapPin,
  Navigation,
  Package,
  AlertCircle,
  Clock,
  BarChart3,
  ArrowRightLeft,
  Anchor,
} from "lucide-react";

const SupplyChain = () => {
  const shipments = [
    {
      id: "SHP-9921",
      carrier: "Maersk Line",
      origin: "Shanghai, CN",
      destination: "Colombo, SL",
      status: "On Sea",
      eta: "Feb 28",
      progress: 65,
      type: "Sea",
    },
    {
      id: "SHP-9925",
      carrier: "DHL Express",
      origin: "Berlin, DE",
      destination: "Colombo, SL",
      status: "In Transit",
      eta: "Feb 24",
      progress: 88,
      type: "Air",
    },
    {
      id: "SHP-9928",
      carrier: "Lanka Logistics",
      origin: "Hambantota, SL",
      destination: "Colombo, SL",
      status: "Loading",
      eta: "Feb 23",
      progress: 10,
      type: "Road",
    },
  ];

  const fleetStats = [
    {
      label: "Active Shipments",
      value: "24",
      icon: Navigation,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      label: "Delayed",
      value: "03",
      icon: AlertCircle,
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      label: "Avg. Lead Time",
      value: "14 Days",
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      label: "Global Hubs",
      value: "12",
      icon: Globe,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  const getTransportIcon = (type) => {
    switch (type) {
      case "Sea":
        return <Ship size={20} />;
      case "Air":
        return <Plane size={20} />;
      case "Road":
        return <Truck size={20} />;
      default:
        return <Package size={20} />;
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-700 space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Global <span className="text-emerald-500">Logistics</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Real-time supply chain monitoring and fleet management.
          </p>
        </div>
        <div className="flex gap-2 text-xs font-mono text-emerald-500 bg-emerald-500/5 px-4 py-2 rounded-full border border-emerald-500/20 items-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping mr-2"></div>
          SATELLITE TRACKING ACTIVE
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {fleetStats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#1e293b] p-6 rounded-[2rem] border border-slate-700/50 hover:bg-slate-800/40 transition group"
          >
            <div
              className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Active Shipments List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Anchor className="text-emerald-500" /> Active Shipments
            </h3>
            <button className="text-xs text-emerald-500 font-bold hover:underline">
              Track New Shipment
            </button>
          </div>

          <div className="space-y-4">
            {shipments.map((ship, i) => (
              <div
                key={i}
                className="bg-[#1e293b] p-6 rounded-3xl border border-slate-700/50 hover:border-slate-600 transition shadow-lg"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-emerald-500 border border-slate-700">
                      {getTransportIcon(ship.type)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">
                        {ship.id}{" "}
                        <span className="text-xs text-slate-500 ml-2">
                          via {ship.carrier}
                        </span>
                      </h4>
                      <div className="flex items-center text-xs text-slate-400 mt-1">
                        <MapPin size={12} className="mr-1" /> {ship.origin}{" "}
                        <ArrowRightLeft size={12} className="mx-2" />{" "}
                        {ship.destination}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block uppercase font-bold tracking-tighter">
                      Estimated Arrival
                    </span>
                    <span className="text-emerald-500 font-mono font-bold">
                      {ship.eta} Feb, 2026
                    </span>
                  </div>
                </div>

                {/* Progress Visualizer */}
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-[10px] font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200/10">
                        {ship.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-emerald-500">
                        {ship.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-1.5 mb-4 text-xs flex rounded bg-slate-800">
                    <div
                      style={{ width: `${ship.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500 transition-all duration-1000"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side Panel: Warehouse Status */}
        <div className="bg-[#1e293b] p-8 rounded-[2.5rem] border border-slate-700/50 h-fit sticky top-6">
          <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
            <BarChart3 className="text-blue-500" /> Warehouse Load
          </h3>
          <div className="space-y-8">
            {[
              { loc: "Colombo Hub", load: 88, status: "Critical" },
              { loc: "Hambantota Port", load: 42, status: "Optimal" },
              { loc: "Kandy Storage", load: 15, status: "Empty" },
              { loc: "Jaffna Depot", load: 65, status: "Stable" },
            ].map((wh, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-300">
                    {wh.loc}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${wh.status === "Critical" ? "bg-red-500/20 text-red-500" : "bg-emerald-500/20 text-emerald-500"}`}
                  >
                    {wh.status}
                  </span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${wh.load > 80 ? "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" : "bg-blue-500"}`}
                    style={{ width: `${wh.load}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-slate-900/50 p-5 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 text-orange-500 rounded-lg">
                <AlertCircle size={20} />
              </div>
              <h4 className="font-bold text-white text-sm">Disruption Alert</h4>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              High winds detected near Shanghai port. Potential 24h delay for
              SHP-9921.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;
