import type { Metadata } from "next";
import Link from "next/link";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about KuwaPet, our Mulberry Topper, how to use it, shipping, and returns.",
};

const categories: { id: string; label: string }[] = [
  { id: "product", label: "Product" },
  { id: "usage", label: "Usage" },
  { id: "shipping", label: "Shipping" },
  { id: "returns", label: "Returns" },
  { id: "brand", label: "About KuwaPet" },
];

export default function FaqPage() {
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
          Frequently Asked Questions
        </p>
        <h1
          className="text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)", fontWeight: 600 }}
        >
          Good questions deserve honest answers.
        </h1>
        <p
          className="mt-4 text-lg max-w-lg mx-auto"
          style={{ color: "var(--color-bark)" }}
        >
          Can&apos;t find what you&apos;re looking for?{" "}
          <Link
            href="/contact"
            className="underline underline-offset-2"
            style={{ color: "var(--color-mulberry)" }}
          >
            Contact us
          </Link>{" "}
          and we&apos;ll get back to you.
        </p>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        {categories.map((cat) => {
          const catFaqs = faqs.filter((f) => f.category === cat.id);
          if (catFaqs.length === 0) return null;
          return (
            <div key={cat.id} className="mb-14">
              <h2
                className="text-xs font-semibold uppercase tracking-widest mb-6 pb-3 border-b"
                style={{
                  color: "var(--color-mulberry)",
                  borderColor: "var(--color-line)",
                }}
              >
                {cat.label}
              </h2>
              <FaqAccordion faqs={catFaqs} />
            </div>
          );
        })}

        {/* Still have questions */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{
            backgroundColor: "var(--color-oat)",
            border: "1px solid var(--color-line)",
          }}
        >
          <h3
            className="text-xl font-semibold mb-2"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
          >
            Still have questions?
          </h3>
          <p
            className="text-sm mb-5"
            style={{ color: "var(--color-bark)" }}
          >
            We&apos;re here. Send us a message and we&apos;ll get back to you within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-sm font-semibold rounded-full transition-all hover:opacity-90"
            style={{
              backgroundColor: "var(--color-mulberry)",
              color: "var(--color-oat)",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
