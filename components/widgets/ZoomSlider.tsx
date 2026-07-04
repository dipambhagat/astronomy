'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mascotSay } from '@/lib/effects';

export interface ZoomLevel { emoji: string; title: string; desc: string }

// Fixed target sizes per step (px) — smallest→largest, matching the "zoom
// out" story so the accumulated row visually reads as a scale comparison.
const SIZES = [30, 40, 52, 68, 88, 112, 140];

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
  const current = levels[idx];

  return (
    <div className="glass mt-8" style={{ padding: '1.8rem 1.4rem', borderRadius: 22 }}>
      <div
        style={{
          minHeight: 'min(40vh, 260px)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          gap: '0.9rem',
          overflowX: 'auto',
          overflowY: 'hidden',
          padding: '1rem 0.5rem',
          borderRadius: 18,
          background: 'radial-gradient(circle at 50% 80%, rgba(123,92,255,.12), transparent 70%)',
        }}
      >
        <AnimatePresence initial={false}>
          {levels.slice(0, idx + 1).map((lvl, j) => {
            const isCurrent = j === idx;
            return (
              <motion.div
                key={lvl.title}
                layout
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: isCurrent ? 1 : 0.45, scale: 1 }}
                exit={{ opacity: 0, scale: 0.3 }}
                transition={{ duration: 0.5, ease: [0.16, 0.86, 0.24, 1] }}
                style={{
                  fontSize: SIZES[j] ?? SIZES[SIZES.length - 1],
                  lineHeight: 1,
                  flex: '0 0 auto',
                  filter: isCurrent ? 'none' : 'saturate(0.7)',
                }}
              >
                {lvl.emoji}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="text-center mt-5">
        <motion.p key={`t-${idx}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="font-display text-2xl">
          {current.title}
        </motion.p>
        <motion.p key={`d-${idx}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-1 mx-auto" style={{ maxWidth: 520, color: 'var(--muted)' }}>
          {current.desc}
        </motion.p>
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
