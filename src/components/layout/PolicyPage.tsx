import Link from "next/link";

interface Section {
  heading: string;
  body: string | string[];
}

interface PolicyPageProps {
  eyebrow: string;
  title: string;
  intro?: string;
  lastUpdated?: string;
  sections: Section[];
}

export function PolicyPage({ eyebrow, title, intro, lastUpdated, sections }: PolicyPageProps) {
  return (
    <>
      {/* Header */}
      <section
        className="py-16 px-6 border-b"
        style={{
          backgroundColor: "var(--color-oat)",
          borderColor: "var(--color-line)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-mulberry)" }}
          >
            {eyebrow}
          </p>
          <h1
            className="text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)", fontWeight: 600 }}
          >
            {title}
          </h1>
          {lastUpdated && (
            <p
              className="mt-3 text-sm opacity-50"
              style={{ color: "var(--color-bark)" }}
            >
              Last updated: {lastUpdated}
            </p>
          )}
          {intro && (
            <p
              className="mt-4 text-base leading-relaxed max-w-xl"
              style={{ color: "var(--color-bark)" }}
            >
              {intro}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
              >
                {section.heading}
              </h2>
              {Array.isArray(section.body) ? (
                <ul className="space-y-2">
                  {section.body.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed flex gap-2"
                      style={{ color: "var(--color-bark)" }}
                    >
                      <span style={{ color: "var(--color-mulberry)" }}>–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-bark)" }}
                >
                  {section.body}
                </p>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-14 pt-8 border-t text-sm"
          style={{ borderColor: "var(--color-line)", color: "var(--color-bark)" }}
        >
          Questions about this policy?{" "}
          <Link
            href="/contact"
            className="underline underline-offset-2"
            style={{ color: "var(--color-mulberry)" }}
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
