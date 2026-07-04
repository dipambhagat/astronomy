'use client';

import { Howl } from 'howler';

/**
 * Single global soundtrack instance. Playback is continuous across the
 * entire page — created once, never re-created, never seeked between
 * missions. Volume is the only thing that moves, driven by AudioDirector's
 * scroll-linked automation.
 *
 * NOTE: /public/audio/soundtrack.mp3 is a placeholder path. This project
 * ships without an actual audio file — licensed music must be added by the
 * site owner. See public/audio/README.txt.
 */

const STORAGE_KEY = 'universe-sound-enabled';
let howl: Howl | null = null;
let currentVolume = 0;

function getHowl(): Howl {
  if (!howl) {
    howl = new Howl({
      src: ['/audio/soundtrack.mp3'],
      loop: true,
      volume: 0,
      html5: true, // streams rather than fully decoding — better for a long ambient track
    });
  }
  return howl;
}

export function hasSoundConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(STORAGE_KEY) === 'true';
}

export function setSoundConsent(enabled: boolean) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, enabled ? 'true' : 'false');
}

/**
 * Attempts playback. Must be called from a real user gesture (button
 * click) the first time — browsers will reject it otherwise, which is
 * exactly the case the intro overlay / resume-hint exist to handle.
 * Resolves true/false based on Howler's actual play/playerror events,
 * since autoplay blocks surface asynchronously, not as thrown errors.
 */
export function tryStartPlayback(): Promise<boolean> {
  const h = getHowl();
  if (h.playing()) return Promise.resolve(true);
  return new Promise((resolve) => {
    const onPlay = () => { cleanup(); resolve(true); };
    const onError = () => { cleanup(); resolve(false); };
    function cleanup() { h.off('play', onPlay); h.off('playerror', onError); }
    h.once('play', onPlay);
    h.once('playerror', onError);
    try {
      h.play();
    } catch {
      cleanup();
      resolve(false);
    }
  });
}

export function stopPlayback() {
  if (howl) howl.pause();
}

/** Directly sets volume (0–1). Called continuously by AudioDirector during
 * scroll — this IS the "GainNode automation," expressed through Howler's
 * volume() call, which sets the underlying Web Audio GainNode value. */
export function setVolume(v: number) {
  const clamped = Math.max(0, Math.min(1, v));
  if (Math.abs(clamped - currentVolume) < 0.001) return;
  currentVolume = clamped;
  getHowl().volume(clamped);
}

export function getVolume() {
  return currentVolume;
}
