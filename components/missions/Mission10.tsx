import MissionShell, { RevealBlock } from '@/components/MissionShell';
import StepTimeline from '@/components/widgets/StepTimeline';

export default function Mission10() {
  return (
    <MissionShell
      id="m10" index={10} emoji="🕳️"
      title={<>What Happens If You <span className="text-gradient">Fall Into a Black Hole?</span></>}
      intro="Purely hypothetical. Please don't try this at home. 😅 Tap to run the fall."
      introMaxWidth={620}
      next={{ emoji: '👽', title: 'Could Aliens Exist?', teaser: 'With billions of worlds out there… are we really alone?' }}
    >
      <StepTimeline
        buttonLabel="🕳️ Start Falling"
        runningLabel="Falling…"
        doneMessage="Don't worry — purely hypothetical! 🕳️✨"
        steps={[
          { label: 'Far away', color: 'var(--electric-blue)', text: "You're approaching safely. From out here, gravity feels totally normal — no different from Earth's. 🚀" },
          { label: 'Crossing the event horizon', color: 'var(--warm-yellow)', text: "The point of no return. Nothing looks different in this instant — but you can never leave. Light itself can't escape from here anymore. 🌑" },
          { label: 'Getting closer to the center', color: 'var(--nebula-pink)', text: <>Gravity pulls harder on your feet than your head — the difference stretches you like taffy. Scientists actually call this <b>spaghettification</b>. 🍝</> },
          { label: 'Meanwhile, from outside', color: 'var(--galaxy-purple)', text: "Friends watching from far away would see you slow down and freeze at the edge forever, fading redder and dimmer — they'd never actually see you cross. 👀" },
          { label: 'Inside', color: '#7fd3ff', text: "What happens next isn't fully known — this is one of the biggest unsolved mysteries in physics. Even Einstein's equations start breaking down here. 🌀" },
        ]}
      />

      <RevealBlock className="glass mt-8" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
        <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
        <p className="mt-1" style={{ color: 'var(--muted)' }}>The same event looks completely different depending on where you&apos;re standing — that&apos;s not a metaphor, it&apos;s real physics. Falling in changes you; watching it changes what you see.</p>
      </RevealBlock>
    </MissionShell>
  );
}
