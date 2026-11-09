// import Link from "next/link";
// import { notFound } from "next/navigation";
// import RouteHeroBanner from "@/components/flairs/RouteHeroBanner";
// import {
//   ShieldCheck,
//   Cpu,
//   Globe,
//   Palette,
//   TrendingUp,
//   Search,
//   Share2,
//   CheckCircle2,
//   ArrowRight,
//   Sparkles,
//   Layers,
//   Server,
//   Zap,
//   Lock,
// } from "lucide-react";
// import { companyInfo } from "@/data/companyData";

// const serviceImages = {
//   "fintech": "/images/hero-fintech.jpg",
//   "software-development": "/images/it-hero-bg.jpg",
//   "web-development": "/images/purple-isometric-cloud.jpg",
//   "graphics-design": "/images/bento_uiux.jpg",
//   "digital-marketing": "/images/bento_target.jpg",
//   "seo-services": "/images/bento_chart.jpg",
//   "social-media-management": "/images/bento_social.jpg",
// };

// const servicesMap = {
//   "fintech": {
//     slug: "fintech",
//     tag: "SPECIALTY FLAGSHIP",
//     title: "FinTech & Shariah Core Banking",
//     subtitle: "Automated Ledgers, Zero-Riba Microfinance & Digital Wallets",
//     icon: ShieldCheck,
//     heroDesc:
//       "We design and engineer enterprise-grade financial technology solutions adhering strictly to Islamic Shariah principles. Our platforms provide transparent bookkeeping, automated loan disbursements, and zero-riba compliance out of the box.",
//     overview:
//       "In modern Islamic banking and ethical microfinance, speed, precision, and Shariah auditability are non-negotiable. We engineer core ledgers that eliminate manual reconciliation, verify 0.00% interest (riba) algorithmically, and provide bank-grade security to institutions across Malaysia and ASEAN.",
//     deliverables: [
//       "Islamic Core Banking & Microfinance Ledgers",
//       "Qardh Al Hasan Zero-Interest Loan Management System",
//       "Murabaha & Commodity Verification Workflows",
//       "Automated e-KYC & Digital Customer Onboarding",
//       "Integrated Islamic Payment Gateways & Digital Wallets",
//       "Real-time Audit Trails & Shariah Governance Reporting",
//     ],
//     techStack: ["Next.js 14", "PostgreSQL", "Node.js", "Redis", "Docker", "AWS", "Solidity"],
//     kpis: [
//       { label: "Shariah Compliance", value: "100%", sub: "Zero-Riba Guaranteed" },
//       { label: "Approval Speed", value: "< 15 Mins", sub: "Down from 14 Days" },
//       { label: "System Availability", value: "99.98%", sub: "Bank-Grade SLA" },
//     ],
//   },
//   "software-development": {
//     slug: "software-development",
//     tag: "ENTERPRISE SYSTEMS",
//     title: "Custom Software Development",
//     subtitle: "High-Throughput Microservices, ERPs & Scalable Cloud Backends",
//     icon: Cpu,
//     heroDesc:
//       "When off-the-shelf software falls short, we engineer tailored software systems that integrate seamlessly with your operations. From custom ERPs to API integrations and real-time processing engines.",
//     overview:
//       "We deliver high-throughput, modular software engineered for enterprise scale. Whether you need to replace sluggish legacy monoliths, automate mission-critical back-office operations, or deploy high-concurrency cloud APIs, our senior engineering squads build solutions with clean architectures and zero technical debt.",
//     deliverables: [
//       "Modular Microservices & REST/GraphQL Cloud APIs",
//       "Enterprise Resource Planning (ERP) & CRM Systems",
//       "Internal Business Dashboards & Administrative Portals",
//       "Automated Cloud Infrastructure & CI/CD Pipelines",
//       "Database Optimization & High-Concurrency Architecture",
//       "Legacy System Migration & Modernization",
//     ],
//     techStack: ["React", "Node.js", "Python", "Kubernetes", "PostgreSQL", "Docker", "AWS"],
//     kpis: [
//       { label: "Deployment Frequency", value: "2 Weeks", sub: "Bi-Weekly Sprints" },
//       { label: "Scalability", value: "1M+ Req/day", sub: "Microservices Architecture" },
//       { label: "Code Coverage", value: "90%+", sub: "Automated QA Tested" },
//     ],
//   },
//   "web-development": {
//     slug: "web-development",
//     tag: "HIGH PERFORMANCE",
//     title: "Enterprise Website & Web App Development",
//     subtitle: "Ultra-Fast Next.js Portals Engineered for Conversion & Speed",
//     icon: Globe,
//     heroDesc:
//       "Your web presence is the frontline of your business. We engineer responsive, ultra-fast web portals that achieve sub-second load times, flawless mobile responsiveness, and high conversion rates.",
//     overview:
//       "Speed is directly tied to business revenue. We build lightning-fast web applications using Next.js 14, React 18, and modern headless architectures that achieve top Google Core Web Vitals scores and deliver intuitive, frictionless experiences to users on desktop, tablet, and mobile.",
//     deliverables: [
//       "Next.js App Router & React 18 Enterprise Architecture",
//       "Tailwind CSS Component-Driven Design Systems",
//       "Sub-second Core Web Vitals Speed Optimization",
//       "Headless CMS Integration (Sanity, Strapi, Contentful)",
//       "Multi-language (English / Bahasa Malaysia) Support",
//       "Conversion Rate Optimized Customer Checkout Funnels",
//     ],
//     techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel / AWS", "GraphQL"],
//     kpis: [
//       { label: "Lighthouse Score", value: "98/100", sub: "Optimal Performance" },
//       { label: "Average Load Time", value: "< 0.8s", sub: "Sub-Second Delivery" },
//       { label: "Conversion Lift", value: "+35%", sub: "Optimized User Journey" },
//     ],
//   },
//   "graphics-design": {
//     slug: "graphics-design",
//     tag: "BRANDING & DESIGN",
//     title: "Graphics Design & UI/UX Systems",
//     subtitle: "Intuitive Product Interfaces, Wireframing & Brand Identity",
//     icon: Palette,
//     heroDesc:
//       "Exceptional software begins with human-centric design. We create comprehensive UI/UX design systems, user journeys, interactive prototypes, and complete visual branding kits that build immediate trust.",
//     overview:
//       "We design digital interfaces that users love. By combining deep research into user psychology with structured design systems in Figma, we eliminate user friction, enhance onboarding, and give your brand a polished, world-class aesthetic.",
//     deliverables: [
//       "Full Corporate Brand Identity Kits & Typography Guides",
//       "Component-Driven Figma Design Systems & UI Kits",
//       "User Journey Mapping & Information Architecture",
//       "Interactive High-Fidelity Clickable Prototypes",
//       "Mobile App (iOS/Android) Interface Design",
//       "Marketing Collateral & Digital Asset Creation",
//     ],
//     techStack: ["Figma", "Adobe Illustrator", "Photoshop", "Design Systems", "Prototyping"],
//     kpis: [
//       { label: "User Retention", value: "+40%", sub: "Intuitive Navigation" },
//       { label: "Design Consistency", value: "100%", sub: "Component Design System" },
//       { label: "Turnaround Time", value: "7 Days", sub: "Rapid UI Wireframes" },
//     ],
//   },
//   "digital-marketing": {
//     slug: "digital-marketing",
//     tag: "GROWTH MARKETING",
//     title: "Digital Marketing & Performance Campaigns",
//     subtitle: "Targeted Paid Funnels, Conversion Tracking & Multi-Channel Ads",
//     icon: TrendingUp,
//     heroDesc:
//       "We turn traffic into qualified leads. Using algorithmic targeting across Google, Meta, and LinkedIn, we build full-funnel customer acquisition campaigns designed to maximize return on ad spend (ROAS).",
//     overview:
//       "Growth requires precision. Rather than vanity impressions, our performance marketing squads focus strictly on qualified customer acquisition, lowering Cost Per Acquisition (CPA), and setting up end-to-end attribution analytics.",
//     deliverables: [
//       "Google Search, Display & Performance Max Ad Campaigns",
//       "Meta (Facebook & Instagram) Targeted Lead Funnels",
//       "B2B LinkedIn Enterprise Prospecting",
//       "Comprehensive Pixel & Conversion API Tracking",
//       "Landing Page A/B Testing & Funnel Optimization",
//       "Transparent Weekly ROAS & Attribution Reporting",
//     ],
//     techStack: ["Google Ads", "Meta Ads Manager", "GA4", "Tag Manager", "Looker Studio"],
//     kpis: [
//       { label: "Average ROAS", value: "4.2x", sub: "Optimized Ad Spend" },
//       { label: "Lead Qualification", value: "+55%", sub: "Intent-Targeted Audiences" },
//       { label: "Reporting Transparency", value: "Weekly", sub: "Live Performance Dashboards" },
//     ],
//   },
//   "seo-services": {
//     slug: "seo-services",
//     tag: "ORGANIC VISIBILITY",
//     title: "SEO Services & Search Authority",
//     subtitle: "Algorithmic Technical Audits, Semantic Content & Top Rankings",
//     icon: Search,
//     heroDesc:
//       "Dominate high-intent search queries organically. We perform deep technical audits, eliminate crawl errors, optimize on-page schema, and execute targeted content strategies that withstand search engine algorithm updates.",
//     overview:
//       "Organic search is the most valuable long-term asset for your company. We audit code architectures, fix rendering issues, implement rich semantic schema, and develop topical authority hubs that rank your brand at the very top of Google.",
//     deliverables: [
//       "Full Technical SEO Audits & Core Web Vitals Fixes",
//       "Keyword Intent Mapping & Competitive Gap Analysis",
//       "Semantic Content Silos & Blog Architecture",
//       "Local SEO Optimization for Malaysian Markets",
//       "High-Authority Backlink Acquisition Strategies",
//       "Google Search Console & Ranking Tracking",
//     ],
//     techStack: ["Ahrefs", "Semrush", "Google Search Console", "Schema Markup", "Screaming Frog"],
//     kpis: [
//       { label: "Organic Traffic Growth", value: "+180%", sub: "Within 6 Months" },
//       { label: "First Page Keywords", value: "85%+", sub: "Targeted Intent Terms" },
//       { label: "Crawl Error Reduction", value: "0 Errors", sub: "Clean Technical Health" },
//     ],
//   },
//   "social-media-management": {
//     slug: "social-media-management",
//     tag: "BRAND AUTHORITY",
//     title: "Social Media Management & Community",
//     subtitle: "Brand Storytelling, Viral Engagement & Community Growth",
//     icon: Share2,
//     heroDesc:
//       "Engage your target audience, cultivate loyal communities, and increase brand authority across LinkedIn, Meta, Instagram, and TikTok with data-driven content calendars.",
//     overview:
//       "In the digital era, social proof drives credibility. We handle full-cycle social storytelling—from weekly editorial scheduling and high-impact graphic carousels to proactive community engagement and follower growth.",
//     deliverables: [
//       "Monthly Content Calendar & Strategic Scheduling",
//       "High-Impact Graphic Carousels & Video Reels",
//       "LinkedIn Thought Leadership & Executive Profiling",
//       "Active Daily Community Monitoring & Inbound Responses",
//       "Influencer Outreach & Strategic Collaborations",
//       "Audience Growth & Engagement Analytics",
//     ],
//     techStack: ["Meta Business Suite", "TikTok Ads", "Canva Pro", "Hootsuite", "Buffer"],
//     kpis: [
//       { label: "Engagement Lift", value: "+75%", sub: "Active Audience Growth" },
//       { label: "Post Frequency", value: "5x / Week", sub: "Consistent Omnichannel Reach" },
//       { label: "Inbound DMs", value: "+60%", sub: "Qualified Social Leads" },
//     ],
//   },
// };

