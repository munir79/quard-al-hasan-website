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
          1. FIRST SECTION: HERO IMAGE BANNER (Verified Zero People)
          ========================================================================= */}
      <section className="relative rounded-3xl p-1 bg-gradient-to-tr from-purple-500/40 via-fuchsia-500/30 to-pink-400/20 shadow-2xl overflow-hidden">
        <div className="relative rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[460px] flex items-end bg-[#0c041a] group">
          <img
            src="/images/corporate_boardroom.jpg"
            alt="Qardh Al Hasan Executive Governance Boardroom in Kuala Lumpur"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090314] via-[#090314]/75 to-[#090314]/25 pointer-events-none" />

          {/* Clean Content Directly on Image */}
          <div className="relative z-10 p-6 sm:p-12 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/30 backdrop-blur-md border border-purple-400/40 text-xs font-bold text-purple-200">
              <Users size={14} className="text-fuchsia-400" />
              <span>Talent & Governance</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Leadership &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                Team Members
              </span>
            </h1>
            <p className="text-base sm:text-lg text-purple-200/90 leading-relaxed font-normal max-w-3xl">
              Led by experienced CEO Md Mominul Islam, Qardh Al Hasan Fintech is supported by a seasoned management and engineering team across software, fintech, and digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Board of Directors / Founders Section */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-fuchsia-400">
              Executive Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Board of Directors
            </h2>
          </div>
          <span className="text-xs font-mono font-bold text-purple-300">
            Registered in Malaysia
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leadershipData.map((leader) => (
            <div
              key={leader.name}
              className="purple-card p-8 sm:p-10 shadow-2xl flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-purple-500/20 text-purple-200 border border-purple-400/30">
                    {leader.badge}
                  </span>
                  <div className="text-xs font-mono font-bold text-purple-200 bg-purple-950/60 border border-purple-500/20 px-3 py-1 rounded-md">
                    {leader.shares}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-300 transition-colors">
                    {leader.name}
                  </h3>
                  <div className="text-sm font-mono font-bold text-fuchsia-400">
                    {leader.role}
                  </div>
                  <div className="text-xs font-medium text-purple-300/80">
                    {leader.nationality} &bull; Resident in {leader.residence}
                  </div>
                </div>

                <p className="text-sm text-purple-200/90 leading-relaxed font-normal">
                  {leader.background}
                </p>

                <div className="pt-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 mb-2">
                    Core Specializations
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {leader.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-500/20 text-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-purple-500/20 flex items-center justify-between text-xs font-bold text-purple-400">
                <span>Executive Council</span>
                <span className="text-fuchsia-300">Qardh Al Hasan Fintech</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Team Members */}
      <section className="space-y-8">
        <div className="border-b border-purple-500/20 pb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-fuchsia-400">
            Operational Excellence
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Engineering & Operational Team
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/80 mt-1">
            Certified technical specialists driving product delivery, client satisfaction, and platform innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembersData.map((member) => (
            <div
              key={member.name}
              className="purple-card p-6 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-400/30 flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                  <UserCheck size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-purple-300 transition-colors">{member.name}</h3>
                  <div className="text-xs font-mono font-bold text-fuchsia-400 mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-semibold text-purple-300/80">
                    {member.department}
                  </div>
                </div>

                <p className="text-xs text-purple-200/80 leading-relaxed font-normal">
                  {member.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-950/60 border border-purple-500/20 text-purple-200"
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
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/80 via-[#210c4d] to-fuchsia-950/80 text-white shadow-2xl border border-purple-400/30 backdrop-blur-2xl space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-fuchsia-400">
            Offshore Staffing & Dedicated Squads
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-sm">
            Hire Our Dedicated Offshore Engineering Teams
          </h2>
          <p className="text-sm text-purple-200/90 leading-relaxed font-normal">
            Need skilled developers, software engineers, or UI/UX designers to augment your internal capacity? We supply vetted, certified offshore development squads managed directly from Kuala Lumpur, Malaysia.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link
            href="/contact"
            className="btn-purple-primary inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-black"
          >
            <span>Request Offshore Squad</span>
            <ArrowRight size={15} />
          </Link>
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="btn-purple-secondary inline-flex items-center justify-center gap-2 text-xs sm:text-sm"
          >
            <span>Direct Call: {companyInfo.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
