'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { setVolume } from '@/lib/audioEngine';

/**
 * Volume keyframes across overall page scroll progress (0–1), following the
 * emotional arc: near-silent hero → slow build through the early missions →
 * peak at the "How Big Is the Universe" climax → quiet/distant through the
 * black hole → warm again for aliens → cold as the sun disappears → fade to
 * silence at the very end.
 *
 * These are expressed as fractions of TOTAL page scroll, not literal mission
 * boundaries — the site has 14 missions, not the 8 conceptual chapters in
 * the creative brief, so the percentages are applied to overall scroll
 * position rather than pinned to specific mission indices.
 */
const KEYFRAMES: [progress: number, volume: number][] = [
  [0, 0],
  [0.05, 0.03],
  [0.15, 0.06],
  [0.28, 0.1],
  [0.4, 0.14],
  [0.68, 0.2], // climax — "How Big Is the Universe"
  [0.8, 0.1], // black hole — distant, underwater
  [0.88, 0.16], // aliens — warmth returns
  [0.95, 0.08], // sun disappears — losing energy
  [1, 0],
];

function volumeForProgress(p: number): number {
  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    const [p0, v0] = KEYFRAMES[i];
    const [p1, v1] = KEYFRAMES[i + 1];
    if (p >= p0 && p <= p1) {
      const t = p1 === p0 ? 0 : (p - p0) / (p1 - p0);
      return v0 + (v1 - v0) * t;
    }
  }
  return KEYFRAMES[KEYFRAMES.length - 1][1];
}

export default function AudioDirector() {
  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => setVolume(volumeForProgress(self.progress)),
    });
    return () => st.kill();
  }, []);

  return null;
}
