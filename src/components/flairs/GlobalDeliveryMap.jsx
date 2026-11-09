// "use client";

// import { useState } from "react";
// import { MapPin, Globe, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
// import { worldMapDottedPath } from "@/data/worldMapDots";

// const globalPins = [
//   {
//     id: "us-west",
//     name: "San Francisco & Silicon Valley",
//     country: "United States",
//     flag: "🇺🇸",
//     role: "FinTech Cloud Infrastructure & AI Systems",
//     x: 18.5,
//     y: 39,
//     delay: "0s",
//   },
//   {
//     id: "us-east",
//     name: "New York City (Wall St.)",
//     country: "United States",
//     flag: "🇺🇸",
//     role: "Capital Markets, Institutional Ledgers & Treasury",
//     x: 27.5,
//     y: 37,
//     delay: "0.6s",
//   },
//   {
//     id: "eu-lon",
//     name: "London & Frankfurt",
//     country: "United Kingdom & Germany",
//     flag: "🇬🇧",
//     role: "Cross-Border Payments & European Compliance",
//     x: 50.5,
//     y: 28,
//     delay: "1.2s",
//   },
//   {
//     id: "me-riy",
//     name: "Riyadh & Cairo",
//     country: "Saudi Arabia & Egypt",
//     flag: "🇸🇦",
//     role: "Shariah Core Banking & Enterprise ERP Solutions",
//     x: 60.5,
//     y: 44.5,
//     delay: "1.8s",
//   },
//   {
//     id: "me-dxb",
//     name: "Dubai (DIFC FinTech Hub)",
//     country: "United Arab Emirates",
//     flag: "🇦🇪",
//     role: "Zero-Riba Micro-Financing & Digital Asset Ledgers",
//     x: 64.5,
//     y: 49,
//     delay: "2.4s",
//   },
//   {
//     id: "kl-hq",
//     name: "Brickfields, Kuala Lumpur (HQ)",
//     country: "Malaysia",
//     flag: "🇲🇾",
//     role: "Global Headquarters, Core Engineering & Shariah Governance",
//     x: 77.2,
//     y: 59,
//     delay: "0.3s",
//     isHq: true,
//   },
//   {
//     id: "au-syd",
//     name: "Sydney, Australia",
//     country: "Australia",
//     flag: "🇦🇺",
//     role: "24/7 Follow-the-Sun Managed IT & Support Desk",
//     x: 88.5,
//     y: 78,
//     delay: "3.0s",
//   },
// ];

// export default function GlobalDeliveryMap() {
//   const [activePin, setActivePin] = useState(null);

//   return (
//     <section className="relative py-24 sm:py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-100">
      
//       {/* Subtle Ambient Radial Highlight */}
//       <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-50/70 blur-3xl pointer-events-none -z-10" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
//           {/* Left Column: Headline & Value Proposition (matching FlairsTech screenshot) */}
//           <div className="lg:col-span-5 space-y-6">
            
//             <div>
//               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-slate-950 leading-[1.08]">
//                 Global Delivery <br />
//                 <span className="text-[#2563EB]">Local Feel</span>
//               </h2>
//             </div>

//             <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
//               <p>
//                 From North America to the Middle East and beyond, projects delivered across the map translate into solutions built around different rhythms, regulations, and customers.
//               </p>
//               <p>
//                 Every pin reflects an ability to achieve operational maturity and save costs without cutting any corners,{" "}
//                 <strong className="text-slate-950 font-bold">wherever you are.</strong>
//               </p>
//             </div>

//             {/* Quick HQ Pill Badge */}
//             <div className="pt-2 flex flex-wrap items-center gap-3">
//               <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-[#2563EB] shadow-xs">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
//                 </span>
//                 <span>Global HQ: Brickfields, Kuala Lumpur, Malaysia</span>
//               </div>
//             </div>

