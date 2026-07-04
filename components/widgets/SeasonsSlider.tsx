'use client';

import { useState } from 'react';

const GROUPS = [
  { n: '❄️ Winter', s: '☀️ Summer' }, // Dec/Jan/Feb
  { n: '🌱 Spring', s: '🍂 Autumn' }, // Mar/Apr/May
  { n: '☀️ Summer', s: '❄️ Winter' }, // Jun/Jul/Aug
  { n: '🍂 Autumn', s: '🌱 Spring' }, // Sep/Oct/Nov
];

function monthToGroup(m: number) {
  return GROUPS[Math.floor(((m + 1) % 12) / 3)];
}

export default function SeasonsSlider() {
  const [month, setMonth] = useState(0);
  const group = monthToGroup(month);

  return (
    <div className="glass mt-8" style={{ padding: '1.8rem 1.4rem', borderRadius: 22 }}>
      <p className="font-display text-xl mb-1">🌍 Spin through the year</p>
      <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>Drag to see both hemispheres trade seasons.</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
        <div className="planet earth" style={{ width: 130, height: 130, transform: 'rotate(23deg)' }} />
      </div>
      <label className="sr-only" htmlFor="season-slider">Month of the year</label>
      <input
        id="season-slider"
        type="range"
        min={0}
        max={11}
        value={month}
        className="w-full mt-6"
        style={{ accentColor: 'var(--warm-yellow)' }}
        onChange={(e) => setMonth(Number(e.target.value))}
      />
      <div className="flex justify-between text-xs mt-2" style={{ color: 'var(--muted)' }}>
        <span>Jan</span><span>Jul</span><span>Dec</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <div className="glass-strong" style={{ padding: '1rem', borderRadius: 14, textAlign: 'center' }}>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>🧭 Northern Hemisphere</p>
          <p className="mt-1 font-display" style={{ fontSize: '1.2rem' }}>{group.n}</p>
        </div>
        <div className="glass-strong" style={{ padding: '1rem', borderRadius: 14, textAlign: 'center' }}>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>🧭 Southern Hemisphere</p>
          <p className="mt-1 font-display" style={{ fontSize: '1.2rem' }}>{group.s}</p>
        </div>
      </div>
    </div>
  );
}
