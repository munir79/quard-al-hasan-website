import Link from "next/link";
import { FileText, ArrowRight, ArrowUpRight, FolderGit2, ShieldCheck, Database } from "lucide-react";

const caseStudies = [
  {
    icon: FileText,
    category: "Islamic Fintech",
    title: "National Microfinance Core Modernization",
    client: "Tier-2 Islamic Lending Consortium",
    impact: "85% reduction in loan turnaround time and 100% Shariah audit adherence.",
    readTime: "4 min read",
    tech: ["Qardh Engine", "e-KYC", "Audited"],
  },
  {
    icon: FolderGit2,
    category: "System Modernization",
    title: "Zero-Downtime Enterprise Software Re-platforming",
    client: "Southeast Asia ICT Enterprise",
    impact: "99.995% SLA sustained across 40+ million monthly API transactions.",
    readTime: "6 min read",
    tech: ["Kubernetes", "Postgres HA", "Terraform"],
  },
  {
    icon: Database,
    category: "System Architecture",
    title: "High-Frequency Murabaha Settlement Engine",
    client: "Commodity Murabaha Trading Desk",
    impact: "Sub-15ms automated asset verification and instant Islamic contracts.",
    readTime: "5 min read",
    tech: ["Go Microservices", "Redis", "TLS 1.3"],
  },
];

export default function CaseStudies() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            Enterprise Impact
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Case Studies
          </h2>
        </div>
        <Link
          href="/clients"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <span>All client stories</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {caseStudies.map((study, idx) => {
          const Icon = study.icon;
          return (
            <div
              key={idx}
              className="figma-card p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Document Icon Box from Figma */}
                <div className="w-12 h-12 rounded-xl bg-[#090d15] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all mb-5">
                  <Icon size={22} className="stroke-[1.75]" />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  <span>{study.category}</span>
                  <span className="text-slate-500">{study.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors line-clamp-2">
                  {study.title}
                </h3>

                <p className="text-xs text-slate-400 font-mono mb-3">
                  Client: <span className="text-slate-300">{study.client}</span>
                </p>

                <p className="text-xs text-[#94a3b8] leading-relaxed mb-6">
                  {study.impact}
                </p>
              </div>

              {/* Bottom bar with tags and read link */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {study.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/clients"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold text-slate-300 group-hover:text-cyan-400 transition-colors flex-shrink-0 ml-2"
                >
                  <span>Read</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
