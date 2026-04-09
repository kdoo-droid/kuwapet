import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Mulberry",
  description:
    "Why did KuwaPet choose mulberry as our hero ingredient? Learn the simple, honest story behind our mulberry powder topper for dogs.",
};

const reasons = [
  {
    number: "01",
    title: "It's a real fruit dogs can eat.",
    body: "Mulberry is a dog-safe fruit. Not a complex extract. Not a patented compound with a branded name. A genuine fruit — one you could describe in a single sentence.",
  },
  {
    number: "02",
    title: "The ingredient story is clean.",
    body: "We wanted to build a brand around one thing rather than twelve. Mulberry gave us a starting point that was honest, recognizable, and hard to over-spin.",
  },
  {
    number: "03",
    title: "It fits a daily ritual naturally.",
    body: "A fine powder you sprinkle on food. Simple preparation. Simple routine. That's what we were looking for.",
  },
  {
    number: "04",
    title: "It's different — in a good way.",
    body: "Walk the pet aisle and you'll see the same handful of ingredients recycled across every product. Mulberry is genuinely distinct, without feeling forced or trendy.",
  },
];

export default function WhyMulberryPage() {
  return (
    <>
      {/* ── HERO — dark with farm background ── */}
      <section
        className="relative overflow-hidden min-h-[70vh] flex items-end pb-20"
        style={{ backgroundColor: "var(--color-dark)" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/farm-aerial.jpg"
            alt="Aerial view of the mulberry farm"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(28,23,16,0.3) 0%, rgba(28,23,16,0.85) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center w-full">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-mulberry-light)" }}
          >
            The ingredient story
          </p>
          <h1
            className="text-5xl md:text-7xl leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-oat)", fontWeight: 600 }}
          >
            Why{" "}
            <em style={{ color: "var(--color-mulberry-light)", fontStyle: "italic" }}>
              mulberry?
            </em>
          </h1>
          <p
            className="mt-5 text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(244,237,224,0.75)" }}
          >
            Because we wanted to start with something real. One fruit. One story. One honest daily addition to your dog&apos;s bowl.
          </p>
        </div>
      </section>

      {/* ── WHAT IS MULBERRY — split ── */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="rounded-3xl overflow-hidden aspect-square relative">
          <Image
            src="/images/leaf-harvest.jpg"
            alt="Hands holding fresh mulberry leaves harvested from the farm"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
          >
            What is mulberry, exactly?
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "var(--color-bark)" }}
          >
            Mulberry is a fruit from the Morus tree — cultivated for thousands of years across Asia, Europe, and North America. It&apos;s the same plant behind mulberry silk, mulberry teas, and centuries of culinary tradition.
          </p>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "var(--color-bark)" }}
          >
            In its dried, powdered form, mulberry becomes a versatile ingredient — one with a naturally mild flavor and a simple, legible food identity.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-bark)" }}
          >
            It&apos;s dog-safe. It&apos;s real food. It&apos;s something you can actually explain without a disclaimer.
          </p>
        </div>
      </section>

      {/* ── POWDER CLOSE-UP — full-width dark panel ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--color-dark)" }}
      >
        <div className="grid md:grid-cols-2">
          <div className="aspect-square md:aspect-auto md:min-h-96 relative">
            <Image
              src="/images/powder-bowl.jpg"
              alt="Fine mulberry powder mounded in a dark ceramic bowl"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex items-center px-10 py-16 md:py-20">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "var(--color-mulberry-light)" }}
              >
                Pure powder
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold mb-5 leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-oat)" }}
              >
                Ground mulberry. Nothing else.
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "rgba(244,237,224,0.7)" }}
              >
                The powder form makes it easy — sprinkle on any food, mix gently, done. No strong taste to compete with your dog&apos;s regular meal. Just a clean, fine addition.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(244,237,224,0.7)" }}
              >
                Simple format for a simple daily habit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUR REASONS — light section ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)", fontWeight: 600 }}
            >
              Four honest reasons.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div
                key={r.number}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "var(--color-paper)",
                  border: "1px solid var(--color-line)",
                }}
              >
                <p
                  className="text-4xl font-bold mb-4 leading-none opacity-15"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-mulberry)" }}
                >
                  {r.number}
                </p>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
                >
                  {r.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-bark)" }}
                >
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FARM STORY STRIP ── */}
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{ backgroundColor: "var(--color-oat)" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)", fontWeight: 600 }}
            >
              We believe in starting small and doing it right.
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-bark)" }}
            >
              The pet supplement aisle is full of products trying to claim everything. We set out to build something different — a brand that trusts its customers enough to keep it simple.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--color-bark)" }}
            >
              Mulberry is where KuwaPet starts. More ingredients, more products, more rituals — those will come in time. But they&apos;ll all start from the same place: honesty first.
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
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square relative">
            <Image
              src="/images/farm-field.jpg"
              alt="Mulberry farm field at golden hour"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
