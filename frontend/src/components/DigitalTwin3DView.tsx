import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { COMPONENT_DEFS, type DigitalTwinConfig, type DTComponent, type DTComponentType, type DTConnection } from './DigitalTwinBuilder';
import { DeviceIcon, specLine } from './builder/builderUi';
import { createComponentModel, createTree, grassTexture } from './twin3d/models';
import { createLamp, createPath, createStars, formatClock, isSharedTexture, parseSimClock, sunState, type SimClock } from './twin3d/environment';
import { formatPower } from '../lib/format';

/** Live readings from the simulation (MW), used to drive flows, labels and lighting. */
export interface TwinLive {
  timestamp?: string | null;
  solarMw?: number;
  windMw?: number;
  hydroMw?: number;
  loadMw?: number;
}

interface Props {
  config: DigitalTwinConfig | null;
  animate?: boolean;
  onComponentMove?: (componentId: string, x: number, y: number) => void;
  live?: TwinLive | null;
}

const LABEL_COLORS: Record<string, string> = {
  solar_pv: '#f5b83d', wind_turbine: '#5ab8e8', battery_storage: '#2fc59b', smart_building: '#94a3b8',
  smart_grid: '#a78bfa', district_heating: '#f87171', heat_pump: '#fb923c', chp_unit: '#f97316',
  thermal_storage: '#f472b6', ev_charger: '#38bdf8', load_center: '#cbd5e1',
};

const GENERATORS = new Set(['solar_pv', 'wind_turbine', 'chp_unit']);
const CONSUMERS = new Set(['smart_building', 'ev_charger', 'load_center', 'heat_pump']);

// 2D builder → 3D scene mapping
const SCALE = 0.035;
const OFFSET_X = -5;
const OFFSET_Z = 8;

// Preview (no simulation clock): a midsummer day
const PREVIEW_DOY = 172;
const IDLE_MW = 0.0005;

// Floating name tag above a component, with an optional live value
function drawLabel(sprite: THREE.Sprite, name: string, type: string, value?: string) {
  const canvas = sprite.userData.canvas as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const label = String(name ?? '').substring(0, 24);
  ctx.font = '600 40px Inter, system-ui, Arial';
  const nameW = ctx.measureText(label).width;
  ctx.font = '700 38px Inter, system-ui, Arial';
  const valueW = value ? ctx.measureText(value).width + 28 : 0;
  const w = Math.min(canvas.width - 8, nameW + valueW + 84);
  const x0 = (canvas.width - w) / 2;
  sprite.userData.widthFrac = w / canvas.width;
  ctx.fillStyle = 'rgba(11, 17, 32, 0.84)';
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') ctx.roundRect(x0, 16, w, 72, 36);
  else ctx.rect(x0, 16, w, 72); // roundRect is missing in older Safari/Firefox
  ctx.fill();
  ctx.fillStyle = LABEL_COLORS[type] ?? '#94a3b8';
  ctx.beginPath();
  ctx.arc(x0 + 38, 52, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.textBaseline = 'middle';
  ctx.font = '600 40px Inter, system-ui, Arial';
  ctx.fillStyle = '#f1f5f9';
  ctx.fillText(label, x0 + 60, 54);
  if (value) {
    ctx.font = '700 38px Inter, system-ui, Arial';
    ctx.fillStyle = sprite.userData.valueColor ?? '#7dd3fc';
    ctx.fillText(value, x0 + 60 + nameW + 28, 54);
  }
  (sprite.material as THREE.SpriteMaterial).map!.needsUpdate = true;
}

function createLabel(position: THREE.Vector3, yOffset: number): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 768;
  canvas.height = 112;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  // Constant on-screen size (scale is a fraction of the viewport height)
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, sizeAttenuation: false, fog: false });
  const sprite = new THREE.Sprite(material);
  sprite.userData.canvas = canvas;
  sprite.position.copy(position);
  sprite.position.y = yOffset + 0.35;
  sprite.center.set(0.5, 0);
  sprite.scale.set(0.3, 0.3 * (canvas.height / canvas.width), 1);
  sprite.renderOrder = 10;
  return sprite;
}

let glowTexture: THREE.Texture | null = null;
function getGlowTexture() {
  if (!glowTexture) {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d')!;
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.25, 'rgba(255,255,255,0.8)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    glowTexture = new THREE.CanvasTexture(c);
  }
  return glowTexture;
}

