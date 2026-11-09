"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Cpu,
  Globe,
  Palette,
  TrendingUp,
  Search,
  Sparkles,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const servicesDropdown = [
  {
    title: "FinTech & Shariah Core",
    desc: "Automated loan ledgers, zero-riba microfinance engines, and payment gateways.",
    href: "/services/fintech",
    icon: ShieldCheck,
  },
  {
    title: "Custom Software Development",
    desc: "Enterprise ERPs, high-throughput microservices, and secure APIs.",
    href: "/services/software-development",
    icon: Cpu,
  },
  {
    title: "Enterprise Web Development",
    desc: "High-speed Next.js applications, modern portals, and cloud solutions.",
    href: "/services/web-development",
    icon: Globe,
  },
  {
    title: "UI/UX & Graphics Design",
    desc: "Design systems, conversion-driven UX, and full corporate brand identity.",
    href: "/services/graphics-design",
    icon: Palette,
  },
  {
    title: "Digital Marketing & Performance",
    desc: "Targeted Google & Meta ad funnels, ROI-driven growth campaigns.",
    href: "/services/digital-marketing",
    icon: TrendingUp,
  },
  {
    title: "SEO Services & Search Authority",
    desc: "Algorithmic optimization, keyword dominance, and organic traffic growth.",
    href: "/services/seo-services",
    icon: Search,
  },
];

const industriesDropdown = [
  {
    name: "Banking & Islamic Finance",
    desc: "Zero-riba ledgers, Shariah compliance, e-KYC",
    href: "/industries/banking-and-finance",
  },
  {
    name: "Enterprise Software & SaaS",
    desc: "Scalable multi-tenant architectures & cloud APIs",
    href: "/industries/enterprise-software",
  },
  {
    name: "E-Commerce & Digital Retail",
    desc: "High-conversion storefronts & payment checkouts",
    href: "/industries/ecommerce-and-retail",
  },
  {
    name: "Logistics & Supply Chain",
    desc: "Real-time dispatch, fleet tracking & warehouse ERP",
    href: "/industries/transportation-and-logistics",
  },
  {
    name: "Healthcare & MedTech",
    desc: "Secure patient portals & compliant clinical workflows",
    href: "/industries/healthcare",
  },
];

const aboutDropdown = [
  {
    name: "Company Overview",
    desc: "Our mission, vision, and Brickfields KL heritage",
    href: "/about",
  },
  {
    name: "Why Choose Us",
    desc: "4 pillars of technical rigor & ethical engineering",
    href: "/why-us",
  },
  {
    name: "Case Studies & Impact",
    desc: "Quantified enterprise outcomes & real-world proof",
    href: "/case-studies",
  },
  {
    name: "Leadership & Team",
    desc: "Experienced technology architects & developers",
    href: "/team",
  },
];

