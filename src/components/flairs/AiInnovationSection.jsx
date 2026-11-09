// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { ArrowUpRight, Play, X, Sparkles, CheckCircle2 } from "lucide-react";

// export default function AiInnovationSection() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <section className="relative py-24 sm:py-32 bg-[#091530] text-white overflow-hidden border-t border-b border-blue-900/40">
      
//       {/* Background Graphic / Video Tint Overlay (Screenshot 5) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#091530] via-[#0D214D]/90 to-[#0A1A3C]/70 z-10 pointer-events-none" />
//       <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
      
//       {/* Background Image / Video Mockup */}
//       <img
//         src="/images/corporate_boardroom.jpg"
//         alt="Engineering Leadership and AI Orchestration"
//         className="absolute inset-0 w-full h-full object-cover object-center opacity-30 filter saturate-50"
//       />

//       <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* Left Column: Headline & Description (FlairsTech Screenshot 5) */}
//           <div className="lg:col-span-7 space-y-6">
            
//             <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-white leading-tight">
//               Business, Simplified with{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#60A5FA]">
//                 Qardh AI.
//               </span>
//             </h2>

//             <div className="space-y-4 max-w-2xl">
//               <p className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
//                 Our vision is to simplify lives using technology, so we created Qardh Core AI.
//               </p>

//               <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
//                 A series of proprietary AI helpers that power our managed services, enhancing teams&apos; performance and multiplying outcomes. The custom-made orchestration of AI assistants works hand-in-hand with human talent, helping you exceed industry benchmarks.
//               </p>

//               <p className="text-xs font-mono font-semibold text-blue-300 italic pt-1">
//                 Qardh AI is for Ethical Intelligence in Managed Financial Architecture.
//               </p>
//             </div>

//             {/* Explore Button (Screenshot 5) */}
//             <div className="pt-2">
//               <Link
//                 href="/services/fintech"
//                 className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all shadow-xl shadow-blue-500/25 uppercase tracking-wider"
//               >
//                 <span>Explore Qardh AI</span>
//                 <ArrowUpRight size={15} />
//               </Link>
//             </div>

//           </div>

//           {/* Right Column: Floating Stats Glass Card & Play Button (Screenshot 5) */}
//           <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
            
//             {/* Floating Glass Stats Card */}
//             <div className="w-full max-w-sm p-6 sm:p-7 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-5">
              
//               <div className="flex items-center justify-between pb-3 border-b border-white/10">
//                 <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider">
//                   Live Orchestration Stats
//                 </span>
//                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <div className="text-3xl sm:text-4xl font-black font-mono text-white">
//                     0.00%
//                   </div>
//                   <div className="text-[11px] text-slate-300 mt-1 leading-tight">
//                     Riba Audit Errors
//                   </div>
//                 </div>

//                 <div>
//                   <div className="text-3xl sm:text-4xl font-black font-mono text-cyan-300">
//                     x3
//                   </div>
//                   <div className="text-[11px] text-slate-300 mt-1 leading-tight">
//                     More contact quality audits
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-mono">
//                 <span>Data reporting speed:</span>
//                 <span className="text-emerald-400 font-bold">60% Faster</span>
//               </div>
//             </div>

//             {/* Video Play Trigger (Screenshot 5) */}
//             <button
//               type="button"
//               onClick={() => setIsPlaying(true)}
//               className="group inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold text-white transition-all"
//             >
//               <div className="w-8 h-8 rounded-full bg-white text-[#2563EB] flex items-center justify-center transition-transform group-hover:scale-110 shadow-md">
//                 <Play size={13} fill="currentColor" className="ml-0.5" />
//               </div>
//               <span>Hear about Qardh AI from our Leadership</span>
//             </button>

//           </div>

//         </div>
//       </div>

//       {/* Video Modal Popup */}
//       {isPlaying && (
//         <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
//           <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
//             <button
//               onClick={() => setIsPlaying(false)}
//               className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
//             >
//               <X size={18} />
//             </button>
//             <video
//               src="/herovideo.mp4"
//               controls
//               autoPlay
//               className="w-full h-auto aspect-video object-cover"
//             />
//           </div>
//         </div>
//       )}