// Hide labels that would overlap a nearer one (or the selected asset's label)
const _proj = new THREE.Vector3();
function declutterLabels(labels: Iterable<THREE.Sprite>, camera: THREE.PerspectiveCamera, width: number, height: number, selectedId: string | null) {
  const k = camera.projectionMatrix.elements[5] / 2 * height; // px per unit of (non-attenuated) sprite scale
  const items = [...labels].map(sprite => {
    _proj.copy(sprite.position).project(camera);
    const w = (sprite.userData.widthFrac ?? 0.5) * sprite.scale.x * k;
    const h = (72 / 112) * sprite.scale.y * k;
    const x = (_proj.x + 1) / 2 * width;
    const y = (1 - _proj.y) / 2 * height;
    const depth = camera.position.distanceTo(sprite.position);
    return { sprite, rect: { l: x - w / 2, r: x + w / 2, t: y - h * 1.2, b: y }, behind: _proj.z > 1, depth, pinned: sprite.userData.compId === selectedId };
  });
  items.sort((a, b) => Number(b.pinned) - Number(a.pinned) || a.depth - b.depth);
  const placed: { l: number; r: number; t: number; b: number }[] = [];
  for (const it of items) {
    const hit = placed.some(p => it.rect.l < p.r + 4 && it.rect.r > p.l - 4 && it.rect.t < p.b + 2 && it.rect.b > p.t - 2);
    it.sprite.visible = !it.behind && !hit;
    if (it.sprite.visible) placed.push(it.rect);
  }
}

// Energy flow: a cable/pipe trace on the ground with glowing pulses moving along it.
// Pulse speed and brightness follow the live power; the direction can flip (export).
class EnergyFlow {
  group = new THREE.Group();
  particles: THREE.Points;
  core: THREE.Mesh;
  curve: THREE.CatmullRomCurve3;
  positions: Float32Array;
  progress: Float32Array;
  count: number;
  baseSpeed: number;
  /** +1 = from → to, −1 = to → from */
  dir = 1;
  /** 0–1 share of the busiest flow; null when there is no live data */
  intensity: number | null = null;

  constructor(start: THREE.Vector3, end: THREE.Vector3, color: number, public fromId: string, public toId: string, count = 12) {
    const mid = start.clone().lerp(end, 0.5);
    const a = new THREE.Vector3(start.x, 0.07, start.z);
    const b = new THREE.Vector3(end.x, 0.07, end.z);
    this.curve = new THREE.CatmullRomCurve3([a, new THREE.Vector3(mid.x, 0.07, mid.z), b]);
    this.count = count;
    this.baseSpeed = 0.5 / Math.max(2, a.distanceTo(b)) * 0.02;

    // trench line (dark) with a coloured glowing core
    const trace = new THREE.Mesh(
      new THREE.TubeGeometry(this.curve, 32, 0.035, 8, false),
      new THREE.MeshStandardMaterial({ color: 0x2b2f35, roughness: 0.8 }),
    );
    trace.receiveShadow = true;
    this.core = new THREE.Mesh(
      new THREE.TubeGeometry(this.curve, 32, 0.014, 8, false),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.75 }),
    );
    this.core.position.y = 0.025;
    this.group.add(trace, this.core);

    this.positions = new Float32Array(count * 3);
    this.progress = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      this.progress[i] = i / count;
      this.place(i);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.particles = new THREE.Points(geometry, new THREE.PointsMaterial({
      color, size: 0.32, map: getGlowTexture(), transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, sizeAttenuation: true,
    }));
    this.group.add(this.particles);
  }

  setLive(dir: number, intensity: number | null) {
    this.dir = dir;
    this.intensity = intensity;
    const idle = intensity !== null && intensity <= 0;
    const k = intensity ?? 0.55;
    const pm = this.particles.material as THREE.PointsMaterial;
    this.particles.visible = !idle;
    pm.size = 0.2 + 0.22 * k;
    pm.opacity = 0.45 + 0.55 * k;
    (this.core.material as THREE.MeshBasicMaterial).opacity = idle ? 0.18 : 0.45 + 0.4 * k;
  }

  place(i: number) {
    const p = this.curve.getPointAt(this.progress[i]);
    this.positions[i * 3] = p.x;
    this.positions[i * 3 + 1] = p.y + 0.06;
    this.positions[i * 3 + 2] = p.z;
  }

  update() {
    if (!this.particles.visible) return;
    const speed = this.baseSpeed * (0.35 + 1.6 * (this.intensity ?? 0.4)) * this.dir;
    for (let i = 0; i < this.count; i++) {
      this.progress[i] = (((this.progress[i] + speed) % 1) + 1) % 1;
      this.place(i);
    }
    this.particles.geometry.attributes.position.needsUpdate = true;
  }
}

// Free GPU resources (geometries, materials, textures) held by an object tree
function disposeObject(root: THREE.Object3D) {
  root.traverse(obj => {
    const anyObj = obj as any;
    if (anyObj.geometry) anyObj.geometry.dispose();
    const mats: THREE.Material[] = Array.isArray(anyObj.material)
      ? anyObj.material
      : anyObj.material ? [anyObj.material] : [];
    mats.forEach(m => {
      Object.values(m).forEach(v => {
        const t = v as THREE.Texture;
        if (t && t.isTexture && t !== glowTexture && !isSharedTexture(t)) t.dispose();
      });
      m.dispose();
    });
  });
}

const num = (v: unknown, fallback = 0) => {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : fallback;
};

