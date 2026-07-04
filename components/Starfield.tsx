'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Star {
  x: number; y: number; z: number; r: number; tw: number; hue: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];
    let w = 0, h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mx = 0, my = 0, scrollY = 0;
    let rafId = 0;

    function resize() {
      w = canvas!.width = window.innerWidth * dpr;
      h = canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = window.innerWidth + 'px';
      canvas!.style.height = window.innerHeight + 'px';
      const count = Math.min(220, Math.floor((window.innerWidth * window.innerHeight) / 7000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 0.9 + 0.1,
        r: (Math.random() * 1.3 + 0.3) * dpr,
        tw: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.15 ? 265 : Math.random() < 0.3 ? 200 : 0,
      }));
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, w, h);
      for (const s of stars) {
        const tw = reduce ? 0.8 : 0.5 + 0.5 * Math.sin(t * 0.001 + s.tw);
        const px = s.x + mx * s.z * 26 * dpr;
        let py = s.y + my * s.z * 26 * dpr - scrollY * s.z * 0.06 * dpr;
        py = ((py % h) + h) % h;
        ctx!.beginPath();
        ctx!.arc(px, py, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = s.hue ? `hsla(${s.hue},80%,75%,${tw})` : `rgba(255,255,255,${tw})`;
        ctx!.fill();
      }
      // Even in reduced-motion mode we keep a single static frame instead of
      // an idle rAF loop — the loop itself (not just the twinkle amplitude)
      // is what costs battery/CPU, so we stop scheduling frames entirely.
      if (!reduce) rafId = requestAnimationFrame(draw);
    }

    function onScroll() { scrollY = window.pageYOffset; }
    function onMouseMove(e: MouseEvent) {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    resize();
    rafId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    if (!reduce) window.addEventListener('mousemove', onMouseMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [reduce]);

  return <canvas id="starfield" ref={canvasRef} />;
}
