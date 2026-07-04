'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { mascotSay, sparkleAtElement } from '@/lib/effects';

const FACTS = [
  'Fun fact: A day on Venus is longer than its year! 🪐',
  'Neutron stars are so dense a teaspoon would weigh a billion tons! 🥄',
  "There's a giant cloud in space that smells like rum & tastes like raspberries. 🍓",
  'The footprints on the Moon will stay there for millions of years. 👣',
  'Space is completely silent — sound needs air to travel. 🤫',
  'Saturn is so light it would float in a (giant!) bathtub. 🛁',
  'One million Earths could fit inside the Sun. ☀️',
  'The hottest planet is Venus, not Mercury. 🔥',
];

export default function Mascot() {
  const [message, setMessage] = useState("Hi! I'm Cosmo. Tap me anytime for a fun fact! 👋");
  const [visible, setVisible] = useState(true);
  const [bump, setBump] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  const factIndex = useRef(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    function onSay(e: Event) {
      const text = (e as CustomEvent<string>).detail;
      setVisible(false);
      setTimeout(() => { setMessage(text); setVisible(true); }, 200);
      if (!reduce) { setBump(true); setTimeout(() => setBump(false), 350); }
    }
    window.addEventListener('mascot-say', onSay);
    return () => window.removeEventListener('mascot-say', onSay);
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (Math.random() < 0.5) {
        mascotSay(FACTS[factIndex.current % FACTS.length]);
        factIndex.current++;
      }
    }, 22000);
    return () => clearInterval(id);
  }, [reduce]);

  function handleTap() {
    mascotSay(FACTS[factIndex.current % FACTS.length]);
    factIndex.current++;
    if (avatarRef.current) sparkleAtElement(avatarRef.current);
  }

  return (
    <div className="mascot">
      <div
        ref={avatarRef}
        className="mascot-avatar glass"
        title="Tap me!"
        onClick={handleTap}
        style={{ transform: bump ? 'scale(1.25) rotate(12deg)' : undefined, transition: 'transform .35s' }}
      >
        👨‍🚀
      </div>
      <div className="mascot-bubble glass" style={{ opacity: visible ? 1 : 0, transition: 'opacity .4s' }}>
        {message}
      </div>
    </div>
  );
}
