import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TubeGeometry } from 'three';

interface EnergyFlow {
  pvToLoad?: number; // MW
  pvToBattery?: number; // MW
  pvExport?: number; // MW
  batteryToLoad?: number; // MW
  gridImport?: number; // MW
}

interface ThreeSceneProps {
  navValue?: number | null;
  reduceMotion?: boolean;
  energyFlow?: EnergyFlow | null;
  batterySoC?: number | null; // 0-1 (state of charge)
}

export function ThreeScene({ navValue, reduceMotion, energyFlow, batterySoC }: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cubeRef = useRef<THREE.Mesh>();
  const buildingRef = useRef<THREE.Group>();
  const frameRef = useRef<number>();
  const flowArrowsRef = useRef<THREE.Group>();
  const batteryGroupRef = useRef<THREE.Group>();
  const nodeIconsRef = useRef<THREE.Group>();
  const shaderMaterialsRef = useRef<THREE.ShaderMaterial[]>([]);
  const particleSystemsRef = useRef<THREE.Points[]>([]);
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);

    const width = container.clientWidth || container.offsetWidth || 640;
    const height = container.clientHeight || container.offsetHeight || 360;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    // Start closer (approx. level 4/10 zoom compared to previous)
    camera.position.set(5, 6, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // Interactive camera controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.screenSpacePanning = true; // pan along camera plane (intuitive up/down)
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.6;
    controls.zoomSpeed = 0.9;
    controls.panSpeed = 0.8;
    controls.minDistance = 2.5;
    controls.maxDistance = 120;
    controls.update();

    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 1.2);
    directional.position.set(15, 25, 20);
    scene.add(directional);

    const placeholderGeometry = new THREE.BoxGeometry(1, 1, 1);
    const placeholderMaterial = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.35 });
    const cube = new THREE.Mesh(placeholderGeometry, placeholderMaterial);
    cube.castShadow = true;
    // DEBUG: keep cube visible so something renders even if model fails to load
    cube.visible = true;
    scene.add(cube);
    cubeRef.current = cube;

    // Axes helper for orientation
    const axes = new THREE.AxesHelper(2);
    scene.add(axes);

    // ALWAYS-VISIBLE FALLBACK: big tower so the viewer is never empty
    const towerGeo = new THREE.BoxGeometry(6, 12, 2);
    const towerMat = new THREE.MeshStandardMaterial({ color: 0x9ca3af });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.y = 6; // stand on the grid
    scene.add(tower);

    // Load simplified building model generated into /public/assets/building.glb
    try {
      const loader = new GLTFLoader();
      console.log('[Viewer] Loading /assets/building.glb ...');
      loader.load(
        '/assets/building.glb',
        (gltf) => {
          console.log('[Viewer] GLB loaded');
          const model = gltf.scene;
          model.rotation.y = Math.PI / 4;
          model.position.set(0, 0, 0);
          const scale = 0.02;
          model.scale.setScalar(scale);
          cube.visible = false;
          buildingRef.current = model;
          scene.add(model);
          // Remove fallback tower once model is in
          scene.remove(tower);
          towerGeo.dispose();
          towerMat.dispose();
          // Frame the model tighter so initial view appears larger
          try {
            const box = new THREE.Box3().setFromObject(model);
            const size = new THREE.Vector3();
            const center = new THREE.Vector3();
            box.getSize(size); box.getCenter(center);
            model.position.sub(center);
            controls.target.set(0, 0, 0);
            const maxSize = Math.max(size.x, size.y, size.z) || 1;
            const fitHeightDistance = maxSize / (2 * Math.tan((Math.PI * camera.fov) / 360));
            const fitWidthDistance = fitHeightDistance / camera.aspect;
            const distance = 0.55 * Math.max(fitHeightDistance, fitWidthDistance); // tighter than default
            const dir = new THREE.Vector3(1, 1, 1).normalize();
            camera.position.copy(dir.multiplyScalar(distance));
            camera.near = distance / 100;
            camera.far = distance * 100;
            camera.updateProjectionMatrix();
            controls.update();
          } catch {}
        },
        (ev) => {
          // Progress callback (optional)
        },
        (err) => {
          console.warn('[Viewer] Failed to load GLB:', err);
          cube.visible = true;
        },
      );
    } catch (e) {
      console.warn('[Viewer] GLTFLoader error:', e);
      cube.visible = true;
    }

    const grid = new THREE.GridHelper(100, 40, 0x1f2937, 0x1f2937);
    scene.add(grid);

    // Energy flow arrows group
    const flowArrows = new THREE.Group();
    scene.add(flowArrows);
    flowArrowsRef.current = flowArrows;

    // Battery visualization group
    const batteryGroup = new THREE.Group();
    scene.add(batteryGroup);
    batteryGroupRef.current = batteryGroup;

    // Node icons group
    const nodeIconsGroup = new THREE.Group();
    scene.add(nodeIconsGroup);
    if (nodeIconsRef.current === undefined) {
      nodeIconsRef.current = nodeIconsGroup;
    }
    
    // Initialize shader materials array if not exists
    if (!shaderMaterialsRef.current || shaderMaterialsRef.current.length === 0) {
      shaderMaterialsRef.current = [];
    }
    
    // Initialize particle systems array if not exists
    if (!particleSystemsRef.current || particleSystemsRef.current.length === 0) {
      particleSystemsRef.current = [];
    }
    
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now();
    }

    // Create flowing texture shader material
    const createFlowMaterial = (color: THREE.Color, speed: number = 1.0) => {
      return new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: color },
          speed: { value: speed },
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPosition;
          void main() {
            vUv = uv;
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color;
          uniform float speed;
          varying vec2 vUv;
          varying vec3 vPosition;
          
          void main() {
            // Create flowing stripes
            float stripe = sin((vUv.y * 10.0) - (time * speed * 2.0)) * 0.5 + 0.5;
            float glow = sin((vUv.y * 20.0) - (time * speed * 3.0)) * 0.3 + 0.7;
            
            // Combine colors with flow effect
            vec3 finalColor = color * (0.6 + stripe * 0.4) * glow;
            float alpha = 0.7 + stripe * 0.3;
            
            gl_FragColor = vec4(finalColor, alpha);
          }
        `,
        transparent: true,
        side: THREE.DoubleSide,
      });
    };

    // Create pulse material for nodes
    const createPulseMaterial = (baseColor: THREE.Color) => {
      return new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: baseColor },
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color;
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            float pulse = sin(time * 2.0) * 0.3 + 0.7;
            float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            vec3 finalColor = color * (pulse + fresnel * 0.5);
            gl_FragColor = vec4(finalColor, 0.9 + fresnel * 0.1);
          }
        `,
        transparent: true,
      });
    };

    // Expose functions to window for use in other useEffects
    (window as any).createFlowMaterial = createFlowMaterial;
    (window as any).createPulseMaterial = createPulseMaterial;

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      // Smooth camera controls and keep axes at the current target
      controls.update();
      axes.position.copy(controls.target);
      if (!reduceMotion) {
        if (buildingRef.current) {
          buildingRef.current.rotation.y += 0.0025;
        } else if (cubeRef.current) {
          cubeRef.current.rotation.x += 0.005;
          cubeRef.current.rotation.y += 0.01;
        }
        // Update shader materials time
        const elapsed = (Date.now() - startTimeRef.current) / 1000;
        shaderMaterialsRef.current.forEach((mat) => {
          if (mat.uniforms && mat.uniforms.time) {
            mat.uniforms.time.value = elapsed;
          }
        });
        
        // Animate particle systems - particles flow along curves INSIDE the tubes
        particleSystemsRef.current.forEach((particles) => {
          if (particles.geometry instanceof THREE.BufferGeometry) {
            const geo = particles.geometry as any;
            const curve = geo.curve;
            const tubeRadius = geo.tubeRadius || 0.1;
            const particleSpeeds = geo.particleSpeeds || [];
            
            if (!curve) return;
            
            const positions = particles.geometry.attributes.position;
            if (positions && positions.array) {
              const array = positions.array as Float32Array;
              const count = array.length / 3;
              
              // Move particles along the curve path - inside the tube
              for (let i = 0; i < count; i++) {
                const offset = i * 3;
                // Animate along the curve with phase offset for each particle
                const baseSpeed = 0.5; // Base flow speed
                const t = ((elapsed * baseSpeed + particleSpeeds[i]) % 1.0);
                
                // Get position along curve
                const point = curve.getPoint(t);
                const tangent = curve.getTangent(t);
                
                // Calculate binormal for circular motion inside tube
                const normal = new THREE.Vector3(0, 1, 0);
                let binormal = new THREE.Vector3().crossVectors(tangent, normal);
                if (binormal.length() < 0.1) {
                  binormal = new THREE.Vector3(1, 0, 0);
                }
                binormal.normalize();
                
                // Position particle slightly inside tube, rotating around center
                const angle = elapsed * 2.0 + i * 0.5; // Rotating angle
                const offsetRadius = tubeRadius * 0.5; // Stay well inside the tube (50% of radius)
                const radialOffset = new THREE.Vector3()
                  .addVectors(
                    binormal.clone().multiplyScalar(Math.cos(angle) * offsetRadius),
                    normal.clone().multiplyScalar(Math.sin(angle) * offsetRadius)
                  );
                
                const finalPosition = point.clone().add(radialOffset);
                array[offset] = finalPosition.x;
                array[offset + 1] = finalPosition.y;
                array[offset + 2] = finalPosition.z;
              }
              positions.needsUpdate = true;
            }
          }
        });
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth || container.offsetWidth || width;
      const h = container.clientHeight || container.offsetHeight || height;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      renderer.dispose();
      placeholderGeometry.dispose();
      placeholderMaterial.dispose();
      if (buildingRef.current) {
        scene.remove(buildingRef.current);
      }
      if (flowArrowsRef.current) {
        flowArrowsRef.current.clear();
      }
      if (batteryGroupRef.current) {
        batteryGroupRef.current.clear();
      }
      if (nodeIconsRef.current) {
        nodeIconsRef.current.clear();
      }
      // Clean up shader materials
      shaderMaterialsRef.current.forEach(mat => mat.dispose());
      particleSystemsRef.current.forEach(ps => {
        if (ps.geometry) ps.geometry.dispose();
        if (ps.material) {
          if (Array.isArray(ps.material)) {
            ps.material.forEach(m => m.dispose());
          } else {
            ps.material.dispose();
          }
        }
      });
      container.removeChild(renderer.domElement);
      // Clean up window references
      delete (window as any).createFlowMaterial;
      delete (window as any).createPulseMaterial;
    };
  }, [reduceMotion]);

  // Update energy flow arrows with advanced pipeline
  useEffect(() => {
    if (!flowArrowsRef.current || !nodeIconsRef.current || !shaderMaterialsRef.current) return;
    
    const flowArrows = flowArrowsRef.current;
    const nodeIcons = nodeIconsRef.current;
    // Wait a bit for the functions to be available on window
    const createFlowMaterial = (window as any).createFlowMaterial;
    const createPulseMaterial = (window as any).createPulseMaterial;
    
    if (!createFlowMaterial || !createPulseMaterial) {
      console.warn('[3D Flow] Shader materials not available, retrying...');
      // Retry after a short delay if functions aren't ready yet
      const timeout = setTimeout(() => {
        if ((window as any).createFlowMaterial && (window as any).createPulseMaterial) {
          // Trigger a re-render by forcing update
          console.log('[3D Flow] Functions now available');
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
    
    // Create 3D node icons
    const createNodeIcon = (type: 'pv' | 'battery' | 'grid' | 'load', position: THREE.Vector3, active: boolean = false) => {
      const group = new THREE.Group();
      group.position.copy(position);

      let iconColor: THREE.Color;
      let iconGeo: THREE.BufferGeometry;
      let iconSize = 0.8; // Simplified, cleaner size

      switch (type) {
        case 'pv':
          // Solar panel icon - flat rectangle
          iconGeo = new THREE.BoxGeometry(iconSize * 1.5, iconSize * 0.2, iconSize);
          iconColor = new THREE.Color(0x22c55e); // green
          break;
        case 'battery':
          // Battery icon - box with terminals
          iconGeo = new THREE.BoxGeometry(iconSize * 0.8, iconSize, iconSize * 0.5);
          iconColor = new THREE.Color(0xf59e0b); // orange
          break;
        case 'grid':
          // Grid icon - octagon
          iconGeo = new THREE.OctahedronGeometry(iconSize);
          iconColor = new THREE.Color(0x3b82f6); // blue
          break;
        case 'load':
          // Building icon - tall box
          iconGeo = new THREE.BoxGeometry(iconSize, iconSize * 1.5, iconSize);
          iconColor = new THREE.Color(0xa78bfa); // purple
          break;
      }

      const iconMat = active 
        ? createPulseMaterial(iconColor)
        : new THREE.MeshStandardMaterial({
            color: iconColor,
            emissive: iconColor,
            emissiveIntensity: active ? 0.5 : 0.2,
            metalness: 0.3,
            roughness: 0.7,
          });

      if (active && iconMat instanceof THREE.ShaderMaterial) {
        shaderMaterialsRef.current.push(iconMat);
      }

      const icon = new THREE.Mesh(iconGeo, iconMat);
      group.add(icon);

      // Add glow effect when active
      if (active) {
        const glowGeo = iconGeo.clone();
        const glowMat = new THREE.MeshBasicMaterial({
          color: iconColor,
          transparent: true,
          opacity: 0.3,
          side: THREE.BackSide,
        });
        const glow = new THREE.Mesh(glowGeo, glowMat);
        glow.scale.multiplyScalar(1.5);
        group.add(glow);
      }

      return group;
    };
    
    // Clear previous flows and reset materials
    const oldMaterials = [...shaderMaterialsRef.current];
    oldMaterials.forEach(mat => mat.dispose());
    shaderMaterialsRef.current = [];
    particleSystemsRef.current = [];
    flowArrows.clear();
    nodeIcons.clear();

    // 5th Generation District Heating Network Layout - Clean and logical
    // Horizontal dual-pipe network UNDERGROUND (below buildings)
    const networkY = -0.8; // Network below ground level
    const networkZ = -1.5; // Network UNDERGROUND (negative Z, below building)
    const networkLength = 8; // Reasonable network length
    const networkStartX = -4;
    const networkEndX = 4;
    
    // Dual pipes: supply (red) and return (blue) - smaller, reasonable size
    const pipeRadius = 0.06; // Smaller, more reasonable pipe radius
    
    // Building (load) is at center
    const buildingPos = new THREE.Vector3(0, 0, 0);
    const loadPos = new THREE.Vector3(0, 1, 0); // Building center at Y=1
    
    // Heat pump - positioned directly below building, underground
    const heatPumpPos = new THREE.Vector3(0, -0.5, -1.2); // Directly below building center
    
    // Building connection point - at building foundation, underground
    const buildingToHeatPumpPos = new THREE.Vector3(0, -0.3, -0.6); // Foundation level, underground
    
    // Network connection point - where heat pump connects to main network
    const networkConnectionPos = new THREE.Vector3(0, networkY, networkZ);
    
    // PV: Rooftop solar on building
    const pvPos = new THREE.Vector3(0, 2, 0); // On building roof
    
    // Battery: Near building, ground level
    const batteryPos = new THREE.Vector3(-2, 0.4, 0);
    
    // Grid: Simplified substation, right side
    const gridPos = new THREE.Vector3(3, 0.6, 0);
    const gridConnectionPos = new THREE.Vector3(1.5, 0.3, -0.4); // Underground connection

    // Always create node icons (even without flow data) for better visibility
    if (!energyFlow) {
      // Show default node icons without active state
      nodeIcons.add(createNodeIcon('pv', pvPos, false));
      nodeIcons.add(createNodeIcon('battery', batteryPos, false));
      nodeIcons.add(createNodeIcon('grid', gridPos, false));
      nodeIcons.add(createNodeIcon('load', loadPos, false));
      console.log('[3D Flow] No energy flow data - showing default nodes. Run optimization first.');
      return;
    }

    console.log('[3D Flow] Energy flow data:', energyFlow);

    const createFlowPipeline = (
      from: THREE.Vector3,
      to: THREE.Vector3,
      color: THREE.Color,
      intensity: number,
      speed: number = 1.0
    ) => {
      if (!createFlowMaterial) {
        console.error('[3D Flow] createFlowMaterial not available in createFlowPipeline');
        return null;
      }
      if (intensity < 0.01) return null;

      const direction = new THREE.Vector3().subVectors(to, from);
      const length = direction.length();
      if (length < 0.1) return null;

      const group = new THREE.Group();

      // Create curved path for the pipeline (subtle arc, not too high)
      const midPoint = new THREE.Vector3().addVectors(from, to).multiplyScalar(0.5);
      const up = new THREE.Vector3(0, 1, 0);
      const dirNormalized = direction.clone().normalize();
      const perpendicular = new THREE.Vector3().crossVectors(dirNormalized, up).normalize();
      
      // Energy flow pipes - keep them reasonable height, not too high
      const avgY = (from.y + to.y) / 2;
      const avgZ = (from.z + to.z) / 2;
      // Simple arc - keep it subtle
      const arcHeight = Math.min(length * 0.1, 0.5); // Reasonable arc
      midPoint.y = avgY + arcHeight * 0.5; // Slight elevation
      midPoint.z = avgZ; // Keep Z similar to average
      if (perpendicular.length() > 0.1) {
        midPoint.add(perpendicular.multiplyScalar(arcHeight * 0.3)); // Subtle lateral curve
      }

      // Create CatmullRom curve for smooth pipeline
      const curve = new THREE.CatmullRomCurve3([
        from,
        midPoint,
        to,
      ], false, 'centripetal');

      // Create tube geometry - smaller pipes for better proportions
      const tubeRadius = 0.02 + intensity * 0.005; // Smaller radius
      const tubeGeo = new THREE.TubeGeometry(curve, 24, tubeRadius, 12, false);
      
      // Create flowing material
      const flowMat = createFlowMaterial(color, speed * (0.5 + intensity * 0.5));
      shaderMaterialsRef.current.push(flowMat);
      
      const tube = new THREE.Mesh(tubeGeo, flowMat);
      group.add(tube);

      // Arrow heads removed for cleaner, simpler visualization

      // Simplified particles - fewer but more visible
      const particleCount = Math.floor(intensity * 15 + 8);
      const particlePositions = new Float32Array(particleCount * 3);
      const particleColors = new Float32Array(particleCount * 3);
      const particleSpeeds = new Float32Array(particleCount); // Store animation phase for each particle
      
      for (let i = 0; i < particleCount; i++) {
        const t = i / particleCount;
        const point = curve.getPoint(t);
        const tangent = curve.getTangent(t);
        const normal = new THREE.Vector3(0, 1, 0);
        const binormal = new THREE.Vector3().crossVectors(tangent, normal).normalize();
        
        // Position particles slightly inside the tube (80% of radius)
        const offsetRadius = tubeRadius * 0.8;
        const angle = (i * 2 * Math.PI) / particleCount; // Rotate around the tube
        const offset = new THREE.Vector3().addVectors(
          binormal.clone().multiplyScalar(Math.cos(angle) * offsetRadius),
          normal.clone().multiplyScalar(Math.sin(angle) * offsetRadius)
        );
        
        const finalPosition = point.clone().add(offset);
        const offset2 = i * 3;
        particlePositions[offset2] = finalPosition.x;
        particlePositions[offset2 + 1] = finalPosition.y;
        particlePositions[offset2 + 2] = finalPosition.z;
        
        // Color variation
        particleColors[offset2] = color.r;
        particleColors[offset2 + 1] = color.g;
        particleColors[offset2 + 2] = color.b;
        
        // Random starting phase for animation
        particleSpeeds[i] = Math.random();
      }

      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
      
      // Store curve and additional data for animation
      (particleGeo as any).curve = curve;
      (particleGeo as any).tubeRadius = tubeRadius;
      (particleGeo as any).particleSpeeds = particleSpeeds;

      const particleMat = new THREE.PointsMaterial({
        size: tubeRadius * 1.2, // Slightly larger particles for visibility but still inside tube
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });

      const particles = new THREE.Points(particleGeo, particleMat);
      group.add(particles);
      particleSystemsRef.current.push(particles);

      return { group, curve };
    };

    // Normalize flow values for visualization (scale to 0-1 range)
    const maxFlow = Math.max(
      energyFlow.pvToLoad || 0,
      energyFlow.pvToBattery || 0,
      energyFlow.pvExport || 0,
      energyFlow.batteryToLoad || 0,
      energyFlow.gridImport || 0,
      0.1 // Minimum threshold to ensure visualization even with small values
    );

    // Create node icons
    const pvActive = (energyFlow.pvToLoad || 0) + (energyFlow.pvToBattery || 0) + (energyFlow.pvExport || 0) > 0;
    const batteryActive = (energyFlow.pvToBattery || 0) + (energyFlow.batteryToLoad || 0) > 0;
    const gridActive = (energyFlow.pvExport || 0) + (energyFlow.gridImport || 0) > 0;
    const loadActive = (energyFlow.pvToLoad || 0) + (energyFlow.batteryToLoad || 0) + (energyFlow.gridImport || 0) > 0;

    // Create 5th Generation District Heating Network - two separate parallel pipes
    const networkGroup = new THREE.Group();
    
    // Supply pipe (red) - top pipe
    const supplyPipeGeo = new THREE.CylinderGeometry(pipeRadius, pipeRadius, networkLength, 16);
    supplyPipeGeo.rotateZ(Math.PI / 2); // Rotate to horizontal
    const supplyPipeMat = new THREE.MeshStandardMaterial({
      color: 0xef4444, // Red
      emissive: 0xdc2626,
      emissiveIntensity: 0.2,
      metalness: 0.6,
      roughness: 0.4,
    });
    const supplyPipe = new THREE.Mesh(supplyPipeGeo, supplyPipeMat);
    supplyPipe.position.set((networkStartX + networkEndX) / 2, networkY + pipeRadius * 0.6, networkZ);
    networkGroup.add(supplyPipe);
    
    // Return pipe (blue) - bottom pipe, slightly offset
    const returnPipeGeo = new THREE.CylinderGeometry(pipeRadius, pipeRadius, networkLength, 16);
    returnPipeGeo.rotateZ(Math.PI / 2); // Rotate to horizontal
    const returnPipeMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6, // Blue
      emissive: 0x2563eb,
      emissiveIntensity: 0.2,
      metalness: 0.6,
      roughness: 0.4,
    });
    const returnPipe = new THREE.Mesh(returnPipeGeo, returnPipeMat);
    returnPipe.position.set((networkStartX + networkEndX) / 2, networkY - pipeRadius * 0.6, networkZ);
    networkGroup.add(returnPipe);
    
    // Add network to flow arrows group
    flowArrows.add(networkGroup);
    
    // Simplified heat pump - clean underground connection
    const heatPumpGroup = new THREE.Group();
    heatPumpGroup.position.copy(heatPumpPos);
    
    // Simple heat pump box - smaller, cleaner
    const heatPumpGeo = new THREE.BoxGeometry(0.25, 0.25, 0.25);
    const heatPumpMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e, // Green
      emissive: loadActive ? 0x16a34a : 0x0a0,
      emissiveIntensity: loadActive ? 0.4 : 0,
      metalness: 0.5,
      roughness: 0.5,
    });
    const heatPump = new THREE.Mesh(heatPumpGeo, heatPumpMat);
    heatPumpGroup.add(heatPump);
    nodeIcons.add(heatPumpGroup);
    
    // Underground connection pipes - simple, straight connections
    const connectionRadius = 0.04;
    const connectionMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.6,
      roughness: 0.4,
    });
    
    // Building to heat pump - use curve for smooth connection
    const buildingToHeatPumpCurve = new THREE.CatmullRomCurve3([
      buildingToHeatPumpPos,
      new THREE.Vector3(
        (buildingToHeatPumpPos.x + heatPumpPos.x) / 2,
        (buildingToHeatPumpPos.y + heatPumpPos.y) / 2 - 0.2,
        (buildingToHeatPumpPos.z + heatPumpPos.z) / 2
      ),
      heatPumpPos,
    ], false, 'centripetal');
    const buildingPipeGeo = new THREE.TubeGeometry(buildingToHeatPumpCurve, 16, connectionRadius, 8, false);
    const buildingPipe = new THREE.Mesh(buildingPipeGeo, connectionMat);
    flowArrows.add(buildingPipe);
    
    // Heat pump to network - simple horizontal curve
    const heatPumpToNetworkCurve = new THREE.CatmullRomCurve3([
      heatPumpPos,
      new THREE.Vector3(
        (heatPumpPos.x + networkConnectionPos.x) / 2,
        networkY,
        (heatPumpPos.z + networkConnectionPos.z) / 2
      ),
      networkConnectionPos,
    ], false, 'centripetal');
    const networkPipeGeo = new THREE.TubeGeometry(heatPumpToNetworkCurve, 16, connectionRadius, 8, false);
    const networkPipe = new THREE.Mesh(networkPipeGeo, connectionMat);
    flowArrows.add(networkPipe);
    
    nodeIcons.add(createNodeIcon('pv', pvPos, pvActive));
    nodeIcons.add(createNodeIcon('battery', batteryPos, batteryActive));
    
    // Simplified grid substation
    const gridGroup = new THREE.Group();
    gridGroup.position.copy(gridPos);
    
    // Simple grid tower
    const gridTowerGeo = new THREE.CylinderGeometry(0.2, 0.25, 2.5, 8);
    const gridTowerMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: gridActive ? 0x2563eb : 0x0a0,
      emissiveIntensity: gridActive ? 0.4 : 0,
      metalness: 0.7,
      roughness: 0.3,
    });
    const gridTower = new THREE.Mesh(gridTowerGeo, gridTowerMat);
    gridGroup.add(gridTower);
    
    // Simple transmission lines - just a few clean lines
    const linePoints = [
      new THREE.Vector3(0, 2.25, 0),
      new THREE.Vector3(0, 2.5, 0.5),
    ];
    const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMat = new THREE.LineBasicMaterial({
      color: gridActive ? 0x60a5fa : 0x3b82f6,
      linewidth: 2,
      transparent: true,
      opacity: 0.6,
    });
    const line = new THREE.Line(lineGeo, lineMat);
    gridGroup.add(line);
    
    nodeIcons.add(gridGroup);
    nodeIcons.add(createNodeIcon('load', loadPos, loadActive));

    // Create all pipelines with minimum visibility threshold
    const minVisibleFlow = 0.001; // Lower threshold to show more flows
    
    // Electrical energy connections - use LINES (wires) not pipes
    // Only district heating uses pipes; electricity uses thin lines
    
    // Helper function to create electrical wire (line) connections
    const createElectricalWire = (
      from: THREE.Vector3,
      to: THREE.Vector3,
      color: THREE.Color,
      intensity: number
    ) => {
      const wirePoints = [
        from,
        new THREE.Vector3(
          (from.x + to.x) / 2,
          (from.y + to.y) / 2 + 0.3, // Slight arc upward for visibility
          (from.z + to.z) / 2
        ),
        to,
      ];
      const wireCurve = new THREE.CatmullRomCurve3(wirePoints, false, 'centripetal');
      const wireGeo = new THREE.TubeGeometry(wireCurve, 16, 0.01 * (0.5 + intensity), 4, false); // Very thin, like wire
      const wireMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.3 + intensity * 0.4,
        metalness: 0.8,
        roughness: 0.2,
      });
      const wire = new THREE.Mesh(wireGeo, wireMat);
      return wire;
    };
    
    // Grid → Heat Pump (Electrical wire: grid powers heat pump)
    if ((energyFlow.gridImport || 0) > minVisibleFlow) {
      const intensity = Math.max(0.3, (energyFlow.gridImport || 0) / maxFlow);
      const gridElectricalConn = new THREE.Vector3(3, 1.5, 0);
      const heatPumpElectricalConn = new THREE.Vector3(0, 0.2, -0.8);
      const wire = createElectricalWire(
        gridElectricalConn,
        heatPumpElectricalConn,
        new THREE.Color(0x60a5fa), // light blue (electricity)
        intensity
      );
      flowArrows.add(wire);
    }
    
    // PV → Heat Pump/Building (Electrical wire: solar powers system)
    const totalPVFlow = (energyFlow.pvToLoad || 0) + (energyFlow.pvToBattery || 0);
    if (totalPVFlow > minVisibleFlow) {
      const intensity = Math.max(0.3, totalPVFlow / maxFlow);
      const pvConnection = new THREE.Vector3(0, 1.8, 0.3);
      const heatPumpElectricalConn = new THREE.Vector3(0, 0.2, -0.8);
      const wire = createElectricalWire(
        pvConnection,
        heatPumpElectricalConn,
        new THREE.Color(0xffd700), // gold/yellow (solar electricity)
        intensity
      );
      flowArrows.add(wire);
    }
    
    // Simplified flow visualization - using shader materials on the main pipe
    if (loadActive) {
      // The dual-color pipe already shows supply/return, add subtle flow effect
      // Flow animation handled by shader materials in animate loop
    }

    console.log('[3D Flow] Created', flowArrows.children.length, 'pipelines and', nodeIcons.children.length, 'node icons');
  }, [energyFlow]);

  // Update battery SoC
  useEffect(() => {
    if (!batteryGroupRef.current || batterySoC === null || batterySoC === undefined) return;
    
    const batteryGroup = batteryGroupRef.current;
    batteryGroup.clear();
    
    // Battery container
    const batteryGeo = new THREE.BoxGeometry(0.3, 0.8, 0.15);
    const batteryMat = new THREE.MeshStandardMaterial({ 
      color: 0x334155,
      metalness: 0.3,
      roughness: 0.7,
    });
    const battery = new THREE.Mesh(batteryGeo, batteryMat);
    battery.position.set(-2, 0.5, 0);
    batteryGroup.add(battery);

    // SoC fill
    const fillHeight = 0.8 * Math.max(0, Math.min(1, batterySoC));
    if (fillHeight > 0.01) {
      const fillGeo = new THREE.BoxGeometry(0.28, fillHeight, 0.13);
      const fillColor = new THREE.Color().lerpColors(
        new THREE.Color(0x22c55e), // green
        new THREE.Color(0xef4444), // red
        1 - batterySoC
      );
      const fillMat = new THREE.MeshStandardMaterial({ 
        color: fillColor,
        emissive: fillColor,
        emissiveIntensity: 0.3,
      });
      const fill = new THREE.Mesh(fillGeo, fillMat);
      fill.position.set(-2, 0.5 - (0.8 - fillHeight) / 2, 0);
      batteryGroup.add(fill);
    }

    // Battery terminals
    const terminalGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.1, 8);
    const terminalMat = new THREE.MeshStandardMaterial({ color: 0xffd700 });
    const terminal1 = new THREE.Mesh(terminalGeo, terminalMat);
    terminal1.position.set(-2, 0.9, 0);
    batteryGroup.add(terminal1);
  }, [batterySoC]);

  useEffect(() => {
    if (navValue === undefined || navValue === null) return;
    const normalized = Math.max(0, Math.min(navValue / 1e9, 8));

    if (buildingRef.current) {
      const baseScale = 0.02;
      const factor = 1 + normalized * 0.03;
      buildingRef.current.scale.setScalar(baseScale * factor);
    } else if (cubeRef.current) {
      cubeRef.current.visible = true;
      cubeRef.current.scale.setScalar(0.8 + normalized * 0.05);
      const material = cubeRef.current.material as THREE.MeshStandardMaterial;
      const hue = 0.55 - Math.min(normalized * 0.05, 0.25);
      material.color.setHSL(hue, 0.75, 0.55);
    }
  }, [navValue]);

  return <div ref={containerRef} className="viewer-canvas" />;
}