// export function generateStaticParams() {
//   return Object.keys(servicesMap).map((slug) => ({ slug }));
// }

// export function generateMetadata({ params }) {
//   const service = servicesMap[params.slug];
//   if (!service) return { title: "Service | Qardh Al Hasan Fintech Sdn. Bhd." };

//   return {
//     title: `${service.title} | Qardh Al Hasan Fintech Sdn. Bhd.`,
//     description: service.heroDesc,
//   };
// }

// export default function ServiceDetailPage({ params }) {
//   const service = servicesMap[params.slug];

//   if (!service) {
//     notFound();
//   }

//   const Icon = service.icon;

//   return (
//     <div className="w-full bg-white">
//       {/* 1. Immersive Hero Banner with Thematic Service Image Background */}
//       <RouteHeroBanner
//         badge={service.tag}
//         badgeIcon={Icon}
//         title={service.title}
//         description={service.heroDesc}
//         breadcrumbs={[
//           { label: "Services", href: "/services" },
//           { label: service.title },
//         ]}
//         image={serviceImages[service.slug] || "/images/hero-fintech.jpg"}
//       >
//         <div className="pt-2 flex flex-wrap items-center gap-4">
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-lg shadow-blue-500/30 transition-all uppercase tracking-wider"
//           >
//             <span>Schedule a Call for {service.title}</span>
//             <ArrowRight size={14} />
//           </Link>
//           <Link
//             href="/services"
//             className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all"
//           >
//             <span>All Services</span>
//           </Link>
//         </div>
//       </RouteHeroBanner>

