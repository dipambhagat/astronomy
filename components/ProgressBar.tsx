'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { MISSIONS } from '@/lib/missions';

gsap.registerPlugin(ScrollTrigger);

export default function ProgressBar() {
  const fillRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLSpanElement>(null);
  const [label, setLabel] = useState('Ready for launch 🚀');
  const completed = useRef<Set<number>>(new Set());

  useEffect(() => {
    const sections = MISSIONS.map((m) => document.getElementById(m.id)).filter(Boolean) as HTMLElement[];

    const st = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        const p = self.progress;
        if (fillRef.current) fillRef.current.style.width = `${p * 100}%`;
        if (rocketRef.current) rocketRef.current.style.left = `${p * 100}%`;

        // set --nebula-boost only over the first viewport height, matching
        // the original "descent" cue — once past it, it stays at 1.
        const boost = Math.max(0, Math.min(1, window.pageYOffset / window.innerHeight));
        document.documentElement.style.setProperty('--nebula-boost', boost.toFixed(3));

        const mid = window.pageYOffset + window.innerHeight * 0.42;
        let current = 0;
        sections.forEach((sec, i) => { if (sec.offsetTop <= mid) current = i + 1; });

        if (current >= 1) {
          setLabel(`Mission ${current} of ${MISSIONS.length}`);
          if (!completed.current.has(current)) {
            completed.current.add(current);
            document.querySelectorAll(`.nav-item[data-idx="${current}"]`).forEach((el) => {
              (el as HTMLElement).style.opacity = '1';
            });
            window.dispatchEvent(new CustomEvent('mission-entered', { detail: current }));
          }
        } else {
          setLabel('Ready for launch 🚀');
        }

        document.querySelectorAll('.nav-item').forEach((el) => {
          const idx = Number((el as HTMLElement).dataset.idx);
          el.classList.toggle('active', idx === current);
        });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <>
      <div className="progress-wrap">
        <div className="progress-track">
          <div className="progress-fill" ref={fillRef} />
          <span className="progress-rocket" ref={rocketRef}>🚀</span>
        </div>
      </div>
      <div className="progress-label">{label}</div>
    </>
  );
}
