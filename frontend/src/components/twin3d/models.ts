// Procedural, reasonably realistic 3D models for digital twin components.
// Units are scene units (~1 unit ≈ 2.5 m); every model sits on y = 0 and fits
// in a ~3.5 × 3.5 footprint so the 2D builder layout maps cleanly to 3D.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import type { DTComponentType } from '../DigitalTwinBuilder';

type Params = Record<string, unknown>;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function num(params: Params, key: string, fallback: number): number {
  const v = Number(params?.[key]);
  return Number.isFinite(v) && v > 0 ? v : fallback;
}

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

/** Deterministic pseudo-random so models look identical across rebuilds. */
function rng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function canvasTexture(w: number, h: number, draw: (ctx: CanvasRenderingContext2D) => void, color = true): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  draw(canvas.getContext('2d')!);
  const tex = new THREE.CanvasTexture(canvas);
  if (color) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

function std(color: number, roughness = 0.6, metalness = 0, extra: THREE.MeshStandardMaterialParameters = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
}

function mesh(geometry: THREE.BufferGeometry, material: THREE.Material | THREE.Material[], x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geometry, material);
  m.position.set(x, y, z);
  return m;
}

function box(w: number, h: number, d: number, mat: THREE.Material | THREE.Material[], x = 0, y = 0, z = 0) {
  return mesh(new THREE.BoxGeometry(w, h, d), mat, x, y, z);
}

function rbox(w: number, h: number, d: number, r: number, mat: THREE.Material, x = 0, y = 0, z = 0) {
  return mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat, x, y, z);
}

function cyl(rt: number, rb: number, h: number, mat: THREE.Material, x = 0, y = 0, z = 0, seg = 24) {
  return mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat, x, y, z);
}

/** Pipe along a path of points (with rounded bends). */
function pipe(points: THREE.Vector3[], radius: number, mat: THREE.Material) {
  const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.1);
  return new THREE.Mesh(new THREE.TubeGeometry(curve, Math.max(16, points.length * 12), radius, 12, false), mat);
}

