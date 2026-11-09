

// "use client";

// import Link from "next/link";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   ShieldCheck,
//   Cpu,
//   Globe,
//   FileSpreadsheet,
//   Headphones,
// } from "lucide-react";

// const highlights = [
//   {
//     icon: Cpu,
//     title: "Application Modernization",
//     desc: "Legacy systems to secure cloud services",
//   },
//   {
//     icon: FileSpreadsheet,
//     title: "Accounting & FinTech Ledgers",
//     desc: "Shariah-aligned, audit-ready reporting",
//   },
//   {
//     icon: Globe,
//     title: "Digital Transformation",
//     desc: "Modern web platforms and scalable APIs",
//   },
//   {
//     icon: Headphones,
//     title: "Managed Support",
//     desc: "24/7 monitoring with clear SLAs",
//   },
// ];

// const stats = [
//   { value: "100+", label: "Businesses served" },
//   { value: "24/7", label: "Managed support" },
//   { value: "KL", label: "Brickfields, Kuala Lumpur" },
// ];

// export default function Hero() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#0A0F1C] text-white">
//       {/* Background: subtle grid + one soft glow (no neon) */}
//       <div
//         aria-hidden
//         className="absolute inset-0 opacity-[0.35] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
//           backgroundSize: "64px 64px",
//           maskImage:
//             "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
//           WebkitMaskImage:
//             "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
//         }}
//       />
//       <div
//         aria-hidden
//         className="absolute -top-40 right-0 h-[520px] w-[720px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none"
//       />
//       <div
//         aria-hidden
//         className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
//       />

//       {/* pt-32 leaves room for the fixed navbar */}
//       <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
//         <div className="grid items-center gap-14 lg:grid-cols-12">
//           {/* LEFT: message */}
//           <div className="lg:col-span-7">
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300">
//               <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
//               AI-Powered Technology Managed Services
//             </div>

//             <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]">
//               Scale smart.
//               <br />
//               <span className="text-slate-400">Run your systems with</span>{" "}
//               <span className="text-blue-400">confidence.</span>
//             </h1>

//             <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-400">
//               Join 100+ businesses worldwide who drive measurable results daily
//               from one accountable technology partner.
//             </p>

//             <div className="mt-9 flex flex-col sm:flex-row gap-3">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0F1C]"
//               >
//                 Schedule a Call
//                 <ArrowRight size={16} />
//               </Link>
//               <Link
//                 href="/services"
//                 className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/[0.07] hover:border-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
//               >
//                 Explore Services
//                 <ArrowUpRight size={16} />
//               </Link>
//             </div>

//             <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
//               <ShieldCheck size={16} className="text-blue-400" />
//               <span>Shariah-aligned fintech expertise · SSM &amp; BNM compliance</span>
//             </div>
//           </div>

//           {/* RIGHT: capability panel */}
//           <div className="lg:col-span-5">
//             <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/30 backdrop-blur">
//               <div className="rounded-xl border border-white/5 bg-[#0D1324] divide-y divide-white/5">
//                 {highlights.map(({ icon: Icon, title, desc }) => (
//                   <div
//                     key={title}
//                     className="flex items-start gap-4 p-5 transition-colors hover:bg-white/[0.02]"
//                   >
//                     <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
//                       <Icon size={20} />
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold text-white">{title}</p>
//                       <p className="mt-0.5 text-sm text-slate-400">{desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats strip */}
//         <dl className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8">
//           {stats.map((s) => (
//             <div key={s.label}>
//               <dt className="sr-only">{s.label}</dt>
//               <dd className="flex items-baseline gap-3">
//                 <span className="text-3xl font-semibold tracking-tight text-white">
//                   {s.value}
//                 </span>
//                 <span className="text-sm text-slate-400">{s.label}</span>
//               </dd>
//             </div>
//           ))}
//         </dl>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Globe,
  FileSpreadsheet,
  Headphones,
  Sparkles,
  Users,
  Cloud,
  BadgeCheck,
} from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "Application Modernization",
    desc: "Legacy systems to secure cloud services",
  },
  {
    icon: FileSpreadsheet,
    title: "Accounting & FinTech Ledgers",
    desc: "Shariah-aligned, audit-ready reporting",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    desc: "Modern web platforms and scalable APIs",
  },
  {
    icon: Headphones,
    title: "Managed Support",
    desc: "24/7 monitoring with clear SLAs",
  },
];

const stats = [
  { value: "100+", label: "Businesses served" },
  { value: "24/7", label: "Managed support" },
  { value: "KL", label: "Brickfields, Kuala Lumpur" },
];

