import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import type { DigitalTwinConfig, DTComponent, DTConnection, DTComponentType } from './DigitalTwinBuilder';

interface Props {
  config: DigitalTwinConfig | null;
  animate?: boolean;
  onComponentMove?: (componentId: string, x: number, y: number) => void;
}

// Create realistic 3D models for each component
function createComponentModel(type: DTComponentType, params: Record<string, any>): THREE.Group {
  const group = new THREE.Group();
  
  switch (type) {
    case 'solar_pv': {
      // Solar panel array - tilted blue panels with frame
      const panelCount = 3;
      for (let i = 0; i < panelCount; i++) {
        const panel = new THREE.Mesh(
          new THREE.BoxGeometry(1.2, 0.05, 0.8),
          new THREE.MeshStandardMaterial({ color: 0x1e3a5f, metalness: 0.8, roughness: 0.2 })
        );
        // Grid lines on panel
        const gridLines = new THREE.Mesh(
          new THREE.BoxGeometry(1.18, 0.06, 0.78),
          new THREE.MeshStandardMaterial({ color: 0x4a90d9, metalness: 0.5 })
        );
        panel.add(gridLines);
        panel.position.set(i * 1.4 - 1.4, 0.8, 0);
        panel.rotation.x = -Math.PI * 0.2;
        group.add(panel);
        
        // Support pole
        const pole = new THREE.Mesh(
          new THREE.CylinderGeometry(0.03, 0.03, 0.7, 8),
          new THREE.MeshStandardMaterial({ color: 0x888888 })
        );
        pole.position.set(i * 1.4 - 1.4, 0.35, 0.2);
        group.add(pole);
      }
      break;
    }
    
    case 'smart_building': {
      // Modern building with windows
      const floors = params.floors || 5;
      const height = floors * 0.6;
      const building = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, height, 1.5),
        new THREE.MeshStandardMaterial({ color: 0x4a5568 })
      );
      building.position.y = height / 2;
      group.add(building);
      
      // Windows - 4 per floor
      for (let f = 0; f < floors; f++) {
        for (let w = 0; w < 4; w++) {
          const window = new THREE.Mesh(
            new THREE.BoxGeometry(0.35, 0.3, 0.02),
            new THREE.MeshStandardMaterial({ color: 0x87ceeb, emissive: 0x2244aa, emissiveIntensity: 0.3 })
          );
          window.position.set(w * 0.55 - 0.825, f * 0.6 + 0.4, 0.76);
          group.add(window);
        }
      }
      
      // Roof
      const roof = new THREE.Mesh(
        new THREE.BoxGeometry(2.5, 0.1, 1.6),
        new THREE.MeshStandardMaterial({ color: 0x2d3748 })
      );
      roof.position.y = height + 0.05;
      group.add(roof);
      break;
    }
    
    case 'battery_storage': {
      // Battery container/cabinet
      const cabinet = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 1.5, 0.8),
        new THREE.MeshStandardMaterial({ color: 0x22c55e })
      );
      cabinet.position.y = 0.75;
      group.add(cabinet);
      
      // Battery cells indicator
      for (let i = 0; i < 3; i++) {
        const cell = new THREE.Mesh(
          new THREE.BoxGeometry(0.3, 0.2, 0.02),
          new THREE.MeshStandardMaterial({ color: 0x166534, emissive: 0x00ff00, emissiveIntensity: 0.2 })
        );
        cell.position.set(0, 0.5 + i * 0.35, 0.41);
        group.add(cell);
      }
      
      // Lightning bolt symbol
      const bolt = new THREE.Mesh(
        new THREE.ConeGeometry(0.15, 0.4, 4),
        new THREE.MeshStandardMaterial({ color: 0xfbbf24 })
      );
      bolt.position.set(0, 1.3, 0.41);
      bolt.rotation.z = Math.PI;
      group.add(bolt);
      break;
    }
    
    case 'wind_turbine': {
      // Tower
      const tower = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.25, 4, 8),
        new THREE.MeshStandardMaterial({ color: 0xf5f5f5 })
      );
      tower.position.y = 2;
      group.add(tower);
      
      // Nacelle (hub housing)
      const nacelle = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.4, 0.4),
        new THREE.MeshStandardMaterial({ color: 0xe5e5e5 })
      );
      nacelle.position.set(0, 4.1, 0);
      group.add(nacelle);
      
      // Hub
      const hub = new THREE.Mesh(
        new THREE.ConeGeometry(0.15, 0.3, 16),
        new THREE.MeshStandardMaterial({ color: 0xcccccc })
      );
      hub.position.set(0, 4.1, 0.35);
      hub.rotation.x = Math.PI / 2;
      group.add(hub);
      
      // Blades
      const bladeGroup = new THREE.Group();
      for (let i = 0; i < 3; i++) {
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.15, 1.8, 0.05),
          new THREE.MeshStandardMaterial({ color: 0xffffff })
        );
        blade.position.y = 0.9;
        const bladeHolder = new THREE.Group();
        bladeHolder.add(blade);
        bladeHolder.rotation.z = (i * Math.PI * 2) / 3;
        bladeGroup.add(bladeHolder);
      }
      bladeGroup.position.set(0, 4.1, 0.5);
      bladeGroup.userData.isRotating = true;
      group.add(bladeGroup);
      break;
    }
    
    case 'district_heating': {
      // Heat exchanger station
      const station = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 1, 1),
        new THREE.MeshStandardMaterial({ color: 0xdc2626 })
      );
      station.position.y = 0.5;
      group.add(station);
      
      // Pipes
      const pipe1 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 1.2, 16),
        new THREE.MeshStandardMaterial({ color: 0xef4444 })
      );
      pipe1.rotation.z = Math.PI / 2;
      pipe1.position.set(0, 0.8, 0.6);
      group.add(pipe1);
      
      const pipe2 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 1.2, 16),
        new THREE.MeshStandardMaterial({ color: 0x3b82f6 })
      );
      pipe2.rotation.z = Math.PI / 2;
      pipe2.position.set(0, 0.5, 0.6);
      group.add(pipe2);
      
      // Heat waves indicator
      const wave = new THREE.Mesh(
        new THREE.TorusGeometry(0.2, 0.03, 8, 16, Math.PI),
        new THREE.MeshStandardMaterial({ color: 0xff6b6b, emissive: 0xff0000, emissiveIntensity: 0.5 })
      );
      wave.position.set(0, 1.2, 0);
      wave.rotation.x = Math.PI / 2;
      group.add(wave);
      break;
    }
    
    case 'smart_grid': {
      // Electrical transformer/substation
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(1, 0.3, 0.8),
        new THREE.MeshStandardMaterial({ color: 0x374151 })
      );
      base.position.y = 0.15;
      group.add(base);
      
      // Transformer box
      const transformer = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.8, 0.5),
        new THREE.MeshStandardMaterial({ color: 0x6b7280 })
      );
      transformer.position.y = 0.7;
      group.add(transformer);
      
      // Insulators
      for (let i = 0; i < 3; i++) {
        const insulator = new THREE.Mesh(
          new THREE.CylinderGeometry(0.05, 0.08, 0.4, 8),
          new THREE.MeshStandardMaterial({ color: 0x8b5cf6 })
        );
        insulator.position.set(i * 0.25 - 0.25, 1.3, 0);
        group.add(insulator);
      }
      
      // Power lines
      for (let i = 0; i < 3; i++) {
        const wire = new THREE.Mesh(
          new THREE.CylinderGeometry(0.01, 0.01, 0.8, 8),
          new THREE.MeshStandardMaterial({ color: 0x111111 })
        );
        wire.rotation.z = Math.PI / 2;
        wire.position.set(0.4, 1.5, i * 0.15 - 0.15);
        group.add(wire);
      }
      break;
    }
    
    case 'ev_charger': {
      // Charging station pillar
      const pillar = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 1.4, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x1e40af })
      );
      pillar.position.y = 0.7;
      group.add(pillar);
      
      // Screen
      const screen = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.2, 0.02),
        new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x00ff00, emissiveIntensity: 0.3 })
      );
      screen.position.set(0, 1.1, 0.11);
      group.add(screen);
      
      // Charging cable
      const cable = new THREE.Mesh(
        new THREE.TorusGeometry(0.15, 0.02, 8, 16, Math.PI),
        new THREE.MeshStandardMaterial({ color: 0x111111 })
      );
      cable.position.set(0.2, 0.5, 0.15);
      cable.rotation.y = Math.PI / 2;
      group.add(cable);
      
      // Car silhouette
      const car = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.3, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.6 })
      );
      car.position.set(0.8, 0.15, 0);
      group.add(car);
      break;
    }
    
    case 'heat_pump': {
      // Outdoor unit
      const unit = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.9, 0.5),
        new THREE.MeshStandardMaterial({ color: 0xf5f5f5 })
      );
      unit.position.y = 0.45;
      group.add(unit);
      
      // Fan grille
      const grille = new THREE.Mesh(
        new THREE.CircleGeometry(0.3, 32),
        new THREE.MeshStandardMaterial({ color: 0x333333 })
      );
      grille.position.set(0, 0.5, 0.26);
      group.add(grille);
      
      // Fan blades
      const fanGroup = new THREE.Group();
      for (let i = 0; i < 4; i++) {
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.25, 0.05, 0.02),
          new THREE.MeshStandardMaterial({ color: 0x666666 })
        );
        blade.rotation.z = (i * Math.PI) / 2;
        fanGroup.add(blade);
      }
      fanGroup.position.set(0, 0.5, 0.27);
      fanGroup.userData.isRotating = true;
      group.add(fanGroup);
      
      // Pipes
      const hotPipe = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 0.5, 8),
        new THREE.MeshStandardMaterial({ color: 0xef4444 })
      );
      hotPipe.position.set(-0.4, 0.7, -0.3);
      group.add(hotPipe);
      break;
    }
    
    case 'chp_unit': {
      // CHP engine housing
      const housing = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 1.2, 1),
        new THREE.MeshStandardMaterial({ color: 0xf97316 })
      );
      housing.position.y = 0.6;
      group.add(housing);
      
      // Exhaust stack
      const stack = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.12, 0.8, 16),
        new THREE.MeshStandardMaterial({ color: 0x666666 })
      );
      stack.position.set(0.5, 1.6, 0);
      group.add(stack);
      
      // Control panel
      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 0.3, 0.05),
        new THREE.MeshStandardMaterial({ color: 0x1f2937, emissive: 0x22c55e, emissiveIntensity: 0.2 })
      );
      panel.position.set(-0.4, 0.8, 0.53);
      group.add(panel);
      break;
    }
    
    case 'thermal_storage': {
      // Hot water tank
      const tank = new THREE.Mesh(
        new THREE.CylinderGeometry(0.6, 0.6, 1.8, 24),
        new THREE.MeshStandardMaterial({ color: 0xec4899 })
      );
      tank.position.y = 0.9;
      group.add(tank);
      
      // Insulation bands
      for (let i = 0; i < 3; i++) {
        const band = new THREE.Mesh(
          new THREE.TorusGeometry(0.62, 0.03, 8, 32),
          new THREE.MeshStandardMaterial({ color: 0xbe185d })
        );
        band.position.y = 0.4 + i * 0.5;
        band.rotation.x = Math.PI / 2;
        group.add(band);
      }
      
      // Temperature gauge
      const gauge = new THREE.Mesh(
        new THREE.CircleGeometry(0.1, 16),
        new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xff4444, emissiveIntensity: 0.5 })
      );
      gauge.position.set(0, 1.2, 0.61);
      group.add(gauge);
      break;
    }
    
    case 'load_center': {
      // Electrical panel
      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 1.2, 0.2),
        new THREE.MeshStandardMaterial({ color: 0x4b5563 })
      );
      panel.position.y = 0.6;
      group.add(panel);
      
      // Breakers
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 2; col++) {
          const breaker = new THREE.Mesh(
            new THREE.BoxGeometry(0.15, 0.2, 0.05),
            new THREE.MeshStandardMaterial({ color: 0x111111 })
          );
          breaker.position.set(col * 0.25 - 0.12, 0.3 + row * 0.3, 0.12);
          group.add(breaker);
        }
      }
      
      // Status light
      const light = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x00ff00, emissiveIntensity: 0.8 })
      );
      light.position.set(0.25, 1.0, 0.12);
      group.add(light);
      break;
    }
  }
  
  return group;
}

