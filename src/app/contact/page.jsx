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
          1. FIRST SECTION: HERO IMAGE BANNER (Verified Zero People)
          ========================================================================= */}
      <section className="relative rounded-3xl p-1 bg-gradient-to-tr from-purple-500/40 via-fuchsia-500/30 to-pink-400/20 shadow-2xl overflow-hidden">
        <div className="relative rounded-2xl overflow-hidden min-h-[380px] sm:min-h-[460px] flex items-end bg-[#0c041a] group">
          <img
            src="/images/corporate_boardroom.jpg"
            alt="Qardh Al Hasan Corporate Operations Headquarters in Brickfields, Kuala Lumpur"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090314] via-[#090314]/75 to-[#090314]/25 pointer-events-none" />

          {/* Clean Content Directly on Image */}
          <div className="relative z-10 p-6 sm:p-12 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/30 backdrop-blur-md border border-purple-400/40 text-xs font-bold text-purple-200">
              <MessageSquare size={14} className="text-fuchsia-400" />
              <span>Brickfields, Kuala Lumpur Operations</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">
                Information
              </span>
            </h1>
            <p className="text-base sm:text-lg text-purple-200/90 leading-relaxed font-normal max-w-3xl">
              We are excited to explore strategic collaboration with you. For more information about our products, software solutions, or offshore team engagements, please connect directly with our engineering advisory desk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Info Cards */}
        <div className="lg:col-span-5 space-y-5">
          {/* Direct Phone Card */}
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="flex items-start gap-4 p-6 rounded-3xl purple-card group transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform">
              <Phone size={22} />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-purple-300/80">
                Direct Telephones
              </span>
              <h3 className="text-lg font-black text-white group-hover:text-purple-300 transition-colors mt-0.5">
                {companyInfo.phone}
              </h3>
              <p className="text-sm font-semibold text-purple-300">
                {companyInfo.phoneSecondary}
              </p>
              <p className="text-xs text-purple-400/80 font-medium mt-1">
                Mon - Fri, 9:00 AM - 6:00 PM (GMT+8 Malaysia)
              </p>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${companyInfo.email}`}
            className="flex items-start gap-4 p-6 rounded-3xl purple-card group transition-all"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform">
              <Mail size={22} />
            </div>
            <div className="truncate">
              <span className="text-xs font-black uppercase tracking-wider text-purple-300/80">
                Official Inquiries
              </span>
              <h3 className="text-base sm:text-lg font-black text-white group-hover:text-fuchsia-300 transition-colors mt-0.5 truncate">
                {companyInfo.email}
              </h3>
              <p className="text-xs text-purple-400/80 font-medium mt-1">
                Typical reply turnaround within 24 hours
              </p>
            </div>
          </a>

          {/* Office Location Card */}
          <div className="flex items-start gap-4 p-6 rounded-3xl purple-card">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center justify-center flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-purple-300/80">
                Corporate Headquarters
              </span>
              <h3 className="text-sm sm:text-base font-black text-white mt-0.5 leading-snug">
                {companyInfo.address}
              </h3>
              <p className="text-xs text-purple-400 font-mono mt-1">
                {companyInfo.name}
              </p>
            </div>
          </div>

          {/* WhatsApp Direct Action */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-950/70 via-fuchsia-950/50 to-[#0e0422] border border-purple-400/30 space-y-3 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2 text-fuchsia-300 font-black text-xs uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Instant Messenger Desk</span>
            </div>
            <h4 className="text-lg font-black text-white">
              Prefer to Chat on WhatsApp?
            </h4>
            <p className="text-xs text-purple-200/80 leading-relaxed font-normal">
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
      <section className="purple-card p-8 sm:p-12 space-y-8 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-wider text-fuchsia-400">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-purple-950/40 border border-purple-500/20 space-y-2 hover:border-purple-400/40 transition-colors"
            >
              <h3 className="text-base font-black text-white">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-normal">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
