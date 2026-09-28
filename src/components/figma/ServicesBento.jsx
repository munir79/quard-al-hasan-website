import Link from "next/link";
import { Server, Code2, ShieldCheck, LayoutGrid, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Website & Portals",
    badge: "High Performance",
    description: "Modern enterprise web platforms, custom portals, headless CMS, and 99.99% SLA reliability.",
    tech: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    badge: "Engineering",
    description: "Enterprise web platforms, microservices backends, and distributed systems built for high transactional throughput.",
    tech: ["Next.js", "Node / Go", "PostgreSQL"],
  },
  {
    icon: ShieldCheck,
    title: "Fintech Systems",
    badge: "Shariah Core",
    description: "Ethical Islamic banking modules, automated Qardh Al Hasan loan ledgers, and zero-riba financial infrastructure.",
    tech: ["Murabaha", "Smart Contracts", "Audit Ready"],
  },
  {
    icon: LayoutGrid,
    title: "System Design",
    badge: "Architecture",
    description: "Monochromatic design systems, precision UI/UX design, accessible component kits, and reactive web applications.",
    tech: ["Figma Systems", "Tailwind", "Motion"],
  },
];

export default function ServicesBento() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header exactly matching Figma typography */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Services
          </h2>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <span>Explore all offerings</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* 4-Card Horizontal Bento Grid from Figma */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="figma-card p-5 sm:p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top border highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/50 transition-all duration-500" />

              <div>
                {/* Icon Container with Figma dark outline styling */}
                <div className="w-11 h-11 rounded-xl bg-[#090d15] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all mb-4">
                  <Icon size={20} className="stroke-[1.75]" />
                </div>

                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  {item.badge}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Minimal Tech Tag Chips */}
              <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-400 border border-white/[0.05]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
