import MissionShell, { RevealBlock } from '@/components/MissionShell';
import WarpGrid from '@/components/widgets/WarpGrid';
import RevealBox from '@/components/widgets/RevealBox';

export default function Mission9() {
  return (
    <MissionShell
      id="m9" index={9} emoji="🕳️"
      title={<>Black Holes <span className="text-gradient">Explained Like You&apos;re 5</span></>}
      intro="Imagine a stretchy blanket held tight by four friends. That flat blanket? That's space itself. 🛏️"
      introMaxWidth={620}
      next={{ emoji: '🕳️', title: 'Falling Into a Black Hole', teaser: "Purely hypothetical. Please don't try this at home." }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
        <RevealBlock className="glass" style={{ padding: '1.4rem', borderRadius: 22 }}>
          <p style={{ color: 'var(--electric-blue)', fontWeight: 600, marginBottom: '.6rem' }}>🎳 Drag the weight onto the blanket</p>
          <WarpGrid />
          <p className="text-center text-xs mt-2" style={{ color: 'var(--muted)' }}>Heavy things sink into space and make a dip. That dip <i>is</i> gravity.</p>
        </RevealBlock>
        <div className="space-y-4">
          <RevealBlock className="glass card-lift" style={{ padding: '1.3rem', borderRadius: 18 }}>
            <p style={{ fontWeight: 600 }}>⚽ A bowling ball on the blanket…</p>
            <p className="mt-1" style={{ color: 'var(--muted)' }}>…makes a deep dip. Roll a marble nearby and it curves toward the ball. Planets orbit the Sun for exactly this reason!</p>
          </RevealBlock>
          <RevealBlock delay={0.1}>
            <RevealBox prompt="🕳️ So what's a black hole?" className="reveal-box glass card-lift" style={{ padding: '1.3rem', borderRadius: 18 }}>
              A dip so incredibly deep that the blanket rips. Anything that rolls too close falls in forever. The &quot;edge of no return&quot; is called the <b>event horizon</b>.
            </RevealBox>
          </RevealBlock>
          <RevealBlock delay={0.2}>
            <RevealBox prompt="💡 Can light escape?" className="reveal-box glass card-lift" style={{ padding: '1.3rem', borderRadius: 18 }}>
              Nope! Not even light — the fastest thing in the universe — is quick enough to climb out. That&apos;s <i>why</i> it looks black. 🌑
            </RevealBox>
          </RevealBlock>
        </div>
      </div>

      <RevealBlock className="glass mt-8" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
        <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
        <p className="mt-1" style={{ color: 'var(--muted)' }}>Gravity isn&apos;t a &quot;pull.&quot; It&apos;s the <i>shape</i> of space. Heavy things bend space, and everything else just rolls along the curves. 🌀</p>
      </RevealBlock>
    </MissionShell>
  );
}
