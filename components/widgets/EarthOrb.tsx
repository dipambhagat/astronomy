'use client';

import { useState } from 'react';
import { mascotSay } from '@/lib/effects';

export default function EarthOrb() {
  const [spinKey, setSpinKey] = useState(0);
  const N = 12, radius = 52;

  return (
    <div className="earth-wrap">
      <div
        className="planet earth"
        title="Give me a spin!"
        style={spinKey ? { animation: 'spin 3s linear infinite' } : undefined}
        onClick={() => { setSpinKey((k) => k + 1); mascotSay('Wheee! Round and round — no falling off! 🌍'); }}
      />
      <div className="grav-arrows" aria-hidden="true">
        {Array.from({ length: N }, (_, a) => {
          const ang = (a / N) * Math.PI * 2;
          const x = 50 + Math.cos(ang) * radius;
          const y = 50 + Math.sin(ang) * radius;
          const deg = (ang * 180) / Math.PI - 90;
          return (
            <span
              key={a}
              className="grav-arrow"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%,-50%) rotate(${deg}deg)`,
                animationDelay: `${a * 0.12}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
