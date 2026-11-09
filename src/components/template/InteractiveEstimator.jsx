"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Send,
  Sparkles,
  Globe,
  CreditCard,
  Smartphone,
  Cpu,
  Zap,
  Rocket,
  Building2,
  Lock,
  Layers,
  Calendar,
} from "lucide-react";
import { companyInfo } from "@/data/companyData";

const projectTypes = [
  {
    id: "web-app",
    name: "Web Platform & SaaS",
    icon: Globe,
    baseWeeks: 4,
    badge: "Next.js / TypeScript",
    desc: "Modern responsive web applications, interactive dashboards, cloud database, and REST/GraphQL APIs.",
  },
  {
    id: "fintech",
    name: "FinTech & Payment Portal",
    icon: CreditCard,
    baseWeeks: 6,
    badge: "Shariah / Escrow",
    desc: "Shariah-compliant ledgers, FPX payment gateway, automated escrow, and KYC identity verification.",
  },
  {
    id: "mobile-app",
    name: "Mobile App (iOS/Android)",
    icon: Smartphone,
    baseWeeks: 6,
    badge: "Cross-Platform",
    desc: "High-performance Flutter or React Native mobile apps with push notifications and offline syncing.",
  },
  {
    id: "software",
    name: "Custom Enterprise Software",
    icon: Cpu,
    baseWeeks: 8,
    badge: "Microservices",
    desc: "Bespoke internal ERP, automated business workflows, multi-tenant databases, and enterprise security.",
  },
];

const tiers = [
  {
    id: "mvp",
    title: "Startup MVP",
    icon: Zap,
    tag: "Lean Validation",
    multiplier: 1,
    team: "Lead Architect + Full-Stack Engineer",
    summary: "Fast-to-market sprint focusing on core product validation and initial user traction.",
  },
  {
    id: "growth",
    title: "Growth Scale-Up",
    icon: Rocket,
    tag: "Production Scale",
    multiplier: 1.4,
    team: "Senior Architect + 2 Full-Stack Devs + QA",
    summary: "Production-grade performance, analytics pipelines, automated testing, and CI/CD releases.",
  },
  {
    id: "enterprise",
    title: "Enterprise Core",
    icon: Building2,
    tag: "Bank-Grade SLA",
    multiplier: 2,
    team: "Dedicated Squad: Lead, 3 Devs, UI/UX, QA & DevOps",
    summary: "High-security compliance, failover redundancy, multi-region cloud deployment, and custom SLA.",
  },
];

const addOnOptions = [
  {
    id: "shariah",
    label: "Shariah & Ethical Ledger Audit",
    subtext: "BNM & Islamic finance compliance validation",
    weeks: 1,
  },
  {
    id: "fpx",
    label: "Malaysian Payment Rails (FPX / DuitNow)",
    subtext: "PayNet direct debit & QR reconciliation",
    weeks: 1,
  },
  {
    id: "multilang",
    label: "Multi-Language (EN / BM / AR)",
    subtext: "Full i18n localization and localized copy",
    weeks: 0.5,
  },
  {
    id: "seo",
    label: "Advanced SEO & Schema 2.0",
    subtext: "Search engine indexing & Core Web Vitals",
    weeks: 1,
  },
];

