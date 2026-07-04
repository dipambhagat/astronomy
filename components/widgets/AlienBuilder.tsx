'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const PLANETS = [{ val: '🌊', label: 'Ocean 🌊' }, { val: '🏜️', label: 'Desert 🏜️' }, { val: '🧊', label: 'Ice 🧊' }];
const BODIES = [{ val: '🐙', label: 'Tentacles 🐙' }, { val: '🦠', label: 'Microbe 🦠' }, { val: '🤖', label: 'Silicon 🤖' }];

export default function AlienBuilder() {
  const [planet, setPlanet] = useState('');
  const [body, setBody] = useState('');
  const [bump, setBump] = useState(false);

  function choose(setter: (v: string) => void, val: string) {
    setter(val);
    setBump(true);
    setTimeout(() => setBump(false), 250);
  }

  return (
    <div className="glass mt-8" style={{ padding: '1.8rem 1.4rem', borderRadius: 22 }}>
      <p className="font-display text-xl mb-1">🧬 Build Your Own Alien</p>
      <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>Just for fun! Mix &amp; match — then see what science actually says.</p>
      <div className="flex flex-col md:flex-row gap-6 items-center mt-6">
        <motion.div
          className="glass-strong"
          style={{ width: 170, height: 170, borderRadius: '50%', position: 'relative', overflow: 'hidden', display: 'grid', placeItems: 'center', flex: '0 0 auto' }}
          animate={{ scale: bump ? 1.15 : 1 }}
          transition={{ duration: 0.25 }}
        >
          <span style={{ fontSize: '4.6rem', lineHeight: 1 }}>{body || '👽'}</span>
          {planet && (
            <span
              style={{
                position: 'absolute', bottom: 10, right: 10, fontSize: '1.5rem', width: 40, height: 40,
                borderRadius: '50%', background: 'rgba(5,6,15,.75)', border: '1px solid var(--glass-border)',
                display: 'grid', placeItems: 'center',
              }}
            >
              {planet}
            </span>
          )}
        </motion.div>
        <div className="flex-1 w-full space-y-3">
          <div>
            <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>Home world</p>
            <div className="flex flex-wrap gap-2">
              {PLANETS.map((p) => (
                <button
                  key={p.val}
                  className="btn-ghost"
                  style={planet === p.val ? { borderColor: 'var(--galaxy-purple)', background: 'rgba(123,92,255,.18)' } : undefined}
                  onClick={() => choose(setPlanet, p.val)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>Body type</p>
            <div className="flex flex-wrap gap-2">
              {BODIES.map((b) => (
                <button
                  key={b.val}
                  className="btn-ghost"
                  style={body === b.val ? { borderColor: 'var(--galaxy-purple)', background: 'rgba(123,92,255,.18)' } : undefined}
                  onClick={() => choose(setBody, b.val)}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="glass-strong mt-5" style={{ padding: '1.1rem', borderRadius: 16 }}>
        <p style={{ color: 'var(--muted)' }}>
          <b style={{ color: 'var(--warm-yellow)' }}>🔭 What science says:</b> The most likely alien life isn&apos;t little
          green people — it&apos;s probably tiny microbes. Life almost certainly needs some liquid, an energy source, and
          time. Everything else? Pure, wonderful imagination. ✨
        </p>
      </div>
    </div>
  );
}
