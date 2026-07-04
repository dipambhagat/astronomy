import MissionShell, { RevealBlock } from '@/components/MissionShell';

export default function Mission14() {
  return (
    <MissionShell
      id="m14" index={14} emoji="🚀"
      title={<>The End of <span className="text-gradient">Everything</span></>}
      intro="Don't worry — this is trillions of years away. But how might the story end? 🌠"
      introMaxWidth={620}
    >
      <div className="grid sm:grid-cols-2 gap-5 mt-8">
        <RevealBlock className="glass card-lift" style={{ padding: '1.5rem', borderRadius: 20 }}>
          <p style={{ color: 'var(--electric-blue)', fontWeight: 600 }}>💫 Stars will die</p>
          <p className="mt-2" style={{ color: 'var(--muted)' }}>Big stars explode as supernovas 💥; small ones fade to glowing embers. New stars form from the ashes — for now.</p>
        </RevealBlock>
        <RevealBlock delay={0.1} className="glass card-lift" style={{ padding: '1.5rem', borderRadius: 20 }}>
          <p style={{ color: 'var(--nebula-pink)', fontWeight: 600 }}>🌌 Galaxies will collide</p>
          <p className="mt-2" style={{ color: 'var(--muted)' }}>In ~4 billion years, our Milky Way will gently merge with Andromeda. Stars are so far apart, almost nothing crashes. 🤝</p>
        </RevealBlock>
        <RevealBlock delay={0.2} className="glass card-lift" style={{ padding: '1.5rem', borderRadius: 20 }}>
          <p style={{ color: 'var(--galaxy-purple)', fontWeight: 600 }}>🎈 Space keeps stretching</p>
          <p className="mt-2" style={{ color: 'var(--muted)' }}>The universe is expanding — like dots on an inflating balloon, everything drifts farther apart, faster and faster.</p>
        </RevealBlock>
        <RevealBlock delay={0.3} className="glass card-lift" style={{ padding: '1.5rem', borderRadius: 20 }}>
          <p style={{ color: 'var(--warm-yellow)', fontWeight: 600 }}>❄️ Possible endings</p>
          <p className="mt-2" style={{ color: 'var(--muted)' }}>The &quot;Big Freeze&quot;: stars burn out and the cosmos fades to a quiet, cold dark. Other ideas? A &quot;Big Rip,&quot; or even a bounce into a new beginning.</p>
        </RevealBlock>
      </div>

      <RevealBlock className="glass mt-8" style={{ padding: '1.6rem', borderRadius: 22, textAlign: 'center', border: '1px solid rgba(123,92,255,.4)' }}>
        <p className="font-display" style={{ fontSize: 'clamp(1.2rem,3vw,1.8rem)' }}>And yet… you&apos;re here <b className="text-gradient">right now</b>,</p>
        <p className="mt-2" style={{ color: 'var(--muted)' }}>made of atoms forged inside ancient stars, staring back at the universe and understanding it. 🌌</p>
      </RevealBlock>
    </MissionShell>
  );
}
