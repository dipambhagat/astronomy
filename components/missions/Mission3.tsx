import MissionShell, { RevealBlock } from '@/components/MissionShell';
import PickGrid, { PickItem } from '@/components/widgets/PickGrid';
import RevealBox from '@/components/widgets/RevealBox';

const LIGHT_ITEMS: PickItem[] = [
  { key: 'moon', display: <>🌙<div className="mt-1 text-sm">The Moon</div></>, resultTitle: '🌙 The Moon', resultBody: "You're seeing light from 1.3 seconds ago" },
  { key: 'sun', display: <>☀️<div className="mt-1 text-sm">The Sun</div></>, resultTitle: '☀️ The Sun', resultBody: "You're seeing light from 8 minutes ago" },
  { key: 'star', display: <>⭐<div className="mt-1 text-sm">Nearest Star</div></>, resultTitle: '⭐ Nearest Star', resultBody: "You're seeing light from 4 years ago" },
  { key: 'andromeda', display: <>🌌<div className="mt-1 text-sm">Andromeda</div></>, resultTitle: '🌌 Andromeda', resultBody: "You're seeing light from 2.5 MILLION years ago" },
];

export default function Mission3() {
  return (
    <MissionShell
      id="m3" index={3} emoji="⭐"
      title={<>The Sky Is a <span className="text-gradient">Time Machine</span></>}
      intro="What if I told you that every time you look up… you're literally looking into the past? 🌟"
      next={{ emoji: '🔵', title: 'Why Is the Sky Blue?', teaser: 'And why does it turn orange at sunset? Same reason, different angle.' }}
    >
      <RevealBlock className="glass card-lift mt-8" style={{ padding: '1.6rem', borderRadius: 22, maxWidth: 640 }}>
        <p style={{ color: 'var(--electric-blue)', fontWeight: 600 }}>💌 Think of light like a letter…</p>
        <p className="mt-2" style={{ color: 'var(--muted)' }}>Light is fast, but space is unimaginably big. So light needs <i>time</i> to travel. When it finally reaches your eye, you&apos;re reading a letter the star mailed long ago.</p>
      </RevealBlock>

      <RevealBlock className="glass mt-8" style={{ padding: '1.6rem', borderRadius: 22 }}>
        <p className="font-display text-xl mb-1">🔦 How old is the light hitting your eyes?</p>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>Tap an object to see how far back in time you&apos;re looking.</p>
        <PickGrid items={LIGHT_ITEMS} placeholder="👆 Pick something above…" resultBodyColor="var(--electric-blue)" />
      </RevealBlock>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <RevealBlock>
          <RevealBox prompt="💀 Are the stars I see already dead?" className="reveal-box glass card-lift" style={{ padding: '1.4rem', borderRadius: 20 }}>
            Mostly a myth! Almost every star you see with your naked eye is still alive. Stars live for millions to billions of years — far longer than their light takes to reach us. But <i>some</i> very distant ones? Yeah… they could already be gone. 👻
          </RevealBox>
        </RevealBlock>
        <RevealBlock delay={0.1} className="glass" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
          <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
          <p className="mt-1" style={{ color: 'var(--muted)' }}>The night sky isn&apos;t a photo of &quot;now.&quot; It&apos;s a collage of a thousand different moments in history, all glowing at once.</p>
        </RevealBlock>
      </div>
    </MissionShell>
  );
}
