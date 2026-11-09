import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles, MessageSquare } from "lucide-react";
import { companyInfo } from "@/data/companyData";

export default function ConversionCta() {
  const whatsappUrl = `https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent(
    "Hi Qardh Al Hasan Fintech team, I would like to inquire about starting a software / fintech project."
  )}`;

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-logo-gradient p-8 sm:p-12 lg:p-16 text-white shadow-logo-glow-lg">
        
        {/* Subtle decorative mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-orchid/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white">
            <Sparkles size={13} />
            <span>Start Building Today</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ready to Build Software Your Business Truly Owns?
          </h2>

          <p className="text-sm sm:text-base text-white/90 max-w-xl leading-relaxed font-normal">
            Book an initial technical consultation with our engineering team in Kuala Lumpur. We&apos;ll review your architecture requirements, estimate realistic delivery timelines, and issue an ethical milestone quote.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Request an Official Quote</span>
              <ArrowRight size={15} />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-sm transition-all"
            >
              <MessageSquare size={16} />
              <span>Quick Chat via WhatsApp</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-white/80 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-300" />
              Mutual NDA Guarantee
            </span>
            <span>&bull;</span>
            <span>Zero Obligation Technical Scoping</span>
            <span>&bull;</span>
            <span>SSM Registered in Malaysia</span>
          </div>
        </div>

      </div>
    </section>
  );
}
