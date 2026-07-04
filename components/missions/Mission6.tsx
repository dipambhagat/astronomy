import MissionShell, { RevealBlock } from '@/components/MissionShell';
import SeasonsSlider from '@/components/widgets/SeasonsSlider';
import RevealBox from '@/components/widgets/RevealBox';

export default function Mission6() {
  return (
    <MissionShell
      id="m6" index={6} emoji="🍂"
      title={<>Why Do We Have <span className="text-gradient">Seasons?</span></>}
      intro="Hint: it has almost nothing to do with how close Earth is to the Sun. 🌍"
      introMaxWidth={620}
      next={{ emoji: '🧍', title: 'How Small Are You?', teaser: "You're standing somewhere right now. Let's zoom out…" }}
    >
      <RevealBlock className="glass card-lift mt-8" style={{ padding: '1.6rem', borderRadius: 22, maxWidth: 660 }}>
        <p style={{ color: 'var(--electric-blue)', fontWeight: 600 }}>❄️🔥 Busted: distance isn&apos;t the reason</p>
        <p className="mt-2" style={{ color: 'var(--muted)' }}>Earth is actually <b>closest</b> to the Sun in January — right in the middle of the Northern Hemisphere&apos;s winter! Seasons come from something else entirely: Earth&apos;s tilt.</p>
      </RevealBlock>

      <RevealBlock><SeasonsSlider /></RevealBlock>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <RevealBlock>
          <RevealBox prompt="🙃 Why are the hemispheres always opposite?" className="reveal-box glass card-lift" style={{ padding: '1.4rem', borderRadius: 20 }}>
            Earth&apos;s tilt stays pointed the same direction in space all year. So for half the year the North leans toward the Sun (direct, concentrated light = summer) while the South leans away (winter). Six months later, it flips.
          </RevealBox>
        </RevealBlock>
        <RevealBlock delay={0.1} className="glass" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
          <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
          <p className="mt-1" style={{ color: 'var(--muted)' }}>You don&apos;t get summer because Earth gets closer to the Sun. You get summer because your hemisphere leans toward it and catches sunlight at a steeper, more concentrated angle.</p>
        </RevealBlock>
      </div>
    </MissionShell>
  );
}