function noiseTexture(base: string, spread: number, size = 256, seed = 7, color = true) {
  const rand = rng(seed);
  return canvasTexture(size, size, (ctx) => {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, size, size);
    for (let i = 0; i < size * size * 0.35; i++) {
      const v = (rand() - 0.5) * spread;
      ctx.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`;
      ctx.fillRect(rand() * size, rand() * size, 1 + rand() * 1.5, 1 + rand() * 1.5);
    }
  }, color);
}

function concreteMat(seed = 3) {
  const map = noiseTexture('#a7a59f', 0.18, 256, seed);
  return new THREE.MeshStandardMaterial({ map, roughness: 0.95, metalness: 0 });
}

/** Concrete foundation pad every model stands on. */
function pad(w: number, d: number, h = 0.06) {
  const m = box(w, h, d, concreteMat(), 0, h / 2, 0);
  m.userData.isPad = true;
  return m;
}

/** Vertical corrugation / cladding seams: colour map + bump map. */
function ribbedMaps(base: string, ribs: number, horizontal = false) {
  const draw = (ctx: CanvasRenderingContext2D, bump: boolean) => {
    const size = 256;
    ctx.fillStyle = bump ? '#808080' : base;
    ctx.fillRect(0, 0, size, size);
    const step = size / ribs;
    for (let i = 0; i < ribs; i++) {
      const g = horizontal ? ctx.createLinearGradient(0, i * step, 0, (i + 1) * step) : ctx.createLinearGradient(i * step, 0, (i + 1) * step, 0);
      if (bump) {
        g.addColorStop(0, '#303030'); g.addColorStop(0.5, '#f0f0f0'); g.addColorStop(1, '#303030');
      } else {
        g.addColorStop(0, 'rgba(0,0,0,0.22)'); g.addColorStop(0.5, 'rgba(255,255,255,0.12)'); g.addColorStop(1, 'rgba(0,0,0,0.22)');
      }
      ctx.fillStyle = g;
      if (horizontal) ctx.fillRect(0, i * step, size, step); else ctx.fillRect(i * step, 0, step, size);
    }
  };
  return {
    map: canvasTexture(256, 256, (c) => draw(c, false)),
    bumpMap: canvasTexture(256, 256, (c) => draw(c, true), false),
  };
}

function signTexture(text: string, bg: string, fg: string, hazard = false) {
  return canvasTexture(256, 128, (ctx) => {
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, 256, 128);
    if (hazard) {
      ctx.fillStyle = '#f5c400';
      ctx.beginPath(); ctx.moveTo(40, 22); ctx.lineTo(72, 100); ctx.lineTo(8, 100); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = '#111'; ctx.lineWidth = 5; ctx.stroke();
      ctx.fillStyle = '#111'; ctx.font = 'bold 54px Arial'; ctx.textAlign = 'center'; ctx.fillText('⚡', 40, 92);
    }
    ctx.fillStyle = fg;
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = hazard ? 'left' : 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, hazard ? 88 : 128, 64);
  });
}

function plane(w: number, h: number, mat: THREE.Material, x = 0, y = 0, z = 0, ry = 0) {
  const m = mesh(new THREE.PlaneGeometry(w, h), mat, x, y, z);
  m.rotation.y = ry;
  return m;
}

function led(color: number, x: number, y: number, z: number, r = 0.025) {
  return mesh(new THREE.SphereGeometry(r, 12, 8), std(color, 0.3, 0, { emissive: color, emissiveIntensity: 2.5 }), x, y, z);
}

function fanGrille(radius: number, mat: THREE.Material) {
  const g = new THREE.Group();
  for (let r = radius; r > 0.04; r -= radius / 5) {
    const ring = mesh(new THREE.TorusGeometry(r, 0.008, 6, 40), mat);
    g.add(ring);
  }
  for (let i = 0; i < 4; i++) {
    const spoke = box(radius * 2, 0.012, 0.012, mat);
    spoke.rotation.z = (i * Math.PI) / 4;
    g.add(spoke);
  }
  return g;
}

function fanRotor(radius: number, blades: number, mat: THREE.Material) {
  const g = new THREE.Group();
  g.add(cyl(radius * 0.18, radius * 0.18, 0.05, mat).rotateX(Math.PI / 2));
  for (let i = 0; i < blades; i++) {
    const holder = new THREE.Group();
    const blade = box(radius * 0.32, radius * 0.8, 0.012, mat, 0, radius * 0.5, 0);
    blade.rotation.y = 0.45; // pitch
    holder.add(blade);
    holder.rotation.z = (i * Math.PI * 2) / blades;
    g.add(holder);
  }
  return g;
}

// ---------------------------------------------------------------------------
// Solar PV array
// ---------------------------------------------------------------------------

function pvCellTexture() {
  const cols = 6, rows = 10, W = 240, H = 400;
  return canvasTexture(W, H, (ctx) => {
    ctx.fillStyle = '#d8dde3'; // backsheet showing between cells
    ctx.fillRect(0, 0, W, H);
    const cw = W / cols, ch = H / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * cw + 1.5, y = r * ch + 1.5, w = cw - 3, h = ch - 3;
        const g = ctx.createLinearGradient(x, y, x + w, y + h);
        g.addColorStop(0, '#13274f'); g.addColorStop(0.55, '#0b1a3a'); g.addColorStop(1, '#1a3466');
        ctx.fillStyle = g;
        ctx.fillRect(x, y, w, h);
        // busbars
        ctx.fillStyle = 'rgba(200,210,225,0.55)';
        for (let b = 1; b <= 3; b++) ctx.fillRect(x + (w * b) / 4 - 0.5, y, 1, h);
        // finger lines
        ctx.fillStyle = 'rgba(160,175,200,0.12)';
        for (let f = 2; f < h; f += 3) ctx.fillRect(x, y + f, w, 0.5);
      }
    }
  });
}

function solarArray(params: Params) {
  const g = new THREE.Group();
  const kwp = num(params, 'capacity_kwp', 100);
  const cols = clamp(Math.round(kwp / 30), 3, 7);
  const rows = kwp > 250 ? 3 : 2; // racking rows
  const modW = 0.42, modL = 0.7, tilt = THREE.MathUtils.degToRad(30);

  const cellMat = new THREE.MeshPhysicalMaterial({ map: pvCellTexture(), roughness: 0.3, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.15, envMapIntensity: 0.5 });
  const alu = std(0xc3c9d0, 0.35, 0.9);
  const back = std(0xe9ecef, 0.8);
  const steel = std(0x9aa2ab, 0.45, 0.85);
  const ballast = concreteMat(11);
  // BoxGeometry faces: +x, -x, +y (top), -y, +z, -z
  const moduleMats = [alu, alu, cellMat, back, alu, alu];

  const rowDepth = modL * 2 * Math.cos(tilt) + 0.45;
  const totalW = cols * (modW + 0.03);
  for (let r = 0; r < rows; r++) {
    const row = new THREE.Group();
    row.position.z = (r - (rows - 1) / 2) * rowDepth;
    // two modules in portrait, stacked up the slope
    // Modules face south (+z, toward the default camera); the +z edge is the low edge
    const table = new THREE.Group();
    table.rotation.x = tilt;
    for (let c = 0; c < cols; c++) {
      for (let s = 0; s < 2; s++) {
        const m = box(modW, 0.03, modL, moduleMats, (c - (cols - 1) / 2) * (modW + 0.03), 0, (s - 0.5) * (modL + 0.02));
        table.add(m);
      }
    }
    // purlins under the modules
    for (const z of [-modL * 0.75, -modL * 0.25, modL * 0.25, modL * 0.75]) table.add(box(totalW + 0.1, 0.03, 0.035, alu, 0, -0.035, z));
    const lowEdge = 0.35;
    table.position.set(0, lowEdge + Math.sin(tilt) * modL, 0);
    row.add(table);
    // posts (front short, rear tall) with ballast feet and diagonal braces
    const frontZ = Math.cos(tilt) * modL * 0.85, rearZ = -frontZ;
    const nLegs = Math.max(2, Math.ceil(cols / 2) + 1);
    for (let i = 0; i < nLegs; i++) {
      const x = -totalW / 2 + 0.1 + (i * (totalW - 0.2)) / (nLegs - 1);
      const hFront = lowEdge + 0.05, hRear = lowEdge + Math.sin(tilt) * modL * 1.85;
      row.add(cyl(0.018, 0.018, hFront, steel, x, hFront / 2, frontZ, 8));
      row.add(cyl(0.018, 0.018, hRear, steel, x, hRear / 2, rearZ, 8));
      const brace = cyl(0.01, 0.01, Math.hypot(frontZ - rearZ, hRear * 0.6), steel, x, hRear * 0.35, 0, 6);
      brace.rotation.x = Math.atan2(frontZ - rearZ, hRear * 0.6);
      row.add(brace);
      row.add(box(0.14, 0.08, 0.14, ballast, x, 0.04, frontZ));
      row.add(box(0.14, 0.08, 0.14, ballast, x, 0.04, rearZ));
    }
    g.add(row);
  }
  // String inverter on a post at the side
  const invX = totalW / 2 + 0.35;
  g.add(cyl(0.025, 0.025, 0.7, steel, invX, 0.35, 0, 8));
  const inverter = rbox(0.32, 0.4, 0.14, 0.02, std(0xeef1f4, 0.4, 0.1), invX, 0.65, 0.09);
  g.add(inverter);
  g.add(plane(0.1, 0.05, std(0x111827, 0.3, 0, { emissive: 0x22d3ee, emissiveIntensity: 0.6 }), invX, 0.72, 0.161));
  g.add(led(0x22c55e, invX + 0.09, 0.72, 0.162, 0.012));
  g.add(pad(totalW + 1.0, rows * rowDepth + 0.3, 0.02));
  return g;
}

// ---------------------------------------------------------------------------
// Smart building (office with curtain wall)
// ---------------------------------------------------------------------------

function facadeTextures(bays: number, seed: number) {
  const W = 512, H = 128;
  const rand = rng(seed);
  const lit: boolean[] = Array.from({ length: bays }, () => rand() > 0.55);
  const map = canvasTexture(W, H, (ctx) => {
    // spandrel band (light precast concrete)
    ctx.fillStyle = '#d9d6cf';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.fillRect(0, H * 0.22, W, 2);
    const bw = W / bays;
    for (let b = 0; b < bays; b++) {
      const x = b * bw;
      const g = ctx.createLinearGradient(x, H * 0.28, x + bw, H * 0.95);
      g.addColorStop(0, '#5f7f99'); g.addColorStop(0.45, '#2a4258'); g.addColorStop(1, '#3d5a73');
      ctx.fillStyle = g;
      ctx.fillRect(x + 3, H * 0.28, bw - 6, H * 0.66);
      // sky reflection streak
      ctx.fillStyle = 'rgba(255,255,255,0.10)';
      ctx.beginPath(); ctx.moveTo(x + 6, H * 0.9); ctx.lineTo(x + bw * 0.45, H * 0.3); ctx.lineTo(x + bw * 0.6, H * 0.3); ctx.lineTo(x + 18, H * 0.9); ctx.fill();
      // mullions + transom
      ctx.fillStyle = '#3b3f45';
      ctx.fillRect(x, H * 0.26, 4, H * 0.7);
      ctx.fillRect(x + bw / 2 - 1.5, H * 0.28, 3, H * 0.66);
      ctx.fillRect(x, H * 0.62, bw, 2.5);
    }
  });
  const emissiveMap = canvasTexture(W, H, (ctx) => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    const bw = W / bays;
    lit.forEach((on, b) => {
      if (!on) return;
      ctx.fillStyle = '#ffd9a0';
      ctx.fillRect(b * bw + 6, H * 0.3, bw - 12, H * 0.62);
    });
  });
  return { map, emissiveMap };
}

function smartBuilding(params: Params) {
  const g = new THREE.Group();
  const floors = clamp(Math.round(num(params, 'floors', 5)), 1, 30);
  const floorH = 0.42;
  const W = 2.6, D = 1.7;
  const upperH = (floors - 1) * floorH;
  const lobbyH = floorH * 1.15;

  const front = facadeTextures(10, 17);
  const side = facadeTextures(7, 29);
  const frontMat = std(0xffffff, 0.45, 0.1, { map: front.map, emissive: 0xffffff, emissiveMap: front.emissiveMap, emissiveIntensity: 0.35 });
  const sideMat = std(0xffffff, 0.45, 0.1, { map: side.map, emissive: 0xffffff, emissiveMap: side.emissiveMap, emissiveIntensity: 0.35 });
  for (const t of [front.map, front.emissiveMap]) t.repeat.set(1, Math.max(1, floors - 1));
  for (const t of [side.map, side.emissiveMap]) t.repeat.set(1, Math.max(1, floors - 1));
  const roofMat = std(0x6b6f75, 0.9);
  const glass = new THREE.MeshPhysicalMaterial({ color: 0x9fb8c8, roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.55, envMapIntensity: 1.5 });
  const darkMetal = std(0x2f3338, 0.5, 0.7);
  const stone = std(0xcfccc4, 0.8);

  // Ground floor: recessed glass lobby with columns
  g.add(box(W - 0.2, lobbyH, D - 0.2, glass, 0, lobbyH / 2, 0));
  g.add(box(W - 0.22, lobbyH * 0.96, D - 0.22, std(0xf4e7cf, 0.7, 0, { emissive: 0xffe6b8, emissiveIntensity: 0.25 }), 0, lobbyH / 2, 0));
  for (let i = 0; i < 6; i++) {
    const x = -W / 2 + 0.1 + (i * (W - 0.2)) / 5;
    g.add(box(0.07, lobbyH, 0.07, stone, x, lobbyH / 2, D / 2 - 0.05));
    g.add(box(0.07, lobbyH, 0.07, stone, x, lobbyH / 2, -D / 2 + 0.05));
  }
  // Entrance canopy and doors
  g.add(box(0.9, 0.04, 0.45, darkMetal, 0, lobbyH * 0.88, D / 2 + 0.15));
  g.add(plane(0.5, lobbyH * 0.7, std(0x1d2a36, 0.1, 0.6), 0, lobbyH * 0.35, D / 2 - 0.09));

  // Upper floors: curtain wall facades (per-face materials)
  if (floors > 1) {
    const body = box(W, upperH, D, [sideMat, sideMat, roofMat, roofMat, frontMat, frontMat], 0, lobbyH + upperH / 2, 0);
    g.add(body);
    // floor slab edges
    for (let f = 0; f <= floors - 1; f++) g.add(box(W + 0.03, 0.025, D + 0.03, stone, 0, lobbyH + f * floorH, 0));
  }
  const top = lobbyH + upperH;
  // Roof: parapet, stair core, HVAC units, a few rooftop PV modules
  g.add(box(W, 0.02, D, roofMat, 0, top + 0.01, 0));
  for (const [w, d, x, z] of [[W, 0.05, 0, D / 2 - 0.025], [W, 0.05, 0, -D / 2 + 0.025], [0.05, D, W / 2 - 0.025, 0], [0.05, D, -W / 2 + 0.025, 0]] as const) {
    g.add(box(w, 0.12, d, stone, x, top + 0.06, z));
  }
  g.add(box(0.5, 0.35, 0.45, std(0xbdb9b0, 0.85), -W / 2 + 0.45, top + 0.175, -D / 2 + 0.4));
  const hvac = std(0xc9cdd2, 0.5, 0.4);
  for (const x of [0.25, 0.75]) {
    g.add(box(0.36, 0.22, 0.3, hvac, x, top + 0.11, -D / 2 + 0.35));
    const grille = fanGrille(0.1, std(0x30343a, 0.6, 0.5));
    grille.rotation.x = -Math.PI / 2;
    grille.position.set(x, top + 0.225, -D / 2 + 0.35);
    g.add(grille);
  }
  const pvMats = [std(0xc3c9d0, 0.35, 0.9), std(0xc3c9d0, 0.35, 0.9), new THREE.MeshPhysicalMaterial({ map: pvCellTexture(), roughness: 0.3, metalness: 0, clearcoat: 0.6, envMapIntensity: 0.5 }), std(0xdddddd), std(0xc3c9d0), std(0xc3c9d0)];
  for (let i = 0; i < 4; i++) {
    const m = box(0.36, 0.02, 0.58, pvMats, -0.2 + i * 0.4, top + 0.16, D / 2 - 0.45);
    m.rotation.x = 0.35; // facing south like the ground array
    g.add(m);
  }
  g.add(pad(W + 0.7, D + 0.8));
  return g;
}

// ---------------------------------------------------------------------------
// Battery energy storage (containerised)
// ---------------------------------------------------------------------------

function batteryContainer() {
  const g = new THREE.Group();
  const L = 2.3, H = 0.98, D = 0.92;
  const { map, bumpMap } = ribbedMaps('#e8ebee', 22);
  map.repeat.set(4, 1); bumpMap.repeat.set(4, 1);
  const walls = std(0xffffff, 0.5, 0.3, { map, bumpMap, bumpScale: 0.6 });
  const endMaps = ribbedMaps('#e8ebee', 10);
  const ends = std(0xffffff, 0.5, 0.3, { map: endMaps.map, bumpMap: endMaps.bumpMap, bumpScale: 0.6 });
  const frame = std(0xb9c0c7, 0.5, 0.6);
  const roof = std(0xdfe3e6, 0.55, 0.3);
  g.add(box(L, H, D, [ends, ends, roof, roof, walls, walls], 0, H / 2 + 0.08, 0));
  // corner posts + top/bottom rails
  for (const x of [-L / 2, L / 2]) for (const z of [-D / 2, D / 2]) g.add(box(0.06, H + 0.02, 0.06, frame, x, H / 2 + 0.08, z));
  for (const y of [0.1, H + 0.06]) for (const z of [-D / 2, D / 2]) g.add(box(L, 0.05, 0.05, frame, 0, y, z));
  // double doors at one end with locking bars
  const doorMat = std(0x9aa3ad, 0.6, 0.5);
  for (const z of [-0.2, 0.2]) {
    g.add(box(0.01, H * 0.92, 0.42, std(0xe2e6ea, 0.5, 0.3), L / 2 + 0.005, H / 2 + 0.08, z));
    for (const dz of [-0.08, 0.08]) g.add(cyl(0.008, 0.008, H * 0.9, doorMat, L / 2 + 0.02, H / 2 + 0.08, z + dz, 6));
  }
  // side HVAC unit
  const ac = rbox(0.4, 0.5, 0.16, 0.02, std(0xf3f4f6, 0.45, 0.1), -0.55, 0.58, D / 2 + 0.08);
  g.add(ac);
  const grille = fanGrille(0.14, std(0x3a3f45, 0.5, 0.6));
  grille.position.set(-0.55, 0.6, D / 2 + 0.165);
  g.add(grille);
  const fan = fanRotor(0.13, 5, std(0x4b5563, 0.6, 0.3));
  fan.position.set(-0.55, 0.6, D / 2 + 0.155);
  fan.userData.rotate = { axis: 'z', speed: 0.25 };
  g.add(fan);
  // warning label + status lights
  const sign = new THREE.MeshStandardMaterial({ map: signTexture('BESS', '#ffffff', '#111827', true), roughness: 0.6 });
  g.add(plane(0.5, 0.25, sign, 0.4, 0.75, D / 2 + 0.012));
  g.add(led(0x22c55e, 0.85, 0.82, D / 2 + 0.015));
  g.add(led(0x22c55e, 0.92, 0.82, D / 2 + 0.015));
  // cable gland box
  g.add(box(0.2, 0.16, 0.08, std(0x6b7280, 0.5, 0.5), 0.9, 0.3, D / 2 + 0.04));
  return g;
}

function batteryStorage(params: Params) {
  const g = new THREE.Group();
  const kwh = num(params, 'capacity_kwh', 500);
  const n = clamp(Math.ceil(kwh / 1500), 1, 3);
  for (let i = 0; i < n; i++) {
    const c = batteryContainer();
    c.position.z = (i - (n - 1) / 2) * 1.25;
    g.add(c);
  }
  g.add(pad(2.9, n * 1.25 + 0.4, 0.08));
  return g;
}

// ---------------------------------------------------------------------------
// Wind turbine
// ---------------------------------------------------------------------------

function bladeGeometry(length: number) {
  // Planform: narrow root, max chord at ~22%, tapering to a rounded tip
  const s = new THREE.Shape();
  const root = 0.05, maxC = 0.17, tip = 0.025;
  s.moveTo(-root / 2, 0);
  s.bezierCurveTo(-maxC * 0.35, length * 0.08, -maxC * 0.4, length * 0.2, -maxC * 0.35, length * 0.3);
  s.lineTo(-tip / 2, length * 0.98);
  s.quadraticCurveTo(0, length * 1.01, tip / 2, length * 0.98);
  s.lineTo(maxC * 0.65, length * 0.25);
  s.bezierCurveTo(maxC * 0.6, length * 0.12, root, length * 0.05, root / 2, 0);
  s.closePath();
  const geo = new THREE.ExtrudeGeometry(s, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.01, bevelSegments: 3, curveSegments: 16 });
  geo.translate(0, 0, -0.006);
  return geo;
}

function windTurbine(params: Params) {
  const g = new THREE.Group();
  const kw = num(params, 'capacity_kw', 100);
  const height = clamp(2.8 + Math.log10(kw) * 0.6, 3.0, 4.6);
  const bladeLen = height * 0.42;
  const white = std(0xf4f6f8, 0.35, 0.05);
  const grey = std(0xd9dde2, 0.4, 0.1);

  // Tapered tubular tower with flange rings
  g.add(cyl(0.075, 0.15, height, white, 0, height / 2, 0, 32));
  for (const f of [0.33, 0.66]) g.add(cyl(0.15 - f * 0.075 + 0.006, 0.15 - f * 0.075 + 0.006, 0.02, grey, 0, height * f, 0, 32));
  g.add(cyl(0.155, 0.16, 0.12, std(0xb9bec4, 0.6, 0.4), 0, 0.06, 0, 32)); // base section
  g.add(mesh(new THREE.BoxGeometry(0.06, 0.14, 0.01), std(0x9ca3af, 0.5, 0.5), 0, 0.2, 0.152)); // door

  // Nacelle (streamlined capsule) + yaw ring
  const nacelle = mesh(new THREE.CapsuleGeometry(0.13, 0.42, 8, 24), white, 0, height + 0.08, -0.05);
  nacelle.rotation.x = Math.PI / 2;
  nacelle.scale.set(1, 1, 0.95);
  g.add(nacelle);
  g.add(cyl(0.085, 0.085, 0.05, grey, 0, height + 0.0, 0, 24));
  // anemometer mast on top
  g.add(cyl(0.006, 0.006, 0.12, grey, 0, height + 0.26, -0.25, 6));

  // Rotor: spinner + three blades, rotates about the nacelle (z) axis
  const rotor = new THREE.Group();
  rotor.position.set(0, height + 0.08, 0.29);
  // Nose cone profile: radius grows from the tip (y = 0.2) to the base (y = 0)
  const profile = Array.from({ length: 12 }, (_, i) => {
    const t = i / 11;
    return new THREE.Vector2(Math.sin((t * Math.PI) / 2) * 0.11 + 0.001, (1 - t) * 0.2);
  });
  const spinner = mesh(new THREE.LatheGeometry(profile, 32), white);
  spinner.rotation.x = Math.PI / 2;
  rotor.add(spinner);
  const bladeGeo = bladeGeometry(bladeLen);
  for (let i = 0; i < 3; i++) {
    const holder = new THREE.Group();
    holder.rotation.z = (i * Math.PI * 2) / 3;
    const blade = new THREE.Mesh(bladeGeo, white);
    blade.position.y = 0.07;
    blade.rotation.y = 0.18; // pitch
    holder.add(blade);
    holder.add(cyl(0.035, 0.04, 0.1, grey, 0, 0.07, 0, 16));
    rotor.add(holder);
  }
  rotor.userData.rotate = { axis: 'z', speed: 0.035 };
  g.add(rotor);

  g.add(pad(0.9, 0.9, 0.08));
  return g;
}

// ---------------------------------------------------------------------------
// District heating substation
// ---------------------------------------------------------------------------

function brickTexture() {
  return canvasTexture(256, 256, (ctx) => {
    ctx.fillStyle = '#c9c2b6';
    ctx.fillRect(0, 0, 256, 256);
    const rand = rng(5);
    const bh = 16, bw = 48;
    for (let row = 0; row < 256 / bh; row++) {
      const off = (row % 2) * (bw / 2);
      for (let x = -bw; x < 256 + bw; x += bw) {
        const v = 0.85 + rand() * 0.25;
        ctx.fillStyle = `rgb(${Math.round(150 * v)},${Math.round(72 * v)},${Math.round(52 * v)})`;
        ctx.fillRect(x + off + 1.5, row * bh + 1.5, bw - 3, bh - 3);
      }
    }
  });
}

function districtHeating(params: Params) {
  const g = new THREE.Group();
  const kw = num(params, 'capacity_kw', 200);
  const W = clamp(1.2 + kw / 1500, 1.2, 2.0), H = 0.9, D = 0.95;
  const brick = brickTexture();
  brick.repeat.set(W * 2.2, H * 2.2);
  const walls = std(0xffffff, 0.9, 0, { map: brick });
  const trim = std(0x4b5563, 0.6, 0.4);
  g.add(box(W, H, D, walls, 0, H / 2, 0));
  g.add(box(W + 0.12, 0.06, D + 0.12, std(0x52575e, 0.7, 0.2), 0, H + 0.03, 0)); // roof overhang
  // steel door + louvre vent
  g.add(box(0.36, 0.6, 0.02, std(0x5b6b7a, 0.5, 0.6), -W / 4, 0.3, D / 2 + 0.01));
  g.add(box(0.03, 0.03, 0.04, trim, -W / 4 + 0.13, 0.3, D / 2 + 0.03));
  const louvre = ribbedMaps('#6b7280', 8, true);
  g.add(plane(0.34, 0.24, std(0xffffff, 0.6, 0.5, { map: louvre.map, bumpMap: louvre.bumpMap, bumpScale: 1 }), W / 4, 0.62, D / 2 + 0.006));
  g.add(plane(0.4, 0.14, new THREE.MeshStandardMaterial({ map: signTexture('FJERNVARME', '#1f2937', '#f9fafb') }), W / 4, 0.32, D / 2 + 0.006));

  // Pre-insulated supply (red band) and return (blue band) pipes from the ground
  const jacket = std(0xe5e7eb, 0.55, 0.05);
  const x0 = -W / 2 - 0.05;
  for (const [z, band] of [[-0.18, 0xdc2626], [0.18, 0x2563eb]] as const) {
    const p = pipe([
      new THREE.Vector3(x0 - 0.75, -0.1, z),
      new THREE.Vector3(x0 - 0.45, 0.25, z),
      new THREE.Vector3(x0 - 0.35, 0.45, z),
      new THREE.Vector3(x0 + 0.05, 0.45, z),
    ], 0.06, jacket);
    g.add(p);
    for (const bx of [x0 - 0.3, x0 - 0.12]) {
      const ring = mesh(new THREE.TorusGeometry(0.062, 0.012, 8, 24), std(band, 0.5), bx, 0.45, z);
      ring.rotation.y = Math.PI / 2;
      g.add(ring);
    }
    // valve with hand wheel
    const vx = x0 - 0.2;
    g.add(box(0.1, 0.14, 0.1, std(0x374151, 0.5, 0.6), vx, 0.53, z));
    const wheel = mesh(new THREE.TorusGeometry(0.06, 0.008, 8, 24), std(band, 0.4, 0.3), vx, 0.66, z);
    wheel.rotation.x = Math.PI / 2;
    g.add(wheel);
    g.add(cyl(0.008, 0.008, 0.06, trim, vx, 0.62, z, 6));
  }
  // pressure gauge
  const gauge = mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.02, 24), std(0xf8fafc, 0.3, 0, { emissive: 0xffffff, emissiveIntensity: 0.1 }), x0 + 0.02, 0.62, 0);
  gauge.rotation.z = Math.PI / 2;
  g.add(gauge);
  g.add(pad(W + 1.2, D + 0.5));
  return g;
}

// ---------------------------------------------------------------------------
// Grid connection: transformer substation + utility pole
// ---------------------------------------------------------------------------

function fenceTexture() {
  const t = canvasTexture(64, 64, (ctx) => {
    ctx.clearRect(0, 0, 64, 64);
    ctx.strokeStyle = 'rgba(200,205,210,1)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(64, 64);
    ctx.moveTo(64, 0); ctx.lineTo(0, 64);
    ctx.stroke();
  });
  return t;
}

function insulatorStack(discs: number, mat: THREE.Material) {
  const g = new THREE.Group();
  for (let i = 0; i < discs; i++) g.add(cyl(0.045, 0.045, 0.018, mat, 0, i * 0.035, 0, 16));
  g.add(cyl(0.015, 0.015, discs * 0.035, mat, 0, (discs * 0.035) / 2, 0, 8));
  return g;
}

function smartGrid() {
  const g = new THREE.Group();
  const tankMat = std(0x7d8f80, 0.55, 0.4);
  const finMat = std(0x6f8172, 0.5, 0.45);
  const porcelain = std(0x7a4a2d, 0.25, 0.1);
  const steel = std(0x9ca3af, 0.45, 0.8);

  // Transformer tank with radiator fin banks
  const tank = new THREE.Group();
  tank.add(box(0.9, 0.85, 0.6, tankMat, 0, 0.55, 0));
  tank.add(box(0.95, 0.04, 0.65, finMat, 0, 0.995, 0));
  for (const side of [-1, 1]) {
    for (let i = 0; i < 9; i++) tank.add(box(0.02, 0.65, 0.22, finMat, -0.36 + i * 0.09, 0.5, side * 0.42));
    tank.add(box(0.85, 0.03, 0.03, steel, 0, 0.84, side * 0.42));
    tank.add(box(0.85, 0.03, 0.03, steel, 0, 0.17, side * 0.42));
  }
  // conservator tank on brackets
  const cons = cyl(0.08, 0.08, 0.6, tankMat, -0.05, 1.18, -0.15, 20);
  cons.rotation.z = Math.PI / 2;
  tank.add(cons);
  tank.add(box(0.03, 0.18, 0.03, steel, -0.25, 1.08, -0.15));
  tank.add(box(0.03, 0.18, 0.03, steel, 0.15, 1.08, -0.15));
  // HV bushings (porcelain sheds) and LV bushings
  for (const x of [-0.25, 0, 0.25]) {
    const ins = insulatorStack(8, porcelain);
    ins.position.set(x, 1.02, 0.12);
    tank.add(ins);
    tank.add(cyl(0.02, 0.02, 0.06, steel, x, 1.33, 0.12, 8));
  }
  for (const x of [-0.2, -0.07, 0.06, 0.19]) tank.add(cyl(0.025, 0.03, 0.12, porcelain, x, 1.06, -0.05, 12));
  tank.add(plane(0.3, 0.15, new THREE.MeshStandardMaterial({ map: signTexture('10/0.4 kV', '#f3f4f6', '#111827') }), 0.2, 0.62, 0.301));
  tank.position.set(-0.15, 0.08, 0);
  g.add(tank);

  // Utility pole with crossarm, pin insulators and drooping lines leaving the site
  const wood = std(0x6b4f35, 0.9);
  const poleX = 1.0, poleZ = -0.55;
  g.add(cyl(0.05, 0.065, 3.0, wood, poleX, 1.5, poleZ, 12));
  g.add(box(0.9, 0.06, 0.07, wood, poleX, 2.75, poleZ));
  const lineMat = std(0x1f2937, 0.6, 0.5);
  for (const dx of [-0.38, 0, 0.38]) {
    const ins = insulatorStack(4, std(0xd6dde3, 0.2, 0.1));
    ins.position.set(poleX + dx, 2.78, poleZ);
    g.add(ins);
    // line to the transformer bushing
    g.add(pipe([new THREE.Vector3(poleX + dx, 2.93, poleZ), new THREE.Vector3((poleX + dx - 0.15) / 2, 2.0, (poleZ + 0.12) / 2), new THREE.Vector3(-0.15 + dx * 0.65, 1.43, 0.12)], 0.006, lineMat));
    // span leaving the site
    g.add(pipe([new THREE.Vector3(poleX + dx, 2.93, poleZ), new THREE.Vector3(poleX + 1.2 + dx, 2.75, poleZ - 1.2), new THREE.Vector3(poleX + 2.4 + dx, 2.95, poleZ - 2.4)], 0.006, lineMat));
  }

  // Chain-link fence with posts and a hazard sign
  const FW = 2.3, FD = 1.6, FH = 0.8;
  const sides: [number, number, number, number][] = [[FW, 0, 0, FD / 2], [FW, 0, 0, -FD / 2], [FD, Math.PI / 2, FW / 2, 0], [FD, Math.PI / 2, -FW / 2, 0]];
  for (const [len, ry, x, z] of sides) {
    const fenceMap = fenceTexture();
    fenceMap.repeat.set(len * 14, FH * 14);
    g.add(plane(len, FH, new THREE.MeshStandardMaterial({ map: fenceMap, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide, metalness: 0.6, roughness: 0.5 }), x, FH / 2 + 0.05, z, ry));
    const n = Math.round(len / 0.55);
    for (let i = 0; i <= n; i++) {
      const t = -len / 2 + (i * len) / n;
      g.add(cyl(0.015, 0.015, FH + 0.05, steel, x + Math.cos(ry) * t, (FH + 0.05) / 2 + 0.03, z - Math.sin(ry) * t, 8));
    }
    const topRail = cyl(0.01, 0.01, len, steel, x, FH + 0.07, z, 6);
    topRail.rotation.set(0, ry, Math.PI / 2);
    g.add(topRail);
  }
  g.add(plane(0.3, 0.15, new THREE.MeshStandardMaterial({ map: signTexture('DANGER', '#ffffff', '#b91c1c', true), side: THREE.DoubleSide }), 0.5, 0.55, FD / 2 + 0.01));
  const yard = mesh(new THREE.BoxGeometry(FW, 0.04, FD), std(0x8d8a83, 1), 0, 0.02, 0); // gravel yard
  yard.userData.isPad = true;
  g.add(yard);
  return g;
}

// ---------------------------------------------------------------------------
// EV charger with parked car
// ---------------------------------------------------------------------------

function parkingTexture() {
  return canvasTexture(256, 256, (ctx) => {
    ctx.fillStyle = '#3a3d42';
    ctx.fillRect(0, 0, 256, 256);
    const rand = rng(13);
    for (let i = 0; i < 6000; i++) {
      ctx.fillStyle = `rgba(255,255,255,${rand() * 0.06})`;
      ctx.fillRect(rand() * 256, rand() * 256, 1.5, 1.5);
    }
    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(10, 0, 8, 256);
    ctx.fillRect(238, 0, 8, 256);
    // EV bay marking
    ctx.fillStyle = '#16a34a';
    ctx.fillRect(70, 150, 116, 70);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('EV', 128, 200);
  });
}

function car(color: number) {
  const g = new THREE.Group();
  // side profile (x along length, y up)
  const s = new THREE.Shape();
  s.moveTo(-0.95, 0.12);
  s.lineTo(-0.95, 0.32);
  s.quadraticCurveTo(-0.92, 0.4, -0.75, 0.42);
  s.lineTo(-0.45, 0.45);
  s.quadraticCurveTo(-0.28, 0.66, -0.05, 0.68);
  s.lineTo(0.35, 0.67);
  s.quadraticCurveTo(0.55, 0.63, 0.7, 0.45);
  s.lineTo(0.9, 0.4);
  s.quadraticCurveTo(0.97, 0.36, 0.97, 0.26);
  s.lineTo(0.97, 0.12);
  s.closePath();
  const depth = 0.72;
  const bodyGeo = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.05, bevelSegments: 4, curveSegments: 20 });
  bodyGeo.translate(0, 0, -depth / 2);
  const paint = new THREE.MeshPhysicalMaterial({ color, metalness: 0.6, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.05 });
  g.add(new THREE.Mesh(bodyGeo, paint));
  // glasshouse
  const w = new THREE.Shape();
  w.moveTo(-0.4, 0.47);
  w.quadraticCurveTo(-0.26, 0.63, -0.05, 0.645);
  w.lineTo(0.33, 0.64);
  w.quadraticCurveTo(0.5, 0.6, 0.62, 0.47);
  w.closePath();
  const winGeo = new THREE.ExtrudeGeometry(w, { depth: depth + 0.11, bevelEnabled: false });
  winGeo.translate(0, 0, -(depth + 0.11) / 2);
  g.add(new THREE.Mesh(winGeo, new THREE.MeshPhysicalMaterial({ color: 0x111a24, metalness: 0.4, roughness: 0.05, clearcoat: 1 })));
  // wheels
  const tyre = std(0x111111, 0.85);
  const rim = std(0xcfd4da, 0.25, 0.9);
  for (const x of [-0.6, 0.62]) for (const z of [-depth / 2 - 0.03, depth / 2 + 0.03]) {
    const wheel = new THREE.Group();
    wheel.add(cyl(0.16, 0.16, 0.12, tyre, 0, 0, 0, 24).rotateX(Math.PI / 2));
    wheel.add(cyl(0.1, 0.1, 0.125, rim, 0, 0, 0, 16).rotateX(Math.PI / 2));
    wheel.position.set(x, 0.16, z);
    g.add(wheel);
  }
  // lights
  g.add(box(0.03, 0.05, 0.2, std(0xffffff, 0.2, 0, { emissive: 0xfff4d6, emissiveIntensity: 1.2 }), 1.02, 0.3, 0.24));
  g.add(box(0.03, 0.05, 0.2, std(0xffffff, 0.2, 0, { emissive: 0xfff4d6, emissiveIntensity: 1.2 }), 1.02, 0.3, -0.24));
  g.add(box(0.03, 0.05, 0.22, std(0x7f1d1d, 0.3, 0, { emissive: 0xdc2626, emissiveIntensity: 0.6 }), -1.0, 0.33, 0.22));
  g.add(box(0.03, 0.05, 0.22, std(0x7f1d1d, 0.3, 0, { emissive: 0xdc2626, emissiveIntensity: 0.6 }), -1.0, 0.33, -0.22));
  g.scale.setScalar(0.85);
  return g;
}

function evCharger() {
  const g = new THREE.Group();
  const bay = parkingTexture();
  const bayPad = mesh(new THREE.BoxGeometry(1.4, 0.02, 2.3), std(0xffffff, 0.9, 0, { map: bay }), 0, 0.01, 0.1);
  bayPad.userData.isPad = true;
  g.add(bayPad);
  // charger pedestal
  const body = rbox(0.28, 0.95, 0.18, 0.05, std(0xf8fafc, 0.35, 0.1), 0, 0.5, -0.95);
  g.add(body);
  g.add(rbox(0.3, 0.06, 0.2, 0.02, std(0x0f766e, 0.4, 0.2), 0, 0.04, -0.95));
  g.add(plane(0.18, 0.12, std(0x0b1220, 0.2, 0, { emissive: 0x38bdf8, emissiveIntensity: 0.8 }), 0, 0.78, -0.859));
  g.add(box(0.02, 0.5, 0.005, std(0x22c55e, 0.3, 0, { emissive: 0x22c55e, emissiveIntensity: 2 }), 0.12, 0.5, -0.858));
  // holstered connector + cable
  g.add(box(0.07, 0.1, 0.06, std(0x1f2937, 0.5, 0.2), -0.1, 0.55, -0.84));
  g.add(pipe([new THREE.Vector3(-0.1, 0.5, -0.83), new THREE.Vector3(-0.2, 0.3, -0.7), new THREE.Vector3(-0.15, 0.12, -0.6), new THREE.Vector3(-0.05, 0.25, -0.86)], 0.015, std(0x111111, 0.7)));
  // bollard
  g.add(cyl(0.04, 0.04, 0.4, std(0xf59e0b, 0.5), 0.45, 0.2, -0.9, 12));
  const c = car(0x2563eb);
  c.rotation.y = Math.PI / 2;
  c.position.set(0, 0.0, 0.3);
  g.add(c);
  return g;
}

// ---------------------------------------------------------------------------
// Heat pump outdoor unit
// ---------------------------------------------------------------------------

function heatPump(params: Params) {
  const g = new THREE.Group();
  const kw = num(params, 'capacity_kw', 50);
  const units = clamp(Math.ceil(kw / 60), 1, 3);
  for (let u = 0; u < units; u++) {
    const unit = new THREE.Group();
    unit.add(rbox(1.0, 0.75, 0.4, 0.03, std(0xf3f4f6, 0.4, 0.1), 0, 0.5, 0));
    // front fan opening with grille and spinning rotor
    unit.add(mesh(new THREE.CircleGeometry(0.27, 40), std(0x1f2328, 0.8), -0.15, 0.5, 0.201));
    const rotor = fanRotor(0.25, 3, std(0x3a3f45, 0.6, 0.2));
    rotor.position.set(-0.15, 0.5, 0.205);
    rotor.userData.rotate = { axis: 'z', speed: 0.3 };
    unit.add(rotor);
    const grille = fanGrille(0.27, std(0x2b2f35, 0.5, 0.6));
    grille.position.set(-0.15, 0.5, 0.215);
    unit.add(grille);
    // side service panel with louvres and brand plate
    const louvre = ribbedMaps('#e5e7eb', 12, true);
    unit.add(plane(0.26, 0.55, std(0xffffff, 0.45, 0.1, { map: louvre.map, bumpMap: louvre.bumpMap, bumpScale: 0.6 }), 0.33, 0.5, 0.202));
    unit.add(plane(0.16, 0.05, std(0x1e3a8a, 0.4), 0.33, 0.82, 0.203));
    // rear coil (fine fins)
    const coil = ribbedMaps('#9ca3af', 60);
    unit.add(plane(0.96, 0.66, std(0xffffff, 0.5, 0.6, { map: coil.map, bumpMap: coil.bumpMap, bumpScale: 0.4 }), 0, 0.5, -0.202, Math.PI));
    // anti-vibration feet on rails
    for (const x of [-0.4, 0.4]) unit.add(box(0.08, 0.12, 0.46, std(0x374151, 0.6, 0.5), x, 0.06, 0));
    // insulated refrigerant pipes into the ground
    const foam = std(0x111111, 0.9);
    unit.add(pipe([new THREE.Vector3(0.52, 0.35, -0.08), new THREE.Vector3(0.62, 0.3, -0.08), new THREE.Vector3(0.66, 0.1, -0.08), new THREE.Vector3(0.66, -0.1, -0.08)], 0.025, foam));
    unit.add(pipe([new THREE.Vector3(0.52, 0.25, 0.06), new THREE.Vector3(0.6, 0.22, 0.06), new THREE.Vector3(0.63, 0.08, 0.06), new THREE.Vector3(0.63, -0.1, 0.06)], 0.018, foam));
    unit.position.x = (u - (units - 1) / 2) * 1.25;
    g.add(unit);
  }
  g.add(pad(units * 1.25 + 0.4, 0.9));
  return g;
}

// ---------------------------------------------------------------------------
// CHP unit (containerised gas engine)
// ---------------------------------------------------------------------------

function chpUnit() {
  const g = new THREE.Group();
  const L = 2.0, H = 1.0, D = 0.9;
  const louvre = ribbedMaps('#2f4a3a', 14, true);
  const enclosure = std(0x3d5c48, 0.6, 0.35);
  g.add(box(L, H, D, enclosure, 0, H / 2 + 0.06, 0));
  // louvre panels and doors on the long side
  const louvreMat = std(0xffffff, 0.55, 0.4, { map: louvre.map, bumpMap: louvre.bumpMap, bumpScale: 1 });
  for (const x of [-0.7, 0.7]) g.add(plane(0.4, 0.5, louvreMat, x, 0.55, D / 2 + 0.005));
  for (const x of [-0.2, 0.25]) {
    g.add(box(0.42, 0.8, 0.012, std(0x456a52, 0.55, 0.35), x, 0.48, D / 2 + 0.006));
    g.add(box(0.03, 0.12, 0.03, std(0xd1d5db, 0.3, 0.8), x + 0.15, 0.5, D / 2 + 0.025));
  }
  g.add(plane(0.36, 0.16, new THREE.MeshStandardMaterial({ map: signTexture('CHP', '#fef3c7', '#78350f') }), 0.0, 0.98, D / 2 + 0.006));
  // roof radiator with two fans
  const rad = std(0x6b7280, 0.5, 0.6);
  g.add(box(0.9, 0.18, 0.75, rad, -0.45, H + 0.15, 0));
  for (const x of [-0.67, -0.23]) {
    const grille = fanGrille(0.17, std(0x1f2937, 0.5, 0.6));
    grille.rotation.x = -Math.PI / 2;
    grille.position.set(x, H + 0.245, 0);
    g.add(grille);
    const rotor = fanRotor(0.16, 5, std(0x374151, 0.6, 0.3));
    rotor.rotation.x = -Math.PI / 2;
    rotor.position.set(x, H + 0.24, 0);
    rotor.userData.rotate = { axis: 'z', speed: 0.35 };
    g.add(rotor);
  }
  // exhaust silencer + stack with rain cap
  const steel = std(0xb8bec5, 0.35, 0.85);
  const sil = cyl(0.13, 0.13, 0.7, steel, 0.5, H + 0.22, -0.1, 24);
  sil.rotation.z = Math.PI / 2;
  g.add(sil);
  g.add(cyl(0.06, 0.06, 0.9, steel, 0.85, H + 0.6, -0.1, 16));
  g.add(cyl(0.11, 0.06, 0.06, steel, 0.85, H + 1.08, -0.1, 16));
  // yellow gas supply pipe
  g.add(pipe([new THREE.Vector3(-L / 2 - 0.4, -0.05, 0.2), new THREE.Vector3(-L / 2 - 0.3, 0.3, 0.2), new THREE.Vector3(-L / 2 + 0.01, 0.3, 0.2)], 0.03, std(0xeab308, 0.45, 0.3)));
  g.add(led(0x22c55e, 0.85, 0.9, D / 2 + 0.01));
  g.add(pad(L + 0.6, D + 0.5, 0.08));
  return g;
}

// ---------------------------------------------------------------------------
// Thermal storage tank
// ---------------------------------------------------------------------------

function thermalStorage(params: Params) {
  const g = new THREE.Group();
  const kwh = num(params, 'capacity_kwh', 1000);
  const H = clamp(1.6 + kwh / 2500, 1.6, 3.2);
  const R = clamp(0.45 + kwh / 20000, 0.45, 0.75);
  const clad = ribbedMaps('#cfd5db', 24);
  clad.map.repeat.set(3, 1); clad.bumpMap.repeat.set(3, 1);
  const shell = std(0xffffff, 0.35, 0.75, { map: clad.map, bumpMap: clad.bumpMap, bumpScale: 0.4 });
  const steel = std(0x9ca3af, 0.4, 0.8);
  g.add(cyl(R, R, H, shell, 0, H / 2 + 0.1, 0, 48));
  // cladding bands
  for (const f of [0.25, 0.5, 0.75]) g.add(cyl(R + 0.008, R + 0.008, 0.025, steel, 0, 0.1 + H * f, 0, 48));
  // domed roof
  const dome = mesh(new THREE.SphereGeometry(R, 48, 16, 0, Math.PI * 2, 0, Math.PI / 5), shell, 0, H + 0.1 - R * Math.cos(Math.PI / 5), 0);
  g.add(dome);
  g.add(cyl(R + 0.05, R + 0.06, 0.1, concreteMat(21), 0, 0.05, 0, 48)); // ring foundation
  // caged ladder
  const lz = R + 0.08;
  for (const dx of [-0.08, 0.08]) g.add(cyl(0.008, 0.008, H + 0.1, steel, dx, (H + 0.1) / 2 + 0.05, lz, 6));
  for (let y = 0.2; y < H; y += 0.12) g.add(cyl(0.006, 0.006, 0.16, steel, 0, y, lz, 6).rotateZ(Math.PI / 2));
  for (let y = 0.8; y < H; y += 0.3) {
    const hoop = mesh(new THREE.TorusGeometry(0.16, 0.006, 6, 20, Math.PI), steel, 0, y, lz);
    hoop.rotation.x = 0;
    g.add(hoop);
  }
  // top platform railing
  const rail = mesh(new THREE.TorusGeometry(R * 0.6, 0.008, 6, 40), steel, 0, H + 0.35, 0);
  rail.rotation.x = Math.PI / 2;
  g.add(rail);
  // flanged pipe connections (hot top, cold bottom)
  for (const [y, band] of [[H * 0.85, 0xdc2626], [0.35, 0x2563eb]] as const) {
    g.add(pipe([new THREE.Vector3(-R + 0.02, y, 0), new THREE.Vector3(-R - 0.35, y, 0), new THREE.Vector3(-R - 0.5, y - 0.15, 0), new THREE.Vector3(-R - 0.5, -0.1, 0)], 0.045, std(0xe5e7eb, 0.5)));
    const fl = cyl(0.07, 0.07, 0.03, std(band, 0.5, 0.3), -R - 0.05, y, 0, 20);
    fl.rotation.z = Math.PI / 2;
    g.add(fl);
  }
  // temperature gauges
  for (const y of [0.5, H * 0.5, H * 0.8]) {
    const gg = cyl(0.035, 0.035, 0.02, std(0xf8fafc, 0.3), 0, y, -R - 0.01, 20);
    gg.rotation.x = Math.PI / 2;
    g.add(gg);
  }
  g.add(pad(2 * R + 1.4, 2 * R + 0.6));
  return g;
}

// ---------------------------------------------------------------------------
// Load centre (LV switchgear)
// ---------------------------------------------------------------------------

function loadCenter() {
  const g = new THREE.Group();
  const sections = 3, sw = 0.5, H = 1.1, D = 0.45;
  const cabinet = std(0xd7d7d2, 0.55, 0.25);
  const handle = std(0x1f2937, 0.4, 0.6);
  for (let i = 0; i < sections; i++) {
    const x = (i - (sections - 1) / 2) * (sw + 0.01);
    g.add(box(sw, H, D, cabinet, x, H / 2 + 0.1, 0));
    g.add(box(sw - 0.04, H - 0.06, 0.012, std(0xe1e1dc, 0.5, 0.25), x, H / 2 + 0.1, D / 2 + 0.006));
    g.add(box(0.03, 0.12, 0.03, handle, x + sw / 2 - 0.07, H / 2 + 0.12, D / 2 + 0.025));
    const vent = ribbedMaps('#bdbdb7', 8, true);
    g.add(plane(0.3, 0.12, std(0xffffff, 0.6, 0.3, { map: vent.map, bumpMap: vent.bumpMap, bumpScale: 0.8 }), x, 0.25, D / 2 + 0.014));
    g.add(plane(0.3, 0.12, std(0xffffff, 0.6, 0.3, { map: vent.map, bumpMap: vent.bumpMap, bumpScale: 0.8 }), x, H - 0.05, D / 2 + 0.014));
    // meter display + indicator lamps
    g.add(plane(0.16, 0.1, std(0x0b1220, 0.3, 0, { emissive: 0x34d399, emissiveIntensity: 0.6 }), x - 0.06, H * 0.72 + 0.1, D / 2 + 0.014));
    g.add(led(i === 1 ? 0xef4444 : 0x22c55e, x + 0.1, H * 0.74 + 0.1, D / 2 + 0.02, 0.02));
    g.add(led(0xfacc15, x + 0.16, H * 0.74 + 0.1, D / 2 + 0.02, 0.02));
  }
  g.add(box(sections * (sw + 0.01) + 0.02, 0.1, D + 0.02, std(0x1f2937, 0.7), 0, 0.05, 0)); // plinth
  g.add(box(sections * (sw + 0.01) + 0.04, 0.03, D + 0.06, std(0xc7c7c2, 0.5, 0.3), 0, H + 0.115, 0)); // top cover
  g.add(plane(0.26, 0.13, new THREE.MeshStandardMaterial({ map: signTexture('400 V', '#ffffff', '#111827', true) }), -0.5, H * 0.45 + 0.1, D / 2 + 0.014));
  // cable trench cover
  g.add(box(sections * (sw + 0.01), 0.02, 0.4, std(0x6b7280, 0.6, 0.6), 0, 0.01, D / 2 + 0.3));
  g.add(pad(sections * 0.55 + 0.8, 1.4));
  return g;
}

// ---------------------------------------------------------------------------

export function createComponentModel(type: DTComponentType, params: Params): THREE.Group {
  let model: THREE.Group;
  switch (type) {
    case 'solar_pv': model = solarArray(params); break;
    case 'smart_building': model = smartBuilding(params); break;
    case 'battery_storage': model = batteryStorage(params); break;
    case 'wind_turbine': model = windTurbine(params); break;
    case 'district_heating': model = districtHeating(params); break;
    case 'smart_grid': model = smartGrid(); break;
    case 'ev_charger': model = evCharger(); break;
    case 'heat_pump': model = heatPump(params); break;
    case 'chp_unit': model = chpUnit(); break;
    case 'thermal_storage': model = thermalStorage(params); break;
    case 'load_center': model = loadCenter(); break;
    default: model = new THREE.Group();
  }
  model.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      child.castShadow = !child.userData.isPad;
      child.receiveShadow = true;
    }
  });
  return model;
}

/** Simple stylised deciduous / conifer tree for landscaping. */
export function createTree(seed: number): THREE.Group {
  const rand = rng(seed);
  const g = new THREE.Group();
  const conifer = rand() > 0.6;
  const h = 0.8 + rand() * 0.9;
  g.add(cyl(0.04, 0.06, h * 0.45, std(0x5b4331, 0.95), 0, h * 0.225, 0, 8));
  const leaf = std(conifer ? 0x2f5d3a : [0x4d7c3a, 0x5a8a3c, 0x3f6f35][Math.floor(rand() * 3)], 0.9, 0, { flatShading: true });
  if (conifer) {
    for (let i = 0; i < 3; i++) g.add(mesh(new THREE.ConeGeometry(0.42 - i * 0.1, 0.6, 8), leaf, 0, h * 0.4 + i * 0.32, 0));
  } else {
    for (let i = 0; i < 4; i++) {
      const r = 0.28 + rand() * 0.18;
      const blob = mesh(new THREE.IcosahedronGeometry(r, 1), leaf, (rand() - 0.5) * 0.35, h * 0.55 + rand() * 0.35, (rand() - 0.5) * 0.35);
      g.add(blob);
    }
  }
  g.traverse((c) => { if ((c as THREE.Mesh).isMesh) { c.castShadow = true; c.receiveShadow = true; } });
  g.scale.setScalar(0.9 + rand() * 0.4);
  return g;
}

export function grassTexture(): THREE.CanvasTexture {
  const t = noiseTexture('#5d7d43', 0.22, 256, 31);
  t.repeat.set(80, 80);
  return t;
}
