"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: "rgba(254,250,243,0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderColor: "var(--color-line)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl tracking-tight hover:opacity-80 transition-opacity"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-mulberry)",
            fontWeight: 700,
          }}
        >
          {site.name}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-opacity hover:opacity-70 relative"
                style={{
                  color: active ? "var(--color-mulberry)" : "var(--color-bark)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {item.label}
                {active && (
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-px"
                    style={{ backgroundColor: "var(--color-mulberry)" }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/shop"
            className="px-5 py-2 text-sm font-semibold rounded-full transition-all hover:opacity-90 hover:shadow-md"
            style={{
              backgroundColor: "var(--color-mulberry)",
              color: "var(--color-oat)",
            }}
          >
            Shop KuwaPet
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--color-ink)" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
            style={{ backgroundColor: "var(--color-ink)" }}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--color-ink)" }}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "400px" : "0px",
          borderBottom: mobileOpen ? "1px solid var(--color-line)" : "none",
        }}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-base py-1"
                style={{
                  color: active ? "var(--color-mulberry)" : "var(--color-bark)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/shop"
            className="mt-1 px-5 py-3 text-sm font-semibold rounded-full text-center"
            style={{
              backgroundColor: "var(--color-mulberry)",
              color: "var(--color-oat)",
            }}
          >
            Shop KuwaPet
          </Link>
        </div>
      </div>
    </header>
  );
}
