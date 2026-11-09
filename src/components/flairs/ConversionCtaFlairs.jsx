import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, Sparkles } from "lucide-react";

export default function ConversionCtaFlairs() {
  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-r from-[#1E1B4B] via-[#0F172A] to-[#1E1B4B] text-white overflow-hidden border-b border-slate-800">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold text-indigo-300">
          <Sparkles size={13} />
          <span>Start Your Digital Evolution Today</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to Modernise Your Business with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">
            One Accountable Partner?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Schedule a 30-minute discovery consultation with our senior architects in Brickfields, Kuala Lumpur. Let&apos;s map out your technology roadmap and discuss scope, timelines, and costs.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#4F46E5] to-[#2563EB] hover:from-[#6D28D9] hover:via-[#4338CA] hover:to-[#1D4ED8] shadow-xl shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <a
            href="https://wa.me/60178947597"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm sm:text-base font-bold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 transition-colors"
          >
            <MessageSquare size={16} className="text-emerald-400" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>

        {/* Fast Response Guarantee */}
        <div className="pt-4 text-xs font-mono text-slate-400 flex items-center justify-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
          <span>Average response time: Within 15 minutes during Malaysian business hours</span>
        </div>

      </div>
    </section>
  );
}

