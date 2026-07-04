'use client';

export function openNavPanel() {
  window.dispatchEvent(new Event('open-nav-panel'));
}
