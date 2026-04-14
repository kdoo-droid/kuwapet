import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { heroProduct } from "@/content/products";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { AddToCart } from "@/components/sections/AddToCart";
import { productFaqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: heroProduct.name,
  description: heroProduct.shortDescription,
};

export default function ProductPage() {
  const product = heroProduct;

  return (
    <>
      {/* Breadcrumb */}
      <nav
        className="max-w-6xl mx-auto px-6 pt-6 pb-2 text-xs"
        style={{ color: "var(--color-bark)" }}
        aria-label="Breadcrumb"
      >
        <ol className="flex gap-2 items-center">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href="/shop" className="hover:underline">Shop</Link></li>
          <li aria-hidden="true">/</li>
          <li
            className="font-medium"
            style={{ color: "var(--color-ink)" }}
            aria-current="page"
          >
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Main Product Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16 items-start">
        {/* Media Gallery */}
        <div className="sticky top-24">
          <div className="aspect-square relative rounded-3xl overflow-hidden">
            <Image
              src={product.images[0].src}
              alt={product.images[0].alt}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Thumbnail row */}
          <div className="mt-4 flex gap-3">
            {product.images.map((img, i) => (
              <div
                key={img.src}
                className="w-20 h-20 rounded-xl overflow-hidden relative"
                style={{
                  border: i === 0 ? "2px solid var(--color-mulberry)" : "1px solid var(--color-line)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Purchase Panel */}
        <div>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
            style={{
              backgroundColor: "rgba(106,33,67,0.08)",
              color: "var(--color-mulberry)",
            }}
          >
            Daily topper for dogs
          </span>

          <h1
            className="text-3xl md:text-4xl font-semibold leading-tight mb-3"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
          >
            {product.name}
          </h1>

          <p
            className="text-base mb-6 leading-relaxed"
            style={{ color: "var(--color-bark)" }}
          >
            {product.shortDescription}
          </p>

          {/* Price */}
          <div className="mb-6">
            <span
              className="text-2xl font-semibold"
              style={{ color: "var(--color-mulberry)" }}
            >
              Price coming soon
            </span>
            <span
              className="text-sm ml-2 opacity-50"
              style={{ color: "var(--color-bark)" }}
            >
              / {product.netWeight}
            </span>
          </div>

          {/* Highlights */}
          <ul className="mb-8 flex flex-col gap-2.5">
            {product.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 text-sm"
                style={{ color: "var(--color-bark)" }}
              >
                <span
                  className="mt-1 w-4 h-4 flex-shrink-0 rounded-full flex items-center justify-center text-[10px]"
                  style={{ backgroundColor: "var(--color-leaf)", color: "white" }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                {h}
              </li>
            ))}
          </ul>

          {/* Quantity + Add to Cart */}
          <AddToCart />

          <p
            className="text-xs opacity-50 mb-8"
            style={{ color: "var(--color-bark)" }}
          >
            {product.shippingNote}
          </p>

          {/* Details Tabs */}
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: "var(--color-line)" }}
          >
            {[
              {
                label: "Ingredients",
                content: product.ingredients,
              },
              {
                label: "Feeding Directions",
                content: product.feedingDirections,
              },
              {
                label: "Storage",
                content: product.storageInstructions,
              },
            ].map((tab, i) => (
              <div
                key={tab.label}
                className="px-5 py-4 border-b last:border-b-0"
                style={{ borderColor: "var(--color-line)" }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1.5"
                  style={{ color: "var(--color-mulberry)" }}
                >
                  {tab.label}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-bark)" }}
                >
                  {tab.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section
        className="py-16 px-6 border-t"
        style={{ borderColor: "var(--color-line)", backgroundColor: "var(--color-oat)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
          >
            About this product
          </h2>
          {product.longDescription.split("\n\n").map((para) => (
            <p
              key={para.slice(0, 40)}
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--color-bark)" }}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Product FAQs */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2
          className="text-2xl font-semibold mb-8 text-center"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
        >
          Questions about this product
        </h2>
        <FaqAccordion faqs={productFaqs} />
        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="text-sm font-medium underline underline-offset-4"
            style={{ color: "var(--color-mulberry)" }}
          >
            See all FAQs →
          </Link>
        </div>
      </section>
    </>
  );
}
