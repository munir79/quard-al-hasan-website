import RouteHeroBanner from "@/components/flairs/RouteHeroBanner";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { companyInfo } from "@/data/companyData";

export const metadata = {
  title: "Contact Us & Schedule a Call | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Schedule a consultation with Qardh Al Hasan Fintech in Brickfields, Kuala Lumpur, Malaysia. Phone: +60 17 894 7597 / +60 017 847 3033, Email: qardhalhasanfintech@gmail.com.",
};

const contactFaqs = [
  {
    q: "How fast can our project begin after our initial call?",
    a: "Following our initial discovery and architecture roadmap session, most projects start sprint execution within 3 to 5 business days.",
  },
  {
    q: "Can we sign a Non-Disclosure Agreement (NDA) before sharing details?",
    a: "Absolutely. We are pleased to execute a standard mutual NDA prior to discussing your proprietary product specifications.",
  },
  {
    q: "How does Qardh Al Hasan structure payment milestones?",
    a: "We use transparent milestone schedules tied directly to deliverable verification (e.g. 30% upfront kickoff, 40% demo staging release, 30% final sign-off & code handover).",
  },
  {
    q: "Do you offer in-person consultations in Kuala Lumpur?",
    a: "Yes. Our team can host you at our Brickfields office or arrange an on-site strategy session at your Malaysian corporate office.",
  },
];

// Shared dark-glass styling
const glassCard =
  "relative overflow-hidden rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/[0.12] shadow-[0_8px_30px_rgba(2,6,23,0.35),inset_0_1px_0_rgba(255,255,255,0.10)] transition-[background-color,border-color] duration-300 hover:bg-white/[0.08] hover:border-blue-400/30";

const sectionGrid = {
  backgroundImage:
    "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
  backgroundSize: "64px 64px",
  maskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 25%, transparent 100%)",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#0A0F1C] text-white">
      {/* 1. Hero Banner */}
      <RouteHeroBanner
        badge="Direct Enterprise Engagement"
        badgeIcon={MessageSquare}
        title="Let's Build Something"
        titleHighlight="Exceptional Together."
        description="Whether you need to architect a Shariah fintech platform, modernise enterprise software, or build high-speed web apps, schedule a strategy consultation with our technical architects."
        breadcrumbs={[{ label: "Contact Us" }]}
        image="/images/kl_office_headquarters.jpg"
      >
        <div className="flex flex-wrap items-center gap-3 pt-3 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 font-semibold">
            <Clock size={14} className="text-[#38BDF8]" />
            Fast Response &bull; Under 2 Hours
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 font-semibold">
            <MapPin size={14} className="text-emerald-400" />
            Brickfields, Kuala Lumpur Office
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-slate-200 font-semibold">
            <ShieldCheck size={14} className="text-[#60A5FA]" />
            Mutual NDA Prior to Kickoff
          </span>
        </div>
      </RouteHeroBanner>

      {/* 2. Contact details (slides from the left) + form (slides from the right) */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.3] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-32 right-0 h-[460px] w-[640px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[520px] rounded-full bg-sky-500/10 blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <RevealGroup className="lg:col-span-5 space-y-8">
              <RevealItem from="left" className="space-y-3">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                  Kuala Lumpur Headquarters
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Direct Channels & Location
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  Reach our team directly by phone, email, WhatsApp, or schedule an in-person meeting at our Brickfields office.
                </p>
              </RevealItem>

              <div className="space-y-4">
                {/* Address */}
                <RevealItem from="left">
                  <div className={`${glassCard} p-5 flex items-start gap-4`}>
                    <div className="p-3 rounded-xl bg-blue-400/10 border border-blue-300/20 text-blue-300 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                        HQ Address
                      </div>
                      <div className="text-sm font-bold text-white">{companyInfo.address}</div>
                      <div className="text-xs text-slate-400">
                        Brickfields &bull; Kuala Lumpur, Malaysia
                      </div>
                    </div>
                  </div>
                </RevealItem>

                {/* Phone */}
                <RevealItem from="left">
                  <div className={`${glassCard} p-5 flex items-start gap-4`}>
                    <div className="p-3 rounded-xl bg-sky-400/10 border border-sky-300/20 text-sky-300 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                        Direct Phone Lines
                      </div>
                      <div className="text-sm font-bold text-white">
                        <a href="tel:+60178947597" className="hover:text-blue-300 transition-colors">
                          {companyInfo.phone}
                        </a>
                      </div>
                      <div className="text-xs text-slate-400">
                        Secondary:{" "}
                        <a href="tel:+600178473033" className="hover:text-blue-300 transition-colors">
                          {companyInfo.phoneSecondary}
                        </a>
                      </div>
                    </div>
                  </div>
                </RevealItem>

                {/* Email */}
                <RevealItem from="left">
                  <div className={`${glassCard} p-5 flex items-start gap-4`}>
                    <div className="p-3 rounded-xl bg-indigo-400/10 border border-indigo-300/20 text-indigo-300 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                        Corporate Email
                      </div>
                      <div className="text-sm font-bold text-white break-all">
                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="hover:text-blue-300 transition-colors"
                        >
                          {companyInfo.email}
                        </a>
                      </div>
                      <div className="text-xs text-slate-400">
                        Inquiries answered within 15 minutes
                      </div>
                    </div>
                  </div>
                </RevealItem>

                {/* WhatsApp */}
                <RevealItem from="left">
                  <div className="relative overflow-hidden rounded-2xl p-5 flex items-center justify-between gap-3 bg-emerald-400/[0.08] backdrop-blur-xl border border-emerald-300/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500 text-white">
                        <MessageSquare size={18} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-emerald-100">WhatsApp Quick Lane</div>
                        <div className="text-[11px] text-emerald-200/70">
                          Direct chat with our tech advisors
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://wa.me/60178947597"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shrink-0"
                    >
                      Chat Now
                    </a>
                  </div>
                </RevealItem>
              </div>

              <RevealItem from="left" className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                <Clock size={14} className="text-slate-500" />
                <span>Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM (MYT / UTC+8)</span>
              </RevealItem>
            </RevealGroup>

            {/* Right Column: form slides in from the right */}
            <Reveal from="right" className="lg:col-span-7">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Pre-Sales FAQ (cards alternate left / right) */}
      <section className="relative py-16 sm:py-24 border-t border-white/10 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.25] pointer-events-none" style={sectionGrid} />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[360px] w-[720px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <RevealGroup className="text-center space-y-3">
            <RevealItem from="left">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                Quick Answers
              </span>
            </RevealItem>
            <RevealItem from="right">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Pre-Engagement Questions
              </h2>
            </RevealItem>
          </RevealGroup>

          <div className="space-y-4">
            {contactFaqs.map((faq, idx) => (
              <Reveal key={idx} from={idx % 2 === 0 ? "left" : "right"}>
                <div className={`${glassCard} p-6 space-y-2`}>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.05] to-transparent" />
                  <h3 className="relative text-base font-bold text-white">{faq.q}</h3>
                  <p className="relative text-sm text-slate-400 leading-relaxed font-normal">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
