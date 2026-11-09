import Link from "next/link";
import RouteHeroBanner from "@/components/flairs/RouteHeroBanner";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import {
  ShieldCheck,
  Target,
  ArrowRight,
  Building2,
  Award,
  MapPin,
  Cpu,
  Globe2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { companyInfo, companyValues } from "@/data/companyData";

export const metadata = {
  title: "About Us | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Learn about Qardh Al Hasan Fintech Sdn. Bhd., our vision, mission, ethical principles, and technology operations in Kuala Lumpur, Malaysia.",
};

const credentials = [
  { label: "Corporate Registration", value: "Fintech Sdn. Bhd. (SSM Malaysia)" },
  { label: "Headquarters", value: "Brickfields, Kuala Lumpur, Malaysia" },
  { label: "Industry Focus", value: "FinTech, Software, Web & ICT Growth" },
  { label: "Compliance Benchmark", value: "100% Shariah Compliant Architecture" },
];

// Shared styling (dark, matching the hero)
const card =
  "rounded-2xl bg-white/[0.03] border border-white/10 transition-[background-color,border-color,box-shadow] duration-300 hover:bg-white/[0.06] hover:border-blue-400/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)]";

const sectionGrid = {
  backgroundImage:
    "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
  maskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 100%)",
};

// 3 columns: left, rise from below, right (so the cards meet in the middle)
const colDirection = (idx) => ["left", "up", "right"][idx % 3];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#0A0F1C] text-white">
      {/* 1. Hero Banner */}
      <RouteHeroBanner
        badge="Identity & Ethical Heritage"
        title="Pioneering Ethical Technology &"
        titleHighlight="FinTech in Malaysia"
        description={companyInfo.aboutSummary}
        breadcrumbs={[{ label: "About Us" }]}
        image="/images/kl_office_headquarters.jpg"
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white">
            <Building2 size={16} className="text-[#38BDF8]" />
            Brickfields, Kuala Lumpur
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white">
            <ShieldCheck size={16} className="text-emerald-400" />
            SSM Registered Sdn. Bhd.
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white">
            <Award size={16} className="text-[#60A5FA]" />
            10+ Years Combined Expertise
          </span>
        </div>
      </RouteHeroBanner>

      {/* 2. Vision (from the left) & Mission (from the right) */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.3] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-32 right-0 h-[460px] w-[640px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[520px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision */}
            <Reveal from="left" className="h-full">
              <div className={`${card} h-full p-8 sm:p-10 space-y-5`}>
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 flex items-center justify-center">
                  <Target size={26} />
                </div>
                <div className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                  Strategic Vision
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  Leading Ethical FinTech in ASEAN
                </h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  {companyInfo.vision}
                </p>
              </div>
            </Reveal>

            {/* Mission */}
            <Reveal from="right" className="h-full">
              <div className={`${card} h-full p-8 sm:p-10 space-y-5`}>
                <div className="w-14 h-14 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center">
                  <Cpu size={26} />
                </div>
                <div className="text-sm font-semibold text-sky-400 uppercase tracking-widest">
                  Corporate Mission
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  Empowering Scalable Business Success
                </h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  {companyInfo.mission}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="relative py-16 sm:py-24 border-t border-white/10 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.25] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-32 left-0 h-[420px] w-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup className="max-w-3xl space-y-4 mb-12 sm:mb-16">
            <RevealItem from="left">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Guiding Principles
              </div>
            </RevealItem>
            <RevealItem from="left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Our Core{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#60A5FA]">
                  Values
                </span>
              </h2>
            </RevealItem>
            <RevealItem from="left">
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                Every system we write, audit, and deploy reflects our dedication to ethical accountability and engineering excellence.
              </p>
            </RevealItem>
          </RevealGroup>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {companyValues.map((val, idx) => (
              <Reveal key={idx} from={colDirection(idx)} className="h-full">
                <div className={`${card} h-full p-8 space-y-4`}>
                  <span className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-400/20">
                    {val.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-snug">{val.title}</h3>
                  <p className="text-base text-slate-300 leading-relaxed">{val.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal from="up" className="mt-12 text-center">
            <Link
              href="/why-us"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore The Qardh Al Hasan Edge</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. Proprietary AI Innovation & Ethical Engine (Qardh AI) */}
      <section className="relative py-16 sm:py-24 border-t border-white/10 overflow-hidden bg-[#080B14]">
        <div aria-hidden className="absolute inset-0 opacity-[0.25] pointer-events-none" style={sectionGrid} />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[420px] w-[600px] rounded-full bg-gradient-to-r from-purple-600/10 via-indigo-600/15 to-blue-600/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: AI Philosophy & Engine Details */}
            <RevealGroup className="lg:col-span-7 space-y-6">
              <RevealItem from="left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/25 text-xs font-mono font-bold text-purple-300">
                  <Sparkles size={14} className="text-purple-400" />
                  <span>AI Innovation & Automation</span>
                </div>
              </RevealItem>
              <RevealItem from="left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Business, Simplified with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB]">
                    Qardh AI
                  </span>
                </h2>
              </RevealItem>
              <RevealItem from="left">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Our vision is to simplify complex enterprise workflows using intelligent automation. We engineered proprietary AI helpers that power our managed software and Shariah FinTech operations—multiplying speed, precision, and ethical governance.
                </p>
              </RevealItem>

              <div className="space-y-3 pt-2">
                {[
                  "Automated zero-error Shariah ledger & interest-free calculations",
                  "AI-assisted code generation, automated telemetry, and 24/7 security auditing",
                  "Continuous data intelligence accelerating reporting throughput by over 60%",
                ].map((point, pIdx) => (
                  <RevealItem key={pIdx} from="left">
                    <div className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                      <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  </RevealItem>
                ))}
              </div>

              <RevealItem from="up" className="pt-2">
                <Link
                  href="/services/fintech"
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-md shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Explore FinTech AI Solutions</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </RevealItem>
            </RevealGroup>

            {/* Right: Live AI Orchestration Metric Card */}
            <Reveal from="right" className="lg:col-span-5">
              <div className={`${card} p-8 sm:p-9 space-y-6 relative overflow-hidden`}>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                      Qardh AI Live Metrics
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/20 text-indigo-300 font-bold">
                    KL NODE
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <div className="text-3xl font-black font-mono text-white">0.00%</div>
                    <div className="text-xs text-slate-400">Riba Audit Discrepancies</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                    <div className="text-3xl font-black font-mono text-cyan-400">3x</div>
                    <div className="text-xs text-slate-400">Compliance Audit Speed</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Data Reporting Speed:</span>
                  <span className="text-emerald-400 font-bold">60% Faster</span>
                </div>

                <p className="text-xs text-slate-400 italic leading-relaxed text-center pt-1">
                  Engineered in Brickfields, Kuala Lumpur for ethical transparency and ASEAN enterprise throughput.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 5. Headquarters & Governance (text from the left, card from the right) */}
      <section className="relative py-16 sm:py-24 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#0D1730] to-[#0A0F1C] pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[420px] w-[620px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <RevealGroup className="lg:col-span-7 space-y-5">
              <RevealItem from="left">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 uppercase tracking-widest">
                  <MapPin size={16} />
                  <span>Malaysian Operations & Headquarters</span>
                </div>
              </RevealItem>
              <RevealItem from="left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Operating from the Heart of Kuala Lumpur
                </h2>
              </RevealItem>
              <RevealItem from="left">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Located in Brickfields, Kuala Lumpur, Qardh Al Hasan Fintech Sdn. Bhd. acts as an innovation bridge connecting regional enterprises, Islamic microfinance entities, and SMEs with modern cloud computing.
                </p>
              </RevealItem>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cred, idx) => (
                  <RevealItem key={idx} from="left">
                    <div className="h-full p-5 rounded-xl bg-white/[0.04] border border-white/10">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {cred.label}
                      </div>
                      <div className="text-base font-semibold text-white mt-1.5 leading-snug">
                        {cred.value}
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </div>
            </RevealGroup>

            <Reveal from="right" className="lg:col-span-5">
              <div className={`${card} p-8 sm:p-10 space-y-5 text-center`}>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] flex items-center justify-center text-white shadow-[0_4px_25px_rgba(117,61,237,0.35)]">
                  <Globe2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Global Standards, Local Feel</h3>
                <p className="text-base text-slate-300 leading-relaxed">
                  Direct phone lines, face-to-face consultations in Kuala Lumpur, and transparent delivery SLAs.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <span>Connect with Our Leadership</span>
                    <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Pre-Footer Call to Action (Matching User Reference Design) */}
      <section className="relative py-20 sm:py-28 text-center overflow-hidden bg-[#0B0F19] border-t border-white/10">
        {/* Tech Dot Grid Matrix matching user reference */}
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        
        {/* Ambient subtle violet-indigo center radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[750px] rounded-full bg-gradient-to-r from-purple-600/15 via-indigo-600/20 to-blue-600/15 blur-[120px] pointer-events-none" />

        <RevealGroup className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <RevealItem from="left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Ready to Partner with an Accountable Tech Leader?
            </h2>
          </RevealItem>
          <RevealItem from="right">
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a confidential 30-minute discovery consultation with our technical leadership in Kuala Lumpur.
            </p>
          </RevealItem>
          <RevealItem from="up" className="pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight size={19} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </RevealItem>
        </RevealGroup>
      </section>
    </div>
  );
}