'use client';

const KEY = 'universe-intro-seen';

export function hasSeenIntro(): boolean {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(KEY) === 'true';
}

export function markIntroSeen() {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(KEY, 'true');
}
