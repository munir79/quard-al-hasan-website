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
      <div className="relative rounded-3xl p-6 sm:p-10 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/30 border border-slate-200/90 shadow-sm">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4D47D7]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
          {/* Left Column: Why Choose Us 4 Feature Cards */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4D47D7] uppercase tracking-widest mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4D47D7]" />
                Strategic Advantage
              </div>

              {/* Header matching Brochure */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Why{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] via-[#6366f1] to-[#0ea5e9]">
                  Choose Us?
                </span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#4D47D7] to-[#6366f1] rounded-full mt-2 mb-6" />
            </div>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChooseUsData.map((item, idx) => {
                const IconComponent = icons[item.iconName] || Rocket;
                return (
                  <div
                    key={idx}
                    className="p-5 flex flex-col justify-between group relative overflow-hidden bg-white/95 backdrop-blur-sm border border-slate-200/90 hover:border-[#4D47D7]/40 rounded-2xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="space-y-3">
                      {/* Circular Primary Color Icon Badge matching Brand */}
                      <div className="w-12 h-12 rounded-full bg-[#4D47D7] flex items-center justify-center text-white shadow-md shadow-[#4D47D7]/30 group-hover:scale-105 transition-all duration-300">
                        <IconComponent size={22} className="stroke-[2.2]" />
                      </div>

                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#4D47D7] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Guaranteed SLA</span>
                      <span className="text-[#4D47D7] font-bold">100% Adherence</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        {/* Right Column: High-Impact Startup Quote Card */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#4D47D7] via-[#433DC5] to-[#352FB0] text-white shadow-xl shadow-[#4D47D7]/20 flex flex-col justify-between overflow-hidden group transition-all h-full min-h-[380px]">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Stylized Quotation Mark */}
              <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-white">
                <Quote size={28} className="fill-white/30" />
              </div>

              {/* Exact Tagline Quote */}
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Your Vision.
                </p>
                <p className="text-2xl sm:text-3xl font-black text-indigo-100 leading-tight">
                  Our Technology.
                </p>
                <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-200 to-white leading-tight">
                  Endless Possibilities.
                </p>
              </div>

              <p className="text-xs text-indigo-100/90 leading-relaxed font-normal pt-2">
                We combine technical precision, Shariah financial governance, and rapid execution to turn complex enterprise challenges into measurable business success.
              </p>
            </div>

            {/* Bottom Signature with Brand Polygon */}
            <div className="relative z-10 pt-6 border-t border-white/20 flex items-center gap-3.5 mt-6">
              <div className="w-9 h-9 rounded-xl bg-white/20 p-[1.5px] shadow-sm flex-shrink-0">
                <div className="w-full h-full bg-[#352FB0] rounded-[9px] flex items-center justify-center">
                  <div className="w-3.5 h-3.5 bg-white rounded-xs transform rotate-45" />
                </div>
              </div>
              <div>
                <div className="font-extrabold text-sm text-white">
                  Qardh Al Hasan
                </div>
                <div className="text-[10px] text-indigo-200 font-mono">
                  Fintech Sdn. Bhd. &bull; Malaysia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
