// import Link from "next/link";
// import {
//   Sparkles,
//   ShieldCheck,
//   Target,
//   ArrowRight,
//   Building,
// } from "lucide-react";
// import { companyInfo, companyValues } from "@/data/companyData";

// export const metadata = {
//   title: "About Us | Qardh Al Hasan Fintech Sdn. Bhd.",
//   description:
//     "Learn about Qardh Al Hasan Fintech Sdn. Bhd., our vision, mission, ethical principles, and operations in Kuala Lumpur, Malaysia.",
// };

// export default function AboutPage() {
//   return (
//     <div className="py-6 sm:py-10 space-y-12 sm:space-y-16 max-w-5xl mx-auto px-4 sm:px-6">
//       {/* 1. Hero Banner: Side-by-Side Flex Layout */}
//       <section className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#170836] via-[#240c54] to-[#170836] border border-purple-500/25 shadow-xl overflow-hidden">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          
//           {/* Left Side: Short Text */}
//           <div className="flex-1 text-left space-y-3">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-xs font-mono font-medium uppercase tracking-wider text-purple-200 border border-purple-400/30">
//               <Sparkles size={13} className="text-fuchsia-400" />
//               <span>Identity & Heritage</span>
//             </div>

//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
//               About{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
//                 Our Company
//               </span>
//             </h1>

//             <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed font-normal max-w-lg">
//               {companyInfo.aboutSummary}
//             </p>
//           </div>

//           {/* Right Side: Scaled-Down Boardroom Accent */}
//           <div className="w-full max-w-sm lg:w-[340px] shrink-0 mx-auto lg:mx-0">
//             <div className="rounded-xl overflow-hidden border border-purple-500/30 bg-[#090314] shadow-lg relative aspect-[4/3]">
//               <img
//                 src="/images/corporate_boardroom.jpg"
//                 alt="Executive Boardroom in Kuala Lumpur"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#090314]/80 via-transparent to-transparent pointer-events-none" />
//               <div className="absolute bottom-2.5 left-2.5 z-10 text-[10px] font-mono text-white/90 font-medium">
//                 Governance Suite &bull; Brickfields
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* 2. Vision & Mission Grid */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
//         <div className="purple-card p-6 rounded-xl border border-purple-500/20 bg-[#120626]/60 flex flex-col justify-between">
//           <div className="space-y-3">
//             <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30 flex items-center justify-center">
//               <Sparkles size={18} />
//             </div>
//             <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-fuchsia-400 block">
//               Strategic Vision
//             </span>
//             <h2 className="text-xl sm:text-2xl font-bold text-white">
//               Our Vision
//             </h2>
//             <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-normal">
//               {companyInfo.vision}
//             </p>
//           </div>
//           <div className="mt-6 pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-mono text-purple-300/70">
//             <span>Location: Malaysia</span>
//             <span className="text-fuchsia-400">Value-Driven</span>
//           </div>
//         </div>

//         <div className="purple-card p-6 rounded-xl border border-purple-500/20 bg-[#120626]/60 flex flex-col justify-between">
//           <div className="space-y-3">
//             <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-400/30 flex items-center justify-center">
//               <Target size={18} />
//             </div>
//             <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-fuchsia-400 block">
//               Execution
//             </span>
//             <h2 className="text-xl sm:text-2xl font-bold text-white">
//               Our Mission
//             </h2>
//             <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-normal">
//               {companyInfo.mission}
//             </p>
//           </div>
//           <div className="mt-6 pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-mono text-purple-300/70">
//             <span>Focus: Startups & Enterprise</span>
//             <span className="text-purple-300">Continuous Support</span>
//           </div>
//         </div>
//       </section>

//       {/* 3. Operations Hub: Side-by-Side Flex Layout */}
//       <section className="purple-card p-6 sm:p-8 rounded-xl border border-purple-500/20 bg-[#120626]/60 shadow-xl relative overflow-hidden">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
//           {/* Left Text */}
//           <div className="flex-1 text-left space-y-4">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-xs font-mono font-medium text-purple-300">
//               <Building size={13} className="text-fuchsia-400" />
//               <span>Technology Operations Base</span>
//             </div>

