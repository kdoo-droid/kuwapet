"use client";

import { useState } from "react";
import type { FAQ } from "@/content/faqs";

export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {faqs.map((faq, idx) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="py-1"
            style={{ borderTop: idx > 0 ? "1px solid var(--color-line)" : undefined }}
          >
            <button
              className="w-full flex justify-between items-center py-4 text-left gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-mulberry)] rounded-sm"
              style={{
                color: "var(--color-ink)",
              }}
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
            >
              <span
                className="text-base font-medium leading-snug"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink)" }}
              >
                {faq.question}
              </span>
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-transform"
                style={{
                  backgroundColor: isOpen ? "var(--color-mulberry)" : "var(--color-line)",
                  color: isOpen ? "var(--color-oat)" : "var(--color-bark)",
                  transform: isOpen ? "rotate(45deg)" : "none",
                }}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                className="pb-4 text-sm leading-relaxed pr-10"
                style={{ color: "var(--color-bark)" }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
