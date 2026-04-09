"use client";

import { useState } from "react";

export function AnnouncementBar({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      className="w-full text-center text-xs py-2 px-4 relative"
      style={{ backgroundColor: "var(--color-mulberry)", color: "var(--color-oat)" }}
    >
      <span style={{ fontFamily: "var(--font-body)" }}>{message}</span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Close announcement"
      >
        ✕
      </button>
    </div>
  );
}
