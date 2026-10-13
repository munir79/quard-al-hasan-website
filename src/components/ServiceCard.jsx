import Link from "next/link";
import {
  Code2,
  Share2,
  Cpu,
  Palette,
  TrendingUp,
  SearchCheck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe,
} from "lucide-react";

const icons = {
  Code2,
  Share2,
  Cpu,
  Palette,
  TrendingUp,
  SearchCheck,
  ShieldCheck,
  Globe,
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = icons[service.iconName] || Code2;

  return (
    <div className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white hover:bg-slate-50/50 border border-slate-200/90 hover:border-[#4D47D7]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      {/* Subtle hover bloom inside card */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#4D47D7]/5 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Header Row with Circular Purple Gradient Icon */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#4D47D7]/10 border border-[#4D47D7]/20 flex items-center justify-center text-[#4D47D7] group-hover:scale-110 group-hover:bg-[#4D47D7] group-hover:text-white transition-all duration-300 shadow-sm">
            <IconComponent size={26} className="stroke-[2.2]" />
          </div>
          {service.badge && (
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-[#4D47D7]/10 border border-[#4D47D7]/20 text-[#4D47D7] shadow-sm">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#4D47D7] transition-colors mb-1.5">
          {service.title}
        </h3>
        <p className="text-xs font-bold uppercase tracking-wider text-[#4D47D7] mb-3">
          {service.subtitle}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
          {service.description}
        </p>

        {/* Key Solutions List */}
        <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2">
            Deliverables
          </div>
          {service.solutions.slice(0, 4).map((solution, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
              <CheckCircle2 size={15} className="text-[#4D47D7] flex-shrink-0 mt-0.5" />
              <span>{solution}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Chips & Signature Arrow Button */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5 max-w-[70%]">
          {service.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200"
            >
              {tech}
            </span>
          ))}
          {service.techStack.length > 3 && (
            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-[#4D47D7]/10 text-[#4D47D7] border border-[#4D47D7]/20">
              +{service.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Signature Arrow Button */}
        <Link
          href="/services"
          className="w-10 h-10 rounded-full bg-[#4D47D7] hover:bg-[#3d37c4] text-white flex items-center justify-center shadow-md shadow-indigo-500/20 transition-all group-hover:scale-105"
          title={`Learn more about ${service.title}`}
        >
          <ArrowRight size={15} className="stroke-[2.5]" />
        </Link>
      </div>
    </div>
  );
}
