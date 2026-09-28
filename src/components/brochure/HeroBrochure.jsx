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
    <section className="relative pt-8 sm:pt-14 pb-12 overflow-hidden">
      {/* Centered Constrained Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          
          {/* Left Side: Crisp Content */}
          <div className="flex-1 text-left space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Smart{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                Solutions.
              </span>
              <br />
              Stronger Business.
            </h1>

            <p className="text-sm sm:text-base text-purple-200/80 max-w-md leading-relaxed">
              Tailored fintech architectures, high-scale software engineering, and strategic brand positioning.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-md shadow-purple-600/25"
              >
                <span>Launch Project</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-purple-500/30 bg-purple-950/40 hover:bg-purple-900/40 text-purple-200 hover:text-white font-medium text-sm transition-all"
              >
                <span>Our Services</span>
              </Link>
            </div>
          </div>

          {/* Right Side: Scaled-Down Compact Image */}
          <div className="w-full max-w-sm lg:w-[380px] shrink-0 mx-auto lg:mx-0">
            <div className="rounded-xl overflow-hidden shadow-xl border border-purple-500/25 bg-[#120626]">
              <div className="aspect-[4/3] w-full relative">
                <img
                  src="/images/hero_fintech_desk.jpg"
                  alt="Fintech Command Center"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-12 pt-6 border-t border-purple-500/20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-3 flex items-center justify-between">
          <span className="text-[11px] font-mono uppercase tracking-widest text-purple-300 font-semibold">
            Core Service Offerings
          </span>
          <Link
            href="/services"
            className="text-xs font-mono font-medium text-fuchsia-400 hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <span>Explore All</span>
            <ArrowRight size={12} />
          </Link>
        </div>

        <div className="relative overflow-hidden w-full py-2">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-r from-[#090314] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-28 bg-gradient-to-l from-[#090314] to-transparent z-10" />

          <div className="animate-marquee flex gap-3">
            {[...servicesList, ...servicesList].map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <Link
                  key={idx}
                  href={srv.href}
                  className="flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-purple-950/60 border border-purple-500/25 hover:border-fuchsia-400/50 hover:bg-purple-900/40 transition-all shrink-0 group"
                >
                  <div className="w-7 h-7 rounded-md bg-gradient-to-tr from-purple-600 to-fuchsia-500 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                    <Icon size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white group-hover:text-purple-200 transition-colors whitespace-nowrap">
                      {srv.title}
                    </div>
                    <div className="text-[10px] font-mono text-fuchsia-300">
                      {srv.tag}
                    </div>
                  </div>
                  <ArrowRight
                    size={11}
                    className="text-purple-400 group-hover:text-white group-hover:translate-x-0.5 transition-all ml-0.5 shrink-0"
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
