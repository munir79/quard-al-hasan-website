import Link from "next/link";
import RouteHeroBanner from "@/components/flairs/RouteHeroBanner";
// import TeamSlider from "@/components/TeamSlider";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Award, Shield, Code, ArrowRight, UserCheck, Building2, Sparkles } from "lucide-react";
import { leadershipData, teamMembersData } from "@/data/companyData";
import TeamSlider from "@/components/TeamSlider/TeamSlider";

export const metadata = {
  title: "Leadership & Team | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Meet the leadership and engineering professionals behind Qardh Al Hasan Fintech Sdn. Bhd., led by CEO Md Mominul Islam in Brickfields, Kuala Lumpur, Malaysia.",
};

const culturePillars = [
  {
    title: "Engineering Excellence",
    desc: "We write clean, test-driven, modular code. Zero shortcuts and rigorous code reviews on every deployment.",
    icon: Code,
  },
  {
    title: "Ethical Integrity",
    desc: "Shariah ethics and consumer transparency are baked into every sprint and product architecture.",
    icon: Shield,
  },
  {
    title: "Continuous Learning",
    desc: "Our architects stay on the cutting edge of AI, cloud microservices, and modern fintech standards.",
    icon: Sparkles,
  },
];

// Shared styling (dark, matching the hero)
const card =
  "rounded-2xl bg-white/[0.03] border border-white/10 transition-[background-color,border-color,box-shadow] duration-300 hover:bg-white/[0.06] hover:border-blue-400/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)]";

const sectionGrid = {
  backgroundImage:
    "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
  maskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 100%)",
};

// 3 columns: left, rise from below, right (so the cards meet in the middle)
const colDirection = (idx) => ["left", "up", "right"][idx % 3];

function initials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function TeamPage() {
  const ceo = leadershipData[0] || {};

  return (
    <div className="w-full bg-[#0A0F1C] text-white">
      {/* 1. Hero Banner */}
      <RouteHeroBanner
        badge="Talent & Executive Governance"
        title="The Minds Behind"
        titleHighlight="the Technology"
        description="Supported by seasoned leadership and dedicated software squads, Qardh Al Hasan Fintech bridges visionary business strategy with disciplined engineering execution."
        breadcrumbs={[{ label: "Leadership & Team" }]}
        image="/images/team-collaboration.jpg"
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white">
            <Building2 size={16} className="text-[#38BDF8]" />
            Brickfields, Kuala Lumpur Office
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white">
            <UserCheck size={16} className="text-emerald-400" />
            20+ Certified Engineers
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white">
            <Award size={16} className="text-[#60A5FA]" />
            10+ Years Combined Expertise
          </span>
        </div>
      </RouteHeroBanner>

      {/* 2. Executive Leadership */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.3] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-32 right-0 h-[460px] w-[640px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[520px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <RevealGroup className="space-y-4">
            <RevealItem from="left">
              <div className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                Executive Leadership
              </div>
            </RevealItem>
            <RevealItem from="left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Guiding Vision & Governance
              </h2>
            </RevealItem>
          </RevealGroup>

          {/* CEO spotlight: text from the left, profile card from the right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <Reveal from="left" className="lg:col-span-8">
              <div className={`${card} h-full p-8 sm:p-12 space-y-5`}>
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-blue-300 bg-blue-500/10 border border-blue-400/20">
                  Chief Executive Officer
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">{ceo.name}</h3>
                <p className="text-lg font-semibold text-sky-300">
                  {ceo.role} &bull; Qardh Al Hasan Fintech Sdn. Bhd.
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">{ceo.background}</p>

                <div className="pt-2 flex flex-wrap gap-2.5">
                  {(ceo.tags || []).map((h, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-lg bg-white/[0.05] border border-white/10 text-sm font-medium text-slate-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal from="right" className="lg:col-span-4">
              <div className={`${card} h-full overflow-hidden flex flex-col`}>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#12254f] via-[#0F1B3D] to-[#0A1226]">
                  {ceo.image ? (
                    <img
                      src={ceo.image}
                      alt={ceo.name}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-500/10 border border-blue-400/25 text-4xl font-bold text-blue-300">
                        {initials(ceo.name) || "MI"}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0F1C]/80 to-transparent" />
                </div>
                <div className="p-6 sm:p-7 space-y-4 text-center flex-1 flex flex-col justify-between">
                  <p className="text-base text-slate-300 leading-relaxed">
                    Directly leading architecture reviews & Shariah technology compliance from Kuala Lumpur.
                  </p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 text-base font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Request Executive Meeting</span>
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Functional Teams: large auto-sliding cards with photos */}
      <section className="relative py-16 sm:py-24 border-t border-white/10 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.25] pointer-events-none" style={sectionGrid} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[900px] max-w-full rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
            <RevealGroup className="max-w-3xl space-y-4">
              <RevealItem from="left">
                <div className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                  Functional Teams
                </div>
              </RevealItem>
              <RevealItem from="left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Dedicated Squads Across{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#60A5FA]">
                    Core Disciplines
                  </span>
                </h2>
              </RevealItem>
            </RevealGroup>
          </div>

          <Reveal from="right">
            <TeamSlider members={teamMembersData} />
          </Reveal>
        </div>
      </section>

      {/* 4. Culture Pillars */}
      <section className="relative py-16 sm:py-24 border-t border-white/10 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.25] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-32 left-0 h-[420px] w-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup className="max-w-3xl space-y-4 mb-12 sm:mb-16">
            <RevealItem from="left">
              <div className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                Culture & Values
              </div>
            </RevealItem>
            <RevealItem from="left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                How We Work Together
              </h2>
            </RevealItem>
          </RevealGroup>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {culturePillars.map((cp, idx) => {
              const Icon = cp.icon;
              return (
                <Reveal key={idx} from={colDirection(idx)} className="h-full">
                  <div className={`${card} group h-full p-8 space-y-5`}>
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#753DED] group-hover:to-[#2E5FEB] group-hover:border-transparent group-hover:text-white transition-all shadow-sm">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-snug">{cp.title}</h3>
                    <p className="text-base text-slate-300 leading-relaxed">{cp.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Careers Callout (Matching User Reference Design) */}
      <section className="relative py-20 sm:py-28 text-center overflow-hidden bg-[#0B0F19] border-t border-white/10">
        {/* Tech Dot Grid Matrix matching user reference */}
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        
        {/* Ambient subtle violet-indigo center radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[750px] rounded-full bg-gradient-to-r from-purple-600/15 via-indigo-600/20 to-blue-600/15 blur-[120px] pointer-events-none" />

        <RevealGroup className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <RevealItem from="left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Interested in Joining Our Team in Kuala Lumpur?
            </h2>
          </RevealItem>
          <RevealItem from="right">
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We are always looking for passionate full-stack software engineers, Shariah fintech consultants, and UI/UX designers.
            </p>
          </RevealItem>
          <RevealItem from="up" className="pt-2">
            <a
              href="mailto:qardhalhasanfintech@gmail.com?subject=Career%20Inquiry"
              className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Send Your Resume</span>
              <ArrowRight size={19} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </RevealItem>
        </RevealGroup>
      </section>
    </div>
  );
}