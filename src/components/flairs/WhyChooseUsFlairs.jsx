import {
  ShieldCheck,
  Cpu,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Global Delivery, Local Malaysian Feel",
    desc: "Headquartered in Brickfields, Kuala Lumpur, we combine local responsiveness and cultural understanding with world-class engineering standards.",
    icon: Users,
    highlight: "Direct Access to Senior Leads",
  },
  {
    number: "02",
    title: "100% Shariah-Compliant & Ethical Core",
    desc: "We don't treat ethics as an afterthought. Our fintech ledgers and microfinance platforms are architected strictly around zero-riba principles.",
    icon: ShieldCheck,
    highlight: "Zero Interest Architecture",
  },
  {
    number: "03",
    title: "Agile Velocity with Enterprise Rigor",
    desc: "We deliver rapid two-week sprint milestones, complete test coverage, and transparent code reviews so you are never left in the dark.",
    icon: Cpu,
    highlight: "99% On-Time Delivery",
  },
  {
    number: "04",
    title: "One Single Accountable Partner",
    desc: "No outsourced hand-offs or finger pointing. From initial solution design to post-launch 24/7 SLA maintenance, we take full responsibility.",
    icon: Target,
    highlight: "Full Lifecycle Ownership",
  },
];

export default function WhyChooseUsFlairs() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
            The Qardh Al Hasan Edge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why Leading Businesses{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#2563EB]">
              Trust Us
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            We bridge the gap between high-end Silicon Valley-grade software engineering and deep Islamic financial ethics.
          </p>
        </div>

        {/* 4 Pillars Grid (FlairsTech Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-[#4F46E5]/40 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-slate-300 group-hover:text-[#4F46E5] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 group-hover:bg-[#4F46E5] group-hover:text-white transition-all shadow-xs">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                {/* Highlight Tag */}
                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#4F46E5]">
                    <CheckCircle2 size={13} />
                    <span>{pillar.highlight}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

