'use client';

import { useEffect, useRef, useState } from 'react';

interface Phase { max: number; name: string; emoji: string; desc: string }

const PHASES: Phase[] = [
  { max: 22.5, name: 'Full Moon', emoji: '🌕', desc: 'Earth sits between the Sun and Moon — we see its entire sunlit face.' },
  { max: 67.5, name: 'Waning Gibbous', emoji: '🌖', desc: 'More than half lit, and shrinking each night.' },
  { max: 112.5, name: 'Last Quarter', emoji: '🌗', desc: 'Exactly half lit — rises around midnight.' },
  { max: 157.5, name: 'Waning Crescent', emoji: '🌘', desc: 'A thin sliver left before it disappears.' },
  { max: 202.5, name: 'New Moon', emoji: '🌑', desc: "The Moon sits between Earth and the Sun — its lit side faces away from us." },
  { max: 247.5, name: 'Waxing Crescent', emoji: '🌒', desc: 'A thin sliver returns, growing night by night.' },
  { max: 292.5, name: 'First Quarter', emoji: '🌓', desc: 'Exactly half lit — visible in the evening sky.' },
  { max: 337.5, name: 'Waxing Gibbous', emoji: '🌔', desc: 'More than half lit, and growing toward full.' },
  { max: 361, name: 'Full Moon', emoji: '🌕', desc: 'Earth sits between the Sun and Moon — we see its entire sunlit face.' },
];

function phaseForAngle(deg: number): Phase {
  return PHASES.find((p) => deg <= p.max) ?? PHASES[0];
}

export default function MoonPhaseDrag() {
  const stageRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>(PHASES[0]);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const stage = stageRef.current, moon = moonRef.current;
    if (!stage || !moon) return;
    let angle = 0, isDragging = false;

    function place(deg: number) {
      const rect = stage!.getBoundingClientRect();
      const radius = rect.width / 2 - 18;
      const rad = (deg * Math.PI) / 180;
      const x = 50 + (Math.cos(rad) * radius) / rect.width * 100;
      const y = 50 + (Math.sin(rad) * radius) / rect.height * 100;
      moon!.style.left = `${x}%`;
      moon!.style.top = `${y}%`;
      setPhase(phaseForAngle(deg));
    }

    function angleFromEvent(e: PointerEvent) {
      const rect = stage!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
      const px = e.clientX - cx, py = e.clientY - cy;
      const deg = (Math.atan2(py, px) * 180) / Math.PI;
      return deg < 0 ? deg + 360 : deg;
    }

    function onDown() { isDragging = true; setDragging(true); moon!.style.cursor = 'grabbing'; }
    function onMove(e: PointerEvent) { if (isDragging) { angle = angleFromEvent(e); place(angle); } }
    function onUp() { isDragging = false; setDragging(false); moon!.style.cursor = 'grab'; }

    place(angle);
    moon.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      moon.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  return (
    <div className="glass mt-8" style={{ padding: '1.8rem 1.4rem', borderRadius: 22 }}>
      <p className="font-display text-xl mb-1">🌓 Drag the Moon around Earth</p>
      <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>
        ☀️ Sunlight is coming from the left. Watch the phase change as the Moon orbits.
      </p>
      <div ref={stageRef} style={{ position: 'relative', width: 'min(300px,78vw)', height: 'min(300px,78vw)', margin: '2rem auto 0' }}>
        <div
          style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: `1px dashed ${dragging ? 'rgba(123,92,255,.5)' : 'rgba(255,255,255,.18)'}`,
            transition: 'border-color .3s',
          }}
        />
        <div
          className="planet earth"
          style={{ width: 64, height: 64, position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
        />
        <span style={{ position: 'absolute', left: '2%', top: '50%', transform: 'translateY(-50%)', fontSize: '1.3rem', zIndex: 1 }} aria-hidden="true">☀️</span>
        <div
          ref={moonRef}
          style={{
            position: 'absolute', width: dragging ? 38 : 32, height: dragging ? 38 : 32, borderRadius: '50%',
            background: 'radial-gradient(circle at 35% 30%,#f1f1f1,#8f8f8f)',
            boxShadow: dragging ? '0 0 26px rgba(123,92,255,.7), 0 0 10px rgba(255,255,255,.6)' : '0 0 14px rgba(255,255,255,.35)',
            cursor: 'grab', left: '100%', top: '50%', transform: 'translate(-50%,-50%)', touchAction: 'none',
            transition: 'width .15s ease, height .15s ease, box-shadow .2s ease',
          }}
        />
      </div>
      <div className="glass-strong mt-6" style={{ padding: '1.1rem', borderRadius: 16, textAlign: 'center' }}>
        <p style={{ fontSize: '1.5rem' }}>{phase.emoji}</p>
        <p className="mt-1" style={{ color: 'var(--muted)' }}><b>{phase.name}</b> — {phase.desc}</p>
      </div>
    </div>
  );
}
