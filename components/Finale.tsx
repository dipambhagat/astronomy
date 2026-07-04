'use client';

import { motion } from 'framer-motion';
import { revealUp } from '@/lib/motion';
import { rocketLaunchFX, burstConfetti, mascotSay } from '@/lib/effects';

export default function Finale() {
  function handleClick() {
    rocketLaunchFX();
    burstConfetti();
    mascotSay('Keep looking up. Always. 🌌❤️');
  }

  return (
    <section className="mission" id="finale" style={{ textAlign: 'center' }}>
      <div className="mission-inner">
        <motion.div className="float-slow" style={{ fontSize: 'clamp(4rem,14vw,8rem)' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp}>
          🔭
        </motion.div>
        <motion.div className="mt-2" style={{ fontSize: '2rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp}>
          👧✨
        </motion.div>
        <motion.p
          className="font-display glow-text mt-8"
          style={{ fontSize: 'clamp(1.5rem,4.5vw,3rem)', lineHeight: 1.2 }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp} transition={{ delay: 0.1 }}
        >
          &quot;When you look into space…<br />you&apos;re looking into the past.&quot;
        </motion.p>
        <motion.p
          className="font-display mt-10 mx-auto"
          style={{ maxWidth: 760, fontSize: 'clamp(1.3rem,3.8vw,2.4rem)', lineHeight: 1.25, color: 'var(--muted)' }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp} transition={{ delay: 0.2 }}
        >
          &quot;The universe is the biggest story ever told…<br />and we&apos;ve only read the <span className="text-gradient">first page</span>.&quot;
        </motion.p>
        <motion.div className="mt-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp} transition={{ delay: 0.3 }}>
          <motion.button className="btn-cosmic" style={{ fontSize: '1.15rem', padding: '1rem 2rem' }} whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={handleClick}>
            🚀 Keep Looking Up.
          </motion.button>
        </motion.div>
        <motion.div
          className="mt-12 mx-auto glass"
          style={{ maxWidth: 640, padding: '1.6rem', borderRadius: 22 }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealUp} transition={{ delay: 0.4 }}
        >
          <p style={{ fontSize: '1.05rem' }}>Made with ❤️, superrr curiosity, and countless &quot;Wait… WHAT?!&quot; moments by <b>Dipam Bhagat</b>.</p>
          <p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>If this website made you look up at the night sky with a little more wonder, then it has done its job. 🌌</p>
        </motion.div>
        <p className="mt-10 text-xs" style={{ color: 'var(--muted)', letterSpacing: '.2em' }}>✦ THE END ✦ &nbsp;·&nbsp; scroll up to explore again</p>
      </div>
    </section>
  );
}
