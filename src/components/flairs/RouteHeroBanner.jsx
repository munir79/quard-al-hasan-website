import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/Reveal";

/**
 * Reusable page banner: background image + text.
 *
 * Props
 *  - image            path to the background image (e.g. "/images/it-hero-bg.jpg")
 *  - badge            small eyebrow text above the title (optional)
 *  - badgeIcon        lucide icon shown beside the eyebrow (optional)
 *  - title            main heading
 *  - titleHighlight   second part of the heading, shown in blue (optional)
 *  - description      paragraph under the heading (optional)
 *  - breadcrumbs      [{ label, href? }] shown above the heading (optional)
 *  - children         extra content under the text: buttons, pills, stats (optional)
 *  - align            "left" (default) | "center"
 *  - overlay          how dark the image is behind the text: "soft" | "medium" (default) | "strong"
 *  - imagePosition    CSS object-position for the image, default "center"
 */

const overlays = {
  soft: "from-[#0A0F1C]/90 via-[#0A0F1C]/72 to-[#0A0F1C]/40",
  medium: "from-[#0A0F1C]/95 via-[#0A0F1C]/82 to-[#0A0F1C]/55",
  strong: "from-[#0A0F1C]/98 via-[#0A0F1C]/92 to-[#0A0F1C]/75",
};

export default function RouteHeroBanner({
  badge,
  badgeIcon: BadgeIcon,
  title,
  titleHighlight,
  description,
  breadcrumbs = [],
  image = "/images/hero-fintech.jpg",
  children,
  align = "left",
  overlay = "medium",
  imagePosition = "center",
}) {
  const centered = align === "center";

  return (
    <section className="relative isolate w-full min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] flex items-center  text-white overflow-hidden pt-32 sm:pt-40 pb-16 sm:pb-24">
      {/* Background image (clearly visible) */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-30"
        style={{ objectPosition: imagePosition }}
      />

      {/* Even dim over the whole photo so busy areas never fight the text */}
      <div aria-hidden className="absolute inset-0 -z-20" />

      {/* Text-side shade so the copy stays readable */}
      <div
        aria-hidden
        className={`absolute inset-0 -z-20 bg-gradient-to-r ${
          centered ? "from-[#0A0F1C]/85 via-[#0A0F1C]/80 to-[#0A0F1C]/85" : overlays[overlay] || overlays.medium
        }`}
      />

      {/* Fade into the dark section below */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-[#0A0F1C] to-transparent"
      />
      {/* Soft top shade for the navbar */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 -z-10 bg-gradient-to-b from-[#0A0F1C]/70 to-transparent"
      />

      {/* Foreground */}
      <RevealGroup
        className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 ${
          centered ? "text-center" : ""
        }`}
      >
        {breadcrumbs.length > 0 && (
          <RevealItem from="left">
            <nav
              aria-label="Breadcrumb"
              className={`flex items-center flex-wrap gap-2 text-sm text-slate-300 ${
                centered ? "justify-center" : ""
              }`}
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <ChevronRight size={14} className="text-slate-500" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-semibold">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </RevealItem>
        )}

        <div className={`space-y-5 ${centered ? "max-w-4xl mx-auto" : "max-w-3xl"}`}>
          {badge && (
            <RevealItem from="left">
              <div
                className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)] ${
                  centered ? "justify-center" : ""
                }`}
              >
                <span aria-hidden className="h-px w-8 bg-sky-300/70" />
                {BadgeIcon && <BadgeIcon size={16} className="text-sky-300" />}
                <span>{badge}</span>
              </div>
            </RevealItem>
          )}

          <RevealItem from="left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]">
              {title}
              {titleHighlight && (
                <>
                  {" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#3B82F6] to-[#60A5FA]">
                    {titleHighlight}
                  </span>
                </>
              )}
            </h1>
          </RevealItem>

          {description && (
            <RevealItem from="left">
              <p
                className={`text-lg sm:text-xl text-white/90 leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] ${
                  centered ? "max-w-3xl mx-auto" : "max-w-2xl"
                }`}
              >
                {description}
              </p>
            </RevealItem>
          )}

          {children && (
            <RevealItem from="left">
              <div className="pt-3">{children}</div>
            </RevealItem>
          )}
        </div>
      </RevealGroup>
    </section>
  );
}