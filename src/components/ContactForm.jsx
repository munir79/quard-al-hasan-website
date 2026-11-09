
"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, ChevronDown, Lock, Clock } from "lucide-react";
import { servicesData, companyInfo } from "@/data/companyData";

const initialState = () => ({
  name: "",
  email: "",
  phone: "",
  company: "",
  service: servicesData[0].title,
  message: "",
});

const labelClass = "block text-[15px] font-medium text-slate-200 mb-2";

const fieldClass =
  "w-full h-14 px-4 rounded-lg bg-[#0A0F1C] border border-slate-700/80 text-base text-white placeholder-slate-500 outline-none transition-colors hover:border-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15";

function Field({ id, label, required, children }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required && <span className="text-blue-400"> *</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
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
    <div className="rounded-2xl bg-[#0F1629] border border-slate-700/60 shadow-2xl shadow-black/30">
      {isSubmitted ? (
        <div className="px-6 py-14 sm:px-12 sm:py-20 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
            <CheckCircle2 size={34} />
          </div>
          <h3 className="text-3xl font-semibold text-white">Thank you, we have your request</h3>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-300">
            Your inquiry has been received by the {companyInfo.name} team in Brickfields, Kuala
            Lumpur. A solutions architect will contact you within 24 business hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setFormData(initialState());
              }}
              className="h-12 rounded-lg border border-slate-600 px-6 text-[15px] font-medium text-slate-200 transition-colors hover:bg-white/5"
            >
              Send another inquiry
            </button>
            <a
              href="https://wa.me/60178947597?text=Hi%20Qardh%20Al%20Hasan%20Fintech%2C%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-full bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] px-7 text-[15px] font-bold text-white shadow-md shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95"
            >
              Continue on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 sm:p-10">
          {/* Header */}
          <div className="mb-8 border-b border-slate-700/60 pb-8">
            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Request a consultation
            </h3>
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-400">
              Tell us about your project and we will come back with next steps.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field id="name" label="Full name" required>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ahmad Razif"
                  className={fieldClass}
                />
              </Field>

              <Field id="email" label="Work email" required>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={fieldClass}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field id="phone" label="Phone / WhatsApp">
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+60 1x-xxx xxxx"
                  className={fieldClass}
                />
              </Field>

              <Field id="company" label="Company">
                <input
                  id="company"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Global Tech Sdn Bhd"
                  className={fieldClass}
                />
              </Field>
            </div>

            <Field id="service" label="Service required" required>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${fieldClass} appearance-none cursor-pointer pr-12`}
                >
                  {servicesData.map((srv) => (
                    <option key={srv.id} value={srv.title} className="bg-[#0F1629] text-white">
                      {srv.title} ({srv.subtitle})
                    </option>
                  ))}
                  <option value="Offshore Development Team" className="bg-[#0F1629] text-white">
                    Offshore Dedicated Tech Team
                  </option>
                  <option value="Complete Digital Transformation" className="bg-[#0F1629] text-white">
                    Full Digital Transformation / Enterprise Consulting
                  </option>
                </select>
                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </Field>

            <Field id="message" label="Project details" required>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your goals, timeline and any requirements."
                className={`${fieldClass} h-auto min-h-[150px] resize-y py-3.5 leading-relaxed`}
              />
            </Field>
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#753DED] via-[#524EEC] to-[#2E5FEB] hover:from-[#6A32E3] hover:via-[#4741E0] hover:to-[#2254E0] text-base font-bold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.01] active:scale-95 transition-all focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send request
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </>
              )}
            </button>

            <div className="mt-5 flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <span className="inline-flex items-center gap-2">
                <Clock size={16} className="text-slate-500" />
                We reply within 24 business hours
              </span>
              <span className="inline-flex items-center gap-2">
                <Lock size={16} className="text-slate-500" />
                Your details stay confidential
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}