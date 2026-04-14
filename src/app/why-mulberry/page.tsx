import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Mulberry",
  description:
    "Why did KuwaPet choose Japanese mulberry leaf? Learn how DNJ, polyphenols, and flavonoids make it a clean daily topper for dogs.",
};

const reasons = [
  {
    number: "01",
    title: "It naturally contains DNJ.",
    body: "Mulberry leaf contains 1-Deoxynojirimycin (DNJ), a naturally occurring compound studied for its role in supporting healthy glucose metabolism. It's the reason we chose this ingredient — not because it's trendy, but because the story is real.",
  },
  {
    number: "02",
    title: "The ingredient story is clean.",
    body: "100% Food-Grade Japanese Mulberry Leaf Powder. No extracts. No blends. No branded compounds. One ingredient you can describe in a single sentence — and read off the label in seconds.",
  },
  {
    number: "03",
    title: "Timing with meals makes it work.",
    body: "Metabolic support is most effective at the time of feeding. KuwaPet is designed to be added before or during your dog's meal — so it integrates directly into the body's natural digestive response.",
  },
  {
    number: "04",
    title: "It's genuinely different.",
    body: "Walk the pet aisle and you'll see the same handful of ingredients recycled across every product. Japanese Premium Mulberry Leaf stands apart — matcha-grade quality, real food origin, and a substantive reason to be there.",
  },
];

export default function WhyMulberryPage() {
  return (
    <>
      {/* HERO */}
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
                "linear-gradient(to bottom, rgba(28,23,16,0.3) 0%, rgba(28,23,16,0.88) 100%)",
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
            Because we wanted to start with something real. One fruit. One honest daily addition to your dog&apos;s bowl — backed by a compound worth knowing about.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
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
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--color-mulberry)" }}
          >
            How it works
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
          >
            Mulberry leaf contains DNJ — a compound that works at mealtime.
          </h2>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "var(--color-bark)" }}
          >
            Mulberry leaf naturally contains 1-Deoxynojirimycin (DNJ), a compound studied for its role in supporting healthy glucose metabolism. When added before or during meals, it supports the body&apos;s natural metabolic response during digestion.
          </p>
          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "var(--color-bark)" }}
          >
            It also contains polyphenols, flavonoids, and dietary fiber — naturally occurring components that contribute to its clean nutritional profile.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-bark)" }}
          >
            This isn&apos;t a complex extract or a lab-assembled blend. It&apos;s a single food-grade ingredient — Japanese Premium Mulberry Leaf Powder — doing what it naturally does.
          </p>
        </div>
      </section>

      {/* POWDER CLOSE-UP — dark panel */}
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
                100% Mulberry Leaf. Nothing else.
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "rgba(244,237,224,0.7)" }}
              >
                Premium Japanese Mulberry Leaf ground into a fine powder — matcha-grade quality with no additives and no fillers. The format makes it simple: sprinkle before or during your dog&apos;s meal, mix gently, done.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(244,237,224,0.7)" }}
              >
                Consistent daily use is how it works. One clean addition, every meal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR REASONS */}
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

      {/* KEY BENEFITS */}
      <section
        className="py-24 px-6"
        style={{ backgroundColor: "var(--color-dark)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-mulberry-light)" }}
            >
              Key benefits
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-oat)", fontWeight: 600 }}
            >
              What daily use supports.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Healthy glucose metabolism",
                body: "DNJ is studied for its role in supporting how the body handles glucose — a process that happens with every meal.",
              },
              {
                title: "Balanced energy levels",
                body: "Supporting healthy metabolic function helps maintain steady energy throughout the day.",
              },
              {
                title: "Daily metabolic support",
                body: "Metabolic balance is built through consistent daily habits, not single events. KuwaPet is designed for exactly that.",
              },
              {
                title: "Easy feeding integration",
                body: "No separate routine. No preparation. Add it to the bowl before or during your dog's regular meal — and that's it.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl p-7"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(244,237,224,0.1)",
                }}
              >
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-oat)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(244,237,224,0.6)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
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
              One ingredient. A whole daily system.
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-bark)" }}
            >
              KuwaPet turns a single, clean ingredient into a structured daily addition — designed to support your dog&apos;s metabolic health at the moment it matters most: every meal.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--color-bark)" }}
            >
              200g. 90-day supply. Made in the USA.
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
          <div className="aspect-square relative rounded-3xl overflow-hidden">
            <Image
              src="/images/product-main.png"
              alt="KuwaPet Daily Mulberry Topper — 200g tub"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
