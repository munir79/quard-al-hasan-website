import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, Sparkles } from "lucide-react";

export default function ConversionCtaFlairs() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0B0F19] text-white overflow-hidden border-t border-b border-white/10">
      {/* Tech Dot Grid Matrix matching user reference */}
      <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[340px] bg-gradient-to-r from-purple-600/15 via-indigo-600/20 to-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
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
            className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_25px_rgba(117,61,237,0.35)] hover:shadow-[0_6px_35px_rgba(46,95,235,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Schedule a Consultation</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
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

