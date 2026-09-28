"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { servicesData, companyInfo } from "@/data/companyData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: servicesData[0].title,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="purple-card p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {isSubmitted ? (
        <div className="py-12 px-4 text-center space-y-5 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <CheckCircle2 size={36} />
          </div>
          <h3 className="text-2xl font-black text-white">Thank You for Reaching Out!</h3>
          <p className="text-sm text-purple-200/90 max-w-md mx-auto leading-relaxed font-normal">
            Your inquiry has been received by the <span className="text-white font-bold">{companyInfo.name}</span> team in Brickfields, Kuala Lumpur. One of our solutions architects will contact you within 24 business hours.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  company: "",
                  service: servicesData[0].title,
                  message: "",
                });
              }}
              className="px-5 py-2.5 rounded-xl bg-purple-900/40 hover:bg-purple-900/60 text-white text-xs font-bold transition-all border border-purple-500/30"
            >
              Send Another Inquiry
            </button>
            <a
              href={`https://wa.me/60178947597?text=Hi%20Qardh%20Al%20Hasan%20Fintech%2C%20I%20would%20like%20to%20discuss%20a%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-purple-primary inline-flex items-center gap-2 text-xs font-black"
            >
              <MessageSquare size={14} />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/15 text-purple-200 border border-purple-400/30">
              <Sparkles size={12} className="text-fuchsia-400" />
              <span>Fast 24-Hour Response SLA</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Request a Project Consultation
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/80 font-normal">
              Tell us about your project requirements or offshore team needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ahmad Razif"
                className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/30 focus:border-fuchsia-400 focus:bg-purple-950/70 focus:ring-1 focus:ring-fuchsia-400 text-sm text-white placeholder-purple-400/50 transition-all outline-none font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                Business Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/30 focus:border-fuchsia-400 focus:bg-purple-950/70 focus:ring-1 focus:ring-fuchsia-400 text-sm text-white placeholder-purple-400/50 transition-all outline-none font-medium"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                Phone / WhatsApp Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+60 1x-xxx xxxx"
                className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/30 focus:border-fuchsia-400 focus:bg-purple-950/70 focus:ring-1 focus:ring-fuchsia-400 text-sm text-white placeholder-purple-400/50 transition-all outline-none font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Global Tech Sdn Bhd"
                className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/30 focus:border-fuchsia-400 focus:bg-purple-950/70 focus:ring-1 focus:ring-fuchsia-400 text-sm text-white placeholder-purple-400/50 transition-all outline-none font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-1.5">
              Service Solution Required *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#14062a] border border-purple-500/30 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400 text-sm text-white transition-all outline-none cursor-pointer font-medium"
            >
              {servicesData.map((srv) => (
                <option key={srv.id} value={srv.title} className="bg-[#14062a] text-white">
                  {srv.title} ({srv.subtitle})
                </option>
              ))}
              <option value="Offshore Development Team" className="bg-[#14062a] text-white">
                Offshore Dedicated Tech Team
              </option>
              <option value="Complete Digital Transformation" className="bg-[#14062a] text-white">
                Full Digital Transformation / Enterprise Consulting
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-purple-300 mb-1.5">
              Project Description & Goals *
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project, timeline, deliverables, or challenges..."
              className="w-full px-4 py-3 rounded-xl bg-purple-950/40 border border-purple-500/30 focus:border-fuchsia-400 focus:bg-purple-950/70 focus:ring-1 focus:ring-fuchsia-400 text-sm text-white placeholder-purple-400/50 transition-all outline-none resize-none font-medium"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-purple-primary w-full py-4 text-sm font-black flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            {isSubmitting ? (
              <span>Submitting Your Request...</span>
            ) : (
              <>
                <span>Submit Consultation Request</span>
                <div className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center">
                  <ArrowRight size={12} />
                </div>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
