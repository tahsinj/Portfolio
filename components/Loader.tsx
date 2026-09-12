"use client";

import { useEffect, useRef, useState } from "react";

const MIN_MS = 1100;
const MAX_MS = 4500;

function markReady() {
  document.documentElement.dataset.ready = "true";
  window.dispatchEvent(new Event("portfolio:ready"));
}

export default function Loader() {
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");
  const barRef = useRef<HTMLSpanElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      markReady();
      setPhase("done");
      return;
    }

    let alive = true;
    let ready = false;
    let frame = 0;
    let timer: number | undefined;
    let pct = 0;
    const start = performance.now();

    const pageLoaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => window.addEventListener("load", () => resolve(), { once: true }));
    Promise.all([document.fonts.ready, pageLoaded]).then(() => {
      ready = true;
    });

    const tick = (now: number) => {
      if (!alive) return;
      const elapsed = now - start;
      const done = (ready && elapsed >= MIN_MS) || elapsed >= MAX_MS;
      const target = done ? 100 : Math.min(90, (90 * elapsed) / MIN_MS);
      pct += (target - pct) * 0.14;
      if (done && pct > 99.4) pct = 100;

      if (barRef.current) barRef.current.style.transform = `scaleX(${pct / 100})`;
      if (pctRef.current) pctRef.current.textContent = `${String(Math.round(pct)).padStart(3, "0")}%`;

      if (pct >= 100) {
        markReady();
        setPhase("leaving");
        timer = window.setTimeout(() => setPhase("done"), 700);
        return;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={phase === "leaving" ? "loader out" : "loader"} role="status" aria-label="Loading">
      <div className="loader-inner">
        <span className="loader-logo display notch-sm">TJ</span>
        <span className="loader-name mono">TAHSIN JAWWAD · PORTFOLIO</span>
        <span className="loader-track">
          <span ref={barRef} className="loader-bar" />
        </span>
        <span ref={pctRef} className="loader-pct mono" />
      </div>
    </div>
  );
}
