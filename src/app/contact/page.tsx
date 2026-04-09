import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with the KuwaPet team. We're here to help with questions about our products, orders, and anything else on your mind.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-20 px-6 text-center border-b"
        style={{
          backgroundColor: "var(--color-oat)",
          borderColor: "var(--color-line)",
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--color-mulberry)" }}
        >
          Get in touch
        </p>
        <h1
          className="text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)", fontWeight: 600 }}
        >
          We&apos;re here.
        </h1>
        <p
          className="mt-4 text-lg max-w-md mx-auto"
          style={{ color: "var(--color-bark)" }}
        >
          Questions, feedback, or just want to talk about dogs and mulberry? We&apos;d love to hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left: Info */}
        <div>
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
          >
            How to reach us
          </h2>
          <div className="space-y-6">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1.5"
                style={{ color: "var(--color-mulberry)" }}
              >
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-base hover:underline"
                style={{ color: "var(--color-ink)" }}
              >
                {site.email}
              </a>
              <p
                className="text-sm mt-1 opacity-60"
                style={{ color: "var(--color-bark)" }}
              >
                We respond within one business day.
              </p>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1.5"
                style={{ color: "var(--color-mulberry)" }}
              >
                Response time
              </p>
              <p
                className="text-base"
                style={{ color: "var(--color-ink)" }}
              >
                Monday – Friday
              </p>
              <p
                className="text-sm opacity-60"
                style={{ color: "var(--color-bark)" }}
              >
                We aim to respond within 24 hours.
              </p>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "var(--color-mulberry)" }}
              >
                Follow along
              </p>
              <div className="flex gap-4">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline underline-offset-2 hover:opacity-70"
                  style={{ color: "var(--color-bark)" }}
                >
                  Instagram
                </a>
                <a
                  href={site.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline underline-offset-2 hover:opacity-70"
                  style={{ color: "var(--color-bark)" }}
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <ContactForm />
      </section>
    </>
  );
}
