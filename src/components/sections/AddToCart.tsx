"use client";

import { useState } from "react";

export function AddToCart() {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex gap-3 mb-5">
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-full border"
        style={{ borderColor: "var(--color-line)" }}
      >
        <button
          className="w-6 h-6 flex items-center justify-center text-lg leading-none"
          style={{ color: "var(--color-bark)" }}
          aria-label="Decrease quantity"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
        >
          −
        </button>
        <span
          className="w-6 text-center text-sm font-medium"
          style={{ color: "var(--color-ink)" }}
        >
          {qty}
        </span>
        <button
          className="w-6 h-6 flex items-center justify-center text-lg leading-none"
          style={{ color: "var(--color-bark)" }}
          aria-label="Increase quantity"
          onClick={() => setQty((q) => q + 1)}
        >
          +
        </button>
      </div>
      <button
        className="flex-1 py-3.5 text-base font-semibold rounded-full transition-all hover:opacity-90 hover:shadow-lg"
        style={{ backgroundColor: "var(--color-mulberry)", color: "var(--color-oat)" }}
      >
        Add to Cart
      </button>
    </div>
  );
}
