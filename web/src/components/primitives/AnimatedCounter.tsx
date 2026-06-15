"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const NUM_RE = /^(\D*)(\d+(?:\.\d+)?)(.*)$/;

/**
 * Animates the numeric part of a value (e.g. "150K+") from 0 → target when
 * scrolled into view, preserving any non-numeric prefix/suffix.
 */
export function AnimatedCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(value);

  const hasNumber = NUM_RE.test(value);

  useEffect(() => {
    if (!inView) return;
    const match = value.match(NUM_RE);
    if (!match) return;

    const [, prefix, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const duration = 1200;
    let raf = 0;
    let start: number | null = null;

    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {hasNumber ? display : value}
    </span>
  );
}
