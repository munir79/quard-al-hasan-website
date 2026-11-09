"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Cpu,
  ShoppingBag,
  Truck,
  HeartPulse,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const industries = [
  {
    slug: "banking-and-finance",
    title: "Banking & Islamic Finance",
    icon: Building2,
    tagline: "Zero-Riba Core Banking & Automated Ledgers",
    description:
      "We build mission-critical banking architectures designed specifically for Islamic financial institutions, credit cooperatives, and microfinance operators. Fully aligned with AAOIFI standards and Bank Negara Malaysia guidelines.",
    solutions: [
      "Qardh Al Hasan zero-interest micro-credit engines",
      "Murabaha trade financing & verification workflows",
      "Automated e-KYC and Shariah audit trails",
      "Digital wallet ledgers with real-time settlement",
    ],
    metric: "100% Shariah Compliant",
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software & SaaS",
    icon: Cpu,
    tagline: "Scalable Multi-Tenant Cloud Architectures",
    description:
      "From multi-tenant SaaS platforms to high-throughput internal microservices, we build software products that scale effortlessly with zero downtime and low latency.",
    solutions: [
      "Multi-tenant customer isolation & RBAC",
      "Event-driven microservices with Redis & Kafka",
      "Automated CI/CD pipelines and Kubernetes orchestration",
      "Enterprise billing and subscription automation",
    ],
    metric: "99.98% High Availability",
  },
  {
    slug: "ecommerce-and-retail",
    title: "E-Commerce & Digital Retail",
    icon: ShoppingBag,
    tagline: "High-Conversion Storefronts & Checkout Engines",
    description:
      "Enterprise marketplaces and omnichannel e-commerce platforms engineered for rapid page speeds, seamless checkout, and integrated payment gateways.",
    solutions: [
      "Next.js headless storefronts with sub-second speeds",
      "Omnichannel inventory synchronization",
      "Islamic payment gateway integrations",
      "Customer retention and dynamic discounting logic",
    ],
    metric: "3.2x Conversion Uplift",
  },
  {
    slug: "transportation-and-logistics",
    title: "Logistics & Supply Chain",
    icon: Truck,
    tagline: "Real-Time Tracking & Warehouse Intelligence",
    description:
      "Custom ERPs, dispatch dispatchers, and IoT-ready tracking systems for transport operators, freight forwarders, and distribution networks.",
    solutions: [
      "Automated fleet dispatch and real-time GPS tracking",
      "Warehouse inventory management & barcode scanning",
      "B2B vendor procurement portals",
      "Electronic proof of delivery (e-POD) systems",
    ],
    metric: "40% Operational Efficiency",
  },
  {
    slug: "healthcare",
    title: "Healthcare & MedTech",
    icon: HeartPulse,
    tagline: "Secure Patient Portals & Clinical Systems",
    description:
      "Compliant digital health applications, clinic management software, and patient communication portals designed around privacy and security.",
    solutions: [
      "PDPA & HIPAA-ready patient records",
      "Doctor appointment scheduling & teleconsultation",
      "Pharmacy stock and prescription management",
      "Automated insurance claims settlement workflows",
    ],
    metric: "Bank-Grade Encryption",
  },
];

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeIndustry = industries[activeTab];
  const Icon = activeIndustry.icon;

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
            Domain Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Industries We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB]">
              Empower
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            We adapt our engineering frameworks to the specialized regulatory, security, and performance demands of your industry.
          </p>
        </div>

        {/* FlairsTech-Style Interactive Tabbed Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab Navigation List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {industries.map((ind, idx) => {
              const IndIcon = ind.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center justify-between p-4 rounded-xl text-left transition-all duration-200 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-md border-l-4 border-l-[#4F46E5] border border-slate-200/80"
                      : "bg-transparent text-slate-600 hover:bg-white/60 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isActive
                          ? "bg-indigo-50 text-[#4F46E5]"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <IndIcon size={18} />
                    </div>
                    <span className="text-sm font-bold">{ind.title}</span>
                  </div>
                  <ArrowRight
                    size={14}
                    className={`transition-transform ${
                      isActive ? "text-[#4F46E5] translate-x-1" : "text-slate-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Industry Showcase Card (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 shadow-xl p-8 sm:p-10 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#753DED] via-[#524EEC] to-[#2E5FEB] text-white flex items-center justify-center shadow-md">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {activeIndustry.title}
                  </h3>
                  <div className="text-xs font-mono font-bold text-[#4F46E5]">
                    {activeIndustry.tagline}
                  </div>
                </div>
              </div>

              <span className="self-start sm:self-center px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold font-mono">
                {activeIndustry.metric}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {activeIndustry.description}
            </p>

            {/* Specialized Solutions Checklist */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                Key Deployed Solutions
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeIndustry.solutions.map((sol, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2 size={16} className="text-[#4F46E5] shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions: Link to Dedicated Industry Route! */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <Link
                href={`/industries/${activeIndustry.slug}`}
                className="text-xs font-bold text-[#4F46E5] hover:text-[#4338CA] inline-flex items-center gap-1"
              >
                <span>View Full {activeIndustry.title} Architecture</span>
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-md shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Discuss {activeIndustry.title}</span>
                <ArrowRight size={13} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
