// Time of day, sun position and night-time dressing (stars, street lamps,
// paved paths) for the 3D twin. The site is assumed to be in Copenhagen.
import * as THREE from 'three';

const LAT = THREE.MathUtils.degToRad(55.68);
// Clock hour of solar noon in Copenhagen (CET, lon 12.57°E); DST is ignored
const SOLAR_NOON = 12.2;

export interface SimClock {
  /** Day of year, 1–366 */
  doy: number;
  /** Local clock hour, 0–24 */
  hour: number;
  /** Original date parts for display */
  year?: number;
  month?: number;
  day?: number;
}

/** Reads the wall-clock time straight from the timestamp text so the browser's time zone can't shift it. */
export function parseSimClock(ts?: string | null): SimClock | null {
  const m = ts?.match(/^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})/);
  if (!m) return null;
  const [year, month, day, hh, mm] = m.slice(1).map(Number);
  const doy = Math.round((Date.UTC(year, month - 1, day) - Date.UTC(year, 0, 0)) / 86400000);
  return { doy, hour: hh + mm / 60, year, month, day };
}

export interface SunState {
  /** Unit vector pointing at the sun (north = −z, east = +x) */
  dir: THREE.Vector3;
  elevationDeg: number;
  /** 0 = night, 1 = full daylight (civil twilight in between) */
  daylight: number;
}

export function sunState(clock: SimClock): SunState {
  const decl = THREE.MathUtils.degToRad(23.44) * Math.sin((2 * Math.PI * (284 + clock.doy)) / 365);
  const H = THREE.MathUtils.degToRad((clock.hour - SOLAR_NOON) * 15);
  const sinEl = Math.sin(LAT) * Math.sin(decl) + Math.cos(LAT) * Math.cos(decl) * Math.cos(H);
  const el = Math.asin(THREE.MathUtils.clamp(sinEl, -1, 1));
  // Azimuth measured from south, positive towards west
  const az = Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(LAT) - Math.tan(decl) * Math.cos(LAT));
  const dir = new THREE.Vector3(-Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)).normalize();
  const elevationDeg = THREE.MathUtils.radToDeg(el);
  return { dir, elevationDeg, daylight: THREE.MathUtils.smoothstep(elevationDeg, -6, 8) };
}

export function formatClock(clock: SimClock): string {
  const h = Math.floor(clock.hour) % 24;
  const m = Math.floor((clock.hour - Math.floor(clock.hour)) * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

// ---------------------------------------------------------------------------
// Scene dressing
// ---------------------------------------------------------------------------

let radialTexture: THREE.Texture | null = null;
/** Soft white radial gradient, shared by lamp halos and light pools. */
export function getRadialTexture() {
  if (!radialTexture) {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d')!;
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.35, 'rgba(255,255,255,0.45)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    radialTexture = new THREE.CanvasTexture(c);
  }
  return radialTexture;
}
export const isSharedTexture = (t: THREE.Texture) => t === radialTexture;

export function createStars(count = 900): THREE.Points {
  const pos = new Float32Array(count * 3);
  let s = 12345;
  const rand = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let i = 0; i < count; i++) {
    // Upper hemisphere only, denser away from the horizon haze
    const theta = rand() * Math.PI * 2;
    const y = 0.12 + rand() * 0.88;
    const r = Math.sqrt(1 - y * y);
    pos.set([Math.cos(theta) * r * 600, y * 600, Math.sin(theta) * r * 600], i * 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const stars = new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0xdfe8ff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, depthWrite: false, fog: false,
  }));
  stars.renderOrder = -1;
  return stars;
}

const pavingMat = () => new THREE.MeshStandardMaterial({ color: 0xa7a59e, roughness: 0.95 });
const kerbMat = () => new THREE.MeshStandardMaterial({ color: 0xd6d3cc, roughness: 0.85 });

/** A paved service path between two points, with kerbs. */
export function createPath(a: THREE.Vector3, b: THREE.Vector3, width = 0.55): THREE.Group {
  const g = new THREE.Group();
  const len = Math.hypot(b.x - a.x, b.z - a.z);
  if (len < 0.01) return g;
  const angle = Math.atan2(b.z - a.z, b.x - a.x);
  const slab = new THREE.Mesh(new THREE.BoxGeometry(len + width, 0.03, width), pavingMat());
  slab.position.y = 0.015;
  slab.receiveShadow = true;
  g.add(slab);
  const kerbMaterial = kerbMat();
  for (const side of [-1, 1]) {
    const kerb = new THREE.Mesh(new THREE.BoxGeometry(len + width, 0.045, 0.05), kerbMaterial);
    kerb.position.set(0, 0.022, side * (width / 2 + 0.02));
    kerb.receiveShadow = true;
    g.add(kerb);
  }
  g.position.set((a.x + b.x) / 2, 0, (a.z + b.z) / 2);
  g.rotation.y = -angle;
  g.userData.isPath = true;
  return g;
}

/**
 * A street lamp. Its bulb, halo and light pool are tagged with
 * `userData.night` so they can be faded in after dusk.
 */
export function createLamp(): THREE.Group {
  const g = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: 0x2f3640, roughness: 0.5, metalness: 0.6 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.026, 1.25, 10), metal);
  pole.position.y = 0.625;
  pole.castShadow = true;
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.025, 0.035), metal);
  arm.position.set(0.09, 1.24, 0);
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.035, 0.08), metal);
  head.position.set(0.18, 1.225, 0);
  const bulbMat = new THREE.MeshStandardMaterial({ color: 0xfff1d0, emissive: 0xffc56b, emissiveIntensity: 0, roughness: 0.3 });
  const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.012, 0.06), bulbMat);
  bulb.position.set(0.18, 1.203, 0);
  bulb.userData.night = { kind: 'emissive', max: 3 };
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: getRadialTexture(), color: 0xffcf86, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  halo.position.set(0.18, 1.18, 0);
  halo.scale.setScalar(0.7);
  halo.userData.night = { kind: 'opacity', max: 0.75 };
  const pool = new THREE.Mesh(
    new THREE.PlaneGeometry(1.8, 1.8),
    new THREE.MeshBasicMaterial({ map: getRadialTexture(), color: 0xffbf6e, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(0.18, 0.04, 0);
  pool.userData.night = { kind: 'opacity', max: 0.42 };
  g.add(pole, arm, head, bulb, halo, pool);
  return g;
}
