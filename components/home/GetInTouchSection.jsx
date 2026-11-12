"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Send,
  Loader2,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa6";

/**
 * Editable corporate contact details & map embed configuration.
 * Update the head office address, phone number, or Google Maps embed URL here.
 */
const CONTACT_INFO = {
  officeTitle: "Corporate Head Office",
  address: "Dhaka Corporate Office, Uttara / Banani, Dhaka, Bangladesh",
  phoneDisplay: "+880 1700-000000",
  phoneHref: "tel:+8801700000000",
  email: "growtechhr@gmail.com",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Dhaka,%20Bangladesh&t=&z=12&ie=UTF8&iwloc=&output=embed",
  socials: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/fishtech-bd-limited/posts/",
      icon: FaLinkedinIn,
      hoverClass: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/fishtechltd",
      icon: FaFacebookF,
      hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@FishtechBDLimited",
      icon: FaYoutube,
      hoverClass: "hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white",
    },
  ],
};

const INITIAL_FORM_STATE = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const INPUT_BASE_CLASS =
  "w-full min-h-[48px] rounded-xl border border-slate-300/90 bg-white px-4 py-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:border-[#004494] focus:outline-none focus:ring-2 focus:ring-[#0084d6]/25 user-invalid:border-red-500 user-invalid:bg-red-50/40 user-valid:border-emerald-500/60";

export default function GetInTouchSection({
  eyebrow = "Get in Touch",
  headingStart = "Let’s Start a",
  headingHighlight = "Conversation",
  subtitle = "Whether you are a commercial farmer, hatchery partner, dealer, or researcher, our team is ready to assist you.",
  contact = CONTACT_INFO,
}) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // TODO: Connect backend email API later
    setIsSubmitting(true);
    setIsSubmitted(false);

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setFormData(INITIAL_FORM_STATE);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section
      id="contact"
      aria-labelledby="get-in-touch-heading"
      className="relative  pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-28 lg:pb-32 overflow-x-clip"
    >
      {/* Subtle LightCastle-inspired corner glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-50/90 blur-3xl"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14 items-start">
          {/* ======================================================== */}
          {/* LEFT COLUMN: Contact Header & Interactive Inquiry Form   */}
          {/* ======================================================== */}
          <div className="lg:col-span-7">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#004494]">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-500"
                />
                <span>{eyebrow}</span>
              </div>

              <h2
                id="get-in-touch-heading"
                className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[40px] lg:leading-[1.16]"
              >
                {headingStart}{" "}
                <span className="text-[#004494]">{headingHighlight}</span>
              </h2>

              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {subtitle}
              </p>

              <div
                aria-hidden="true"
                className="h-1 w-16 rounded-full bg-gradient-to-r from-[#004494] via-[#0084d6] to-emerald-500"
              />
            </div>

            <form
              method="POST"
              aria-labelledby="get-in-touch-heading"
              onSubmit={handleSubmit}
              className="mt-8 rounded-2xl border border-slate-200/85 bg-[#F8FAFC]/70 p-6 sm:p-8 shadow-[0_2px_16px_-6px_rgba(15,23,42,0.06)] space-y-5"
            >
              {/* Inline Success Alert */}
              {isSubmitted && (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3.5 text-sm text-emerald-900"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  <p className="leading-relaxed font-medium">
                    Thank you! Your message has been received. Our team at{" "}
                    <span className="font-bold text-emerald-800">
                      {contact.email}
                    </span>{" "}
                    will get back to you soon.
                  </p>
                </div>
              )}

              {/* Full Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-full-name"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Full Name{" "}
                  <span className="text-red-600" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="contact-full-name"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  enterKeyHint="next"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={INPUT_BASE_CLASS}
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-slate-800"
                  >
                    Email Address{" "}
                    <span className="text-red-600" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    autoCorrect="off"
                    autoCapitalize="none"
                    spellCheck={false}
                    enterKeyHint="next"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={INPUT_BASE_CLASS}
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-semibold text-slate-800"
                  >
                    Phone Number{" "}
                    <span className="text-red-600" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    inputMode="tel"
                    enterKeyHint="next"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1XXX-XXXXXX"
                    className={INPUT_BASE_CLASS}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Message{" "}
                  <span className="text-red-600" aria-hidden="true">
                    *
                  </span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your farm, laboratory test needs, dealership inquiry, or partnership..."
                  className="w-full rounded-xl border border-slate-300/90 bg-white px-4 py-3 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:border-[#004494] focus:outline-none focus:ring-2 focus:ring-[#0084d6]/25 user-invalid:border-red-500 user-invalid:bg-red-50/40 user-valid:border-emerald-500/60"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full min-h-[48px] cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#004494] px-6 py-3.5 text-sm font-bold tracking-wide text-white shadow-md shadow-[#004494]/20 transition-all duration-200 hover:bg-[#003370] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: Corporate Info, Socials & Google Map       */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-200/85 bg-[#F8FAFC] p-6 sm:p-8 shadow-[0_2px_16px_-6px_rgba(15,23,42,0.06)] space-y-6">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 sm:text-xl">
                  Connect Directly
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  Reach our Dhaka head office or technical support desk directly.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#004494]/10 text-[#004494]">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {contact.officeTitle}
                    </p>
                    <p className="mt-0.5 text-sm font-medium leading-relaxed text-slate-800">
                      {contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0084d6]/10 text-[#0084d6]">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Phone &amp; Advisory Desk
                    </p>
                    <a
                      href={contact.phoneHref}
                      className="mt-0.5 inline-block text-sm font-semibold text-slate-800 transition-colors hover:text-[#004494]"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Official Email
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="mt-0.5 inline-block break-all text-sm font-semibold text-[#004494] transition-colors hover:text-[#0084d6]"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Official Social Media Links */}
              <div className="border-t border-slate-200/80 pt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Follow Fishtech BD
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {contact.socials.map((social) => {
                    const SocialIcon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Fishtech BD on ${social.name}`}
                        className={`inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0084d6] ${social.hoverClass}`}
                      >
                        <SocialIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{social.name}</span>
                        <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Embedded Compact Responsive Google Map */}
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
              <iframe
                title="Fishtech BD Limited Dhaka Corporate Office Location Map"
                src={contact.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full border-0 sm:h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

