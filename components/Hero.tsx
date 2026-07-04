'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { heroKicker, heroTitle, heroSmall, heroCtas, heroScrollcue, EASE_SETTLE } from '@/lib/motion';
import { goToMission } from '@/lib/scroll';
import { openNavPanel } from '@/lib/navPanelEvents';
import { rocketLaunchFX } from '@/lib/effects';

export default function Hero() {
  const reduce = useReducedMotion();
  const initialAnim = reduce ? 'visible' : 'hidden';

  function handleLaunch() {
    goToMission('m1');
    rocketLaunchFX();
  }

  return (
    <header className="mission" id="hero" style={{ minHeight: '100vh' }}>
      {/* Bloom: the one flourish in the hero — a quiet glow reacting to the
          headline landing. Used once, nowhere else on the site. */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={reduce ? { opacity: 0 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: EASE_SETTLE, delay: 0.26 }}
        style={{
          position: 'absolute',
          left: '50%',
          top: '34%',
          width: 'min(760px, 92vw)',
          height: 420,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(123,92,255,.32), rgba(56,189,248,.10) 45%, transparent 74%)',
          filter: 'blur(14px)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      <div className="mission-inner text-center">
        <motion.div initial={initialAnim === 'hidden' ? 'hidden' : 'visible'} animate="visible" variants={heroKicker} transition={{ delay: 0.08 }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>✦ An Interactive Space Journey ✦</span>
        </motion.div>

        <motion.h1
          className="font-display glow-text mt-4"
          style={{ fontSize: 'clamp(2.4rem,8vw,6rem)', lineHeight: 1.02 }}
          initial={initialAnim === 'hidden' ? 'hidden' : 'visible'}
          animate="visible"
          variants={heroTitle}
          transition={{ delay: 0.32 }}
        >
          The Universe
          <br />
          <ShimmerGradient reduce={!!reduce}>Explained Like You&apos;re 5</ShimmerGradient>
        </motion.h1>

        <motion.p
          className="mt-6 mx-auto"
          style={{ maxWidth: 640, fontSize: 'clamp(1rem,2.2vw,1.35rem)', color: 'var(--muted)' }}
          initial={initialAnim === 'hidden' ? 'hidden' : 'visible'}
          animate="visible"
          variants={heroSmall}
          transition={{ delay: 0.76 }}
        >
          The biggest questions about space… answered with the simplest explanations.
        </motion.p>

        <motion.div
          className="mt-7 flex justify-center"
          initial={initialAnim === 'hidden' ? 'hidden' : 'visible'}
          animate="visible"
          variants={heroSmall}
          transition={{ delay: 0.9 }}
        >
          <span
            className="pill-note glass"
            style={{ maxWidth: 620, textAlign: 'left', lineHeight: 1.55, display: 'inline-block' }}
          >
            🚀&nbsp;Made with <b>superrr curiosity</b> by <b>Dipam Bhagat</b>. Because science is tough,
            man… and somehow every Google search just made me more confused. 😂
          </span>
        </motion.div>

        <motion.div
          className="mt-9 flex flex-wrap gap-3 justify-center"
          initial={initialAnim === 'hidden' ? 'hidden' : 'visible'}
          animate="visible"
          variants={heroCtas}
          transition={{ delay: 1.18 }}
        >
          <motion.button className="btn-cosmic" whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleLaunch}>
            🚀 Launch the Journey
          </motion.button>
          <motion.button className="btn-ghost" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => openNavPanel()}>
            🧭 Jump to a Mission
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-14"
          style={{ color: 'var(--muted)', fontSize: '.8rem', letterSpacing: '.25em', textTransform: 'uppercase' }}
          initial={initialAnim === 'hidden' ? 'hidden' : 'visible'}
          animate="visible"
          variants={heroScrollcue}
          transition={{ delay: 1.45 }}
        >
          Scroll to begin ↓
        </motion.div>
      </div>
    </header>
  );
}

/** One-time light sweep across the gradient headline, timed to land just as
 * the title finishes settling. Purpose: draw the eye to the single most
 * important line on the page — not a loop, not repeated elsewhere. */
function ShimmerGradient({ children, reduce }: { children: React.ReactNode; reduce: boolean }) {
  return (
    <motion.span
      className="text-gradient"
      style={{
        backgroundImage:
          'linear-gradient(115deg, #7b5cff 0%, #38bdf8 32%, #fdfeff 48%, #ff5db1 64%, #7b5cff 100%)',
        backgroundSize: '240% 100%',
      }}
      initial={{ backgroundPositionX: '100%' } as any}
      animate={reduce ? {} : ({ backgroundPositionX: '0%' } as any)}
      transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.9 }}
    >
      {children}
    </motion.span>
  );
}
