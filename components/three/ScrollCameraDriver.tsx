'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { scrollProgressRef } from '@/lib/scrollProgressRef';

gsap.registerPlugin(ScrollTrigger);

/** Writes overall page scroll progress (0-1) into a shared ref, consumed
 * every frame by CameraRig inside the Canvas. Kept outside the Canvas tree
 * since ScrollTrigger needs real DOM measurement. */
export default function ScrollCameraDriver() {
  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => { scrollProgressRef.value = self.progress; },
    });
    return () => st.kill();
  }, []);

  return null;
}
