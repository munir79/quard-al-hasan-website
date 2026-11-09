import Link from "next/link";

export default function BrandLogo({
  className = "",
  showText = true,
  imgClassName = "h-10 sm:h-11",
  lightMode = false,
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Brand Icon SVG / Image Representation */}
      <div className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 130 110"
          className={`${imgClassName} w-auto`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="qardhHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <linearGradient id="qardhPrismGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="50%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#4F46E5" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Bottom Left Hexagon */}
          <polygon
            points="34,54 54,54 64,71 54,88 34,88 24,71"
            fill="url(#qardhHexGrad)"
            filter="url(#subtleGlow)"
          />

          {/* Angled Upper Isometric Lozenge / Prism */}
          <path
            d="M 52 18 C 55 13, 61 13, 65 16 L 102 46 C 106 49, 107 55, 104 59 L 82 90 C 79 94, 73 95, 69 92 L 46 72 C 43 69, 43 64, 45 60 Z"
            fill="url(#qardhPrismGrad)"
            filter="url(#subtleGlow)"
          />
        </svg>
      </div>

      {/* Brand Name Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`text-lg sm:text-xl font-black tracking-tight ${
              lightMode ? "text-white" : "text-slate-900 group-hover:text-[#4F46E5] transition-colors"
            }`}
          >
            Qardh Al Hasan
          </span>
          <span
            className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mt-1 ${
              lightMode ? "text-slate-300" : "text-slate-500"
            }`}
          >
            Fintech Sdn. Bhd.
          </span>
        </div>
      )}
    </div>
  );
}
