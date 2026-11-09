import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function FooterFlairs() {
  return (
    <footer className="bg-[#0B0F19] text-slate-300 border-t border-slate-800">
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Corporate Overview & Contact (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <BrandLogo imgClassName="h-10 sm:h-11" lightMode={true} />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Qardh Al Hasan Fintech Sdn. Bhd. is a technology-driven digital solutions company in Kuala Lumpur, Malaysia. We deliver scalable software, Shariah-compliant fintech ledgers, and results-focused digital growth platforms.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin size={15} className="text-[#A855F7] shrink-0 mt-0.5" />
                <span>
                  No. 122, Jalan Thamby Abdullah, Brickfields, 50470 Kuala Lumpur, Malaysia
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Phone size={15} className="text-blue-400 shrink-0" />
                <a
                  href="tel:+60178947597"
                  className="hover:text-white transition-colors"
                >
                  +60 17 894 7597 / +60 017 847 3033
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail size={15} className="text-blue-400 shrink-0" />
                <a
                  href="mailto:qardhalhasanfintech@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  qardhalhasanfintech@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-emerald-400 font-medium">
                <ShieldCheck size={13} />
                SSM Registered (Sdn. Bhd.)
              </span>
            </div>
          </div>

          {/* Col 2: Services Directory (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/services/fintech"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  FinTech & Shariah Core Banking
                </Link>
              </li>
              <li>
                <Link
                  href="/services/software-development"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Enterprise Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/graphics-design"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  UI/UX & Graphic Design Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Digital Marketing & Paid Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo-services"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Technical SEO & Search Authority
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/industries/banking-and-finance"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Islamic Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/enterprise-software"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Enterprise SaaS
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/ecommerce-and-retail"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Digital Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/transportation-and-logistics"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Logistics & ERP
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/healthcare"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Healthcare Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Engagement (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Company & Delivery
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Company Overview & Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/why-us"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  The Qardh Al Hasan Edge
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Case Studies & Metrics
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Engineering Leadership & Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Schedule Consultation
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_20px_rgba(117,61,237,0.3)] transition-all hover:scale-105 active:scale-95"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="border-t border-slate-800/80 bg-black/40 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Qardh Al Hasan Fintech Sdn. Bhd. All rights reserved. Registered in Malaysia.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-emerald-400 font-medium">100% Shariah Compliant Architecture</span>
            <span>&bull;</span>
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Terms & Compliance
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
