import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Target,
  ArrowRight,
  Building,
} from "lucide-react";
import { companyInfo, companyValues } from "@/data/companyData";

export const metadata = {
  title: "About Us | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Learn about Qardh Al Hasan Fintech Sdn. Bhd., our vision, mission, ethical principles, and operations in Kuala Lumpur, Malaysia.",
};

export default function AboutPage() {
  return (
    <div className="w-full space-y-12 sm:space-y-16 pb-16 overflow-hidden">
      {/* =========================================================================
          1. HERO BANNER: Full Clear Boardroom Image with Aesthetic Frosted Glass Overlay
          ========================================================================= */}
      <section className="relative w-full min-h-[460px] sm:min-h-[500px] flex items-center border-b border-slate-200 overflow-hidden group">
        {/* Full-Bleed Clear Boardroom Background Image */}
        <img
          src="/images/corporate_boardroom.jpg"
          alt="Executive Boardroom in Kuala Lumpur"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000"
        />

        {/* Silky Frosted Gradient: leaves image full and crystal-clear on the right, providing high-contrast readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/20 sm:to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4D47D7]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Text Container Centered Over Image */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-2xl space-y-4 text-left bg-white/90 sm:bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/80 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D47D7]/10 border border-[#4D47D7]/20 text-xs font-mono font-bold uppercase tracking-wider text-[#4D47D7]">
              <Sparkles size={13} className="text-[#4D47D7]" />
              <span>Identity & Heritage</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] via-[#6366f1] to-[#0ea5e9]">
                Our Company
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {companyInfo.aboutSummary}
            </p>
          </div>
        </div>

        {/* Floating Badge on the bottom right */}
        <div className="hidden md:flex absolute bottom-6 right-8 z-10 items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/80 shadow-lg text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-slate-800 font-bold">Executive Boardroom</span>
          <span className="text-[#4D47D7] font-semibold">&bull; Kuala Lumpur HQ</span>
        </div>
      </section>

      {/* =========================================================================
          CENTERED PAGE CONTENT
          ========================================================================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* 2. Vision & Mission Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          <div className="bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/40 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#4D47D7]/40 hover:shadow-xl transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#4D47D7]/10 text-[#4D47D7] border border-[#4D47D7]/20 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4D47D7] block">
                Strategic Vision
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Our Vision
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {companyInfo.vision}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Location: Malaysia</span>
              <span className="text-[#4D47D7] font-bold">Value-Driven</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/40 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#4D47D7]/40 hover:shadow-xl transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#4D47D7]/10 text-[#4D47D7] border border-[#4D47D7]/20 flex items-center justify-center">
                <Target size={20} />
              </div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4D47D7] block">
                Execution
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Our Mission
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {companyInfo.mission}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Focus: Startups & Enterprise</span>
              <span className="text-[#4D47D7] font-bold">Continuous Support</span>
            </div>
          </div>
        </section>

        {/* 3. Operations Hub: Side-by-Side Flex Layout with Cool Gradient */}
        <section className="bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/30 p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-md relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Text */}
            <div className="flex-1 text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4D47D7]/10 border border-[#4D47D7]/20 text-xs font-mono font-bold text-[#4D47D7]">
                <Building size={13} className="text-[#4D47D7]" />
                <span>Technology Operations Base</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Kuala Lumpur Operations Center
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-lg">
                Strategically based in Brickfields, Kuala Lumpur, our engineering facility houses high-speed server clusters, continuous deployment desks, and client collaboration suites.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-xs">
                  Certified Infrastructure
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-xs">
                  24/7 Monitoring & Support
                </span>
              </div>
            </div>

            {/* Right Scaled-Down Image with High-Definition Frame */}
            <div className="w-full max-w-sm lg:w-[380px] shrink-0 mx-auto lg:mx-0">
              <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/11] bg-slate-100 shadow-md p-1 bg-white">
                <img
                  src="/images/hero_fintech_desk.jpg"
                  alt="Technology Operations Hub in Kuala Lumpur"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Values Section */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#4D47D7] font-bold">
              Core Beliefs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Ethical Values & Innovation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Guiding every software platform, web architecture, and client collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {companyValues.map((val) => (
              <div
                key={val.title}
                className="purple-card p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#4D47D7]/30 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-[#4D47D7]/10 text-[#4D47D7] border border-[#4D47D7]/20 flex items-center justify-center mb-4">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4D47D7] px-2 py-0.5 rounded-full bg-[#4D47D7]/10 border border-[#4D47D7]/20 inline-block mb-2">
                  {val.badge}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. High Impact Startup CTA Box */}
        <section className="text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#4D47D7] via-[#5A54EA] to-[#3E38CE] text-white space-y-4 shadow-xl shadow-[#4D47D7]/20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Partner with an Ethical & Proven IT Innovator
          </h2>
          <p className="text-xs sm:text-sm text-indigo-100 max-w-lg mx-auto font-normal">
            Contact our team in Brickfields, Kuala Lumpur, Malaysia to explore tailored web, software, and fintech solutions.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#4D47D7] font-bold text-sm transition-all shadow-md"
            >
              <span>Get in Touch with Us</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}