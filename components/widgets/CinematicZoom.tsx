'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useReducedMotion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

interface Stage { emoji: string; title: string; desc: string }

const STAGES: Stage[] = [
  { emoji: '🌍', title: 'Earth', desc: 'Your home. Feels enormous, right? Keep going…' },
  { emoji: '🌝', title: 'The Moon', desc: 'Our closest neighbour — a 3-day trip by rocket.' },
  { emoji: '☀️', title: 'The Sun', desc: 'One million Earths could fit inside it. Still just getting started…' },
  { emoji: '🪐', title: 'The Solar System', desc: '8 planets orbiting one star. Light takes hours to cross it.' },
  { emoji: '🌌', title: 'The Milky Way', desc: '100+ billion stars. Crossing it at light-speed? 100,000 years.' },
  { emoji: '✨', title: 'The Local Group', desc: 'Our galaxy plus dozens of neighbours, like Andromeda.' },
  { emoji: '🕸️', title: 'The Virgo Supercluster', desc: 'Thousands of galaxies, bound loosely by gravity across unimaginable distance.' },
  { emoji: '🌠', title: 'The Observable Universe', desc: '2 trillion galaxies. And this is only the part we can SEE. No way…' },
];

export default function CinematicZoom() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  if (!ready) return <div style={{ height: '60vh' }} />;
  if (reduce) return <StaticFallback />;
  return <ScrubSequence />;
}

function StaticFallback() {
  return (
    <div className="glass mt-8" style={{ padding: '1.8rem 1.4rem', borderRadius: 22 }}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        {STAGES.map((s) => (
          <div key={s.title} className="text-center">
            <div style={{ fontSize: '2.6rem' }}>{s.emoji}</div>
            <p className="mt-2 text-sm font-display">{s.title}</p>
            <p className="mt-1 text-xs" style={{ color: 'var(--muted)' }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScrubSequence() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current, pin = pinRef.current;
    if (!wrap || !pin) return;
    let currentIdx = -1;

    const st = ScrollTrigger.create({
      trigger: wrap,
      start: 'top top',
      end: '+=350%',
      pin,
      scrub: 0.6,
      anticipatePin: 1,
      onUpdate(self) {
        const zoom = self.progress * (STAGES.length - 1);
        itemRefs.current.forEach((el, i) => {
          if (!el) return;
          const delta = zoom - i;
          let scale: number, opacity: number;
          if (delta <= 0) { scale = 0.15; opacity = 0; }
          else if (delta <= 1) { scale = 0.15 + delta * 1.05; opacity = delta; }
          else { scale = Math.max(0.32, 1.2 - (delta - 1) * 0.28); opacity = Math.max(0.4, 1 - (delta - 1) * 0.18); }
          el.style.transform = `scale(${scale})`;
          el.style.opacity = String(opacity);
        });
        const idx = Math.min(STAGES.length - 1, Math.max(0, Math.round(zoom)));
        if (idx !== currentIdx) {
          currentIdx = idx;
          if (titleRef.current) titleRef.current.textContent = STAGES[idx].title;
          if (descRef.current) descRef.current.textContent = STAGES[idx].desc;
        }
      },
    });
    return () => st.kill();
  }, []);

  return (
    <div ref={wrapRef} style={{ position: 'relative' }}>
      <div ref={pinRef} style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 'clamp(0.6rem, 2vw, 1.8rem)', height: '46vh', overflowX: 'auto', overflowY: 'hidden',
            padding: '0 1rem',
          }}
        >
          {STAGES.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => { itemRefs.current[i] = el; }}
              style={{
                width: 'clamp(50px, 9vw, 96px)', height: 'clamp(50px, 9vw, 96px)', flex: '0 0 auto',
                display: 'grid', placeItems: 'center', fontSize: 'clamp(1.8rem, 6vw, 3.4rem)',
                willChange: 'transform, opacity',
              }}
            >
              {s.emoji}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p ref={titleRef} className="font-display text-2xl">Earth</p>
          <p ref={descRef} className="mt-1 mx-auto" style={{ maxWidth: 520, color: 'var(--muted)' }}>
            Your home. Feels enormous, right? Keep going…
          </p>
          <p className="mt-4 text-xs" style={{ color: 'var(--muted)', letterSpacing: '.15em', textTransform: 'uppercase' }}>
            Keep scrolling — nothing disappears, we just keep pulling back ↓
          </p>
        </div>
      </div>
    </div>
  );
}
