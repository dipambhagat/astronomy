import MissionShell, { RevealBlock } from '@/components/MissionShell';
import Counter from '@/components/widgets/Counter';

export default function Mission12() {
  return (
    <MissionShell
      id="m12" index={12} emoji="🌀"
      title={<>How Fast Are You <span className="text-gradient">Actually Moving?</span></>}
      intro="Sit still for a second… you're not actually still. Not even close. 🚀"
      introMaxWidth={620}
      next={{ emoji: '☀️', title: 'What If the Sun Disappeared?', teaser: "Poof. It's gone. What happens next might surprise you…" }}
    >
      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <RevealBlock className="glass card-lift text-center" style={{ padding: '1.5rem', borderRadius: 20 }}>
          <Counter target={1000} suffix=" mph" fontSize="1.8rem" />
          <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>Earth spinning under your feet 🌍</p>
        </RevealBlock>
        <RevealBlock delay={0.1} className="glass card-lift text-center" style={{ padding: '1.5rem', borderRadius: 20 }}>
          <Counter target={67000} suffix=" mph" fontSize="1.8rem" />
          <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>Earth orbiting the Sun ☀️</p>
        </RevealBlock>
        <RevealBlock delay={0.2} className="glass card-lift text-center" style={{ padding: '1.5rem', borderRadius: 20 }}>
          <Counter target={500000} suffix=" mph" fontSize="1.8rem" />
          <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>Solar System orbiting the galaxy 🌌</p>
        </RevealBlock>
      </div>

      <RevealBlock className="glass card-lift mt-8" style={{ padding: '1.4rem', borderRadius: 20 }}>
        <p style={{ color: 'var(--electric-blue)', fontWeight: 600 }}>🧍 Why don&apos;t you feel it?</p>
        <p className="mt-2" style={{ color: 'var(--muted)' }}>Because everything around you — the ground, the air, the chair you&apos;re sitting in — is moving at exactly the same speed. There&apos;s nothing nearby moving differently to compare yourself to. Same reason a smooth train ride feels still until you look out the window.</p>
      </RevealBlock>

      <RevealBlock className="glass mt-8" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
        <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
        <p className="mt-1" style={{ color: 'var(--muted)' }}>Add it all up, and right now you&apos;re rocketing through the galaxy at roughly 500,000 mph — while sitting in a chair, feeling perfectly still.</p>
      </RevealBlock>
    </MissionShell>
  );
}
