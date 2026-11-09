"use client";

import Link from "next/link";
import {
  ShieldCheck,
  Cpu,
  Globe,
  Palette,
  TrendingUp,
  Search,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    tag: "SPECIALTY FLAGSHIP",
    title: "FinTech & Shariah Core",
    icon: ShieldCheck,
    desc: "Shariah-compliant banking engines, automated loan ledgers, zero-riba microfinance platforms, and secure digital payment gateways.",
    features: [
      "Islamic Core Banking & Ledgers",
      "Qardh Al Hasan Loan Management",
      "e-KYC & Digital Onboarding",
    ],
    link: "/services/fintech",
    badgeColor: "bg-indigo-50 text-[#4F46E5] border-indigo-100",
  },
  {
    tag: "ENTERPRISE SYSTEMS",
    title: "Custom Software Development",
    icon: Cpu,
    desc: "Tailored enterprise ERPs, high-throughput microservices, bespoke business portals, and resilient cloud API integrations.",
    features: [
      "Scalable Microservices Architecture",
      "Custom ERP & CRM Solutions",
      "Automated DevOps & CI/CD Pipelines",
    ],
    link: "/services/software-development",
    badgeColor: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    tag: "HIGH PERFORMANCE",
    title: "Enterprise Website Development",
    icon: Globe,
    desc: "Ultra-fast Next.js portals, modern web applications, and customer portals engineered for lightning speed and conversion.",
    features: [
      "Next.js & React Full-Stack Apps",
      "Enterprise Headless CMS",
      "Sub-second Core Web Vitals Speed",
    ],
    link: "/services/web-development",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    tag: "BRANDING & DESIGN",
    title: "Graphics Design & UI/UX",
    icon: Palette,
    desc: "Comprehensive brand identity kits, design systems, intuitive wireframes, and interactive product mockups that engage users.",
    features: [
      "Enterprise Design Systems",
      "Conversion-Focused Web/Mobile UX",
      "Full Corporate Visual Identity",
    ],
    link: "/services/graphics-design",
    badgeColor: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100",
  },
  {
    tag: "GROWTH MARKETING",
    title: "Digital Marketing & Performance",
    icon: TrendingUp,
    desc: "Targeted Google Ads, Meta funnels, and data-driven omnichannel campaigns designed to scale leads and customer acquisition.",
    features: [
      "High-ROI Performance Ad Funnels",
      "Conversion Rate Optimization (CRO)",
      "Multi-Channel Lead Generation",
    ],
    link: "/services/digital-marketing",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    tag: "ORGANIC VISIBILITY",
    title: "SEO Services & Authority",
    icon: Search,
    desc: "Algorithmic technical SEO, content architectures, and top Google rankings that capture qualified intent sustainably.",
    features: [
      "Comprehensive Technical Audits",
      "Keyword & Competitive Strategy",
      "Authority Link Building & Content",
    ],
    link: "/services/seo-services",
    badgeColor: "bg-amber-50 text-amber-600 border-amber-100",
  },
];

export default function ServicesEcosystem() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (FlairsTech Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Comprehensive Services{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#2563EB]">
                Built for Scale
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              From mission-critical Shariah fintech platforms to custom cloud software and digital growth funnels, we provide the complete technology ecosystem your enterprise requires.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#4F46E5] hover:text-[#4338CA] transition-colors shrink-0"
          >
            <span>Explore Full Tech Stack</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6-Card Grid (FlairsTech Signature Card Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white hover:bg-slate-50/50 border border-slate-200/90 hover:border-[#4F46E5]/40 shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Icon + Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C3AED] via-[#4F46E5] to-[#2563EB] text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                      <Icon size={24} />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#4F46E5] transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={14} className="text-[#4F46E5] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link to DEDICATED ROUTE */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#4F46E5] transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
