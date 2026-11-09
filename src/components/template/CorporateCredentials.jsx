import Link from "next/link";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { companyInfo, leadershipData } from "@/data/companyData";

export default function CorporateCredentials() {
  const ceo = leadershipData[0]; // Md Mominul Islam

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-slate-900 via-[#0B0F19] to-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
        
        {/* Ambient brand glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left: Leadership & Brickfields HQ Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold text-primary-light">
              <Building2 size={13} />
              <span>Brickfields &bull; Kuala Lumpur Headquarters</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Executive Governance &{" "}
              <span className="text-logo-gradient">Proven Delivery.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Registered under Malaysian corporate law as a private limited entity (Sdn. Bhd.), Qardh Al Hasan Fintech is steered by experienced technology leadership dedicated to client success, ethical compliance, and high-standard software deliverables.
            </p>

            {/* CEO Profile Card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-logo-gradient text-white flex items-center justify-center font-black text-xl shrink-0 shadow-logo-glow">
                MI
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-white">{ceo.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/20 text-primary-light border border-primary/30 font-bold uppercase">
                    {ceo.role}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ceo.bio}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-logo-gradient hover:opacity-95 shadow-logo-glow transition-all"
              >
                <span>View Full Management & Team</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>About Our History</span>
              </Link>
            </div>
          </div>

          {/* Right: Contact & Location Quick Connect Desk (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-7 space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-mono">
              Direct Corporate Desk
            </h3>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <MapPin size={16} className="text-primary-light shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-[11px] uppercase tracking-wide">Registered Address</div>
                  <div className="mt-0.5">{companyInfo.address}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <Phone size={15} className="text-primary-light shrink-0" />
                <div>
                  <div className="font-bold text-white text-[11px] uppercase tracking-wide">Phone Hotline</div>
                  <a href={`tel:${companyInfo.phoneRaw}`} className="hover:text-primary-light transition-colors font-mono">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                <Mail size={15} className="text-primary-light shrink-0" />
                <div className="truncate">
                  <div className="font-bold text-white text-[11px] uppercase tracking-wide">Direct Email</div>
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-primary-light transition-colors font-mono truncate">
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors"
              >
                <span>Schedule a Meeting in Brickfields HQ</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
