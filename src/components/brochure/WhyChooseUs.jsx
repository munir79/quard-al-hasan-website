"use client";

import { Rocket, ShieldCheck, Users, TrendingUp, Quote } from "lucide-react";
import { whyChooseUsData, companyInfo } from "@/data/companyData";

const icons = {
  Rocket: Rocket,
  Shield: ShieldCheck,
  Users: Users,
  TrendingUp: TrendingUp,
};

export default function WhyChooseUs() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* Left Column: Why Choose Us 4 Feature Cards */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-fuchsia-400 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#d946ef]" />
              Strategic Advantage
            </div>

            {/* Header matching Brochure */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                Choose Us?
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full mt-2 mb-6" />
          </div>

          {/* 4 Feature Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseUsData.map((item, idx) => {
              const IconComponent = icons[item.iconName] || Rocket;
              return (
                <div
                  key={idx}
                  className="purple-card p-5 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-3">
                    {/* Circular Purple Gradient Icon Badge matching Brochure */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-purple-600/40 group-hover:scale-110 group-hover:shadow-fuchsia-500/60 transition-all duration-300">
                      <IconComponent size={22} className="stroke-[2.2]" />
                    </div>

                    <h3 className="text-lg font-black text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-purple-200/80 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-purple-500/20 flex items-center justify-between text-[10px] font-mono text-purple-400">
                    <span>Guaranteed SLA</span>
                    <span className="text-fuchsia-300 font-bold">100% Adherence</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Exact Dark Purple Quote Card from Brochure Center Panel */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#1c0b3d] via-[#150730] to-[#0f0424] border border-purple-400/30 shadow-2xl shadow-purple-950/80 flex flex-col justify-between overflow-hidden group hover:border-fuchsia-400/50 transition-all h-full min-h-[380px]">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Giant Stylized Quotation Mark */}
              <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-fuchsia-400">
                <Quote size={28} className="fill-fuchsia-400/30" />
              </div>

              {/* Exact Tagline Quote from Brochure */}
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Your Vision.
                </p>
                <p className="text-2xl sm:text-3xl font-black text-purple-200 leading-tight">
                  Our Technology.
                </p>
                <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-300 to-purple-300 leading-tight drop-shadow-[0_0_20px_rgba(217,70,239,0.35)]">
                  Endless Possibilities.
                </p>
              </div>

              <p className="text-xs text-purple-200/70 leading-relaxed font-normal pt-2">
                We combine technical precision, Shariah financial governance, and rapid execution to turn complex enterprise challenges into measurable business success.
              </p>
            </div>

            {/* Bottom Signature with Brand Polygon */}
            <div className="relative z-10 pt-6 border-t border-purple-500/25 flex items-center gap-3.5 mt-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 p-[1.5px] shadow-md shadow-purple-600/30 flex-shrink-0">
                <div className="w-full h-full bg-[#120626] rounded-[9px] flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-gradient-to-br from-purple-400 to-fuchsia-400 rounded-sm transform rotate-45" />
                </div>
              </div>
              <div>
                <div className="font-extrabold text-sm text-white">
                  Qardh Al Hasan
                </div>
                <div className="text-[10px] text-purple-300 font-mono">
                  Fintech Sdn. Bhd. &bull; Malaysia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
