'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { mascotSay } from '@/lib/effects';

export interface ZoomLevel { emoji: string; title: string; desc: string }

export default function ZoomSlider({
  levels,
  minLabel,
  maxLabel,
  onEndMessage,
}: {
  levels: ZoomLevel[];
  minLabel: string;
  maxLabel: string;
  onEndMessage?: string;
}) {
  const [idx, setIdx] = useState(0);
  const level = levels[idx];

  return (
    <div className="glass mt-8" style={{ padding: '1.8rem 1.4rem', borderRadius: 22 }}>
      <div
        style={{
          height: 'min(46vh, 340px)',
          display: 'grid',
          placeItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 18,
          background: 'radial-gradient(circle at 50% 50%, rgba(123,92,255,.15), transparent 70%)',
        }}
      >
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          style={{ fontSize: 'clamp(4rem,16vw,9rem)' }}
        >
          {level.emoji}
        </motion.div>
      </div>
      <div className="text-center mt-5">
        <p className="font-display text-2xl">{level.title}</p>
        <p className="mt-1 mx-auto" style={{ maxWidth: 520, color: 'var(--muted)' }}>{level.desc}</p>
      </div>
      <label className="sr-only" htmlFor={`zoom-${minLabel}`}>Zoom level, from {minLabel} to {maxLabel}</label>
      <input
        id={`zoom-${minLabel}`}
        type="range"
        min={0}
        max={levels.length - 1}
        value={idx}
        className="w-full mt-6"
        style={{ accentColor: 'var(--galaxy-purple)' }}
        onChange={(e) => {
          const v = Number(e.target.value);
          setIdx(v);
          if (v === levels.length - 1 && onEndMessage) mascotSay(onEndMessage);
        }}
      />
      <div className="flex justify-between text-xs mt-2" style={{ color: 'var(--muted)' }}>
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}
