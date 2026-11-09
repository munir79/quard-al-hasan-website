import Link from "next/link";
import RouteHeroBanner from "@/components/flairs/RouteHeroBanner";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import {
  ShieldCheck,
  Cpu,
  Globe,
  Palette,
  TrendingUp,
  Search,
  CheckCircle2,
  ArrowRight,
  Layers,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Services & Capabilities | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Explore our enterprise technology offerings: Shariah-compliant FinTech ledgers, custom software development, high-speed Next.js portals, UI/UX design, digital marketing, and SEO.",
};

const fullServices = [
  {
    id: "fintech",
    route: "/services/fintech",
    category: "SPECIALTY FLAGSHIP",
    title: "FinTech & Shariah Core Banking",
    subtitle: "Ethical Banking Engines, Automated Ledgers & Zero-Riba Microfinance",
    icon: ShieldCheck,
    description:
      "We design and engineer enterprise-grade financial technology solutions adhering strictly to Islamic Shariah principles. Our platforms provide transparent bookkeeping, automated loan disbursements, and zero-riba compliance out of the box.",
    deliverables: [
      "Islamic Core Banking & Microfinance Ledgers",
      "Qardh Al Hasan Zero-Interest Loan Management",
      "Murabaha & Commodity Verification Workflows",
      "Automated e-KYC & Digital Customer Onboarding",
    ],
    techStack: ["Next.js", "PostgreSQL", "Node.js", "Redis", "Docker", "AWS"],
    outcomes: "100% Shariah Compliant • Bank-Grade Security • Real-Time Reconciliation",
  },
  {
    id: "software-development",
    route: "/services/software-development",
    category: "ENTERPRISE SYSTEMS",
    title: "Custom Software Development",
    subtitle: "High-Throughput Microservices, ERPs & Scalable Cloud Backends",
    icon: Cpu,
    description:
      "When off-the-shelf software falls short, we engineer tailored software systems that integrate seamlessly with your operations. From custom ERPs to API integrations and real-time processing engines.",
    deliverables: [
      "Modular Microservices & REST/GraphQL APIs",
      "Enterprise Resource Planning (ERP) & CRM Systems",
      "Internal Business Dashboards & Administrative Portals",
      "Automated Cloud Infrastructure & CI/CD Pipelines",
    ],
    techStack: ["React", "Node.js", "Python", "Kubernetes", "PostgreSQL", "Docker"],
    outcomes: "99.98% High Availability • Scalable to Millions of Requests • Zero Technical Debt",
  },
  {
    id: "web-development",
    route: "/services/web-development",
    category: "HIGH PERFORMANCE",
    title: "Enterprise Website & Web App Development",
    subtitle: "Ultra-Fast Next.js Portals Engineered for Conversion & Speed",
    icon: Globe,
    description:
      "Your web presence is the frontline of your business. We engineer responsive, ultra-fast web portals that achieve sub-second load times, flawless mobile responsiveness, and high conversion rates.",
    deliverables: [
      "Next.js App Router & React 18 Architecture",
      "Tailwind CSS Enterprise Design Systems",
      "Sub-second Core Web Vitals Performance",
      "Headless CMS Integration (Sanity, Strapi, Contentful)",
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel / AWS", "GraphQL"],
    outcomes: "Sub-Second Load Times • 100/100 Lighthouse Scores • Mobile-First Responsive",
  },
  {
    id: "graphics-design",
    route: "/services/graphics-design",
    category: "BRANDING & DESIGN",
    title: "Graphics Design & UI/UX Systems",
    subtitle: "Intuitive Product Interfaces, Wireframing & Brand Identity",
    icon: Palette,
    description:
      "Exceptional software begins with human-centric design. We create comprehensive UI/UX design systems, user journeys, interactive prototypes, and complete visual branding kits that build immediate trust.",
    deliverables: [
      "Full Corporate Brand Identity Kits & Typography Guides",
      "Component-Driven Figma Design Systems",
      "User Journey Mapping & Information Architecture",
      "Interactive High-Fidelity Clickable Prototypes",
    ],
    techStack: ["Figma", "Design Systems", "Prototyping", "Adobe Suite", "UI Kits"],
    outcomes: "Cohesive Visual Identity • Reduced User Friction • Higher Retention",
  },
  {
    id: "digital-marketing",
    route: "/services/digital-marketing",
    category: "GROWTH MARKETING",
    title: "Digital Marketing & Performance Campaigns",
    subtitle: "Targeted Paid Funnels, Conversion Tracking & Multi-Channel Ads",
    icon: TrendingUp,
    description:
      "We turn traffic into qualified leads. Using algorithmic targeting across Google, Meta, and LinkedIn, we build full-funnel customer acquisition campaigns designed to maximize return on ad spend (ROAS).",
    deliverables: [
      "Google Search, Display & Performance Max Ad Campaigns",
      "Meta (Facebook & Instagram) Targeted Lead Funnels",
      "B2B LinkedIn Enterprise Prospecting",
      "Comprehensive Pixel & Conversion API Tracking",
    ],
    techStack: ["Google Ads", "Meta Ads", "GA4 Analytics", "Tag Manager", "Looker Studio"],
    outcomes: "Measurable ROAS • Qualified Business Leads • Data-Driven Ad Spend",
  },
  {
    id: "seo-services",
    route: "/services/seo-services",
    category: "ORGANIC VISIBILITY",
    title: "SEO Services & Search Authority",
    subtitle: "Algorithmic Technical Audits, Semantic Content & Top Rankings",
    icon: Search,
    description:
      "Dominate high-intent search queries organically. We perform deep technical audits, eliminate crawl errors, optimize on-page schema, and execute targeted content strategies that withstand search engine algorithm updates.",
    deliverables: [
      "Full Technical SEO Audits & Core Web Vitals Fixes",
      "Keyword Intent Mapping & Competitive Gap Analysis",
      "Semantic Content Silos & Blog Architecture",
      "Local SEO Optimization for Malaysian Markets",
    ],
    techStack: ["Ahrefs", "Semrush", "Search Console", "Schema Markup", "Screaming Frog"],
    outcomes: "Sustainable Organic Traffic • Top 3 Google Rankings • Qualified Inbound Pipeline",
  },
];

const engagementModels = [
  {
    title: "Dedicated Engineering Squad",
    desc: "A full-time, dedicated team of developers, QA engineers, and project managers integrated seamlessly with your company.",
    bestFor: "Long-term product development, scaling platforms, and enterprise modernization.",
    tag: "Most Popular",
  },
  {
    title: "Fixed-Scope Project Delivery",
    desc: "A clearly defined milestone roadmap with fixed pricing, transparent deliverable deadlines, and zero scope ambiguity.",
    bestFor: "Specific software builds, MVP launches, website redesigns, and discrete integrations.",
    tag: "Milestone-Driven",
  },
  {
    title: "24/7 Managed Services & SLA",
    desc: "Continuous proactive monitoring, security updates, bug fixes, and SLA guarantees to keep your systems running at 99.98% uptime.",
    bestFor: "Post-launch operations, mission-critical ledgers, and compliance maintenance.",
    tag: "Reliability & Uptime",
  },
];

const faqs = [
  {
    q: "How does Qardh Al Hasan ensure 100% Shariah compliance in FinTech software?",
    a: "Our fintech modules are architected in alignment with Islamic financial jurisprudence. Ledgers strictly enforce 0% interest (riba), transparent transaction fees, and automated verification without speculative elements.",
  },
  {
    q: "Where is your development team located?",
    a: "Our core engineering leadership and software squads are based in Brickfields, Kuala Lumpur, Malaysia. Clients enjoy direct communication, rapid response times, and local face-to-face meetings.",
  },
  {
    q: "Do we retain full ownership of the source code and intellectual property?",
    a: "Yes. Upon project completion and milestone handover, 100% of the custom source code, documentation, and intellectual property belong entirely to your company.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Websites and MVPs are typically delivered in 2–4 weeks. Complex enterprise software and fintech systems take 8–16 weeks with bi-weekly sprint demos along the way.",
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

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#0A0F1C] text-white">
      {/* 1. Hero Banner */}
      <RouteHeroBanner
        badge="Full-Spectrum Technology Capabilities"
        badgeIcon={Layers}
        title="Enterprise Services"
        titleHighlight="Engineered for Scale"
        description="From mission-critical Shariah fintech platforms to custom cloud software, high-speed web apps, and growth marketing, we provide one accountable team to build and scale your vision."
        breadcrumbs={[{ label: "Services" }]}
        image="/images/it-hero-bg.jpg"
      >
        <div className="flex flex-wrap gap-2.5 pt-2">
          {fullServices.map((s) => (
            <Link
              key={s.id}
              href={s.route}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-sm font-medium text-white hover:text-[#38BDF8] transition-colors"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </RouteHeroBanner>

      {/* 2. Services Grid */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.3] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-32 right-0 h-[460px] w-[640px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[520px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {fullServices.map((service, idx) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.id} from={colDirection(idx)} className="h-full">
                  <div className={`${card} group flex h-full flex-col justify-between overflow-hidden p-8`}>
                    <div>
                      {/* Photo header: add /public/images/services/<id>.jpg (see list in the reply) */}
                      <div className="relative -mx-8 -mt-8 mb-7 aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#12254f] via-[#0F1B3D] to-[#0A1226]">
                        <div className="absolute inset-0 flex items-center justify-center text-blue-400/25">
                          <Icon size={84} strokeWidth={1.25} />
                        </div>
                        <img
                          src={`/images/services/${service.id}.jpg`}
                          alt=""
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/25 to-transparent" />
                        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#0A0F1C]/60 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
                          {service.category}
                        </span>
                        <div className="absolute bottom-4 left-5 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-300/30 bg-[#0A0F1C]/70 text-blue-300 backdrop-blur-md transition-all group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-[#753DED] group-hover:to-[#2E5FEB] group-hover:text-white shadow-sm">
                          <Icon size={26} />
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-2 leading-snug">
                        {service.title}
                      </h2>
                      <div className="text-sm font-medium text-slate-400 mb-4 leading-relaxed">
                        {service.subtitle}
                      </div>
                      <p className="text-base text-slate-300 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <ul className="space-y-3 pt-5 border-t border-white/10">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-snug">
                            <CheckCircle2 size={17} className="text-blue-400 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href={service.route}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-md shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
                      >
                        <span>View full specifications</span>
                        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Engagement Models */}
      <section className="relative py-16 sm:py-24 border-t border-white/10 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.25] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-32 left-0 h-[420px] w-[600px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup className="max-w-3xl space-y-4 mb-12 sm:mb-16">
            <RevealItem from="left">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Partnership Frameworks
              </div>
            </RevealItem>
            <RevealItem from="left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Flexible Engagement{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#60A5FA]">
                  Models
                </span>
              </h2>
            </RevealItem>
            <RevealItem from="left">
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
                We tailor our collaboration to your internal team structure, timeline urgency, and budget predictability.
              </p>
            </RevealItem>
          </RevealGroup>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {engagementModels.map((model, idx) => (
              <Reveal key={idx} from={colDirection(idx)} className="h-full">
                <div className={`${card} flex h-full flex-col justify-between p-8`}>
                  <div>
                    <div className="inline-block px-3 py-1.5 rounded-full text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-400/20 mb-5">
                      {model.tag}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                      {model.title}
                    </h3>
                    <p className="text-base text-slate-300 leading-relaxed mb-6">
                      {model.desc}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-white/10 text-sm leading-relaxed">
                    <span className="font-bold text-white">Best for: </span>
                    <span className="text-slate-400">{model.bestFor}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs (alternate left / right) */}
      <section className="relative py-16 sm:py-24 border-t border-white/10 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.25] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[360px] w-[720px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <RevealGroup className="text-center space-y-4">
            <RevealItem from="left">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 uppercase tracking-widest">
                <HelpCircle size={16} />
                <span>Frequently Asked Questions</span>
              </div>
            </RevealItem>
            <RevealItem from="right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Everything You Need to Know
              </h2>
            </RevealItem>
          </RevealGroup>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Reveal key={idx} from={idx % 2 === 0 ? "left" : "right"}>
                <div className={`${card} p-7 space-y-3`}>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">{faq.q}</h3>
                  <p className="text-base text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Pre-Footer Call to Action (Exact Match to User Reference Design) */}
      <section className="relative py-20 sm:py-28 text-center overflow-hidden bg-[#0B0F19] border-t border-white/10">
        {/* Tech Dot Grid Matrix matching user reference */}
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

        {/* Ambient subtle violet-indigo center radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[750px] rounded-full bg-gradient-to-r from-purple-600/15 via-indigo-600/20 to-blue-600/15 blur-[120px] pointer-events-none" />

        <RevealGroup className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <RevealItem from="left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Ready to Build Your Next Solution?
            </h2>
          </RevealItem>
          <RevealItem from="right">
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a confidential discovery meeting with our technical architects to scope your project.
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