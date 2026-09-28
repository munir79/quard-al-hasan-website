import { companyInfo } from "@/data/companyData";
import { Award, Briefcase, CheckCircle, Users } from "lucide-react";

const statIcons = [Award, Briefcase, CheckCircle, Users];

export default function StatsCounter() {
  return (
    <div className="relative z-10 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl purple-card p-6 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-purple-400/50 transition-all">
        {/* Subtle ambient light inside card */}
        <div className="absolute top-0 right-1/4 w-72 h-32 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-purple-500/20">
          {companyInfo.stats.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 ${
                  idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600/30 to-fuchsia-600/30 border border-purple-400/40 flex items-center justify-center text-fuchsia-300 flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.25)] group-hover:scale-105 transition-transform">
                  <IconComponent size={22} />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-sm font-mono">
                      {stat.value}
                    </span>
                    <span className="text-xs font-mono font-bold text-fuchsia-400 uppercase tracking-wider">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-xs text-purple-200/80 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
