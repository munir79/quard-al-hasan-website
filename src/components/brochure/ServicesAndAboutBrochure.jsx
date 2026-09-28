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
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-fuchsia-400 uppercase tracking-widest mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#d946ef]" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                Services
              </span>
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-purple-300 hover:text-white transition-colors"
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
                className="purple-card p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Circular Purple Icon Badge from Brochure */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-purple-600/40 group-hover:scale-110 group-hover:shadow-fuchsia-500/60 transition-all duration-300 mb-4">
                    <IconComponent size={22} className="stroke-[2.2]" />
                  </div>

                  <span className="text-[10px] font-mono text-fuchsia-300 uppercase tracking-wider block mb-1">
                    {service.tag}
                  </span>

                  <h3 className="text-lg font-black text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-purple-200/80 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-bold text-purple-300">
                  <span className="text-[10px] font-mono text-purple-400">Production Ready</span>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-fuchsia-300 hover:text-white group-hover:translate-x-1 transition-transform"
                  >
                    <span>Details</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 8th Card: Custom Consultation Card */}
          <div className="purple-card p-5 sm:p-6 flex flex-col justify-between bg-gradient-to-br from-purple-900/60 via-fuchsia-900/40 to-indigo-900/60 border-purple-400/40">
            <div>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-fuchsia-300 border border-white/20 mb-4">
                <Sparkles size={22} />
              </div>
              <span className="text-[10px] font-mono text-fuchsia-300 uppercase tracking-wider block mb-1">
                Custom Scope
              </span>
              <h3 className="text-lg font-black text-white mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-xs text-purple-200/90 leading-relaxed font-normal">
                Our certified architects build bespoke integrations and offshore agile squads tailored to your exact roadmap.
              </p>
            </div>

            <div className="pt-4 mt-4">
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 rounded-xl bg-white text-slate-950 font-black text-xs inline-flex items-center justify-center gap-2 hover:bg-purple-100 transition-colors shadow-md"
              >
                <span>Request Discovery Call</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ABOUT US SECTION (matching brochure right panel) */}
      <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#170836] via-[#210c4d] to-[#170836] border border-purple-400/30 shadow-2xl overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 text-xs font-mono font-bold uppercase tracking-wider text-purple-200 border border-purple-400/30">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              <span>Corporate Identity & Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                US
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-purple-100/90 leading-relaxed font-normal">
              <p>
                <strong className="text-white font-bold">
                  Qardh Al Hasan Fintech Sdn. Bhd.
                </strong>{" "}
                is a technology-driven digital solutions company helping businesses grow, scale, and stay competitive in the digital economy.
              </p>

              <p>
                We provide secure, innovative, and results-focused solutions in software development, web development, graphic design, digital marketing, social media management, and SEO Services.
              </p>

              <p className="text-fuchsia-300 font-semibold">
                We combine technology, creativity, and expertise to turn ideas into measurable business success.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-purple-500/20">
              <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/20">
                <div className="text-xl font-black text-white font-mono">10+</div>
                <div className="text-[10px] text-purple-300 font-mono mt-0.5">Years Experience</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/20">
                <div className="text-xl font-black text-white font-mono">250+</div>
                <div className="text-[10px] text-purple-300 font-mono mt-0.5">Projects Done</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/20">
                <div className="text-xl font-black text-white font-mono">99%</div>
                <div className="text-[10px] text-purple-300 font-mono mt-0.5">Client Rating</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/50 border border-purple-500/20">
                <div className="text-xl font-black text-white font-mono">100%</div>
                <div className="text-[10px] text-purple-300 font-mono mt-0.5">Shariah Ethics</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-fuchsia-300 hover:text-white transition-colors"
              >
                <span>Read Full Governance & Executive Dossier</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Right Image: Empty Executive Boardroom in KL (Zero People) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-purple-500/30 group">
            <div className="aspect-[4/3] w-full bg-[#120626] relative overflow-hidden">
              <img
                src="/images/corporate_boardroom.jpg"
                alt="Qardh Al Hasan Executive Governance Center in Kuala Lumpur"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090314]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs font-mono text-purple-200">
                <span className="font-bold text-white">KL Executive Suite</span>
                <span className="text-fuchsia-400 font-semibold">Brickfields HQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