// Create text sprite for labels
function createLabel(text: string, position: THREE.Vector3, yOffset: number): THREE.Sprite {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  canvas.width = 256;
  canvas.height = 64;
  
  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  ctx.beginPath();
  ctx.roundRect(4, 4, canvas.width - 8, canvas.height - 8, 8);
  ctx.fill();
  
  ctx.font = 'bold 22px Arial';
  ctx.fillStyle = '#e2e8f0';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text.substring(0, 20), canvas.width / 2, canvas.height / 2);
  
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.position.copy(position);
  sprite.position.y = yOffset + 0.3;
  sprite.scale.set(1.8, 0.45, 1);
  return sprite;
}

// Energy flow particle system
class EnergyFlowParticles {
  particles: THREE.Points;
  positions: Float32Array;
  progress: Float32Array;
  startPos: THREE.Vector3;
  endPos: THREE.Vector3;
  count: number;
  speed: number;

  constructor(start: THREE.Vector3, end: THREE.Vector3, color: number, count = 20) {
    this.startPos = start.clone();
    this.endPos = end.clone();
    this.count = count;
    this.speed = 0.015;
    
    this.positions = new Float32Array(count * 3);
    this.progress = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      this.progress[i] = i / count;
      this.updateParticlePosition(i);
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    
    const material = new THREE.PointsMaterial({
      color: color,
      size: 0.15,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    this.particles = new THREE.Points(geometry, material);
  }

  updateParticlePosition(i: number) {
    const t = this.progress[i];
    this.positions[i * 3] = this.startPos.x + (this.endPos.x - this.startPos.x) * t;
    this.positions[i * 3 + 1] = this.startPos.y + (this.endPos.y - this.startPos.y) * t + Math.sin(t * Math.PI) * 0.25;
    this.positions[i * 3 + 2] = this.startPos.z + (this.endPos.z - this.startPos.z) * t;
  }

  update() {
    for (let i = 0; i < this.count; i++) {
      this.progress[i] += this.speed;
      if (this.progress[i] > 1) this.progress[i] = 0;
      this.updateParticlePosition(i);
    }
    this.particles.geometry.attributes.position.needsUpdate = true;
  }
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
  const flowParticlesRef = useRef<EnergyFlowParticles[]>([]);
  const rotatingPartsRef = useRef<THREE.Object3D[]>([]);
  const frameRef = useRef<number>(0);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const draggedRef = useRef<{ id: string; model: THREE.Group; offset: THREE.Vector3 } | null>(null);
  const planeRef = useRef(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0));
  const animateRef = useRef(animate);
  const onComponentMoveRef = useRef(onComponentMove);
  
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
    scene.background = new THREE.Color(0x0a1628);
    sceneRef.current = scene;

    const w = container.clientWidth || 600;
    const h = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 500);
    camera.position.set(5, 4, 5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enablePan = true;
    controls.screenSpacePanning = true;
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

    // Lighting with shadows
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(15, 25, 15);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 100;
    sun.shadow.camera.left = -20;
    sun.shadow.camera.right = 20;
    sun.shadow.camera.top = 20;
    sun.shadow.camera.bottom = -20;
    scene.add(sun);
    
    const fill = new THREE.DirectionalLight(0x4488ff, 0.3);
    fill.position.set(-10, 5, -10);
    scene.add(fill);

    // Improved ground with gradient
    const groundCanvas = document.createElement('canvas');
    groundCanvas.width = 512;
    groundCanvas.height = 512;
    const gctx = groundCanvas.getContext('2d')!;
    const gradient = gctx.createRadialGradient(256, 256, 0, 256, 256, 360);
    gradient.addColorStop(0, '#1e293b');
    gradient.addColorStop(1, '#0f172a');
    gctx.fillStyle = gradient;
    gctx.fillRect(0, 0, 512, 512);
    const groundTexture = new THREE.CanvasTexture(groundCanvas);
    
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(60, 60),
      new THREE.MeshStandardMaterial({ map: groundTexture, roughness: 0.9 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    const grid = new THREE.GridHelper(60, 30, 0x3b82f6, 0x1e3a5f);
    grid.position.y = 0.01;
    scene.add(grid);

    // Skybox gradient
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 2;
    skyCanvas.height = 512;
    const sctx = skyCanvas.getContext('2d')!;
    const skyGrad = sctx.createLinearGradient(0, 0, 0, 512);
    skyGrad.addColorStop(0, '#0f172a');
    skyGrad.addColorStop(0.5, '#1e293b');
    skyGrad.addColorStop(1, '#334155');
    sctx.fillStyle = skyGrad;
    sctx.fillRect(0, 0, 2, 512);
    const skyTexture = new THREE.CanvasTexture(skyCanvas);
    scene.background = skyTexture;

    const labelsGroup = new THREE.Group();
    scene.add(labelsGroup);
    labelsRef.current = labelsGroup;

    const animateLoop = () => {
      frameRef.current = requestAnimationFrame(animateLoop);
      controls.update();
      
      if (animateRef.current) {
        flowParticlesRef.current.forEach(fp => fp.update());
        rotatingPartsRef.current.forEach(part => {
          part.rotation.z += 0.02;
        });
        
        // Pulse active generators
        const time = Date.now() * 0.003;
        modelsRef.current.forEach(model => {
          if (model.userData.isGenerator) {
            const pulse = 1 + Math.sin(time) * 0.03;
            model.scale.set(pulse, pulse, pulse);
          }
        });
      }
      
      renderer.render(scene, camera);
    };
    animateLoop();

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

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
      
      const models = Array.from(modelsRef.current.entries());
      for (const [id, model] of models) {
        const intersects = raycasterRef.current.intersectObject(model, true);
        if (intersects.length > 0) {
          controls.enabled = false;
          const point = new THREE.Vector3();
          raycasterRef.current.ray.intersectPlane(planeRef.current, point);
          draggedRef.current = {
            id,
            model,
            offset: model.position.clone().sub(point)
          };
          renderer.domElement.style.cursor = 'grabbing';
          break;
        }
      }
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
      raycasterRef.current.ray.intersectPlane(planeRef.current, point);
      
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
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      renderer.domElement.removeEventListener('pointerleave', onPointerUp);
      cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []); // animate and onComponentMove handled via refs

  useEffect(() => {
    const scene = sceneRef.current;
    const labelsGroup = labelsRef.current;
    if (!scene || !labelsGroup) return;

    // Clear existing
    modelsRef.current.forEach(model => scene.remove(model));
    modelsRef.current.clear();
    while (labelsGroup.children.length) labelsGroup.remove(labelsGroup.children[0]);
    flowParticlesRef.current.forEach(fp => scene.remove(fp.particles));
    flowParticlesRef.current = [];
    rotatingPartsRef.current = [];

    if (!config) return;

    const scale = 0.035;
    const offsetX = -5;
    const offsetZ = 8;

    // Generator types for pulse animation
    const GENERATORS = new Set(['solar_pv', 'wind_turbine', 'chp_unit']);

    // Create models
    config.components.forEach((comp: DTComponent) => {
      const model = createComponentModel(comp.type, comp.params);
      const x = comp.x * scale + offsetX;
      const z = comp.y * scale + offsetZ;
      model.position.set(x, 0, z);
      
      // Enable shadows on all meshes
      model.traverse(child => {
        if ((child as THREE.Mesh).isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      // Mark generators for pulse animation
      model.userData.isGenerator = GENERATORS.has(comp.type);
      
      scene.add(model);
      modelsRef.current.set(comp.id, model);

      // Find rotating parts
      model.traverse(child => {
        if (child.userData.isRotating) {
          rotatingPartsRef.current.push(child);
        }
      });

      // Get model height for label
      const box = new THREE.Box3().setFromObject(model);
      const height = box.max.y;
      const label = createLabel(comp.name, new THREE.Vector3(x, 0, z), height);
      labelsGroup.add(label);
    });

    // Create connections with correct flow direction
    // Generators: energy flows OUT; Consumers: energy flows IN
    const CONSUMERS = new Set(['smart_building', 'ev_charger', 'load_center', 'heat_pump']);
    
    config.connections.forEach((conn: DTConnection) => {
      const fromComp = config.components.find((c: DTComponent) => c.id === conn.from);
      const toComp = config.components.find((c: DTComponent) => c.id === conn.to);
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
      
      flowStart.y = 0.5;
      flowEnd.y = 0.5;

      const flowColor = conn.type === 'heat' ? 0xef4444 : conn.type === 'both' ? 0xa855f7 : 0x3b82f6;

      // Particles flow in correct direction
      const particles = new EnergyFlowParticles(flowStart, flowEnd, flowColor, 18);
      scene.add(particles.particles);
      flowParticlesRef.current.push(particles);
    });

    // Fit camera
    if (config.components.length > 0) {
      const box = new THREE.Box3();
      modelsRef.current.forEach(m => box.expandByObject(m));
      const center = new THREE.Vector3();
      const size = new THREE.Vector3();
      box.getCenter(center);
      box.getSize(size);
      controlsRef.current?.target.copy(center);
      const dist = Math.max(size.x, size.z) * 2;
      cameraRef.current?.position.set(center.x + dist, dist * 0.7, center.z + dist);
      controlsRef.current?.update();
    }
  }, [config]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%', minHeight: 300 }} />;
}

export default DigitalTwin3DView;
