"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Server,
  Zap,
  Globe2,
  Lock,
  Cpu,
  TrendingUp,
  Play,
} from "lucide-react";

export default function HeroFlairs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60 pt-12 sm:pt-16 pb-16 lg:pb-24 border-b border-slate-200/70">
      {/* Background Decorative Tech Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: FlairsTech-Style Direct Headline & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-indigo-100 shadow-xs text-xs font-semibold text-slate-800">
              <span className="flex h-2 w-2 rounded-full bg-[#7C3AED] animate-pulse" />
              <span className="text-[#4F46E5] font-bold">Scale-Smart Technology</span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-slate-600">FinTech & ICT Partner</span>
            </div>

            {/* FlairsTech Signature Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Scale Smart Your Systems.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#2563EB]">
                Succeed with AI-Powered
              </span>{" "}
              Technology & FinTech Innovation.
            </h1>

            {/* FlairsTech Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              Join 100+ businesses who drive measurable results daily from one accountable partner they trust. We engineer high-throughput software architectures, Shariah-compliant financial systems, and results-focused digital solutions.
            </p>

            {/* Action Buttons (FlairsTech Dual Pill Style) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#2563EB] hover:from-[#6D28D9] hover:via-[#4338CA] hover:to-[#1D4ED8] shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Schedule a Call</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-xs transition-colors"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* FlairsTech Trust Indicators Row */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#4F46E5] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  100% Shariah Compliant
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#4F46E5] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  250+ Delivered Systems
                </span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 size={16} className="text-[#4F46E5] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  Brickfields, KL Hub
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: FlairsTech Interactive Architecture Card (5 Cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Glow backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED]/20 to-[#2563EB]/20 rounded-3xl blur-xl opacity-75" />

            {/* Main Interactive Card */}
            <div className="relative bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl p-6 sm:p-7 space-y-5">
              
              {/* Header: Live System Status */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                    Qardh Live Architecture
                  </span>
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  99.98% SLA
                </span>
              </div>

              {/* Module 1: FinTech Core Engine */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#4F46E5]" />
                    Shariah-Compliant Microfinance Core
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#4F46E5] bg-indigo-50 px-2 py-0.5 rounded">
                    0% RIBA
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Ledger Integrity: Verified</span>
                  <span className="text-emerald-600 font-bold">Audit Cleared</span>
                </div>
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] h-full w-[94%]" />
                </div>
              </div>

              {/* Module 2: Enterprise Software Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                    <Server size={12} className="text-blue-500" />
                    <span>Cloud API Latency</span>
                  </div>
                  <div className="text-xl font-black text-slate-900 mt-1 font-mono">
                    14ms
                  </div>
                  <div className="text-[10px] text-emerald-600 font-medium">
                    &uarr; Ultra-Low Latency
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                    <Lock size={12} className="text-[#7C3AED]" />
                    <span>Data Encryption</span>
                  </div>
                  <div className="text-xl font-black text-slate-900 mt-1 font-mono">
                    AES-256
                  </div>
                  <div className="text-[10px] text-indigo-600 font-medium">
                    Bank-Grade Security
                  </div>
                </div>
              </div>

              {/* Module 3: Global Delivery Hub */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-50/70 to-blue-50/70 border border-indigo-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white shadow-xs text-[#4F46E5]">
                    <Globe2 size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Kuala Lumpur Engineering Hub
                    </div>
                    <div className="text-[11px] text-slate-600">
                      Global Delivery &bull; Local Malaysian Presence
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-700 bg-white px-2 py-1 rounded shadow-xs border border-slate-100">
                  10+ Yrs Exp
                </span>
              </div>

              {/* Bottom Quick Call Prompt */}
              <div className="pt-2 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Ready to discuss your project?</span>
                <Link
                  href="/contact"
                  className="font-bold text-[#4F46E5] hover:text-[#4338CA] inline-flex items-center gap-1"
                >
                  <span>Book 30-min call</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
