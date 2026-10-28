import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import type { DigitalTwinConfig, DTComponent, DTConnection } from './DigitalTwinBuilder';
import { createComponentModel, createTree, grassTexture } from './twin3d/models';

interface Props {
  config: DigitalTwinConfig | null;
  animate?: boolean;
  onComponentMove?: (componentId: string, x: number, y: number) => void;
}

const LABEL_COLORS: Record<string, string> = {
  solar_pv: '#f5b83d', wind_turbine: '#5ab8e8', battery_storage: '#2fc59b', smart_building: '#94a3b8',
  smart_grid: '#a78bfa', district_heating: '#f87171', heat_pump: '#fb923c', chp_unit: '#f97316',
  thermal_storage: '#f472b6', ev_charger: '#38bdf8', load_center: '#cbd5e1',
};

// Floating name tag above a component
function createLabel(text: string, type: string, position: THREE.Vector3, yOffset: number): THREE.Sprite {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  canvas.width = 512;
  canvas.height = 112;
  const label = String(text ?? '').substring(0, 26);
  ctx.font = '600 40px Inter, system-ui, Arial';
  const w = Math.min(500, ctx.measureText(label).width + 84);
  const x0 = (canvas.width - w) / 2;
  ctx.fillStyle = 'rgba(11, 17, 32, 0.82)';
  ctx.beginPath();
  if (typeof ctx.roundRect === 'function') ctx.roundRect(x0, 16, w, 72, 36);
  else ctx.rect(x0, 16, w, 72); // roundRect is missing in older Safari/Firefox
  ctx.fill();
  ctx.fillStyle = LABEL_COLORS[type] ?? '#94a3b8';
  ctx.beginPath();
  ctx.arc(x0 + 38, 52, 10, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#f1f5f9';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, x0 + 60, 54);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  // Constant on-screen size (scale is a fraction of the viewport height)
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false, sizeAttenuation: false });
  const sprite = new THREE.Sprite(material);
  sprite.position.copy(position);
  sprite.position.y = yOffset + 0.35;
  sprite.center.set(0.5, 0);
  sprite.scale.set(0.2, 0.2 * (canvas.height / canvas.width), 1);
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

// Energy flow: a cable/pipe trace on the ground with glowing pulses moving along it
class EnergyFlow {
  group = new THREE.Group();
  particles: THREE.Points;
  curve: THREE.CatmullRomCurve3;
  positions: Float32Array;
  progress: Float32Array;
  count: number;
  speed: number;

  constructor(start: THREE.Vector3, end: THREE.Vector3, color: number, count = 10) {
    const mid = start.clone().lerp(end, 0.5);
    const a = new THREE.Vector3(start.x, 0.07, start.z);
    const b = new THREE.Vector3(end.x, 0.07, end.z);
    this.curve = new THREE.CatmullRomCurve3([a, new THREE.Vector3(mid.x, 0.07, mid.z), b]);
    this.count = count;
    this.speed = 0.5 / Math.max(2, a.distanceTo(b)) * 0.02;

    // trench line (dark) with a coloured glowing core
    const trace = new THREE.Mesh(
      new THREE.TubeGeometry(this.curve, 32, 0.035, 8, false),
      new THREE.MeshStandardMaterial({ color: 0x2b2f35, roughness: 0.8 }),
    );
    trace.receiveShadow = true;
    const core = new THREE.Mesh(
      new THREE.TubeGeometry(this.curve, 32, 0.014, 8, false),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.75 }),
    );
    core.position.y = 0.025;
    this.group.add(trace, core);

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

  place(i: number) {
    const p = this.curve.getPointAt(this.progress[i]);
    this.positions[i * 3] = p.x;
    this.positions[i * 3 + 1] = p.y + 0.06;
    this.positions[i * 3 + 2] = p.z;
  }

  update() {
    for (let i = 0; i < this.count; i++) {
      this.progress[i] = (this.progress[i] + this.speed) % 1;
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
        if (v && (v as THREE.Texture).isTexture && v !== glowTexture) (v as THREE.Texture).dispose();
      });
      m.dispose();
    });
  });
}

