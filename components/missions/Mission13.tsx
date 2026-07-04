import MissionShell, { RevealBlock } from '@/components/MissionShell';
import StepTimeline from '@/components/widgets/StepTimeline';

export default function Mission13() {
  return (
    <MissionShell
      id="m13" index={13} emoji="☀️"
      title={<>What If the <span className="text-gradient">Sun Disappeared?</span></>}
      intro="Let's pretend someone flips a switch and the Sun vanishes instantly. Ready? Tap to run the countdown. ⏱️"
      introMaxWidth={620}
      next={{ emoji: '🚀', title: 'The End of Everything', teaser: "Every story has an ending — even the universe's." }}
    >
      <StepTimeline
        buttonLabel="💥 Make the Sun Disappear"
        runningLabel="Running…"
        doneMessage="Brrr… frozen Earth. Good thing it's just pretend! ❄️"
        steps={[
          { label: 'Immediately', color: 'var(--electric-blue)', text: 'Nothing happens! ✨ Earth keeps orbiting and the sky stays bright. Sunlight is already on its way…' },
          { label: '8 minutes later', color: 'var(--warm-yellow)', text: <>The last sunlight arrives — then <b>darkness</b>. At the same instant, gravity lets go and Earth flies off in a straight line. 🌑</> },
          { label: 'Days later', color: 'var(--nebula-pink)', text: 'Temperatures plummet below freezing. Plants stop making food. The stars, however, look brighter than ever. ❄️' },
          { label: 'Weeks later', color: 'var(--galaxy-purple)', text: "The surface freezes solid. But deep oceans stay liquid under thick ice — heated from Earth's own core. 🌊" },
          { label: 'Months → forever', color: '#7fd3ff', text: 'Earth becomes a frozen wanderer, drifting through the dark galaxy. Amazingly, tiny life near deep-sea vents might just hang on. 🦠' },
        ]}
      />

      <RevealBlock className="glass mt-8" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
        <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
        <p className="mt-1" style={{ color: 'var(--muted)' }}>We&apos;d feel the Sun vanish through <i>gravity</i> and <i>light</i> at the exact same moment — 8 minutes late. The Sun isn&apos;t just light. It&apos;s the anchor holding our whole neighborhood together.</p>
      </RevealBlock>
    </MissionShell>
  );
}