//             {/* Interactive Hub Quick Selector */}
//             <div className="pt-2">
//               <p className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider mb-2.5">
//                 Explore Regional Hubs:
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {globalPins.map((pin) => (
//                   <button
//                     key={pin.id}
//                     type="button"
//                     onClick={() => setActivePin(activePin?.id === pin.id ? null : pin)}
//                     className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
//                       activePin?.id === pin.id
//                         ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/25 scale-105"
//                         : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
//                     }`}
//                   >
//                     <span>{pin.flag}</span>
//                     <span>{pin.name.split(",")[0].split("&")[0].trim()}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* Right Column: Seamless Dotted World Map & Animated Glowing Location Pins */}
//           <div className="lg:col-span-7 relative w-full aspect-[16/9] min-h-[360px] sm:min-h-[440px] flex items-center justify-center select-none">
            
//             {/* SVG Canvas for Dotted Map & Live Telemetry Arcs */}
//             <svg
//               viewBox="0 0 1000 500"
//               className="absolute inset-0 w-full h-full object-contain overflow-visible"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <defs>
//                 {/* Pin Color Gradient */}
//                 <linearGradient id="pinGradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#38BDF8" />
//                   <stop offset="35%" stopColor="#2563EB" />
//                   <stop offset="100%" stopColor="#1D4ED8" />
//                 </linearGradient>

//                 {/* HQ Golden / Electric Halo */}
//                 <linearGradient id="hqGradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#60A5FA" />
//                   <stop offset="50%" stopColor="#2563EB" />
//                   <stop offset="100%" stopColor="#1E40AF" />
//                 </linearGradient>

//                 {/* Connection Arc Gradient */}
//                 <linearGradient id="arcGradient" x1="0" y1="0" x2="1" y2="0">
//                   <stop offset="0%" stopColor="#2563EB" stopOpacity="0.7" />
//                   <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
//                   <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.4" />
//                 </linearGradient>
//               </defs>

//               {/* High-Fidelity Dotted Matrix World Map */}
//               <path
//                 d={worldMapDottedPath}
//                 fill="#CBD5E1"
//                 className="transition-colors hover:fill-[#94A3B8]"
//               />

//               {/* Animated Live Data Arcs Streaming from Kuala Lumpur HQ */}
//               <g fill="none" strokeWidth="1.5" stroke="url(#arcGradient)" opacity="0.55">
//                 {/* Arc 1: KL HQ to Dubai */}
//                 <path
//                   d="M 772 295 Q 700 230 645 245"
//                   strokeDasharray="4 8"
//                   className="animate-dash-stream"
//                 />

//                 {/* Arc 2: KL HQ to London */}
//                 <path
//                   d="M 772 295 Q 640 140 505 140"
//                   strokeDasharray="4 8"
//                   className="animate-dash-stream"
//                 />

//                 {/* Arc 3: London to New York */}
//                 <path
//                   d="M 505 140 Q 380 90 275 185"
//                   strokeDasharray="4 8"
//                   className="animate-dash-stream"
//                 />

//                 {/* Arc 4: New York to San Francisco */}
//                 <path
//                   d="M 275 185 Q 230 160 185 195"
//                   strokeDasharray="4 8"
//                   className="animate-dash-stream"
//                 />

//                 {/* Arc 5: KL HQ to Sydney */}
//                 <path
//                   d="M 772 295 Q 840 330 885 390"
//                   strokeDasharray="4 8"
//                   className="animate-dash-stream"
//                 />
//               </g>
//             </svg>

//             {/* Interactive Animated Teardrop Pins Layer */}
//             <div className="absolute inset-0 pointer-events-auto">
//               {globalPins.map((pin, idx) => {
//                 const isSelected = activePin?.id === pin.id;

//                 return (
//                   <div
//                     key={pin.id}
//                     style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
//                     className="absolute -translate-x-1/2 -translate-y-full cursor-pointer group z-20"
//                     onClick={() => setActivePin(isSelected ? null : pin)}
//                   >
//                     {/* Concentric Expanding Radar Pulse Waves */}
//                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none">
//                       <span className="absolute -inset-4 rounded-full bg-blue-500/25 animate-radar-pulse" />
//                       <span
//                         className="absolute -inset-4 rounded-full bg-cyan-400/20 animate-radar-pulse"
//                         style={{ animationDelay: "1.3s" }}
//                       />
//                     </div>

//                     {/* Ground Oval Drop Shadow */}
//                     <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 rounded-full bg-blue-900/20 blur-[1px] pointer-events-none transition-transform group-hover:scale-125" />

//                     {/* Floating Teardrop Map Pin (matching screenshot media_1793864994863_f5546305.jpg) */}
//                     <div
//                       className="relative animate-pin-levitate transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2"
//                       style={{ animationDelay: pin.delay }}
//                     >
//                       <svg
//                         viewBox="0 0 28 36"
//                         className={`w-7 sm:w-8 h-9 sm:h-10 transition-all ${
//                           isSelected
//                             ? "drop-shadow-[0_8px_16px_rgba(37,99,235,0.6)] scale-110"
//                             : "drop-shadow-md hover:drop-shadow-xl"
//                         }`}
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         {/* Teardrop Pin Silhouette */}
//                         <path
//                           d="M 14 0 C 6.27 0 0 6.27 0 14 C 0 23.5 14 36 14 36 C 14 36 28 23.5 28 14 C 28 6.27 21.73 0 14 0 Z"
//                           fill={pin.isHq ? "url(#hqGradient)" : "url(#pinGradient)"}
//                         />

//                         {/* Crisp White Inner Center Circle */}
//                         <circle cx="14" cy="13.5" r="4.8" fill="#FFFFFF" />

//                         {/* Optional HQ Golden Star Center Dot */}
//                         {pin.isHq && (
//                           <circle cx="14" cy="13.5" r="2.2" fill="#2563EB" />
//                         )}
//                       </svg>

//                       {/* Primary HQ Indicator Badge */}
//                       {pin.isHq && (
//                         <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-full shadow-lg whitespace-nowrap border border-blue-400 flex items-center gap-1">
//                           <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
//                           <span>GLOBAL HQ</span>
//                         </div>
//                       )}
//                     </div>

//                     {/* Interactive Glassmorphism Tooltip Popover on Hover or Click */}
//                     <div
//                       className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-md text-white shadow-2xl border border-slate-700/80 transition-all duration-200 z-50 pointer-events-none ${
//                         isSelected
//                           ? "opacity-100 scale-100 flex flex-col"
//                           : "opacity-0 scale-95 hidden group-hover:flex flex-col"
//                       }`}
//                     >
//                       <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800">
//                         <div className="flex items-center gap-1.5">
//                           <span className="text-base">{pin.flag}</span>
//                           <span className="text-xs font-bold text-white tracking-tight">
//                             {pin.name}
//                           </span>
//                         </div>
//                         <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
//                       </div>

//                       <p className="text-[11px] text-slate-300 font-normal leading-relaxed pt-2">
//                         {pin.role}
//                       </p>

//                       <div className="pt-2.5 mt-1 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
//                         <span className="text-emerald-400 font-semibold flex items-center gap-1">
//                           <CheckCircle2 size={11} />
//                           <span>Connected</span>
//                         </span>
//                         <span>{pin.country}</span>
//                       </div>

//                       {/* Arrow Triangle */}
//                       <div className="w-2.5 h-2.5 bg-slate-900/95 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-slate-700/80" />
//                     </div>

//                   </div>
//                 );
//               })}
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Globe, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { worldMapDottedPath } from "@/data/worldMapDots";

const globalPins = [
  {
    id: "us-west",
    name: "San Francisco & Silicon Valley",
    country: "United States",
    flag: "🇺🇸",
    role: "FinTech Cloud Infrastructure & AI Systems",
    x: 18.5,
    y: 39,
    delay: "0s",
  },
  {
    id: "us-east",
    name: "New York City (Wall St.)",
    country: "United States",
    flag: "🇺🇸",
    role: "Capital Markets, Institutional Ledgers & Treasury",
    x: 27.5,
    y: 37,
    delay: "0.6s",
  },
  {
    id: "eu-lon",
    name: "London & Frankfurt",
    country: "United Kingdom & Germany",
    flag: "🇬🇧",
    role: "Cross-Border Payments & European Compliance",
    x: 50.5,
    y: 28,
    delay: "1.2s",
  },
  {
    id: "me-riy",
    name: "Riyadh & Cairo",
    country: "Saudi Arabia & Egypt",
    flag: "🇸🇦",
    role: "Shariah Core Banking & Enterprise ERP Solutions",
    x: 60.5,
    y: 44.5,
    delay: "1.8s",
  },
  {
    id: "me-dxb",
    name: "Dubai (DIFC FinTech Hub)",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    role: "Zero-Riba Micro-Financing & Digital Asset Ledgers",
    x: 64.5,
    y: 49,
    delay: "2.4s",
  },
  {
    id: "kl-hq",
    name: "Brickfields, Kuala Lumpur (HQ)",
    country: "Malaysia",
    flag: "🇲🇾",
    role: "Global Headquarters, Core Engineering & Shariah Governance",
    x: 77.2,
    y: 59,
    delay: "0.3s",
    isHq: true,
  },
  {
    id: "au-syd",
    name: "Sydney, Australia",
    country: "Australia",
    flag: "🇦🇺",
    role: "24/7 Follow-the-Sun Managed IT & Support Desk",
    x: 88.5,
    y: 78,
    delay: "3.0s",
  },
];

const EASE = [0.22, 1, 0.36, 1];

export default function GlobalDeliveryMap() {
  const [activePin, setActivePin] = useState(null);
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

  // Right column (map): slides in from the RIGHT, mirror of the left
  const fromRight = {
    hidden: { opacity: 0, x: 90 * d, filter: blurIn },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: EASE },
    },
  };

  // Replays every time the section scrolls back into view
  const viewport = { once: false, amount: 0.25 };

  return (
    <section className="relative py-24 sm:py-32 bg-[#0A0F1C] text-white overflow-hidden border-t border-white/10">
      {/* Subtle Ambient Radial Highlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none z-0" />
      <div className="absolute -bottom-40 -left-24 w-[480px] h-[480px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none z-0" />
      {/* Faint grid, same language as the hero */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.3] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 60% 50%, black 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 60% 50%, black 25%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            variants={leftContainer}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.div variants={fromLeft}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-white leading-[1.08]">
                Global Delivery <br />
                <span className="text-blue-400">Local Feel</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fromLeft}
              className="space-y-4 text-sm sm:text-base text-slate-400 leading-relaxed font-normal max-w-lg"
            >
              <p>
                From North America to the Middle East and beyond, projects delivered across the map translate into solutions built around different rhythms, regulations, and customers.
              </p>
              <p>
                Every pin reflects an ability to achieve operational maturity and save costs without cutting any corners,{" "}
                <strong className="text-white font-bold">wherever you are.</strong>
              </p>
            </motion.div>

            {/* Quick HQ Pill Badge */}
            <motion.div variants={fromLeft} className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/15 text-xs font-bold text-blue-300 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Global HQ: Brickfields, Kuala Lumpur, Malaysia</span>
              </div>
            </motion.div>

            {/* Interactive Hub Quick Selector */}
            <motion.div variants={fromLeft} className="pt-2">
              <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Explore Regional Hubs:
              </p>
              <div className="flex flex-wrap gap-2">
                {globalPins.map((pin) => (
                  <button
                    key={pin.id}
                    type="button"
                    onClick={() => setActivePin(activePin?.id === pin.id ? null : pin)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activePin?.id === pin.id
                        ? "border border-indigo-400/60 bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] text-white shadow-md shadow-indigo-500/30 scale-105"
                        : "border border-white/10 bg-white/[0.06] text-slate-300 hover:bg-white/[0.12] hover:text-white"
                    }`}
                  >
                    <span>{pin.flag}</span>
                    <span>{pin.name.split(",")[0].split("&")[0].trim()}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dotted World Map & Animated Glowing Location Pins */}
          <motion.div
            variants={fromRight}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="lg:col-span-7 relative w-full aspect-[16/9] min-h-[360px] sm:min-h-[440px] flex items-center justify-center select-none"
          >
            {/* SVG Canvas for Dotted Map & Live Telemetry Arcs */}
            <svg
              viewBox="0 0 1000 500"
              className="absolute inset-0 w-full h-full object-contain overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="pinGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="35%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#1D4ED8" />
                </linearGradient>

                <linearGradient id="hqGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="50%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>

                <linearGradient id="arcGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* High-Fidelity Dotted Matrix World Map */}
              <path
                d={worldMapDottedPath}
                fill="#3A4B66"
                className="transition-colors hover:fill-[#5B7094]"
              />

              {/* Animated Live Data Arcs Streaming from Kuala Lumpur HQ */}
              <g fill="none" strokeWidth="1.5" stroke="url(#arcGradient)" opacity="0.85">
                <path
                  d="M 772 295 Q 700 230 645 245"
                  strokeDasharray="4 8"
                  className="animate-dash-stream"
                />
                <path
                  d="M 772 295 Q 640 140 505 140"
                  strokeDasharray="4 8"
                  className="animate-dash-stream"
                />
                <path
                  d="M 505 140 Q 380 90 275 185"
                  strokeDasharray="4 8"
                  className="animate-dash-stream"
                />
                <path
                  d="M 275 185 Q 230 160 185 195"
                  strokeDasharray="4 8"
                  className="animate-dash-stream"
                />
                <path
                  d="M 772 295 Q 840 330 885 390"
                  strokeDasharray="4 8"
                  className="animate-dash-stream"
                />
              </g>
            </svg>

            {/* Interactive Animated Teardrop Pins Layer */}
            <div className="absolute inset-0 pointer-events-auto">
              {globalPins.map((pin) => {
                const isSelected = activePin?.id === pin.id;

                return (
                  <div
                    key={pin.id}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-full cursor-pointer group z-20"
                    onClick={() => setActivePin(isSelected ? null : pin)}
                  >
                    {/* Concentric Expanding Radar Pulse Waves */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none">
                      <span className="absolute -inset-4 rounded-full bg-blue-500/25 animate-radar-pulse" />
                      <span
                        className="absolute -inset-4 rounded-full bg-cyan-400/20 animate-radar-pulse"
                        style={{ animationDelay: "1.3s" }}
                      />
                    </div>

                    {/* Ground Oval Drop Shadow */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 rounded-full bg-black/40 blur-[2px] pointer-events-none transition-transform group-hover:scale-125" />

                    {/* Floating Teardrop Map Pin */}
                    <div
                      className="relative animate-pin-levitate transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-2"
                      style={{ animationDelay: pin.delay }}
                    >
                      <svg
                        viewBox="0 0 28 36"
                        className={`w-7 sm:w-8 h-9 sm:h-10 transition-all ${
                          isSelected
                            ? "drop-shadow-[0_8px_16px_rgba(37,99,235,0.6)] scale-110"
                            : "drop-shadow-md hover:drop-shadow-xl"
                        }`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M 14 0 C 6.27 0 0 6.27 0 14 C 0 23.5 14 36 14 36 C 14 36 28 23.5 28 14 C 28 6.27 21.73 0 14 0 Z"
                          fill={pin.isHq ? "url(#hqGradient)" : "url(#pinGradient)"}
                        />
                        <circle cx="14" cy="13.5" r="4.8" fill="#FFFFFF" />
                        {pin.isHq && <circle cx="14" cy="13.5" r="2.2" fill="#2563EB" />}
                      </svg>

                      {/* Primary HQ Indicator Badge */}
                      {pin.isHq && (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-full shadow-lg whitespace-nowrap border border-blue-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>GLOBAL HQ</span>
                        </div>
                      )}
                    </div>

                    {/* Tooltip Popover on Hover or Click */}
                    <div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-md text-white shadow-2xl border border-slate-700/80 transition-all duration-200 z-50 pointer-events-none ${
                        isSelected
                          ? "opacity-100 scale-100 flex flex-col"
                          : "opacity-0 scale-95 hidden group-hover:flex flex-col"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <span className="text-base">{pin.flag}</span>
                          <span className="text-xs font-bold text-white tracking-tight">
                            {pin.name}
                          </span>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>

                      <p className="text-[11px] text-slate-300 font-normal leading-relaxed pt-2">
                        {pin.role}
                      </p>

                      <div className="pt-2.5 mt-1 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span className="text-emerald-400 font-semibold flex items-center gap-1">
                          <CheckCircle2 size={11} />
                          <span>Connected</span>
                        </span>
                        <span>{pin.country}</span>
                      </div>

                      <div className="w-2.5 h-2.5 bg-slate-900/95 rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2 border-r border-b border-slate-700/80" />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}