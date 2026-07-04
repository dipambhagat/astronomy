import MissionShell, { RevealBlock } from '@/components/MissionShell';
import Counter from '@/components/widgets/Counter';
import AlienBuilder from '@/components/widgets/AlienBuilder';

export default function Mission11() {
  return (
    <MissionShell
      id="m11" index={11} emoji="👽"
      title={<>Could <span className="text-gradient">Aliens Exist?</span></>}
      intro="No conspiracy theories — just real science. Let's follow the numbers. 🔬"
      introMaxWidth={620}
      next={{ emoji: '🌀', title: 'How Fast Are You Actually Moving?', teaser: "Sit still for a second… you're not actually still. Not even close." }}
    >
      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <RevealBlock className="glass card-lift text-center" style={{ padding: '1.5rem', borderRadius: 20 }}>
          <Counter target={100} suffix=" billion" />
          <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>stars in our galaxy 🌟</p>
        </RevealBlock>
        <RevealBlock delay={0.1} className="glass card-lift text-center" style={{ padding: '1.5rem', borderRadius: 20 }}>
          <Counter target={2} suffix=" trillion" />
          <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>galaxies in the universe 🌌</p>
        </RevealBlock>
        <RevealBlock delay={0.2} className="glass card-lift text-center" style={{ padding: '1.5rem', borderRadius: 20 }}>
          <Counter target={40} suffix=" billion" />
          <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>Earth-like planets (Milky Way) 🪐</p>
        </RevealBlock>
      </div>

      <RevealBlock className="glass card-lift mt-8" style={{ padding: '1.4rem', borderRadius: 20 }}>
        <p style={{ color: 'var(--electric-blue)', fontWeight: 600 }}>🥣 The &quot;Goldilocks&quot; zone</p>
        <p className="mt-2" style={{ color: 'var(--muted)' }}>Life (as we know it) needs liquid water. Too close to a star = too hot 🔥. Too far = too cold 🧊. The &quot;just right&quot; ring around a star is called the <b>habitable zone</b>. Scientists hunt for planets sitting right there.</p>
      </RevealBlock>

      <RevealBlock><AlienBuilder /></RevealBlock>
    </MissionShell>
  );
}
