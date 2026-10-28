import { Fragment, useState, useRef, useCallback, useEffect, useId } from 'react';
import { DeviceIcon, NumberField, PALETTE_GROUPS, paramMeta, specLine } from './builder/builderUi';

// Digital Twin component types for PED simulation
export type DTComponentType = 
  | 'smart_building'
  | 'solar_pv'
  | 'battery_storage'
  | 'wind_turbine'
  | 'district_heating'
  | 'smart_grid'
  | 'ev_charger'
  | 'heat_pump'
  | 'chp_unit'        // Combined Heat & Power
  | 'thermal_storage'
  | 'load_center';

export interface DTComponent {
  id: string;
  type: DTComponentType;
  name: string;
  x: number;
  y: number;
  params: Record<string, number | string | boolean>;
}

export interface DTConnection {
  id: string;
  from: string;
  to: string;
  type: 'electricity' | 'heat' | 'both';
  capacity_kw?: number;
}

export interface DigitalTwinConfig {
  id: string;
  name: string;
  components: DTComponent[];
  connections: DTConnection[];
  created_at: string;
}

// Component definitions with default parameters
const COMPONENT_DEFS: Record<DTComponentType, { 
  label: string; 
  icon: string; 
  color: string;
  defaultParams: Record<string, number | string | boolean>;
  description: string;
}> = {
  smart_building: {
    label: 'Smart Building',
    icon: '🏢',
    color: '#6366f1',
    defaultParams: { floors: 5, area_m2: 2000, load_kw: 150, flexible_load_pct: 30 },
    description: 'Intelligent building with controllable loads'
  },
  solar_pv: {
    label: 'Solar PV',
    icon: '☀️',
    color: '#eab308',
    defaultParams: { capacity_kwp: 100, tilt_deg: 15, azimuth_deg: 180, efficiency: 0.2 },
    description: 'Rooftop or ground-mounted photovoltaic panels'
  },
  battery_storage: {
    label: 'Battery Storage',
    icon: '🔋',
    color: '#22c55e',
    defaultParams: { capacity_kwh: 200, power_kw: 50, efficiency: 0.92, initial_soc: 0.5 },
    description: 'Lithium-ion battery energy storage system'
  },
  wind_turbine: {
    label: 'Wind Turbine',
    icon: '🌬️',
    color: '#06b6d4',
    defaultParams: { capacity_kw: 500, hub_height_m: 80, rotor_diameter_m: 50 },
    description: 'Small-scale wind power generation'
  },
  district_heating: {
    label: 'District Heating',
    icon: '🔥',
    color: '#ef4444',
    defaultParams: { supply_temp_c: 70, return_temp_c: 40, capacity_kw: 500 },
    description: 'Connection to district heating network'
  },
  smart_grid: {
    label: 'Smart Grid',
    icon: '⚡',
    color: '#8b5cf6',
    defaultParams: { import_limit_kw: 1000, export_limit_kw: 500, tariff_type: 'dynamic' },
    description: 'Grid connection point with smart metering'
  },
  ev_charger: {
    label: 'EV Charger',
    icon: '🚗',
    color: '#3b82f6',
    defaultParams: { num_ports: 4, power_per_port_kw: 22, v2g_enabled: true },
    description: 'Electric vehicle charging station with V2G'
  },
  heat_pump: {
    label: 'Heat Pump',
    icon: '❄️',
    color: '#14b8a6',
    defaultParams: { capacity_kw: 50, cop: 3.5, type: 'air_source' },
    description: 'Air or ground source heat pump'
  },
  chp_unit: {
    label: 'CHP Unit',
    icon: '⚙️',
    color: '#f97316',
    defaultParams: { electrical_kw: 100, thermal_kw: 150, fuel: 'biogas' },
    description: 'Combined heat and power generation'
  },
  thermal_storage: {
    label: 'Thermal Storage',
    icon: '🌡️',
    color: '#ec4899',
    defaultParams: { capacity_kwh: 500, max_temp_c: 95, loss_pct_day: 2 },
    description: 'Hot water thermal energy storage'
  },
  load_center: {
    label: 'Load Center',
    icon: '📊',
    color: '#64748b',
    defaultParams: { base_load_kw: 100, peak_load_kw: 300, dsm_enabled: true },
    description: 'Aggregated electrical load point'
  }
};

const COMPONENT_LIST = Object.entries(COMPONENT_DEFS).map(([type, def]) => ({
  type: type as DTComponentType,
  ...def
}));

// Canvas cards are centred on (x + 30, y + 30), the anchor used by saved
// designs and the 3D view; their visual size is independent of that anchor.
const NODE_ANCHOR = 30;
const CARD_W = 150;
const CARD_H = 64;
const GRID = 20;
const snap = (v: number) => Math.round(v / GRID) * GRID;
const clampZoom = (k: number) => Math.max(0.4, Math.min(2, k));

// Unique id even for several adds within the same millisecond
let idSeq = 0;
const makeId = (prefix: string) => `${prefix}-${Date.now().toString(36)}-${(idSeq++).toString(36)}${Math.random().toString(36).slice(2, 6)}`;

// Drop components of unknown type (would crash rendering via COMPONENT_DEFS[type])
// and connections whose endpoints don't exist; tolerate missing fields.
function sanitizeConfig(cfg: Partial<DigitalTwinConfig> | null | undefined): { components: DTComponent[]; connections: DTConnection[] } {
  const rawComps = Array.isArray(cfg?.components) ? cfg!.components : [];
  const components = rawComps
    .filter(c => c && typeof c.id === 'string' && c.type in COMPONENT_DEFS)
    .map(c => ({ ...c, x: Number(c.x) || 0, y: Number(c.y) || 0, name: c.name ?? COMPONENT_DEFS[c.type].label, params: c.params || {} }));
  const ids = new Set(components.map(c => c.id));
  const rawConns = Array.isArray(cfg?.connections) ? cfg!.connections : [];
  const connections = rawConns.filter(c => c && ids.has(c.from) && ids.has(c.to));
  return { components, connections };
}

// Backend ids are server-generated (uuid / numeric); client ids start with "dt-"
const isBackendId = (id: string | null | undefined): id is string => !!id && !id.startsWith('dt-');

function loadLocalConfig(): DigitalTwinConfig | null {
  try {
    const saved = localStorage.getItem('dt_builder_config');
    return saved ? (JSON.parse(saved) as DigitalTwinConfig) : null;
  } catch {
    return null;
  }
}

interface Props {
  onConfigChange?: (config: DigitalTwinConfig) => void;
  initialConfig?: DigitalTwinConfig | null;
  apiBase?: string;
  onRunSimulation?: (runId: string) => void;
}

