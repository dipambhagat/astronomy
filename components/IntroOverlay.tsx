'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { tryStartPlayback, setSoundConsent } from '@/lib/audioEngine';
import { hasSeenIntro, markIntroSeen } from '@/lib/introGate';

const FADE_MS = 1000;

export default function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!hasSeenIntro()) setVisible(true);
  }, []);

  function proceed(withSound: boolean) {
    if (withSound) tryStartPlayback();
    setSoundConsent(withSound);
    markIntroSeen();
    setClosing(true);
    // Overlay fade + blur removal takes ~1s; the hero only starts animating
    // once this completes — that's the "universe waking up" beat.
    setTimeout(() => {
      setVisible(false);
      window.dispatchEvent(new Event('intro-complete'));
    }, FADE_MS);
  }

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: closing ? 0 : 1 }}
      transition={{ duration: FADE_MS / 1000, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        display: 'grid',
        placeItems: 'center',
        padding: '1.5rem',
        pointerEvents: closing ? 'none' : 'auto',
        background: 'rgba(5,6,15,0.4)',
        backdropFilter: 'blur(26px) saturate(1.15) brightness(0.6)',
        WebkitBackdropFilter: 'blur(26px) saturate(1.15) brightness(0.6)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.96 }}
        animate={{ opacity: closing ? 0 : 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 0.86, 0.24, 1] }}
        className="glass"
        style={{ maxWidth: 460, width: '100%', padding: '2.4rem 2rem', borderRadius: 28, textAlign: 'center' }}
      >
        <div style={{ fontSize: '2.6rem' }}>🌌</div>
        <p className="font-display mt-3" style={{ fontSize: '1.6rem' }}>One Small Request…</p>
        <p className="mt-4" style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
          This isn&apos;t just a website.
          <br />
          It&apos;s a journey through the universe.
        </p>
        <p className="mt-3" style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
          If you have headphones nearby…
          <br />
          now&apos;s a good time to put them on. 🎧
        </p>

        <motion.button
          className="btn-cosmic mt-7"
          style={{ width: '100%', justifyContent: 'center' }}
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => proceed(true)}
        >
          Begin Journey
        </motion.button>
        <button
          onClick={() => proceed(false)}
          style={{
            marginTop: '1rem', background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--muted)', fontSize: '0.8rem', textDecoration: 'underline', textUnderlineOffset: 3,
          }}
        >
          Continue without sound
        </button>
      </motion.div>
    </motion.div>
  );
}
