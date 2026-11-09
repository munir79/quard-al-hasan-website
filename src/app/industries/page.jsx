import Link from "next/link";
import RouteHeroBanner from "@/components/flairs/RouteHeroBanner";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import {
  Building2,
  Cpu,
  ShoppingBag,
  Truck,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";

export const metadata = {
  title: "Industries We Serve | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Tailored enterprise technology, Shariah fintech platforms, and custom software solutions engineered for banking, SaaS, e-commerce, logistics, and healthcare.",
};

export const industriesList = [
  {
    slug: "banking-and-finance",
    title: "Banking & Islamic Finance",
    tagline: "Zero-Riba Core Banking & Automated Ledgers",
    icon: Building2,
    desc: "Mission-critical banking architectures designed specifically for Islamic financial institutions, credit cooperatives, and microfinance operators. Strictly aligned with AAOIFI standards and Bank Negara Malaysia guidelines.",
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
    tagline: "Scalable Multi-Tenant Cloud Architectures",
    icon: Cpu,
    desc: "From multi-tenant SaaS platforms to high-throughput internal microservices, we build software products that scale effortlessly with zero downtime and low latency.",
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
    tagline: "High-Conversion Storefronts & Checkout Engines",
    icon: ShoppingBag,
    desc: "Enterprise marketplaces and omnichannel e-commerce platforms engineered for rapid page speeds, seamless checkout, and integrated payment gateways.",
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
    tagline: "Real-Time Tracking & Warehouse Intelligence",
    icon: Truck,
    desc: "Custom ERPs, dispatch dispatchers, and IoT-ready tracking systems for transport operators, freight forwarders, and distribution networks.",
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
    tagline: "Secure Patient Portals & Clinical Systems",
    icon: HeartPulse,
    desc: "Compliant digital health applications, clinic management software, and patient communication portals designed around privacy and security.",
    solutions: [
      "PDPA & HIPAA-ready patient records",
      "Doctor appointment scheduling & teleconsultation",
      "Pharmacy stock and prescription management",
      "Automated insurance claims settlement workflows",
    ],
    metric: "Bank-Grade Encryption",
  },
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

export default function IndustriesIndexPage() {
  return (
    <div className="w-full bg-[#0A0F1C] text-white">
      {/* 1. Hero Banner */}
      <RouteHeroBanner
        badge="Specialized Domain Solutions"
        badgeIcon={Layers}
        title="Industries We"
        titleHighlight="Empower"
        description="Every vertical has unique compliance demands, security criteria, and operational nuances. Explore how we engineer tailored software architectures for your industry."
        breadcrumbs={[{ label: "Industries" }]}
        image="/images/cyber-hq.jpg"
      >
        <div className="flex flex-wrap gap-2.5 pt-2">
          {industriesList.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-sm font-medium text-white hover:text-[#38BDF8] transition-colors"
            >
              {ind.title}
            </Link>
          ))}
        </div>
      </RouteHeroBanner>

      {/* 2. Industry Cards */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.3] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-32 right-0 h-[460px] w-[640px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[520px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industriesList.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.slug} from={colDirection(idx)} className="h-full">
                  <div className={`${card} group flex h-full flex-col justify-between p-8`}>
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-colors shrink-0">
                          <Icon size={26} />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20 text-right">
                          {ind.metric}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2 leading-snug">
                        {ind.title}
                      </h2>
                      <div className="text-sm font-medium text-slate-400 mb-4 leading-relaxed">
                        {ind.tagline}
                      </div>
                      <p className="text-base text-slate-300 leading-relaxed mb-6">{ind.desc}</p>

                      <ul className="space-y-3 pt-5 border-t border-white/10">
                        {ind.solutions.slice(0, 3).map((sol, sIdx) => (
                          <li
                            key={sIdx}
                            className="flex items-start gap-2.5 text-sm text-slate-300 leading-snug"
                          >
                            <CheckCircle2 size={17} className="text-blue-400 shrink-0 mt-0.5" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10">
                      <Link
                        href={`/industries/${ind.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <span>Explore industry architecture</span>
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Pre-Footer Call to Action */}
      <section className="relative py-20 sm:py-24 border-t border-white/10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#0D1730] to-[#0A0F1C] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[720px] rounded-full bg-blue-600/15 blur-[110px] pointer-events-none" />

        <RevealGroup className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <RevealItem from="left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Need a Specialized Enterprise Architecture?
            </h2>
          </RevealItem>
          <RevealItem from="right">
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a confidential discovery meeting with our technical architects in Kuala Lumpur.
            </p>
          </RevealItem>
          <RevealItem from="up" className="pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 transition-colors"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealItem>
        </RevealGroup>
      </section>
    </div>
  );
}