"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  backgroundColor: "var(--color-paper)",
  border: "1.5px solid var(--color-line)",
  color: "var(--color-ink)",
  fontSize: "0.9rem",
};
const inputClass = "w-full px-4 py-3 rounded-xl outline-none transition-colors";
const labelStyle: React.CSSProperties = { color: "var(--color-ink)" };

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-64"
        style={{
          backgroundColor: "var(--color-oat)",
          border: "1px solid var(--color-line)",
        }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: "var(--color-leaf)", color: "white" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          className="text-xl font-semibold mb-2"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
        >
          Message received.
        </h3>
        <p
          className="text-sm"
          style={{ color: "var(--color-bark)" }}
        >
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={labelStyle}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={inputClass}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={labelStyle}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className={inputClass}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1.5" style={labelStyle}>
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          className={`${inputClass} appearance-none`}
          style={inputStyle}
        >
          <option value="">Select a topic</option>
          <option value="product">Product question</option>
          <option value="order">Order or shipping</option>
          <option value="return">Return or refund</option>
          <option value="wholesale">Wholesale inquiry</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={labelStyle}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what's on your mind."
          className={`${inputClass} resize-none`}
          style={inputStyle}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 text-base font-semibold rounded-full transition-all hover:opacity-90 hover:shadow-lg"
        style={{
          backgroundColor: "var(--color-mulberry)",
          color: "var(--color-oat)",
        }}
      >
        Send Message
      </button>
    </form>
  );
}
