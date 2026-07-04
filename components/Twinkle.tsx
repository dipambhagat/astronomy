'use client';

import { useEffect, useState } from 'react';

interface Dot { left: number; top: number; delay: number; size: number }

export default function Twinkle() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const n = window.innerWidth < 640 ? 26 : 46;
    setDots(
      Array.from({ length: n }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        size: Math.random() * 2 + 1,
      }))
    );
  }, []);

  return (
    <div className="twinkle" aria-hidden="true">
      {dots.map((d, i) => (
        <i
          key={i}
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            animationDelay: `${d.delay}s`,
            width: `${d.size}px`,
            height: `${d.size}px`,
          }}
        />
      ))}
    </div>
  );
}
