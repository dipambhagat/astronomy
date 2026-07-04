'use client';

import { motion } from 'framer-motion';
import { revealUp } from '@/lib/motion';
import { goToMission } from '@/lib/scroll';
import { MISSIONS } from '@/lib/missions';

interface NextPreview {
  emoji: string;
  title: string;
  teaser: string;
}

interface MissionShellProps {
  id: string; // "m1".."m14"
  index: number; // 1-based
  emoji: string;
  title: React.ReactNode;
  intro: React.ReactNode;
  introMaxWidth?: number;
  next?: NextPreview; // omit for the final mission
  children: React.ReactNode;
}

export default function MissionShell({ id, index, emoji, title, intro, introMaxWidth = 600, next, children }: MissionShellProps) {
  const total = MISSIONS.length;
  const prevId = index > 1 ? `m${index - 1}` : undefined;
  const nextId = index < total ? `m${index + 1}` : undefined;

  return (
    <section className="mission" id={id}>
      <div className="mission-inner">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={revealUp}>
          <span className="eyebrow">{emoji} Mission {index} of {total}</span>
        </motion.div>

        <motion.h2
          className="font-display mt-3"
          style={{ fontSize: 'clamp(2rem,5vw,3.6rem)' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={revealUp}
        >
          {title}
        </motion.h2>

        <motion.p
          className="mt-4"
          style={{ maxWidth: introMaxWidth, color: 'var(--muted)', fontSize: '1.1rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={revealUp}
          transition={{ delay: 0.08 }}
        >
          {intro}
        </motion.p>

        {children}

        {next && nextId && (
          <motion.div
            className="continue-card glass mt-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={revealUp}
          >
            <div className="eyebrow" style={{ justifyContent: 'center' }}>🚀 Continue the Journey</div>
            <h3 className="font-display mt-2" style={{ fontSize: 'clamp(1.5rem,4vw,2.4rem)' }}>
              {next.emoji} {next.title}
            </h3>
            <p className="mt-2 mx-auto" style={{ maxWidth: 440, color: 'var(--muted)' }}>&ldquo;{next.teaser}&rdquo;</p>
            <motion.button
              className="btn-cosmic mt-5"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => goToMission(nextId)}
            >
              Continue Exploring ↓
            </motion.button>
          </motion.div>
        )}

        {prevId && (
          <span className="prev-link" onClick={() => goToMission(prevId)}>
            ↑ Previous Mission
          </span>
        )}
      </div>
    </section>
  );
}

/** Small helper for the repeated "glass card" content blocks inside
 * missions — info cards, mind-blown takeaways, etc. Kept intentionally
 * dumb (just a styled reveal wrapper) so mission bodies stay readable. */
export function RevealBlock({
  children,
  delay = 0,
  className = '',
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={revealUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
