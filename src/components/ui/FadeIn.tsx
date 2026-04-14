"use client";

import { useInView } from "@/hooks/useInView";

const TRANSLATE: Record<"up" | "left" | "none", string> = {
  up: "translateY(22px)",
  left: "translateX(-16px)",
  none: "none",
};

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

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : TRANSLATE[direction],
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
        willChange: inView ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
