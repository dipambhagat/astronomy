import * as THREE from 'three';

// One waypoint per: Hero + 14 missions + Finale = 16 points.
// Gentle sine/cosine drift on x/y gives the path a "flown," not perfectly
// straight, feel; z advances steadily so scroll progress maps cleanly to
// distance traveled.
const WAYPOINT_COUNT = 16;
const SEGMENT_LENGTH = 20;

const points: THREE.Vector3[] = [];
for (let i = 0; i < WAYPOINT_COUNT; i++) {
  const x = Math.sin(i * 0.6) * 6;
  const y = Math.cos(i * 0.4) * 2.2;
  const z = -i * SEGMENT_LENGTH;
  points.push(new THREE.Vector3(x, y, z));
}

export const FLIGHT_CURVE = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.4);
export const FLIGHT_LENGTH = (WAYPOINT_COUNT - 1) * SEGMENT_LENGTH;
