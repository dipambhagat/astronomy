import MissionShell, { RevealBlock } from '@/components/MissionShell';
import SkyColorSlider from '@/components/widgets/SkyColorSlider';
import RevealBox from '@/components/widgets/RevealBox';

export default function Mission4() {
  return (
    <MissionShell
      id="m4" index={4} emoji="🔵"
      title={<>Why Is the <span className="text-gradient">Sky Blue?</span></>}
      intro="And why does it turn orange and red at sunset? Same reason, different angle. 🌇"
      next={{ emoji: '🌞', title: 'Meet the Stars', teaser: 'Our Sun is just one tiny member of an unimaginable family…' }}
    >
      <RevealBlock className="glass card-lift mt-8" style={{ padding: '1.6rem', borderRadius: 22, maxWidth: 640 }}>
        <p style={{ color: 'var(--electric-blue)', fontWeight: 600 }}>🌈 Sunlight is secretly every color</p>
        <p className="mt-2" style={{ color: 'var(--muted)' }}>Normal sunlight looks white, but it&apos;s actually a mix of every color of the rainbow. Air molecules scatter blue wavelengths around the sky far more than red ones — that scattered blue is what reaches your eyes from every direction.</p>
      </RevealBlock>

      <RevealBlock><SkyColorSlider /></RevealBlock>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <RevealBlock>
          <RevealBox prompt="🌌 Why is space black, if light is everywhere?" className="reveal-box glass card-lift" style={{ padding: '1.4rem', borderRadius: 20 }}>
            Space has no air to scatter light! With nothing to bounce sunlight toward your eyes except stars themselves, it stays black even in full daylight — just like astronauts see it.
          </RevealBox>
        </RevealBlock>
        <RevealBlock delay={0.1} className="glass" style={{ padding: '1.4rem', borderRadius: 20, borderLeft: '3px solid var(--warm-yellow)' }}>
          <p style={{ fontWeight: 600, color: 'var(--warm-yellow)' }}>🤯 Mind-blown takeaway</p>
          <p className="mt-1" style={{ color: 'var(--muted)' }}>The sky isn&apos;t &quot;colored.&quot; It&apos;s sunlight getting bounced around by air until blue is the color left facing you.</p>
        </RevealBlock>
      </div>
    </MissionShell>
  );
}
