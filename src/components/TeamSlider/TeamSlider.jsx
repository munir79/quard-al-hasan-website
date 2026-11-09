"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Auto-sliding team carousel (right to left), seamless loop.
 * - Full-card photo with the name and designation written over it.
 * - Hover (or tap on touch devices) reveals the description and skills.
 * - Pauses on hover / touch, arrows for manual control.
 *
 * Props: members = [{ name, role, department, description, skills, image }]
 */

const SPEED = 0.7; // pixels per frame (about 42px per second)

function initials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

export default function TeamSlider({ members = [] }) {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const resumeTimer = useRef(null);
  const reduce = useReducedMotion();

  // Two identical sets give a seamless loop (each card has its own right margin)
  const items = [...members, ...members];

  useEffect(() => {
    const el = trackRef.current;
    if (!el || reduce || members.length === 0) return;

    let frame;
    const tick = () => {
      const half = el.scrollWidth / 2;
      if (pausedRef.current) {
        posRef.current = el.scrollLeft; // follow manual scrolling
      } else {
        posRef.current += SPEED;
        if (posRef.current >= half) posRef.current -= half;
        el.scrollLeft = posRef.current;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resumeTimer.current);
    };
  }, [reduce, members.length]);

  const pause = () => {
    clearTimeout(resumeTimer.current);
    pausedRef.current = true;
  };
  const resume = (delay = 0) => {
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    pause();
    const half = el.scrollWidth / 2;
    if (dir < 0 && el.scrollLeft < 20) el.scrollLeft += half; // jump so we can go backwards at the start
    const amount = Math.min(470, el.clientWidth * 0.8);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
    resume(2500);
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={pause}
      onMouseLeave={() => resume(300)}
      onTouchStart={pause}
      onTouchEnd={() => resume(4000)}
    >
      {/* Arrows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous team members"
          className="h-12 w-12 rounded-full border border-white/15 bg-white/[0.05] text-white hover:bg-gradient-to-r hover:from-[#753DED] hover:via-[#524EEC] hover:to-[#2E5FEB] hover:border-transparent hover:shadow-[0_4px_20px_rgba(117,61,237,0.35)] transition-all duration-300 flex items-center justify-center"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next team members"
          className="h-12 w-12 rounded-full border border-white/15 bg-white/[0.05] text-white hover:bg-gradient-to-r hover:from-[#753DED] hover:via-[#524EEC] hover:to-[#2E5FEB] hover:border-transparent hover:shadow-[0_4px_20px_rgba(117,61,237,0.35)] transition-all duration-300 flex items-center justify-center"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto pb-6 pt-2 pl-4 sm:pl-6 lg:pl-8 touch-pan-x"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
      >
        {items.map((member, idx) => {
          const isCopy = idx >= members.length;
          const skills = member.skills || [];

          return (
            <article
              key={idx}
              aria-hidden={isCopy}
              tabIndex={isCopy ? -1 : 0}
              className="group relative shrink-0 mr-6 w-[300px] sm:w-[380px] lg:w-[440px] aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#12254f] via-[#0F1B3D] to-[#0A1226] hover:border-blue-400/50 focus-visible:border-blue-400/60 focus:outline-none hover:shadow-[0_20px_60px_rgba(59,130,246,0.22)] transition-[border-color,box-shadow] duration-300"
            >
              {/* Full-card photo */}
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-40 w-40 items-center justify-center rounded-full bg-blue-500/10 border border-blue-400/25 text-6xl font-bold text-blue-300">
                    {initials(member.name)}
                  </span>
                </div>
              )}

              {/* Readability gradient (strong at the bottom where the text sits) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/35 via-45% to-transparent transition-opacity duration-500 group-hover:from-[#0A0F1C]/95 group-hover:via-[#0A0F1C]/60" />

              {/* Department tag (top left) */}
              {member.department && (
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#0A0F1C]/55 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                  {member.department.trim()}
                </span>
              )}

              {/* Name + designation written over the photo */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h4 className="text-2xl sm:text-3xl font-bold text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  {member.name}
                </h4>
                <div className="mt-1.5 text-base sm:text-lg font-semibold text-sky-300 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
                  {member.role}
                </div>

                {/* Description + skills: revealed on hover / focus / touch */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100">
                  <div className="overflow-hidden">
                    {member.description && (
                      <p className="mt-4 text-base text-slate-200 leading-relaxed line-clamp-3">
                        {member.description}
                      </p>
                    )}
                    {skills.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md border border-blue-300/25 bg-blue-500/15 px-2.5 py-1 text-sm font-medium text-blue-100"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}