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
          1. HERO BANNER: Full Clear Panoramic Tech Desk Image with Frosted Glass Overlay
          ========================================================================= */}
      <section className="relative w-full min-h-[460px] sm:min-h-[500px] flex items-center border-b border-slate-200 overflow-hidden group">
        {/* Full-Bleed Clear Background Image */}
        <img
          src="/images/hero_fintech_desk.jpg"
          alt="Fintech Command Suite"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000"
        />

        {/* Silky Frosted Gradient: leaves image full and crystal-clear on the right, providing high-contrast readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/20 sm:to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4D47D7]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Text Container Centered Over Image */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-2xl space-y-4 text-left bg-white/90 sm:bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/80 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D47D7]/10 border border-[#4D47D7]/20 text-xs font-mono font-bold text-[#4D47D7]">
              <Layers size={13} className="text-[#4D47D7]" />
              <span>Full-Spectrum ICT & Fintech Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              What{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] via-[#6366f1] to-[#0ea5e9]">
                We Offer
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              From custom software platforms and Shariah financial technology to digital marketing and high-authority algorithmic SEO, engineered for enterprise scale.
            </p>
          </div>
        </div>

        {/* Floating Live Badge on the bottom-right corner of the clear photo */}
        <div className="hidden md:flex absolute bottom-6 right-8 z-10 items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/80 shadow-lg text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-slate-800 font-bold">Solutions Operations</span>
          <span className="text-[#4D47D7] font-semibold">&bull; Kuala Lumpur HQ</span>
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
                className="purple-card p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#4D47D7]/30 transition-all relative overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start relative z-10">
                  {/* Service Info Column */}
                  <div className={`lg:col-span-7 space-y-4 ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#4D47D7] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#4D47D7]/30">
                        <Icon size={20} className="stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4D47D7] block">
                          {service.badge}
                        </span>
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs font-mono font-semibold text-[#4D47D7]">
                      {service.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Solutions List */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                        Deliverables & Architecture
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.solutions.map((solution, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 size={13} className="text-[#4D47D7] shrink-0 mt-0.5" />
                            <span>{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Link */}
                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4D47D7] hover:bg-[#3d37c9] text-white font-bold text-xs transition-all shadow-md shadow-[#4D47D7]/25"
                      >
                        <span>Inquire About {service.title}</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>

                  {/* Tech Stack Box */}
                  <div className={`lg:col-span-5 w-full ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                        <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4D47D7]">
                          Tech Stack
                        </h4>
                        <span className="text-[10px] text-slate-500 font-mono">
                          Enterprise
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-700 shadow-2xs"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4D47D7]" />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
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
            3. ENGINEERING PROCESS BANNER WITH COOL GRADIENT
            ========================================================================= */}
        <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 border border-slate-200/90 shadow-lg space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#4D47D7] font-bold">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              How We Deliver Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
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
              <div key={item.step} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-xs">
                <span className="text-lg font-black text-[#4D47D7] font-mono">
                  {item.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}