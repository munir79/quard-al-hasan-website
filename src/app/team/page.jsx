import Link from "next/link";
import { Users, Award, Shield, Code, ArrowRight, UserCheck } from "lucide-react";
import { leadershipData, teamMembersData, companyInfo } from "@/data/companyData";

export const metadata = {
  title: "Our Team & Leadership | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Meet the leadership and engineering professionals behind Qardh Al Hasan Fintech Sdn. Bhd., led by CEO Md Mominul Islam in Brickfields, Kuala Lumpur, Malaysia.",
};

export default function TeamPage() {
  return (
    <div className="py-10 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* =========================================================================
          1. HERO SECTION: Full Clear Panoramic Boardroom Image with Frosted Glass Overlay
          ========================================================================= */}
      <section className="relative rounded-3xl overflow-hidden min-h-[480px] sm:min-h-[520px] flex items-center p-6 sm:p-12 lg:p-14 border border-slate-200/90 shadow-2xl group">
        {/* Full-Bleed Clear Background Image */}
        <img
          src="/images/corporate_boardroom.jpg"
          alt="Qardh Al Hasan Executive Governance Boardroom in Kuala Lumpur"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000"
        />

        {/* Silky Frosted Gradient: leaves the image full and crystal-clear on the right, providing high-contrast readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/20 sm:to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4D47D7]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content on Aesthetic Frosted Glass Card Area */}
        <div className="relative z-10 max-w-2xl space-y-5 bg-white/90 sm:bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/80 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D47D7]/10 border border-[#4D47D7]/20 text-xs font-bold text-[#4D47D7]">
            <Users size={14} className="text-[#4D47D7]" />
            <span>Talent & Executive Governance</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Leadership &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] to-[#706bf5]">
              Team Members
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            Led by experienced CEO Md Mominul Islam, Qardh Al Hasan Fintech is supported by a seasoned management and engineering team across software, fintech, and digital platforms.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <Shield size={14} className="text-[#4D47D7]" />
              Registered in Malaysia
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <Code size={14} className="text-[#4D47D7]" />
              Certified Tech Squads
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <Award size={14} className="text-[#4D47D7]" />
              10+ Years Collective Ex
            </span>
          </div>
        </div>

        {/* Floating Live Badge on the bottom-right corner of the clear photo */}
        <div className="hidden md:flex absolute bottom-6 right-6 z-10 items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/80 shadow-lg text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-slate-800 font-bold">Executive Boardroom</span>
          <span className="text-[#4D47D7] font-semibold">&bull; Brickfields HQ</span>
        </div>
      </section>

      {/* Board of Directors / Founders Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4D47D7]">
              Executive Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Board of Directors
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500">
            Registered in Malaysia
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadershipData.map((leader) => (
            <div
              key={leader.name}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#4D47D7]/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#4D47D7]/10 text-[#4D47D7] border border-[#4D47D7]/20">
                    {leader.badge}
                  </span>
                  <div className="text-xs font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
                    {leader.shares}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#4D47D7] transition-colors">
                    {leader.name}
                  </h3>
                  <div className="text-sm font-mono font-bold text-[#4D47D7]">
                    {leader.role}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {leader.nationality} &bull; Resident in {leader.residence}
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {leader.background}
                </p>

                <div className="pt-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Core Specializations
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {leader.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                <span>Executive Council</span>
                <span className="text-[#4D47D7]">Qardh Al Hasan Fintech</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Team Members */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4D47D7]">
            Operational Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Engineering & Operational Team
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Certified technical specialists driving product delivery, client satisfaction, and platform innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembersData.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#4D47D7]/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4D47D7]/10 text-[#4D47D7] border border-[#4D47D7]/20 flex items-center justify-center font-bold group-hover:scale-105 group-hover:bg-[#4D47D7] group-hover:text-white transition-all">
                  <UserCheck size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#4D47D7] transition-colors">{member.name}</h3>
                  <div className="text-xs font-mono font-bold text-[#4D47D7] mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500">
                    {member.department}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offshore Team Augmentation CTA */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#4D47D7] via-[#5c56e8] to-[#6e68f3] text-white shadow-2xl space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-3xl space-y-3 relative z-10">
          <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 border border-white/25 text-white inline-block">
            Offshore Staffing & Dedicated Squads
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Hire Our Dedicated Offshore Engineering Teams
          </h2>
          <p className="text-sm text-white/90 leading-relaxed font-normal">
            Need skilled developers, software engineers, or UI/UX designers to augment your internal capacity? We supply vetted, certified offshore development squads managed directly from Kuala Lumpur, Malaysia.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-2 relative z-10">
          <Link
            href="/contact"
            className="px-6 py-3.5 rounded-xl bg-white text-[#4D47D7] font-black text-xs sm:text-sm hover:bg-slate-100 shadow-lg inline-flex items-center justify-center gap-2 transition-all"
          >
            <span>Request Offshore Squad</span>
            <ArrowRight size={15} />
          </Link>
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all"
          >
            <span>Direct Call: {companyInfo.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