export function DigitalTwin3DView({ config, animate = true, onComponentMove }: Props) {
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
  const sunRef = useRef<THREE.DirectionalLight | null>(null);
  const treesRef = useRef<THREE.Group | null>(null);
  const frameRef = useRef<number>(0);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const draggedRef = useRef<{ id: string; model: THREE.Group; offset: THREE.Vector3 } | null>(null);
  const planeRef = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));
  const animateRef = useRef(animate);
  const onComponentMoveRef = useRef(onComponentMove);
  const fittedKeyRef = useRef<string | null>(null);
  
  // Keep refs in sync with props
  useEffect(() => {
    animateRef.current = animate;
  }, [animate]);
  
  useEffect(() => {
    onComponentMoveRef.current = onComponentMove;
  }, [onComponentMove]);

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

    // Physical daylight sky; its reflection doubles as the environment map
    const sunDir = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(55), THREE.MathUtils.degToRad(140));
    const sky = new Sky();
    sky.scale.setScalar(1000);
    const u = sky.material.uniforms;
    u.turbidity.value = 4;
    u.rayleigh.value = 1.2;
    u.mieCoefficient.value = 0.004;
    u.mieDirectionalG.value = 0.8;
    u.sunPosition.value.copy(sunDir);
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

    scene.add(new THREE.HemisphereLight(0xdfeaff, 0x5b6b45, 0.9));
    const sun = new THREE.DirectionalLight(0xfff2de, 2.6);
    sun.position.copy(sunDir).multiplyScalar(40);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.radius = 3;
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 120;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.02;
    scene.add(sun, sun.target);
    sunRef.current = sun;

    // Grass ground
    const groundTexture = grassTexture();
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(1500, 1500),
      new THREE.MeshStandardMaterial({ map: groundTexture, roughness: 1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    const trees = new THREE.Group();
    scene.add(trees);
    treesRef.current = trees;

    const labelsGroup = new THREE.Group();
    scene.add(labelsGroup);
    labelsRef.current = labelsGroup;

    const animateLoop = () => {
      frameRef.current = requestAnimationFrame(animateLoop);
      controls.update();
      
      if (animateRef.current) {
        flowsRef.current.forEach(f => f.update());
        rotatingPartsRef.current.forEach(part => {
          const { axis, speed } = part.userData.rotate as { axis: 'x' | 'y' | 'z'; speed: number };
          part.rotation[axis] += speed;
        });
      }
      
      renderer.render(scene, camera);
    };
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

    // Drag handlers
    const getMousePosition = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (!onComponentMoveRef.current) return;
      getMousePosition(e);
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      
      // Pick the nearest hit model (not the first one in insertion order)
      let best: { id: string; model: THREE.Group; distance: number } | null = null;
      for (const [id, model] of modelsRef.current.entries()) {
        const hit = raycasterRef.current.intersectObject(model, true)[0];
        if (hit && (!best || hit.distance < best.distance)) best = { id, model, distance: hit.distance };
      }
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
        // Hover effect
        if (onComponentMoveRef.current) {
          getMousePosition(e);
          raycasterRef.current.setFromCamera(mouseRef.current, camera);
          let hovering = false;
          for (const model of modelsRef.current.values()) {
            if (raycasterRef.current.intersectObject(model, true).length > 0) {
              hovering = true;
              break;
            }
          }
          renderer.domElement.style.cursor = hovering ? 'grab' : 'default';
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
      
      // Update label position
      const label = labelMapRef.current.get(draggedRef.current.id);
      if (label) {
        label.position.x = newPos.x;
        label.position.z = newPos.z;
      }
    };

    const onPointerUp = () => {
      if (draggedRef.current && onComponentMoveRef.current) {
        const { id, model } = draggedRef.current;
        // Convert back to 2D canvas coordinates
        const scale = 0.035;
        const offsetX = -5;
        const offsetZ = 8;
        const canvasX = (model.position.x - offsetX) / scale;
        const canvasY = (model.position.z - offsetZ) / scale;
        onComponentMoveRef.current(id, canvasX, canvasY);
      }
      draggedRef.current = null;
      controls.enabled = true;
      renderer.domElement.style.cursor = 'default';
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
      sun.dispose(); // frees the shadow-map render target
      modelsRef.current.clear();
      labelMapRef.current.clear();
      flowsRef.current = [];
      rotatingPartsRef.current = [];
      sunRef.current = null;
      treesRef.current = null;
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

  useEffect(() => {
    const scene = sceneRef.current;
    const labelsGroup = labelsRef.current;
    if (!scene || !labelsGroup) return;

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
    const trees = treesRef.current;
    if (trees) while (trees.children.length) { const t = trees.children[0]; trees.remove(t); disposeObject(t); }
    // A drag in progress refers to a model that no longer exists
    draggedRef.current = null;
    if (controlsRef.current) controlsRef.current.enabled = true;

    if (!config) return;
    const components: DTComponent[] = Array.isArray(config.components) ? config.components : [];
    const connections: DTConnection[] = Array.isArray(config.connections) ? config.connections : [];

    const scale = 0.035;
    const offsetX = -5;
    const offsetZ = 8;

    // Generator types for pulse animation
    const GENERATORS = new Set(['solar_pv', 'wind_turbine', 'chp_unit']);

    // Create models
    components.forEach((comp: DTComponent) => {
      const model = createComponentModel(comp.type, comp.params || {});
      const x = (Number(comp.x) || 0) * scale + offsetX;
      const z = (Number(comp.y) || 0) * scale + offsetZ;
      model.position.set(x, 0, z);
      
      scene.add(model);
      modelsRef.current.set(comp.id, model);

      // Find rotating parts
      model.traverse(child => {
        if (child.userData.rotate) {
          rotatingPartsRef.current.push(child);
        }
      });

      // Get model height for label
      const box = new THREE.Box3().setFromObject(model);
      const height = box.max.y;
      const label = createLabel(comp.name, comp.type, new THREE.Vector3(x, 0, z), Number.isFinite(height) ? height : 0);
      labelsGroup.add(label);
      labelMapRef.current.set(comp.id, label);
    });

    // Create connections with correct flow direction
    // Generators: energy flows OUT; Consumers: energy flows IN
    const CONSUMERS = new Set(['smart_building', 'ev_charger', 'load_center', 'heat_pump']);
    
    connections.forEach((conn: DTConnection) => {
      const fromComp = components.find((c: DTComponent) => c.id === conn.from);
      const toComp = components.find((c: DTComponent) => c.id === conn.to);
      const fromModel = modelsRef.current.get(conn.from);
      const toModel = modelsRef.current.get(conn.to);
      if (!fromModel || !toModel || !fromComp || !toComp) return;

      // Determine flow direction based on component roles
      let flowStart = fromModel.position.clone();
      let flowEnd = toModel.position.clone();
      
      // If 'from' is consumer and 'to' is generator, reverse flow
      // If 'from' is storage/grid and 'to' is generator, reverse flow
      const fromIsGenerator = GENERATORS.has(fromComp.type);
      const toIsGenerator = GENERATORS.has(toComp.type);
      const fromIsConsumer = CONSUMERS.has(fromComp.type);
      const toIsConsumer = CONSUMERS.has(toComp.type);
      
      if ((fromIsConsumer && !toIsConsumer) || (toIsGenerator && !fromIsGenerator)) {
        // Swap direction: flow should go from generator/source to consumer
        [flowStart, flowEnd] = [flowEnd, flowStart];
      }
      
      const flowColor = conn.type === 'heat' ? 0xff6a3d : conn.type === 'both' ? 0xc084fc : 0x38bdf8;
      const flow = new EnergyFlow(flowStart, flowEnd, flowColor);
      scene.add(flow.group);
      flowsRef.current.push(flow);
    });

    // Fit camera only when the set of components changes; re-fitting on every
    // config update (e.g. after a drag via onComponentMove) yanks the camera.
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
      const sun = sunRef.current;
      if (sun) {
        const dir = sun.position.clone().sub(sun.target.position).normalize();
        sun.target.position.set(c.x, 0, c.z);
        sun.position.copy(sun.target.position).addScaledVector(dir, 40);
        const cam = sun.shadow.camera;
        cam.left = cam.bottom = -r - 2;
        cam.right = cam.top = r + 2;
        cam.updateProjectionMatrix();
      }
      // Landscaping: irregular clumps of trees outside the site, leaving the
      // camera-facing side mostly open
      if (trees) {
        const hx = size.x / 2 + 1.6, hz = size.z / 2 + 1.6;
        const rand = (i: number) => { const v = Math.sin(i * 127.1 + 311.7) * 43758.5453; return v - Math.floor(v); };
        const clumps = 7 + Math.round(r);
        for (let k = 0; k < clumps; k++) {
          const a = rand(k) * Math.PI * 2;
          if (Math.cos(a - Math.PI / 4) > 0.75) continue; // keep the default view corridor clear
          const d = 1 + rand(k + 50) * 0.9;
          const cx = c.x + Math.cos(a) * hx * d * 1.15;
          const cz = c.z + Math.sin(a) * hz * d * 1.15;
          const n = 2 + Math.floor(rand(k + 90) * 4);
          for (let j = 0; j < n; j++) {
            const tree = createTree(k * 10 + j + 1);
            tree.position.set(cx + (rand(k * 7 + j) - 0.5) * 2.2, 0, cz + (rand(k * 13 + j) - 0.5) * 2.2);
            trees.add(tree);
          }
        }
      }
    }

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
  }, [config]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: 300 }} />;
}

export default DigitalTwin3DView;
