"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
};

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1450,
}: CounterProps) {
  const [current, setCurrent] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let frame = 0;
    let delay = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.disconnect();
        setCurrent(0);

        delay = window.setTimeout(() => {
          const start = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(progress === 1 ? value : value * eased);

            if (progress < 1) {
              frame = requestAnimationFrame(animate);
            }
          };

          frame = requestAnimationFrame(animate);
        }, 280);
      },
      { threshold: 0.7, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.clearTimeout(delay);
      cancelAnimationFrame(frame);
    };
  }, [duration, value]);

  const formatted = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(current);

  const accessibleValue = `${prefix}${new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)}${suffix}`;

  return (
    <span ref={elementRef} className="animated-number" aria-label={accessibleValue}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
