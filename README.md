# The Universe Explained Like You're 5

An interactive, 14-mission astronomy site — Next.js 14 (App Router) + TypeScript +
Tailwind CSS + Framer Motion + GSAP (ScrollTrigger).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Deploy on Vercel

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo at vercel.com/new — zero config needed, Vercel
auto-detects Next.js.

## Project structure

- `app/` — Next.js App Router entry (layout, global CSS, page)
- `components/` — Hero, MissionShell, nav/progress/mascot chrome, Finale
- `components/widgets/` — reusable interactive pieces (zoom slider, step
  timeline, moon-phase drag, warp grid, counters, etc.) shared across missions
- `components/missions/` — one file per mission (Mission1–Mission14), each
  composed from MissionShell + widgets
- `lib/` — mission metadata, motion variants, scroll/effects utilities
