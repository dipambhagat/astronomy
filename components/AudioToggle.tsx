'use client';

import { useRef, useState } from 'react';
import { mascotSay } from '@/lib/effects';

export default function AudioToggle() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  function start() {
    try {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AC();
      const gain = ctx.createGain();
      gain.gain.value = 0;
      gain.connect(ctx.destination);
      const o1 = ctx.createOscillator();
      const o2 = ctx.createOscillator();
      o1.type = 'sine'; o1.frequency.value = 110;
      o2.type = 'sine'; o2.frequency.value = 110.4;
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass'; f.frequency.value = 400;
      o1.connect(f); o2.connect(f); f.connect(gain);
      o1.start(); o2.start();
      gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 1.5);
      ctxRef.current = ctx;
      gainRef.current = gain;
    } catch {
      /* Web Audio unsupported — fail silently, feature is purely ambient */
    }
  }

  function stop() {
    const ctx = ctxRef.current, gain = gainRef.current;
    if (gain && ctx) {
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
      setTimeout(() => { ctx.close().catch(() => {}); ctxRef.current = null; }, 700);
    }
  }

  function toggle() {
    const next = !on;
    setOn(next);
    if (next) { start(); mascotSay('Ambient space mode on 🎧'); } else { stop(); }
  }

  return (
    <button className="audio-toggle btn-ghost" aria-pressed={on} onClick={toggle}>
      {on ? '🔊 Space Mode' : '🔇 Space Mode'}
    </button>
  );
}
