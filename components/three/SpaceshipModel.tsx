'use client';

import { forwardRef } from 'react';
import * as THREE from 'three';

/** Procedural low-poly ship — no external 3D assets required. Deliberately
 * simple/stylized to match the site's playful character; geometry stays
 * cheap on purpose (a handful of primitives) since it renders every frame. */
const SpaceshipModel = forwardRef<THREE.Group>(function SpaceshipModel(_props, ref) {
  return (
    <group ref={ref} scale={0.6}>
      <mesh position={[0, 0, 0.9]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.35, 1.2, 12]} />
        <meshStandardMaterial color="#d8d8ff" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0, -0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 1.4, 12]} />
        <meshStandardMaterial color="#b8bce0" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0.55, 0, -0.5]} rotation={[0, 0, 0.15]}>
        <boxGeometry args={[0.9, 0.06, 0.5]} />
        <meshStandardMaterial color="#7b5cff" metalness={0.4} roughness={0.5} />
      </mesh>
      <mesh position={[-0.55, 0, -0.5]} rotation={[0, 0, -0.15]}>
        <boxGeometry args={[0.9, 0.06, 0.5]} />
        <meshStandardMaterial color="#7b5cff" metalness={0.4} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0, -0.95]}>
        <sphereGeometry args={[0.18, 8, 8]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
      <pointLight position={[0, 0, -1.1]} color="#38bdf8" intensity={2} distance={3} />
    </group>
  );
});

export default SpaceshipModel;
