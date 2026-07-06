'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';
import { detectTier, TIER_CONFIG, RenderTier } from '@/lib/deviceTier';
import { FLIGHT_LENGTH } from '@/lib/flightPath';
import StarField3D from './StarField3D';
import SpaceshipModel from './SpaceshipModel';
import CameraRig from './CameraRig';
import ScrollCameraDriver from './ScrollCameraDriver';
import Starfield2D from '@/components/Starfield';
import Twinkle from '@/components/Twinkle';
import ShootingStars from '@/components/ShootingStars';

/**
 * Decides between the full 3D flight scene, a reduced-quality version, or
 * the original 2D canvas starfield — per device tier (see lib/deviceTier).
 * This is the "no lag" guarantee: low-end devices never touch WebGL here.
 */
export default function UniverseScene() {
  const [tier, setTier] = useState<RenderTier | null>(null);
  const reduce = useReducedMotion();
  const shipRef = useRef<THREE.Group>(null);

  useEffect(() => { setTier(detectTier()); }, []);

  if (tier === null) return null; // resolves within a frame, avoids SSR flash
  if (tier === 'fallback2d') {
    return (
      <>
        <Starfield2D />
        <ShootingStars />
        <Twinkle />
      </>
    );
  }

  const cfg = TIER_CONFIG[tier];

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
      <ScrollCameraDriver />
      <Canvas
        dpr={reduce ? 1 : cfg.dpr}
        gl={{ antialias: false, alpha: false }}
        camera={{ fov: 55, near: 0.1, far: 300 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <StarField3D count={cfg.starCount} pathLength={FLIGHT_LENGTH} />
        {cfg.showShip && !reduce && <SpaceshipModel ref={shipRef} />}
        <CameraRig shipRef={shipRef} reduce={!!reduce} />
      </Canvas>
    </div>
  );
}
