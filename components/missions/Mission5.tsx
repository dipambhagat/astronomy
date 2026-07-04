import MissionShell, { RevealBlock } from '@/components/MissionShell';
import PickGrid, { PickItem } from '@/components/widgets/PickGrid';

const STARS: PickItem[] = [
  { key: 'red', display: <div className="star-orb mx-auto" style={{ width: 38, height: 38, background: 'radial-gradient(circle at 35% 30%,#ffd0a0,#ff5a4d)', boxShadow: '0 0 26px #ff5a4d' }} />, resultTitle: 'Red Dwarf', resultBody: '~3,000°C — coolest, tiny & long-lived' },
  { key: 'sun', display: <div className="star-orb mx-auto" style={{ width: 66, height: 66, background: 'radial-gradient(circle at 35% 30%,#fff5c2,#ffb43a)', boxShadow: '0 0 40px #ffb43a' }} />, resultTitle: 'Our Sun ☀️', resultBody: '~5,500°C — a friendly yellow star (that\u2019s us!)' },
  { key: 'white', display: <div className="star-orb mx-auto" style={{ width: 92, height: 92, background: 'radial-gradient(circle at 35% 30%,#fff,#dce9ff)', boxShadow: '0 0 46px #cfe0ff' }} />, resultTitle: 'White Star', resultBody: '~9,000°C — hot, bright & brilliant white' },
  { key: 'blue', display: <div className="star-orb mx-auto" style={{ width: 128, height: 128, background: 'radial-gradient(circle at 35% 30%,#eaf3ff,#4a7bff)', boxShadow: '0 0 60px #4a7bff' }} />, resultTitle: 'Blue Giant', resultBody: '~25,000°C — hottest, fast-burning & massive' },
];

export default function Mission5() {
  return (
    <MissionShell
      id="m5" index={5} emoji="🌞"
      title={<>Meet the <span className="text-gradient">Stars</span></>}
      intro="A star is just a giant ball of glowing gas — like a cosmic campfire 🔥 so big it lights up entire worlds. But not all stars are the same…"
      next={{ emoji: '🍂', title: 'Why Do We Have Seasons?', teaser: "Hint: it has almost nothing to do with distance from the Sun…" }}
    >
      <RevealBlock className="glass mt-8" style={{ padding: '1.8rem 1.4rem', borderRadius: 22 }}>
        <p className="font-display text-xl mb-1">🌡️ Star colours = star temperatures</p>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>Tap a star. Cooler than you&apos;d think: red is <i>cold</i>, blue is <i>scorching</i>.</p>
        <PickGrid items={STARS} placeholder="👆 Pick a star to compare…" gridClassName="flex flex-wrap items-end justify-center gap-6" hoverToPreview />
      </RevealBlock>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <RevealBlock className="glass card-lift" style={{ padding: '1.4rem', borderRadius: 20 }}>
          <p style={{ color: 'var(--electric-blue)', fontWeight: 600 }}>👶 How is a star born?</p>
          <p className="mt-2" style={{ color: 'var(--muted)' }}>A giant cloud of gas &amp; dust slowly clumps together under gravity. It squeezes tighter… and tighter… until — <b>whoomph</b> — the center ignites like a lightbulb switching on. A star is born! ✨</p>
        </RevealBlock>
        <RevealBlock delay={0.1} className="glass" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
          <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
          <p className="mt-1" style={{ color: 'var(--muted)' }}>Our mighty Sun is actually an average, middle-sized star. And it&apos;s just <b>one</b> of about 100 billion stars in our galaxy alone.</p>
        </RevealBlock>
      </div>
    </MissionShell>
  );
}