const marqueeItems = [
  { icon: Sparkles, title: "AI-Powered Services", sub: "Smarter managed technology" },
  { icon: BadgeCheck, title: "Shariah-Aligned Fintech", sub: "Zero-riba verified ledgers" },
  { icon: ShieldCheck, title: "SSM & BNM Compliance", sub: "Regulatory-ready operations" },
  { icon: Headphones, title: "24/7 Managed Support", sub: "Clear SLAs, always on" },
  { icon: Cloud, title: "Cloud Modernization", sub: "Secure, scalable platforms" },
  { icon: Users, title: "100+ Businesses", sub: "Trusted worldwide" },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const d = reduce ? 0 : 1; // 0 disables movement for reduced-motion users

  // Left column: staggered fade-up
  const leftContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 22 * d },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
  };

  // Left content: each piece slides in from the LEFT
  const fadeLeft = {
    hidden: { opacity: 0, x: -90 * d, filter: reduce ? "blur(0px)" : "blur(6px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: EASE },
    },
  };

  // Right panel: slides in from the RIGHT (mirror of the left), rows stagger
  const panel = {
    hidden: { opacity: 0, x: 90 * d, filter: reduce ? "blur(0px)" : "blur(6px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        ease: EASE,
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
  };
  const row = {
    hidden: { opacity: 0, x: 40 * d },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
  };

  // Replays every time the section scrolls back into view
  const viewport = { once: false, amount: 0.25 };

  // Stats row
  const statsContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0F1C] text-white">
      <style>{`
        @keyframes hero-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
        .hero-marquee-track {
          animation: hero-marquee 40s linear infinite;
          will-change: transform;
        }
        .hero-marquee:hover .hero-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-marquee-track { animation: none; }
        }
      `}</style>

      {/* Background: subtle grid + soft glows */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={reduce ? undefined : { opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 right-0 h-[520px] w-[720px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-24 left-1/2 -translate-x-1/2 h-[160px] w-[900px] max-w-full rounded-full bg-blue-500/20 blur-[90px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative z-10 pt-28 sm:pt-32">
        {/* ===== TOP MARQUEE (right to left, glass cards) ===== */}
        <motion.div
          initial={{ opacity: 0, y: -12 * d }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="hero-marquee relative w-full overflow-hidden py-3"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
          aria-label="Our strengths"
        >
          <div className="hero-marquee-track flex w-max gap-4">
            {[0, 1].map((setIdx) => (
              <div
                key={setIdx}
                className="flex shrink-0 gap-4 pr-4"
                aria-hidden={setIdx === 1}
              >
                {marqueeItems.map(({ icon: Icon, title, sub }) => (
                  <div
                    key={`${setIdx}-${title}`}
                    className="relative flex w-[270px] sm:w-[300px] shrink-0 items-center gap-3.5 overflow-hidden rounded-2xl border border-white/[0.16] bg-white/[0.07] px-4 py-3.5 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_30px_rgba(2,6,23,0.35),inset_0_1px_0_rgba(255,255,255,0.22)] transition-colors hover:bg-white/[0.11] hover:border-white/25"
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.10] to-transparent" />
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-300/25 bg-blue-400/10 text-blue-300">
                      <Icon size={20} />
                    </div>
                    <div className="relative min-w-0">
                      <p className="truncate text-sm font-semibold text-white">{title}</p>
                      <p className="truncate text-xs text-slate-300/80">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== HERO CONTENT ===== */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-16 sm:pb-24">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            {/* LEFT: message */}
            <motion.div
              className="lg:col-span-7"
              variants={leftContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <motion.div
                variants={fadeLeft}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300"
              >
                <span className="relative flex h-1.5 w-1.5">
                  {!reduce && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                  )}
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" />
                </span>
                AI-Powered Technology Managed Services
              </motion.div>

              <motion.h1
                variants={fadeLeft}
                className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]"
              >
                Scale smart.
                <br />
                <span className="text-slate-400">Run your systems with</span>{" "}
                <span className="text-blue-400">confidence.</span>
              </motion.h1>

              <motion.p
                variants={fadeLeft}
                className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-400"
              >
                Join 100+ businesses worldwide who drive measurable results daily
                from one accountable technology partner.
              </motion.p>

              <motion.div variants={fadeLeft} className="mt-9 flex flex-col sm:flex-row gap-3">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="flex">
                  <Link
                    href="/contact"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
                  >
                    Schedule a Call
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="flex">
                  <Link
                    href="/services"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:bg-white/[0.08] hover:border-white/25 hover:scale-105 active:scale-95 focus:outline-none"
                  >
                    Explore Services
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeLeft}
                className="mt-8 flex items-center gap-2 text-sm text-slate-400"
              >
                <ShieldCheck size={16} className="text-blue-400" />
                <span>Shariah-aligned fintech expertise · SSM &amp; BNM compliance</span>
              </motion.div>
            </motion.div>

            {/* RIGHT: capability panel */}
            <div className="lg:col-span-5">
              <motion.div
                variants={panel}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/30 backdrop-blur"
              >
                <div className="rounded-xl border border-white/5 bg-[#0D1324] divide-y divide-white/5">
                  {highlights.map(({ icon: Icon, title, desc }) => (
                    <motion.div
                      key={title}
                      variants={row}
                      whileHover={reduce ? undefined : { x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                      className="flex items-start gap-4 p-5 transition-colors hover:bg-white/[0.03]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="mt-0.5 text-sm text-slate-400">{desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats strip */}
          <motion.dl
            variants={statsContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="flex items-baseline gap-3">
                  <span className="text-3xl font-semibold tracking-tight text-white">
                    {s.value}
                  </span>
                  <span className="text-sm text-slate-400">{s.label}</span>
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}