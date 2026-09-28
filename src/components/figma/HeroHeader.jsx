import Link from "next/link";
import { ArrowRight, Terminal, MousePointer2 } from "lucide-react";

export default function HeroHeader() {
  return (
    <section className="relative pt-8 sm:pt-14 pb-14 sm:pb-20 overflow-hidden">
      {/* Subtle top ambient radial lighting exactly matching Figma */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-slate-800/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Bold Minimal Headline & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121722] border border-white/10 text-xs font-semibold text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
              <span className="text-slate-400 font-mono">v2.4 &bull;</span>
              <span>Monochromatic IT Architecture</span>
            </div>

            {/* Figma Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Architecting Enterprise{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-300">
                Fintech & Digital Systems
              </span>
            </h1>

            {/* Subtext (Concise 2 lines like Figma) */}
            <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl leading-relaxed">
              Mission-critical custom software engineering, scalable web platforms, and ethical Islamic microfinance technology engineered in Malaysia for global scale.
            </p>

            {/* Figma Button Pair */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="btn-figma-primary inline-flex items-center gap-2 text-sm"
              >
                <span>Get in Touch</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/services"
                className="btn-figma-secondary inline-flex items-center gap-2 text-sm"
              >
                <span>View Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Exact Floating Code Snippet Card from Figma */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg">
              {/* Floating Code Editor Window */}
              <div className="code-window rounded-2xl p-5 sm:p-6 text-left transition-all duration-300 hover:border-cyan-400/30">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#333a48]" />
                    <span className="w-3 h-3 rounded-full bg-[#333a48]" />
                    <span className="w-3 h-3 rounded-full bg-[#333a48]" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    system-telemetry.ts
                  </span>
                </div>

                {/* Code Content */}
                <pre className="font-mono text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto">
                  <code>
                    <span className="text-cyan-400 font-bold">function</span>{" "}
                    <span className="text-indigo-300 font-bold">getClientDetails</span>
                    <span className="text-slate-400">()</span> {"{"}
                    {"\n"}  <span className="text-cyan-400">return</span> {"{"}
                    {"\n"}    <span className="text-slate-400">status:</span> <span className="text-emerald-400">200</span>,
                    {"\n"}    <span className="text-slate-400">uptime:</span> <span className="text-cyan-300">"99.99%"</span>,
                    {"\n"}    <span className="text-slate-400">activeNodes:</span> <span className="text-emerald-400">48</span>,
                    {"\n"}    <span className="text-slate-400">encryption:</span> <span className="text-cyan-300">"AES-256"</span>,
                    {"\n"}    <span className="text-slate-400">shariahCompliance:</span> <span className="text-indigo-400">true</span>
                    {"\n"}  {"}"};
                    {"\n"}{"}"}
                  </code>
                </pre>
              </div>

              {/* Floating Glowing Cyan Pointer Cursor from Figma */}
              <div className="absolute -bottom-4 right-8 flex items-center gap-2 bg-[#121722]/90 border border-cyan-400/40 rounded-full px-3 py-1 shadow-[0_0_20px_rgba(0,240,255,0.4)] animate-bounce">
                <MousePointer2 size={14} className="text-cyan-400 fill-cyan-400" />
                <span className="text-[10px] font-mono font-bold text-cyan-300">
                  Live Terminal Node
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
