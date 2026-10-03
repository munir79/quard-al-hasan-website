// "use client";

// import Link from "next/link";
// import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, HeartHandshake, Sparkles, Globe } from "lucide-react";
// import BrandLogo from "./BrandLogo";
// import { companyInfo, navLinks, servicesData } from "@/data/companyData";

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative bg-[#0b0318]/95 backdrop-blur-2xl border-t border-purple-500/20 pt-16 text-purple-200/80 overflow-hidden">
//       {/* Subtle ambient purple & fuchsia glow */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none" />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
//           {/* Column 1: Company Profile */}
//           <div className="lg:col-span-2 space-y-4">
//             <BrandLogo />
//             <p className="text-sm text-purple-200/90 leading-relaxed pr-0 lg:pr-6 font-normal">
//               Empowering individuals, SMEs, and corporate enterprises across Malaysia and globally through scalable fintech, custom software, modern web platforms, and ethical digital solutions.
//             </p>

//             <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/20 text-xs font-mono text-purple-300">
//               <span className="text-fuchsia-400 font-bold">Tagline:</span> &ldquo;{companyInfo.tagline}&rdquo;
//             </div>

//             {/* Value badges */}
//             <div className="flex flex-wrap gap-2 pt-1">
//               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/15 text-purple-200 border border-purple-400/30">
//                 <ShieldCheck size={13} />
//                 <span>Ethical Integrity</span>
//               </span>
//               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-400/30">
//                 <Sparkles size={13} />
//                 <span>Innovative Delivery</span>
//               </span>
//               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-pink-500/15 text-pink-200 border border-pink-400/30">
//                 <HeartHandshake size={13} />
//                 <span>Social Impact</span>
//               </span>
//             </div>
//           </div>

//           {/* Column 2: Quick Navigation */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
//               Quick Navigation
//             </h4>
//             <ul className="space-y-2.5 text-sm font-medium">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="text-purple-300/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Core Solutions */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
//               Our Services
//             </h4>
//             <ul className="space-y-2.5 text-sm font-medium">
//               {servicesData.slice(0, 6).map((srv) => (
//                 <li key={srv.id}>
//                   <Link
//                     href="/services"
//                     className="text-purple-300/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 truncate max-w-full"
//                   >
//                     {srv.title}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <Link
//                   href="/services"
//                   className="text-xs font-bold text-fuchsia-300 hover:text-white inline-flex items-center gap-1"
//                 >
//                   View All Services &rarr;
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Column 4: Contact HQ matching Brochure */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
//               Malaysia HQ Contact
//             </h4>
//             <div className="space-y-3 text-sm">
//               <a
//                 href={`tel:${companyInfo.phoneRaw}`}
//                 className="flex items-start gap-3 text-purple-200 hover:text-white transition-colors group"
//               >
//                 <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all border border-purple-500/30">
//                   <Phone size={14} />
//                 </div>
//                 <div>
//                   <div className="text-[11px] font-bold text-purple-400">Direct Lines</div>
//                   <div className="font-bold text-white">{companyInfo.phone}</div>
//                   <div className="text-xs text-purple-300">{companyInfo.phoneSecondary}</div>
//                 </div>
//               </a>

//               <a
//                 href={`mailto:${companyInfo.email}`}
//                 className="flex items-start gap-3 text-purple-200 hover:text-white transition-colors group"
//               >
//                 <div className="w-8 h-8 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center flex-shrink-0 group-hover:bg-fuchsia-600 group-hover:text-white transition-all border border-fuchsia-500/30">
//                   <Mail size={14} />
//                 </div>
//                 <div className="truncate">
//                   <div className="text-[11px] font-bold text-fuchsia-400">Email Inquiries</div>
//                   <div className="font-bold text-white truncate text-xs sm:text-sm">
//                     {companyInfo.email}
//                   </div>
//                 </div>
//               </a>

//               <div className="flex items-start gap-3 text-purple-200">
//                 <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center flex-shrink-0 border border-indigo-500/30">
//                   <MapPin size={14} />
//                 </div>
//                 <div>
//                   <div className="text-[11px] font-bold text-indigo-400">Office Base</div>
//                   <div className="text-white font-medium text-xs leading-relaxed">{companyInfo.address}</div>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3 text-purple-200">
//                 <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
//                   <Globe size={14} />
//                 </div>
//                 <div>
//                   <div className="text-[11px] font-bold text-purple-400">Official Portal</div>
//                   <div className="text-white font-mono text-xs">{companyInfo.website}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sub-footer */}
//         <div className="pt-8 pb-6 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
//           <p className="text-center sm:text-left text-purple-300/80">
//             &copy; {new Date().getFullYear()} <span className="text-white font-bold">{companyInfo.name}</span>. All rights reserved.
//           </p>

//           <div className="flex items-center gap-6">
//             <span className="text-purple-300/80">
//               Brickfields, Kuala Lumpur, Malaysia
//             </span>
//             <button
//               onClick={scrollToTop}
//               className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-900/40 hover:bg-purple-900/70 text-white transition-colors border border-purple-500/30"
//               aria-label="Scroll back to top"
//             >
//               <span>Back to Top</span>
//               <ArrowUp size={13} className="text-fuchsia-300" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Signature High-Tech Violet/Magenta Gradient Bottom Bar */}
//       <div className="w-full h-1.5 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
//     </footer>
//   );
// }
"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, HeartHandshake, Sparkles, Globe } from "lucide-react";
import BrandLogo from "./BrandLogo";
import { companyInfo, navLinks, servicesData } from "@/data/companyData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0b0318]/95 backdrop-blur-2xl border-t border-purple-500/20 pt-16 text-purple-200/80 overflow-hidden">
      {/* Subtle ambient purple & fuchsia glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            {/* Logo & Company Name (Flex) */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="flex-shrink-0">
                <BrandLogo />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-white group-hover:text-purple-200 transition-colors">
                  Qardh Al Hasan
                </span>
                <span className="text-xs font-semibold text-purple-300/80 tracking-wide uppercase">
                  Fintech Sdn. Bhd.
                </span>
              </div>
            </Link>

            <p className="text-sm text-purple-200/90 leading-relaxed pr-0 lg:pr-6 font-normal">
              Empowering individuals, SMEs, and corporate enterprises across Malaysia and globally through scalable fintech, custom software, modern web platforms, and ethical digital solutions.
            </p>

            <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/20 text-xs font-mono text-purple-300">
              <span className="text-fuchsia-400 font-bold">Tagline:</span> &ldquo;{companyInfo.tagline}&rdquo;
            </div>

            {/* Value badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/15 text-purple-200 border border-purple-400/30">
                <ShieldCheck size={13} />
                <span>Ethical Integrity</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-fuchsia-500/15 text-fuchsia-200 border border-fuchsia-400/30">
                <Sparkles size={13} />
                <span>Innovative Delivery</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-pink-500/15 text-pink-200 border border-pink-400/30">
                <HeartHandshake size={13} />
                <span>Social Impact</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-purple-300/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {servicesData.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href="/services"
                    className="text-purple-300/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 truncate max-w-full"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs font-bold text-fuchsia-300 hover:text-white inline-flex items-center gap-1"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact HQ matching Brochure */}
          <div className="space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">
              Malaysia HQ Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="flex items-start gap-3 text-purple-200 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all border border-purple-500/30">
                  <Phone size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-purple-400">Direct Lines</div>
                  <div className="font-bold text-white">{companyInfo.phone}</div>
                  <div className="text-xs text-purple-300">{companyInfo.phoneSecondary}</div>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start gap-3 text-purple-200 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center flex-shrink-0 group-hover:bg-fuchsia-600 group-hover:text-white transition-all border border-fuchsia-500/30">
                  <Mail size={14} />
                </div>
                <div className="truncate">
                  <div className="text-[11px] font-bold text-fuchsia-400">Email Inquiries</div>
                  <div className="font-bold text-white truncate text-xs sm:text-sm">
                    {companyInfo.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-purple-200">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center flex-shrink-0 border border-indigo-500/30">
                  <MapPin size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-indigo-400">Office Base</div>
                  <div className="text-white font-medium text-xs leading-relaxed">{companyInfo.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-purple-200">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                  <Globe size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-purple-400">Official Portal</div>
                  <div className="text-white font-mono text-xs">{companyInfo.website}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 pb-6 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
          <p className="text-center sm:text-left text-purple-300/80">
            &copy; {new Date().getFullYear()} <span className="text-white font-bold">{companyInfo.name}</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-purple-300/80">
              Brickfields, Kuala Lumpur, Malaysia
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-900/40 hover:bg-purple-900/70 text-white transition-colors border border-purple-500/30"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} className="text-fuchsia-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Signature High-Tech Violet/Magenta Gradient Bottom Bar */}
      <div className="w-full h-1.5 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
    </footer>
  );
}