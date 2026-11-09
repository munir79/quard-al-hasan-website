"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMobileSub = (section) => {
    setMobileExpanded((prev) => (prev === section ? null : section));
  };

  return (
    <>
      {/* Fixed Header Wrapper (100% Mobile Responsive + Zero Layout Shift) */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300">
        <div
          className={`w-full flex justify-center transition-all duration-300 ease-out ${
            scrolled ? "p-0" : "pt-2.5 sm:pt-4 md:pt-5 px-2.5 sm:px-6"
          }`}
        >
          {/* Inner Pill / Full Bar Container */}
          <div
            className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ease-out ${
              scrolled
                ? "w-full max-w-full rounded-none bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-2.5 sm:py-3 px-3.5 sm:px-8 lg:px-12"
                : "w-full max-w-5xl rounded-full bg-white shadow-2xl border border-slate-200/90 py-2 sm:py-2.5 px-3 sm:px-5 md:px-6"
            }`}
          >
            {/* Left: Brand Logo */}
            <Link href="/" className="flex items-center shrink-0 min-w-0" aria-label="Qardh Al Hasan Fintech Home">
              <BrandLogo imgClassName="h-6 sm:h-7 md:h-8" showText={true} />
            </Link>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-bold text-slate-700">
              
              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 hover:text-[#2563EB] transition-colors py-1 focus:outline-none"
                >
                  <span>About</span>
                  <ChevronDown
                    size={13}
                    className={`text-slate-400 transition-transform ${
                      activeDropdown === "about" ? "rotate-180 text-[#2563EB]" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "about" && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 space-y-1 animate-fade-in z-50 text-xs">
                    <Link
                      href="/about"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      Overview & Vision
                    </Link>
                    <Link
                      href="/why-us"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      Why Choose Us
                    </Link>
                    <Link
                      href="/team"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      Leadership & Team
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 hover:text-[#2563EB] transition-colors py-1 focus:outline-none"
                >
                  <span>Services</span>
                  <ChevronDown
                    size={13}
                    className={`text-slate-400 transition-transform ${
                      activeDropdown === "services" ? "rotate-180 text-[#2563EB]" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 space-y-1 animate-fade-in z-50 text-xs">
                    <Link
                      href="/services/fintech"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      FinTech & Shariah Core Banking
                    </Link>
                    <Link
                      href="/services/software-development"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      Custom Software Development
                    </Link>
                    <Link
                      href="/services/web-development"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      Enterprise Website Development
                    </Link>
                    <Link
                      href="/services/graphics-design"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      UI/UX & Design Systems
                    </Link>
                    <Link
                      href="/services/digital-marketing"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      Digital Marketing & Paid Ads
                    </Link>
                    <Link
                      href="/services/seo-services"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      Technical SEO & Authority
                    </Link>
                    <div className="pt-1 border-t border-slate-100">
                      <Link
                        href="/services"
                        className="block px-3 py-1.5 text-xs font-bold text-[#2563EB]"
                      >
                        View All Services &rarr;
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
                  className="inline-flex items-center gap-1 hover:text-[#2563EB] transition-colors py-1 focus:outline-none"
                >
                  <span>Industries</span>
                  <ChevronDown
                    size={13}
                    className={`text-slate-400 transition-transform ${
                      activeDropdown === "industries" ? "rotate-180 text-[#2563EB]" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "industries" && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 space-y-1 animate-fade-in z-50 text-xs">
                    <Link
                      href="/industries/banking-and-finance"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      Banking & Islamic Finance
                    </Link>
                    <Link
                      href="/industries/enterprise-software"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      Enterprise Software & SaaS
                    </Link>
                    <Link
                      href="/industries/ecommerce-and-retail"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      E-Commerce & Digital Retail
                    </Link>
                    <Link
                      href="/industries/transportation-and-logistics"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      Logistics & Supply Chain
                    </Link>
                    <Link
                      href="/industries/healthcare"
                      className="block px-3 py-2 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-slate-50 font-medium transition-colors"
                    >
                      Healthcare & MedTech
                    </Link>
                  </div>
                )}
              </div>

              {/* Blog / Case Studies */}
              <Link href="/case-studies" className="hover:text-[#2563EB] transition-colors">
                Blog
              </Link>

              {/* Contact Us */}
              <Link href="/contact" className="hover:text-[#2563EB] transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* Right: CTA Button & Mobile Hamburger */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_18px_rgba(117,61,237,0.3)] transition-all shrink-0 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>Schedule<span className="hidden sm:inline"> a Call</span></span>
                <ArrowRight size={12} className="hidden xs:inline sm:hidden" />
              </Link>

              {/* Mobile Hamburger Trigger */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-slate-700 hover:text-slate-950 hover:bg-slate-100 active:bg-slate-200 transition-colors lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label="Open mobile navigation menu"
                aria-expanded={isOpen}
              >
                <Menu size={21} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer (100% Fully Responsive, Smooth Slide & Safe Areas) */}
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer Panel: Anchored on the Left */}
      <aside
        id="mobile-navigation-drawer"
        aria-label="Mobile Navigation"
        className={`fixed top-0 bottom-0 left-0 w-[88%] max-w-[350px] h-[100dvh] bg-white z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out lg:hidden overscroll-contain ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top Header inside Drawer */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3.5 border-b border-slate-100 shrink-0">
          <Link href="/" onClick={() => setIsOpen(false)} aria-label="Qardh Al Hasan Home">
            <BrandLogo imgClassName="h-7" showText={true} />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 min-h-0 overflow-y-auto px-4 py-3 space-y-1 text-sm font-semibold text-slate-800 overscroll-contain">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${
              pathname === "/"
                ? "bg-indigo-50/80 text-[#2E5FEB] font-bold"
                : "text-slate-800 hover:bg-slate-50 hover:text-[#2E5FEB]"
            }`}
          >
            <span>Home</span>
          </Link>

          {/* About Accordion */}
          <div className="rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => toggleMobileSub("about")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${
                pathname.startsWith("/about") || pathname === "/why-us" || pathname === "/team"
                  ? "bg-indigo-50/80 text-[#2E5FEB] font-bold"
                  : "text-slate-800 hover:bg-slate-50 hover:text-[#2E5FEB]"
              }`}
              aria-expanded={mobileExpanded === "about"}
            >
              <span>About Us</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 text-slate-400 ${
                  mobileExpanded === "about" ? "rotate-180 text-[#2E5FEB]" : ""
                }`}
              />
            </button>
            {mobileExpanded === "about" && (
              <div className="ml-3 pl-3 my-1 border-l-2 border-indigo-100 space-y-1 text-xs font-medium text-slate-600 animate-fade-in">
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/about" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  Overview & Vision
                </Link>
                <Link
                  href="/why-us"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/why-us" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  Why Choose Us
                </Link>
                <Link
                  href="/team"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/team" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  Leadership & Team
                </Link>
              </div>
            )}
          </div>

          {/* Services Accordion */}
          <div className="rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => toggleMobileSub("services")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${
                pathname.startsWith("/services")
                  ? "bg-indigo-50/80 text-[#2E5FEB] font-bold"
                  : "text-slate-800 hover:bg-slate-50 hover:text-[#2E5FEB]"
              }`}
              aria-expanded={mobileExpanded === "services"}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 text-slate-400 ${
                  mobileExpanded === "services" ? "rotate-180 text-[#2E5FEB]" : ""
                }`}
              />
            </button>
            {mobileExpanded === "services" && (
              <div className="ml-3 pl-3 my-1 border-l-2 border-indigo-100 space-y-1 text-xs font-medium text-slate-600 animate-fade-in">
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-lg font-bold text-[#2E5FEB] hover:bg-indigo-50/60"
                >
                  All Services Overview &rarr;
                </Link>
                <Link
                  href="/services/fintech"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/services/fintech" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  FinTech & Shariah Banking
                </Link>
                <Link
                  href="/services/software-development"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/services/software-development" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  Custom Software Development
                </Link>
                <Link
                  href="/services/web-development"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/services/web-development" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  Enterprise Web Platforms
                </Link>
                <Link
                  href="/services/graphics-design"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/services/graphics-design" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  UI/UX & Design Systems
                </Link>
                <Link
                  href="/services/digital-marketing"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/services/digital-marketing" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  Digital Marketing & Growth
                </Link>
                <Link
                  href="/services/seo-services"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/services/seo-services" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  Technical SEO & Authority
                </Link>
              </div>
            )}
          </div>

          {/* Industries Accordion */}
          <div className="rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => toggleMobileSub("industries")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${
                pathname.startsWith("/industries")
                  ? "bg-indigo-50/80 text-[#2E5FEB] font-bold"
                  : "text-slate-800 hover:bg-slate-50 hover:text-[#2E5FEB]"
              }`}
              aria-expanded={mobileExpanded === "industries"}
            >
              <span>Industries</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 text-slate-400 ${
                  mobileExpanded === "industries" ? "rotate-180 text-[#2E5FEB]" : ""
                }`}
              />
            </button>
            {mobileExpanded === "industries" && (
              <div className="ml-3 pl-3 my-1 border-l-2 border-indigo-100 space-y-1 text-xs font-medium text-slate-600 animate-fade-in">
                <Link
                  href="/industries"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-lg font-bold text-[#2E5FEB] hover:bg-indigo-50/60"
                >
                  All Industries Overview &rarr;
                </Link>
                <Link
                  href="/industries/banking-and-finance"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/industries/banking-and-finance" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  Banking & Islamic Finance
                </Link>
                <Link
                  href="/industries/enterprise-software"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/industries/enterprise-software" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  Enterprise Software & SaaS
                </Link>
                <Link
                  href="/industries/ecommerce-and-retail"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/industries/ecommerce-and-retail" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  E-Commerce & Digital Retail
                </Link>
                <Link
                  href="/industries/transportation-and-logistics"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/industries/transportation-and-logistics" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  Logistics & Supply Chain
                </Link>
                <Link
                  href="/industries/healthcare"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg transition-colors ${
                    pathname === "/industries/healthcare" ? "text-[#2E5FEB] font-bold bg-indigo-50/60" : "hover:text-[#2E5FEB] hover:bg-slate-50"
                  }`}
                >
                  Healthcare & MedTech
                </Link>
              </div>
            )}
          </div>

          {/* Case Studies */}
          <Link
            href="/case-studies"
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${
              pathname === "/case-studies"
                ? "bg-indigo-50/80 text-[#2E5FEB] font-bold"
                : "text-slate-800 hover:bg-slate-50 hover:text-[#2E5FEB]"
            }`}
          >
            <span>Blog & Case Studies</span>
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-colors ${
              pathname === "/contact"
                ? "bg-indigo-50/80 text-[#2E5FEB] font-bold"
                : "text-slate-800 hover:bg-slate-50 hover:text-[#2E5FEB]"
            }`}
          >
            <span>Contact & Kuala Lumpur HQ</span>
          </Link>
        </div>

        {/* Drawer Bottom Action & Contact Info */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 shrink-0 space-y-3 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-[0_4px_20px_rgba(117,61,237,0.35)] transition-all active:scale-95"
          >
            <span>Schedule Strategy Call</span>
            <ArrowRight size={15} />
          </Link>

          {/* Quick Direct Mobile Channels */}
          <div className="grid grid-cols-2 gap-2 text-center text-[11px] font-semibold text-slate-600">
            <a
              href="tel:+60178947597"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-white border border-slate-200/80 hover:text-[#2E5FEB] hover:border-blue-400 active:bg-slate-100 transition-colors"
            >
              <Phone size={13} className="text-[#2E5FEB]" />
              <span>Call Direct</span>
            </a>
            <a
              href="mailto:qardhalhasanfintech@gmail.com"
              className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-white border border-slate-200/80 hover:text-[#2E5FEB] hover:border-blue-400 active:bg-slate-100 transition-colors"
            >
              <Mail size={13} className="text-[#753DED]" />
              <span>Email HQ</span>
            </a>
          </div>

          <div className="text-center text-[10px] text-slate-400 font-mono flex items-center justify-center gap-1 pt-0.5">
            <MapPin size={11} className="text-slate-400 shrink-0" />
            <span>Brickfields, Kuala Lumpur, Malaysia</span>
          </div>
        </div>
      </aside>
    </>
  );
}