export default function NavbarFlairs() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* 
        FlairsTech Signature Floating Pill Navbar (Screenshots 1 & 2):
        - Centered floating pill with rounded-full shape and glassmorphic blur
        - Seamlessly floats above Hero without obscuring the background video/orbs
        - Elevates smoothly with subtle shadow when scrolling
      */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
        <div className="max-w-6xl mx-auto pointer-events-auto">
          <div
            className={`w-full rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
              scrolled
                ? "bg-white/95 backdrop-blur-md border-slate-200/90 shadow-2xl"
                : "bg-white/90 backdrop-blur-md border-white/60 shadow-lg"
            }`}
          >
            {/* 1. Brand Logo */}
            <Link href="/" className="group flex items-center shrink-0">
              <BrandLogo imgClassName="h-8 sm:h-9" />
            </Link>

            {/* 2. Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Home */}
              <Link
                href="/"
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors ${
                  pathname === "/"
                    ? "text-[#2563EB] bg-blue-50/80"
                    : "text-slate-700 hover:text-[#2563EB] hover:bg-slate-50"
                }`}
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors ${
                    pathname.startsWith("/about") ||
                    pathname.startsWith("/why-us") ||
                    activeDropdown === "about"
                      ? "text-[#2563EB] bg-blue-50/80"
                      : "text-slate-700 hover:text-[#2563EB] hover:bg-slate-50"
                  }`}
                >
                  <span>About</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "about" ? "rotate-180 text-[#2563EB]" : "text-slate-400"
                    }`}
                  />
                </button>

                {activeDropdown === "about" && (
                  <div className="absolute top-full left-0 mt-2 w-[340px] p-3 bg-white rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col gap-1.5 animate-fade-in z-50">
                    {aboutDropdown.map((ab, idx) => (
                      <Link
                        key={idx}
                        href={ab.href}
                        className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                          {ab.name}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {ab.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors ${
                    pathname.startsWith("/services") || activeDropdown === "services"
                      ? "text-[#2563EB] bg-blue-50/80"
                      : "text-slate-700 hover:text-[#2563EB] hover:bg-slate-50"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180 text-[#2563EB]" : "text-slate-400"
                    }`}
                  />
                </button>

                {activeDropdown === "services" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] p-4 bg-white rounded-2xl shadow-2xl border border-slate-200/90 grid grid-cols-2 gap-2 animate-fade-in z-50">
                    {servicesDropdown.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all shrink-0">
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                    <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between text-xs px-2">
                      <span className="text-slate-500 font-medium">Looking for full enterprise solutions?</span>
                      <Link
                        href="/services"
                        className="font-bold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1"
                      >
                        <span>Explore All Services</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors ${
                    pathname.startsWith("/industries") || activeDropdown === "industries"
                      ? "text-[#2563EB] bg-blue-50/80"
                      : "text-slate-700 hover:text-[#2563EB] hover:bg-slate-50"
                  }`}
                >
                  <span>Industries</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === "industries" ? "rotate-180 text-[#2563EB]" : "text-slate-400"
                    }`}
                  />
                </button>

                {activeDropdown === "industries" && (
                  <div className="absolute top-full left-0 mt-2 w-[360px] p-3 bg-white rounded-2xl shadow-2xl border border-slate-200/90 flex flex-col gap-1.5 animate-fade-in z-50">
                    {industriesDropdown.map((ind, idx) => (
                      <Link
                        key={idx}
                        href={ind.href}
                        className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="text-xs font-bold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                          {ind.name}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {ind.desc}
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs px-2">
                      <Link
                        href="/industries"
                        className="font-bold text-[#2563EB] hover:text-[#1D4ED8] inline-flex items-center gap-1"
                      >
                        <span>All Industries Overview</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Case Studies */}
              <Link
                href="/case-studies"
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors ${
                  pathname === "/case-studies" || pathname === "/clients"
                    ? "text-[#2563EB] bg-blue-50/80"
                    : "text-slate-700 hover:text-[#2563EB] hover:bg-slate-50"
                }`}
              >
                Case Studies
              </Link>

              {/* Team */}
              <Link
                href="/team"
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors ${
                  pathname === "/team"
                    ? "text-[#2563EB] bg-blue-50/80"
                    : "text-slate-700 hover:text-[#2563EB] hover:bg-slate-50"
                }`}
              >
                Team
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-colors ${
                  pathname === "/contact"
                    ? "text-[#2563EB] bg-blue-50/80"
                    : "text-slate-700 hover:text-[#2563EB] hover:bg-slate-50"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* 3. Right Action Pill Button (FlairsTech Style) */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_20px_rgba(117,61,237,0.3)] hover:shadow-[0_6px_25px_rgba(46,95,235,0.45)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Schedule<span className="hidden sm:inline"> a Call</span></span>
                <ArrowRight size={14} className="hidden sm:inline" />
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 
        4. Mobile Drawer Menu (Opens smoothly from LEFT to RIGHT as requested):
        - Backdrop overlay with blur
        - Left-to-right animated slide drawer
        - Full responsiveness on all screen sizes
      */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Left-to-Right Sliding Panel */}
          <div className="relative w-[85%] max-w-[360px] h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto p-6 z-10 animate-in slide-in-from-left duration-300">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <BrandLogo imgClassName="h-8" />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="py-6 space-y-4">
                <Link
                  href="/"
                  className="block text-base font-bold text-slate-900 hover:text-[#2563EB]"
                >
                  Home
                </Link>

                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Company
                  </div>
                  <div className="space-y-2 pl-2">
                    <Link href="/about" className="block text-sm font-semibold text-slate-700 hover:text-[#2563EB]">
                      About Us
                    </Link>
                    <Link href="/why-us" className="block text-sm font-semibold text-slate-700 hover:text-[#2563EB]">
                      Why Choose Us
                    </Link>
                    <Link href="/case-studies" className="block text-sm font-semibold text-slate-700 hover:text-[#2563EB]">
                      Case Studies & Impact
                    </Link>
                    <Link href="/team" className="block text-sm font-semibold text-slate-700 hover:text-[#2563EB]">
                      Leadership & Team
                    </Link>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Services
                  </div>
                  <div className="space-y-2 pl-2">
                    {servicesDropdown.map((s, idx) => (
                      <Link
                        key={idx}
                        href={s.href}
                        className="block text-sm font-semibold text-slate-700 hover:text-[#2563EB]"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Industries
                  </div>
                  <div className="space-y-2 pl-2">
                    {industriesDropdown.map((ind, idx) => (
                      <Link
                        key={idx}
                        href={ind.href}
                        className="block text-sm font-semibold text-slate-700 hover:text-[#2563EB]"
                      >
                        {ind.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="block text-base font-bold text-slate-900 hover:text-[#2563EB]"
                  >
                    Contact & Office
                  </Link>
                </div>
              </div>
            </div>

            {/* Drawer Bottom Action & Contact */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_20px_rgba(117,61,237,0.3)] uppercase tracking-wider"
              >
                <span>Schedule a Call</span>
                <ArrowRight size={14} />
              </Link>
              <div className="text-center text-[11px] text-slate-500 space-y-1">
                <div>Brickfields, Kuala Lumpur, Malaysia</div>
                <div className="font-semibold text-slate-700">+60 17 894 7597</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
