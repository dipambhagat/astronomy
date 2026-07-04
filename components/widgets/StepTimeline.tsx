'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { mascotSay } from '@/lib/effects';

export interface TimelineStep { label: string; color: string; text: React.ReactNode }

export default function StepTimeline({
  buttonLabel,
  runningLabel,
  steps,
  doneMessage,
}: {
  buttonLabel: string;
  runningLabel: string;
  steps: TimelineStep[];
  doneMessage: string;
}) {
  const [running, setRunning] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);
  const [playedOnce, setPlayedOnce] = useState(false);

  function run() {
    setRunning(true);
    setRevealedCount(0);
    steps.forEach((_, i) => {
      setTimeout(() => {
        setRevealedCount(i + 1);
        if (i === steps.length - 1) {
          setRunning(false);
          setPlayedOnce(true);
          mascotSay(doneMessage);
        }
      }, 700 * (i + 1));
    });
  }

  return (
    <>
      <div className="text-center mt-6">
        <motion.button
          className="btn-cosmic"
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={running}
          onClick={run}
        >
          {running ? runningLabel : playedOnce ? `🔁 Replay` : buttonLabel}
        </motion.button>
      </div>

      <div className="mt-8 space-y-3">
        {steps.map((step, i) => {
          const active = i < revealedCount;
          return (
            <motion.div
              key={i}
              className="glass"
              style={{ padding: '1.2rem 1.4rem', borderRadius: 18 }}
              animate={{ opacity: active ? 1 : 0.35, x: active ? [0, 6, 0] : 0 }}
              transition={{ duration: 0.5 }}
            >
              <p style={{ fontWeight: 600, color: step.color }}>{step.label}</p>
              <p style={{ color: 'var(--muted)' }}>{step.text}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
