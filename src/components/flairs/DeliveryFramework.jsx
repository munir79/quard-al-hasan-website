// import {
//   Compass,
//   Code2,
//   Rocket,
//   CheckCircle2,
//   ArrowRight,
// } from "lucide-react";
// import Link from "next/link";

// const steps = [
//   {
//     phase: "PHASE 01",
//     title: "Strategic Discovery & Architecture Blueprint",
//     desc: "We analyze your business requirements, existing legacy systems, Shariah compliance criteria, and define a comprehensive technical blueprint with clear milestone schedules.",
//     icon: Compass,
//     deliverables: [
//       "System Architecture & Data Schema",
//       "Shariah Compliance & Security Audit Plan",
//       "Sprint Milestones & Scope Breakdown",
//     ],
//   },
//   {
//     phase: "PHASE 02",
//     title: "Agile Engineering & Continuous QA",
//     desc: "Our senior software squads build your platform using modular microservices, clean code standards, and automated CI/CD pipelines with bi-weekly demo releases.",
//     icon: Code2,
//     deliverables: [
//       "Two-Week Agile Sprint Releases",
//       "Automated End-to-End Test Suites",
//       "Direct Slack/WhatsApp Developer Access",
//     ],
//   },
//   {
//     phase: "PHASE 03",
//     title: "Deployment, Handover & 24/7 Managed SLA",
//     desc: "We deploy to high-availability cloud infrastructure with zero downtime, conduct knowledge-transfer sessions for your team, and provide proactive 24/7 ongoing support.",
//     icon: Rocket,
//     deliverables: [
//       "Zero-Downtime Production Deployment",
//       "Full Source Code & IP Handover",
//       "Guaranteed Response SLA & Security Patches",
//     ],
//   },
// ];

// export default function DeliveryFramework() {
//   return (
//     <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-widest">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
//             Delivery Excellence
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
//             How We{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#2563EB]">
//               Deliver
//             </span>
//           </h2>
//           <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
//             A battle-tested 3-stage delivery framework that eliminates uncertainty and delivers scalable software on time.
//           </p>
//         </div>

//         {/* 3 Steps Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
//           {steps.map((step, idx) => {
//             const Icon = step.icon;
//             return (
//               <div
//                 key={idx}
//                 className="group relative flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#4F46E5]/40 shadow-xs hover:shadow-xl transition-all duration-300"
//               >
//                 <div>
//                   {/* Top Bar */}
//                   <div className="flex items-center justify-between mb-6">
//                     <span className="text-xs font-mono font-bold text-[#4F46E5] bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-100">
//                       {step.phase}
//                     </span>
//                     <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
//                       <Icon size={20} />
//                     </div>
//                   </div>

//                   {/* Title & Desc */}
//                   <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-[#4F46E5] transition-colors leading-snug">
//                     {step.title}
//                   </h3>
//                   <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
//                     {step.desc}
//                   </p>

//                   {/* Deliverables Checklist */}
//                   <div className="space-y-2.5 pt-4 border-t border-slate-100">
//                     {step.deliverables.map((del, dIdx) => (
//                       <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-700">
//                         <CheckCircle2 size={14} className="text-[#4F46E5] shrink-0" />
//                         <span>{del}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="pt-6 mt-6 border-t border-slate-100">
//                   <span className="text-xs font-mono font-semibold text-slate-400">
//                     Step 0{idx + 1} of 03
//                   </span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Compass, Code2, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
  {
    phase: "PHASE 01",
    title: "Strategic Discovery & Architecture Blueprint",
    desc: "We analyze your business requirements, existing legacy systems, Shariah compliance criteria, and define a comprehensive technical blueprint with clear milestone schedules.",
    icon: Compass,
    deliverables: [
      "System Architecture & Data Schema",
      "Shariah Compliance & Security Audit Plan",
      "Sprint Milestones & Scope Breakdown",
    ],
  },
  {
    phase: "PHASE 02",
    title: "Agile Engineering & Continuous QA",
    desc: "Our senior software squads build your platform using modular microservices, clean code standards, and automated CI/CD pipelines with bi-weekly demo releases.",
    icon: Code2,
    deliverables: [
      "Two-Week Agile Sprint Releases",
      "Automated End-to-End Test Suites",
      "Direct Slack/WhatsApp Developer Access",
    ],
  },
  {
    phase: "PHASE 03",
    title: "Deployment, Handover & 24/7 Managed SLA",
    desc: "We deploy to high-availability cloud infrastructure with zero downtime, conduct knowledge-transfer sessions for your team, and provide proactive 24/7 ongoing support.",
    icon: Rocket,
    deliverables: [
      "Zero-Downtime Production Deployment",
      "Full Source Code & IP Handover",
      "Guaranteed Response SLA & Security Patches",
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1];

export default function DeliveryFramework() {
  const reduce = useReducedMotion();
  const d = reduce ? 0 : 1; // 0 disables movement for reduced-motion users
  const blurIn = reduce ? "blur(0px)" : "blur(6px)";

  // Header: slides in from the LEFT, piece by piece
  const headerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const fromLeft = {
    hidden: { opacity: 0, x: -90 * d, filter: blurIn },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: EASE },
    },
  };

  // Cards: first from LEFT, last from RIGHT, middle rises from below
  const cardVariant = (idx) => {
    const x = idx === 0 ? -90 : idx === steps.length - 1 ? 90 : 0;
    const y = idx === 0 || idx === steps.length - 1 ? 0 : 60;
    return {
      hidden: { opacity: 0, x: x * d, y: y * d, filter: blurIn },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: EASE, delay: idx === 1 ? 0.15 : 0 },
      },
    };
  };

  // Replays every time the section scrolls back into view
  const viewport = { once: false, amount: 0.2 };

  return (
    <section className="relative py-16 sm:py-24 bg-[#0A0F1C] text-white overflow-hidden border-t border-white/10">
      {/* Background: faint grid + soft blue glows (same language as the hero) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 100%)",
        }}
      />
      <div className="absolute -top-32 right-0 h-[460px] w-[640px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-24 h-[420px] w-[520px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-3xl space-y-3 mb-12 sm:mb-16"
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <motion.div
            variants={fromLeft}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-widest"
          >
            <span className="relative flex h-1.5 w-1.5">
              {!reduce && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" />
            </span>
            Delivery Excellence
          </motion.div>

          <motion.h2
            variants={fromLeft}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            How We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#60A5FA]">
              Deliver
            </span>
          </motion.h2>

          <motion.p
            variants={fromLeft}
            className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal"
          >
            A battle-tested 3-stage delivery framework that eliminates uncertainty and delivers scalable software on time.
          </motion.p>
        </motion.div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariant(idx)}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="group relative flex flex-col justify-between overflow-hidden p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-blue-400/40 shadow-[0_8px_30px_rgba(2,6,23,0.35),inset_0_1px_0_rgba(255,255,255,0.10)] hover:bg-white/[0.07] hover:shadow-[0_12px_50px_rgba(59,130,246,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] transition-[background-color,border-color,box-shadow] duration-300"
              >
                {/* Glass sheen */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.06] to-transparent" />

                <div className="relative">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-blue-300 bg-blue-400/10 px-2.5 py-1 rounded-full border border-blue-300/20">
                      {step.phase}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 text-slate-200 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#753DED] group-hover:to-[#2E5FEB] group-hover:border-transparent group-hover:text-white transition-all shadow-sm">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal mb-6">
                    {step.desc}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {step.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative pt-6 mt-6 border-t border-white/10">
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    Step 0{idx + 1} of 03
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}