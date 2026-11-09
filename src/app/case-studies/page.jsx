import Link from "next/link";
import RouteHeroBanner from "@/components/flairs/RouteHeroBanner";
import {
  Target,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Sparkles,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Case Studies & Insights | Qardh Al Hasan Fintech Sdn. Bhd.",
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
    tech: ["Next.js 14", "PostgreSQL", "Node.js", "e-KYC API", "Redis"],
    tag: "FinTech Flagship",
    image: "/images/hero-fintech.jpg",
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
    image: "/images/analytics-desk.jpg",
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
    image: "/images/purple-isometric-cloud.jpg",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="w-full bg-white">
      {/* 1. Immersive Hero Banner with 3D Tech Architecture Photography */}
      <RouteHeroBanner
        badge="Proven Track Record & Insights"
        badgeIcon={BookOpen}
        title="Engineering Case Studies &"
        titleHighlight="Technical Insights"
        description="Explore how we help financial institutions, enterprise operators, and fast-scaling SMEs achieve operational velocity, Shariah compliance, and market growth."
        breadcrumbs={[{ label: "Blog & Case Studies" }]}
        image="/images/hero_3d_glass.jpg"
      >
        <div className="flex flex-wrap items-center gap-3 pt-3 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 font-semibold">
            <TrendingUp size={14} className="text-emerald-400" />
            +300% Scaling Velocity
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 font-semibold">
            <ShieldCheck size={14} className="text-[#38BDF8]" />
            100% Shariah Audit Compliance
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 font-semibold">
            <Cpu size={14} className="text-[#A78BFA]" />
            99.98% High Availability
          </span>
        </div>
      </RouteHeroBanner>

      {/* 2. Featured Case Studies */}
      <section className="py-16 sm:py-24 space-y-12 sm:space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-widest">
            Featured Deployments
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            How We Deliver Measurable Business Results
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal max-w-2xl">
            Detailed breakdowns of architecture decisions, challenges solved, and metrics delivered for our clients.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-[#2563EB] bg-blue-50 border border-blue-100">
                    {study.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 leading-tight">
                  {study.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {study.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tech.map((t, tidx) => (
                    <span
                      key={tidx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-700 bg-white border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics Card */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-sm">
                <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                  Quantified Metrics
                </div>
                <div className="space-y-4">
                  {study.metrics.map((m, midx) => (
                    <div key={midx} className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-none last:pb-0">
                      <div>
                        <div className="text-2xl sm:text-3xl font-black text-[#2563EB]">
                          {m.value}
                        </div>
                        <div className="text-xs font-bold text-slate-800">
                          {m.label}
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                        {m.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Ready to Architect Your Next Success Story?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal">
            Schedule a strategy consultation with our senior engineers and explore how we can accelerate your tech roadmap.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-lg shadow-blue-500/30 transition-all uppercase tracking-wider"
            >
              <span>Schedule a Strategy Session</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
