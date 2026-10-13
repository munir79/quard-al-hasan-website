import Link from "next/link";
import {
  Target,
  Building2,
  Rocket,
  Landmark,
  Globe2,
  Store,
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { targetMarketData, companyInfo } from "@/data/companyData";

export const metadata = {
  title: "Target Market & Clients | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Discover how Qardh Al Hasan Fintech serves SMEs, startups, government/nonprofits, corporations, and international offshore clients with value-driven technology.",
};

const marketIcons = [Store, Rocket, Landmark, Building2, Globe2];

export default function ClientsPage() {
  return (
    <div className="py-10 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* =========================================================================
          1. HERO SECTION: Full Clear Panoramic Image with Frosted Glass Overlay
          ========================================================================= */}
      <section className="relative rounded-3xl overflow-hidden min-h-[480px] sm:min-h-[520px] flex items-center p-6 sm:p-12 lg:p-14 border border-slate-200/90 shadow-2xl group">
        {/* Full-Bleed Clear Background Image */}
        <img
          src="/images/hero_fintech_desk.jpg"
          alt="Qardh Al Hasan Global Market Operations and Client Analytics Desk"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000"
        />

        {/* Silky Frosted Gradient: leaves the image full and crystal-clear on the right, providing high-contrast readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/20 sm:to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4D47D7]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content on Aesthetic Frosted Glass Card Area */}
        <div className="relative z-10 max-w-2xl space-y-5 bg-white/90 sm:bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/80 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D47D7]/10 border border-[#4D47D7]/20 text-xs font-bold text-[#4D47D7]">
            <Target size={14} className="text-[#4D47D7]" />
            <span>Market Positioning & Client Reach</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Clients and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] to-[#706bf5]">
              Target Market
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Qardh Al Hasan Fintech is strategically positioned to serve small and medium enterprises (SMEs), fast-growing startups, government entities, corporate enterprises, and international clients seeking affordable, certified offshore development teams.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <ShieldCheck size={14} className="text-[#4D47D7]" />
              5+ Target Sectors
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <TrendingUp size={14} className="text-[#4D47D7]" />
              Global Offshore Delivery
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <Globe2 size={14} className="text-[#4D47D7]" />
              Kuala Lumpur HQ
            </span>
          </div>
        </div>

        {/* Floating Live Badge on the bottom-right corner of the clear photo */}
        <div className="hidden md:flex absolute bottom-6 right-6 z-10 items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/80 shadow-lg text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-slate-800 font-bold">Client Intelligence Desk</span>
          <span className="text-[#4D47D7] font-semibold">&bull; Kuala Lumpur</span>
        </div>
      </section>

      {/* Target Market Breakdown */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4D47D7]">
            Industry Segments
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Organizations We Empower
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {targetMarketData.map((item, idx) => {
            const Icon = marketIcons[idx % marketIcons.length];
            return (
              <div
                key={item.title}
                className="bg-gradient-to-b from-white via-slate-50/40 to-indigo-50/20 rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#4D47D7]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#4D47D7]/10 border border-[#4D47D7]/20 flex items-center justify-center text-[#4D47D7] group-hover:scale-105 group-hover:bg-[#4D47D7] group-hover:text-white transition-all">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#4D47D7] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Custom Architecture</span>
                  <span className="text-[#4D47D7] font-semibold">Scalable Delivery</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Value-Driven Approach & Ethical Mission */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-slate-200 shadow-xl relative overflow-hidden">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4D47D7]">
            Social Impact & Inclusion
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Empowering Underprivileged Communities Through Accessible Technology
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            With a strong foundation in fintech and a diverse service portfolio—including web and software development, digital marketing, SEO, social media management, and graphics design—we cater to businesses aiming to digitize operations, scale efficiently, and reach wider audiences.
          </p>

          <div className="space-y-3 pt-2">
            {[
              "Affordable digital tools tailored for small businesses with limited budgets",
              "Ethical pricing models with zero hidden retainers or vendor lock-in",
              "Offshore staff enablement offering sustainable tech careers in developing markets",
              "Community-centric software solutions that elevate public welfare and transparency",
            ].map((pt, pIdx) => (
              <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 size={16} className="text-[#4D47D7] flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-white via-indigo-50/60 to-purple-50/40 border border-slate-200/90 space-y-5 shadow-md">
          <div className="w-12 h-12 rounded-2xl bg-[#4D47D7]/10 text-[#4D47D7] border border-[#4D47D7]/20 flex items-center justify-center font-bold">
            <HeartHandshake size={24} />
          </div>
          <h3 className="text-xl font-black text-slate-900">
            Ethical Technology Partnership
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed font-normal">
            Align your digital transformation with social accountability, transparent governance, and sustainable engineering practices.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="btn-purple-primary inline-flex items-center gap-2.5 w-full justify-center text-xs font-bold"
            >
              <span>Explore Partnership Opportunities</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
