'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { hasSeenIntro } from '@/lib/introGate';
import { hasSoundConsent, tryStartPlayback } from '@/lib/audioEngine';

export default function SoundResumeHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!hasSeenIntro() || !hasSoundConsent()) return; // intro overlay handles first-time visitors
    tryStartPlayback().then((ok) => { if (!ok) setShow(true); });
  }, []);

  function resume() {
    tryStartPlayback().then((ok) => { if (ok) setShow(false); });
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={resume}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="glass"
          style={{
            position: 'fixed', bottom: '1.2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 90,
            padding: '0.7rem 1.2rem', borderRadius: 999, display: 'flex', alignItems: 'center', gap: '0.5rem',
            cursor: 'pointer', border: 'none', color: 'var(--soft-white)', fontSize: '0.85rem',
          }}
        >
          🎵 Tap to resume sound
        </motion.button>
      )}
    </AnimatePresence>
  );
}
