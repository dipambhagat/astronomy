'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

const W = 300, H = 220, COLS = 13, ROWS = 10, STRENGTH = 900;

export default function WarpGrid() {
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const ballRef = useRef<SVGCircleElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const svg = svgRef.current, g = gRef.current, ball = ballRef.current;
    if (!svg || !g || !ball) return;

    let bx = 150, by = 60;
    let dragging = false;
    let raf = 0;

    function warpPoint(x: number, y: number) {
      const dx = x - bx, dy = y - by;
      const dist = Math.sqrt(dx * dx + dy * dy) + 8;
      let pull = STRENGTH / (dist * dist);
      pull = Math.min(pull, 1.4);
      return { x, y: y + pull * dist * 0.5 * (dy >= -20 ? 1 : 0.3) };
    }

    function build() {
      let d = '';
      for (let r = 0; r <= ROWS; r++) {
        const pts: string[] = [];
        for (let c = 0; c <= COLS; c++) {
          const x = (c / COLS) * W, y = (r / ROWS) * H;
          const p = warpPoint(x, y);
          pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
        }
        d += `<polyline points="${pts.join(' ')}"/>`;
      }
      for (let c = 0; c <= COLS; c++) {
        const pts: string[] = [];
        for (let r = 0; r <= ROWS; r++) {
          const x = (c / COLS) * W, y = (r / ROWS) * H;
          const p = warpPoint(x, y);
          pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
        }
        d += `<polyline points="${pts.join(' ')}"/>`;
      }
      g!.innerHTML = d;
    }

    function setBall(x: number, y: number) {
      bx = Math.max(20, Math.min(W - 20, x));
      by = Math.max(20, Math.min(H - 20, y));
      ball!.setAttribute('cx', String(bx));
      ball!.setAttribute('cy', String(by));
      build();
    }

    function pt(e: PointerEvent) {
      const rect = svg!.getBoundingClientRect();
      const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
      return { x: (cx / rect.width) * W, y: (cy / rect.height) * H };
    }

    function onDown() { dragging = true; ball!.style.cursor = 'grabbing'; }
    function onMove(e: PointerEvent) { if (dragging) { const p = pt(e); setBall(p.x, p.y); } }
    function onUp() { dragging = false; ball!.style.cursor = 'grab'; }

    build();
    ball.addEventListener('pointerdown', onDown);
    svg.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);

    let t = 0;
    if (!reduce) {
      const drift = () => {
        if (!dragging) { t += 0.03; setBall(150 + Math.sin(t) * 60, 90 + Math.cos(t * 0.8) * 30); }
        raf = requestAnimationFrame(drift);
      };
      raf = requestAnimationFrame(drift);
    }

    return () => {
      ball.removeEventListener('pointerdown', onDown);
      svg.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  return (
    <svg ref={svgRef} viewBox="0 0 300 220" className="w-full grid-warp" style={{ touchAction: 'none' }}>
      <g ref={gRef} stroke="rgba(123,92,255,.5)" fill="none" strokeWidth={1} />
      <circle ref={ballRef} cx={150} cy={60} r={16} fill="url(#warp-bg)" style={{ cursor: 'grab' }} />
      <defs>
        <radialGradient id="warp-bg" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#111" />
          <stop offset="70%" stopColor="#000" />
          <stop offset="100%" stopColor="#7b5cff" />
        </radialGradient>
      </defs>
    </svg>
  );
}
