"use client";

import { useState } from "react";
import { Layers, Server, Smartphone, Shield } from "lucide-react";

const stackCategories = [
  {
    id: "frontend",
    title: "Web & Frontend",
    icon: Layers,
    technologies: [
      { name: "Next.js 14", tag: "App Router / SSR", highlight: true },
      { name: "React 18", tag: "Component Engine" },
      { name: "TypeScript", tag: "Type-Safe Rigor", highlight: true },
      { name: "Tailwind CSS", tag: "Modern Design Tokens" },
      { name: "GraphQL & REST", tag: "Data Fetching" },
      { name: "Framer Motion", tag: "Fluid Interactions" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    icon: Server,
    technologies: [
      { name: "Node.js / Express", tag: "High-Throughput APIs", highlight: true },
      { name: "Python / FastAPI", tag: "Data Processing" },
      { name: "PostgreSQL", tag: "Relational ACID DB", highlight: true },
      { name: "Redis", tag: "In-Memory Caching" },
      { name: "Prisma / ORM", tag: "Type-Safe Querying" },
      { name: "MongoDB", tag: "Document Store" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Architecture",
    icon: Smartphone,
    technologies: [
      { name: "Flutter (Dart)", tag: "Cross-Platform iOS/Android", highlight: true },
      { name: "React Native", tag: "Native Performance" },
      { name: "Firebase", tag: "Push Notifications & Auth" },
      { name: "Offline Sync", tag: "Local SQLite / Hive" },
      { name: "App Store CI/CD", tag: "Automated Deployment" },
      { name: "Biometric Auth", tag: "FaceID / Fingerprint" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevSecOps",
    icon: Shield,
    technologies: [
      { name: "Amazon Web Services (AWS)", tag: "Cloud Infrastructure", highlight: true },
      { name: "Docker & Containerization", tag: "Reproducible Builds" },
      { name: "GitHub Actions", tag: "CI/CD Automation" },
      { name: "SSL/TLS & AES-256", tag: "Data Encryption" },
      { name: "Cloudflare", tag: "DDoS Mitigation & Edge CDN" },
      { name: "Role-Based Access (RBAC)", tag: "Zero-Trust Security" },
    ],
  },
];

export default function TechStackShowcase() {
  const [activeCategory, setActiveCategory] = useState(0);
  const current = stackCategories[activeCategory];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl space-y-3 mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
            Certified Modern Tooling
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Battle-Tested Tech Stacks
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            We don&apos;t build with obsolete or proprietary closed frameworks. We engineer on the world&apos;s most proven, maintainable, open-standard technologies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {stackCategories.map((cat, idx) => {
            const isSelected = activeCategory === idx;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <Icon size={15} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {current.technologies.map((tech) => (
            <div
              key={tech.name}
              className={`p-4 rounded-2xl bg-white border transition-all ${
                tech.highlight
                  ? "border-primary-200 shadow-xs ring-1 ring-primary/20"
                  : "border-slate-200/90 shadow-2xs hover:border-slate-300"
              }`}
            >
              <div className="text-xs font-mono text-slate-400 font-bold uppercase truncate">
                {tech.tag}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">
                {tech.name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
