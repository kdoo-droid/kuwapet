import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center px-6 text-center"
      style={{ backgroundColor: "var(--color-paper)" }}
    >
      <div className="max-w-md">
        <p
          className="text-8xl font-bold mb-4 leading-none"
          style={{ color: "var(--color-mulberry)", opacity: 0.15 }}
        >
          404
        </p>
        <h1
          className="text-4xl md:text-5xl mb-4"
          style={{ color: "var(--color-ink)", fontWeight: 600 }}
        >
          Page not found.
        </h1>
        <p className="text-base mb-8" style={{ color: "var(--color-bark)" }}>
          The page you were looking for doesn&apos;t exist. It may have been moved, or the URL might be off.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 text-sm font-semibold rounded-full transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "var(--color-mulberry)", color: "var(--color-oat)" }}
          >
            Back to Home
          </Link>
          <Link
            href="/shop"
            className="px-6 py-3 text-sm font-semibold rounded-full border transition-all hover:opacity-80"
            style={{ borderColor: "var(--color-mulberry)", color: "var(--color-mulberry)" }}
          >
            Shop KuwaPet
          </Link>
        </div>
      </div>
    </section>
  );
}
