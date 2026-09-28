"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { companyInfo } from "@/data/companyData";

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/60178947597?text=Hi%20Qardh%20Al%20Hasan%20Fintech%2C%20I%20would%20like%20to%20discuss%20a%20project`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expandable Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0e0422] border border-purple-500/30 shadow-2xl shadow-purple-950/80 overflow-hidden backdrop-blur-2xl animate-fade-in text-white">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-900 via-[#1e0a42] to-fuchsia-950 p-4 border-b border-purple-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0e0422]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Qardh Al Hasan Support</span>
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Typically replies instantly</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-purple-300 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Message Content */}
          <div className="p-4 space-y-3 bg-[#0d041c]/60">
            <div className="bg-purple-950/60 border border-purple-500/20 rounded-2xl rounded-tl-sm p-3.5 space-y-1 text-xs text-purple-100 shadow-inner">
              <p className="font-semibold text-fuchsia-300 flex items-center gap-1">
                <Sparkles size={12} />
                <span>Customer Advisory Desk</span>
              </p>
              <p className="leading-relaxed">
                Hello! 👋 Welcome to <strong className="text-white">Qardh Al Hasan Fintech</strong>.
              </p>
              <p className="leading-relaxed text-purple-200/80">
                How can our engineering and solutions team assist your business today?
              </p>
              <span className="text-[10px] text-purple-400 block text-right pt-1 font-mono">
                Just now
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-3 bg-[#0b0317] border-t border-purple-500/20">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950 transition-all hover:scale-[1.02] active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Open WhatsApp Chat</span>
              <Send size={13} className="ml-0.5" />
            </a>
            <div className="text-[10px] text-center text-purple-400/80 pt-2 font-mono">
              Direct line: {companyInfo.phone}
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/90 text-purple-200 text-xs font-semibold border border-purple-500/30 shadow-xl backdrop-blur-md animate-fade-in pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Chat with us
          </span>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group ${
            isOpen
              ? "bg-purple-900/80 text-white border border-purple-400/40"
              : "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-emerald-900/60"
          }`}
          title="Chat with us on WhatsApp"
          aria-label="Toggle WhatsApp chat widget"
        >
          {!isOpen && (
            <>
              {/* Subtle Pulsing Ring */}
              <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse pointer-events-none" />
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#090314]">
                1
              </span>
            </>
          )}

          {isOpen ? (
            <X size={22} className="text-white" />
          ) : (
            <WhatsAppIcon className="w-7 h-7 fill-white drop-shadow-md" />
          )}
        </button>
      </div>
    </div>
  );
}

// Clean SVG WhatsApp Icon
function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className}
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}
