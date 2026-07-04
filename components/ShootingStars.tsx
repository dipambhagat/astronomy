'use client';

import { useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import { shootingStar } from '@/lib/effects';

export default function ShootingStars() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (Math.random() < 0.6) shootingStar();
    }, 9000);
    return () => clearInterval(id);
  }, [reduce]);

  return null;
}
