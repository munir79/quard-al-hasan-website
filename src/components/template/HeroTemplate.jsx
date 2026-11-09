"use client";

import Link from "next/link";
import {
  ArrowRight,
  Code2,
  PenTool,
  Cloud,
  Rocket,
  Building2,
  Smile,
  Sparkles,
  ShieldCheck,
  Cpu,
  Palette,
  TrendingUp,
  SearchCheck,
  Share2,
} from "lucide-react";
import { companyInfo } from "@/data/companyData";

const ourServicesMarquee = [
  {
    title: "FinTech Solutions",
    tag: "Islamic Core",
    icon: ShieldCheck,
    href: "/services#fintech",
  },
  {
    title: "Software Development",
    tag: "ERP & SaaS",
    icon: Cpu,
    href: "/services#software-development",
  },
  {
    title: "Graphics & UI/UX Design",
    tag: "Brand Kits",
    icon: Palette,
    href: "/services#graphics-uiux",
  },
  {
    title: "Digital Marketing",
    tag: "High-ROI PPC",
    icon: TrendingUp,
    href: "/services#digital-marketing",
  },
  {
    title: "SEO Services",
    tag: "Google Rank #1",
    icon: SearchCheck,
    href: "/services#seo-services",
  },
  {
    title: "Website Development",
    tag: "Next.js & Web Apps",
    icon: Code2,
    href: "/services#web-development",
  },
  {
    title: "Social Media Management",
    tag: "Audience Growth",
    icon: Share2,
    href: "/services#social-media-management",
  },
];


export default function HeroTemplate() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Soft atmospheric lavender/purple aurora glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-100px] w-[450px] h-[450px] bg-purple-500/8 rounded-full blur-[120px] pointer-events-none" />

      {/* =========================================================================
          1. HERO HEADER: EXACT REFERENCE LAYOUT
          ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-block text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#5B42F3]">
              YOUR DIGITAL INNOVATION PARTNER
            </div>

            {/* Main Headline with exact gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-black text-slate-900 tracking-[-0.035em] leading-[1.12]">
              We build digital products that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#4f46e5] to-[#2563eb]">
                move businesses forward.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed font-normal">
              We combine strategy, software engineering, and thoughtful design to create scalable digital solutions for tomorrow&apos;s businesses.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#6366f1] to-[#4f46e5] hover:from-[#5457e5] hover:to-[#4338ca] shadow-lg shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Start a project</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:border-slate-300 transition-all"
              >
                <span>Explore our work</span>
              </Link>
            </div>

            {/* Bottom Sub-Tags */}
            <div className="pt-3 text-xs sm:text-sm font-medium text-slate-400 tracking-wide flex items-center gap-2">
              <span>Strategy</span>
              <span className="text-slate-300">&bull;</span>
              <span>Design</span>
              <span className="text-slate-300">&bull;</span>
              <span>Engineering</span>
            </div>

          </div>

          {/* Right Column: 3D Glass Artwork (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient diffuse back-glow */}
            <div className="absolute w-[380px] h-[380px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-sky-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/80 transition-transform duration-700 hover:scale-[1.02]">
              <img
                src="/images/hero_3d_glass.jpg"
                alt="Digital Innovation 3D Hexagonal Glass Composition"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>

        {/* =========================================================================
            2. OUR SERVICES MARQUEE: SILKY SMOOTH RIGHT-TO-LEFT SCROLL
            ========================================================================= */}
        <div className="pt-16 sm:pt-24 pb-6 space-y-5 overflow-hidden">
          <div className="text-center flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B42F3] animate-pulse" />
            <div className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#5B42F3]">
              OUR SERVICES &bull; POWERING TEAMS BUILDING WHAT&apos;S NEXT
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B42F3] animate-pulse" />
          </div>

          {/* Marquee Track Container with Smooth Edge Fade Masks */}
          <div className="relative w-full overflow-hidden py-2">
            {/* Left & Right Smooth Gradients */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

            <div className="animate-marquee-smooth flex items-center gap-4 sm:gap-6">
              {[
                ...ourServicesMarquee,
                ...ourServicesMarquee,
                ...ourServicesMarquee,
                ...ourServicesMarquee,
              ].map((service, idx) => (
                <Link
                  key={idx}
                  href={service.href}
                  className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50/90 hover:bg-white border border-slate-200/90 hover:border-indigo-400 shadow-2xs hover:shadow-md transition-all duration-300 shrink-0 cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-100/90 flex items-center justify-center text-[#5B42F3] group-hover:bg-[#5B42F3] group-hover:text-white transition-colors duration-300">
                    <service.icon size={14} />
                  </div>
                  <span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors whitespace-nowrap">
                    {service.title}
                  </span>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-indigo-600/90 px-2 py-0.5 rounded-md bg-indigo-50/80 border border-indigo-100/60 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {service.tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          3. OUR SERVICES: EXACT 3-CARD LAYOUT + STATS
          ========================================================================= */}
      <section className="relative py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-14 max-w-3xl mx-auto">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#5B42F3]">
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-0.03em]">
            From bold idea to real-world impact
          </h2>
        </div>

        {/* 3 Clean Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Product Engineering */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-indigo-50/80 border border-indigo-100 flex items-center justify-center text-[#5B42F3] group-hover:bg-[#5B42F3] group-hover:text-white transition-colors duration-300">
              <Code2 size={22} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Product Engineering
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              We build scalable, high-performance web and mobile applications using modern technologies.
            </p>
          </div>

          {/* Card 2: UI/UX & Product Design */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-purple-50/80 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
              <PenTool size={22} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              UI/UX & Product Design
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              We create intuitive, beautiful experiences that solve real user problems and drive engagement.
            </p>
          </div>

          {/* Card 3: Cloud & AI Solutions */}
          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-sky-50/80 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
              <Cloud size={22} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Cloud & AI Solutions
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed font-normal">
              We help you leverage the cloud and AI to automate, scale and unlock new opportunities.
            </p>
          </div>

        </div>

        {/* =========================================================================
            4. STATS COUNTER STRIP WITH CLEAN VERTICAL DIVIDERS
            ========================================================================= */}
        <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
          
          {/* Stat 1 */}
          <div className="flex items-center justify-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#5B42F3]">
              <Rocket size={20} />
            </div>
            <div className="text-left">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
                40+
              </div>
              <div className="text-xs text-slate-500 font-medium">
                projects delivered
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center justify-center gap-3.5 sm:border-x sm:border-slate-200 sm:px-6">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#5B42F3]">
              <Building2 size={20} />
            </div>
            <div className="text-left">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
                12
              </div>
              <div className="text-xs text-slate-500 font-medium">
                industries served
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#5B42F3]">
              <Smile size={20} />
            </div>
            <div className="text-left">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
                98%
              </div>
              <div className="text-xs text-slate-500 font-medium">
                client satisfaction
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}
