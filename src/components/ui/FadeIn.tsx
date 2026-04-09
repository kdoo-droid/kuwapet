"use client";

import { useInView } from "@/hooks/useInView";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;        // ms
  direction?: "up" | "left" | "none";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const { ref, inView } = useInView();

  const translate = {
    up: "translateY(22px)",
    left: "translateX(-16px)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : translate[direction],
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
