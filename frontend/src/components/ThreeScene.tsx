import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

interface ThreeSceneProps {
  navValue?: number | null;
}

export function ThreeScene({ navValue }: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cubeRef = useRef<THREE.Mesh>();
  const buildingRef = useRef<THREE.Group>();
  const frameRef = useRef<number>();

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

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      // Smooth camera controls and keep axes at the current target
      controls.update();
      axes.position.copy(controls.target);
      if (buildingRef.current) {
        buildingRef.current.rotation.y += 0.0025;
      } else if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.005;
        cubeRef.current.rotation.y += 0.01;
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
      container.removeChild(renderer.domElement);
    };
  }, []);

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
