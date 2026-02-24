import React, { useState } from "react";
import {
  Settings as SettingsIcon,
  User,
  Shield,
  Bell,
  Cloud,
  Database,
  Globe,
  Key,
  Save,
  RefreshCcw,
  HardDrive,
  Mail,
  Smartphone,
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: SettingsIcon },
    { id: "account", label: "Account", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "cloud", label: "Cloud & S3", icon: Cloud },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            System <span className="text-emerald-500">Configuration</span>
          </h1>
          <p className="text-slate-400 text-sm">
            Control enterprise-wide parameters and cloud infrastructure
            settings.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-emerald-500/20">
          <Save size={18} /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Sidebar */}
        <div className="lg:col-span-1 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content Area */}
        <div className="lg:col-span-3 bg-[#1e293b] rounded-[2.5rem] border border-slate-700/50 p-8 shadow-2xl">
          {activeTab === "general" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  General Settings
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      Organization Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Enterprise S3 Solutions"
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none transition"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">
                      System Currency
                    </label>
                    <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-emerald-500 outline-none">
                      <option>USD ($)</option>
                      <option>LKR (Rs.)</option>
                      <option>EUR (€)</option>
                    </select>
                  </div>
                </div>
              </div>
              <hr className="border-slate-800" />
              <div className="flex items-center justify-between p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
                <div className="flex gap-4 items-center">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Maintenance Mode</h4>
                    <p className="text-xs text-slate-500">
                      Disable frontend access for regular maintenance.
                    </p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-slate-700 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-slate-400 rounded-full transition-all"></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "cloud" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h3 className="text-xl font-bold text-white mb-6">
                Cloud Infrastructure (AWS)
              </h3>
              <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl space-y-4">
                <div className="flex items-center gap-3 text-emerald-500 font-bold">
                  <Database size={20} />
                  <span>S3 Bucket Configuration</span>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="AWS Region (e.g. us-east-1)"
                      className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white"
                    />
                    <input
                      type="text"
                      placeholder="Bucket Name"
                      className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white"
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 px-2">
                    <span>Auto-backup enabled</span>
                    <span className="text-emerald-500">Status: Connected</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-700">
                <HardDrive className="text-slate-400" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-white">Storage Usage</p>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[45%]"></div>
                  </div>
                </div>
                <span className="text-xs font-mono">4.5 GB / 10 GB</span>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <h3 className="text-xl font-bold text-white mb-6">
                Security & Access
              </h3>
              {[
                {
                  title: "Two-Factor Authentication",
                  desc: "Add an extra layer of security to your account.",
                  icon: Smartphone,
                  status: true,
                },
                {
                  title: "API Access Keys",
                  desc: "Generate keys to interact with the ERP API.",
                  icon: Key,
                  status: false,
                },
                {
                  title: "Login Notifications",
                  desc: "Get notified of any new login attempts.",
                  icon: Mail,
                  status: true,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-5 bg-slate-900/40 rounded-[1.5rem] border border-slate-800 hover:border-slate-700 transition"
                >
                  <div className="flex gap-4 items-center">
                    <div className="p-3 bg-slate-800 text-emerald-500 rounded-xl">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${item.status ? "bg-emerald-500" : "bg-slate-700"}`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${item.status ? "right-1" : "left-1"}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 p-6 bg-red-500/5 border border-red-500/10 rounded-[2.5rem] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-500/10 text-red-500 rounded-2xl">
            <RefreshCcw size={24} />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">
              System Factory Reset
            </h4>
            <p className="text-xs text-slate-500">
              Wipe all data and reset to default configurations.
            </p>
          </div>
        </div>
        <button className="px-6 py-2 border border-red-500/50 text-red-500 rounded-xl text-xs font-bold hover:bg-red-500 hover:text-white transition">
          Reset System
        </button>
      </div>
    </div>
  );
};

export default Settings;
