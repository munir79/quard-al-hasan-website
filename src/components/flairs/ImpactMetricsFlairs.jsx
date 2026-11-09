import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Years of Collective Experience",
    detail: "Engineering enterprise-grade platforms",
  },
  {
    value: "250+",
    label: "Digital Projects Delivered",
    detail: "Spanning FinTech, ERPs, and Web applications",
  },
  {
    value: "99%",
    label: "Client Satisfaction Rating",
    detail: "Measured by verified client retention & feedback",
  },
  {
    value: "20+",
    label: "Senior Engineers & Specialists",
    detail: "Full-stack architects & Shariah consultants",
  },
];

export default function ImpactMetricsFlairs() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0B0F19] text-white overflow-hidden">
      {/* Background Tech Mesh & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#4F46E5_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-800/60 text-xs font-mono font-bold text-indigo-400">
              <Sparkles size={13} />
              <span>Measurable Enterprise Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Data-Backed Performance.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">
                Proven Reliability.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              Every system we deploy is calibrated for maximum throughput, bank-level security, and long-term business scalability.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-indigo-500/50 hover:bg-white/[0.07] transition-all duration-300 space-y-3"
            >
              <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300">
                {stat.value}
              </div>
              <div className="text-base font-bold text-white leading-snug">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed font-normal pt-2 border-t border-white/[0.06]">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Shariah Assurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-purple-950/60 border border-indigo-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-slate-200">
              Zero Interest (Riba) Architecture Guaranteed across all FinTech Ledgers
            </span>
          </div>
          <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest">
            SSM Malaysia Registered
          </span>
        </div>

      </div>
    </section>
  );
}

