import MissionShell, { RevealBlock } from '@/components/MissionShell';
import CinematicZoom from '@/components/widgets/CinematicZoom';

export default function Mission8() {
  return (
    <MissionShell
      id="m8" index={8} emoji="🌌"
      title={<>How Big Is the <span className="text-gradient">Universe?</span></>}
      intro="No more slider. Just keep scrolling — the camera pulls back, and nothing you've already seen disappears. 🔭"
      next={{ emoji: '🕳️', title: "Black Holes Explained Like You're 5", teaser: 'Some things in space are so heavy… they bend reality itself.' }}
    >
      <CinematicZoom />

      <RevealBlock className="glass mt-8" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
        <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
        <p className="mt-1" style={{ color: 'var(--muted)' }}>There are more stars in the observable universe than grains of sand on every beach on Earth. And the universe is so wide that light from its edge has been traveling for <b>13.8 billion years</b> to reach us.</p>
      </RevealBlock>
    </MissionShell>
  );
}