/** Splits the district totals across components by their rating (MW, null = no data for that type). */
function componentPowers(components: DTComponent[], live: TwinLive | null | undefined): Map<string, number | null> {
  const out = new Map<string, number | null>();
  if (!live) return out;
  const share = (type: DTComponentType, weight: (c: DTComponent) => number, total: number) => {
    const list = components.filter(c => c.type === type);
    const sum = list.reduce((s, c) => s + weight(c), 0) || 1;
    list.forEach(c => out.set(c.id, total * weight(c) / sum));
  };
  share('solar_pv', c => num(c.params?.capacity_kwp, 1), live.solarMw ?? 0);
  share('wind_turbine', c => num(c.params?.capacity_kw, 1), live.windMw ?? 0);
  // Same split as the simulation: one demand profile scaled to the summed peak
  // of buildings and load centres (EV chargers and heat pumps are not simulated)
  const loadWeight = (c: DTComponent) => {
    const p = c.params ?? {};
    return c.type === 'smart_building' ? num(p.load_kw, 0) : num(p.peak_load_kw, num(p.base_load_kw, 0));
  };
  const consumers = components.filter(c => c.type === 'smart_building' || c.type === 'load_center');
  const loadSum = consumers.reduce((s, c) => s + loadWeight(c), 0) || 1;
  consumers.forEach(c => out.set(c.id, (live.loadMw ?? 0) * loadWeight(c) / loadSum));
  const grids = components.filter(c => c.type === 'smart_grid');
  const net = (live.loadMw ?? 0) - ((live.solarMw ?? 0) + (live.windMw ?? 0) + (live.hydroMw ?? 0));
  grids.forEach(c => out.set(c.id, net / grids.length));
  components.forEach(c => { if (!out.has(c.id)) out.set(c.id, null); });
  return out;
}

function powerText(type: string, mw: number | null | undefined): string | undefined {
  if (mw == null) return undefined;
  if (type === 'smart_grid') {
    if (Math.abs(mw) < IDLE_MW) return 'balanced';
    return `${mw > 0 ? '↓' : '↑'} ${formatPower(Math.abs(mw))}`;
  }
  return formatPower(mw);
}

const ROLE_TEXT: Partial<Record<DTComponentType, string>> = {
  solar_pv: 'Produces electricity from sunlight.',
  wind_turbine: 'Produces electricity from wind.',
  chp_unit: 'Burns fuel to make both electricity and heat.',
  battery_storage: 'Stores surplus electricity and releases it later.',
  thermal_storage: 'Stores heat as hot water for later use.',
  smart_building: 'Consumes electricity and heat; part of its load can shift in time.',
  load_center: 'Groups several electricity consumers into one connection.',
  ev_charger: 'Charges electric vehicles; with V2G it can also feed power back.',
  heat_pump: 'Turns electricity into heat, several kWh of heat per kWh used.',
  smart_grid: 'Connection to the public grid: imports when the district is short, exports surplus.',
  district_heating: 'Supplies heat through the district heating network.',
};