//             <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
//               Kuala Lumpur Operations Center
//             </h2>

//             <p className="text-sm text-purple-200/80 leading-relaxed font-normal max-w-lg">
//               Strategically based in Brickfields, Kuala Lumpur, our engineering facility houses high-speed server clusters, continuous deployment desks, and client collaboration suites.
//             </p>

//             <div className="flex flex-wrap gap-2 pt-1">
//               <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-200">
//                 Certified Infrastructure
//               </span>
//               <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-200">
//                 24/7 Monitoring & Support
//               </span>
//             </div>
//           </div>

//           {/* Right Scaled-Down Image */}
//           <div className="w-full max-w-sm lg:w-[340px] shrink-0 mx-auto lg:mx-0">
//             <div className="rounded-xl overflow-hidden border border-purple-500/30 aspect-[4/3] bg-[#090314]">
//               <img
//                 src="/images/hero_fintech_desk.jpg"
//                 alt="Technology Operations Hub in Kuala Lumpur"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* 4. Values Section */}
//       <section className="space-y-6">
//         <div className="text-center max-w-xl mx-auto space-y-2">
//           <span className="text-[11px] font-mono uppercase tracking-wider text-fuchsia-400 font-semibold">
//             Core Beliefs
//           </span>
//           <h2 className="text-2xl sm:text-3xl font-black text-white">
//             Ethical Values & Innovation
//           </h2>
//           <p className="text-xs sm:text-sm text-purple-200/80">
//             Guiding every software platform, web architecture, and client collaboration.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {companyValues.map((val) => (
//             <div
//               key={val.title}
//               className="purple-card p-5 rounded-xl border border-purple-500/20 bg-[#120626]/60 shadow-md"
//             >
//               <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center mb-4">
//                 <ShieldCheck size={18} />
//               </div>
//               <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-fuchsia-300 px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/20 inline-block mb-2">
//                 {val.badge}
//               </span>
//               <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
//               <p className="text-xs text-purple-200/80 leading-relaxed font-normal">
//                 {val.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 5. Compact CTA Box */}
//       <section className="text-center p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-purple-950/80 via-[#1b083d] to-fuchsia-950/80 text-white space-y-4 shadow-xl border border-purple-400/30">
//         <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
//           Partner with an Ethical & Proven IT Innovator
//         </h2>
//         <p className="text-xs sm:text-sm text-purple-200/80 max-w-lg mx-auto font-normal">
//           Contact our team in Brickfields, Kuala Lumpur, Malaysia to explore tailored web, software, and fintech solutions.
//         </p>
//         <div className="pt-2">
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-md shadow-purple-600/30"
//           >
//             <span>Get in Touch with Us</span>
//             <ArrowRight size={14} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Target,
  ArrowRight,
  Building,
} from "lucide-react";
import { companyInfo, companyValues } from "@/data/companyData";

export const metadata = {
  title: "About Us | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Learn about Qardh Al Hasan Fintech Sdn. Bhd., our vision, mission, ethical principles, and operations in Kuala Lumpur, Malaysia.",
};

