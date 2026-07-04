'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MISSIONS } from '@/lib/missions';
import { goToMission } from '@/lib/scroll';

export default function NavPanel() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onOpen() { setOpen(true); }
    window.addEventListener('open-nav-panel', onOpen);
    return () => window.removeEventListener('open-nav-panel', onOpen);
  }, []);

  function handleSelect(id: string) {
    goToMission(id);
    setOpen(false);
  }

  return (
    <>
      <button className="nav-fab glass" aria-label="Open mission navigator" onClick={() => setOpen(true)}>
        🚀
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="nav-scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="nav-panel glass-strong"
              aria-label="Mission navigator"
              initial={{ x: '105%' }}
              animate={{ x: 0 }}
              exit={{ x: '105%' }}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="eyebrow">Mission Navigator</div>
                  <h3 className="font-display text-2xl mt-1">Choose a Mission</h3>
                </div>
                <button className="btn-ghost" aria-label="Close" onClick={() => setOpen(false)}>✕</button>
              </div>
              <div>
                {MISSIONS.map((m, i) => (
                  <button
                    key={m.id}
                    className="nav-item"
                    data-idx={i + 1}
                    style={{ opacity: 0.55 }}
                    onClick={() => handleSelect(m.id)}
                  >
                    <span className="n-emoji">{m.emoji}</span>
                    <span>
                      <span className="n-idx">MISSION {i + 1}</span>
                      <br />
                      <span>{m.title}</span>
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-xs text-center mt-6" style={{ color: 'var(--muted)' }}>
                Tap any mission to warp there ✨
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
