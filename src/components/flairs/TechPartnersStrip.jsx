import {
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  Cloud,
  CheckCircle2,
  Lock,
} from "lucide-react";

const techBadges = [
  { name: "Shariah Compliant Core", category: "Ethical Governance" },
  { name: "Next.js & React", category: "High-Performance Web" },
  { name: "PostgreSQL & Redis", category: "Enterprise Databases" },
  { name: "AWS Cloud Infrastructure", category: "Cloud Architecture" },
  { name: "Docker & Kubernetes", category: "Microservices" },
  { name: "SSM Registered Malaysia", category: "Legal SDN BHD" },
  { name: "Bank-Grade Encryption", category: "AES-256 Security" },
];

export default function TechPartnersStrip() {
  return (
    <section className="border-b border-slate-200/80 bg-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Label */}
          <div className="lg:w-1/4 shrink-0">
            <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
              Engineered With
            </div>
            <div className="text-sm font-bold text-slate-800 mt-0.5">
              Enterprise Tech & Ethical Governance
            </div>
          </div>

          {/* Badges Ticker / Grid */}
          <div className="lg:w-3/4 flex flex-wrap items-center gap-2.5 sm:gap-3">
            {techBadges.map((badge, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-xs font-semibold text-slate-700 hover:border-[#4F46E5]/40 hover:bg-indigo-50/30 transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB]" />
                <span>{badge.name}</span>
                <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">
                  ({badge.category})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

