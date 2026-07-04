'use client';

import { useState } from 'react';

const LEVELS = [
  { bg: 'linear-gradient(180deg,#1a8fe0,#eef1ff)', text: "☀️ High noon — sunlight travels straight down through the thinnest slice of air. Blue scatters evenly in every direction — that's the blue sky." },
  { bg: 'linear-gradient(180deg,#3fa9dd,#cfe6ff)', text: "🌤️ Afternoon — the angle is a bit lower, the air path a bit longer, but the sky still reads blue." },
  { bg: 'linear-gradient(180deg,#f2b463,#ffe29a)', text: '🌆 Golden hour — sunlight now travels sideways through much more air. More blue gets scattered away before it reaches you.' },
  { bg: 'linear-gradient(180deg,#ff8a5c,#ffd166)', text: '🌇 Sunset — almost all the blue is scattered out along the way. Only the longer orange and red wavelengths survive the trip to your eyes.' },
  { bg: 'linear-gradient(180deg,#4a2a6b,#ff5db1)', text: '🌌 Dusk — the last reds fade as the Sun dips below the horizon.' },
];

export default function SkyColorSlider() {
  const [idx, setIdx] = useState(0);
  const level = LEVELS[idx];

  return (
    <div className="glass mt-8" style={{ padding: '1.8rem 1.4rem', borderRadius: 22 }}>
      <p className="font-display text-xl mb-1">🌇 Drag through the day</p>
      <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>Watch the sky shift from noon to sunset.</p>
      <div style={{ height: 110, borderRadius: 16, marginTop: '1.2rem', background: level.bg, transition: 'background .4s' }} />
      <label className="sr-only" htmlFor="sky-slider">Time of day, from noon to sunset</label>
      <input
        id="sky-slider"
        type="range"
        min={0}
        max={100}
        value={(idx / (LEVELS.length - 1)) * 100}
        className="w-full mt-5"
        style={{ accentColor: 'var(--electric-blue)' }}
        onChange={(e) => setIdx(Math.round((Number(e.target.value) / 100) * (LEVELS.length - 1)))}
      />
      <div className="flex justify-between text-xs mt-2" style={{ color: 'var(--muted)' }}>
        <span>☀️ Noon</span><span>🌇 Sunset</span>
      </div>
      <div className="glass-strong mt-5" style={{ padding: '1.1rem', borderRadius: 16, textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)' }}>{level.text}</p>
      </div>
    </div>
  );
}
