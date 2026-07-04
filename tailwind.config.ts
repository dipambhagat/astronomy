import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-black': 'var(--space-black)',
        midnight: 'var(--midnight)',
        'galaxy-purple': 'var(--galaxy-purple)',
        'electric-blue': 'var(--electric-blue)',
        'deep-blue': 'var(--deep-blue)',
        'nebula-pink': 'var(--nebula-pink)',
        'warm-yellow': 'var(--warm-yellow)',
        'soft-white': 'var(--soft-white)',
        muted: 'var(--muted)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};

export default config;
