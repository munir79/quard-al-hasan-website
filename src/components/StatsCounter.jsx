import { companyInfo } from "@/data/companyData";
import { Award, Briefcase, CheckCircle, Users } from "lucide-react";

const statIcons = [Award, Briefcase, CheckCircle, Users];

export default function StatsCounter() {
  return (
    <div className="relative z-10 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl relative overflow-hidden group hover:border-[#4D47D7]/40 hover:shadow-2xl transition-all">
        {/* Subtle ambient light inside card */}
        <div className="absolute top-0 right-1/4 w-72 h-32 bg-[#4D47D7]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {companyInfo.stats.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 ${
                  idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#4D47D7]/10 border border-[#4D47D7]/20 flex items-center justify-center text-[#4D47D7] flex-shrink-0 group-hover:scale-105 group-hover:bg-[#4D47D7] group-hover:text-white transition-all shadow-sm">
                  <IconComponent size={22} />
                </div>
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
                      {stat.value}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#4D47D7] uppercase tracking-wider">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
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
