import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/content/products";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Shop",
  description: `Shop ${site.name} — simple, thoughtful toppers for dogs. Starting with our Daily Mulberry Topper.`,
};

export default function ShopPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative overflow-hidden py-24 px-6 text-center"
        style={{ backgroundColor: "var(--color-dark)" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/farm-aerial.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>
        <div className="relative">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-mulberry-light)" }}
          >
            Shop KuwaPet
          </p>
          <h1
            className="text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-oat)", fontWeight: 600 }}
          >
            One product. Done right.
          </h1>
          <p
            className="mt-4 text-lg max-w-lg mx-auto"
            style={{ color: "rgba(244,237,224,0.7)" }}
          >
            We launched with one topper because we believe in doing one thing well. More is coming.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl overflow-hidden group"
              style={{
                backgroundColor: "var(--color-paper)",
                border: "1px solid var(--color-line)",
                boxShadow: "0 2px 16px rgba(106,33,67,0.05)",
              }}
            >
              {/* Image */}
              <Link href={`/product/${product.slug}`}>
                <div className="aspect-square relative overflow-hidden cursor-pointer">
                  <Image
                    src="/images/powder-bowl.jpg"
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </Link>
              {/* Info */}
              <div className="p-6">
                <h2
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
                >
                  {product.name}
                </h2>
                <p
                  className="text-sm mb-4 leading-relaxed"
                  style={{ color: "var(--color-bark)" }}
                >
                  {product.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-mulberry)" }}
                  >
                    Price coming soon
                  </span>
                  <Link
                    href={`/product/${product.slug}`}
                    className="px-5 py-2.5 text-sm font-semibold rounded-full transition-all hover:opacity-90"
                    style={{
                      backgroundColor: "var(--color-mulberry)",
                      color: "var(--color-oat)",
                    }}
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
