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
          1. FIRST SECTION: HERO IMAGE BANNER (Verified Zero People)
          ========================================================================= */}
      <section className="relative rounded-3xl p-1 bg-gradient-to-tr from-purple-500/40 via-fuchsia-500/30 to-pink-400/20 shadow-2xl overflow-hidden">
        <div className="relative rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[460px] flex items-end bg-[#0c041a] group">
          <img
            src="/images/hero_fintech_desk.jpg"
            alt="Qardh Al Hasan Global Market Operations and Client Analytics Desk"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090314] via-[#090314]/75 to-[#090314]/25 pointer-events-none" />

          {/* Clean Content Directly on Image */}
          <div className="relative z-10 p-6 sm:p-12 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/30 backdrop-blur-md border border-purple-400/40 text-xs font-bold text-purple-200">
              <Target size={14} className="text-fuchsia-400" />
              <span>Market Positioning & Client Reach</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Clients and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                Target Market
              </span>
            </h1>
            <p className="text-base sm:text-lg text-purple-200/90 leading-relaxed font-normal max-w-3xl">
              Qardh Al Hasan Fintech is strategically positioned to serve small and medium enterprises (SMEs), fast-growing startups, government entities, corporate enterprises, and international clients seeking affordable, certified offshore development teams.
            </p>
          </div>
        </div>
      </section>

      {/* Target Market Breakdown */}
      <section className="space-y-8">
        <div className="border-b border-purple-500/20 pb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-fuchsia-400">
            Industry Segments
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Organizations We Empower
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {targetMarketData.map((item, idx) => {
            const Icon = marketIcons[idx % marketIcons.length];
            return (
              <div
                key={item.title}
                className="purple-card p-8 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 group-hover:scale-105 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-purple-300 transition-colors">{item.title}</h3>
                  <p className="text-sm text-purple-200/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-purple-500/20 flex items-center justify-between text-xs font-bold text-purple-300/80">
                  <span>Custom Architecture</span>
                  <span className="text-fuchsia-400">Scalable Delivery</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Value-Driven Approach & Ethical Mission */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl purple-card shadow-2xl relative overflow-hidden">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-fuchsia-400">
            Social Impact & Inclusion
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Empowering Underprivileged Communities Through Accessible Technology
          </h2>
          <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-normal">
            With a strong foundation in fintech and a diverse service portfolio—including web and software development, digital marketing, SEO, social media management, and graphics design—we cater to businesses aiming to digitize operations, scale efficiently, and reach wider audiences.
          </p>

          <div className="space-y-3 pt-2">
            {[
              "Affordable digital tools tailored for small businesses with limited budgets",
              "Ethical pricing models with zero hidden retainers or vendor lock-in",
              "Offshore staff enablement offering sustainable tech careers in developing markets",
              "Community-centric software solutions that elevate public welfare and transparency",
            ].map((pt, pIdx) => (
              <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-purple-200 font-medium">
                <CheckCircle2 size={16} className="text-fuchsia-400 flex-shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 p-8 rounded-2xl bg-purple-950/40 border border-purple-500/20 space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30 flex items-center justify-center font-bold">
            <HeartHandshake size={24} />
          </div>
          <h3 className="text-xl font-black text-white">
            Ethical Technology Partnership
          </h3>
          <p className="text-xs text-purple-200/80 leading-relaxed font-normal">
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
