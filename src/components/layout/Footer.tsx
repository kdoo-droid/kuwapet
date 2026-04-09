import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer
      className="w-full border-t mt-24"
      style={{
        backgroundColor: "var(--color-bark)",
        borderColor: "var(--color-bark)",
        color: "var(--color-oat)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold hover:opacity-80 transition-opacity"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-dusty-rose)" }}
            >
              {site.name}
            </Link>
            <p
              className="mt-3 text-sm leading-relaxed opacity-70"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {site.tagline}
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                aria-label="KuwaPet on Instagram"
              >
                Instagram
              </a>
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                aria-label="KuwaPet on TikTok"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Link Groups */}
          {site.footerLinks.map((group) => (
            <div key={group.group}>
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4 opacity-50"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {group.group}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div
          className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs opacity-40"
          style={{ borderColor: "rgba(245,238,223,0.15)" }}
        >
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Questions?{" "}
            <a
              href={`mailto:${site.email}`}
              className="underline hover:opacity-100"
            >
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
