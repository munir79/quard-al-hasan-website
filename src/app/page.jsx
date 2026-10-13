import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Mail, MapPin, Server, Award, CheckCircle2 } from "lucide-react";
import HeroBrochure from "@/components/brochure/HeroBrochure";
import WhyChooseUs from "@/components/brochure/WhyChooseUs";
import ServicesAndAboutBrochure from "@/components/brochure/ServicesAndAboutBrochure";
import TelemetryMetrics from "@/components/figma/TelemetryMetrics";
import { companyInfo, leadershipData } from "@/data/companyData";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24 overflow-hidden pb-16">
      {/* =========================================================================
          1. HERO SECTION: CLEAN LEFT TEXT & CLEAN REALISTIC RIGHT IMAGE (NO PEOPLE)
          ========================================================================= */}
      <HeroBrochure />

      {/* =========================================================================
          2. INFRASTRUCTURE & DATA ARCHITECTURE SHOWCASE (NO PEOPLE IMAGE)
          ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/40 border border-slate-200/90 shadow-lg">
          {/* Ambient inner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Image: Corporate Executive Boardroom (No People) - Full & Clear */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-200/80 group shadow-md bg-white">
              <div className="aspect-[16/10] w-full bg-slate-100 relative overflow-hidden">
                <img
                  src="/images/corporate_boardroom.jpg"
                  alt="Qardh Al Hasan Executive Boardroom & Telemetry Suite in Kuala Lumpur"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-bold">
                    Command & Strategy Suite
                  </span>
                  <div className="text-sm font-black">
                    Brickfields Corporate Governance Center
                  </div>
                </div>
              </div>
            </div>

            {/* Content Info */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D47D7]/10 border border-[#4D47D7]/20 text-xs font-mono font-bold text-[#4D47D7]">
                <Server size={13} className="text-[#4D47D7]" />
                <span>Enterprise Infrastructure</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                Architected For{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] via-[#6366f1] to-[#0ea5e9]">
                  Reliability & Scale
                </span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Our operations hub delivers continuous Shariah-compliant ledger validation, secure custom software architecture, and high-frequency fintech systems engineered in Malaysia for local and international markets.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-xs">
                  <div className="text-2xl font-black text-slate-900 font-mono">99.9%</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">Platform Uptime SLA</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-xs">
                  <div className="text-2xl font-black text-slate-900 font-mono">&lt; 20ms</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">API Response Latency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHY CHOOSE US: 4 CIRCULAR BADGES + QUOTE CARD
          ========================================================================= */}
      <WhyChooseUs />

      {/* =========================================================================
          4. OUR SERVICES & ABOUT US (7 SERVICES + OFFICIAL COPY)
          ========================================================================= */}
      <ServicesAndAboutBrochure />

      {/* =========================================================================
          5. SYSTEM TELEMETRY & LIVE PERFORMANCE METRICS
          ========================================================================= */}
      <TelemetryMetrics />

      {/* =========================================================================
          6. EXECUTIVE LEADERSHIP (Clean Dossiers + Office Architecture Photo)
          ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden bg-gradient-to-br from-slate-50/90 via-indigo-50/30 to-purple-50/20 border border-slate-200/90 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4D47D7] uppercase tracking-widest mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4D47D7]" />
                Executive Governance
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Leadership &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] via-[#6366f1] to-[#0ea5e9]">
                  Founders
                </span>
              </h2>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#4D47D7] hover:text-[#3d37c9] transition-colors"
            >
              <span>Full Directory</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
            {leadershipData.map((leader) => (
              <div
                key={leader.name}
                className="p-6 flex flex-col justify-between group relative overflow-hidden bg-white/90 backdrop-blur-sm border border-slate-200/90 hover:border-[#4D47D7]/40 rounded-2xl transition-all shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#4D47D7]/10 text-[#4D47D7] border border-[#4D47D7]/20">
                      {leader.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {leader.shares}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#4D47D7] transition-colors">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-mono text-[#4D47D7] font-semibold mb-4">
                    {leader.role} &bull; {leader.residence}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                    {leader.background}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                  {leader.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FINAL CALL TO ACTION BANNER WITH HIGH ENERGY STARTUP COLOR
          ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#4D47D7] via-[#5A54EA] to-[#3E38CE] p-8 sm:p-12 text-white overflow-hidden shadow-2xl shadow-[#4D47D7]/25">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-xs font-mono font-bold uppercase tracking-wider text-white border border-white/20 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>Initiate Strategic Collaboration</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white">
                Ready to Accelerate Your Business with{" "}
                <span className="text-indigo-100 underline decoration-white/40 underline-offset-4">
                  Qardh Al Hasan Fintech?
                </span>
              </h2>

              <p className="text-sm text-indigo-100/90 leading-relaxed font-normal">
                Whether you need custom software engineering, Shariah fintech platforms, high-speed website development, or a certified offshore engineering team, our specialists are ready to execute.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white text-[#4D47D7] hover:bg-slate-50 font-bold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Schedule Free Discovery</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-sm backdrop-blur-md transition-all"
                >
                  <PhoneCall size={14} className="text-indigo-200" />
                  <span>Call {companyInfo.phone}</span>
                </a>
              </div>

              <div className="pt-2 text-xs font-mono text-indigo-200">
                📍 {companyInfo.address}
              </div>
            </div>

            {/* Architecture Exterior Image (Verified Zero People) */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/20 shadow-xl">
              <div className="aspect-[4/3] w-full bg-slate-900 relative overflow-hidden">
                <img
                  src="/images/corporate_boardroom.jpg"
                  alt="Qardh Al Hasan Executive Governance Center in Brickfields, Kuala Lumpur"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 z-10 text-[11px] font-mono text-white font-bold">
                  Brickfields Corporate Operations Center &bull; Kuala Lumpur
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
