"use client";

import { useState, useEffect, useRef } from "react";

export default function InteractiveOrbsBackground() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [coords, setCoords] = useState({
    heroW: 1200,
    heroH: 800,
    targetX: 600,
    targetY: 990,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const updateMeasurements = () => {
      const w = window.innerWidth || 1200;
      const h = window.innerHeight || 800;

      // Find Section 2 headline to pinpoint exact destination for the single ball
      const headline = document.getElementById("workflows-headline");
      const container = containerRef.current;
      let targetX = w * 0.5;
      let targetY = h + 180;

      if (headline && container) {
        const hRect = headline.getBoundingClientRect();
        const cRect = container.getBoundingClientRect();
        targetX = hRect.left - cRect.left + hRect.width / 2;
        targetY = hRect.top - cRect.top + hRect.height / 2 - 10;
      }

      setCoords({
        heroW: w,
        heroH: h,
        targetX,
        targetY,
      });
    };

    updateMeasurements();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroH = window.innerHeight || 800;
          // Progress goes from 0 (at top of hero) to 1 (when Section 2 is reached)
          const p = Math.min(Math.max(window.scrollY / (heroH * 0.72), 0), 1);
          setScrollProgress(p);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateMeasurements, { passive: true });

    const timer = setTimeout(updateMeasurements, 250);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMeasurements);
      clearTimeout(timer);
    };
  }, []);

  const { heroW, heroH, targetX, targetY } = coords;

  // Smoothstep easing for physical organic glide
  const smoothP = scrollProgress * scrollProgress * (3 - 2 * scrollProgress);

  // Initial Hero Coordinates
  const isMobile = isClient ? heroW < 768 : false;
  const leftStartX = isMobile ? heroW * 0.22 : heroW * 0.26;
  const rightStartX = isMobile ? heroW * 0.78 : heroW * 0.74;
  const heroStartY = heroH * 0.42;

  // 1. Separate Left & Right Orbs (Hero Only):
  // Scaled to a comfortable, eye-friendly peak opacity (~0.68) with no harsh blinding glare
  const splitOrbsOpacity = Math.max(0, (1 - scrollProgress / 0.32) * 0.68);
  const showSplitOrbs = splitOrbsOpacity > 0.01;

  // Converging coordinates as user starts scrolling down
  const mergeProgress = Math.min(scrollProgress / 0.32, 1);
  const leftCurrX = leftStartX + (targetX - leftStartX) * mergeProgress;
  const rightCurrX = rightStartX + (targetX - rightStartX) * mergeProgress;
  const splitCurrY = heroStartY + (targetY - heroStartY) * (scrollProgress * 0.35);

  // 2. Single Unified Central Ball:
  // Smooth, eye-pleasing ambient glow (peak ~0.76) that keeps text effortlessly readable
  const singleBallOpacity = Math.min(0.76, Math.max(0, (scrollProgress / 0.22) * 0.76));
  const singleCurrY = heroStartY + (targetY - heroStartY) * smoothP;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 
        HERO ORB 1 (LEFT / PURPLE VIOLET):
        - Balanced eye-friendly luminous stops, soft deep blur
      */}
      {showSplitOrbs && (
        <div
          style={{
            transform: `translate3d(${leftCurrX}px, ${splitCurrY}px, 0) translate(-50%, -50%)`,
            opacity: splitOrbsOpacity,
            transition: "transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.2s ease-out",
          }}
          className="absolute top-0 left-0 w-[420px] sm:w-[540px] lg:w-[620px] h-[420px] sm:h-[540px] lg:h-[620px] will-change-transform"
        >
          <div className="w-full h-full animate-orb-touch-left">
            <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(233,213,255,0.75)_0%,rgba(192,132,252,0.65)_22%,rgba(168,85,247,0.52)_44%,rgba(126,34,206,0.38)_65%,rgba(79,70,229,0.18)_82%,transparent_100%)] blur-[75px] sm:blur-[100px]" />
          </div>
        </div>
      )}

      {/* 
        HERO ORB 2 (RIGHT / ELECTRIC ROYAL BLUE CYAN):
        - Balanced eye-friendly luminous stops, soft deep blur
      */}
      {showSplitOrbs && (
        <div
          style={{
            transform: `translate3d(${rightCurrX}px, ${splitCurrY}px, 0) translate(-50%, -50%)`,
            opacity: splitOrbsOpacity,
            transition: "transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.2s ease-out",
          }}
          className="absolute top-0 left-0 w-[420px] sm:w-[540px] lg:w-[620px] h-[420px] sm:h-[540px] lg:h-[620px] will-change-transform"
        >
          <div className="w-full h-full animate-orb-touch-right">
            <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(186,230,253,0.75)_0%,rgba(56,189,248,0.65)_22%,rgba(37,99,235,0.52)_44%,rgba(29,78,216,0.38)_65%,rgba(30,58,138,0.18)_82%,transparent_100%)] blur-[75px] sm:blur-[100px]" />
          </div>
        </div>
      )}

      {/* 
        THE SINGLE RADIANT GLOWING BALL:
        - Gentle, rich spherical lighting behind Section 2 headline with zero eye strain
      */}
      <div
        style={{
          transform: `translate3d(${targetX}px, ${singleCurrY}px, 0) translate(-50%, -50%)`,
          opacity: singleBallOpacity,
          transition: "transform 0.12s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.2s ease-out",
        }}
        className="absolute top-0 left-0 w-[420px] sm:w-[560px] lg:w-[640px] h-[420px] sm:h-[560px] lg:h-[640px] will-change-transform"
      >
        {/* Layer 1: Ambient Indigo-Blue Rim Aura */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.4)_0%,rgba(67,56,202,0.3)_40%,rgba(30,27,75,0.18)_70%,transparent_90%)] blur-[75px] sm:blur-[105px]" />

        {/* Layer 2: Soft White-Lavender Core & Saturated Purple Corona */}
        <div className="w-full h-full animate-radiant-glow">
          <div className="w-full h-full rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85)_0%,rgba(243,232,255,0.78)_16%,rgba(216,180,254,0.68)_32%,rgba(168,85,247,0.55)_52%,rgba(126,34,206,0.4)_70%,rgba(79,70,229,0.2)_84%,transparent_100%)] blur-[60px] sm:blur-[82px]" />
        </div>
      </div>
    </div>
  );
}
