"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Palette,
  TrendingUp,
  Search,
  Globe,
  Share2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { companyInfo } from "@/data/companyData";

const brochureServices = [
  {
    title: "FinTech",
    icon: ShieldCheck,
    tag: "Shariah Core",
    desc: "Ethical Islamic banking, microfinance ledgers, and zero-riba payment systems.",
  },
  {
    title: "Software Development",
    icon: Cpu,
    tag: "Custom Systems",
    desc: "Enterprise ERPs, CRM platforms, and high-throughput microservices architecture.",
  },
  {
    title: "Graphics Design",
    icon: Palette,
    tag: "Branding & UI/UX",
    desc: "Complete visual identities, design systems, and engaging web/mobile UI kits.",
  },
  {
    title: "Digital Marketing",
    icon: TrendingUp,
    tag: "Performance Ads",
    desc: "Targeted Google Ads, Meta funnels, and high-conversion omnichannel campaigns.",
  },
  {
    title: "SEO Services",
    icon: Search,
    tag: "Search Authority",
    desc: "Algorithmic technical SEO, keyword strategy, and top-tier Google rankings.",
  },
  {
    title: "Website Development",
    icon: Globe,
    tag: "High-Speed Portals",
    desc: "Next.js & React enterprise portals optimized for Core Web Vitals.",
  },
  {
    title: "Social Media Management",
    icon: Share2,
    tag: "Community Growth",
    desc: "Viral brand storytelling, content creation, and active multi-channel engagement.",
  },
];

export default function ServicesAndAboutBrochure() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. OUR SERVICES (matching brochure right panel) */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4D47D7] uppercase tracking-widest mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4D47D7]" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] via-[#6366f1] to-[#0ea5e9]">
                Services
              </span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#4D47D7] hover:text-[#3d37c9] transition-colors"
          >
            <span>Compare full tech stacks</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 7 Services Grid with Brochure Circular Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {brochureServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-indigo-50/20 border border-slate-200/90 hover:border-[#4D47D7]/40 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  {/* Circular Brand Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#4D47D7] flex items-center justify-center text-white shadow-md shadow-[#4D47D7]/30 group-hover:scale-105 transition-all duration-300 mb-4">
                    <IconComponent size={22} className="stroke-[2.2]" />
                  </div>

                  <span className="text-[10px] font-mono text-[#4D47D7] font-bold uppercase tracking-wider block mb-1">
                    {service.tag}
                  </span>

                  <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-[#4D47D7] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                  <span className="text-[10px] font-mono text-slate-400">Production Ready</span>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#4D47D7] hover:text-[#3d37c9] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Details</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 8th Card: Custom Consultation Card */}
          <div className="p-5 sm:p-6 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#f2f1ff] via-[#f7f6fe] to-[#ebe9fd] border border-[#4D47D7]/20 shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-full bg-[#4D47D7]/15 flex items-center justify-center text-[#4D47D7] border border-[#4D47D7]/25 mb-4">
                <Sparkles size={22} />
              </div>
              <span className="text-[10px] font-mono text-[#4D47D7] font-bold uppercase tracking-wider block mb-1">
                Custom Scope
              </span>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Our certified architects build bespoke integrations and offshore agile squads tailored to your exact roadmap.
              </p>
            </div>

            <div className="pt-4 mt-4">
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 rounded-xl bg-[#4D47D7] hover:bg-[#3d37c9] text-white font-bold text-xs inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-[#4D47D7]/25"
              >
                <span>Request Discovery Call</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ABOUT US SECTION */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/40 border border-slate-200/90 shadow-md overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#4D47D7]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D47D7]/10 text-xs font-mono font-bold uppercase tracking-wider text-[#4D47D7] border border-[#4D47D7]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4D47D7] animate-pulse" />
              <span>Corporate Identity & Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] via-[#6366f1] to-[#0ea5e9]">
                US
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                <strong className="text-slate-900 font-bold">
                  Qardh Al Hasan Fintech Sdn. Bhd.
                </strong>{" "}
                is a technology-driven digital solutions company helping businesses grow, scale, and stay competitive in the digital economy.
              </p>

              <p>
                We provide secure, innovative, and results-focused solutions in software development, web development, graphic design, digital marketing, social media management, and SEO Services.
              </p>

              <p className="text-[#4D47D7] font-semibold">
                We combine technology, creativity, and expertise to turn ideas into measurable business success.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xl font-black text-slate-900 font-mono">10+</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">Years Experience</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xl font-black text-slate-900 font-mono">250+</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">Projects Done</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xl font-black text-slate-900 font-mono">99%</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">Client Rating</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xl font-black text-slate-900 font-mono">100%</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">Shariah Ethics</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4D47D7] hover:text-[#3d37c9] transition-colors"
              >
                <span>Read Full Governance & Executive Dossier</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Image: Empty Executive Boardroom in KL (Zero People) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 group shadow-md">
            <div className="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden">
              <img
                src="/images/corporate_boardroom.jpg"
                alt="Qardh Al Hasan Executive Governance Center in Kuala Lumpur"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs font-mono text-white">
                <span className="font-bold">KL Executive Suite</span>
                <span className="text-indigo-300 font-semibold">Brickfields HQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
