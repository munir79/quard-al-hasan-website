"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Home,
  Info,
  Server,
  Users,
  Target,
  Send,
  ExternalLink,
} from "lucide-react";
import BrandLogo from "./BrandLogo";
import { navLinks, companyInfo } from "@/data/companyData";

const iconMap = {
  "/": Home,
  "/about": Info,
  "/services": Server,
  "/team": Users,
  "/clients": Target,
  "/contact": Send,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm shadow-slate-900/5 py-3"
            : "bg-white/70 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo (Fixed & Interactive on Navbar) */}
            <BrandLogo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-bold rounded-xl transition-all duration-200 ${
                      isActive
                        ? "text-[#4D47D7] bg-[#4D47D7]/10 border border-[#4D47D7]/20"
                        : "text-slate-600 hover:text-[#4D47D7] hover:bg-slate-100/70"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#4D47D7] rounded-full shadow-[0_0_8px_rgba(77,71,215,0.4)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="hidden xl:flex items-center gap-2.5 text-xs font-bold text-slate-600 hover:text-[#4D47D7] transition-colors"
                title="Call our Kuala Lumpur office"
              >
                <div className="w-8 h-8 rounded-xl bg-[#4D47D7]/10 border border-[#4D47D7]/20 flex items-center justify-center text-[#4D47D7]">
                  <Phone size={14} />
                </div>
                <span>{companyInfo.phone}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#4D47D7] hover:bg-[#3d37c9] rounded-xl shadow-md shadow-[#4D47D7]/25 hover:shadow-lg hover:shadow-[#4D47D7]/35 hover:scale-[1.02] transition-all active:scale-95 border border-white/20"
              >
                <span>Get a Quote</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <ArrowRight size={12} />
                </div>
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link
                href="/contact"
                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#4D47D7] text-white shadow-sm font-black"
              >
                Quote
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#4D47D7] transition-all"
                aria-label="Open mobile menu"
              >
                <Menu size={22} className="text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          MOBILE DRAWER (SLIDES FROM LEFT TO RIGHT WITH MODERN LIGHT THEME)
          ========================================================================= */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 left-0 bottom-0 w-[86%] max-w-sm bg-white/98 backdrop-blur-2xl border-r border-slate-200 z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile Navigation Menu"
      >
        {/* Top Header of Drawer */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/60">
          <BrandLogo />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors"
            aria-label="Close mobile menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-5 px-4 space-y-1.5">
          <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Navigation Menu
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = iconMap[link.href] || ExternalLink;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? "text-[#4D47D7] bg-[#4D47D7]/10 border border-[#4D47D7]/20"
                    : "text-slate-700 hover:text-[#4D47D7] hover:bg-slate-100/70"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isActive
                      ? "bg-[#4D47D7] text-white font-bold"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <span className="flex-1">{link.name}</span>
                {isActive && (
                  <span className="w-1.5 h-4 bg-[#4D47D7] rounded-full shadow-[0_0_6px_rgba(77,71,215,0.4)]" />
                )}
              </Link>
            );
          })}

          <div className="pt-4 px-1">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#4D47D7] hover:bg-[#3d37c9] shadow-md shadow-[#4D47D7]/25 hover:opacity-95 transition-all"
            >
              <span>Get Free Discovery Call</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Drawer Bottom Contact Details */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
            Kuala Lumpur HQ
          </div>
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#4D47D7] transition-colors shadow-xs"
          >
            <div className="w-7 h-7 rounded-lg bg-[#4D47D7]/10 text-[#4D47D7] flex items-center justify-center">
              <Phone size={13} />
            </div>
            <div>
              <div className="font-bold text-slate-900">{companyInfo.phone}</div>
              <div className="text-[10px] text-slate-500">{companyInfo.phoneSecondary}</div>
            </div>
          </a>

          <a
            href={`mailto:${companyInfo.email}`}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-[#4D47D7] transition-colors truncate shadow-xs"
          >
            <div className="w-7 h-7 rounded-lg bg-[#4D47D7]/10 text-[#4D47D7] flex items-center justify-center flex-shrink-0">
              <Mail size={13} />
            </div>
            <span className="truncate">{companyInfo.email}</span>
          </a>

          <div className="flex items-center gap-3 p-2 text-xs text-slate-600 font-medium">
            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-500">
              <MapPin size={13} />
            </div>
            <span className="truncate">{companyInfo.address}</span>
          </div>
        </div>
      </aside>
    </>
  );
}
