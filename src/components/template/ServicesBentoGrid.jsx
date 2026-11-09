"use client";

import Link from "next/link";
import {
  Code2,
  Cpu,
  Layers,
  Palette,
  Search,
  TrendingUp,
  Share2,
  ArrowRight,
  ShieldCheck,
  Zap,
  CreditCard,
  Settings,
  Sparkles,
} from "lucide-react";

export default function ServicesBentoGrid() {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      {/* =========================================================================
          1. TOP LARGE FEATURE BANNER: EXACT MATCH TO USER'S SCREENSHOT
          ========================================================================= */}
      <div className="relative rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 shadow-sm overflow-hidden p-8 sm:p-12 lg:p-14">
        {/* Soft atmospheric lavender/purple ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-indigo-500/10 via-purple-500/8 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Heading, Subtitle & 3 Feature Pills (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow badge with cube icon and divider line */}
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#5B42F3]">
              <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#5B42F3]">
                <Sparkles size={13} />
              </div>
              <span className="tracking-wide">Full-Spectrum IT Capabilities</span>
              <span className="w-8 h-px bg-indigo-300 hidden sm:block" />
            </div>

            {/* Bold, prominent heading (Enhanced font size as requested) */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-[1.14]">
              Specialized Engineering &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#4f46e5] to-[#2563eb]">
                Digital Growth Services
              </span>
            </h2>

            {/* Subtitle with high readability */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Whether architecting an ethical fintech transaction system or scaling an enterprise web platform, we deliver clean code, secure architectures, and measurable business outcomes.
            </p>

            {/* 3 Inline Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 shadow-2xs">
                <Code2 size={15} className="text-[#5B42F3]" />
                <span>Clean Code</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 shadow-2xs">
                <ShieldCheck size={15} className="text-[#5B42F3]" />
                <span>Secure Architecture</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-800 shadow-2xs">
                <TrendingUp size={15} className="text-[#5B42F3]" />
                <span>Business Focus</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Hexagon Visual + "Build Innovate Grow" Script Watermark */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Elegant script watermark in background */}
            <div className="absolute -top-4 right-2 text-right pointer-events-none select-none opacity-20 hidden sm:block">
              <div className="font-serif italic text-2xl text-slate-500">Build</div>
              <div className="font-serif italic text-3xl text-indigo-600 -mt-1">Innovate</div>
              <div className="font-serif italic text-2xl text-slate-500 -mt-1">Grow</div>
            </div>

            <div className="relative w-full max-w-[340px] aspect-square rounded-3xl overflow-hidden shadow-xl shadow-indigo-500/10 border border-white group">
              <img
                src="/images/hero_3d_glass.jpg"
                alt="Digital Innovation 3D Hexagonal Graphic"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          2. BENTO GRID: ROW 1 (FLAGSHIP FINTECH + CUSTOM SOFTWARE)
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Card 1: FinTech & Shariah-Aware Financial Systems (7 cols) */}
        <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group">
          <div className="space-y-5">
            
            {/* Card Header: Icon & Flagship Badge */}
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#5B42F3]">
                <Code2 size={22} />
              </div>

              <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[#5B42F3]">
                FLAGSHIP OFFERING
              </span>
            </div>

            {/* Title & Description with improved font visibility */}
            <div className="space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                FinTech & Shariah-Aware Financial Systems
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Bespoke financial technology engineered for transparent loan tracking, interest-free ledgers, digital escrow, and automated reconciliation adhering strictly to ethical guidelines and Bank Negara Malaysia (BNM) frameworks.
              </p>
            </div>

            {/* 3 Inner Feature Capsules */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <ShieldCheck size={14} className="text-[#5B42F3]" />
                  <span>Ethical Ledgers</span>
                </div>
                <div className="text-[11px] text-slate-500">Automated balance tracking</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <Zap size={14} className="text-[#5B42F3]" />
                  <span>Smart Escrow</span>
                </div>
                <div className="text-[11px] text-slate-500">Milestone verification gates</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <CreditCard size={14} className="text-[#5B42F3]" />
                  <span>Payment Rails</span>
                </div>
                <div className="text-[11px] text-slate-500">DuitNow & FPX readiness</div>
              </div>
            </div>

          </div>

          {/* Card Footer */}
          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
            <span className="font-mono text-slate-500 flex items-center gap-1.5">
              <Settings size={13} className="text-slate-400" />
              <span>Architecture: Microservices & ISO 20022</span>
            </span>

            <Link
              href="/services#fintech"
              className="font-bold text-[#5B42F3] hover:underline flex items-center gap-1"
            >
              <span>Learn more</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Card 2: Custom Software Engineering (5 cols) */}
        <div className="lg:col-span-5 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            
            <div className="space-y-3.5 flex-1">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#5B42F3]">
                <Cpu size={22} />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Custom Software Engineering
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                High-scale backend architectures, internal business automation, and secure custom ERP systems built to eliminate operational bottlenecks.
              </p>
            </div>

            {/* 3D Laptop Graphic */}
            <div className="w-32 sm:w-40 aspect-square rounded-2xl overflow-hidden shrink-0 self-center sm:self-start bg-slate-50 border border-slate-100 p-2 shadow-2xs group-hover:scale-105 transition-transform duration-500">
              <img
                src="/images/bento_laptop.jpg"
                alt="3D Laptop Software Engineering"
                className="w-full h-full object-contain"
              />
            </div>

          </div>

          {/* Card Footer */}
          <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
            <span className="font-mono text-slate-500 flex items-center gap-1.5">
              <Settings size={13} className="text-slate-400" />
              <span>Node &bull; Python &bull; Go</span>
            </span>

            <Link
              href="/services#software-development"
              className="font-bold text-[#5B42F3] hover:underline flex items-center gap-1"
            >
              <span>Details</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>

      {/* =========================================================================
          3. BENTO GRID: ROW 2 (3 EQUAL COLUMNS)
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 3: Modern Web Applications */}
        <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group">
          <div className="space-y-4">
            
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#5B42F3]">
                <Code2 size={20} />
              </div>

              {/* 3D Web Layer Graphic */}
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-50 p-1 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/bento_web.jpg"
                  alt="Modern Web Applications 3D Layers"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Modern Web Applications
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                SPA &amp; MPA, dynamic customer portals, e-commerce platforms, and React/Next.js stacks for modern, scalable web experiences.
              </p>
            </div>

          </div>

          <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
            <span className="font-mono text-slate-500 truncate mr-2">
              Next.js &bull; TypeScript &bull; Node.js
            </span>
            <Link
              href="/services#web-development"
              className="font-bold text-[#5B42F3] hover:underline shrink-0 flex items-center gap-0.5"
            >
              <span>Details</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Card 4: UI/UX & Brand Systems */}
        <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group">
          <div className="space-y-4">
            
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                <Palette size={20} />
              </div>

              {/* 3D UI/UX Mobile Graphic */}
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-50 p-1 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/bento_uiux.jpg"
                  alt="UI/UX 3D Design Tokens and Mobile Screens"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                UI/UX &amp; Brand Systems
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Human-centered product design, design tokens, interactive prototypes, and cohesive branding that commands authority and drives conversion.
              </p>
            </div>

          </div>

          <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
            <span className="font-mono text-slate-500 truncate mr-2">
              Figma &bull; Design Tokens
            </span>
            <Link
              href="/services#graphics-uiux"
              className="font-bold text-[#5B42F3] hover:underline shrink-0 flex items-center gap-0.5"
            >
              <span>Details</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Card 5: Technical SEO & Discovery */}
        <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group">
          <div className="space-y-4">
            
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Search size={20} />
              </div>

              {/* 3D SEO Chart Graphic */}
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-50 p-1 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/images/bento_chart.jpg"
                  alt="Technical SEO 3D Growth Chart"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Technical SEO &amp; Discovery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Schema markup, Core Web Vitals optimization, programmatic SEO, and Malaysian search visibility that brings consistent inbound leads.
              </p>
            </div>

          </div>

          <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
            <span className="font-mono text-slate-500 truncate mr-2">
              SERP &bull; Schema 2.0
            </span>
            <Link
              href="/services#seo-services"
              className="font-bold text-[#5B42F3] hover:underline shrink-0 flex items-center gap-0.5"
            >
              <span>Details</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

      </div>

      {/* =========================================================================
          4. BENTO GRID: ROW 3 (2 WIDE COLUMNS: MARKETING & SOCIAL)
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 6: Performance Digital Marketing */}
        <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            
            <div className="space-y-3 flex-1">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#5B42F3]">
                <TrendingUp size={20} />
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Performance Digital Marketing
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Data-driven multi-channel ad campaigns (Google Ads, Meta Ads, LinkedIn) with rigorous conversion attribution and positive ROI tracking.
              </p>
            </div>

            {/* 3D Bullseye Target Graphic */}
            <div className="w-28 sm:w-32 aspect-square rounded-2xl overflow-hidden shrink-0 self-center sm:self-start bg-slate-50 p-2 group-hover:scale-105 transition-transform duration-500">
              <img
                src="/images/bento_target.jpg"
                alt="Performance Marketing 3D Target"
                className="w-full h-full object-contain"
              />
            </div>

          </div>

          <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
            <span className="font-mono text-slate-500">Attribution &bull; Funnels</span>
            <Link
              href="/services#digital-marketing"
              className="font-bold text-[#5B42F3] hover:underline flex items-center gap-1"
            >
              <span>Details</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Card 7: Social Media & Community Growth */}
        <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            
            <div className="space-y-3 flex-1">
              <div className="w-11 h-11 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600">
                <Share2 size={20} />
              </div>

              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Social Media &amp; Community Growth
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                End-to-end editorial content creation, B2B thought leadership, brand storytelling, and proactive audience engagement for Malaysian businesses.
              </p>
            </div>

            {/* 3D Social Media Glass Cubes Graphic */}
            <div className="w-28 sm:w-32 aspect-square rounded-2xl overflow-hidden shrink-0 self-center sm:self-start bg-slate-50 p-2 group-hover:scale-105 transition-transform duration-500">
              <img
                src="/images/bento_social.jpg"
                alt="Social Media 3D Icons"
                className="w-full h-full object-contain"
              />
            </div>

          </div>

          <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
            <span className="font-mono text-slate-500">Content &bull; B2B &bull; Social</span>
            <Link
              href="/services#social-media-management"
              className="font-bold text-[#5B42F3] hover:underline flex items-center gap-1"
            >
              <span>Details</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}
