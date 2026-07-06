'use client';

import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { scrollProgressRef } from '@/lib/scrollProgressRef';
import { FLIGHT_CURVE } from '@/lib/flightPath';

/** Chase camera: ship sits at current scroll progress along the flight
 * curve, camera trails slightly behind and above, always looking at the
 * ship. Reads scrollProgressRef every frame — no React state, no re-renders,
 * which is what keeps this smooth regardless of scroll event frequency. */
export default function CameraRig({
  shipRef,
  reduce,
}: {
  shipRef: React.RefObject<THREE.Group>;
  reduce: boolean;
}) {
  const { camera } = useThree();
  const smoothed = useRef(0);

  useEffect(() => {
    if (!reduce) return;
    const p = FLIGHT_CURVE.getPointAt(0);
    camera.position.set(p.x, p.y + 1.4, p.z + 4);
    camera.lookAt(p.x, p.y, p.z);
    if (shipRef.current) shipRef.current.position.copy(p);
  }, [reduce, camera, shipRef]);

  useFrame((_, delta) => {
    if (reduce) return;
    smoothed.current += (scrollProgressRef.value - smoothed.current) * Math.min(1, delta * 3);
    const t = THREE.MathUtils.clamp(smoothed.current, 0, 0.999);

    const shipPos = FLIGHT_CURVE.getPointAt(t);
    const aheadPos = FLIGHT_CURVE.getPointAt(Math.min(0.999, t + 0.015));
    const camPos = FLIGHT_CURVE.getPointAt(Math.max(0, t - 0.04));

    if (shipRef.current) {
      shipRef.current.position.copy(shipPos);
      shipRef.current.lookAt(aheadPos);
    }
    camera.position.set(camPos.x, camPos.y + 1.4, camPos.z);
    camera.lookAt(shipPos.x, shipPos.y, shipPos.z);
  });

  return null;
}