//       {/* 2. Key Metrics Bar */}
//       <section className="py-8 bg-slate-900 text-white border-b border-slate-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
//             {service.kpis.map((kpi, idx) => (
//               <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
//                 <div className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
//                   {kpi.value}
//                 </div>
//                 <div className="text-sm font-bold text-white mt-1">
//                   {kpi.label}
//                 </div>
//                 <div className="text-xs text-slate-400 mt-0.5">
//                   {kpi.sub}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 3. Deep-Dive Overview & Deliverables */}
//       <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
//           <div className="lg:col-span-7 space-y-6">
//             <div className="space-y-3">
//               <span className="text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-widest">
//                 Service Overview
//               </span>
//               <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
//                 Engineered for High Reliability & Measurable Impact
//               </h2>
//               <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
//                 {service.overview}
//               </p>
//             </div>

//             {/* Checklist */}
//             <div className="space-y-3 pt-4">
//               <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
//                 Included Deliverables & Solutions
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                 {service.deliverables.map((del, dIdx) => (
//                   <div
//                     key={dIdx}
//                     className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-800"
//                   >
//                     <CheckCircle2 size={16} className="text-[#4F46E5] shrink-0 mt-0.5" />
//                     <span>{del}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Tech Stack & Consultation Form Prompt */}
//           <div className="lg:col-span-5 bg-slate-50 rounded-3xl border border-slate-200/90 p-8 space-y-6">
//             <div className="space-y-3">
//               <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
//                 Technology Frameworks
//               </span>
//               <div className="flex flex-wrap gap-2">
//                 {service.techStack.map((tech, tIdx) => (
//                   <span
//                     key={tIdx}
//                     className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono font-bold text-slate-800 shadow-xs"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3">
//               <div className="text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-wider">
//                 Brickfields, KL Direct Access
//               </div>
//               <h3 className="text-base font-bold text-slate-900">
//                 Want a custom scope and technical roadmap?
//               </h3>
//               <p className="text-xs text-slate-500 leading-relaxed">
//                 Connect directly with our senior software engineers and solutions architects.
//               </p>
//               <Link
//                 href="/contact"
//                 className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-[#4F46E5] transition-colors"
//               >
//                 <span>Request Scope & Estimate</span>
//                 <ArrowRight size={13} />
//               </Link>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* 4. Pre-Footer Call to Action */}
//       <section className="py-16 sm:py-20 bg-slate-900 text-white text-center">
//         <div className="max-w-4xl mx-auto px-4 space-y-6">
//           <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
//             Ready to Accelerate with {service.title}?
//           </h2>
//           <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal">
//             Schedule a confidential 30-minute consultation with our Kuala Lumpur team today.
//           </p>
//           <div className="pt-2">
//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] to-[#2563EB] hover:opacity-95 shadow-lg transition-all"
//             >
//               <span>Schedule Strategy Call</span>
//               <ArrowRight size={15} />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import Link from "next/link";
import { notFound } from "next/navigation";
import RouteHeroBanner from "@/components/flairs/RouteHeroBanner";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import {
  ShieldCheck,
  Cpu,
  Globe,
  Palette,
  TrendingUp,
  Search,
  Share2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const serviceImages = {
  "fintech": "/images/hero-fintech.jpg",
  "software-development": "/images/it-hero-bg.jpg",
  "web-development": "/images/purple-isometric-cloud.jpg",
  "graphics-design": "/images/bento_uiux.jpg",
  "digital-marketing": "/images/bento_target.jpg",
  "seo-services": "/images/bento_chart.jpg",
  "social-media-management": "/images/bento_social.jpg",
};

const servicesMap = {
  "fintech": {
    slug: "fintech",
    tag: "SPECIALTY FLAGSHIP",
    title: "FinTech & Shariah Core Banking",
    subtitle: "Automated Ledgers, Zero-Riba Microfinance & Digital Wallets",
    icon: ShieldCheck,
    heroDesc:
      "We design and engineer enterprise-grade financial technology solutions adhering strictly to Islamic Shariah principles. Our platforms provide transparent bookkeeping, automated loan disbursements, and zero-riba compliance out of the box.",
    overview:
      "In modern Islamic banking and ethical microfinance, speed, precision, and Shariah auditability are non-negotiable. We engineer core ledgers that eliminate manual reconciliation, verify 0.00% interest (riba) algorithmically, and provide bank-grade security to institutions across Malaysia and ASEAN.",
    deliverables: [
      "Islamic Core Banking & Microfinance Ledgers",
      "Qardh Al Hasan Zero-Interest Loan Management System",
      "Murabaha & Commodity Verification Workflows",
      "Automated e-KYC & Digital Customer Onboarding",
      "Integrated Islamic Payment Gateways & Digital Wallets",
      "Real-time Audit Trails & Shariah Governance Reporting",
    ],
    techStack: ["Next.js 14", "PostgreSQL", "Node.js", "Redis", "Docker", "AWS", "Solidity"],
    kpis: [
      { label: "Shariah Compliance", value: "100%", sub: "Zero-Riba Guaranteed" },
      { label: "Approval Speed", value: "< 15 Mins", sub: "Down from 14 Days" },
      { label: "System Availability", value: "99.98%", sub: "Bank-Grade SLA" },
    ],
  },
  "software-development": {
    slug: "software-development",
    tag: "ENTERPRISE SYSTEMS",
    title: "Custom Software Development",
    subtitle: "High-Throughput Microservices, ERPs & Scalable Cloud Backends",
    icon: Cpu,
    heroDesc:
      "When off-the-shelf software falls short, we engineer tailored software systems that integrate seamlessly with your operations. From custom ERPs to API integrations and real-time processing engines.",
    overview:
      "We deliver high-throughput, modular software engineered for enterprise scale. Whether you need to replace sluggish legacy monoliths, automate mission-critical back-office operations, or deploy high-concurrency cloud APIs, our senior engineering squads build solutions with clean architectures and zero technical debt.",
    deliverables: [
      "Modular Microservices & REST/GraphQL Cloud APIs",
      "Enterprise Resource Planning (ERP) & CRM Systems",
      "Internal Business Dashboards & Administrative Portals",
      "Automated Cloud Infrastructure & CI/CD Pipelines",
      "Database Optimization & High-Concurrency Architecture",
      "Legacy System Migration & Modernization",
    ],
    techStack: ["React", "Node.js", "Python", "Kubernetes", "PostgreSQL", "Docker", "AWS"],
    kpis: [
      { label: "Deployment Frequency", value: "2 Weeks", sub: "Bi-Weekly Sprints" },
      { label: "Scalability", value: "1M+ Req/day", sub: "Microservices Architecture" },
      { label: "Code Coverage", value: "90%+", sub: "Automated QA Tested" },
    ],
  },
  "web-development": {
    slug: "web-development",
    tag: "HIGH PERFORMANCE",
    title: "Enterprise Website & Web App Development",
    subtitle: "Ultra-Fast Next.js Portals Engineered for Conversion & Speed",
    icon: Globe,
    heroDesc:
      "Your web presence is the frontline of your business. We engineer responsive, ultra-fast web portals that achieve sub-second load times, flawless mobile responsiveness, and high conversion rates.",
    overview:
      "Speed is directly tied to business revenue. We build lightning-fast web applications using Next.js 14, React 18, and modern headless architectures that achieve top Google Core Web Vitals scores and deliver intuitive, frictionless experiences to users on desktop, tablet, and mobile.",
    deliverables: [
      "Next.js App Router & React 18 Enterprise Architecture",
      "Tailwind CSS Component-Driven Design Systems",
      "Sub-second Core Web Vitals Speed Optimization",
      "Headless CMS Integration (Sanity, Strapi, Contentful)",
      "Multi-language (English / Bahasa Malaysia) Support",
      "Conversion Rate Optimized Customer Checkout Funnels",
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel / AWS", "GraphQL"],
    kpis: [
      { label: "Lighthouse Score", value: "98/100", sub: "Optimal Performance" },
      { label: "Average Load Time", value: "< 0.8s", sub: "Sub-Second Delivery" },
      { label: "Conversion Lift", value: "+35%", sub: "Optimized User Journey" },
    ],
  },
  "graphics-design": {
    slug: "graphics-design",
    tag: "BRANDING & DESIGN",
    title: "Graphics Design & UI/UX Systems",
    subtitle: "Intuitive Product Interfaces, Wireframing & Brand Identity",
    icon: Palette,
    heroDesc:
      "Exceptional software begins with human-centric design. We create comprehensive UI/UX design systems, user journeys, interactive prototypes, and complete visual branding kits that build immediate trust.",
    overview:
      "We design digital interfaces that users love. By combining deep research into user psychology with structured design systems in Figma, we eliminate user friction, enhance onboarding, and give your brand a polished, world-class aesthetic.",
    deliverables: [
      "Full Corporate Brand Identity Kits & Typography Guides",
      "Component-Driven Figma Design Systems & UI Kits",
      "User Journey Mapping & Information Architecture",
      "Interactive High-Fidelity Clickable Prototypes",
      "Mobile App (iOS/Android) Interface Design",
      "Marketing Collateral & Digital Asset Creation",
    ],
    techStack: ["Figma", "Adobe Illustrator", "Photoshop", "Design Systems", "Prototyping"],
    kpis: [
      { label: "User Retention", value: "+40%", sub: "Intuitive Navigation" },
      { label: "Design Consistency", value: "100%", sub: "Component Design System" },
      { label: "Turnaround Time", value: "7 Days", sub: "Rapid UI Wireframes" },
    ],
  },
  "digital-marketing": {
    slug: "digital-marketing",
    tag: "GROWTH MARKETING",
    title: "Digital Marketing & Performance Campaigns",
    subtitle: "Targeted Paid Funnels, Conversion Tracking & Multi-Channel Ads",
    icon: TrendingUp,
    heroDesc:
      "We turn traffic into qualified leads. Using algorithmic targeting across Google, Meta, and LinkedIn, we build full-funnel customer acquisition campaigns designed to maximize return on ad spend (ROAS).",
    overview:
      "Growth requires precision. Rather than vanity impressions, our performance marketing squads focus strictly on qualified customer acquisition, lowering Cost Per Acquisition (CPA), and setting up end-to-end attribution analytics.",
    deliverables: [
      "Google Search, Display & Performance Max Ad Campaigns",
      "Meta (Facebook & Instagram) Targeted Lead Funnels",
      "B2B LinkedIn Enterprise Prospecting",
      "Comprehensive Pixel & Conversion API Tracking",
      "Landing Page A/B Testing & Funnel Optimization",
      "Transparent Weekly ROAS & Attribution Reporting",
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "GA4", "Tag Manager", "Looker Studio"],
    kpis: [
      { label: "Average ROAS", value: "4.2x", sub: "Optimized Ad Spend" },
      { label: "Lead Qualification", value: "+55%", sub: "Intent-Targeted Audiences" },
      { label: "Reporting Transparency", value: "Weekly", sub: "Live Performance Dashboards" },
    ],
  },
  "seo-services": {
    slug: "seo-services",
    tag: "ORGANIC VISIBILITY",
    title: "SEO Services & Search Authority",
    subtitle: "Algorithmic Technical Audits, Semantic Content & Top Rankings",
    icon: Search,
    heroDesc:
      "Dominate high-intent search queries organically. We perform deep technical audits, eliminate crawl errors, optimize on-page schema, and execute targeted content strategies that withstand search engine algorithm updates.",
    overview:
      "Organic search is the most valuable long-term asset for your company. We audit code architectures, fix rendering issues, implement rich semantic schema, and develop topical authority hubs that rank your brand at the very top of Google.",
    deliverables: [
      "Full Technical SEO Audits & Core Web Vitals Fixes",
      "Keyword Intent Mapping & Competitive Gap Analysis",
      "Semantic Content Silos & Blog Architecture",
      "Local SEO Optimization for Malaysian Markets",
      "High-Authority Backlink Acquisition Strategies",
      "Google Search Console & Ranking Tracking",
    ],
    techStack: ["Ahrefs", "Semrush", "Google Search Console", "Schema Markup", "Screaming Frog"],
    kpis: [
      { label: "Organic Traffic Growth", value: "+180%", sub: "Within 6 Months" },
      { label: "First Page Keywords", value: "85%+", sub: "Targeted Intent Terms" },
      { label: "Crawl Error Reduction", value: "0 Errors", sub: "Clean Technical Health" },
    ],
  },
  "social-media-management": {
    slug: "social-media-management",
    tag: "BRAND AUTHORITY",
    title: "Social Media Management & Community",
    subtitle: "Brand Storytelling, Viral Engagement & Community Growth",
    icon: Share2,
    heroDesc:
      "Engage your target audience, cultivate loyal communities, and increase brand authority across LinkedIn, Meta, Instagram, and TikTok with data-driven content calendars.",
    overview:
      "In the digital era, social proof drives credibility. We handle full-cycle social storytelling—from weekly editorial scheduling and high-impact graphic carousels to proactive community engagement and follower growth.",
    deliverables: [
      "Monthly Content Calendar & Strategic Scheduling",
      "High-Impact Graphic Carousels & Video Reels",
      "LinkedIn Thought Leadership & Executive Profiling",
      "Active Daily Community Monitoring & Inbound Responses",
      "Influencer Outreach & Strategic Collaborations",
      "Audience Growth & Engagement Analytics",
    ],
    techStack: ["Meta Business Suite", "TikTok Ads", "Canva Pro", "Hootsuite", "Buffer"],
    kpis: [
      { label: "Engagement Lift", value: "+75%", sub: "Active Audience Growth" },
      { label: "Post Frequency", value: "5x / Week", sub: "Consistent Omnichannel Reach" },
      { label: "Inbound DMs", value: "+60%", sub: "Qualified Social Leads" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(servicesMap).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = servicesMap[params.slug];
  if (!service) return { title: "Service | Qardh Al Hasan Fintech Sdn. Bhd." };

  return {
    title: `${service.title} | Qardh Al Hasan Fintech Sdn. Bhd.`,
    description: service.heroDesc,
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

// 3 columns: left, rise from below, right (so the cards meet in the middle)
const colDirection = (idx) => ["left", "up", "right"][idx % 3];

export default function ServiceDetailPage({ params }) {
  const service = servicesMap[params.slug];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="w-full bg-[#0A0F1C] text-white">
      {/* 1. Hero Banner */}
      <RouteHeroBanner
        badge={service.tag}
        badgeIcon={Icon}
        title={service.title}
        description={service.heroDesc}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        image={serviceImages[service.slug] || "/images/hero-fintech.jpg"}
      >
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Schedule a Call</span>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 sm:py-4 rounded-full text-base font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 transition-all hover:scale-105 active:scale-95"
          >
            <span>All Services</span>
          </Link>
        </div>
      </RouteHeroBanner>

      {/* 2. Key Metrics (left, from below, right) */}
      <section className="relative py-12 sm:py-16 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#0D1730] to-[#0A0F1C] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-8">
            {service.kpis.map((kpi, idx) => (
              <Reveal key={idx} from={colDirection(idx)} className="h-full">
                <div className={`${card} h-full p-7 sm:p-8 text-center sm:text-left`}>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#60A5FA]">
                    {kpi.value}
                  </div>
                  <div className="text-lg font-bold text-white mt-3">{kpi.label}</div>
                  <div className="text-base text-slate-400 mt-1">{kpi.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Overview & Deliverables (left) + Tech stack & CTA (right) */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.3] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-32 right-0 h-[460px] w-[640px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[520px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <RevealGroup className="lg:col-span-7 space-y-6">
              <RevealItem from="left">
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                  Service Overview
                </span>
              </RevealItem>
              <RevealItem from="left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Engineered for High Reliability & Measurable Impact
                </h2>
              </RevealItem>
              <RevealItem from="left">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  {service.overview}
                </p>
              </RevealItem>

              <RevealItem from="left" className="pt-4">
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                  Included Deliverables & Solutions
                </div>
              </RevealItem>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.deliverables.map((del, dIdx) => (
                  <RevealItem key={dIdx} from="left">
                    <div className="h-full flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10 text-base text-slate-200 leading-snug">
                      <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  </RevealItem>
                ))}
              </div>
            </RevealGroup>

            {/* Right column slides in from the right */}
            <Reveal from="right" className="lg:col-span-5">
              <div className={`${card} p-8 sm:p-9 space-y-8`}>
                <div className="space-y-4">
                  <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                    Technology Frameworks
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {service.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-400/20 text-sm font-semibold text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/[0.04] border border-white/10 space-y-4">
                  <div className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                    Brickfields, KL Direct Access
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    Want a custom scope and technical roadmap?
                  </h3>
                  <p className="text-base text-slate-300 leading-relaxed">
                    Connect directly with our senior software engineers and solutions architects.
                  </p>
                  <Link
                    href="/contact"
                    className="group w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <span>Request Scope & Estimate</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Pre-Footer Call to Action (Matching User Reference Design) */}
      <section className="relative py-20 sm:py-28 text-center overflow-hidden bg-[#0B0F19] border-t border-white/10">
        {/* Tech Dot Grid Matrix matching user reference */}
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        
        {/* Ambient subtle violet-indigo center radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[340px] w-[750px] rounded-full bg-gradient-to-r from-purple-600/15 via-indigo-600/20 to-blue-600/15 blur-[120px] pointer-events-none" />

        <RevealGroup className="relative z-10 max-w-4xl mx-auto px-4 space-y-6">
          <RevealItem from="left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Ready to Accelerate with {service.title}?
            </h2>
          </RevealItem>
          <RevealItem from="right">
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Schedule a confidential 30-minute consultation with our Kuala Lumpur team today.
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