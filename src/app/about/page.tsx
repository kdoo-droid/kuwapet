import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "KuwaPet is a dog wellness brand built on the belief that better mealtime rituals don't need to be complicated. Learn the story behind the brand.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO — dark with founder photo ── */}
      <section
        className="relative overflow-hidden min-h-[65vh] flex items-end pb-16"
        style={{ backgroundColor: "var(--color-dark)" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/farm-founder.jpg"
            alt="The founder at the mulberry farm"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(28,23,16,0.2) 0%, rgba(28,23,16,0.80) 70%, rgba(28,23,16,0.95) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 w-full">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-mulberry-light)" }}
          >
            About KuwaPet
          </p>
          <h1
            className="text-5xl md:text-6xl leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-oat)", fontWeight: 600 }}
          >
            Built around{" "}
            <em style={{ color: "var(--color-mulberry-light)", fontStyle: "italic" }}>
              one simple idea.
            </em>
          </h1>
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="space-y-6">
          <p
            className="text-xl leading-relaxed"
            style={{
              color: "var(--color-ink)",
              fontWeight: 500,
            }}
          >
            The pet aisle felt overwhelming. That&apos;s where KuwaPet started.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-bark)" }}
          >
            Not with a breakthrough discovery or a dramatic founding story. Just a simple frustration: too many products, too many claims, and not enough brands willing to keep it honest.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-bark)" }}
          >
            The goal was to start with something simpler. One ingredient. One clear purpose. A daily ritual that actually fit into real dog-owner life without adding complexity.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-bark)" }}
          >
            Mulberry became that starting point. A clean fruit. A legible story. A product that could stand on its ingredient label alone.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-bark)" }}
          >
            KuwaPet was built to make daily dog care feel more thoughtful and less confusing. That&apos;s still the whole idea.
          </p>
        </div>
      </section>

      {/* ── FARM PHOTOS GRID — 3 across ── */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-2xl overflow-hidden aspect-square relative">
            <Image
              src="/images/leaf-harvest.jpg"
              alt="Fresh mulberry leaves harvested by hand"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square relative">
            <Image
              src="/images/farm-team.jpg"
              alt="The farm team celebrating after a harvest"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square relative col-span-2 md:col-span-1">
            <Image
              src="/images/production.jpg"
              alt="Production and processing of mulberry powder"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        className="py-20 px-6"
        style={{ backgroundColor: "var(--color-dark)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-oat)", fontWeight: 600 }}
            >
              What we stand for.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "✦",
                title: "Simplicity",
                body: "Clear ingredients. Clear instructions. Clear design. We believe less is easier to trust.",
              },
              {
                icon: "◎",
                title: "Honesty",
                body: "We don't make claims we can't back up. We don't invent urgency. We let the product speak for itself.",
              },
              {
                icon: "⊛",
                title: "Intentional Wellness",
                body: "Wellness-forward without the pseudoscience. Measured language, thoughtful routines, confidence without hype.",
              },
              {
                icon: "◈",
                title: "Ritual",
                body: "Small daily rituals are a form of care. We're here to make that easier — one bowl at a time.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(244,237,224,0.1)",
                }}
              >
                <span
                  className="text-2xl block mb-4"
                  style={{ color: "var(--color-mulberry-light)" }}
                  aria-hidden="true"
                >
                  {v.icon}
                </span>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-oat)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(244,237,224,0.6)" }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 text-center max-w-xl mx-auto">
        <h2
          className="text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)", fontWeight: 600 }}
        >
          Try the topper.
        </h2>
        <p
          className="text-base mb-8"
          style={{ color: "var(--color-bark)" }}
        >
          One product. Simple ritual. Start here.
        </p>
        <Link
          href="/shop"
          className="inline-block px-7 py-3.5 text-base font-semibold rounded-full transition-all hover:opacity-90 hover:shadow-lg"
          style={{
            backgroundColor: "var(--color-mulberry)",
            color: "var(--color-oat)",
          }}
        >
          Shop KuwaPet
        </Link>
      </section>
    </>
  );
}
