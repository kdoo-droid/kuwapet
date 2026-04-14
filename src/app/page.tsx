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
      {/* HERO */}
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
                "linear-gradient(105deg, rgba(28,23,16,0.92) 45%, rgba(28,23,16,0.45) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
              style={{
                backgroundColor: "rgba(200,127,160,0.18)",
                color: "var(--color-mulberry-light)",
                border: "1px solid rgba(200,127,160,0.25)",
              }}
            >
              Japanese Premium Mulberry Leaf · Made in USA
            </span>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
              style={{ color: "var(--color-oat)", fontWeight: 600 }}
            >
              Daily metabolic support,{" "}
              <em style={{ color: "var(--color-mulberry-light)", fontStyle: "italic" }}>
                at every meal.
              </em>
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-md"
              style={{ color: "rgba(244,237,224,0.75)" }}
            >
              KuwaPet is a premium mulberry leaf topper for dogs. Add it before or during your dog&apos;s meal — one clean ingredient, every day.
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

          <div className="hidden md:flex justify-end items-center">
            <div className="relative w-[420px] h-[420px] rounded-3xl overflow-hidden">
              <Image
                src="/images/product-main.png"
                alt="KuwaPet Daily Mulberry Topper — 200g tub"
                fill
                className="object-contain"
                sizes="420px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section
        className="border-y py-5"
        style={{ borderColor: "var(--color-line)", backgroundColor: "var(--color-paper)" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm" style={{ color: "var(--color-bark)" }}>
            {[
              "100% Mulberry Leaf Powder",
              "No additives · No fillers",
              "Matcha-grade quality",
              "200g · 90-day supply",
              "Made in USA",
            ].map((badge) => (
              <li key={badge} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--color-mulberry)" }} aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT MAKES IT DIFFERENT */}
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
              A different approach
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6" style={{ color: "var(--color-ink)", fontWeight: 600 }}>
              Metabolic support starts at the bowl.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: "var(--color-bark)" }}>
              Most pet supplements focus on general wellness without addressing when metabolic stress actually occurs. KuwaPet is built on a different approach: metabolic support is most effective at the time of feeding.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--color-bark)" }}>
              By integrating directly into your dog&apos;s feeding routine, KuwaPet supports the body&apos;s natural metabolic response during digestion — when it matters most.
            </p>
            <Link
              href="/why-mulberry"
              className="inline-block mt-8 px-6 py-3 text-sm font-semibold rounded-full border transition-all hover:opacity-80"
              style={{ borderColor: "var(--color-mulberry)", color: "var(--color-mulberry)" }}
            >
              How it works →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* HOW TO USE — dark */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-dark)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-mulberry-light)" }}>
                How to use
              </p>
              <h2 className="text-4xl md:text-5xl" style={{ color: "var(--color-oat)", fontWeight: 600 }}>
                Simple. Consistent. Every meal.
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Prepare the meal",
                desc: "Get your dog's regular food ready however you normally would.",
              },
              {
                step: "02",
                title: "Add KuwaPet before or during feeding",
                desc: "Sprinkle the recommended amount directly onto your dog's meal. Timing with feeding is what makes it work.",
              },
              {
                step: "03",
                title: "Repeat daily",
                desc: "Consistent daily use is key. Same bowl. Same routine. That's the whole system.",
              },
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

      {/* INGREDIENT STORY */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <FadeIn direction="left">
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-mulberry)" }}>
            The ingredient
          </p>
          <h2 className="text-4xl md:text-5xl leading-tight mb-6" style={{ color: "var(--color-ink)", fontWeight: 600 }}>
            100% Food-Grade Japanese Mulberry Leaf Powder.
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-bark)" }}>
            Mulberry leaf naturally contains DNJ (1-Deoxynojirimycin), polyphenols, flavonoids, and dietary fiber. It&apos;s a genuine ingredient with a clean, legible story — not a complex extract with a branded name.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-bark)" }}>
            Matcha-grade quality. No additives. No fillers. You can read the entire label in ten seconds.
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

      {/* PRODUCT HIGHLIGHT */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-oat)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-mulberry)" }}>
              One product. Done right.
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight mb-2" style={{ color: "var(--color-ink)", fontWeight: 600 }}>
              {heroProduct.name}
            </h2>
            <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--color-leaf)" }}>
              200g · 90-day supply · Made in USA
            </p>
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
          <div className="aspect-square relative rounded-3xl overflow-hidden">
            <FadeIn className="absolute inset-0" delay={150}>
              <Image
                src="/images/product-main.png"
                alt="KuwaPet Daily Mulberry Topper — 200g tub"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="py-24 px-6" style={{ backgroundColor: "var(--color-dark)" }}>
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-mulberry-light)" }}>
                Who it&apos;s for
              </p>
              <h2 className="text-4xl md:text-5xl" style={{ color: "var(--color-oat)", fontWeight: 600 }}>
                Built for everyday dogs.
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Weight-conscious dogs",
                body: "A consistent daily addition for dogs whose owners are focused on maintaining a healthy weight and metabolism.",
              },
              {
                title: "Aging dogs",
                body: "Older dogs experience natural metabolic changes. KuwaPet integrates easily into an existing feeding routine.",
              },
              {
                title: "Health-conscious owners",
                body: "For owners who want a clean, straightforward daily addition — one ingredient, clearly labeled, simply used.",
              },
              {
                title: "Dogs that need routine",
                body: "Consistent daily use is how KuwaPet works best. It fits into any feeding routine without extra preparation.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <div
                  className="rounded-2xl p-7 h-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(244,237,224,0.1)" }}
                >
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--color-oat)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(244,237,224,0.6)" }}>
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
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

      {/* EMAIL CTA */}
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
            Get launch updates, feeding tips, and early access.
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
