'use client';

export type RenderTier = 'high' | 'medium' | 'low' | 'fallback2d';

export interface TierConfig {
  starCount: number;
  dpr: number;
  showShip: boolean;
}

export const TIER_CONFIG: Record<Exclude<RenderTier, 'fallback2d'>, TierConfig> = {
  high: { starCount: 6000, dpr: 2, showShip: true },
  medium: { starCount: 2800, dpr: 1.5, showShip: true },
  low: { starCount: 1200, dpr: 1, showShip: false },
};

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
}

/**
 * Heuristic device tiering. Not scientific — just enough signal to avoid
 * shipping full particle counts + high DPR to a low-end phone. Errs toward
 * the safer/lower tier whenever a signal is ambiguous or unavailable.
 */
export function detectTier(): RenderTier {
  if (typeof window === 'undefined') return 'medium'; // SSR default, resolved on client
  if (!hasWebGL()) return 'fallback2d';

  const nav = window.navigator as Navigator & { deviceMemory?: number };
  const cores = nav.hardwareConcurrency ?? 4;
  const memory = nav.deviceMemory ?? 4;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const isSmallScreen = window.innerWidth < 768;

  // Low-end mobile signal: few cores, low memory, small touch screen.
  if (isCoarsePointer && (cores <= 4 || memory <= 2) && isSmallScreen) return 'low';

  // Mid-tier: any touch device, or modest desktop hardware.
  if (isCoarsePointer || cores <= 4 || memory <= 4) return 'medium';

  return 'high';
}
