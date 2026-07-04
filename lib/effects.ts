'use client';

const COLORS = ['#7b5cff', '#38bdf8', '#ff5db1', '#ffd166', '#ffffff'];

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* ---------------- Mascot event bus ----------------
   Mascot.tsx listens for this; any widget can call mascotSay() without
   needing a ref, context, or prop-drilled setter. */
export function mascotSay(text: string) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('mascot-say', { detail: text }));
}

/* ---------------- Sparkles ---------------- */
export function spawnSparkles(x: number, y: number, n: number) {
  if (prefersReducedMotion() || typeof document === 'undefined') return;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('div');
    s.textContent = '✦';
    s.style.cssText = `position:fixed;left:${x}px;top:${y}px;z-index:150;pointer-events:none;color:${COLORS[i % COLORS.length]};font-size:${Math.random() * 10 + 8}px;transition:all .8s ease;opacity:1`;
    document.body.appendChild(s);
    requestAnimationFrame(() => {
      const ang = Math.random() * Math.PI * 2;
      const d = Math.random() * 70 + 20;
      s.style.transform = `translate(${Math.cos(ang) * d}px,${Math.sin(ang) * d}px) scale(0)`;
      s.style.opacity = '0';
    });
    setTimeout(() => s.remove(), 850);
  }
}

export function sparkleAtElement(el: Element) {
  const r = el.getBoundingClientRect();
  spawnSparkles(r.left + r.width / 2, r.top + r.height / 2, 8);
}

/* ---------------- Confetti ---------------- */
interface ConfettiParticle {
  x: number; y: number; vx: number; vy: number; g: number; r: number; c: string; life: number; rot: number;
}
let confParts: ConfettiParticle[] = [];
let confRunning = false;

export function burstConfetti() {
  if (prefersReducedMotion() || typeof document === 'undefined') return;
  const canvas = document.getElementById('confetti') as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 120; i++) {
    confParts.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 3,
      vx: (Math.random() - 0.5) * 14,
      vy: Math.random() * -12 - 3,
      g: 0.35,
      r: Math.random() * 6 + 3,
      c: COLORS[i % COLORS.length],
      life: 100,
      rot: Math.random() * 6,
    });
  }
  if (!confRunning) {
    confRunning = true;
    requestAnimationFrame(() => confLoop(canvas, ctx));
  }
}

function confLoop(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = confParts.length - 1; i >= 0; i--) {
    const p = confParts[i];
    p.vy += p.g; p.x += p.vx; p.y += p.vy; p.life--; p.rot += 0.2;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.c;
    ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.6);
    ctx.restore();
    if (p.life <= 0 || p.y > window.innerHeight + 40) confParts.splice(i, 1);
  }
  if (confParts.length) {
    requestAnimationFrame(() => confLoop(canvas, ctx));
  } else {
    confRunning = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

/* ---------------- Shooting stars (ambient delight, purposeful: reinforces
   "you are surrounded by space" without demanding attention) ---------------- */
export function shootingStar() {
  if (prefersReducedMotion() || typeof document === 'undefined') return;
  const s = document.createElement('div');
  s.className = 'shooting-star';
  const startX = Math.random() * window.innerWidth * 0.6 + window.innerWidth * 0.3;
  const startY = Math.random() * window.innerHeight * 0.35;
  s.style.left = `${startX}px`;
  s.style.top = `${startY}px`;
  s.style.transition = 'transform 1s ease-in, opacity 1s ease-in';
  document.body.appendChild(s);
  requestAnimationFrame(() => {
    s.style.transform = `translate(-${Math.random() * 300 + 200}px,${Math.random() * 200 + 120}px)`;
    s.style.opacity = '0';
  });
  setTimeout(() => s.remove(), 1100);
}

export function rocketLaunchFX() {
  if (prefersReducedMotion() || typeof document === 'undefined') return;
  const r = document.createElement('div');
  r.textContent = '🚀';
  r.style.cssText =
    'position:fixed;left:50%;bottom:10%;font-size:3rem;z-index:150;transition:transform 1.2s cubic-bezier(.4,0,.2,1),opacity 1.2s;transform:translateX(-50%)';
  document.body.appendChild(r);
  requestAnimationFrame(() => {
    r.style.transform = 'translate(-50%,-120vh) rotate(12deg)';
    r.style.opacity = '0';
  });
  setTimeout(() => r.remove(), 1300);
}
