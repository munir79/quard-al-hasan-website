"use client";

import { useState } from "react";
import { MoreHorizontal, Activity, ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function TelemetryMetrics() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4D47D7] uppercase tracking-widest mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D47D7]" />
            Live Telemetry & Performance
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Client Telemetry &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] via-[#6366f1] to-[#0ea5e9]">
              System Metrics
            </span>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Real-time Production Feed</span>
        </div>
      </div>

      {/* 3-Card Bento Row from Figma */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: Micro-charts (Glowing Primary Spline Wave) */}
        <div className="figma-card p-5 sm:p-6 flex flex-col justify-between relative group bg-white border border-slate-200 shadow-sm">
          {/* Card Header with 3-dots */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <div className="flex items-center gap-2">
              <Activity size={15} className="text-[#4D47D7]" />
              <span className="text-xs font-mono font-bold text-slate-700">
                Micro-charts &bull; Throughput
              </span>
            </div>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <MoreHorizontal size={16} />
            </button>
          </div>

          {/* Spline Wave Chart */}
          <div className="relative py-2">
            <div className="flex items-baseline justify-between mb-2">
              <div className="text-2xl font-black text-slate-900 font-mono">
                14.2<span className="text-xs text-slate-500 font-normal ml-1">k req/s</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                +34.8% &uarr;
              </span>
            </div>

            {/* SVG Wave */}
            <div className="h-28 w-full relative">
              <svg
                viewBox="0 0 300 100"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Primary Linear Gradient for wave fill */}
                  <linearGradient id="primaryWaveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4D47D7" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#4D47D7" stopOpacity="0.0" />
                  </linearGradient>

                  {/* Glow filter */}
                  <filter id="primaryGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Subtle horizontal grid lines */}
                <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(15,23,42,0.06)" strokeDasharray="3 3" />
                <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(15,23,42,0.06)" strokeDasharray="3 3" />
                <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(15,23,42,0.06)" strokeDasharray="3 3" />

                {/* Area under spline */}
                <path
                  d="M 0 70 Q 50 20, 100 55 T 200 30 T 300 45 L 300 100 L 0 100 Z"
                  fill="url(#primaryWaveGrad)"
                />

                {/* Main Glowing Spline Wave */}
                <path
                  d="M 0 70 Q 50 20, 100 55 T 200 30 T 300 45"
                  fill="none"
                  stroke="#4D47D7"
                  strokeWidth="2.5"
                  className="transition-all duration-300"
                />

                {/* Data Points on Peaks */}
                <circle cx="50" cy="35" r="3.5" fill="#ffffff" stroke="#4D47D7" strokeWidth="2" />
                <circle cx="150" cy="40" r="3.5" fill="#ffffff" stroke="#4D47D7" strokeWidth="2" />
                <circle cx="200" cy="30" r="4.5" fill="#4D47D7" className="animate-ping opacity-75" />
                <circle cx="200" cy="30" r="4" fill="#ffffff" stroke="#4D47D7" strokeWidth="2" />
                <circle cx="280" cy="42" r="3.5" fill="#ffffff" stroke="#4D47D7" strokeWidth="2" />
              </svg>
            </div>

            <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-100">
              <span>00:00 UTC</span>
              <span>08:00 UTC</span>
              <span>16:00 UTC</span>
              <span className="text-[#4D47D7] font-bold">LIVE</span>
            </div>
          </div>
        </div>

        {/* Card 2: Micro-charts Stats Counter */}
        <div className="figma-card p-5 sm:p-6 flex flex-col justify-between relative group bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <div className="flex items-center gap-2">
              <Zap size={15} className="text-[#4D47D7]" />
              <span className="text-xs font-mono font-bold text-slate-700">
                Micro-charts &bull; Milestone Totals
              </span>
            </div>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <MoreHorizontal size={16} />
            </button>
          </div>

          <div className="space-y-4 my-auto">
            {/* Stat Item 1 */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  Projects Completed
                </div>
                <div className="text-3xl font-black text-slate-900 font-mono mt-0.5">
                  124<span className="text-[#4D47D7] font-bold">+</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400">Delivery</span>
                <div className="text-xs font-mono font-semibold text-emerald-600 flex items-center gap-1 justify-end mt-0.5">
                  <CheckCircle2 size={12} />
                  <span>100% on-time</span>
                </div>
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  Corporate Clients
                </div>
                <div className="text-3xl font-black text-slate-900 font-mono mt-0.5">
                  98<span className="text-indigo-600 font-bold">+</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400">Retention</span>
                <div className="text-xs font-mono font-semibold text-[#4D47D7] flex items-center gap-1 justify-end mt-0.5">
                  <ShieldCheck size={12} />
                  <span>96.4% recurring</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-400 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span>Verified Ledger Audits</span>
            <span className="text-slate-600 font-semibold">Malaysia & ASEAN</span>
          </div>
        </div>

        {/* Card 3: System Metrics (Radial Speedometer Gauge) */}
        <div className="figma-card p-5 sm:p-6 flex flex-col justify-between relative group bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-[#4D47D7]" />
              <span className="text-xs font-mono font-bold text-slate-700">
                System Metrics &bull; SLA
              </span>
            </div>
            <button className="text-slate-400 hover:text-slate-600 transition-colors">
              <MoreHorizontal size={16} />
            </button>
          </div>

          {/* Radial Speedometer Gauge */}
          <div className="relative flex flex-col items-center justify-center py-2">
            <div className="relative w-44 h-28 flex items-end justify-center overflow-hidden">
              <svg viewBox="0 0 200 120" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="gaugePrimary" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="60%" stopColor="#4D47D7" />
                    <stop offset="100%" stopColor="#3d37c9" />
                  </linearGradient>
                </defs>

                {/* Background arc track */}
                <path
                  d="M 20 105 A 80 80 0 0 1 180 105"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="12"
                  strokeLinecap="round"
                />

                {/* Primary active gauge arc (99.9% fill) */}
                <path
                  d="M 20 105 A 80 80 0 0 1 176 98"
                  fill="none"
                  stroke="url(#gaugePrimary)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />

                {/* Needle indicator point */}
                <circle cx="170" cy="94" r="5" fill="#ffffff" stroke="#4D47D7" strokeWidth="2" />
              </svg>

              {/* Gauge Center Value */}
              <div className="absolute bottom-1 text-center">
                <div className="text-3xl font-black text-slate-900 font-mono tracking-tight">
                  99.9<span className="text-sm font-bold text-[#4D47D7]">%</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">
                  Platform Uptime
                </div>
              </div>
            </div>

            {/* Bottom Status pill */}
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D47D7]/10 border border-[#4D47D7]/20 text-xs font-mono text-[#4D47D7] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4D47D7]" />
              <span>All 48 Nodes Nominal</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-400 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span>Latency: 18ms avg</span>
            <span className="text-emerald-600 font-semibold">Zero Degradation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
