"use client";

import Link from "next/link";
import { ArrowUpRight, Cpu, Layers, ExternalLink, ShieldCheck, Wifi } from "lucide-react";

export default function FeaturedProjects() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            Selected Works
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>View Architecture Catalog</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* 3 Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Card 1: Enterprise Microfinance Platform */}
        <div className="figma-card p-6 flex flex-col justify-between group relative overflow-hidden">
          {/* Card Top Preview */}
          <div>
            <div className="w-full h-44 rounded-xl bg-[#090d15] border border-white/[0.08] p-4 relative overflow-hidden flex flex-col justify-between mb-5 group-hover:border-cyan-400/30 transition-all">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80" />
                  <span className="text-[11px] font-mono text-slate-300 font-bold">
                    Qardh Microfinance Engine
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Active V3.2
                </span>
              </div>

              {/* Wireframe Mockup UI */}
              <div className="space-y-2 py-1">
                <div className="flex justify-between items-center bg-white/[0.03] p-2 rounded-lg border border-white/[0.04]">
                  <span className="text-[10px] font-mono text-slate-400">Total Benevolent Capital</span>
                  <span className="text-xs font-mono font-bold text-white">RM 24,500,000</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="h-8 rounded bg-cyan-500/10 border border-cyan-400/20 flex flex-col justify-center px-2">
                    <span className="text-[8px] font-mono text-slate-400">Borrowers</span>
                    <span className="text-[10px] font-mono font-bold text-cyan-300">14,200</span>
                  </div>
                  <div className="h-8 rounded bg-white/[0.03] border border-white/[0.05] flex flex-col justify-center px-2">
                    <span className="text-[8px] font-mono text-slate-400">Default Rate</span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400">0.02%</span>
                  </div>
                  <div className="h-8 rounded bg-white/[0.03] border border-white/[0.05] flex flex-col justify-center px-2">
                    <span className="text-[8px] font-mono text-slate-400">Riba Free</span>
                    <span className="text-[10px] font-mono font-bold text-indigo-300">100%</span>
                  </div>
                </div>
              </div>

              <div className="text-[9px] font-mono text-slate-500">
                Ledger Sync: Real-time Block Verification
              </div>
            </div>

            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
              Fintech Platform
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
              Islamic Microfinance Core
            </h3>

            <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
              Zero-interest benevolent loan platform supporting high-volume disbursements, identity verification (e-KYC), and automated repayment tracking.
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]">
                Next.js
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]">
                PostgreSQL
              </span>
            </div>
            <Link
              href="/services"
              className="text-xs font-mono font-bold text-slate-300 group-hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <span>Case Detail</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Project Card 2: Sleek Metallic Silver Fintech Card (Variant 2 from Figma) */}
        <div className="figma-card p-6 flex flex-col justify-between group relative overflow-hidden border-cyan-400/20">
          <div>
            {/* Metallic Brushed Silver Credit Card Mockup */}
            <div className="w-full h-44 rounded-xl p-4 relative overflow-hidden mb-5 flex flex-col justify-between shadow-2xl transition-all duration-300 group-hover:scale-[1.02] border border-white/20 bg-gradient-to-tr from-[#1b2230] via-[#2c384e] to-[#43526e]">
              {/* Metallic Sheen Reflections */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none" />
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl pointer-events-none" />

              {/* Card Top: Chip & Contactless */}
              <div className="flex items-center justify-between relative z-10">
                {/* Gold/Silver EMV Chip */}
                <div className="w-10 h-7 rounded bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500 border border-amber-400/80 relative flex items-center justify-center shadow-inner">
                  <div className="w-6 h-4 border border-amber-700/40 rounded-sm grid grid-cols-2" />
                </div>

                <div className="flex items-center gap-2 text-slate-300">
                  <Wifi size={16} className="rotate-90 text-cyan-300" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-white/90">
                    PLATINUM
                  </span>
                </div>
              </div>

              {/* Card Number */}
              <div className="relative z-10 my-auto">
                <div className="font-mono text-sm tracking-[0.22em] text-white font-black drop-shadow-md">
                  •••• &nbsp; 4892 &nbsp; 8019 &nbsp; 2044
                </div>
              </div>

              {/* Card Bottom: Holder Name & Expiry */}
              <div className="flex items-end justify-between relative z-10 text-[10px] font-mono text-slate-300">
                <div>
                  <div className="text-[8px] text-slate-400 uppercase tracking-widest">
                    Authorized Cardholder
                  </div>
                  <div className="font-bold text-white tracking-wider mt-0.5">
                    MD MOMINUL ISLAM
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[8px] text-slate-400 uppercase tracking-widest">
                    Exp / Shariah
                  </div>
                  <div className="font-bold text-cyan-300 tracking-wider mt-0.5">
                    09/30 &bull; 100% RIBA-FREE
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
              Card & Payment Engine
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
              Sovereign Shariah Card Infrastructure
            </h3>

            <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
              Virtual and physical debit card provisioning platform integrated with automated spending controls, merchant category restrictions, and instant Islamic clearing.
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]">
                Card SDK
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]">
                PCI-DSS
              </span>
            </div>
            <Link
              href="/services"
              className="text-xs font-mono font-bold text-slate-300 group-hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <span>Inspect API</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

        {/* Project Card 3: Enterprise Web & Software Portal Engine */}
        <div className="figma-card p-6 flex flex-col justify-between group relative overflow-hidden">
          <div>
            <div className="w-full h-44 rounded-xl bg-[#090d15] border border-white/[0.08] p-4 relative overflow-hidden flex flex-col justify-between mb-5 group-hover:border-cyan-400/30 transition-all">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                <div className="flex items-center gap-1.5">
                  <Cpu size={14} className="text-cyan-400" />
                  <span className="text-[11px] font-mono text-slate-300 font-bold">
                    Enterprise Portal Core
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                  System Active
                </span>
              </div>

              {/* Server Nodes Wireframe */}
              <div className="grid grid-cols-2 gap-2 py-1">
                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="flex justify-between text-[9px] font-mono text-slate-400">
                    <span>Core Platform</span>
                    <span className="text-emerald-400">100%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-cyan-400 h-full rounded-full w-[98%]" />
                  </div>
                </div>

                <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05] space-y-1">
                  <div className="flex justify-between text-[9px] font-mono text-slate-400">
                    <span>API Gateway</span>
                    <span className="text-emerald-400">100%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-indigo-400 h-full rounded-full w-[94%]" />
                  </div>
                </div>
              </div>

              <div className="text-[9px] font-mono text-slate-500 flex justify-between">
                <span>Data Security: 256-bit AES</span>
                <span className="text-cyan-400">0 latency spikes</span>
              </div>
            </div>

            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
              Software Engineering
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
              High-Speed Web Enterprise Portal
            </h3>

            <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
              Automated high-throughput portal architecture for high-security commercial networks, ensuring zero downtime and sub-second load times.
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <div className="flex gap-1.5">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]">
                Kubernetes
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]">
                Terraform
              </span>
            </div>
            <Link
              href="/services"
              className="text-xs font-mono font-bold text-slate-300 group-hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <span>System Specs</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
