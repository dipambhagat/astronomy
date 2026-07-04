import { Variants } from 'framer-motion';

/**
 * Shared motion language for the whole site. Keeping these centralized means
 * every "reveal" across 14 missions moves with the same physics — consistency
 * is what makes the motion feel designed rather than sprinkled on.
 */

export const EASE_SETTLE = [0.16, 0.86, 0.24, 1] as const; // heavy, deliberate arrival
export const EASE_SPRING_SOFT = [0.34, 1.4, 0.5, 1] as const; // slight overshoot, invites interaction

/** Generic scroll-triggered reveal: fade + gentle rise. Used by MissionShell
 * for every content block. Distance/timing intentionally match the original
 * site's .reveal class so the pacing feels identical. */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_SETTLE },
  },
};

/** Stagger container for groups of cards/blocks within a mission. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/** Hero-only motion signatures — each element has a distinct weight/speed,
 * matching the choreography agreed with the design brief. */
export const heroKicker: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: EASE_SETTLE } },
};

export const heroSmall: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const heroCtas: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE_SPRING_SOFT } },
};

export const heroScrollcue: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

/** Card-lift hover, expressed as Framer Motion props for interactive cards
 * that need tap feedback too (buttons, quiz options, pick-grid items). */
export const tapLift = {
  whileHover: { y: -6 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.25, ease: 'easeOut' },
};
