import Link from "next/link";
import {
  Code2,
  Cpu,
  Palette,
  TrendingUp,
  SearchCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  ShieldCheck,
  Share2,
} from "lucide-react";
import { servicesData } from "@/data/companyData";

export const metadata = {
  title: "ICT & Fintech Services | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Explore our complete service offerings: FinTech, Software Development, UI/UX Design, Digital Marketing, SEO, Web Development, and Social Media Management.",
};

const serviceIcons = {
  fintech: ShieldCheck,
  "software-development": Cpu,
  "graphics-uiux": Palette,
  "digital-marketing": TrendingUp,
  "seo-services": SearchCheck,
  "web-development": Code2,
  "social-media-management": Share2,
};

export default function ServicesPage() {
  return (
    <div className="w-full space-y-12 sm:space-y-16 pb-16 overflow-hidden">
      {/* =========================================================================
          1. FULL-WIDTH COVER HERO BANNER WITH TEXT DIRECTLY ON IMAGE
          ========================================================================= */}
      <section className="relative w-full min-h-[380px] sm:min-h-[440px] flex items-center border-b border-purple-500/20 bg-[#090314] overflow-hidden">
        {/* Full-bleed background image */}
        <img
          src="/images/hero_fintech_desk.jpg"
          alt="Fintech Command Suite"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* High-contrast dark gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090314] via-[#090314]/85 to-[#090314]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090314] via-transparent to-[#090314]/40 pointer-events-none" />

        {/* Text Container Centered Over Image */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-2xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-400/30 text-xs font-mono font-medium text-purple-200">
              <Layers size={13} className="text-fuchsia-400" />
              <span>Full-Spectrum ICT & Fintech Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                We Offer
              </span>
            </h1>

            <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed font-normal">
              From custom software platforms and Shariah financial technology to digital marketing and high-authority algorithmic SEO, engineered for enterprise scale.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. SERVICES DEEP DIVE (CENTERED CONTENT)
          ========================================================================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        <section className="space-y-6">
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[service.id] || Code2;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="purple-card p-6 sm:p-8 rounded-xl border border-purple-500/20 bg-[#120626]/60 shadow-xl relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start relative z-10">
                  {/* Service Info Column */}
                  <div className={`lg:col-span-7 space-y-4 ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-purple-600/30">
                        <Icon size={20} className="stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-fuchsia-300 block">
                          {service.badge}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs font-mono font-medium text-purple-300">
                      {service.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-purple-100/80 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Solutions List */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-purple-300/70">
                        Deliverables & Architecture
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.solutions.map((solution, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-purple-200">
                            <CheckCircle2 size={13} className="text-fuchsia-400 shrink-0 mt-0.5" />
                            <span>{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Link */}
                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs transition-all shadow-md shadow-purple-600/25"
                      >
                        <span>Inquire About {service.title}</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>

                  {/* Tech Stack Box */}
                  <div className={`lg:col-span-5 w-full ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="p-4 sm:p-5 rounded-xl bg-purple-950/40 border border-purple-500/20 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                        <h4 className="text-[11px] font-mono font-semibold uppercase tracking-wider text-fuchsia-300">
                          Tech Stack
                        </h4>
                        <span className="text-[10px] text-purple-400 font-mono">
                          Enterprise
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-purple-950/70 border border-purple-500/20 text-[11px] font-mono text-purple-200 shadow-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-[11px] text-purple-300/70 leading-relaxed font-normal">
                        Delivered with enterprise-grade security protocols, automated CI/CD pipelines, and continuous optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* =========================================================================
            3. ENGINEERING PROCESS BANNER
            ========================================================================= */}
        <section className="purple-card p-6 sm:p-8 rounded-xl border border-purple-500/20 bg-[#120626]/60 shadow-xl space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-fuchsia-400 font-semibold">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              How We Deliver Excellence
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/80">
              Our agile engineering lifecycle guarantees speed and stability from kickoff to post-launch.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {[
              { step: "01", title: "Discovery", desc: "Understanding exact objectives, user personas, and technical parameters." },
              { step: "02", title: "Architecture", desc: "Designing system blueprints, data structures, and intuitive UI systems." },
              { step: "03", title: "Agile Build", desc: "Iterative sprints with clean code, testing, and continuous feedback." },
              { step: "04", title: "Deployment", desc: "Automated deployment, security hardening, and dedicated maintenance." },
            ].map((item) => (
              <div key={item.step} className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 space-y-1.5">
                <span className="text-lg font-black text-fuchsia-400 font-mono">
                  {item.step}
                </span>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-purple-200/80 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}