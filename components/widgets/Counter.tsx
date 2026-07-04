'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({
  target,
  suffix = '',
  fontSize = '2rem',
}: {
  target: number;
  suffix?: string;
  fontSize?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    let raf = 0;
    function step(ts: number) {
      if (start === null) start = ts;
      const pr = Math.min((ts - start) / 1400, 1);
      const val = target * (1 - Math.pow(1 - pr, 3));
      setDisplay((target < 10 ? val.toFixed(1) : Math.round(val).toLocaleString()) + suffix);
      if (pr < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, suffix]);

  return (
    <div ref={ref} className="font-display text-gradient" style={{ fontSize }}>
      {display}
    </div>
  );
}