export default function InteractiveEstimator() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedTier, setSelectedTier] = useState(tiers[1]);
  const [selectedAddons, setSelectedAddons] = useState(["shariah", "fpx"]);

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculate estimated timeline
  const addonWeeks = selectedAddons.reduce((acc, curr) => {
    const found = addOnOptions.find((a) => a.id === curr);
    return acc + (found ? found.weeks : 0);
  }, 0);

  const estimatedWeeks = Math.round(
    selectedType.baseWeeks * selectedTier.multiplier + addonWeeks
  );

  const whatsappMessage = encodeURIComponent(
    `Hello Qardh Al Hasan Fintech team! I configured a project scope on your website:\n- Technology Scope: ${selectedType.name}\n- Project Scale: ${selectedTier.title}\n- Active Add-ons: ${selectedAddons.join(", ")}\n- Estimated Timeline: ~${estimatedWeeks} Weeks\nI would like to discuss an official proposal and kick off architecture discovery.`
  );

  return (
    <section
      id="interactive-estimator"
      className="relative py-20 sm:py-28 overflow-hidden bg-white border-t border-slate-100"
    >
      {/* Soft atmospheric ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-r from-indigo-500/8 via-purple-500/6 to-sky-400/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            HEADER: SLEEK STUDIO HEADLINE WITH VISIBILITY
            ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-200/80 text-xs font-bold text-[#5B42F3] shadow-2xs">
            <Sparkles size={14} className="text-[#5B42F3] animate-pulse" />
            <span className="tracking-wide">LIVE ARCHITECTURE CONFIGURATOR</span>
            <span className="w-6 h-px bg-indigo-300" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-[-0.035em] leading-[1.14]">
            Calculate Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#4f46e5] to-[#2563eb]">
              Project Scope &amp; Timeline
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            No vague AI guesswork. Configure your actual technical parameters to see realistic development milestones, recommended squad sizing, and delivery timelines.
          </p>
        </div>

        {/* =========================================================================
            CONFIGURATOR WORKSPACE: 2-COLUMN AESTHETIC LAYOUT
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* =======================================================================
              LEFT COLUMN: 3-STEP TACTILE CONFIGURATOR (7 COLS)
              ======================================================================= */}
          <div className="lg:col-span-7 space-y-8 bg-white p-7 sm:p-10 rounded-[32px] border border-slate-200/90 shadow-sm">
            
            {/* STEP 1: CHOOSE TECHNOLOGY SCOPE */}
            <div className="space-y-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  STEP 1 &bull; CHOOSE TECHNOLOGY SCOPE
                </span>
                <span className="text-xs font-semibold text-[#5B42F3]">Select one</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {projectTypes.map((type) => {
                  const isSelected = selectedType.id === type.id;
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                        isSelected
                          ? "border-[#5B42F3] bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/40 shadow-md shadow-indigo-500/10 ring-2 ring-[#5B42F3]/20"
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white"
                      }`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                              isSelected
                                ? "bg-[#5B42F3] text-white shadow-sm"
                                : "bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-[#5B42F3]"
                            }`}
                          >
                            <Icon size={19} />
                          </div>

                          <span
                            className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                              isSelected
                                ? "bg-[#5B42F3]/10 text-[#5B42F3] border border-[#5B42F3]/20"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {type.badge}
                          </span>
                        </div>

                        <div className="font-extrabold text-base text-slate-900 tracking-tight">
                          {type.name}
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed font-normal">
                          {type.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-400">Base: ~{type.baseWeeks}w</span>
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            isSelected
                              ? "bg-[#5B42F3] text-white"
                              : "border border-slate-300 text-transparent"
                          }`}
                        >
                          ✓
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: SELECT PROJECT SCALE */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  STEP 2 &bull; SELECT PROJECT SCALE
                </span>
                <span className="text-xs font-semibold text-[#5B42F3]">Target tier</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {tiers.map((tier) => {
                  const isSelected = selectedTier.id === tier.id;
                  const Icon = tier.icon;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTier(tier)}
                      className={`text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                        isSelected
                          ? "border-[#5B42F3] bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/40 shadow-md shadow-indigo-500/10 ring-2 ring-[#5B42F3]/20"
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              isSelected
                                ? "bg-[#5B42F3] text-white"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            <Icon size={16} />
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                            {tier.tag}
                          </span>
                        </div>

                        <div className="font-extrabold text-sm text-slate-900 tracking-tight">
                          {tier.title}
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                          {tier.summary}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-[10px] font-mono text-slate-400">Scale factor</span>
                        <span
                          className={`text-xs font-bold font-mono ${
                            isSelected ? "text-[#5B42F3]" : "text-slate-600"
                          }`}
                        >
                          {tier.multiplier}x
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: REGULATORY & PLATFORM MODULES */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  STEP 3 &bull; REGULATORY &amp; PLATFORM MODULES
                </span>
                <span className="text-xs font-semibold text-[#5B42F3]">Multi-select</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addOnOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-start justify-between p-4 rounded-2xl border text-left transition-all duration-200 ${
                        isChecked
                          ? "border-[#5B42F3] bg-gradient-to-r from-indigo-50/80 to-purple-50/50 shadow-2xs"
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 bg-white"
                      }`}
                    >
                      <div className="space-y-1 pr-3">
                        <div
                          className={`text-xs sm:text-sm font-bold ${
                            isChecked ? "text-slate-900" : "text-slate-700"
                          }`}
                        >
                          {addon.label}
                        </div>
                        <div className="text-[11px] text-slate-500 leading-relaxed">
                          {addon.subtext}
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-all text-xs font-bold ${
                          isChecked
                            ? "bg-[#5B42F3] text-white shadow-xs"
                            : "border-2 border-slate-300 bg-white"
                        }`}
                      >
                        {isChecked && "✓"}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* =======================================================================
              RIGHT COLUMN: LUXURY "COMMAND CENTER" SPECIFICATION DOSSIER (5 COLS)
              ======================================================================= */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="relative rounded-[32px] p-[1.5px] bg-gradient-to-b from-[#5B42F3] via-indigo-500/40 to-purple-500/20 shadow-2xl shadow-indigo-500/15">
              
              <div className="rounded-[30px] bg-white p-7 sm:p-9 space-y-6">
                
                {/* Header: Title & Verified Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                      LIVE SPECIFICATION MATRIX
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-50 text-[#5B42F3] border border-indigo-200">
                    <ShieldCheck size={13} />
                    <span>SSM Verified</span>
                  </span>
                </div>

                {/* Big Metric: Delivery Window */}
                <div className="space-y-2">
                  <span className="text-xs font-medium text-slate-500 block">
                    Estimated Production Handover
                  </span>
                  
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-5xl font-black text-slate-900 font-mono tracking-tight">
                      ~{estimatedWeeks}
                    </span>
                    <span className="text-xl font-bold text-slate-800">
                      Weeks to Production
                    </span>
                  </div>
                </div>

                {/* Dynamic Milestone Roadmap Visualization */}
                <div className="p-4.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 font-bold uppercase">
                    <span>Sprint Roadmap</span>
                    <span className="text-[#5B42F3]">4 Delivery Milestones</span>
                  </div>

                  {/* Visual Step Tracker */}
                  <div className="grid grid-cols-4 gap-1.5 pt-1">
                    <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                      <div className="text-[10px] font-mono text-slate-400">M1</div>
                      <div className="text-[11px] font-bold text-slate-900 truncate">Discovery</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                      <div className="text-[10px] font-mono text-slate-400">M2</div>
                      <div className="text-[11px] font-bold text-slate-900 truncate">Arch &amp; UI</div>
                    </div>
                    <div className="p-2 rounded-xl bg-white border border-slate-200 text-center">
                      <div className="text-[10px] font-mono text-slate-400">M3</div>
                      <div className="text-[11px] font-bold text-[#5B42F3] truncate">Core Dev</div>
                    </div>
                    <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-200 text-center">
                      <div className="text-[10px] font-mono text-[#5B42F3]">M4</div>
                      <div className="text-[11px] font-bold text-[#5B42F3] truncate">QA Launch</div>
                    </div>
                  </div>
                </div>

                {/* Squad Composition Box */}
                <div className="p-4.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                    <Users size={15} className="text-[#5B42F3]" />
                    <span>Dedicated Squad Structure:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-mono font-medium leading-relaxed">
                    {selectedTier.team}
                  </p>
                </div>

                {/* Guaranteed Inclusions Checklist */}
                <div className="space-y-2.5 text-xs text-slate-700 pt-1">
                  <div className="font-bold text-slate-900">Included Under Milestone Agreement:</div>
                  
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span className="font-medium">100% Full Source Code &amp; IP Transfer</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span className="font-medium">Mutual Non-Disclosure Agreement (NDA)</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span className="font-medium">30-Day Post-Launch Warranty &amp; Handover</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                    <span className="font-medium">Zero Hidden Fees &amp; Milestone Invoicing</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 space-y-3">
                  <a
                    href={`https://wa.me/${companyInfo.phoneRaw}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#6366f1] via-[#4f46e5] to-[#2563eb] hover:opacity-95 shadow-lg shadow-indigo-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <Send size={15} />
                    <span>Submit This Scope for Quotation</span>
                  </a>

                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 transition-colors"
                  >
                    <Calendar size={14} className="text-[#5B42F3]" />
                    <span>Or Book 30-Min Technical Discovery Call</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
