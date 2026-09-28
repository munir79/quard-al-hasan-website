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
    <div className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#170836]/75 hover:bg-[#200c4a]/90 border border-purple-500/25 hover:border-fuchsia-400/60 backdrop-blur-2xl transition-all duration-300 shadow-xl shadow-purple-950/40 hover:shadow-purple-600/20 hover:-translate-y-1.5 overflow-hidden">
      {/* Subtle hover bloom inside card */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-fuchsia-500/0 group-hover:bg-fuchsia-500/10 rounded-full blur-3xl transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Header Row with Circular Purple Gradient Icon */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-500 flex items-center justify-center text-white group-hover:scale-110 shadow-lg shadow-purple-600/40 transition-all duration-300">
            <IconComponent size={26} className="stroke-[2.2]" />
          </div>
          {service.badge && (
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-200 shadow-sm">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-purple-200 transition-colors mb-1.5">
          {service.title}
        </h3>
        <p className="text-xs font-bold uppercase tracking-wider text-fuchsia-400 mb-3">
          {service.subtitle}
        </p>
        <p className="text-sm text-purple-100/80 leading-relaxed mb-6 font-normal">
          {service.description}
        </p>

        {/* Key Solutions List */}
        <div className="space-y-2 mb-6 pt-4 border-t border-purple-500/20">
          <div className="text-xs font-extrabold uppercase tracking-wider text-purple-300/70 mb-2">
            Deliverables
          </div>
          {service.solutions.slice(0, 4).map((solution, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs font-medium text-purple-200">
              <CheckCircle2 size={15} className="text-fuchsia-400 flex-shrink-0 mt-0.5" />
              <span>{solution}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Chips & Signature Arrow Button */}
      <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5 max-w-[70%]">
          {service.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-purple-950/60 text-purple-300 border border-purple-500/20"
            >
              {tech}
            </span>
          ))}
          {service.techStack.length > 3 && (
            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-purple-500/20 text-fuchsia-300 border border-purple-400/30">
              +{service.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Signature Gradient Arrow Pill Button */}
        <Link
          href="/services"
          className="w-12 h-6 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-400 hover:to-fuchsia-400 flex items-center justify-center text-white shadow-md shadow-purple-600/30 transition-all group-hover:w-14"
          title={`Learn more about ${service.title}`}
        >
          <ArrowRight size={14} className="stroke-[2.5]" />
        </Link>
      </div>
    </div>
  );
}
