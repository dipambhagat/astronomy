import MissionShell, { RevealBlock } from '@/components/MissionShell';
import ZoomSlider from '@/components/widgets/ZoomSlider';

const LEVELS = [
  { emoji: '🧍', title: 'You', desc: "About 1.7 meters tall. Feels like a lot when you're the one standing here." },
  { emoji: '🏠', title: 'Your Room', desc: 'You could fit dozens of you across it. Still just one tiny room.' },
  { emoji: '🏙️', title: 'Your City', desc: 'Hundreds of thousands — sometimes millions — of people share this space with you.' },
  { emoji: '🗺️', title: 'Your Country', desc: "Now you're one of tens of millions, scattered across a landmass you'll never fully walk." },
  { emoji: '🌍', title: 'Planet Earth', desc: 'Every country, every city, every person who has ever lived — all on one ball of rock.' },
  { emoji: '🌎', title: 'Earth From Space', desc: "From orbit, borders vanish. It's just one blue marble, floating in the dark." },
  { emoji: '🌌', title: '…and this is where Mission 8 begins', desc: "Earth was already the biggest thing you could imagine. Let's keep going." },
];

export default function Mission7() {
  return (
    <MissionShell
      id="m7" index={7} emoji="🧍"
      title={<>How Small <span className="text-gradient">Are You?</span></>}
      intro="You're standing somewhere right now. Let's zoom out and see just how small that spot really is. 🔎"
      next={{ emoji: '🌌', title: 'How Big Is the Universe?', teaser: 'Earth was already the biggest thing you could imagine. Let\u2019s keep going…' }}
    >
      <RevealBlock><ZoomSlider levels={LEVELS} minLabel="You" maxLabel="Earth" /></RevealBlock>

      <RevealBlock className="glass mt-8" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
        <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
        <p className="mt-1" style={{ color: 'var(--muted)' }}>Zoom out enough, and &quot;me&quot; turns into &quot;us,&quot; and &quot;us&quot; turns into &quot;one tiny speck.&quot; Both are true at the same time.</p>
      </RevealBlock>
    </MissionShell>
  );
}
