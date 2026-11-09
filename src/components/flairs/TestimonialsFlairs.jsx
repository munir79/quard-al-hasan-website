// import { Star, Quote, CheckCircle2 } from "lucide-react";

// const testimonials = [
//   {
//     quote:
//       "Qardh Al Hasan Fintech re-architected our microfinance core with complete Shariah compliance. Their team in Brickfields was transparent, responsive, and delivered ahead of schedule.",
//     author: "Dato' Ahmad Zulkifli",
//     role: "Chief Operating Officer",
//     company: "Islamic Microfinance Cooperative Malaysia",
//     tag: "FinTech & Banking",
//   },
//   {
//     quote:
//       "Working with their engineering team felt like having our own in-house CTO and senior developers. Our Next.js enterprise portal load times dropped by 65%, directly boosting lead inquiries.",
//     author: "Tan Sri Raymond Lee",
//     role: "Managing Director",
//     company: "Asean Digital Logistics Group",
//     tag: "Enterprise Portal & Web",
//   },
//   {
//     quote:
//       "Their zero-riba philosophy and strict data security protocols gave our board complete confidence. They are truly one accountable partner from UX wireframes to 24/7 cloud support.",
//     author: "Dr. Farhana Siddiqui",
//     role: "Head of Digital Transformation",
//     company: "Ethical Capital & Ventures Sdn Bhd",
//     tag: "Cloud ERP & Software",
//   },
// ];

// export default function TestimonialsFlairs() {
//   return (
//     <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-200/80">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Header */}
//         <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
//           <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4F46E5] uppercase tracking-widest">
//             <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
//             Client Endorsements
//           </div>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
//             What Our Partners{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#2563EB]">
//               Say About Us
//             </span>
//           </h2>
//           <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
//             Trusted by Malaysian cooperatives, financial institutions, and fast-growing enterprises.
//           </p>
//         </div>

//         {/* 3 Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
//           {testimonials.map((t, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 relative"
//             >
//               <div>
//                 {/* Top: 5 Stars + Tag */}
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex items-center gap-1 text-amber-400">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} size={15} fill="currentColor" />
//                     ))}
//                   </div>
//                   <span className="text-[10px] font-mono font-bold text-[#4F46E5] bg-indigo-50 px-2 py-0.5 rounded">
//                     {t.tag}
//                   </span>
//                 </div>

//                 {/* Quote */}
//                 <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
//                   &ldquo;{t.quote}&rdquo;
//                 </p>
//               </div>

//               {/* Author Details */}
//               <div className="pt-4 border-t border-slate-100">
//                 <div className="text-sm font-bold text-slate-900">{t.author}</div>
//                 <div className="text-xs text-[#4F46E5] font-semibold">{t.role}</div>
//                 <div className="text-xs text-slate-500 mt-0.5">{t.company}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Qardh Al Hasan Fintech re-architected our microfinance core with complete Shariah compliance. Their team in Brickfields was transparent, responsive, and delivered ahead of schedule.",
    author: "Dato' Ahmad Zulkifli",
    role: "Chief Operating Officer",
    company: "Islamic Microfinance Cooperative Malaysia",
    tag: "FinTech & Banking",
  },
  {
    quote:
      "Working with their engineering team felt like having our own in-house CTO and senior developers. Our Next.js enterprise portal load times dropped by 65%, directly boosting lead inquiries.",
    author: "Tan Sri Raymond Lee",
    role: "Managing Director",
    company: "Asean Digital Logistics Group",
    tag: "Enterprise Portal & Web",
  },
  {
    quote:
      "Their zero-riba philosophy and strict data security protocols gave our board complete confidence. They are truly one accountable partner from UX wireframes to 24/7 cloud support.",
    author: "Dr. Farhana Siddiqui",
    role: "Head of Digital Transformation",
    company: "Ethical Capital & Ventures Sdn Bhd",
    tag: "Cloud ERP & Software",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export default function TestimonialsFlairs() {
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
    const last = testimonials.length - 1;
    const x = idx === 0 ? -90 : idx === last ? 90 : 0;
    const y = idx === 0 || idx === last ? 0 : 60;
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
      <div className="absolute -top-32 left-0 h-[460px] w-[640px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-24 h-[420px] w-[520px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />

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
            Client Endorsements
          </motion.div>

          <motion.h2
            variants={fromLeft}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            What Our Partners{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#60A5FA]">
              Say About Us
            </span>
          </motion.h2>

          <motion.p
            variants={fromLeft}
            className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal"
          >
            Trusted by Malaysian cooperatives, financial institutions, and fast-growing enterprises.
          </motion.p>
        </motion.div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant(idx)}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
              className="group relative flex flex-col justify-between overflow-hidden p-8 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-blue-400/40 shadow-[0_8px_30px_rgba(2,6,23,0.35),inset_0_1px_0_rgba(255,255,255,0.10)] hover:bg-white/[0.07] hover:shadow-[0_12px_50px_rgba(59,130,246,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] transition-[background-color,border-color,box-shadow] duration-300"
            >
              {/* Glass sheen + faint quote mark */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.06] to-transparent" />
              <Quote
                aria-hidden
                size={72}
                className="pointer-events-none absolute -right-2 -top-2 text-blue-400/[0.07] rotate-180"
              />

              <div className="relative">
                {/* Top: 5 Stars + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-blue-300 bg-blue-400/10 border border-blue-300/20 px-2 py-0.5 rounded">
                    {t.tag}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Details */}
              <div className="relative pt-4 border-t border-white/10">
                <div className="text-sm font-bold text-white">{t.author}</div>
                <div className="text-xs text-blue-400 font-semibold">{t.role}</div>
                <div className="text-xs text-slate-400 mt-0.5">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}