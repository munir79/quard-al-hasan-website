import Link from "next/link";
import { notFound } from "next/navigation";
import RouteHeroBanner from "@/components/flairs/RouteHeroBanner";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { industriesList } from "../page";

const industryImages = {
  "banking-and-finance": "/images/hero_fintech_desk.jpg",
  "enterprise-software": "/images/it-hero-bg.jpg",
  "ecommerce-and-retail": "/images/purple-isometric-cloud.jpg",
  "transportation-and-logistics": "/images/analytics-desk.jpg",
  "healthcare": "/images/hero_3d_glass.jpg",
};

export function generateStaticParams() {
  return industriesList.map((ind) => ({ slug: ind.slug }));
}

export function generateMetadata({ params }) {
  const industry = industriesList.find((i) => i.slug === params.slug);
  if (!industry) return { title: "Industry | Qardh Al Hasan Fintech Sdn. Bhd." };

  return {
    title: `${industry.title} Software Solutions | Qardh Al Hasan Fintech Sdn. Bhd.`,
    description: industry.desc,
  };
}

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

const standards = [
  { label: "Security Protocol", value: "AES-256 Encryption" },
  { label: "Deployment Architecture", value: "Cloud Microservices" },
  { label: "Compliance Verification", value: "100% Shariah Certified" },
];

export default function IndustryDetailPage({ params }) {
  const industry = industriesList.find((i) => i.slug === params.slug);

  if (!industry) {
    notFound();
  }

  const Icon = industry.icon;

  return (
    <div className="w-full bg-[#0A0F1C] text-white">
      {/* 1. Hero Banner */}
      <RouteHeroBanner
        badge={industry.metric}
        badgeIcon={Icon}
        title={industry.title}
        description={industry.desc}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
        image={industryImages[industry.slug] || "/images/cyber-hq.jpg"}
      >
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-7 py-3.5 sm:py-4 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 transition-all hover:scale-105 active:scale-95"
          >
            <span>All Industries</span>
          </Link>
        </div>
      </RouteHeroBanner>

      {/* 2. Solutions (text from the left, panel from the right) */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.3] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-32 right-0 h-[460px] w-[640px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[520px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <RevealGroup className="lg:col-span-7 space-y-6">
              <RevealItem from="left">
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                  Domain Architecture
                </span>
              </RevealItem>
              <RevealItem from="left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Specialized Enterprise Capabilities
                </h2>
              </RevealItem>
              <RevealItem from="left">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  We engineer scalable digital platforms that solve the exact regulatory, security, and operational bottlenecks found in the {industry.title} sector.
                </p>
              </RevealItem>

              <RevealItem from="left" className="pt-4">
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                  Core Industry Workflows
                </div>
              </RevealItem>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {industry.solutions.map((sol, idx) => (
                  <RevealItem key={idx} from="left">
                    <div className="h-full flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10 text-base text-slate-200 leading-snug">
                      <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  </RevealItem>
                ))}
              </div>
            </RevealGroup>

            <Reveal from="right" className="lg:col-span-5">
              <div className={`${card} p-8 sm:p-9 space-y-8`}>
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                    Governance & Standards
                  </div>
                  <div className="space-y-3">
                    {standards.map((s) => (
                      <div
                        key={s.label}
                        className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-wrap items-center justify-between gap-x-4 gap-y-1"
                      >
                        <span className="text-base text-slate-300">{s.label}</span>
                        <span className="text-base font-semibold text-white">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/[0.04] border border-white/10 space-y-4">
                  <div className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                    Brickfields KL Direct Line
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    Discuss Your {industry.title} Roadmap
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed">
                    Connect with our technical architects to scope your requirements and timeline.
                  </p>
                  <Link
                    href="/contact"
                    className="group w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <span>Book Strategy Call</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Pre-Footer Call to Action (Matching User Reference Design) */}
      <section className="relative py-20 sm:py-28 text-center overflow-hidden bg-[#0B0F19] border-t border-white/10">
        {/* Tech Dot Grid Matrix matching user reference */}
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        
        {/* Ambient subtle violet-indigo center radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[750px] rounded-full bg-gradient-to-r from-purple-600/15 via-indigo-600/20 to-blue-600/15 blur-[120px] pointer-events-none" />

        <RevealGroup className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <RevealItem from="left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Build Your Next {industry.title} Platform
            </h2>
          </RevealItem>
          <RevealItem from="right">
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a 30-minute discovery consultation with our technical team in Kuala Lumpur.
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