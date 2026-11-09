import {
  ShieldCheck,
  Scale,
  FileCheck,
  Code2,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

const principles = [
  {
    num: "01",
    title: "100% Source Code & IP Ownership",
    description:
      "Unlike predatory agencies that hold client software hostage, we sign over complete intellectual property, repository access, and deployment credentials to you upon project milestone sign-off.",
    icon: Code2,
  },
  {
    num: "02",
    title: "Milestone-Based Transparent Pricing",
    description:
      "True to the spirit of Qardh Al Hasan (benevolent fairness), you only pay for completed, verified delivery milestones. Zero hidden maintenance fees, zero unexpected surprises.",
    icon: Scale,
  },
  {
    num: "03",
    title: "Shariah & Regulatory Awareness",
    description:
      "We understand Islamic financial principles, BNM compliance expectations, and personal data protection (PDPA Malaysia). Every transaction flow is engineered with ethical integrity.",
    icon: ShieldCheck,
  },
  {
    num: "04",
    title: "Dedicated Engineering Warranty",
    description:
      "We stand behind our architecture with an inclusive 30-day post-launch warranty and bug-fix guarantee, ensuring your software launches smoothly without operational friction.",
    icon: FileCheck,
  },
];

export default function EthicalPhilosophy() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200/60 text-xs font-mono font-bold text-primary">
            <HeartHandshake size={14} />
            <span>The Qardh Al Hasan Difference</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Our Name Means{" "}
            <span className="text-logo-gradient">Uncompromising Trust</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            In Islamic finance, <em className="font-semibold text-slate-800">Qardh Al Hasan</em> represents a benevolent, ethical loan founded on goodwill and social responsibility. We bring this exact standard of honesty and fairness to modern software engineering.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:border-primary-300 hover:bg-white hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-logo-gradient group-hover:text-white group-hover:border-transparent transition-all shadow-xs">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-primary transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-bold">
                  <CheckCircle2 size={13} />
                  <span>Standard in all agreements</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
