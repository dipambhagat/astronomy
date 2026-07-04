import MissionShell, { RevealBlock } from '@/components/MissionShell';
import ZoomSlider from '@/components/widgets/ZoomSlider';

const LEVELS = [
  { emoji: '🌍', title: 'Earth', desc: 'Your home. Feels enormous, right? Keep going…' },
  { emoji: '🌝', title: 'The Moon', desc: 'Our closest neighbour — a 3-day trip by rocket.' },
  { emoji: '☀️', title: 'The Sun', desc: 'One million Earths could fit inside it. Still just getting started…' },
  { emoji: '🪐', title: 'The Solar System', desc: '8 planets orbiting one star. Light takes hours to cross it.' },
  { emoji: '🌌', title: 'The Milky Way', desc: '100+ billion stars. Crossing it at light-speed? 100,000 years.' },
  { emoji: '✨', title: 'The Local Group', desc: 'Our galaxy plus dozens of neighbours, like Andromeda.' },
  { emoji: '🕸️', title: 'The Observable Universe', desc: '2 trillion galaxies. And this is only the part we can SEE. No way…' },
];

export default function Mission8() {
  return (
    <MissionShell
      id="m8" index={8} emoji="🌌"
      title={<>How Big Is the <span className="text-gradient">Universe?</span></>}
      intro="Let's start at your feet… and keep zooming out until your brain melts. Drag the slider. 🔭"
      next={{ emoji: '🕳️', title: "Black Holes Explained Like You're 5", teaser: 'Some things in space are so heavy… they bend reality itself.' }}
    >
      <RevealBlock><ZoomSlider levels={LEVELS} minLabel="Earth" maxLabel="Universe" onEndMessage="Told you your brain would melt 🤯" /></RevealBlock>

      <RevealBlock className="glass mt-8" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
        <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
        <p className="mt-1" style={{ color: 'var(--muted)' }}>There are more stars in the observable universe than grains of sand on every beach on Earth. And the universe is so wide that light from its edge has been traveling for <b>13.8 billion years</b> to reach us.</p>
      </RevealBlock>
    </MissionShell>
  );
}