//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Play, X, Sparkles, CheckCircle2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

export default function AiInnovationSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const reduce = useReducedMotion();
  const d = reduce ? 0 : 1; // 0 disables movement for reduced-motion users
  const blurIn = reduce ? "blur(0px)" : "blur(6px)";

  // Left column: every piece slides in from the LEFT, staggered
  const leftContainer = {
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

  // Right column: slides in from the RIGHT (mirror of the left), items stagger
  const rightContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
  };
  const fromRight = {
    hidden: { opacity: 0, x: 90 * d, filter: blurIn },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: EASE },
    },
  };

  // Replays every time the section scrolls back into view
  const viewport = { once: false, amount: 0.25 };

  return (
    <section className="relative py-24 sm:py-32 bg-[#091530] text-white overflow-hidden border-t border-b border-blue-900/40">
      {/* Background Graphic / Video Tint Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#091530] via-[#0D214D]/90 to-[#0A1A3C]/70 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      {/* Background Image / Video Mockup */}
      <img
        src="/images/corporate_boardroom.jpg"
        alt="Engineering Leadership and AI Orchestration"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 filter saturate-50"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline & Description */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            variants={leftContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.h2
              variants={fromLeft}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-white leading-tight"
            >
              Business, Simplified with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#60A5FA]">
                Qardh AI.
              </span>
            </motion.h2>

            <div className="space-y-4 max-w-2xl">
              <motion.p
                variants={fromLeft}
                className="text-base sm:text-lg font-bold text-slate-100 leading-snug"
              >
                Our vision is to simplify lives using technology, so we created Qardh Core AI.
              </motion.p>

              <motion.p
                variants={fromLeft}
                className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal"
              >
                A series of proprietary AI helpers that power our managed services, enhancing teams&apos; performance and multiplying outcomes. The custom-made orchestration of AI assistants works hand-in-hand with human talent, helping you exceed industry benchmarks.
              </motion.p>

              <motion.p
                variants={fromLeft}
                className="text-xs font-mono font-semibold text-blue-300 italic pt-1"
              >
                Qardh AI is for Ethical Intelligence in Managed Financial Architecture.
              </motion.p>
            </div>

            {/* Explore Button */}
            <motion.div variants={fromLeft} className="pt-2">
              <motion.div
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex"
              >
                <Link
                  href="/services/fintech"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider"
                >
                  <span>Explore Qardh AI</span>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Floating Stats Glass Card & Play Button */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6"
            variants={rightContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            {/* Floating Glass Stats Card */}
            <motion.div
              variants={fromRight}
              className="w-full max-w-sm p-6 sm:p-7 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider">
                  Live Orchestration Stats
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                    0.00%
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 leading-tight">
                    Riba Audit Errors
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-cyan-300">
                    x3
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 leading-tight">
                    More contact quality audits
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-mono">
                <span>Data reporting speed:</span>
                <span className="text-emerald-400 font-bold">60% Faster</span>
              </div>
            </motion.div>

            {/* Video Play Trigger */}
            <motion.button
              variants={fromRight}
              type="button"
              onClick={() => setIsPlaying(true)}
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold text-white transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white text-[#2563EB] flex items-center justify-center transition-transform group-hover:scale-110 shadow-md">
                <Play size={13} fill="currentColor" className="ml-0.5" />
              </div>
              <span>Hear about Qardh AI from our Leadership</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Video Modal Popup (fades and scales in/out) */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            key="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: reduce ? 1 : 0.92, y: 20 * d }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: reduce ? 1 : 0.95, y: 10 * d }}
              transition={{ duration: 0.35, ease: EASE }}
              className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPlaying(false)}
                aria-label="Close video"
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
              <video
                src="/herovideo.mp4"
                controls
                autoPlay
                className="w-full h-auto aspect-video object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}