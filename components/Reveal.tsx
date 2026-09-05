"use client";

import { createElement, useEffect, useRef, useState } from "react";

type RevealProps = {
  as?: "div" | "li" | "article";
  from?: "left" | "right" | "below";
  stagger?: 1 | 2;
  className?: string;
  children: React.ReactNode;
};

// Content stays visible until JavaScript arms it, so nothing is hidden without JS.
export default function Reveal({ as = "div", from = "below", stagger, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "armed" | "in">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setState("armed");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("in");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [
    "reveal",
    `from-${from}`,
    state !== "idle" && "armed",
    state === "in" && "in",
    stagger && `stagger-${stagger}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(as, { ref, className: classes }, children);
}