export default function AboutPage() {
  return (
    <div className="w-full space-y-12 sm:space-y-16 pb-16 overflow-hidden">
      {/* =========================================================================
          1. FULL-WIDTH COVER HERO BANNER WITH TEXT DIRECTLY ON IMAGE
          ========================================================================= */}
      <section className="relative w-full min-h-[380px] sm:min-h-[440px] flex items-center border-b border-purple-500/20 bg-[#090314] overflow-hidden">
        {/* Full-bleed background image */}
        <img
          src="/images/corporate_boardroom.jpg"
          alt="Executive Boardroom in Kuala Lumpur"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* High-contrast dark gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090314] via-[#090314]/85 to-[#090314]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090314] via-transparent to-[#090314]/40 pointer-events-none" />

        {/* Text Container Centered Over Image */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="max-w-2xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-400/30 text-xs font-mono font-medium uppercase tracking-wider text-purple-200">
              <Sparkles size={13} className="text-fuchsia-400" />
              <span>Identity & Heritage</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                Our Company
              </span>
            </h1>

            <p className="text-sm sm:text-base text-purple-200/80 leading-relaxed font-normal">
              {companyInfo.aboutSummary}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CENTERED PAGE CONTENT
          ========================================================================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* 2. Vision & Mission Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          <div className="purple-card p-6 rounded-xl border border-purple-500/20 bg-[#120626]/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-400/30 flex items-center justify-center">
                <Sparkles size={18} />
              </div>
              <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-fuchsia-400 block">
                Strategic Vision
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Our Vision
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-normal">
                {companyInfo.vision}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-mono text-purple-300/70">
              <span>Location: Malaysia</span>
              <span className="text-fuchsia-400">Value-Driven</span>
            </div>
          </div>

          <div className="purple-card p-6 rounded-xl border border-purple-500/20 bg-[#120626]/60 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-400/30 flex items-center justify-center">
                <Target size={18} />
              </div>
              <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-fuchsia-400 block">
                Execution
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Our Mission
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-normal">
                {companyInfo.mission}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs font-mono text-purple-300/70">
              <span>Focus: Startups & Enterprise</span>
              <span className="text-purple-300">Continuous Support</span>
            </div>
          </div>
        </section>

        {/* 3. Operations Hub: Side-by-Side Flex Layout */}
        <section className="purple-card p-6 sm:p-8 rounded-xl border border-purple-500/20 bg-[#120626]/60 shadow-xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Text */}
            <div className="flex-1 text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-xs font-mono font-medium text-purple-300">
                <Building size={13} className="text-fuchsia-400" />
                <span>Technology Operations Base</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Kuala Lumpur Operations Center
              </h2>

              <p className="text-sm text-purple-200/80 leading-relaxed font-normal max-w-lg">
                Strategically based in Brickfields, Kuala Lumpur, our engineering facility houses high-speed server clusters, continuous deployment desks, and client collaboration suites.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-200">
                  Certified Infrastructure
                </span>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-purple-950/60 border border-purple-500/30 text-purple-200">
                  24/7 Monitoring & Support
                </span>
              </div>
            </div>

            {/* Right Scaled-Down Image */}
            <div className="w-full max-w-sm lg:w-[340px] shrink-0 mx-auto lg:mx-0">
              <div className="rounded-xl overflow-hidden border border-purple-500/30 aspect-[4/3] bg-[#090314]">
                <img
                  src="/images/hero_fintech_desk.jpg"
                  alt="Technology Operations Hub in Kuala Lumpur"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Values Section */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-fuchsia-400 font-semibold">
              Core Beliefs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Ethical Values & Innovation
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/80">
              Guiding every software platform, web architecture, and client collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {companyValues.map((val) => (
              <div
                key={val.title}
                className="purple-card p-5 rounded-xl border border-purple-500/20 bg-[#120626]/60 shadow-md"
              >
                <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center mb-4">
                  <ShieldCheck size={18} />
                </div>
                <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-fuchsia-300 px-2 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/20 inline-block mb-2">
                  {val.badge}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
                <p className="text-xs text-purple-200/80 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Compact CTA Box */}
        <section className="text-center p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-purple-950/80 via-[#1b083d] to-fuchsia-950/80 text-white space-y-4 shadow-xl border border-purple-400/30">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Partner with an Ethical & Proven IT Innovator
          </h2>
          <p className="text-xs sm:text-sm text-purple-200/80 max-w-lg mx-auto font-normal">
            Contact our team in Brickfields, Kuala Lumpur, Malaysia to explore tailored web, software, and fintech solutions.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-all shadow-md shadow-purple-600/30"
            >
              <span>Get in Touch with Us</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}