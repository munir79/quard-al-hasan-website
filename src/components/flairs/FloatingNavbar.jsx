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
      {/* Fixed Header Wrapper (Zero Glitch: fixed with single container) */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300">
        <div
          className={`w-full flex justify-center transition-all duration-300 ease-out ${
            scrolled ? "p-0" : "pt-3 sm:pt-5 px-3 sm:px-6"
          }`}
        >
          {/* Inner Pill / Full Bar Container */}
          <div
            className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ease-out ${
              scrolled
                ? "w-full max-w-full rounded-none bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-3 px-4 sm:px-8 lg:px-12"
                : "w-full max-w-4xl rounded-full bg-white shadow-2xl border border-slate-200/90 py-2.5 px-4 sm:px-6"
            }`}
          >
            {/* Left: Brand Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <BrandLogo imgClassName="h-7 sm:h-8" showText={true} />
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

              {/* AIMY / Qardh AI */}
              <Link
                href="/services/fintech"
                className="hover:text-[#2563EB] transition-colors font-bold text-slate-900"
              >
                AIMY
              </Link>

              {/* Contact Us */}
              <Link href="/contact" className="hover:text-[#2563EB] transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* Right: CTA Button & Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-[#6366F1] to-[#2563EB] hover:from-[#4F46E5] hover:to-[#1D4ED8] shadow-md shadow-blue-500/25 transition-all shrink-0"
              >
                <span>Schedule a Call</span>
              </Link>

              {/* Mobile Hamburger Trigger */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="p-1.5 rounded-full text-slate-700 hover:bg-slate-100 lg:hidden focus:outline-none"
                aria-label="Open mobile menu"
              >
                <Menu size={22} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer (SLIDES FROM LEFT TO RIGHT) */}
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer Panel: Anchored on the Left */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-[85%] max-w-[340px] bg-white z-50 shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6 overflow-y-auto pr-1">
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <BrandLogo imgClassName="h-7" showText={true} />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links Accordion */}
          <div className="space-y-1 text-sm font-bold text-slate-800">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-slate-900 hover:text-[#2563EB]"
            >
              Home
            </Link>

            {/* About Accordion */}
            <div className="border-t border-slate-100 pt-1">
              <button
                type="button"
                onClick={() => toggleMobileSub("about")}
                className="w-full flex items-center justify-between py-2 text-slate-900 hover:text-[#2563EB]"
              >
                <span>About</span>
                <ChevronRight
                  size={16}
                  className={`transition-transform duration-200 text-slate-400 ${
                    mobileExpanded === "about" ? "rotate-90 text-[#2563EB]" : ""
                  }`}
                />
              </button>
              {mobileExpanded === "about" && (
                <div className="pl-3 pb-2 space-y-1.5 text-xs text-slate-600 font-semibold animate-fade-in">
                  <Link
                    href="/about"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    Overview & Vision
                  </Link>
                  <Link
                    href="/why-us"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    Why Choose Us
                  </Link>
                  <Link
                    href="/team"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    Leadership & Team
                  </Link>
                </div>
              )}
            </div>

            {/* Services Accordion */}
            <div className="border-t border-slate-100 pt-1">
              <button
                type="button"
                onClick={() => toggleMobileSub("services")}
                className="w-full flex items-center justify-between py-2 text-slate-900 hover:text-[#2563EB]"
              >
                <span>Services</span>
                <ChevronRight
                  size={16}
                  className={`transition-transform duration-200 text-slate-400 ${
                    mobileExpanded === "services" ? "rotate-90 text-[#2563EB]" : ""
                  }`}
                />
              </button>
              {mobileExpanded === "services" && (
                <div className="pl-3 pb-2 space-y-1.5 text-xs text-slate-600 font-semibold animate-fade-in">
                  <Link
                    href="/services/fintech"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    FinTech & Shariah Core Banking
                  </Link>
                  <Link
                    href="/services/software-development"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    Custom Software Development
                  </Link>
                  <Link
                    href="/services/web-development"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    Enterprise Website Development
                  </Link>
                  <Link
                    href="/services/graphics-design"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    UI/UX & Design Systems
                  </Link>
                  <Link
                    href="/services/digital-marketing"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    Digital Marketing & Paid Ads
                  </Link>
                  <Link
                    href="/services/seo-services"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    Technical SEO & Authority
                  </Link>
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div className="border-t border-slate-100 pt-1">
              <button
                type="button"
                onClick={() => toggleMobileSub("industries")}
                className="w-full flex items-center justify-between py-2 text-slate-900 hover:text-[#2563EB]"
              >
                <span>Industries</span>
                <ChevronRight
                  size={16}
                  className={`transition-transform duration-200 text-slate-400 ${
                    mobileExpanded === "industries" ? "rotate-90 text-[#2563EB]" : ""
                  }`}
                />
              </button>
              {mobileExpanded === "industries" && (
                <div className="pl-3 pb-2 space-y-1.5 text-xs text-slate-600 font-semibold animate-fade-in">
                  <Link
                    href="/industries/banking-and-finance"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    Banking & Islamic Finance
                  </Link>
                  <Link
                    href="/industries/enterprise-software"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    Enterprise Software & SaaS
                  </Link>
                  <Link
                    href="/industries/ecommerce-and-retail"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    E-Commerce & Digital Retail
                  </Link>
                  <Link
                    href="/industries/transportation-and-logistics"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    Logistics & Supply Chain
                  </Link>
                  <Link
                    href="/industries/healthcare"
                    onClick={() => setIsOpen(false)}
                    className="block py-1 hover:text-[#2563EB]"
                  >
                    Healthcare & MedTech
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/case-studies"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-slate-900 hover:text-[#2563EB] border-t border-slate-100"
            >
              Blog & Case Studies
            </Link>

            <Link
              href="/services/fintech"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-slate-900 hover:text-[#2563EB] border-t border-slate-100"
            >
              AIMY
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-slate-900 hover:text-[#2563EB] border-t border-slate-100"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Drawer Bottom Action */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#6366F1] to-[#2563EB] shadow-md shadow-blue-500/25"
          >
            <span>Schedule a Call</span>
            <ArrowRight size={14} />
          </Link>
          <div className="text-center text-[10px] text-slate-400 font-mono">
            Brickfields, Kuala Lumpur &bull; +60 17 894 7597
          </div>
        </div>
      </aside>
    </>
  );
}
