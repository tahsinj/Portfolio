"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
};

export default function CountUp({ value, decimals = 0, prefix = "", suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const run = () => {
      const start = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / 1500);
        const eased = 1 - Math.pow(1 - k, 3);
        el.textContent = `${prefix}${(value * eased).toFixed(decimals)}${suffix}`;
        if (k < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    if (document.documentElement.dataset.ready) run();
    else window.addEventListener("portfolio:ready", run, { once: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("portfolio:ready", run);
    };
  }, [value, decimals, prefix, suffix]);

  return <span ref={ref}>{`${prefix}${value.toFixed(decimals)}${suffix}`}</span>;
}
