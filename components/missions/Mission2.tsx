import MissionShell, { RevealBlock } from '@/components/MissionShell';
import MoonPhaseDrag from '@/components/widgets/MoonPhaseDrag';
import RevealBox from '@/components/widgets/RevealBox';

export default function Mission2() {
  return (
    <MissionShell
      id="m2" index={2} emoji="🌗"
      title={<>What Is <span className="text-gradient">the Moon?</span></>}
      intro="It's not a planet, not a star… so what exactly is the Moon, and why does it keep changing shape? 🌗"
      next={{ emoji: '⭐', title: 'The Sky Is a Time Machine', teaser: 'The stars above you are actually messages from the past…' }}
    >
      <RevealBlock className="glass card-lift mt-8" style={{ padding: '1.6rem', borderRadius: 22, maxWidth: 640 }}>
        <p style={{ color: 'var(--electric-blue)', fontWeight: 600 }}>🪨 A big rock, orbiting a big rock</p>
        <p className="mt-2" style={{ color: 'var(--muted)' }}>The Moon is basically a giant ball of rock about a quarter of Earth&apos;s width, held in orbit by gravity — same idea as Mission 1, just on a smaller scale.</p>
      </RevealBlock>

      <RevealBlock><MoonPhaseDrag /></RevealBlock>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <RevealBlock>
          <RevealBox prompt="🌑 Why does it change shape?" className="reveal-box glass card-lift" style={{ padding: '1.4rem', borderRadius: 20 }}>
            It doesn&apos;t actually change shape — the Moon is always a full sphere. What changes is how much of its sunlit side we can see from Earth as it orbits. The &quot;shape&quot; is just sunlight and shadow.
          </RevealBox>
        </RevealBlock>
        <RevealBlock delay={0.1} className="glass" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
          <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
          <p className="mt-1" style={{ color: 'var(--muted)' }}>The Moon doesn&apos;t make its own light. Every glow you&apos;ve ever seen from it is just reflected sunlight, bouncing off a giant grey rock.</p>
        </RevealBlock>
      </div>
    </MissionShell>
  );
}