export function DigitalTwinBuilder({ onConfigChange, initialConfig, apiBase, onRunSimulation }: Props) {
  // Start from initialConfig, else the config persisted in localStorage
  // (read synchronously so the save effect can't overwrite it with an empty design)
  const [startConfig] = useState<DigitalTwinConfig | null>(() => initialConfig || loadLocalConfig());
  const [components, setComponents] = useState<DTComponent[]>(() => sanitizeConfig(startConfig).components);
  const [connections, setConnections] = useState<DTConnection[]>(() => sanitizeConfig(startConfig).connections);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);
  const [configName, setConfigName] = useState(startConfig?.name || 'My Digital Twin');
  const [draggedType, setDraggedType] = useState<DTComponentType | null>(null);
  // Only use savedId if it's a real backend ID, not client-generated (dt-*)
  const [savedId, setSavedId] = useState<string | null>(() => {
    const id = startConfig?.id != null ? String(startConfig.id) : null;
    return isBackendId(id) ? id : null;
  });
  const [saving, setSaving] = useState(false);
  const [running, setRunning] = useState(false);
  const [scenarios, setScenarios] = useState<Array<{ id: string; name: string }>>([]);
  const [linkedScenarioId, setLinkedScenarioId] = useState<string | null>(null);
  const [mobilePanel, setMobilePanel] = useState<'palette' | 'canvas' | 'properties'>('canvas');
  const [touchDrag, setTouchDrag] = useState<{ id: string; offsetX: number; offsetY: number } | null>(null);
  // Pan (x, y in screen px) and zoom (k) of the canvas content
  const [view, setView] = useState({ x: 0, y: 0, k: 1 });
  const zoom = view.k;
  const viewRef = useRef(view);
  viewRef.current = view;
  const [pointer, setPointer] = useState<{ x: number; y: number } | null>(null);
  const [notice, setNotice] = useState<{ text: string; tone: 'ok' | 'error' } | null>(null);
  const [paletteQuery, setPaletteQuery] = useState('');
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [hoverConn, setHoverConn] = useState<string | null>(null);
  const panRef = useRef<{ startX: number; startY: number; viewX: number; viewY: number; moved: boolean } | null>(null);
  const [fitNonce, setFitNonce] = useState(1);
  const markerId = useId().replace(/:/g, '');
  const [pinchStart, setPinchStart] = useState<number | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  // Existing component being moved with HTML5 drag (offset of the grab point)
  const moveDragRef = useRef<{ id: string; offsetX: number; offsetY: number } | null>(null);
  const onConfigChangeRef = useRef(onConfigChange);
  onConfigChangeRef.current = onConfigChange;
  const localIdRef = useRef(startConfig?.id && !isBackendId(String(startConfig.id)) ? String(startConfig.id) : `dt-${Date.now()}`);
  const createdAtRef = useRef(startConfig?.created_at || new Date().toISOString());
  // Last config we emitted / adopted; used to tell our own echo (parent passes
  // the onConfigChange value back as initialConfig) from a real external change.
  const syncedConfigRef = useRef<DigitalTwinConfig | null | undefined>(initialConfig);

  // Zoom handler. React registers wheel listeners as passive, so preventDefault()
  // in onWheel is ignored and ctrl+wheel also zooms the whole page; use a native listener.
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.ctrlKey || e.metaKey) {
        // Zoom around the cursor
        zoomAround(viewRef.current.k * Math.exp(-e.deltaY * 0.0015), e.clientX, e.clientY);
      } else {
        // Two-finger scroll / wheel pans the canvas
        setView(v => ({ ...v, x: v.x - e.deltaX, y: v.y - e.deltaY }));
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const handlePinchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setPinchStart(dist);
    }
  };

  const handlePinchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStart) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scale = dist / pinchStart;
      const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      zoomAround(viewRef.current.k * scale, cx, cy);
      setPinchStart(dist);
    }
  };

  const handlePinchEnd = () => {
    setPinchStart(null);
  };

  // Touch drag handlers for mobile
  const handleTouchStart = (id: string, e: React.TouchEvent) => {
    if (e.touches.length > 1) return; // Ignore multi-touch (pinch)
    const touch = e.touches[0];
    const comp = components.find(c => c.id === id);
    if (!comp || !canvasRef.current) return;
    const pt = toCanvasCoords(touch.clientX, touch.clientY);
    setTouchDrag({ id, offsetX: pt.x - comp.x, offsetY: pt.y - comp.y });
    setSelectedId(id);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      handlePinchMove(e);
      return;
    }
    if (!touchDrag || !canvasRef.current) return;
    e.preventDefault();
    const touch = e.touches[0];
    const pt = toCanvasCoords(touch.clientX, touch.clientY);
    updateComponentPosition(touchDrag.id, Math.max(0, pt.x - touchDrag.offsetX), Math.max(0, pt.y - touchDrag.offsetY));
  };

  const handleTouchEnd = () => {
    if (touchDrag) {
      const c = components.find(cc => cc.id === touchDrag.id);
      if (c) updateComponentPosition(c.id, snap(c.x), snap(c.y));
    }
    setTouchDrag(null);
    setPinchStart(null);
  };

  const join = (p: string) => {
    if (!apiBase) return p;
    try {
      const base = apiBase.endsWith('/') ? apiBase : apiBase + '/';
      return new URL(p.replace(/^\/+/, ''), base).toString();
    } catch {
      // Fallback for relative URLs
      return apiBase.replace(/\/+$/, '') + '/' + p.replace(/^\/+/, '');
    }
  };

  // Load scenarios for linking
  useEffect(() => {
    if (!apiBase) return;
    const ctrl = new AbortController();
    fetch(join('/scenarios'), { signal: ctrl.signal })
      .then(r => (r.ok ? r.json() : []))
      .then(data => setScenarios(Array.isArray(data) ? data : []))
      .catch(() => {});
    return () => ctrl.abort();
  }, [apiBase]);

  // Adopt externally provided configs (not our own echoed onConfigChange value)
  useEffect(() => {
    if (!initialConfig || initialConfig === syncedConfigRef.current) return;
    syncedConfigRef.current = initialConfig;
    const { components: comps, connections: conns } = sanitizeConfig(initialConfig);
    setComponents(comps);
    setConnections(conns);
    setConfigName(initialConfig.name || 'My Digital Twin');
    const id = initialConfig.id != null ? String(initialConfig.id) : null;
    if (isBackendId(id)) {
      setSavedId(id);
    } else {
      setSavedId(null);
      if (id) localIdRef.current = id;
    }
    if (initialConfig.created_at) createdAtRef.current = initialConfig.created_at;
    setSelectedId(null);
    setConnectingFrom(null);
    setFitNonce(n => n + 1);
  }, [initialConfig]);

  // Save and notify on changes. initialConfig/onConfigChange are deliberately not
  // deps: the parent feeds our output back as initialConfig, which would loop forever.
  useEffect(() => {
    const config: DigitalTwinConfig = {
      id: savedId || localIdRef.current,
      name: configName,
      components,
      connections,
      created_at: createdAtRef.current
    };
    try {
      localStorage.setItem('dt_builder_config', JSON.stringify(config));
    } catch {}
    syncedConfigRef.current = config;
    onConfigChangeRef.current?.(config);
  }, [components, connections, configName, savedId]);

  const handleDragStart = (type: DTComponentType, e: React.DragEvent) => {
    // Firefox won't start an HTML5 drag without data
    try { e.dataTransfer.setData('text/plain', type); } catch {}
    e.dataTransfer.effectAllowed = 'copy';
    moveDragRef.current = null;
    setDraggedType(type);
  };

  // Canvas (content) coordinates of a client point; content is panned then scaled
  const toCanvasCoords = (clientX: number, clientY: number) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    const v = viewRef.current;
    return { x: (clientX - rect.left - v.x) / v.k, y: (clientY - rect.top - v.y) / v.k };
  };

  // Zoom keeping the content point under (clientX, clientY) fixed
  function zoomAround(nextK: number, clientX?: number, clientY?: number) {
    const el = canvasRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (clientX ?? rect.left + rect.width / 2) - rect.left;
    const py = (clientY ?? rect.top + rect.height / 2) - rect.top;
    setView(v => {
      const k = clampZoom(nextK);
      return { k, x: px - ((px - v.x) / v.k) * k, y: py - ((py - v.y) / v.k) * k };
    });
  }

  // Frame all components in the visible canvas
  const fitView = useCallback(() => {
    const el = canvasRef.current;
    if (!el || components.length === 0) return;
    const rect = el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const xs = components.map(c => c.x + NODE_ANCHOR);
    const ys = components.map(c => c.y + NODE_ANCHOR);
    const minX = Math.min(...xs) - CARD_W / 2, maxX = Math.max(...xs) + CARD_W / 2;
    const minY = Math.min(...ys) - CARD_H / 2, maxY = Math.max(...ys) + CARD_H / 2;
    const k = clampZoom(Math.min((rect.width - 96) / (maxX - minX), (rect.height - 96) / (maxY - minY), 1.15));
    setView({ k, x: rect.width / 2 - ((minX + maxX) / 2) * k, y: rect.height / 2 - ((minY + maxY) / 2) * k });
  }, [components]);

  // Fit after mount, template loads and imports (not on every edit)
  useEffect(() => {
    if (fitNonce) fitView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fitNonce]);

  const notify = (text: string, tone: 'ok' | 'error' = 'ok') => setNotice({ text, tone });
  useEffect(() => {
    if (!notice) return;
    const t = window.setTimeout(() => setNotice(null), notice.tone === 'error' ? 6000 : 3000);
    return () => window.clearTimeout(t);
  }, [notice]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!canvasRef.current) return;
    const { x, y } = toCanvasCoords(e.clientX, e.clientY);

    // Moving an existing component
    const move = moveDragRef.current;
    if (move) {
      moveDragRef.current = null;
      updateComponentPosition(move.id, snap(x - move.offsetX), snap(y - move.offsetY));
      return;
    }

    if (!draggedType) return;
    const def = COMPONENT_DEFS[draggedType];
    const newComp: DTComponent = {
      id: makeId(draggedType),
      type: draggedType,
      name: def.label,
      x: snap(x - NODE_ANCHOR),
      y: snap(y - NODE_ANCHOR),
      params: { ...def.defaultParams }
    };
    
    setComponents(prev => [...prev, newComp]);
    setSelectedId(newComp.id);
    setDraggedType(null);
  }, [draggedType, zoom]);

  // Clicks on components / connections stop propagation; anything else that
  // reaches the canvas (the zoom wrapper, empty state, ...) is background.
  const handleCanvasClick = () => {
    setSelectedId(null);
    setConnectingFrom(null);
  };

  // Connection validation rules - which components can connect
  const VALID_CONNECTIONS: Record<DTComponentType, { targets: DTComponentType[]; type: 'electricity' | 'heat' | 'both' }> = {
    solar_pv: { targets: ['smart_building', 'battery_storage', 'smart_grid', 'ev_charger', 'load_center', 'heat_pump'], type: 'electricity' },
    wind_turbine: { targets: ['smart_building', 'battery_storage', 'smart_grid', 'ev_charger', 'load_center', 'heat_pump'], type: 'electricity' },
    battery_storage: { targets: ['smart_building', 'smart_grid', 'ev_charger', 'load_center', 'solar_pv', 'wind_turbine'], type: 'electricity' },
    smart_grid: { targets: ['smart_building', 'battery_storage', 'ev_charger', 'load_center', 'heat_pump'], type: 'electricity' },
    ev_charger: { targets: ['smart_building', 'smart_grid', 'battery_storage'], type: 'electricity' },
    load_center: { targets: ['smart_building', 'smart_grid', 'battery_storage'], type: 'electricity' },
    heat_pump: { targets: ['smart_building', 'thermal_storage', 'district_heating'], type: 'heat' },
    district_heating: { targets: ['smart_building', 'thermal_storage', 'heat_pump'], type: 'heat' },
    thermal_storage: { targets: ['smart_building', 'heat_pump', 'district_heating'], type: 'heat' },
    chp_unit: { targets: ['smart_building', 'smart_grid', 'battery_storage', 'thermal_storage'], type: 'both' },
    smart_building: { targets: ['smart_grid', 'ev_charger', 'load_center'], type: 'electricity' },
  };

  const validateConnection = (fromId: string, toId: string): { valid: boolean; type: 'electricity' | 'heat' | 'both'; error?: string } => {
    const fromComp = components.find(c => c.id === fromId);
    const toComp = components.find(c => c.id === toId);
    if (!fromComp || !toComp) return { valid: false, type: 'electricity', error: 'Component not found' };
    
    const rules = VALID_CONNECTIONS[fromComp.type];
    if (!rules.targets.includes(toComp.type)) {
      // Try reverse direction
      const reverseRules = VALID_CONNECTIONS[toComp.type];
      if (reverseRules.targets.includes(fromComp.type)) {
        return { valid: true, type: reverseRules.type };
      }
      return { valid: false, type: 'electricity', error: `Cannot connect ${COMPONENT_DEFS[fromComp.type].label} to ${COMPONENT_DEFS[toComp.type].label}` };
    }
    return { valid: true, type: rules.type };
  };

  const handleComponentClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (connectingFrom && connectingFrom !== id) {
      // Validate and create connection
      const validation = validateConnection(connectingFrom, id);
      if (!validation.valid) {
        notify(validation.error ?? 'These components cannot be connected', 'error');
        setConnectingFrom(null);
        return;
      }
      if (connections.some(c => (c.from === connectingFrom && c.to === id) || (c.from === id && c.to === connectingFrom))) {
        notify('These components are already connected', 'error');
        setConnectingFrom(null);
        return;
      }
      const newConn: DTConnection = {
        id: makeId('conn'),
        from: connectingFrom,
        to: id,
        type: validation.type,
        capacity_kw: 100
      };
      setConnections(prev => [...prev, newConn]);
      setConnectingFrom(null);
      setSelectedId(newConn.id);
    } else {
      setSelectedId(id);
    }
  };

  const startConnection = (id: string) => {
    setConnectingFrom(id);
    setSelectedId(null);
  };

  const deleteComponent = (id: string) => {
    setComponents(prev => prev.filter(c => c.id !== id));
    setConnections(prev => prev.filter(c => c.from !== id && c.to !== id));
    setSelectedId(null);
    setConnectingFrom(prev => (prev === id ? null : prev));
  };

  const deleteConnection = (id: string) => {
    setConnections(prev => prev.filter(c => c.id !== id));
    setSelectedId(prev => (prev === id ? null : prev));
  };

  const updateComponentParam = (id: string, key: string, value: number | string | boolean) => {
    setComponents(prev => prev.map(c => 
      c.id === id ? { ...c, params: { ...c.params, [key]: value } } : c
    ));
  };

  const updateComponentPosition = (id: string, x: number, y: number) => {
    setComponents(prev => prev.map(c => c.id === id ? { ...c, x, y } : c));
  };

  // Position is committed in handleDrop (dragend coordinates are unreliable,
  // e.g. 0,0 in Firefox); here we only remember where the component was grabbed.
  const handleComponentDragStart = (id: string, e: React.DragEvent) => {
    e.stopPropagation();
    const comp = components.find(c => c.id === id);
    if (!comp || !canvasRef.current) return;
    try { e.dataTransfer.setData('text/plain', id); } catch {}
    e.dataTransfer.effectAllowed = 'move';
    const { x, y } = toCanvasCoords(e.clientX, e.clientY);
    moveDragRef.current = { id, offsetX: x - comp.x, offsetY: y - comp.y };
    setDraggedType(null);
  };

  const selectedComp = components.find(c => c.id === selectedId);

  // Check if component is properly connected
  const getComponentStatus = (compId: string): 'valid' | 'isolated' | 'warning' => {
    const hasConnection = connections.some(c => c.from === compId || c.to === compId);
    if (!hasConnection) return 'isolated';
    return 'valid';
  };

  // Calculate comprehensive PED metrics with annual estimates
  const calcPedMetrics = () => {
    let genKw = 0, loadKw = 0, storageKwh = 0, thermalStorageKwh = 0;
    let solarKwp = 0, windKw = 0, chpKw = 0, heatPumpKw = 0;
    let evChargerKw = 0, batteryKwh = 0;
    
    components.forEach(c => {
      if (c.type === 'solar_pv') { solarKwp += Number(c.params.capacity_kwp || 0); genKw += Number(c.params.capacity_kwp || 0); }
      if (c.type === 'wind_turbine') { windKw += Number(c.params.capacity_kw || 0); genKw += Number(c.params.capacity_kw || 0); }
      if (c.type === 'chp_unit') { chpKw += Number(c.params.electrical_kw || 0); genKw += Number(c.params.electrical_kw || 0); }
      if (c.type === 'smart_building') loadKw += Number(c.params.load_kw || 0);
      if (c.type === 'load_center') loadKw += Number(c.params.base_load_kw || 0);
      if (c.type === 'ev_charger') evChargerKw += Number(c.params.num_ports || 0) * Number(c.params.power_per_port_kw || 0);
      if (c.type === 'heat_pump') heatPumpKw += Number(c.params.capacity_kw || 0);
      if (c.type === 'battery_storage') { batteryKwh += Number(c.params.capacity_kwh || 0); storageKwh += Number(c.params.capacity_kwh || 0); }
      if (c.type === 'thermal_storage') thermalStorageKwh += Number(c.params.capacity_kwh || 0);
    });

    // Annual estimates (Denmark typical values)
    const solarCF = 0.11; // ~1000 kWh/kWp/year in Denmark
    const windCF = 0.25;  // ~2200 kWh/kW/year
    const chpCF = 0.6;    // 60% capacity factor
    const loadFactor = 0.35; // Office building load factor
    
    const annualGenMwh = (solarKwp * solarCF + windKw * windCF + chpKw * chpCF) * 8.76; // 8760h/1000
    const annualLoadMwh = loadKw * loadFactor * 8.76;
    
    // Self-consumption estimate (simplified - depends on storage)
    const storageHours = loadKw > 0 ? batteryKwh / loadKw : 0;
    const baseSelfConsumption = 0.3; // 30% without storage
    const selfConsumptionBoost = Math.min(storageHours * 0.1, 0.4); // +10% per hour of storage, max +40%
    const selfConsumptionRate = Math.min(baseSelfConsumption + selfConsumptionBoost, 0.85);
    
    const selfConsumedMwh = Math.min(annualGenMwh * selfConsumptionRate, annualLoadMwh);
    const gridExportMwh = annualGenMwh - selfConsumedMwh;
    const gridImportMwh = Math.max(annualLoadMwh - selfConsumedMwh, 0);
    const selfSufficiencyRate = annualLoadMwh > 0 ? selfConsumedMwh / annualLoadMwh : 0;
    
    // Cost estimates (EUR, Denmark 2024 prices)
    const gridImportPrice = 0.30; // €/kWh avg
    const gridExportPrice = 0.08; // €/kWh feed-in
    const annualGridCost = gridImportMwh * 1000 * gridImportPrice - gridExportMwh * 1000 * gridExportPrice;
    
    // CAPEX estimates (simplified)
    const capexSolar = solarKwp * 1200; // €1200/kWp
    const capexBattery = batteryKwh * 400; // €400/kWh
    const capexWind = windKw * 1500; // €1500/kW
    const totalCapex = capexSolar + capexBattery + capexWind;
    
    // CO2 estimates (kg/year)
    const gridEmissionFactor = 0.14; // kg CO2/kWh Denmark grid
    const annualCO2 = gridImportMwh * 1000 * gridEmissionFactor;
    const baselineCO2 = annualLoadMwh * 1000 * gridEmissionFactor;
    const co2Savings = baselineCO2 - annualCO2;
    
    // PED status
    const netBalance = annualGenMwh - annualLoadMwh;
    const ratio = annualLoadMwh > 0 ? annualGenMwh / annualLoadMwh : 0;
    const isPed = annualLoadMwh > 0 && netBalance >= 0;
    const shortfallKw = isPed ? 0 : (annualLoadMwh - annualGenMwh) / 8.76 / solarCF; // kWp needed
    
    return {
      // Instantaneous
      genKw, loadKw, storageKwh, ratio, isPed,
      // Annual estimates
      annualGenMwh, annualLoadMwh, netBalance,
      selfConsumptionRate, selfSufficiencyRate,
      gridImportMwh, gridExportMwh,
      // Economics
      annualGridCost, totalCapex,
      // Environment
      annualCO2, co2Savings,
      // Recommendations
      shortfallKw,
    };
  };

  const ped = calcPedMetrics();

  const clearAll = () => {
    if (confirm('Clear all components?')) {
      setComponents([]);
      setConnections([]);
      setSelectedId(null);
      setConnectingFrom(null);
      setSavedId(null);
      setLinkedScenarioId(null);
    }
  };

  // Persist the current design: PATCH the saved twin, or POST a new one (also
  // when the saved twin no longer exists). Returns the backend id.
  const persistTwin = async (): Promise<{ ok: true; id: string } | { ok: false; error: string }> => {
    const payload = {
      name: configName,
      description: `Digital twin with ${components.length} components`,
      components: components.map(c => ({ ...c })),
      // Never send connections whose endpoints were removed
      connections: connections
        .filter(c => components.some(k => k.id === c.from) && components.some(k => k.id === c.to))
        .map(c => ({ ...c })),
    };
    const send = (url: string, method: string) => fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    let r = savedId ? await send(join(`/digital-twins/${encodeURIComponent(savedId)}`), 'PATCH') : null;
    if (!r || r.status === 404) r = await send(join('/digital-twins'), 'POST');
    if (!r.ok) return { ok: false, error: await r.text() };
    const data = await r.json();
    const id = String(data.id);
    setSavedId(id);
    return { ok: true, id };
  };

  // Save digital twin to backend
  const saveToBackend = async () => {
    if (!apiBase) return;
    setSaving(true);
    try {
      const res = await persistTwin();
      if (res.ok) {
        notify('Digital twin saved.');
      } else {
        notify('Save failed: ' + res.error, 'error');
      }
    } catch (e: any) {
      notify('Save error: ' + (e?.message || String(e)), 'error');
    } finally {
      setSaving(false);
    }
  };

  // Run simulation from this digital twin
  const runSimulation = async () => {
    if (!apiBase) {
      notify('API not configured', 'error');
      return;
    }
    if (components.length === 0) {
      notify('Add components to your digital twin first', 'error');
      return;
    }
    
    setRunning(true);
    try {
      // Always persist first: the run uses the stored twin, so unsaved edits
      // to an already-saved twin would otherwise be silently ignored.
      const saveRes = await persistTwin();
      if (!saveRes.ok) {
        notify('Failed to save: ' + saveRes.error, 'error');
        return;
      }
      const dtId = saveRes.id;
      
      // Now run the simulation
      const r = await fetch(join(`/digital-twins/${encodeURIComponent(dtId)}/run`), { method: 'POST' });
      if (r.ok) {
        const data = await r.json();
        onRunSimulation?.(data.id);
      } else {
        notify('Run failed: ' + (await r.text()), 'error');
      }
    } catch (e: any) {
      notify('Run error: ' + (e?.message || String(e)), 'error');
    } finally {
      setRunning(false);
    }
  };

  // Create scenario from digital twin config
  const createScenarioFromDT = async () => {
    if (!apiBase) {
      notify('API not configured', 'error');
      return;
    }
    const overrides = calcConfigOverrides();
    const payload = {
      name: `Scenario: ${configName}`,
      description: `Auto-generated from digital twin "${configName}"`,
      details: `Components: ${components.map(c => c.name).join(', ')}`,
      config_overrides: overrides,
    };
    
    const url = join('/scenarios');
    console.log('Creating scenario at:', url, payload);
    
    try {
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (r.ok) {
        const data = await r.json();
        setLinkedScenarioId(data.id);
        // Refresh scenarios list
        const sr = await fetch(join('/scenarios'));
        if (sr.ok) {
          const list = await sr.json();
          if (Array.isArray(list)) setScenarios(list);
        }
        notify('Scenario created — run it from the Scenarios page.');
      } else {
        const errText = await r.text();
        notify('Failed to create scenario: ' + errText, 'error');
      }
    } catch (e: any) {
      console.error('Create scenario error:', e);
      notify('Error creating scenario: ' + (e?.message || String(e)), 'error');
    }
  };

  // Convert DT components to scenario config overrides
  const calcConfigOverrides = () => {
    let solar_mw = 0, battery_mwh = 0, wind_mw = 0;
    components.forEach(c => {
      if (c.type === 'solar_pv') solar_mw += Number(c.params.capacity_kwp || 0) / 1000;
      if (c.type === 'battery_storage') battery_mwh += Number(c.params.capacity_kwh || 0) / 1000;
      if (c.type === 'wind_turbine') wind_mw += Number(c.params.capacity_kw || 0) / 1000;
    });
    return {
      owned_solar_capacity_mw: solar_mw,
      owned_battery_capacity_mwh: battery_mwh,
      owned_wind_capacity_mw: wind_mw,
      investment_freq: 12,
    };
  };

  const exportConfig = () => {
    const config: DigitalTwinConfig = {
      id: `dt-${Date.now()}`,
      name: configName,
      components,
      connections,
      created_at: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${configName.replace(/\s+/g, '_')}.json`;
    a.click();
    // Revoking synchronously can cancel the download in some browsers
    setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  const importConfig = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const cfg = JSON.parse(ev.target?.result as string) as DigitalTwinConfig;
        const { components: comps, connections: conns } = sanitizeConfig(cfg);
        setComponents(comps);
        setConnections(conns);
        setConfigName(cfg?.name || 'Imported Config');
        // Imported design is new: don't overwrite the previously saved twin
        setSavedId(null);
        setSelectedId(null);
        setConnectingFrom(null);
        setFitNonce(n => n + 1);
      } catch { notify('Invalid config file', 'error'); }
    };
    reader.readAsText(file);
    // Allow re-importing the same file
    e.target.value = '';
  };

  // Predefined templates matching paper Scenarios 1-5 and additional PED designs
  const TEMPLATES: Record<string, { name: string; components: DTComponent[]; connections: DTConnection[] }> = {
    // Paper Scenario 1: Baseline - existing rooftop PV only, no battery
    scenario_1_baseline: {
      name: 'Scenario 1: Baseline',
      components: [
        { id: 'bld-1', type: 'smart_building', name: 'Office Building', x: 300, y: 180, params: { floors: 5, area_m2: 2000, load_kw: 150, flexible_load_pct: 0 } },
        { id: 'pv-1', type: 'solar_pv', name: 'Existing Rooftop PV', x: 300, y: 60, params: { capacity_kwp: 30, tilt_deg: 15, azimuth_deg: 180, efficiency: 0.18 } },
        { id: 'dh-1', type: 'district_heating', name: 'District Heating', x: 150, y: 180, params: { supply_temp_c: 70, return_temp_c: 40, capacity_kw: 200 } },
        { id: 'grid-1', type: 'smart_grid', name: 'Grid (DK2)', x: 450, y: 180, params: { import_limit_kw: 500, export_limit_kw: 100, tariff_type: 'dynamic' } },
      ],
      connections: [
        { id: 'c1', from: 'pv-1', to: 'bld-1', type: 'electricity', capacity_kw: 30 },
        { id: 'c2', from: 'grid-1', to: 'bld-1', type: 'electricity', capacity_kw: 500 },
        { id: 'c3', from: 'dh-1', to: 'bld-1', type: 'heat', capacity_kw: 200 },
      ]
    },
    // Paper Scenario 2: High PV Deployment - maximized rooftop PV (~171 kWp)
    scenario_2_high_pv: {
      name: 'Scenario 2: High PV',
      components: [
        { id: 'bld-1', type: 'smart_building', name: 'Office Building', x: 300, y: 180, params: { floors: 5, area_m2: 2000, load_kw: 150, flexible_load_pct: 0 } },
        { id: 'pv-1', type: 'solar_pv', name: 'Maximized Rooftop PV', x: 300, y: 60, params: { capacity_kwp: 171, tilt_deg: 15, azimuth_deg: 180, efficiency: 0.20 } },
        { id: 'dh-1', type: 'district_heating', name: 'District Heating', x: 150, y: 180, params: { supply_temp_c: 70, return_temp_c: 40, capacity_kw: 200 } },
        { id: 'grid-1', type: 'smart_grid', name: 'Grid (DK2)', x: 450, y: 180, params: { import_limit_kw: 500, export_limit_kw: 171, tariff_type: 'dynamic' } },
      ],
      connections: [
        { id: 'c1', from: 'pv-1', to: 'bld-1', type: 'electricity', capacity_kw: 171 },
        { id: 'c2', from: 'pv-1', to: 'grid-1', type: 'electricity', capacity_kw: 100 },
        { id: 'c3', from: 'grid-1', to: 'bld-1', type: 'electricity', capacity_kw: 500 },
        { id: 'c4', from: 'dh-1', to: 'bld-1', type: 'heat', capacity_kw: 200 },
      ]
    },
    // Paper Scenario 3: High PV + Battery (4h) - 171 kWp + 320 kWh battery
    scenario_3_pv_battery: {
      name: 'Scenario 3: PV + Battery (4h)',
      components: [
        { id: 'bld-1', type: 'smart_building', name: 'Office Building', x: 300, y: 180, params: { floors: 5, area_m2: 2000, load_kw: 150, flexible_load_pct: 0 } },
        { id: 'pv-1', type: 'solar_pv', name: 'Rooftop PV (171 kWp)', x: 300, y: 60, params: { capacity_kwp: 171, tilt_deg: 15, azimuth_deg: 180, efficiency: 0.20 } },
        { id: 'bat-1', type: 'battery_storage', name: 'Battery 4h (320 kWh)', x: 450, y: 100, params: { capacity_kwh: 320, power_kw: 80, efficiency: 0.92, initial_soc: 0.5 } },
        { id: 'dh-1', type: 'district_heating', name: 'District Heating', x: 150, y: 180, params: { supply_temp_c: 70, return_temp_c: 40, capacity_kw: 200 } },
        { id: 'grid-1', type: 'smart_grid', name: 'Grid (DK2)', x: 450, y: 260, params: { import_limit_kw: 500, export_limit_kw: 171, tariff_type: 'dynamic' } },
      ],
      connections: [
        { id: 'c1', from: 'pv-1', to: 'bld-1', type: 'electricity', capacity_kw: 150 },
        { id: 'c2', from: 'pv-1', to: 'bat-1', type: 'electricity', capacity_kw: 80 },
        { id: 'c3', from: 'bat-1', to: 'bld-1', type: 'electricity', capacity_kw: 80 },
        { id: 'c4', from: 'grid-1', to: 'bld-1', type: 'electricity', capacity_kw: 500 },
        { id: 'c5', from: 'dh-1', to: 'bld-1', type: 'heat', capacity_kw: 200 },
      ]
    },
    // Paper Scenario 4: High PV + Large Battery - 171 kWp + 640 kWh battery
    scenario_4_large_battery: {
      name: 'Scenario 4: PV + Large Battery',
      components: [
        { id: 'bld-1', type: 'smart_building', name: 'Office Building', x: 300, y: 180, params: { floors: 5, area_m2: 2000, load_kw: 150, flexible_load_pct: 0 } },
        { id: 'pv-1', type: 'solar_pv', name: 'Rooftop PV (171 kWp)', x: 300, y: 60, params: { capacity_kwp: 171, tilt_deg: 15, azimuth_deg: 180, efficiency: 0.20 } },
        { id: 'bat-1', type: 'battery_storage', name: 'Large Battery (640 kWh)', x: 450, y: 100, params: { capacity_kwh: 640, power_kw: 160, efficiency: 0.92, initial_soc: 0.5 } },
        { id: 'dh-1', type: 'district_heating', name: 'District Heating', x: 150, y: 180, params: { supply_temp_c: 70, return_temp_c: 40, capacity_kw: 200 } },
        { id: 'grid-1', type: 'smart_grid', name: 'Grid (DK2)', x: 450, y: 260, params: { import_limit_kw: 500, export_limit_kw: 171, tariff_type: 'dynamic' } },
      ],
      connections: [
        { id: 'c1', from: 'pv-1', to: 'bld-1', type: 'electricity', capacity_kw: 150 },
        { id: 'c2', from: 'pv-1', to: 'bat-1', type: 'electricity', capacity_kw: 160 },
        { id: 'c3', from: 'bat-1', to: 'bld-1', type: 'electricity', capacity_kw: 160 },
        { id: 'c4', from: 'grid-1', to: 'bld-1', type: 'electricity', capacity_kw: 500 },
        { id: 'c5', from: 'dh-1', to: 'bld-1', type: 'heat', capacity_kw: 200 },
      ]
    },
    // Paper Scenario 5: DSM (Flexible Demand) - with demand-side management
    scenario_5_dsm: {
      name: 'Scenario 5: DSM (Flexible)',
      components: [
        { id: 'bld-1', type: 'smart_building', name: 'Smart Office (DSM)', x: 300, y: 180, params: { floors: 5, area_m2: 2000, load_kw: 150, flexible_load_pct: 30 } },
        { id: 'pv-1', type: 'solar_pv', name: 'Rooftop PV (171 kWp)', x: 300, y: 60, params: { capacity_kwp: 171, tilt_deg: 15, azimuth_deg: 180, efficiency: 0.20 } },
        { id: 'bat-1', type: 'battery_storage', name: 'Battery (320 kWh)', x: 450, y: 100, params: { capacity_kwh: 320, power_kw: 80, efficiency: 0.92, initial_soc: 0.5 } },
        { id: 'load-1', type: 'load_center', name: 'Flexible Loads', x: 150, y: 100, params: { base_load_kw: 100, peak_load_kw: 150, dsm_enabled: true } },
        { id: 'dh-1', type: 'district_heating', name: 'District Heating', x: 150, y: 260, params: { supply_temp_c: 70, return_temp_c: 40, capacity_kw: 200 } },
        { id: 'grid-1', type: 'smart_grid', name: 'Grid (DK2)', x: 450, y: 260, params: { import_limit_kw: 500, export_limit_kw: 171, tariff_type: 'dynamic' } },
      ],
      connections: [
        { id: 'c1', from: 'pv-1', to: 'bld-1', type: 'electricity', capacity_kw: 100 },
        { id: 'c2', from: 'pv-1', to: 'bat-1', type: 'electricity', capacity_kw: 80 },
        { id: 'c3', from: 'pv-1', to: 'load-1', type: 'electricity', capacity_kw: 50 },
        { id: 'c4', from: 'bat-1', to: 'bld-1', type: 'electricity', capacity_kw: 80 },
        { id: 'c5', from: 'load-1', to: 'bld-1', type: 'electricity', capacity_kw: 100 },
        { id: 'c6', from: 'grid-1', to: 'bld-1', type: 'electricity', capacity_kw: 500 },
        { id: 'c7', from: 'dh-1', to: 'bld-1', type: 'heat', capacity_kw: 200 },
      ]
    },
    // Additional: Smart District PED
    smart_district: {
      name: 'Smart District PED',
      components: [
        { id: 'bld-1', type: 'smart_building', name: 'Residential A', x: 150, y: 150, params: { floors: 4, area_m2: 1200, load_kw: 80, flexible_load_pct: 40 } },
        { id: 'bld-2', type: 'smart_building', name: 'Residential B', x: 350, y: 150, params: { floors: 4, area_m2: 1200, load_kw: 80, flexible_load_pct: 40 } },
        { id: 'pv-1', type: 'solar_pv', name: 'Community Solar', x: 250, y: 50, params: { capacity_kwp: 300, tilt_deg: 20, azimuth_deg: 180, efficiency: 0.21 } },
        { id: 'bat-1', type: 'battery_storage', name: 'Community Battery', x: 250, y: 270, params: { capacity_kwh: 600, power_kw: 150, efficiency: 0.93, initial_soc: 0.5 } },
        { id: 'hp-1', type: 'heat_pump', name: 'Central Heat Pump', x: 500, y: 150, params: { capacity_kw: 100, cop: 3.8, type: 'ground_source' } },
        { id: 'grid-1', type: 'smart_grid', name: 'Grid PCC', x: 50, y: 270, params: { import_limit_kw: 400, export_limit_kw: 300, tariff_type: 'dynamic' } },
      ],
      connections: [
        { id: 'c1', from: 'pv-1', to: 'bld-1', type: 'electricity', capacity_kw: 100 },
        { id: 'c2', from: 'pv-1', to: 'bld-2', type: 'electricity', capacity_kw: 100 },
        { id: 'c3', from: 'pv-1', to: 'bat-1', type: 'electricity', capacity_kw: 150 },
        { id: 'c4', from: 'bat-1', to: 'bld-1', type: 'electricity', capacity_kw: 80 },
        { id: 'c5', from: 'bat-1', to: 'bld-2', type: 'electricity', capacity_kw: 80 },
        { id: 'c6', from: 'grid-1', to: 'bat-1', type: 'electricity', capacity_kw: 300 },
        { id: 'c7', from: 'hp-1', to: 'bld-1', type: 'heat', capacity_kw: 50 },
        { id: 'c8', from: 'hp-1', to: 'bld-2', type: 'heat', capacity_kw: 50 },
      ]
    },
    // Industrial Microgrid
    industrial_microgrid: {
      name: 'Industrial Microgrid',
      components: [
        { id: 'chp-1', type: 'chp_unit', name: 'CHP Plant', x: 100, y: 100, params: { electrical_kw: 500, thermal_kw: 600, efficiency_e: 0.38, efficiency_th: 0.45 } },
        { id: 'pv-1', type: 'solar_pv', name: 'Rooftop PV', x: 300, y: 50, params: { capacity_kwp: 400, tilt_deg: 15, azimuth_deg: 180, efficiency: 0.20 } },
        { id: 'wind-1', type: 'wind_turbine', name: 'Wind Farm', x: 500, y: 50, params: { capacity_kw: 800, hub_height_m: 80, rotor_diameter_m: 60, cut_in_speed: 3 } },
        { id: 'bat-1', type: 'battery_storage', name: 'Industrial Battery', x: 300, y: 200, params: { capacity_kwh: 2000, power_kw: 500, efficiency: 0.92, initial_soc: 0.6 } },
        { id: 'load-1', type: 'load_center', name: 'Factory Load', x: 500, y: 200, params: { base_load_kw: 600, peak_load_kw: 1200, load_profile: 'industrial' } },
        { id: 'bld-1', type: 'smart_building', name: 'Office Complex', x: 100, y: 300, params: { floors: 6, area_m2: 3000, load_kw: 150, flexible_load_pct: 30 } },
        { id: 'grid-1', type: 'smart_grid', name: 'Utility Grid', x: 300, y: 350, params: { import_limit_kw: 1000, export_limit_kw: 800, tariff_type: 'tou' } },
        { id: 'dh-1', type: 'district_heating', name: 'Heat Network', x: 500, y: 350, params: { supply_temp_c: 90, return_temp_c: 50, capacity_kw: 800 } },
      ],
      connections: [
        { id: 'c1', from: 'chp-1', to: 'bat-1', type: 'electricity', capacity_kw: 500 },
        { id: 'c2', from: 'chp-1', to: 'dh-1', type: 'heat', capacity_kw: 600 },
        { id: 'c3', from: 'pv-1', to: 'bat-1', type: 'electricity', capacity_kw: 400 },
        { id: 'c4', from: 'wind-1', to: 'bat-1', type: 'electricity', capacity_kw: 800 },
        { id: 'c5', from: 'bat-1', to: 'load-1', type: 'electricity', capacity_kw: 500 },
        { id: 'c6', from: 'bat-1', to: 'bld-1', type: 'electricity', capacity_kw: 200 },
        { id: 'c7', from: 'grid-1', to: 'bat-1', type: 'electricity', capacity_kw: 1000 },
        { id: 'c8', from: 'dh-1', to: 'bld-1', type: 'heat', capacity_kw: 200 },
        { id: 'c9', from: 'dh-1', to: 'load-1', type: 'heat', capacity_kw: 400 },
      ]
    },
    // University Campus
    university_campus: {
      name: 'University Campus',
      components: [
        { id: 'pv-1', type: 'solar_pv', name: 'Campus Solar', x: 100, y: 50, params: { capacity_kwp: 600, tilt_deg: 25, azimuth_deg: 180, efficiency: 0.21 } },
        { id: 'pv-2', type: 'solar_pv', name: 'Parking Canopy', x: 300, y: 50, params: { capacity_kwp: 200, tilt_deg: 10, azimuth_deg: 180, efficiency: 0.19 } },
        { id: 'bat-1', type: 'battery_storage', name: 'Central Storage', x: 200, y: 150, params: { capacity_kwh: 1500, power_kw: 400, efficiency: 0.94, initial_soc: 0.5 } },
        { id: 'bld-1', type: 'smart_building', name: 'Science Hall', x: 100, y: 250, params: { floors: 5, area_m2: 4000, load_kw: 200, flexible_load_pct: 25 } },
        { id: 'bld-2', type: 'smart_building', name: 'Library', x: 300, y: 250, params: { floors: 3, area_m2: 2500, load_kw: 120, flexible_load_pct: 35 } },
        { id: 'bld-3', type: 'smart_building', name: 'Dormitory', x: 500, y: 250, params: { floors: 8, area_m2: 5000, load_kw: 180, flexible_load_pct: 50 } },
        { id: 'hp-1', type: 'heat_pump', name: 'Geothermal HP', x: 400, y: 150, params: { capacity_kw: 300, cop: 4.2, type: 'ground_source' } },
        { id: 'ev-1', type: 'ev_charger', name: 'EV Station', x: 500, y: 50, params: { num_ports: 20, power_per_port_kw: 22, smart_charging: true } },
        { id: 'grid-1', type: 'smart_grid', name: 'Campus Grid', x: 200, y: 350, params: { import_limit_kw: 800, export_limit_kw: 500, tariff_type: 'dynamic' } },
      ],
      connections: [
        { id: 'c1', from: 'pv-1', to: 'bat-1', type: 'electricity', capacity_kw: 600 },
        { id: 'c2', from: 'pv-2', to: 'bat-1', type: 'electricity', capacity_kw: 200 },
        { id: 'c3', from: 'bat-1', to: 'bld-1', type: 'electricity', capacity_kw: 200 },
        { id: 'c4', from: 'bat-1', to: 'bld-2', type: 'electricity', capacity_kw: 150 },
        { id: 'c5', from: 'bat-1', to: 'bld-3', type: 'electricity', capacity_kw: 200 },
        { id: 'c6', from: 'hp-1', to: 'bld-1', type: 'heat', capacity_kw: 100 },
        { id: 'c7', from: 'hp-1', to: 'bld-2', type: 'heat', capacity_kw: 80 },
        { id: 'c8', from: 'hp-1', to: 'bld-3', type: 'heat', capacity_kw: 120 },
        { id: 'c9', from: 'pv-2', to: 'ev-1', type: 'electricity', capacity_kw: 200 },
        { id: 'c10', from: 'grid-1', to: 'bat-1', type: 'electricity', capacity_kw: 800 },
      ]
    },
    // Renewable Island
    renewable_island: {
      name: 'Renewable Island Grid',
      components: [
        { id: 'wind-1', type: 'wind_turbine', name: 'Offshore Wind', x: 100, y: 50, params: { capacity_kw: 2000, hub_height_m: 100, rotor_diameter_m: 90, cut_in_speed: 3 } },
        { id: 'pv-1', type: 'solar_pv', name: 'Solar Farm', x: 300, y: 50, params: { capacity_kwp: 1000, tilt_deg: 30, azimuth_deg: 180, efficiency: 0.22 } },
        { id: 'bat-1', type: 'battery_storage', name: 'Grid Battery A', x: 150, y: 180, params: { capacity_kwh: 5000, power_kw: 1500, efficiency: 0.93, initial_soc: 0.7 } },
        { id: 'bat-2', type: 'battery_storage', name: 'Grid Battery B', x: 350, y: 180, params: { capacity_kwh: 5000, power_kw: 1500, efficiency: 0.93, initial_soc: 0.7 } },
        { id: 'chp-1', type: 'chp_unit', name: 'Backup CHP', x: 500, y: 100, params: { electrical_kw: 400, thermal_kw: 500, efficiency_e: 0.35, efficiency_th: 0.45 } },
        { id: 'load-1', type: 'load_center', name: 'Town Center', x: 250, y: 300, params: { base_load_kw: 800, peak_load_kw: 1500, load_profile: 'residential' } },
        { id: 'bld-1', type: 'smart_building', name: 'Resort Hotel', x: 450, y: 300, params: { floors: 10, area_m2: 8000, load_kw: 400, flexible_load_pct: 30 } },
        { id: 'dh-1', type: 'district_heating', name: 'District Heat', x: 100, y: 300, params: { supply_temp_c: 80, return_temp_c: 45, capacity_kw: 600 } },
      ],
      connections: [
        { id: 'c1', from: 'wind-1', to: 'bat-1', type: 'electricity', capacity_kw: 1500 },
        { id: 'c2', from: 'pv-1', to: 'bat-2', type: 'electricity', capacity_kw: 1000 },
        { id: 'c3', from: 'bat-1', to: 'load-1', type: 'electricity', capacity_kw: 1000 },
        { id: 'c4', from: 'bat-2', to: 'load-1', type: 'electricity', capacity_kw: 1000 },
        { id: 'c5', from: 'bat-2', to: 'bld-1', type: 'electricity', capacity_kw: 500 },
        { id: 'c6', from: 'chp-1', to: 'bat-1', type: 'electricity', capacity_kw: 400 },
        { id: 'c7', from: 'chp-1', to: 'dh-1', type: 'heat', capacity_kw: 500 },
        { id: 'c8', from: 'dh-1', to: 'load-1', type: 'heat', capacity_kw: 400 },
        { id: 'c9', from: 'dh-1', to: 'bld-1', type: 'heat', capacity_kw: 200 },
      ]
    },
  };

  const loadTemplate = (templateId: string) => {
    const template = TEMPLATES[templateId];
    if (!template) return;
    if (components.length > 0 && !confirm('This will replace your current design. Continue?')) return;
    // Template layouts were drawn for small icons; spread them out for the cards
    setComponents(template.components.map(c => ({ ...c, x: snap(c.x * 1.4), y: snap(c.y * 1.4) })));
    setConnections(template.connections);
    setConfigName(template.name);
    setSavedId(null); // Reset saved state for new template
    setFitNonce(n => n + 1);
    setSelectedId(null);
    setConnectingFrom(null);
    setLinkedScenarioId(null);
    
    // Auto-link to matching backend scenario (S1-S5)
    const scenarioNum = templateId.match(/scenario_(\d)/)?.[1];
    if (scenarioNum && scenarios.length > 0) {
      const match = scenarios.find(s => 
        s.name.toLowerCase().includes(`scenario ${scenarioNum}`) ||
        s.name.toLowerCase().includes(`s${scenarioNum}`)
      );
      if (match) setLinkedScenarioId(match.id);
    }
  };

  // Mobile tap to add component (since drag doesn't work well on touch)
  const handleMobileTap = (type: DTComponentType) => {
    if (!canvasRef.current) return;
    const def = COMPONENT_DEFS[type];
    const newComp: DTComponent = {
      id: makeId(type),
      type,
      name: def.label,
      ...(() => {
        const rect = canvasRef.current!.getBoundingClientRect();
        const c = toCanvasCoords(rect.left + rect.width / 2, rect.top + rect.height / 2);
        return { x: snap(c.x - NODE_ANCHOR + (Math.random() - 0.5) * 120), y: snap(c.y - NODE_ANCHOR + (Math.random() - 0.5) * 80) };
      })(),
      params: { ...def.defaultParams }
    };
    setComponents(prev => [...prev, newComp]);
    setMobilePanel('canvas');
  };

  const duplicateComponent = (id: string) => {
    const src = components.find(c => c.id === id);
    if (!src) return;
    const copy: DTComponent = { ...src, id: makeId(src.type), name: `${src.name} (copy)`, x: snap(src.x + CARD_W + GRID * 2), y: src.y, params: { ...src.params } };
    setComponents(prev => [...prev, copy]);
    setSelectedId(copy.id);
  };

  // Keyboard: Delete removes the selection, Escape cancels connecting / deselects
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
      if (e.key === 'Escape') {
        setConnectingFrom(null);
        setSelectedId(null);
        setTemplatesOpen(false);
      } else if ((e.key === 'Delete' || e.key === 'Backspace') && selectedId) {
        e.preventDefault();
        if (components.some(c => c.id === selectedId)) deleteComponent(selectedId);
        else deleteConnection(selectedId);
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'd' && selectedId && components.some(c => c.id === selectedId)) {
        e.preventDefault();
        duplicateComponent(selectedId);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Background drag pans the canvas; a click without movement deselects
  const isBackground = (target: EventTarget | null) => {
    const el = target as HTMLElement | null;
    return !!el && !el.closest('.bn-node, .bn-conn-hit, .bn-overlay');
  };
  const onCanvasPointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 || e.pointerType === 'touch' || !isBackground(e.target)) return;
    panRef.current = { startX: e.clientX, startY: e.clientY, viewX: view.x, viewY: view.y, moved: false };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onCanvasPointerMove = (e: React.PointerEvent) => {
    const pan = panRef.current;
    if (pan) {
      const dx = e.clientX - pan.startX, dy = e.clientY - pan.startY;
      if (Math.abs(dx) + Math.abs(dy) > 3) pan.moved = true;
      if (pan.moved) setView(v => ({ ...v, x: pan.viewX + dx, y: pan.viewY + dy }));
    }
    if (connectingFrom && canvasRef.current) setPointer(toCanvasCoords(e.clientX, e.clientY));
  };
  const onCanvasPointerUp = (e: React.PointerEvent) => {
    const pan = panRef.current;
    panRef.current = null;
    if (pan && !pan.moved && isBackground(e.target)) handleCanvasClick();
  };

  // Where a connection leaves a card: intersection of the centre line with the card edge
  const edgePoint = (cx: number, cy: number, tx: number, ty: number) => {
    const dx = tx - cx, dy = ty - cy;
    if (!dx && !dy) return { x: cx, y: cy };
    const s = Math.min((CARD_W / 2 + 4) / Math.abs(dx || 1e-9), (CARD_H / 2 + 4) / Math.abs(dy || 1e-9));
    return { x: cx + dx * s, y: cy + dy * s };
  };
  const connPath = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const dx = b.x - a.x, dy = b.y - a.y;
    const horizontal = Math.abs(dx) >= Math.abs(dy);
    const c = (horizontal ? Math.abs(dx) : Math.abs(dy)) * 0.45;
    return horizontal
      ? `M${a.x},${a.y} C${a.x + Math.sign(dx) * c},${a.y} ${b.x - Math.sign(dx) * c},${b.y} ${b.x},${b.y}`
      : `M${a.x},${a.y} C${a.x},${a.y + Math.sign(dy) * c} ${b.x},${b.y - Math.sign(dy) * c} ${b.x},${b.y}`;
  };
  const CONN_COLORS: Record<DTConnection['type'], string> = { electricity: '#38bdf8', heat: '#fb7a4a', both: '#c084fc' };
  const canConnectTo = (id: string) => !!connectingFrom && connectingFrom !== id && validateConnection(connectingFrom, id).valid;

  const TEMPLATE_MENU: { group: string; items: { id: string; label: string; hint: string }[] }[] = [
    { group: 'Paper scenarios', items: [
      { id: 'scenario_1_baseline', label: 'S1 · Baseline', hint: '30 kWp existing PV, no battery' },
      { id: 'scenario_2_high_pv', label: 'S2 · High PV', hint: '171 kWp rooftop PV' },
      { id: 'scenario_3_pv_battery', label: 'S3 · PV + battery', hint: '171 kWp + 320 kWh (4 h)' },
      { id: 'scenario_4_large_battery', label: 'S4 · Large battery', hint: '171 kWp + 640 kWh' },
      { id: 'scenario_5_dsm', label: 'S5 · Demand flexibility', hint: 'PV + battery + 30 % DSM' },
    ] },
    { group: 'Other designs', items: [
      { id: 'smart_district', label: 'Smart district', hint: 'Two residential blocks, community PV and battery' },
      { id: 'industrial_microgrid', label: 'Industrial microgrid', hint: 'CHP, PV, storage and process loads' },
      { id: 'university_campus', label: 'University campus', hint: 'Several buildings, heat pumps, EV charging' },
      { id: 'renewable_island', label: 'Renewable island', hint: 'Wind, PV and storage, weak grid' },
    ] },
  ];

  const q = paletteQuery.trim().toLowerCase();
  const pedPct = Math.min(ped.ratio, 1.5) / 1.5 * 100;

  return (
    <div className="dt-builder-container bn">
      {/* Mobile Tab Bar */}
      <div className="dt-mobile-tabs">
        <button className={mobilePanel === 'palette' ? 'active' : ''} onClick={() => setMobilePanel('palette')}>Components</button>
        <button className={mobilePanel === 'canvas' ? 'active' : ''} onClick={() => setMobilePanel('canvas')}>Canvas</button>
        <button className={mobilePanel === 'properties' ? 'active' : ''} onClick={() => setMobilePanel('properties')}>Properties</button>
      </div>

      <div className="dt-builder-main">
        {/* ---------------- Left: component library + PED estimate ---------------- */}
        <aside className={`dt-panel dt-palette-panel bn-side ${mobilePanel === 'palette' ? 'mobile-visible' : ''}`}>
          <div className="bn-side-head">
            <h3>Components</h3>
            <span className="muted small">Drag onto the canvas, or click to add</span>
          </div>
          <input className="bn-search" placeholder="Search components…" value={paletteQuery} onChange={e => setPaletteQuery(e.target.value)} aria-label="Search components" />
          <div className="dt-component-list bn-palette">
            {PALETTE_GROUPS.map(group => {
              const items = group.types.filter(t => !q || COMPONENT_DEFS[t].label.toLowerCase().includes(q) || COMPONENT_DEFS[t].description.toLowerCase().includes(q));
              if (items.length === 0) return null;
              return (
                <div key={group.title} className="bn-group">
                  <div className="bn-group-title">{group.title}</div>
                  {items.map(type => {
                    const def = COMPONENT_DEFS[type];
                    return (
                      <div
                        key={type}
                        className="bn-palette-item"
                        draggable
                        role="button"
                        tabIndex={0}
                        onDragStart={e => handleDragStart(type, e)}
                        onDragEnd={() => setDraggedType(null)}
                        onClick={() => handleMobileTap(type)}
                        onKeyDown={e => { if (e.key === 'Enter') handleMobileTap(type); }}
                        title={def.description}
                        style={{ ['--tc' as string]: def.color }}
                      >
                        <span className="bn-icon-tile"><DeviceIcon type={type} size={20} /></span>
                        <span className="bn-palette-text">
                          <span className="bn-palette-label">{def.label}</span>
                          <span className="bn-palette-desc">{def.description}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          <div className="bn-ped">
            <div className="row between">
              <span className="bn-ped-title">Quick PED estimate</span>
              <span className={`badge ${ped.isPed ? 'badge-live' : ped.annualLoadMwh > 0 ? 'badge-bad' : 'badge-idle'}`}>
                {ped.annualLoadMwh > 0 ? (ped.isPed ? 'PED' : `${(ped.ratio * 100).toFixed(0)}%`) : 'No load'}
              </span>
            </div>
            {ped.annualLoadMwh > 0 ? (
              <>
                <div className="ped-gauge">
                  <div className="ped-gauge-track">
                    <div className={`ped-gauge-fill ${ped.isPed ? 'is-good' : ''}`} style={{ width: `${pedPct}%` }} />
                    <div className="ped-gauge-target" style={{ left: `${100 / 1.5}%` }} />
                  </div>
                  <div className="ped-gauge-scale"><span>0</span><span>1.0 target</span><span>1.5+</span></div>
                </div>
                <dl className="bn-kv">
                  <dt>Generation</dt><dd className="tone-good">{ped.annualGenMwh.toFixed(0)} MWh/y</dd>
                  <dt>Consumption</dt><dd className="tone-bad">{ped.annualLoadMwh.toFixed(0)} MWh/y</dd>
                  <dt>Balance</dt><dd className={ped.netBalance >= 0 ? 'tone-good' : 'tone-bad'}>{ped.netBalance >= 0 ? '+' : ''}{ped.netBalance.toFixed(0)} MWh/y</dd>
                  <dt>Self-sufficiency</dt><dd>{(ped.selfSufficiencyRate * 100).toFixed(0)}%</dd>
                  <dt>Grid import / export</dt><dd>{ped.gridImportMwh.toFixed(0)} / {ped.gridExportMwh.toFixed(0)} MWh</dd>
                  <dt>Est. CAPEX</dt><dd>€{(ped.totalCapex / 1000).toFixed(0)}k</dd>
                  <dt>CO₂ avoided</dt><dd>{(ped.co2Savings / 1000).toFixed(1)} t/y</dd>
                </dl>
                {!ped.isPed && ped.shortfallKw > 0 && (
                  <div className="bn-tip">Roughly <b>{ped.shortfallKw.toFixed(0)} kWp</b> more PV would close the gap.</div>
                )}
                <p className="bn-fine">Rule-of-thumb figures. Run a simulation, or ask the Copilot, for results based on real 10-minute data.</p>
              </>
            ) : (
              <p className="muted small">Add a building or load centre to estimate the annual energy balance.</p>
            )}
          </div>
        </aside>

        {/* ---------------- Centre: canvas ---------------- */}
        <section className={`dt-panel dt-canvas-panel ${mobilePanel === 'canvas' ? 'mobile-visible' : ''}`}>
          <div className="dt-toolbar bn-toolbar">
            <input className="bn-title" value={configName} onChange={e => setConfigName(e.target.value)} aria-label="Design name" />
            <span className="dt-toolbar-info bn-chip">{components.length} components · {connections.length} links</span>
            {apiBase && linkedScenarioId && (
              <span className="bn-chip bn-chip-accent" title="Linked scenario">
                {scenarios.find(s => s.id === linkedScenarioId)?.name || 'Linked scenario'}
                <button className="chip-remove" onClick={() => setLinkedScenarioId(null)} aria-label="Unlink scenario">✕</button>
              </span>
            )}
            <div className="bn-toolbar-right">
              <div className="bn-menu">
                <button className="btn btn-secondary btn-sm" onClick={() => setTemplatesOpen(o => !o)} aria-expanded={templatesOpen}>Templates ▾</button>
                {templatesOpen && (
                  <div className="bn-menu-pop" role="menu">
                    {TEMPLATE_MENU.map(g => (
                      <div key={g.group}>
                        <div className="bn-group-title">{g.group}</div>
                        {g.items.map(t => (
                          <button key={t.id} role="menuitem" className="bn-menu-item" onClick={() => { setTemplatesOpen(false); loadTemplate(t.id); setMobilePanel('canvas'); }}>
                            <span>{t.label}</span>
                            <span className="muted small">{t.hint}</span>
                          </button>
                        ))}
                      </div>
                    ))}
                    <div className="bn-menu-sep" />
                    <button className="bn-menu-item" onClick={() => { setTemplatesOpen(false); exportConfig(); }}><span>Export as JSON</span></button>
                    <label className="bn-menu-item" style={{ cursor: 'pointer' }}>
                      <span>Import JSON…</span>
                      <input type="file" accept=".json" onChange={e => { setTemplatesOpen(false); importConfig(e); }} style={{ display: 'none' }} />
                    </label>
                    {apiBase && <button className="bn-menu-item" disabled={components.length === 0} onClick={() => { setTemplatesOpen(false); createScenarioFromDT(); }}><span>Create scenario from design</span></button>}
                    <button className="bn-menu-item bn-danger" onClick={() => { setTemplatesOpen(false); clearAll(); }}><span>Clear canvas</span></button>
                  </div>
                )}
              </div>
              {apiBase && (
                <>
                  <button className="btn btn-secondary btn-sm" onClick={saveToBackend} disabled={saving || components.length === 0}>
                    {saving ? 'Saving…' : savedId ? 'Save' : 'Save twin'}
                  </button>
                  <button className="btn btn-primary btn-sm" onClick={runSimulation} disabled={running || components.length === 0}>
                    {running ? 'Starting…' : '▶ Run simulation'}
                  </button>
                </>
              )}
            </div>
          </div>

          <div
            ref={canvasRef}
            className={`bn-canvas ${connectingFrom ? 'is-connecting' : ''}`}
            onDrop={handleDrop}
            onDragOver={e => e.preventDefault()}
            onPointerDown={onCanvasPointerDown}
            onPointerMove={onCanvasPointerMove}
            onPointerUp={onCanvasPointerUp}
            onPointerLeave={() => setPointer(null)}
            onTouchStart={e => { if (e.touches.length === 2) handlePinchStart(e); }}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              backgroundSize: `${GRID * zoom}px ${GRID * zoom}px`,
              backgroundPosition: `${view.x}px ${view.y}px`,
              touchAction: touchDrag || pinchStart ? 'none' : 'pan-x pan-y',
            }}
          >
            {/* Pannable / zoomable content */}
            <div className="bn-content" style={{ transform: `translate(${view.x}px, ${view.y}px) scale(${zoom})` }}>
              <svg className="bn-links" width={1} height={1}>
                <defs>
                  {(Object.keys(CONN_COLORS) as DTConnection['type'][]).map(t => (
                    <marker key={t} id={`${markerId}-${t}`} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto" markerUnits="userSpaceOnUse">
                      <path d="M0,0.5 L8,4.5 L0,8.5 z" fill={CONN_COLORS[t]} />
                    </marker>
                  ))}
                </defs>
                {connections.map(conn => {
                  const a = components.find(c => c.id === conn.from);
                  const b = components.find(c => c.id === conn.to);
                  if (!a || !b) return null;
                  const ac = { x: a.x + NODE_ANCHOR, y: a.y + NODE_ANCHOR };
                  const bc = { x: b.x + NODE_ANCHOR, y: b.y + NODE_ANCHOR };
                  const p1 = edgePoint(ac.x, ac.y, bc.x, bc.y);
                  const p2 = edgePoint(bc.x, bc.y, ac.x, ac.y);
                  const d = connPath(p1, p2);
                  const color = CONN_COLORS[conn.type] ?? CONN_COLORS.electricity;
                  const active = selectedId === conn.id || hoverConn === conn.id;
                  return (
                    <g key={conn.id}>
                      {active && <path d={d} stroke={color} strokeOpacity={0.25} strokeWidth={9} fill="none" />}
                      <path d={d} stroke={color} strokeWidth={active ? 3 : 2.2} fill="none" strokeDasharray={conn.type === 'heat' ? '7 5' : undefined} markerEnd={`url(#${markerId}-${conn.type})`} />
                      <path d={d} className="bn-flow" stroke="#fff" strokeOpacity={0.85} strokeWidth={2.2} fill="none" />
                      <path
                        d={d}
                        className="bn-conn-hit"
                        stroke="transparent"
                        strokeWidth={14}
                        fill="none"
                        onClick={e => { e.stopPropagation(); setSelectedId(conn.id); setConnectingFrom(null); }}
                        onMouseEnter={() => setHoverConn(conn.id)}
                        onMouseLeave={() => setHoverConn(h => (h === conn.id ? null : h))}
                      />
                      {active && (
                        <g transform={`translate(${(p1.x + p2.x) / 2},${(p1.y + p2.y) / 2})`} className="bn-overlay">
                          <rect x={-34} y={-11} width={68} height={22} rx={11} fill="#0b1120" stroke={color} strokeOpacity={0.7} />
                          <text textAnchor="middle" dominantBaseline="central" fill="#e6ecf5" fontSize={11} fontWeight={600}>
                            {conn.capacity_kw ? `${conn.capacity_kw} kW` : conn.type}
                          </text>
                        </g>
                      )}
                    </g>
                  );
                })}
                {/* Rubber band while connecting */}
                {connectingFrom && pointer && (() => {
                  const src = components.find(c => c.id === connectingFrom);
                  if (!src) return null;
                  const sc = { x: src.x + NODE_ANCHOR, y: src.y + NODE_ANCHOR };
                  return <path d={connPath(edgePoint(sc.x, sc.y, pointer.x, pointer.y), pointer)} stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fill="none" />;
                })()}
              </svg>

              {components.map(comp => {
                const def = COMPONENT_DEFS[comp.type];
                const isSelected = selectedId === comp.id;
                const isSource = connectingFrom === comp.id;
                const status = getComponentStatus(comp.id);
                const target = connectingFrom && !isSource ? (canConnectTo(comp.id) ? 'ok' : 'no') : null;
                return (
                  <div
                    key={comp.id}
                    className={`bn-node ${isSelected ? 'is-selected' : ''} ${isSource ? 'is-source' : ''} ${target === 'ok' ? 'is-target' : ''} ${target === 'no' ? 'is-disabled' : ''}`}
                    draggable
                    onDragStart={e => handleComponentDragStart(comp.id, e)}
                    onDragEnd={() => { moveDragRef.current = null; }}
                    onClick={e => handleComponentClick(comp.id, e)}
                    onTouchStart={e => handleTouchStart(comp.id, e)}
                    style={{
                      left: comp.x + NODE_ANCHOR - CARD_W / 2,
                      top: comp.y + NODE_ANCHOR - CARD_H / 2,
                      width: CARD_W,
                      height: CARD_H,
                      ['--tc' as string]: def.color,
                      transition: touchDrag?.id === comp.id ? 'none' : undefined,
                    }}
                  >
                    <span className="bn-icon-tile"><DeviceIcon type={comp.type} size={22} /></span>
                    <span className="bn-node-text">
                      <span className="bn-node-name" title={comp.name}>{comp.name}</span>
                      <span className="bn-node-spec">{specLine(comp.type, comp.params)}</span>
                    </span>
                    <span className={`bn-status ${status === 'valid' ? 'is-ok' : 'is-warn'}`} title={status === 'valid' ? 'Connected' : 'Not connected yet'} />
                    <button
                      className="bn-port"
                      title="Drag a link: click here, then click another component"
                      aria-label={`Connect ${comp.name}`}
                      onPointerDown={e => e.stopPropagation()}
                      onClick={e => { e.stopPropagation(); startConnection(comp.id); setPointer(null); }}
                    >+</button>
                  </div>
                );
              })}
            </div>

            {components.length === 0 && (
              <div className="bn-empty bn-overlay">
                <div className="bn-empty-icons">
                  <DeviceIcon type="solar_pv" size={30} color="#f5b83d" />
                  <DeviceIcon type="smart_building" size={34} color="#94a3b8" />
                  <DeviceIcon type="battery_storage" size={30} color="#2fc59b" />
                </div>
                <h3>Design your energy district</h3>
                <p className="muted small">Drag components from the left onto the canvas, then link them with the <b>+</b> port.</p>
                <button className="btn btn-primary btn-sm" onClick={() => setTemplatesOpen(true)}>Start from a template</button>
              </div>
            )}

            {connectingFrom && (
              <div className="bn-hint bn-overlay">
                Click a highlighted component to link it · <kbd>Esc</kbd> to cancel
              </div>
            )}

            <div className="bn-legend bn-overlay">
              {(Object.keys(CONN_COLORS) as DTConnection['type'][]).map(t => (
                <span key={t}><i style={{ background: CONN_COLORS[t] }} />{t === 'both' ? 'Electricity + heat' : t === 'heat' ? 'Heat' : 'Electricity'}</span>
              ))}
            </div>
            <div className="bn-zoom bn-overlay">
              <button onClick={() => zoomAround(zoom / 1.2)} aria-label="Zoom out">−</button>
              <button onClick={() => setView(v => ({ ...v, k: 1 }))} className="bn-zoom-pct" title="Reset to 100%">{Math.round(zoom * 100)}%</button>
              <button onClick={() => zoomAround(zoom * 1.2)} aria-label="Zoom in">+</button>
              <button onClick={fitView} title="Fit all components in view">Fit</button>
            </div>

            {notice && (
              <div className={`bn-toast bn-overlay ${notice.tone === 'error' ? 'is-error' : ''}`} role={notice.tone === 'error' ? 'alert' : 'status'}>
                {notice.text}
              </div>
            )}
          </div>
        </section>

        {/* ---------------- Right: properties ---------------- */}
        <aside className={`dt-panel dt-properties-panel bn-side ${mobilePanel === 'properties' ? 'mobile-visible' : ''}`}>
          {selectedComp ? (() => {
            const def = COMPONENT_DEFS[selectedComp.type];
            const links = connections.filter(c => c.from === selectedComp.id || c.to === selectedComp.id);
            return (
              <div className="bn-props">
                <div className="bn-props-head" style={{ ['--tc' as string]: def.color }}>
                  <span className="bn-icon-tile lg"><DeviceIcon type={selectedComp.type} size={26} /></span>
                  <div>
                    <div className="bn-props-type">{def.label}</div>
                    <div className="muted small">{def.description}</div>
                  </div>
                </div>
                <label className="field">
                  <span className="field-label">Name</span>
                  <input value={selectedComp.name} onChange={e => setComponents(prev => prev.map(c => c.id === selectedComp.id ? { ...c, name: e.target.value } : c))} />
                </label>
                <div className="bn-section">Parameters</div>
                <div className="bn-fields">
                  {Object.entries(selectedComp.params).map(([key, val]) => {
                    const meta = paramMeta(key);
                    return (
                      <label key={key} className={`field ${typeof val === 'boolean' ? 'field-inline' : ''}`}>
                        <span className="field-label">{meta.label}</span>
                        {typeof val === 'boolean' ? (
                          <span className="bn-switch">
                            <input type="checkbox" checked={val} onChange={e => updateComponentParam(selectedComp.id, key, e.target.checked)} />
                            <span>{val ? 'On' : 'Off'}</span>
                          </span>
                        ) : typeof val === 'number' ? (
                          <NumberField value={val} step={meta.step} min={meta.min} max={meta.max} unit={meta.unit} onChange={v => updateComponentParam(selectedComp.id, key, v)} />
                        ) : meta.options ? (
                          <select value={String(val)} onChange={e => updateComponentParam(selectedComp.id, key, e.target.value)}>
                            {meta.options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                            {!meta.options.some(o => o.value === val) && <option value={String(val)}>{String(val)}</option>}
                          </select>
                        ) : (
                          <input value={String(val)} onChange={e => updateComponentParam(selectedComp.id, key, e.target.value)} />
                        )}
                        {meta.hint && <span className="field-hint">{meta.hint}</span>}
                      </label>
                    );
                  })}
                </div>
                <div className="bn-section">Links ({links.length})</div>
                {links.length === 0 ? (
                  <p className="muted small">Not connected yet. Use <b>Connect</b> or the <b>+</b> port on the card.</p>
                ) : (
                  <ul className="bn-links-list">
                    {links.map(l => {
                      const other = components.find(c => c.id === (l.from === selectedComp.id ? l.to : l.from));
                      return (
                        <li key={l.id}>
                          <button onClick={() => setSelectedId(l.id)}>
                            <i style={{ background: CONN_COLORS[l.type] }} />
                            {l.from === selectedComp.id ? '→' : '←'} {other?.name ?? '—'}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
                <div className="bn-actions">
                  <button className="btn btn-primary btn-sm" onClick={() => startConnection(selectedComp.id)}>Connect…</button>
                  <button className="btn btn-secondary btn-sm" onClick={() => duplicateComponent(selectedComp.id)} title="Ctrl/⌘ + D">Duplicate</button>
                  <button className="btn btn-ghost btn-sm btn-danger" onClick={() => deleteComponent(selectedComp.id)} title="Delete key">Delete</button>
                </div>
              </div>
            );
          })() : connections.find(c => c.id === selectedId) ? (() => {
            const conn = connections.find(c => c.id === selectedId)!;
            const fromComp = components.find(c => c.id === conn.from);
            const toComp = components.find(c => c.id === conn.to);
            return (
              <div className="bn-props">
                <div className="bn-section" style={{ marginTop: 0 }}>Connection</div>
                <div className="bn-conn-ends">
                  {fromComp && <span className="bn-conn-end" style={{ ['--tc' as string]: COMPONENT_DEFS[fromComp.type].color }}><DeviceIcon type={fromComp.type} size={16} />{fromComp.name}</span>}
                  <span className="muted">→</span>
                  {toComp && <span className="bn-conn-end" style={{ ['--tc' as string]: COMPONENT_DEFS[toComp.type].color }}><DeviceIcon type={toComp.type} size={16} />{toComp.name}</span>}
                </div>
                <div className="field">
                  <span className="field-label">Carrier</span>
                  <div className="segmented">
                    {(['electricity', 'heat', 'both'] as const).map(t => (
                      <button key={t} className={conn.type === t ? 'is-active' : ''} onClick={() => setConnections(prev => prev.map(c => c.id === conn.id ? { ...c, type: t } : c))}>
                        {t === 'both' ? 'Both' : t === 'heat' ? 'Heat' : 'Electricity'}
                      </button>
                    ))}
                  </div>
                </div>
                <label className="field">
                  <span className="field-label">Capacity</span>
                  <NumberField value={conn.capacity_kw || 0} step={10} min={0} unit="kW" onChange={v => setConnections(prev => prev.map(c => c.id === conn.id ? { ...c, capacity_kw: v } : c))} />
                </label>
                <div className="bn-actions">
                  <button className="btn btn-ghost btn-sm btn-danger" onClick={() => deleteConnection(conn.id)}>Delete connection</button>
                </div>
              </div>
            );
          })() : (
            <div className="bn-props">
              <div className="bn-section" style={{ marginTop: 0 }}>Properties</div>
              <p className="muted small">Select a component or a connection to edit it.</p>
              <div className="bn-section">Design summary</div>
              <dl className="bn-kv">
                {PALETTE_GROUPS.map(g => {
                  const count = components.filter(c => g.types.includes(c.type)).length;
                  return <Fragment key={g.title}><dt>{g.title}</dt><dd>{count}</dd></Fragment>;
                })}
                <dt>Links</dt><dd>{connections.length}</dd>
                <dt>Unconnected</dt><dd className={components.some(c => getComponentStatus(c.id) !== 'valid') ? 'tone-bad' : ''}>{components.filter(c => getComponentStatus(c.id) !== 'valid').length}</dd>
              </dl>
              <div className="bn-section">Shortcuts</div>
              <ul className="bn-shortcuts">
                <li><kbd>Drag</kbd> background to pan</li>
                <li><kbd>Ctrl</kbd>/<kbd>⌘</kbd> + scroll to zoom</li>
                <li><kbd>Del</kbd> delete selection</li>
                <li><kbd>Ctrl</kbd>/<kbd>⌘</kbd> + <kbd>D</kbd> duplicate</li>
                <li><kbd>Esc</kbd> cancel / deselect</li>
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default DigitalTwinBuilder;
