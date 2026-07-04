'use client';

import { useEffect } from 'react';
import { MISSIONS } from '@/lib/missions';
import { burstConfetti, mascotSay, spawnSparkles } from '@/lib/effects';

const ENCOURAGEMENTS = (n: number) => [
  `Nice — Mission ${n} unlocked! Keep going 🚀`,
  "Whoa, you're a natural explorer! ✨",
  "One more mission… I promise it's cool 😉",
  'Deeper into space we go! 🌌',
][(n - 1) % 4];

export default function MissionProgressEffects() {
  useEffect(() => {
    function onMissionEntered(e: Event) {
      const n = (e as CustomEvent<number>).detail;
      if (n > 1) {
        spawnSparkles(window.innerWidth / 2, window.innerHeight / 2, 10);
        if (n === MISSIONS.length) burstConfetti();
      }
      mascotSay(ENCOURAGEMENTS(n));
    }
    window.addEventListener('mission-entered', onMissionEntered);
    return () => window.removeEventListener('mission-entered', onMissionEntered);
  }, []);

  return null;
}
