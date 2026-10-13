"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Palette,
  TrendingUp,
  Search,
  Code2,
  Share2,
} from "lucide-react";

const servicesList = [
  { title: "FinTech", tag: "Core", icon: ShieldCheck, href: "/services#fintech" },
  { title: "Software Dev", tag: "Custom", icon: Cpu, href: "/services#software-development" },
  { title: "UI/UX & Branding", tag: "Design", icon: Palette, href: "/services#graphics-uiux" },
  { title: "Digital Marketing", tag: "Ads", icon: TrendingUp, href: "/services#digital-marketing" },
  { title: "SEO", tag: "Search", icon: Search, href: "/services#seo-services" },
  { title: "Web Apps", tag: "Portals", icon: Code2, href: "/services#web-development" },
  { title: "Social Media", tag: "Growth", icon: Share2, href: "/services#social-media-management" },
];

export default function HeroBrochure() {
  return (
    <section className="relative pt-10 sm:pt-16 pb-14 overflow-hidden bg-gradient-to-b from-indigo-100/50 via-purple-50/30 to-white">
      {/* Background Aurora Mesh Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-[#4D47D7]/15 via-indigo-400/10 to-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-[#4D47D7]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Centered Constrained Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          
          {/* Left Side: Crisp Content */}
          <div className="flex-1 text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D47D7]/10 border border-[#4D47D7]/20 text-xs font-bold text-[#4D47D7] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#4D47D7] animate-pulse" />
              <span>Next-Gen ICT & Fintech Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Smart{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] via-[#6366f1] to-[#38bdf8]">
                Solutions.
              </span>
              <br />
              Stronger Business.
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
              Tailored fintech architectures, high-scale software engineering, and strategic brand positioning engineered for startups and enterprise leaders.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4D47D7] hover:bg-[#3d37c9] text-white font-bold text-sm transition-all shadow-md shadow-[#4D47D7]/25 hover:shadow-lg hover:shadow-[#4D47D7]/35 hover:scale-[1.02]"
              >
                <span>Launch Project</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#4D47D7] font-semibold text-sm transition-all shadow-xs"
              >
                <span>Our Services</span>
              </Link>
            </div>
          </div>

          {/* Right Side: High-Definition Tech Desk Visual (Shows Full & Clearly) */}
          <div className="w-full max-w-md lg:w-[480px] shrink-0 mx-auto lg:mx-0">
            <div className="rounded-3xl p-1.5 bg-gradient-to-tr from-[#4D47D7]/30 via-indigo-400/20 to-[#38bdf8]/30 shadow-2xl shadow-indigo-500/15 group">
              <div className="rounded-2xl overflow-hidden border border-slate-200/90 bg-white relative shadow-sm">
                <div className="aspect-[16/11] w-full relative overflow-hidden bg-slate-100">
                  <img
                    src="/images/hero_fintech_desk.jpg"
                    alt="Qardh Al Hasan Fintech Command Center in Kuala Lumpur"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Glass Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-200/80 shadow-md">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live FinTech Operations
                    </span>
                    <span className="font-mono text-[10px] text-[#4D47D7] font-bold">
                      Kuala Lumpur, MY
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-12 pt-6 border-t border-slate-200 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-3 flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
            Core Service Offerings
          </span>
          <Link
            href="/services"
            className="text-xs font-mono font-bold text-[#4D47D7] hover:text-[#3d37c9] transition-colors inline-flex items-center gap-1"
          >
            <span>Explore All</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        <div className="relative overflow-hidden w-full py-2">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="animate-marquee flex gap-3">
            {[...servicesList, ...servicesList].map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Link
                  key={idx}
                  href={srv.href}
                  className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#4D47D7]/40 hover:shadow-md hover:shadow-[#4D47D7]/10 transition-all shrink-0 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#4D47D7]/10 text-[#4D47D7] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800 group-hover:text-[#4D47D7] transition-colors whitespace-nowrap">
                      {srv.title}
                    </div>
                    <div className="text-[10px] font-mono text-[#4D47D7]">
                      {srv.tag}
                    </div>
                  </div>
                  <ArrowRight
                    size={11}
                    className="text-slate-400 group-hover:text-[#4D47D7] group-hover:translate-x-0.5 transition-all ml-0.5 shrink-0"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
