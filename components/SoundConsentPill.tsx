'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { hasSoundConsent, setSoundConsent, tryStartPlayback } from '@/lib/audioEngine';

export default function SoundConsentPill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Already consented in a previous visit — attempt to resume playback.
    // Browsers may still block this without a fresh gesture; if so, the
    // pill reappears so the user can tap to resume.
    if (hasSoundConsent()) {
      const started = tryStartPlayback();
      if (!started) setVisible(true);
      return;
    }
    // Give the hero a moment to breathe before offering sound.
    const t = setTimeout(() => setVisible(true), 1400);
    return () => clearTimeout(t);
  }, []);

  function enable() {
    tryStartPlayback();
    setSoundConsent(true);
    setVisible(false);
  }

  function dismiss() {
    setSoundConsent(false);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 0.86, 0.24, 1] }}
          className="glass"
          style={{
            position: 'fixed', left: '50%', bottom: '1.6rem', transform: 'translateX(-50%)',
            zIndex: 90, padding: '0.9rem 1.2rem', borderRadius: 999,
            display: 'flex', alignItems: 'center', gap: '0.8rem', maxWidth: '92vw',
          }}
        >
          <span style={{ fontSize: '0.88rem', color: 'var(--muted)', whiteSpace: 'nowrap' }}>
            🎵 This journey is even better with headphones.
          </span>
          <button className="btn-cosmic" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', whiteSpace: 'nowrap' }} onClick={enable}>
            Enable Sound
          </button>
          <button
            aria-label="Dismiss"
            onClick={dismiss}
            style={{ color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', padding: '0 0.2rem' }}
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
