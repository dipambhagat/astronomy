'use client';

import Hero from '@/components/Hero';
import Starfield from '@/components/Starfield';
import ShootingStars from '@/components/ShootingStars';
import Twinkle from '@/components/Twinkle';
import ConfettiCanvas from '@/components/ConfettiCanvas';
import ProgressBar from '@/components/ProgressBar';
import MissionProgressEffects from '@/components/MissionProgressEffects';
import NavPanel from '@/components/NavPanel';
import Mascot from '@/components/Mascot';
import IntroOverlay from '@/components/IntroOverlay';
import SoundResumeHint from '@/components/SoundResumeHint';
import AudioDirector from '@/components/AudioDirector';
import RealismOverlay from '@/components/RealismOverlay';
import Finale from '@/components/Finale';

import Mission1 from '@/components/missions/Mission1';
import Mission2 from '@/components/missions/Mission2';
import Mission3 from '@/components/missions/Mission3';
import Mission4 from '@/components/missions/Mission4';
import Mission5 from '@/components/missions/Mission5';
import Mission6 from '@/components/missions/Mission6';
import Mission7 from '@/components/missions/Mission7';
import Mission8 from '@/components/missions/Mission8';
import Mission9 from '@/components/missions/Mission9';
import Mission10 from '@/components/missions/Mission10';
import Mission11 from '@/components/missions/Mission11';
import Mission12 from '@/components/missions/Mission12';
import Mission13 from '@/components/missions/Mission13';
import Mission14 from '@/components/missions/Mission14';

export default function SiteExperience() {
  return (
    <>
      <div className="sky-fixed" />
      <div className="nebula-layer" />
      <RealismOverlay />
      <Starfield />
      <ShootingStars />
      <Twinkle />
      <ConfettiCanvas />

      <ProgressBar />
      <AudioDirector />
      <MissionProgressEffects />
      <NavPanel />
      <Mascot />
      <IntroOverlay />
      <SoundResumeHint />

      <Hero />
      <Mission1 />
      <Mission2 />
      <Mission3 />
      <Mission4 />
      <Mission5 />
      <Mission6 />
      <Mission7 />
      <Mission8 />
      <Mission9 />
      <Mission10 />
      <Mission11 />
      <Mission12 />
      <Mission13 />
      <Mission14 />
      <Finale />
    </>
  );
}
