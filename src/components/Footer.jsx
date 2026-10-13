"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, HeartHandshake, Sparkles, Globe } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { companyInfo, navLinks, servicesData } from "@/data/companyData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-16 text-slate-600 overflow-hidden">
      {/* Subtle ambient tech glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4D47D7]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo />
            <p className="text-sm text-slate-600 leading-relaxed pr-0 lg:pr-6 font-normal">
              Empowering individuals, SMEs, and corporate enterprises across Malaysia and globally through scalable fintech, custom software, modern web platforms, and ethical digital solutions.
            </p>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-xs">
              <span className="text-[#4D47D7] font-bold">Tagline:</span> &ldquo;{companyInfo.tagline}&rdquo;
            </div>

            {/* Value badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#4D47D7]/10 text-[#4D47D7] border border-[#4D47D7]/20">
                <ShieldCheck size={13} />
                <span>Ethical Integrity</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                <Sparkles size={13} />
                <span>Innovative Delivery</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <HeartHandshake size={13} />
                <span>Social Impact</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-[#4D47D7] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {servicesData.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href="/services"
                    className="text-slate-600 hover:text-[#4D47D7] hover:translate-x-1 inline-block transition-all duration-200 truncate max-w-full"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs font-bold text-[#4D47D7] hover:text-[#3d37c9] inline-flex items-center gap-1"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact HQ matching Brochure */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Malaysia HQ Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="flex items-start gap-3 text-slate-600 hover:text-[#4D47D7] transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#4D47D7]/10 text-[#4D47D7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4D47D7] group-hover:text-white transition-all border border-[#4D47D7]/20">
                  <Phone size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400">Direct Lines</div>
                  <div className="font-bold text-slate-900">{companyInfo.phone}</div>
                  <div className="text-xs text-slate-500">{companyInfo.phoneSecondary}</div>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start gap-3 text-slate-600 hover:text-[#4D47D7] transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-[#4D47D7]/10 text-[#4D47D7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#4D47D7] group-hover:text-white transition-all border border-[#4D47D7]/20">
                  <Mail size={14} />
                </div>
                <div className="truncate">
                  <div className="text-[11px] font-bold text-slate-400">Email Inquiries</div>
                  <div className="font-bold text-slate-900 truncate text-xs sm:text-sm">
                    {companyInfo.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-600">
                <div className="w-8 h-8 rounded-xl bg-slate-200/80 text-slate-700 flex items-center justify-center flex-shrink-0 border border-slate-300">
                  <MapPin size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400">Office Base</div>
                  <div className="text-slate-800 font-medium text-xs leading-relaxed">{companyInfo.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-600">
                <div className="w-8 h-8 rounded-xl bg-[#4D47D7]/10 text-[#4D47D7] flex items-center justify-center flex-shrink-0 border border-[#4D47D7]/20">
                  <Globe size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400">Official Portal</div>
                  <div className="text-slate-900 font-mono text-xs">{companyInfo.website}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 pb-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p className="text-center sm:text-left text-slate-500">
            &copy; {new Date().getFullYear()} <span className="text-slate-900 font-bold">{companyInfo.name}</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">
              Brickfields, Kuala Lumpur, Malaysia
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 transition-colors border border-slate-200 shadow-xs font-semibold"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} className="text-[#4D47D7]" />
            </button>
          </div>
        </div>
      </div>

      {/* Signature High-Tech Indigo / Violet Gradient Bottom Bar */}
      <div className="w-full h-1.5 bg-gradient-to-r from-[#4D47D7] via-[#6366f1] to-[#38bdf8]" />
    </footer>
  );
}
