import { Phone, Mail, MapPin, Clock, MessageSquare, Sparkles, Globe } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { companyInfo } from "@/data/companyData";

export const metadata = {
  title: "Contact Us | Qardh Al Hasan Fintech Sdn. Bhd.",
  description:
    "Get in touch with Qardh Al Hasan Fintech in Kuala Lumpur, Malaysia. Phone: +60 17 894 7597 / +60 017 847 3033, Email: qardhalhasanfintech@gmail.com.",
};

const faqs = [
  {
    q: "How does Qardh Al Hasan Fintech structure project engagements?",
    a: "We offer flexible models tailored to client needs: fixed-price milestone delivery for well-defined MVPs and platforms, or dedicated offshore agile squads on monthly retainer for continuous software development and support.",
  },
  {
    q: "Are your developers certified and experienced?",
    a: "Yes. Our team brings over a decade of collective experience across modern web (React, Next.js, Node.js), custom software engineering, and fintech systems.",
  },
  {
    q: "Can you assist international clients with offshore teams?",
    a: "Absolutely. We currently manage offshore development squads for international businesses, providing transparent reporting, time-zone overlap, and English-speaking project managers.",
  },
  {
    q: "How fast can we begin our project after signing?",
    a: "Most projects initiate within 3 to 5 business days following technical discovery and requirement sign-off.",
  },
];

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-16 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* =========================================================================
          1. HERO SECTION: Full Clear Panoramic Boardroom Image with Frosted Glass Overlay
          ========================================================================= */}
      <section className="relative rounded-3xl overflow-hidden min-h-[480px] sm:min-h-[520px] flex items-center p-6 sm:p-12 lg:p-14 border border-slate-200/90 shadow-2xl group">
        {/* Full-Bleed Clear Background Image */}
        <img
          src="/images/corporate_boardroom.jpg"
          alt="Qardh Al Hasan Corporate Operations Headquarters in Brickfields, Kuala Lumpur"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000"
        />

        {/* Silky Frosted Gradient: leaves the image full and crystal-clear on the right, providing high-contrast readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/20 sm:to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4D47D7]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content on Aesthetic Frosted Glass Card Area */}
        <div className="relative z-10 max-w-2xl space-y-5 bg-white/90 sm:bg-white/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/80 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4D47D7]/10 border border-[#4D47D7]/20 text-xs font-bold text-[#4D47D7]">
            <MessageSquare size={14} className="text-[#4D47D7]" />
            <span>Brickfields, Kuala Lumpur Operations</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4D47D7] to-[#706bf5]">
              Information
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            We are excited to explore strategic collaboration with you. For more information about our products, software solutions, or offshore team engagements, please connect directly with our engineering advisory desk.
          </p>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <Clock size={14} className="text-[#4D47D7]" />
              24h Response SLA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <MapPin size={14} className="text-[#4D47D7]" />
              Kuala Lumpur HQ
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 border border-slate-200 text-xs font-bold text-slate-800 shadow-xs">
              <Globe size={14} className="text-[#4D47D7]" />
              Global Clients Welcome
            </span>
          </div>
        </div>

        {/* Floating Live Badge on the bottom-right corner of the clear photo */}
        <div className="hidden md:flex absolute bottom-6 right-6 z-10 items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/80 shadow-lg text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-slate-800 font-bold">Kuala Lumpur Headquarters</span>
          <span className="text-[#4D47D7] font-semibold">&bull; Brickfields</span>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-5">
          {/* Direct Phone Card */}
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="flex items-start gap-4 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#4D47D7]/40 group transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#4D47D7]/10 text-[#4D47D7] border border-[#4D47D7]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4D47D7] group-hover:text-white transition-all shadow-sm">
              <Phone size={22} />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                Direct Telephones
              </span>
              <h3 className="text-lg font-black text-slate-900 group-hover:text-[#4D47D7] transition-colors mt-0.5">
                {companyInfo.phone}
              </h3>
              <p className="text-sm font-semibold text-slate-700">
                {companyInfo.phoneSecondary}
              </p>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Mon - Fri, 9:00 AM - 6:00 PM (GMT+8 Malaysia)
              </p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${companyInfo.email}`}
            className="flex items-start gap-4 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#4D47D7]/40 group transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#4D47D7]/10 text-[#4D47D7] border border-[#4D47D7]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4D47D7] group-hover:text-white transition-all shadow-sm">
              <Mail size={22} />
            </div>
            <div className="truncate">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                Official Inquiries
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#4D47D7] transition-colors mt-0.5 truncate">
                {companyInfo.email}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Typical reply turnaround within 24 hours
              </p>
            </div>
          </a>

          {/* Office Location Card */}
          <div className="flex items-start gap-4 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#4D47D7] border border-slate-200 flex items-center justify-center flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                Corporate Headquarters
              </span>
              <h3 className="text-sm sm:text-base font-black text-slate-900 mt-0.5 leading-snug">
                {companyInfo.address}
              </h3>
              <p className="text-xs text-[#4D47D7] font-mono mt-1 font-bold">
                {companyInfo.name}
              </p>
            </div>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/60 border border-slate-200 space-y-3 shadow-md">
            <div className="flex items-center gap-2 text-[#4D47D7] font-black text-xs uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Instant Messenger Desk</span>
            </div>
            <h4 className="text-lg font-black text-slate-900">
              Prefer to Chat on WhatsApp?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Connect directly with our solutions representative on WhatsApp for quick technical scoping and inquiries.
            </p>
            <a
              href="https://wa.me/60178947597?text=Hi%20Qardh%20Al%20Hasan%20Fintech%2C%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-purple-primary inline-flex items-center gap-2 text-xs font-black"
            >
              <MessageSquare size={14} />
              <span>Launch WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Consultation Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-[#4D47D7]">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#4D47D7]/40 transition-colors"
            >
              <h3 className="text-base font-black text-slate-900">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
