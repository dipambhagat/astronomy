import MissionShell, { RevealBlock } from '@/components/MissionShell';
import EarthOrb from '@/components/widgets/EarthOrb';
import RevealBox from '@/components/widgets/RevealBox';
import Quiz from '@/components/widgets/Quiz';

export default function Mission1() {
  return (
    <MissionShell
      id="m1" index={1} emoji="🚀"
      title={<>Why Don&apos;t We <span className="text-gradient">Fall Off Earth?</span></>}
      intro="Earth is a giant spinning ball. So… why don't the people on the bottom just fall off into space? 🤔"
      introMaxWidth={560}
      next={{ emoji: '🌗', title: 'What Is the Moon?', teaser: "It's not a planet, not a star… so what exactly is up there?" }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
        <RevealBlock className="flex justify-center"><EarthOrb /></RevealBlock>
        <div className="space-y-4">
          <RevealBlock className="glass card-lift" style={{ padding: '1.4rem', borderRadius: 20 }}>
            <p style={{ color: 'var(--electric-blue)', fontWeight: 600 }}>🐜 Imagine an ant on a basketball…</p>
            <p className="mt-2" style={{ color: 'var(--muted)' }}>Walk it all the way around — it never falls off. To the ant, &quot;down&quot; is always toward the ball&apos;s center. Earth works exactly the same way.</p>
          </RevealBlock>
          <RevealBlock delay={0.1}>
            <RevealBox prompt="✋ So what's actually holding us?" className="reveal-box glass card-lift" style={{ padding: '1.4rem', borderRadius: 20 }}>
              <b>Gravity.</b> Everything with mass pulls other things toward it. Earth is HUGE, so it pulls everything — you, oceans, air — toward its center. There is no &quot;bottom&quot; of Earth. Every direction points down toward the middle. That&apos;s why Australians never fall off! 🇦🇺
            </RevealBox>
          </RevealBlock>
          <RevealBlock delay={0.2} className="glass" style={{ padding: '1.1rem 1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
            <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
            <p className="mt-1" style={{ color: 'var(--muted)' }}>You aren&apos;t standing <i>on</i> Earth. You&apos;re being <i>pulled into</i> it — gently, constantly, forever.</p>
          </RevealBlock>
        </div>
      </div>

      <Quiz
        prompt="If Earth were shaped like a giant flat pancake, gravity would pull you toward…"
        options={[
          { label: 'The edge of the pancake', correct: false },
          { label: 'The center of the pancake', correct: true },
          { label: 'Straight up into the sky', correct: false },
        ]}
      />
    </MissionShell>
  );
}
