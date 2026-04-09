import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { heroProduct } from "@/content/products";
import { site } from "@/content/site";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { EmailSignup } from "@/components/sections/EmailSignup";
import { FadeIn } from "@/components/ui/FadeIn";
import { productFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden min-h-[90vh] flex items-center"
        style={{ backgroundColor: "var(--color-dark)" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/farm-field.jpg"
            alt="Mulberry farm at golden hour"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(28,23,16,0.90) 45%, rgba(28,23,16,0.40) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Hero copy — no fade, visible immediately */}
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(200,127,160,0.18)",
                color: "var(--color-mulberry-light)",
                border: "1px solid rgba(200,127,160,0.25)",
              }}
            >
              Daily topper for dogs
            </span>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
              style={{ color: "var(--color-oat)", fontWeight: 600 }}
            >
              Make mealtime feel more{" "}
              <em style={{ color: "var(--color-mulberry-light)", fontStyle: "italic" }}>
                intentional.
              </em>
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-md"
              style={{ color: "rgba(244,237,224,0.75)" }}
            >
              A simple mulberry topper made for dogs. Sprinkle it on. That&apos;s it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/shop"
                className="px-7 py-3.5 text-base font-semibold rounded-full text-center transition-all hover:opacity-90 hover:shadow-xl"
                style={{ backgroundColor: "var(--color-mulberry)", color: "var(--color-oat)" }}
              >
                Shop KuwaPet
              </Link>
              <Link
                href="/why-mulberry"
                className="px-7 py-3.5 text-base font-semibold rounded-full text-center border transition-all hover:bg-white/10"
                style={{ borderColor: "rgba(244,237,224,0.4)", color: "var(--color-oat)" }}
              >
                Why Mulberry?
              </Link>
            </div>
          </div>

          <div className="hidden md:flex justify-end">
            <div
              className="relative w-72 h-72 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(244,237,224,0.15)" }}
            >
              <Image
                src="/images/powder-bowl.jpg"
                alt="Mulberry powder in a ceramic bowl"
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section
        className="border-y py-5"
        style={{ borderColor: "var(--color-line)", backgroundColor: "var(--color-paper)" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm" style={{ color: "var(--color-bark)" }}>
            {["Made for dogs", "Simple ingredient story", "No fillers or synthetic blends", "Easy daily topper", "US shipping"].map((badge) => (
              <li key={badge} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--color-mulberry)" }} aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHAT IS IT ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 md:order-1 rounded-3xl overflow-hidden aspect-square relative">
            <Image
              src="/images/leaf-harvest.jpg"
              alt="Hands holding fresh mulberry leaves from the farm"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </FadeIn>
          <FadeIn className="order-1 md:order-2" delay={100}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-mulberry)" }}>
              One ingredient. One ritual.
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6" style={{ color: "var(--color-ink)", fontWeight: 600 }}>
              The calmer side of the supplement aisle.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: "var(--color-bark)" }}>
              Most pet wellness products compete with longer ingredient lists. We went the other direction. KuwaPet starts with mulberry — one intentional ingredient — and builds a simple daily ritual around it.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-bark)" }}>
              No synthetic blends. No jargon-heavy label. Just an honest topper that fits any bowl.
            </p>
            <Link
              href="/why-mulberry"
              className="inline-block mt-8 px-6 py-3 text-sm font-semibold rounded-full border transition-all hover:opacity-80"
              style={{ borderColor: "var(--color-mulberry)", color: "var(--color-mulberry)" }}
            >
              Learn about mulberry →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── HOW TO USE — dark ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-dark)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-mulberry-light)" }}>
                How it works
              </p>
              <h2 className="text-4xl md:text-5xl" style={{ color: "var(--color-oat)", fontWeight: 600 }}>
                Three steps. Every day.
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Fill the bowl", desc: "Prepare your dog's regular meal however you normally would." },
              { step: "02", title: "Sprinkle it on", desc: "Add the recommended amount of KuwaPet Mulberry Topper directly on top." },
              { step: "03", title: "Serve with intention", desc: "That's it. Same bowl. A little more thoughtful." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 100}>
                <div
                  className="rounded-2xl p-8 h-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(244,237,224,0.1)" }}
                >
                  <p className="text-5xl font-bold mb-4 leading-none" style={{ color: "var(--color-mulberry-light)", opacity: 0.4 }}>
                    {item.step}
                  </p>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--color-oat)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(244,237,224,0.6)" }}>
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INGREDIENT STORY ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-mulberry)" }}>
            Straight from the source
          </p>
          <h2 className="text-4xl md:text-5xl leading-tight mb-6" style={{ color: "var(--color-ink)", fontWeight: 600 }}>
            Mulberry. Just ground into powder.
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-bark)" }}>
            Our mulberry is grown on a dedicated farm and processed into a fine powder — the same ingredient, kept simple. Nothing added. Nothing hidden.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-bark)" }}>
            You can read the entire label in ten seconds. That&apos;s intentional.
          </p>
        </FadeIn>
        <FadeIn className="rounded-3xl overflow-hidden aspect-square relative" delay={150}>
          <Image
            src="/images/powder-bowl.jpg"
            alt="Fine mulberry powder in a dark ceramic bowl"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </FadeIn>
      </section>

      {/* ── PRODUCT HIGHLIGHT ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-oat)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-mulberry)" }}>
              One product. Done right.
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight mb-4" style={{ color: "var(--color-ink)", fontWeight: 600 }}>
              {heroProduct.name}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-bark)" }}>
              {heroProduct.shortDescription}
            </p>
            <ul className="flex flex-col gap-2.5 mb-8">
              {heroProduct.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm" style={{ color: "var(--color-bark)" }}>
                  <span
                    className="w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center text-[10px]"
                    style={{ backgroundColor: "var(--color-leaf)", color: "white" }}
                    aria-hidden="true"
                  >✓</span>
                  {h}
                </li>
              ))}
            </ul>
            <Link
              href={`/product/${heroProduct.slug}`}
              className="inline-block px-7 py-3.5 text-base font-semibold rounded-full transition-all hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "var(--color-mulberry)", color: "var(--color-oat)" }}
            >
              View Product
            </Link>
          </FadeIn>
          <FadeIn className="rounded-3xl overflow-hidden aspect-square relative" delay={150}>
            <Image
              src="/images/farm-aerial.jpg"
              alt="Aerial view of the mulberry farm — the source of KuwaPet ingredients"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ PREVIEW ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-mulberry)" }}>
                Common questions
              </p>
              <h2 className="text-4xl md:text-5xl" style={{ color: "var(--color-ink)", fontWeight: 600 }}>
                Good questions deserve honest answers.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <FaqAccordion faqs={productFaqs} />
            <div className="text-center mt-10">
              <Link
                href="/faq"
                className="text-sm font-medium underline underline-offset-4"
                style={{ color: "var(--color-mulberry)" }}
              >
                See all FAQs →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── EMAIL CTA ── */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/farm-field.jpg" alt="" fill className="object-cover" sizes="100vw" aria-hidden="true" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(122,37,80,0.82)" }} />
        </div>
        <FadeIn className="relative max-w-xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: "var(--color-oat)", fontWeight: 600 }}>
            Be the first to know.
          </h2>
          <p className="text-base mb-8 opacity-80" style={{ color: "var(--color-oat)" }}>
            Get launch updates, rituals, and the occasional mulberry fact.
          </p>
          <EmailSignup />
          <p className="text-xs mt-4 opacity-50" style={{ color: "var(--color-oat)" }}>
            No spam. Just the good stuff.
          </p>
        </FadeIn>
      </section>
    </>
  );
}
