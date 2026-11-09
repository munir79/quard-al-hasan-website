import Link from "next/link";
import RouteHeroBanner from "@/components/flairs/RouteHeroBanner";
import {
  Target,
  Building2,
  Rocket,
  Landmark,
  Globe2,
  Store,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Industries & Case Studies | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Explore how Qardh Al Hasan Fintech delivers enterprise technology and measurable business outcomes across Islamic banking, enterprise SaaS, retail, and logistics.",
};

const caseStudies = [
  {
    title: "How an Islamic Microfinance Cooperative Scaled Loan Disbursements by 300% with 0% Riba",
    industry: "Banking & Islamic Finance",
    client: "National Credit & Shariah Cooperative",
    summary:
      "Legacy paperwork and manual credit evaluations were delaying financing approvals by weeks. We built a bespoke automated Qardh Al Hasan ledger with digital e-KYC, decreasing turnaround from 14 days to under 15 minutes.",
    metrics: [
      { label: "Approval Time", value: "< 15 Mins", change: "Down from 14 Days" },
      { label: "Disbursement Scale", value: "+300%", change: "Year-on-Year Growth" },
      { label: "Shariah Audit Error", value: "0.00%", change: "Full AAOIFI Compliance" },
    ],
    tech: ["Next.js", "PostgreSQL", "Node.js", "e-KYC API", "Redis"],
    tag: "FinTech Flagship",
  },
  {
    title: "How an ASEAN Freight Logistics Provider Reduced Fleet Idle Time by 45%",
    industry: "Logistics & Supply Chain",
    client: "Regional Distribution Network",
    summary:
      "A fast-growing Malaysian freight operator needed centralized dispatch and real-time shipment monitoring. We engineered a microservices ERP that synchronized GPS telemetry, electronic proof-of-delivery, and driver dispatch.",
    metrics: [
      { label: "Fleet Idle Time", value: "-45%", change: "Route Optimization" },
      { label: "Daily Deliveries", value: "+60%", change: "Automated Dispatch" },
      { label: "System Uptime", value: "99.98%", change: "Zero Downtime SLA" },
    ],
    tech: ["React", "PostgreSQL", "Kafka", "Docker", "AWS"],
    tag: "Enterprise ERP",
  },
  {
    title: "How a B2B SaaS Platform Achieved Sub-Second Global Load Times and 120% Lead Growth",
    industry: "Enterprise SaaS & Web",
    client: "Cloud Procurement Enterprise",
    summary:
      "Experiencing high bounce rates and low organic search rankings due to a sluggish monolithic CMS. We re-platformed their public portals and customer onboarding to Next.js 14 with headless CMS architecture.",
    metrics: [
      { label: "Lighthouse Score", value: "98/100", change: "Core Web Vitals Perfect" },
      { label: "Organic Search Leads", value: "+120%", change: "In First 90 Days" },
      { label: "Page Load Speed", value: "0.8s", change: "Down from 4.2s" },
    ],
    tech: ["Next.js 14", "Tailwind CSS", "Vercel", "Technical SEO"],
    tag: "High-Speed Web",
  },
];

const targetMarkets = [
  {
    title: "Small & Medium Enterprises (SMEs)",
    desc: "Affordable, scalable web platforms, automation tools, and local SEO to help Malaysian SMEs compete with big corporations.",
    icon: Store,
  },
  {
    title: "Fast-Growing Startups & Scale-Ups",
    desc: "Rapid MVP development, cloud-native backend architecture, and flexible developer squads to launch products in weeks.",
    icon: Rocket,
  },
  {
    title: "Financial Institutions & Cooperatives",
    desc: "Strictly Shariah-compliant core banking ledgers, microfinance management, and zero-riba payment systems.",
    icon: Landmark,
  },
  {
    title: "Enterprises & Corporate Groups",
    desc: "Custom ERPs, API integrations, legacy modernization, and 24/7 managed SLA infrastructure.",
    icon: Building2,
  },
];

export default function ClientsPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Immersive Hero Banner with Corporate Boardroom Photography */}
      <RouteHeroBanner
        badge="Proven Track Record & Case Studies"
        badgeIcon={Target}
        title="Real-World Outcomes."
        titleHighlight="Quantified Impact."
        description="Explore how we help financial institutions, enterprise operators, and fast-scaling SMEs achieve operational velocity, Shariah compliance, and market growth."
        breadcrumbs={[{ label: "Case Studies & Outcomes" }]}
        image="/images/corporate_boardroom.jpg"
      >
        <div className="flex flex-wrap items-center gap-3 pt-3 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 font-semibold">
            <TrendingUp size={14} className="text-emerald-400" />
            +300% Scaling Velocity
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 font-semibold">
            <ShieldCheck size={14} className="text-[#38BDF8]" />
            100% Shariah Compliance Audited
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 font-semibold">
            <Cpu size={14} className="text-[#A78BFA]" />
            99.98% High Availability
          </span>
        </div>
      </RouteHeroBanner>

      {/* 2. Featured Case Studies (FlairsTech Signature Layout) */}
      <section className="py-16 sm:py-24 space-y-12 sm:space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-widest">
            Featured Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How We Deliver Business Results
          </h2>
        </div>

        <div className="space-y-10">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-wider">
                    {cs.industry} &bull; {cs.client}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-snug">
                    {cs.title}
                  </h3>
                </div>
                <span className="self-start sm:self-center px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-indigo-50 text-[#4F46E5] border border-indigo-100 shrink-0">
                  {cs.tag}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Summary (7 Cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                    Challenge & Solution Architecture
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {cs.summary}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {cs.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-mono font-semibold text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Highlight (5 Cols) */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                  {cs.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-xs text-slate-500 font-medium">
                          {m.label}
                        </div>
                        <div className="text-[11px] text-emerald-600 font-mono font-semibold">
                          {m.change}
                        </div>
                      </div>
                      <div className="text-2xl font-black font-mono text-slate-900">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Target Sectors We Serve */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
            <div className="text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-widest">
              Market Segments
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Tailored Solutions for Every Growth Stage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetMarkets.map((tm, idx) => {
              const Icon = tm.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {tm.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {tm.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Pre-Footer Call to Action (Matching User Reference Design) */}
      <section className="relative py-20 sm:py-28 text-center overflow-hidden bg-[#0B0F19] border-t border-white/10 text-white">
        {/* Tech Dot Grid Matrix matching user reference */}
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        
        {/* Ambient subtle violet-indigo center radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[750px] rounded-full bg-gradient-to-r from-purple-600/15 via-indigo-600/20 to-blue-600/15 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Want to Achieve Similar Results for Your Business?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Schedule a 30-minute consultation with our engineering architects to map your technical roadmap.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight size={19} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
