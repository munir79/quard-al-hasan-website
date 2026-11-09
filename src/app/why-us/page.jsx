import Link from "next/link";
import RouteHeroBanner from "@/components/flairs/RouteHeroBanner";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ShieldCheck, Cpu, Users, Target, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Why Choose Us | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Discover the Qardh Al Hasan Advantage: Global standards, local Malaysian presence, zero-riba ethical fintech architecture, and one single accountable engineering partner.",
};

const pillars = [
  {
    number: "01",
    title: "Global Delivery, Local Malaysian Feel",
    desc: "Headquartered in Brickfields, Kuala Lumpur, we provide direct face-to-face access, rapid local responses, and cultural understanding backed by international engineering benchmarks.",
    icon: Users,
    highlight: "Direct Access to Senior Technical Leads",
    details: [
      "In-person strategy sessions at our Brickfields, KL office",
      "No time-zone disconnects or outsourced handoffs",
      "Bilingual team fluent in English and Bahasa Malaysia",
    ],
  },
  {
    number: "02",
    title: "100% Shariah-Compliant & Ethical Core",
    desc: "We don't treat ethics as an afterthought. Our fintech ledgers and microfinance platforms are architected strictly around zero-riba principles with automated AAOIFI compliance checks.",
    icon: ShieldCheck,
    highlight: "Zero Interest Architecture Hardcoded",
    details: [
      "Transparent fee schedules with 0.00% interest (riba)",
      "Automated Shariah audit trails & digital proof",
      "Approved workflows for Qardh Al Hasan & Murabaha",
    ],
  },
  {
    number: "03",
    title: "Agile Velocity with Enterprise Rigor",
    desc: "We deliver rapid two-week sprint milestones, automated test coverage, and transparent code reviews so you always see working software rather than empty promises.",
    icon: Cpu,
    highlight: "99% On-Time Milestone Delivery",
    details: [
      "Bi-weekly live staging demos & sprint sign-offs",
      "Over 90% automated unit and end-to-end test coverage",
      "Direct Slack / WhatsApp channel with lead developers",
    ],
  },
  {
    number: "04",
    title: "One Single Accountable Partner",
    desc: "No finger pointing between separate design agencies, developers, and hosting vendors. From initial discovery to 24/7 post-launch maintenance, we take full responsibility.",
    icon: Target,
    highlight: "Full Lifecycle Ownership",
    details: [
      "Single point of contact for UI, code, cloud & security",
      "100% intellectual property & source code handover",
      "Guaranteed SLA uptime & rapid incident response",
    ],
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

export default function WhyUsPage() {
  return (
    <div className="w-full bg-[#0A0F1C] text-white">
      {/* 1. Hero Banner */}
      <RouteHeroBanner
        badge="The Qardh Al Hasan Advantage"
        title="Why Leading Enterprises"
        titleHighlight="Trust Us"
        description="We bridge the gap between high-end Silicon Valley-grade software engineering and deep Islamic financial ethics, giving your business an accountable technology partner."
        breadcrumbs={[{ label: "Why Us" }]}
        image="/images/team-collaboration.jpg"
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white">
            <Users size={16} className="text-[#38BDF8]" />
            Direct Senior Engineer Access
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white">
            <ShieldCheck size={16} className="text-emerald-400" />
            100% Zero-Riba Architecture
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white">
            <Cpu size={16} className="text-[#60A5FA]" />
            Rapid 2-Week Sprint Velocity
          </span>
        </div>
      </RouteHeroBanner>

      {/* 2. Pillars (left column from the left, right column from the right) */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.3] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-32 right-0 h-[460px] w-[640px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[520px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={idx} from={idx % 2 === 0 ? "left" : "right"} className="h-full">
                  <div className={`${card} group h-full p-8 sm:p-10 space-y-6`}>
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black text-white/15">{pillar.number}</span>
                      <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-400 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#753DED] group-hover:to-[#2E5FEB] group-hover:border-transparent group-hover:text-white transition-all shadow-sm">
                        <Icon size={26} />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                        {pillar.title}
                      </h2>
                      <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <ul className="space-y-3 pt-5 border-t border-white/10">
                      {pillar.details.map((item, dIdx) => (
                        <li
                          key={dIdx}
                          className="flex items-start gap-2.5 text-base text-slate-300 leading-snug"
                        >
                          <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-1">
                      <span className="inline-block text-sm font-semibold text-blue-300 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-400/20">
                        {pillar.highlight}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Call to Action (Matching User Reference Design) */}
      <section className="relative py-20 sm:py-28 text-center overflow-hidden bg-[#0B0F19] border-t border-white/10">
        {/* Tech Dot Grid Matrix matching user reference */}
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        
        {/* Ambient subtle violet-indigo center radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[750px] rounded-full bg-gradient-to-r from-purple-600/15 via-indigo-600/20 to-blue-600/15 blur-[120px] pointer-events-none" />

        <RevealGroup className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <RevealItem from="left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Ready to Experience Accountable Tech Delivery?
            </h2>
          </RevealItem>
          <RevealItem from="right">
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a confidential 30-minute discovery consultation with our technical team in Kuala Lumpur.
            </p>
          </RevealItem>
          <RevealItem from="up" className="pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight size={19} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </RevealItem>
        </RevealGroup>
      </section>
    </div>
  );
}