export function DigitalTwin3DView({ config, animate = true, onComponentMove, live }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelsRef = useRef<Map<string, THREE.Group>>(new Map());
  const labelsRef = useRef<THREE.Group | null>(null);
  const labelMapRef = useRef<Map<string, THREE.Sprite>>(new Map());
  const flowsRef = useRef<EnergyFlow[]>([]);
  const rotatingPartsRef = useRef<THREE.Object3D[]>([]);
  const dressingRef = useRef<THREE.Group | null>(null);
  const windowMatsRef = useRef<{ mat: THREE.MeshStandardMaterial; base: number }[]>([]);
  const nightRef = useRef<THREE.Object3D[]>([]);
  const envRef = useRef<{
    sky: Sky; sun: THREE.DirectionalLight; moon: THREE.DirectionalLight; hemi: THREE.HemisphereLight; stars: THREE.Points;
  } | null>(null);
  const siteCenterRef = useRef(new THREE.Vector3());
  const selectRingRef = useRef<THREE.Mesh | null>(null);
  const frameRef = useRef<number>(0);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const draggedRef = useRef<{ id: string; model: THREE.Group; offset: THREE.Vector3 } | null>(null);
  const planeRef = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));
  const animateRef = useRef(animate);
  const onComponentMoveRef = useRef(onComponentMove);
  const fittedKeyRef = useRef<string | null>(null);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIdRef = useRef<string | null>(null);
  selectedIdRef.current = selectedId;
  const [previewHour, setPreviewHour] = useState(13);
  const [dayPlaying, setDayPlaying] = useState(false);

  const components: DTComponent[] = useMemo(() => (Array.isArray(config?.components) ? config!.components : []), [config]);
  const simClock = parseSimClock(live?.timestamp);
  const clock: SimClock = simClock ?? { doy: PREVIEW_DOY, hour: previewHour };
  const sun = useMemo(() => sunState(clock), [clock.doy, Math.round(clock.hour * 12)]); // eslint-disable-line react-hooks/exhaustive-deps
  const powers = useMemo(() => componentPowers(components, live), [components, live]);

  // Keep refs in sync with props
  useEffect(() => {
    animateRef.current = animate;
    if (!animate) setDayPlaying(false);
  }, [animate]);

  useEffect(() => {
    onComponentMoveRef.current = onComponentMove;
  }, [onComponentMove]);

  // Preview: let the day run by itself
  useEffect(() => {
    if (!dayPlaying || simClock) return;
    const id = window.setInterval(() => setPreviewHour(h => (h + 0.1) % 24), 80);
    return () => window.clearInterval(id);
  }, [dayPlaying, simClock]);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const w = container.clientWidth || 600;
    const h = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 2000);
    camera.position.set(5, 4, 5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = true;
    controls.screenSpacePanning = true;
    controls.maxPolarAngle = Math.PI * 0.48; // stay above the ground
    controls.minDistance = 2;
    controls.maxDistance = 80;
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.ROTATE,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.PAN
    };
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN
    };
    controls.target.set(0, 1, 0);
    controlsRef.current = controls;

    // Physical sky; a daylight copy of it is baked once into the environment map
    const sky = new Sky();
    sky.scale.setScalar(1000);
    const u = sky.material.uniforms;
    u.turbidity.value = 4;
    u.rayleigh.value = 1.2;
    u.mieCoefficient.value = 0.004;
    u.mieDirectionalG.value = 0.8;
    u.sunPosition.value.setFromSphericalCoords(1, THREE.MathUtils.degToRad(55), THREE.MathUtils.degToRad(140));
    scene.add(sky);
    const pmrem = new THREE.PMREMGenerator(renderer);
    const envScene = new THREE.Scene();
    const envSky = new Sky();
    envSky.scale.setScalar(1000);
    Object.assign(envSky.material.uniforms, THREE.UniformsUtils.clone(sky.material.uniforms));
    envScene.add(envSky);
    const envTarget = pmrem.fromScene(envScene, 0.02);
    scene.environment = envTarget.texture;
    scene.environmentIntensity = 0.7;
    envSky.geometry.dispose();
    envSky.material.dispose();
    pmrem.dispose();
    // Haze that matches the sky near the horizon, so the ground fades out naturally
    scene.fog = new THREE.Fog(0xb9cbdc, 35, 170);

    const stars = createStars();
    scene.add(stars);

    const hemi = new THREE.HemisphereLight(0xdfeaff, 0x5b6b45, 0.9);
    scene.add(hemi);
    const sunLight = new THREE.DirectionalLight(0xfff2de, 2.6);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.set(2048, 2048);
    sunLight.shadow.radius = 3;
    sunLight.shadow.camera.near = 1;
    sunLight.shadow.camera.far = 120;
    sunLight.shadow.bias = -0.0004;
    sunLight.shadow.normalBias = 0.02;
    scene.add(sunLight, sunLight.target);
    // Cool, shadowless moonlight so the night scene stays readable
    const moon = new THREE.DirectionalLight(0x9db4e6, 0);
    moon.position.set(-20, 30, -10);
    scene.add(moon);
    envRef.current = { sky, sun: sunLight, moon, hemi, stars };

    // Grass ground
    const groundTexture = grassTexture();
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(1500, 1500),
      new THREE.MeshStandardMaterial({ map: groundTexture, roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Trees, paths and lamps; rebuilt with the layout
    const dressing = new THREE.Group();
    scene.add(dressing);
    dressingRef.current = dressing;

    const labelsGroup = new THREE.Group();
    scene.add(labelsGroup);
    labelsRef.current = labelsGroup;

    // Selection marker: a soft ring on the ground under the selected asset
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(1, 1.12, 64),
      new THREE.MeshBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.85, depthWrite: false }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.05;
    ring.visible = false;
    scene.add(ring);
    selectRingRef.current = ring;

    const clockStart = performance.now();
    const animateLoop = () => {
      frameRef.current = requestAnimationFrame(animateLoop);
      controls.update();

      if (animateRef.current) {
        flowsRef.current.forEach(f => f.update());
        rotatingPartsRef.current.forEach(part => {
          const { axis, speed } = part.userData.rotate as { axis: 'x' | 'y' | 'z'; speed: number };
          part.rotation[axis] += speed;
        });
        if (ring.visible) (ring.material as THREE.MeshBasicMaterial).opacity = 0.55 + 0.35 * Math.sin((performance.now() - clockStart) / 260);
      }

      if (++frameCount % 6 === 0) {
        const size = renderer.getSize(new THREE.Vector2());
        declutterLabels(labelMapRef.current.values(), camera, size.x, size.y, selectedIdRef.current);
      }
      renderer.render(scene, camera);
    };
    let frameCount = 0;
    animateLoop();

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      // Hidden / collapsed container: avoid NaN aspect and 0-sized buffers
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);
    // Container can change size without a window resize (layout/panel changes)
    const resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onResize) : null;
    resizeObserver?.observe(container);

    const getMousePosition = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Nearest model under the pointer (not the first one in insertion order)
    const pick = (e: MouseEvent) => {
      getMousePosition(e);
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      let best: { id: string; model: THREE.Group; distance: number } | null = null;
      for (const [id, model] of modelsRef.current.entries()) {
        const hit = raycasterRef.current.intersectObject(model, true)[0];
        if (hit && (!best || hit.distance < best.distance)) best = { id, model, distance: hit.distance };
      }
      return best;
    };

    let downAt: { x: number; y: number } | null = null;
    const onPointerDown = (e: PointerEvent) => {
      downAt = { x: e.clientX, y: e.clientY };
      if (!onComponentMoveRef.current) return;
      const best = pick(e);
      if (!best) return;
      const point = new THREE.Vector3();
      if (!raycasterRef.current.ray.intersectPlane(planeRef.current, point)) return;
      controls.enabled = false;
      draggedRef.current = {
        id: best.id,
        model: best.model,
        offset: best.model.position.clone().sub(point)
      };
      renderer.domElement.style.cursor = 'grabbing';
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggedRef.current) {
        // Hover cursor (skip while orbiting)
        if (e.buttons === 0) {
          const over = Boolean(pick(e));
          renderer.domElement.style.cursor = over ? (onComponentMoveRef.current ? 'grab' : 'pointer') : 'default';
        }
        return;
      }

      getMousePosition(e);
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const point = new THREE.Vector3();
      // Ray parallel to / pointing away from the ground: keep last position
      if (!raycasterRef.current.ray.intersectPlane(planeRef.current, point)) return;

      const newPos = point.add(draggedRef.current.offset);
      draggedRef.current.model.position.x = newPos.x;
      draggedRef.current.model.position.z = newPos.z;

      const label = labelMapRef.current.get(draggedRef.current.id);
      if (label) {
        label.position.x = newPos.x;
        label.position.z = newPos.z;
      }
      if (ring.visible && ring.userData.id === draggedRef.current.id) {
        ring.position.x = newPos.x;
        ring.position.z = newPos.z;
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      const isClick = downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) < 6;
      downAt = null;
      if (draggedRef.current && onComponentMoveRef.current && !isClick) {
        const { id, model } = draggedRef.current;
        // Convert back to 2D canvas coordinates
        onComponentMoveRef.current(id, (model.position.x - OFFSET_X) / SCALE, (model.position.z - OFFSET_Z) / SCALE);
      }
      draggedRef.current = null;
      controls.enabled = true;
      if (isClick && e.type === 'pointerup') setSelectedId(pick(e)?.id ?? null);
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointerleave', onPointerUp);

    return () => {
      window.removeEventListener('resize', onResize);
      resizeObserver?.disconnect();
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      renderer.domElement.removeEventListener('pointerleave', onPointerUp);
      cancelAnimationFrame(frameRef.current);
      controls.dispose();
      // Dispose everything in the scene (models, labels, flows, trees, sky, ground)
      disposeObject(scene);
      envTarget.dispose();
      groundTexture.dispose();
      sunLight.dispose(); // frees the shadow-map render target
      moon.dispose();
      modelsRef.current.clear();
      labelMapRef.current.clear();
      flowsRef.current = [];
      rotatingPartsRef.current = [];
      windowMatsRef.current = [];
      nightRef.current = [];
      envRef.current = null;
      dressingRef.current = null;
      selectRingRef.current = null;
      draggedRef.current = null;
      fittedKeyRef.current = null;
      sceneRef.current = null;
      rendererRef.current = null;
      cameraRef.current = null;
      controlsRef.current = null;
      labelsRef.current = null;
      renderer.dispose();
      // Release the WebGL context now; browsers cap live contexts (~16)
      renderer.forceContextLoss();
      if (renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
    };
  }, []); // animate and onComponentMove handled via refs

  // ---- Build the site for the current layout --------------------------------
  useEffect(() => {
    const scene = sceneRef.current;
    const labelsGroup = labelsRef.current;
    const dressing = dressingRef.current;
    if (!scene || !labelsGroup || !dressing) return;

    // Clear existing (and free their GPU resources, otherwise every config
    // change leaks geometries/materials/textures)
    modelsRef.current.forEach(model => { scene.remove(model); disposeObject(model); });
    modelsRef.current.clear();
    while (labelsGroup.children.length) {
      const child = labelsGroup.children[0];
      labelsGroup.remove(child);
      disposeObject(child);
    }
    labelMapRef.current.clear();
    flowsRef.current.forEach(f => { scene.remove(f.group); disposeObject(f.group); });
    flowsRef.current = [];
    rotatingPartsRef.current = [];
    windowMatsRef.current = [];
    nightRef.current = [];
    while (dressing.children.length) { const t = dressing.children[0]; dressing.remove(t); disposeObject(t); }
    // A drag in progress refers to a model that no longer exists
    draggedRef.current = null;
    if (controlsRef.current) controlsRef.current.enabled = true;

    const connections: DTConnection[] = Array.isArray(config?.connections) ? config!.connections : [];

    components.forEach((comp: DTComponent) => {
      const model = createComponentModel(comp.type, comp.params || {});
      const x = (Number(comp.x) || 0) * SCALE + OFFSET_X;
      const z = (Number(comp.y) || 0) * SCALE + OFFSET_Z;
      model.position.set(x, 0, z);
      model.userData.compId = comp.id;
      scene.add(model);
      modelsRef.current.set(comp.id, model);

      model.traverse(child => {
        if (child.userData.rotate) rotatingPartsRef.current.push(child);
        // Lit windows: facade materials carry an emissive window map
        const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
        if (mat && !Array.isArray(mat) && mat.emissiveMap) windowMatsRef.current.push({ mat, base: mat.emissiveIntensity });
      });

      const box = new THREE.Box3().setFromObject(model);
      const label = createLabel(new THREE.Vector3(x, 0, z), Number.isFinite(box.max.y) ? box.max.y : 0);
      label.userData.compId = comp.id;
      labelsGroup.add(label);
      labelMapRef.current.set(comp.id, label);
    });

    // Paved paths, cables and street lamps along every connection
    const lampSpots: THREE.Vector3[] = [];
    connections.forEach((conn: DTConnection) => {
      const fromComp = components.find(c => c.id === conn.from);
      const toComp = components.find(c => c.id === conn.to);
      const fromModel = modelsRef.current.get(conn.from);
      const toModel = modelsRef.current.get(conn.to);
      if (!fromModel || !toModel || !fromComp || !toComp) return;

      const a = fromModel.position.clone();
      const b = toModel.position.clone();
      dressing.add(createPath(a, b));

      const flowColor = conn.type === 'heat' ? 0xff6a3d : conn.type === 'both' ? 0xc084fc : 0x38bdf8;
      const flow = new EnergyFlow(a, b, flowColor, conn.from, conn.to);
      // Without live data: generators/sources push towards consumers
      const fromIsConsumer = CONSUMERS.has(fromComp.type), toIsConsumer = CONSUMERS.has(toComp.type);
      const fromIsGen = GENERATORS.has(fromComp.type), toIsGen = GENERATORS.has(toComp.type);
      flow.setLive((fromIsConsumer && !toIsConsumer) || (toIsGen && !fromIsGen) ? -1 : 1, null);
      scene.add(flow.group);
      flowsRef.current.push(flow);

      const len = a.distanceTo(b);
      const n = Math.floor((len - 2.6) / 3.4);
      const side = new THREE.Vector3(-(b.z - a.z), 0, b.x - a.x).normalize().multiplyScalar(0.5);
      for (let i = 0; i <= n && len > 3; i++) {
        const t = n === 0 ? 0.5 : 1.3 / len + (i / n) * (1 - 2.6 / len);
        const p = a.clone().lerp(b, t).add(side);
        if (lampSpots.some(q => q.distanceTo(p) < 1.6)) continue;
        lampSpots.push(p);
        const lamp = createLamp();
        lamp.position.copy(p);
        lamp.rotation.y = Math.atan2(side.z, -side.x);
        dressing.add(lamp);
      }
    });
    dressing.traverse(o => { if (o.userData.night) nightRef.current.push(o); });

    const site = new THREE.Box3();
    modelsRef.current.forEach(m => {
      let padded = false;
      m.traverse(o => { if (o.userData.isPad) { site.expandByObject(o); padded = true; } });
      if (!padded) site.expandByObject(m);
    });
    if (!site.isEmpty()) {
      const c = site.getCenter(new THREE.Vector3());
      const size = site.getSize(new THREE.Vector3());
      const r = Math.max(size.x, size.z) / 2 + 3;
      siteCenterRef.current.set(c.x, 0, c.z);
      const sunLight = envRef.current?.sun;
      if (sunLight) {
        sunLight.target.position.set(c.x, 0, c.z);
        const cam = sunLight.shadow.camera;
        cam.left = cam.bottom = -r - 2;
        cam.right = cam.top = r + 2;
        cam.updateProjectionMatrix();
      }
      // Landscaping: irregular clumps of trees outside the site, leaving the
      // camera-facing side mostly open
      const hx = size.x / 2 + 1.6, hz = size.z / 2 + 1.6;
      const rand = (i: number) => { const v = Math.sin(i * 127.1 + 311.7) * 43758.5453; return v - Math.floor(v); };
      const clumps = 7 + Math.round(r);
      for (let k = 0; k < clumps; k++) {
        const ang = rand(k) * Math.PI * 2;
        if (Math.cos(ang - Math.PI / 4) > 0.75) continue; // keep the default view corridor clear
        const d = 1 + rand(k + 50) * 0.9;
        const cx = c.x + Math.cos(ang) * hx * d * 1.15;
        const cz = c.z + Math.sin(ang) * hz * d * 1.15;
        const n = 2 + Math.floor(rand(k + 90) * 4);
        for (let j = 0; j < n; j++) {
          const tree = createTree(k * 10 + j + 1);
          tree.position.set(cx + (rand(k * 7 + j) - 0.5) * 2.2, 0, cz + (rand(k * 13 + j) - 0.5) * 2.2);
          dressing.add(tree);
        }
      }
    }

    // Fit camera only when the set of components changes; re-fitting on every
    // config update (e.g. after a drag via onComponentMove) yanks the camera.
    const fitKey = components.map(c => c.id).sort().join('|');
    if (components.length > 0 && fitKey !== fittedKeyRef.current) {
      fittedKeyRef.current = fitKey;
      const center = site.getCenter(new THREE.Vector3());
      const size = site.getSize(new THREE.Vector3());
      center.y = 0.8;
      controlsRef.current?.target.copy(center);
      const dist = Math.max(size.x, size.z, 4) * 0.85 + 3;
      cameraRef.current?.position.set(center.x + dist * 0.9, dist * 0.62, center.z + dist);
      controlsRef.current?.update();
    }
  }, [config, components]);

  // ---- Time of day: sun, sky, ambient light, windows and street lamps -------
  useEffect(() => {
    const env = envRef.current;
    const scene = sceneRef.current;
    if (!env || !scene) return;
    const day = sun.daylight;
    const night = 1 - day;
    const el = sun.elevationDeg;
    env.sky.material.uniforms.sunPosition.value.copy(sun.dir);
    env.sky.material.uniforms.rayleigh.value = 1.2 + 1.6 * (1 - THREE.MathUtils.smoothstep(el, 0, 20)); // redder low sun
    const direct = THREE.MathUtils.smoothstep(el, -1, 12);
    env.sun.intensity = 2.6 * direct;
    env.sun.color.setHex(0xff9a55).lerp(new THREE.Color(0xfff2de), THREE.MathUtils.smoothstep(el, 0, 25));
    env.sun.position.copy(siteCenterRef.current).addScaledVector(sun.dir, 40);
    env.sun.castShadow = direct > 0.02;
    env.moon.intensity = 0.55 * night;
    env.hemi.intensity = 0.22 + 0.68 * day;
    env.hemi.color.setHex(0x5f78b0).lerp(new THREE.Color(0xdfeaff), day);
    env.hemi.groundColor.setHex(0x1c2433).lerp(new THREE.Color(0x5b6b45), day);
    scene.environmentIntensity = 0.1 + 0.6 * day;
    (scene.fog as THREE.Fog).color.setHex(0x0b1324).lerp(new THREE.Color(0xb9cbdc), day);
    (env.stars.material as THREE.PointsMaterial).opacity = THREE.MathUtils.smoothstep(night, 0.55, 1) * 0.9;
    if (rendererRef.current) rendererRef.current.toneMappingExposure = 0.85 + 0.25 * night;
    windowMatsRef.current.forEach(({ mat, base }) => { mat.emissiveIntensity = base * 0.5 + 2.2 * night; });
    nightRef.current.forEach(o => {
      const spec = o.userData.night as { kind: 'emissive' | 'opacity'; max: number };
      const lit = THREE.MathUtils.smoothstep(night, 0.35, 0.85) * spec.max;
      const mat = (o as THREE.Mesh).material as THREE.MeshStandardMaterial;
      if (spec.kind === 'emissive') mat.emissiveIntensity = lit;
      else { mat.opacity = lit; o.visible = lit > 0.01; }
    });
  }, [sun, config, components]);

  // ---- Live power: flow speed/direction and label values ---------------------
  useEffect(() => {
    const byId = new Map(components.map(c => [c.id, c]));
    const known = [...powers.values()].filter((v): v is number => v != null).map(Math.abs);
    const ref = Math.max(0.02, ...known);
    flowsRef.current.forEach(flow => {
      const from = byId.get(flow.fromId), to = byId.get(flow.toId);
      if (!from || !to || !live) return;
      const pf = powers.get(from.id), pt = powers.get(to.id);
      let p: number | null = null;
      let dir = flow.dir;
      if (from.type === 'smart_grid' && pf != null) { p = Math.abs(pf); dir = pf >= 0 ? 1 : -1; }
      else if (to.type === 'smart_grid' && pt != null) { p = Math.abs(pt); dir = pt >= 0 ? -1 : 1; }
      else if (GENERATORS.has(from.type) && pf != null) { p = pf; dir = 1; }
      else if (GENERATORS.has(to.type) && pt != null) { p = pt; dir = -1; }
      else if (CONSUMERS.has(to.type) && pt != null) { p = pt; dir = 1; }
      else if (CONSUMERS.has(from.type) && pf != null) { p = pf; dir = -1; }
      if (p == null) { flow.setLive(dir, null); return; }
      flow.setLive(dir, p < IDLE_MW ? 0 : Math.sqrt(Math.min(1, p / ref)));
    });
    labelMapRef.current.forEach((sprite, id) => {
      const comp = byId.get(id);
      if (!comp) return;
      const mw = powers.get(id);
      sprite.userData.valueColor = comp.type === 'smart_grid' ? ((mw ?? 0) > 0 ? '#cbd5e1' : '#5eead4')
        : GENERATORS.has(comp.type) ? '#bef264' : CONSUMERS.has(comp.type) ? '#fda4af' : '#7dd3fc';
      const text = powerText(comp.type, mw);
      const key = `${comp.name}|${text ?? ''}`;
      if (sprite.userData.key === key) return;
      sprite.userData.key = key;
      drawLabel(sprite, comp.name, comp.type, text);
    });
  }, [powers, live, config, components]);

  // ---- Selection ring ---------------------------------------------------------
  const selected = components.find(c => c.id === selectedId) ?? null;
  useEffect(() => {
    const ring = selectRingRef.current;
    if (!ring) return;
    const model = selectedId ? modelsRef.current.get(selectedId) : undefined;
    ring.visible = Boolean(model);
    if (!model) return;
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    ring.scale.setScalar(Math.max(0.9, Math.max(size.x, size.z) * 0.62));
    ring.position.set(model.position.x, 0.05, model.position.z);
    ring.userData.id = selectedId;
  }, [selectedId, config, components]);

  // ---- HUD ------------------------------------------------------------------------
  const isNight = sun.daylight < 0.35;
  const dateText = simClock?.year
    ? new Date(simClock.year, (simClock.month ?? 1) - 1, simClock.day ?? 1).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' })
    : 'Midsummer day (preview)';
  const skyText = sun.elevationDeg > 8 ? `Daylight · sun ${Math.round(sun.elevationDeg)}° high`
    : sun.elevationDeg > -6 ? (clock.hour < 12 ? 'Dawn' : 'Dusk') : 'Night';
  const gen = (live?.solarMw ?? 0) + (live?.windMw ?? 0) + (live?.hydroMw ?? 0);
  const load = live?.loadMw ?? 0;
  const net = load - gen;
  const barMax = Math.max(gen, load, 1e-6);
  const selectedPower = selected ? powers.get(selected.id) : undefined;

  return (
    <div className="tw-root">
      <div ref={containerRef} className="tw-canvas" />

      <div className="tw-hud tw-clock">
        <span className={`tw-sky-icon ${isNight ? 'is-night' : ''}`} aria-hidden>{isNight ? '☾' : '☀'}</span>
        <div>
          <div className="tw-time">{formatClock(clock)}{simClock && <span className="tw-tz"> CET</span>}</div>
          <div className="tw-sub">{dateText}</div>
          <div className="tw-sub">{skyText}</div>
        </div>
      </div>

      {!simClock && (
        <div className="tw-hud tw-timebar">
          <button className="tw-play" onClick={() => setDayPlaying(p => !p)} disabled={!animate} aria-label={dayPlaying ? 'Pause day cycle' : 'Play day cycle'}>
            {dayPlaying ? '❚❚' : '▶'}
          </button>
          <input type="range" min={0} max={23.9} step={0.1} value={previewHour} onChange={e => { setDayPlaying(false); setPreviewHour(Number(e.target.value)); }} aria-label="Time of day" />
          <span className="tw-sub">Time of day</span>
        </div>
      )}

      {live && (
        <div className="tw-hud tw-balance" aria-label="Power right now">
          <div className="tw-hud-title">Right now</div>
          <BalanceRow label="Generation" value={formatPower(gen)} pct={gen / barMax} color="var(--c-gen)" />
          <BalanceRow label="Consumption" value={formatPower(load)} pct={load / barMax} color="var(--c-load)" />
          <div className="tw-net">
            <span className={net > IDLE_MW ? 'tw-net-import' : 'tw-net-export'}>
              {net > IDLE_MW ? '↓ Importing from grid' : net < -IDLE_MW ? '↑ Exporting to grid' : 'Balanced'}
            </span>
            <strong>{formatPower(Math.abs(net))}</strong>
          </div>
        </div>
      )}

      <div className="tw-hud tw-legend">
        <span><i style={{ background: '#38bdf8' }} />Electricity</span>
        <span><i style={{ background: '#ff6a3d' }} />Heat</span>
        <span><i style={{ background: '#c084fc' }} />Both</span>
        <span className="tw-hint">Drag to orbit · scroll to zoom · tap an asset for details</span>
      </div>

      {selected && (
        <div className="tw-hud tw-card" role="dialog" aria-label={`${selected.name} details`}>
          <button className="tw-close" onClick={() => setSelectedId(null)} aria-label="Close details">✕</button>
          <div className="tw-card-head" style={{ ['--tc' as string]: COMPONENT_DEFS[selected.type]?.color }}>
            <span className="bn-icon-tile"><DeviceIcon type={selected.type} size={20} /></span>
            <div>
              <strong>{selected.name}</strong>
              <div className="tw-sub">{COMPONENT_DEFS[selected.type]?.label} · {specLine(selected.type, selected.params || {})}</div>
            </div>
          </div>
          <p className="tw-role">{ROLE_TEXT[selected.type] ?? COMPONENT_DEFS[selected.type]?.description}</p>
          {selectedPower != null && (
            <div className="tw-card-value">
              <span>{selected.type === 'smart_grid' ? (selectedPower > 0 ? 'Importing now' : 'Exporting now') : GENERATORS.has(selected.type) ? 'Producing now' : 'Using now'}</span>
              <strong>{formatPower(Math.abs(selectedPower))}</strong>
            </div>
          )}
          {live && selectedPower == null && <div className="tw-sub">No live reading for this asset type yet.</div>}
          {selectedPower != null && <div className="tw-fine">Estimated share of the district total, by rated size.</div>}
        </div>
      )}
    </div>
  );
}

function BalanceRow({ label, value, pct, color }: { label: string; value: string; pct: number; color: string }) {
  return (
    <div className="tw-row">
      <div className="tw-row-head"><span>{label}</span><strong>{value}</strong></div>
      <div className="tw-bar"><div style={{ width: `${Math.max(2, Math.min(100, pct * 100))}%`, background: color }} /></div>
    </div>
  );
}

export default DigitalTwin3DView;
