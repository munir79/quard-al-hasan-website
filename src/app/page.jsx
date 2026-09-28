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
        <div className="purple-card p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image: Corporate Executive Boardroom (No People) */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-purple-500/30 group">
              <div className="aspect-[16/10] w-full bg-[#120626] relative overflow-hidden">
                <img
                  src="/images/corporate_boardroom.jpg"
                  alt="Qardh Al Hasan Executive Boardroom & Telemetry Suite in Kuala Lumpur"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090314]/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-fuchsia-400 font-bold">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-xs font-mono font-bold text-purple-300">
                <Server size={13} className="text-fuchsia-400" />
                <span>Enterprise Infrastructure</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Architected For{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                  Reliability & Scale
                </span>
              </h2>

              <p className="text-sm text-purple-200/80 leading-relaxed font-normal">
                Our operations hub delivers continuous Shariah-compliant ledger validation, secure custom software architecture, and high-frequency fintech systems engineered in Malaysia for local and international markets.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/20">
                  <div className="text-2xl font-black text-white font-mono">99.9%</div>
                  <div className="text-xs text-purple-300/80 font-mono mt-0.5">Platform Uptime SLA</div>
                </div>
                <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/20">
                  <div className="text-2xl font-black text-white font-mono">&lt; 20ms</div>
                  <div className="text-xs text-purple-300/80 font-mono mt-0.5">API Response Latency</div>
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
          6. EXECUTIVE LEADERSHIP (Royal Purple Dossiers + Office Architecture Photo)
          ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-fuchsia-400 uppercase tracking-widest mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#d946ef]" />
              Executive Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Leadership &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                Founders
              </span>
            </h2>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-300 hover:text-white transition-colors"
          >
            <span>Full Directory</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {leadershipData.map((leader) => (
            <div
              key={leader.name}
              className="purple-card p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/30">
                    {leader.badge}
                  </span>
                  <span className="text-xs font-mono text-purple-300/70">
                    {leader.shares}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {leader.name}
                </h3>
                <div className="text-xs font-mono text-fuchsia-300 mb-4">
                  {leader.role} &bull; {leader.residence}
                </div>

                <p className="text-xs text-purple-200/80 leading-relaxed mb-6 font-normal">
                  {leader.background}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-purple-500/20">
                {leader.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          7. FINAL CALL TO ACTION BANNER WITH KL HEADQUARTERS ARCHITECTURE IMAGE
          ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#170836] via-[#240c54] to-[#170836] p-8 sm:p-12 text-white overflow-hidden border border-purple-400/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-xs font-mono font-bold uppercase tracking-wider text-purple-200 border border-purple-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                <span>Initiate Strategic Collaboration</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-white">
                Ready to Accelerate Your Business with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                  Qardh Al Hasan Fintech?
                </span>
              </h2>

              <p className="text-sm text-purple-200/90 leading-relaxed font-normal">
                Whether you need custom software engineering, Shariah fintech platforms, high-speed website development, or a certified offshore engineering team, our specialists are ready to execute.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/contact"
                  className="btn-purple-primary inline-flex items-center gap-2.5 text-sm"
                >
                  <span>Schedule Free Discovery</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="btn-purple-secondary inline-flex items-center gap-2 text-sm"
                >
                  <PhoneCall size={14} className="text-fuchsia-400" />
                  <span>Call {companyInfo.phone}</span>
                </a>
              </div>

              <div className="pt-2 text-xs font-mono text-purple-300/80">
                📍 {companyInfo.address}
              </div>
            </div>

            {/* Architecture Exterior Image (Verified Zero People) */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-purple-500/30">
              <div className="aspect-[4/3] w-full bg-[#120626] relative overflow-hidden">
                <img
                  src="/images/corporate_boardroom.jpg"
                  alt="Qardh Al Hasan Executive Governance Center in Brickfields, Kuala Lumpur"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090314]/80 via-transparent to-transparent pointer-events-none" />
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
