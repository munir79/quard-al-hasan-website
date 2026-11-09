"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

const wordsToType = ["Teams.", "Systems.", "Success.", "FinTech.", "Operations."];

export default function FlairsHero() {
  const videoRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(140);

  // Ensure video is 100% muted and auto-plays across all mobile and desktop browsers
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented; fallback silent handle
        });
      }
    }
  }, []);

  useEffect(() => {
    const targetWord = wordsToType[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetWord.substring(0, currentText.length + 1));
        if (currentText === targetWord) {
          setTypingSpeed(2200);
          setIsDeleting(true);
        } else {
          setTypingSpeed(110);
        }
      } else {
        setCurrentText(targetWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % wordsToType.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(60);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, typingSpeed]);

  return (
    <section className="relative min-h-screen w-full bg-transparent text-white overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-10 sm:pb-14 px-6 sm:px-12 lg:px-16 z-10">
      
      {/* 
        BACKGROUND HERO VIDEO LAYER:
        - Vivid, high-clarity video playback (opacity-85) so the video is clearly visible
        - Always muted (no sound) for guaranteed browser autoplay
        - Automatically restarts from beginning when it ends (looping infinitely)
        - Subtle top/bottom edge gradient allows the video to shine through in full clarity
      */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          defaultMuted
          playsInline
          preload="auto"
          onEnded={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play().catch(() => {});
          }}
          className="w-full h-full object-cover opacity-80 sm:opacity-85 scale-100 transition-opacity duration-700"
        >
          <source src="/video/herovideo.mp4" type="video/mp4" />
          <source src="/herovideo.mp4" type="video/mp4" />
          <source src="/video/herovideo (2).mp4" type="video/mp4" />
        </video>

        {/* Lightweight Edge Vignette: Keeps video vibrant in center while ensuring smooth section transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080C] via-black/25 to-[#08080C]/65" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Top spacer */}
      <div className="w-full h-4 relative z-10" />

      {/* 2. Center Headline with Dynamic Typewriter (Screenshots 1, 4 & 5) */}
      <div className="relative z-10 my-auto text-center py-10 sm:py-16 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[112px] font-black tracking-[-0.04em] text-white leading-[1.05] select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          Scale Smart <br className="hidden sm:inline" />
          <span>Your </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-[#60A5FA]">
            {currentText}
          </span>
          <span className="text-[#38BDF8] font-light animate-cursor">|</span>
        </h1>
      </div>

      {/* 3. Bottom Row: Value Proposition (Left) + GET IN TOUCH Button (Right) */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-8 border-t border-white/[0.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
        
        {/* Bottom Left Copy */}
        <div className="max-w-2xl space-y-2">
          <p className="text-base sm:text-lg font-bold text-white leading-snug drop-shadow-md">
            with AI-Powered Technology Managed Services designed to simplify lives.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed drop-shadow-md">
            Join 100+ businesses worldwide who drive measurable results daily from one accountable partner they trust.
          </p>
        </div>

        {/* Bottom Right: GET IN TOUCH ↗ Pill Button */}
        <div className="shrink-0 self-start sm:self-end">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 active:scale-95 uppercase tracking-wider backdrop-blur-md"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

      </div>

      {/* 4. Far Right Vertical Social Media Strip */}
      <div className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4 text-slate-400">
        <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase [writing-mode:vertical-rl] rotate-180">
          FOLLOW US:
        </span>
        <div className="w-[1px] h-6 bg-slate-700" />
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={14} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={14} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="YouTube"
        >
          <Youtube size={14} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={14} />
        </a>
      </div>

    </section>
  );
}
