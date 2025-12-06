import { useState, useRef, useCallback, useEffect } from 'react';

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

interface Props {
  onConfigChange?: (config: DigitalTwinConfig) => void;
  initialConfig?: DigitalTwinConfig | null;
  apiBase?: string;
  onRunSimulation?: (runId: string) => void;
}

export function DigitalTwinBuilder({ onConfigChange, initialConfig, apiBase, onRunSimulation }: Props) {
  const [components, setComponents] = useState<DTComponent[]>(initialConfig?.components || []);
  const [connections, setConnections] = useState<DTConnection[]>(initialConfig?.connections || []);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [connectingFrom, setConnectingFrom] = useState<string | null>(null);
  const [configName, setConfigName] = useState(initialConfig?.name || 'My Digital Twin');
  const [draggedType, setDraggedType] = useState<DTComponentType | null>(null);
  // Only use savedId if it's a real backend ID (numeric), not client-generated (dt-*)
  const [savedId, setSavedId] = useState<string | null>(() => {
    const id = initialConfig?.id;
    if (id && /^\d+$/.test(id)) return id; // numeric backend ID
    return null;
  });
  const [saving, setSaving] = useState(false);
  const [running, setRunning] = useState(false);
  const [scenarios, setScenarios] = useState<Array<{ id: string; name: string }>>([]);
  const [linkedScenarioId, setLinkedScenarioId] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

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
    fetch(join('/scenarios'))
      .then(r => r.json())
      .then(data => setScenarios(data || []))
      .catch(() => {});
  }, [apiBase]);

  // Load saved config from localStorage
  useEffect(() => {
    if (!initialConfig) {
      try {
        const saved = localStorage.getItem('dt_builder_config');
        if (saved) {
          const cfg = JSON.parse(saved) as DigitalTwinConfig;
          setComponents(cfg.components || []);
          setConnections(cfg.connections || []);
          setConfigName(cfg.name || 'My Digital Twin');
        }
      } catch {}
    }
  }, [initialConfig]);

  // Save and notify on changes
  useEffect(() => {
    const config: DigitalTwinConfig = {
      id: initialConfig?.id || `dt-${Date.now()}`,
      name: configName,
      components,
      connections,
      created_at: initialConfig?.created_at || new Date().toISOString()
    };
    try {
      localStorage.setItem('dt_builder_config', JSON.stringify(config));
    } catch {}
    onConfigChange?.(config);
  }, [components, connections, configName, onConfigChange, initialConfig]);

  const handleDragStart = (type: DTComponentType) => {
    setDraggedType(type);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedType || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const def = COMPONENT_DEFS[draggedType];
    const newComp: DTComponent = {
      id: `${draggedType}-${Date.now()}`,
      type: draggedType,
      name: def.label,
      x,
      y,
      params: { ...def.defaultParams }
    };
    
    setComponents(prev => [...prev, newComp]);
    setDraggedType(null);
  }, [draggedType]);

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === canvasRef.current) {
      setSelectedId(null);
      setConnectingFrom(null);
    }
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
        alert(validation.error);
        setConnectingFrom(null);
        return;
      }
      const newConn: DTConnection = {
        id: `conn-${Date.now()}`,
        from: connectingFrom,
        to: id,
        type: validation.type,
        capacity_kw: 100
      };
      setConnections(prev => [...prev, newConn]);
      setConnectingFrom(null);
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
  };

  const deleteConnection = (id: string) => {
    setConnections(prev => prev.filter(c => c.id !== id));
  };

  const updateComponentParam = (id: string, key: string, value: number | string | boolean) => {
    setComponents(prev => prev.map(c => 
      c.id === id ? { ...c, params: { ...c.params, [key]: value } } : c
    ));
  };

  const updateComponentPosition = (id: string, x: number, y: number) => {
    setComponents(prev => prev.map(c => c.id === id ? { ...c, x, y } : c));
  };

  const handleComponentDrag = (id: string, e: React.DragEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x > 0 && y > 0) updateComponentPosition(id, x, y);
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
    const isPed = netBalance >= 0;
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
      setSavedId(null);
    }
  };

  // Save digital twin to backend
  const saveToBackend = async () => {
    if (!apiBase) return;
    setSaving(true);
    try {
      const payload = {
        name: configName,
        description: `Digital twin with ${components.length} components`,
        components: components.map(c => ({ ...c })),
        connections: connections.map(c => ({ ...c })),
      };
      
      const url = savedId ? join(`/digital-twins/${savedId}`) : join('/digital-twins');
      const method = savedId ? 'PATCH' : 'POST';
      
      const r = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      if (r.ok) {
        const data = await r.json();
        setSavedId(data.id);
        alert('Saved successfully!');
      } else {
        alert('Save failed: ' + (await r.text()));
      }
    } catch (e: any) {
      alert('Save error: ' + e.message);
    } finally {
      setSaving(false);
    }
  };

  // Run simulation from this digital twin
  const runSimulation = async () => {
    if (!apiBase) {
      alert('API not configured');
      return;
    }
    if (components.length === 0) {
      alert('Please add components to your digital twin first');
      return;
    }
    
    setRunning(true);
    try {
      // Auto-save if not saved yet
      let dtId = savedId;
      if (!dtId) {
        const savePayload = {
          name: configName,
          description: `Digital twin with ${components.length} components`,
          components: components.map(c => ({ ...c })),
          connections: connections.map(c => ({ ...c })),
        };
        const saveRes = await fetch(join('/digital-twins'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(savePayload),
        });
        if (!saveRes.ok) {
          alert('Failed to save: ' + (await saveRes.text()));
          return;
        }
        const saveData = await saveRes.json();
        dtId = saveData.id;
        setSavedId(dtId);
      }
      
      // Now run the simulation
      const r = await fetch(join(`/digital-twins/${dtId}/run`), { method: 'POST' });
      if (r.ok) {
        const data = await r.json();
        onRunSimulation?.(data.id);
      } else {
        alert('Run failed: ' + (await r.text()));
      }
    } catch (e: any) {
      alert('Run error: ' + (e?.message || String(e)));
    } finally {
      setRunning(false);
    }
  };

  // Create scenario from digital twin config
  const createScenarioFromDT = async () => {
    if (!apiBase) {
      alert('API not configured');
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
        if (sr.ok) setScenarios(await sr.json());
        alert('Scenario created! You can now run it from the Scenarios tab.');
      } else {
        const errText = await r.text();
        alert('Failed to create scenario: ' + errText);
      }
    } catch (e: any) {
      console.error('Create scenario error:', e);
      alert('Error creating scenario: ' + (e?.message || String(e)));
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
    URL.revokeObjectURL(url);
  };

  const importConfig = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const cfg = JSON.parse(ev.target?.result as string) as DigitalTwinConfig;
        setComponents(cfg.components || []);
        setConnections(cfg.connections || []);
        setConfigName(cfg.name || 'Imported Config');
      } catch { alert('Invalid config file'); }
    };
    reader.readAsText(file);
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
  };

  const loadTemplate = (templateId: string) => {
    const template = TEMPLATES[templateId];
    if (!template) return;
    if (components.length > 0 && !confirm('This will replace your current design. Continue?')) return;
    setComponents(template.components);
    setConnections(template.connections);
    setConfigName(template.name);
    setSavedId(null); // Reset saved state for new template
    
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

  return (
    <div style={{ display: 'flex', height: '100%', background: '#0f172a', color: '#e2e8f0' }}>
      {/* Left Panel - Component Palette */}
      <div style={{ width: 220, borderRight: '1px solid #334155', padding: 12, overflowY: 'auto' }}>
        <h3 style={{ margin: '0 0 12px', fontSize: 14, color: '#94a3b8' }}>Components</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {COMPONENT_LIST.map(comp => (
            <div
              key={comp.type}
              draggable
              onDragStart={() => handleDragStart(comp.type)}
              style={{
                padding: '8px 10px',
                background: '#1e293b',
                borderRadius: 6,
                cursor: 'grab',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                border: `2px solid ${comp.color}33`,
                transition: 'all 0.15s'
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = comp.color)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = `${comp.color}33`)}
              title={comp.description}
            >
              <span style={{ fontSize: 20 }}>{comp.icon}</span>
              <span style={{ fontSize: 12 }}>{comp.label}</span>
            </div>
          ))}
        </div>

        {/* PED Dashboard */}
        <div style={{ marginTop: 20, padding: 10, background: '#1e293b', borderRadius: 8, fontSize: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <h4 style={{ margin: 0, fontSize: 12, color: '#94a3b8' }}>PED Status</h4>
            <span style={{ padding: '2px 6px', borderRadius: 4, fontSize: 9, background: ped.isPed ? '#166534' : '#7f1d1d' }}>
              {ped.isPed ? '✓ PED' : `${(ped.ratio * 100).toFixed(0)}%`}
            </span>
          </div>
          
          {/* Annual Energy Balance Bar */}
          <div style={{ marginBottom: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
              <span style={{ color: '#64748b' }}>Annual Balance</span>
              <span style={{ color: ped.netBalance >= 0 ? '#22c55e' : '#ef4444' }}>
                {ped.netBalance >= 0 ? '+' : ''}{ped.netBalance.toFixed(1)} MWh
              </span>
            </div>
            <div style={{ height: 6, background: '#334155', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ 
                height: '100%', 
                width: `${Math.min(ped.ratio * 100, 100)}%`,
                background: ped.isPed ? 'linear-gradient(90deg, #22c55e, #16a34a)' : 'linear-gradient(90deg, #ef4444, #dc2626)',
                borderRadius: 3
              }} />
            </div>
          </div>

          {/* Key Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginBottom: 8 }}>
            <div style={{ padding: 4, background: '#0f172a', borderRadius: 4 }}>
              <div style={{ color: '#64748b', fontSize: 9 }}>Generation</div>
              <div style={{ color: '#22c55e', fontWeight: 600 }}>{ped.annualGenMwh.toFixed(0)} MWh/y</div>
            </div>
            <div style={{ padding: 4, background: '#0f172a', borderRadius: 4 }}>
              <div style={{ color: '#64748b', fontSize: 9 }}>Consumption</div>
              <div style={{ color: '#ef4444', fontWeight: 600 }}>{ped.annualLoadMwh.toFixed(0)} MWh/y</div>
            </div>
            <div style={{ padding: 4, background: '#0f172a', borderRadius: 4 }}>
              <div style={{ color: '#64748b', fontSize: 9 }}>Self-Consumption</div>
              <div style={{ color: '#eab308', fontWeight: 600 }}>{(ped.selfConsumptionRate * 100).toFixed(0)}%</div>
            </div>
            <div style={{ padding: 4, background: '#0f172a', borderRadius: 4 }}>
              <div style={{ color: '#64748b', fontSize: 9 }}>Self-Sufficiency</div>
              <div style={{ color: '#3b82f6', fontWeight: 600 }}>{(ped.selfSufficiencyRate * 100).toFixed(0)}%</div>
            </div>
          </div>

          {/* Grid Interaction */}
          <div style={{ padding: 6, background: '#0f172a', borderRadius: 4, marginBottom: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Grid Import:</span>
              <span style={{ color: '#f97316' }}>{ped.gridImportMwh.toFixed(1)} MWh/y</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>Grid Export:</span>
              <span style={{ color: '#22c55e' }}>{ped.gridExportMwh.toFixed(1)} MWh/y</span>
            </div>
          </div>

          {/* Economics & Environment */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
            <div style={{ padding: 4, background: '#0f172a', borderRadius: 4 }}>
              <div style={{ color: '#64748b', fontSize: 9 }}>Est. Grid Cost</div>
              <div style={{ color: '#f97316', fontWeight: 600 }}>€{(ped.annualGridCost/1000).toFixed(1)}k/y</div>
            </div>
            <div style={{ padding: 4, background: '#0f172a', borderRadius: 4 }}>
              <div style={{ color: '#64748b', fontSize: 9 }}>Est. CAPEX</div>
              <div style={{ color: '#8b5cf6', fontWeight: 600 }}>€{(ped.totalCapex/1000).toFixed(0)}k</div>
            </div>
            <div style={{ padding: 4, background: '#0f172a', borderRadius: 4 }}>
              <div style={{ color: '#64748b', fontSize: 9 }}>CO₂ Emissions</div>
              <div style={{ color: '#94a3b8', fontWeight: 600 }}>{(ped.annualCO2/1000).toFixed(1)} t/y</div>
            </div>
            <div style={{ padding: 4, background: '#0f172a', borderRadius: 4 }}>
              <div style={{ color: '#64748b', fontSize: 9 }}>CO₂ Savings</div>
              <div style={{ color: '#22c55e', fontWeight: 600 }}>{(ped.co2Savings/1000).toFixed(1)} t/y</div>
            </div>
          </div>

          {/* Recommendation */}
          {!ped.isPed && ped.shortfallKw > 0 && (
            <div style={{ marginTop: 8, padding: 6, background: '#1e3a5f', borderRadius: 4, fontSize: 9 }}>
              💡 Add ~{ped.shortfallKw.toFixed(0)} kWp solar to achieve PED
            </div>
          )}
        </div>

        {/* Actions */}
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {apiBase && (
            <>
              <button onClick={saveToBackend} disabled={saving || components.length === 0} style={{ ...btnStyle, background: '#16a34a' }}>
                {saving ? '💾 Saving...' : savedId ? '💾 Update' : '💾 Save'}
              </button>
              <button onClick={runSimulation} disabled={running || components.length === 0} style={{ ...btnStyle, background: '#2563eb' }}>
                {running ? '▶️ Starting...' : '▶️ Run Simulation'}
              </button>
              <button onClick={createScenarioFromDT} disabled={components.length === 0} style={{ ...btnStyle, background: '#7c3aed' }}>
                📋 Create Scenario
              </button>
            </>
          )}
          <button onClick={exportConfig} style={btnStyle}>📤 Export JSON</button>
          <label style={{ ...btnStyle, textAlign: 'center', cursor: 'pointer' }}>
            📥 Import JSON
            <input type="file" accept=".json" onChange={importConfig} style={{ display: 'none' }} />
          </label>
          <button onClick={clearAll} style={{ ...btnStyle, background: '#7f1d1d' }}>🗑️ Clear All</button>
        </div>

        {/* Linked Scenario indicator */}
        {apiBase && linkedScenarioId && (
          <div style={{ marginTop: 16, padding: 8, background: '#1e3a5f', borderRadius: 6, fontSize: 11 }}>
            <span style={{ color: '#94a3b8' }}>Linked: </span>
            <span style={{ color: '#60a5fa' }}>{scenarios.find(s => s.id === linkedScenarioId)?.name || linkedScenarioId}</span>
            <button onClick={() => setLinkedScenarioId(null)} style={{ marginLeft: 8, background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: 10 }}>✕</button>
          </div>
        )}

        {/* Templates */}
        <div style={{ marginTop: 20 }}>
          <h4 style={{ margin: '0 0 8px', fontSize: 12, color: '#94a3b8' }}>Paper Scenarios</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <button onClick={() => loadTemplate('scenario_1_baseline')} style={{ ...btnStyle, background: '#1e40af', fontSize: 10, padding: '6px 8px' }}>
              S1: Baseline
            </button>
            <button onClick={() => loadTemplate('scenario_2_high_pv')} style={{ ...btnStyle, background: '#1e40af', fontSize: 10, padding: '6px 8px' }}>
              S2: High PV
            </button>
            <button onClick={() => loadTemplate('scenario_3_pv_battery')} style={{ ...btnStyle, background: '#1e40af', fontSize: 10, padding: '6px 8px' }}>
              S3: PV + Battery
            </button>
            <button onClick={() => loadTemplate('scenario_4_large_battery')} style={{ ...btnStyle, background: '#1e40af', fontSize: 10, padding: '6px 8px' }}>
              S4: Large Battery
            </button>
            <button onClick={() => loadTemplate('scenario_5_dsm')} style={{ ...btnStyle, background: '#1e40af', fontSize: 10, padding: '6px 8px' }}>
              S5: DSM
            </button>
          </div>
          <h4 style={{ margin: '12px 0 8px', fontSize: 12, color: '#94a3b8' }}>Other Templates</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <button onClick={() => loadTemplate('smart_district')} style={{ ...btnStyle, background: '#065f46', fontSize: 10, padding: '6px 8px' }}>
              🏘️ Smart District
            </button>
          </div>
        </div>
      </div>

      {/* Center - Canvas */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Toolbar */}
        <div style={{ padding: '8px 12px', borderBottom: '1px solid #334155', display: 'flex', alignItems: 'center', gap: 12 }}>
          <input
            value={configName}
            onChange={e => setConfigName(e.target.value)}
            style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 4, padding: '4px 8px', color: '#e2e8f0', fontSize: 14, width: 200 }}
          />
          <span style={{ fontSize: 12, color: '#64748b' }}>
            {components.length} components • {connections.length} connections
          </span>
          {connectingFrom && (
            <span style={{ fontSize: 12, color: '#eab308', marginLeft: 'auto' }}>
              🔗 Click another component to connect, or click canvas to cancel
            </span>
          )}
        </div>

        {/* Drop Canvas */}
        <div
          ref={canvasRef}
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
          onClick={handleCanvasClick}
          style={{
            flex: 1,
            position: 'relative',
            background: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px), #1e293b',
            backgroundSize: '20px 20px',
            overflow: 'hidden'
          }}
        >
          {/* SVG for connections */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
              </marker>
              <marker id="arrowhead-heat" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
              </marker>
            </defs>
            {connections.map(conn => {
              const fromComp = components.find(c => c.id === conn.from);
              const toComp = components.find(c => c.id === conn.to);
              if (!fromComp || !toComp) return null;
              const color = conn.type === 'heat' ? '#ef4444' : conn.type === 'both' ? '#a855f7' : '#3b82f6';
              const x1 = fromComp.x + 30, y1 = fromComp.y + 30;
              const x2 = toComp.x + 30, y2 = toComp.y + 30;
              return (
                <g key={conn.id} onClick={() => setSelectedId(conn.id)} style={{ cursor: 'pointer', pointerEvents: 'stroke' }}>
                  <line
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={color} strokeWidth={3} strokeDasharray={conn.type === 'heat' ? '8,4' : 'none'}
                    markerEnd="url(#arrowhead)"
                  />
                  {/* Animated flow dot */}
                  <circle r="4" fill={color}>
                    <animateMotion dur="2s" repeatCount="indefinite" path={`M${x1},${y1} L${x2},${y2}`} />
                  </circle>
                  <circle r="4" fill={color}>
                    <animateMotion dur="2s" repeatCount="indefinite" begin="0.66s" path={`M${x1},${y1} L${x2},${y2}`} />
                  </circle>
                  <circle r="4" fill={color}>
                    <animateMotion dur="2s" repeatCount="indefinite" begin="1.33s" path={`M${x1},${y1} L${x2},${y2}`} />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Components */}
          {components.map(comp => {
            const def = COMPONENT_DEFS[comp.type];
            const isSelected = selectedId === comp.id;
            const isConnecting = connectingFrom === comp.id;
            const status = getComponentStatus(comp.id);
            return (
              <div
                key={comp.id}
                draggable
                onDragEnd={e => handleComponentDrag(comp.id, e)}
                onClick={e => handleComponentClick(comp.id, e)}
                style={{
                  position: 'absolute',
                  left: comp.x,
                  top: comp.y,
                  width: 60,
                  height: 60,
                  background: `${def.color}22`,
                  border: `2px solid ${isSelected || isConnecting ? '#fff' : status === 'isolated' ? '#f97316' : def.color}`,
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'move',
                  boxShadow: isSelected ? '0 0 12px rgba(255,255,255,0.3)' : status === 'isolated' ? '0 0 8px rgba(249,115,22,0.5)' : 'none',
                  transition: 'box-shadow 0.15s'
                }}
              >
                {/* Status badge */}
                <div style={{
                  position: 'absolute',
                  top: -6,
                  right: -6,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: status === 'valid' ? '#22c55e' : '#f97316',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 8,
                  border: '2px solid #0f172a'
                }}>
                  {status === 'valid' ? '✓' : '!'}
                </div>
                <span style={{ fontSize: 24 }}>{def.icon}</span>
                <span style={{ fontSize: 9, color: '#94a3b8', marginTop: 2, textAlign: 'center', maxWidth: 56, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {comp.name}
                </span>
              </div>
            );
          })}

          {/* Empty state */}
          {components.length === 0 && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#64748b' }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🏗️</div>
              <div>Drag components here to build your digital twin</div>
            </div>
          )}
        </div>
      </div>

      {/* Right Panel - Properties */}
      <div style={{ width: 260, borderLeft: '1px solid #334155', padding: 12, overflowY: 'auto' }}>
        <h3 style={{ margin: '0 0 12px', fontSize: 14, color: '#94a3b8' }}>Properties</h3>
        
        {selectedComp ? (
          <div>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 11, color: '#64748b' }}>Name</label>
              <input
                value={selectedComp.name}
                onChange={e => setComponents(prev => prev.map(c => c.id === selectedComp.id ? { ...c, name: e.target.value } : c))}
                style={inputStyle}
              />
            </div>

            <div style={{ fontSize: 11, color: '#64748b', marginBottom: 8 }}>Parameters</div>
            {Object.entries(selectedComp.params).map(([key, val]) => (
              <div key={key} style={{ marginBottom: 8 }}>
                <label style={{ fontSize: 10, color: '#94a3b8', display: 'block', marginBottom: 2 }}>
                  {key.replace(/_/g, ' ')}
                </label>
                {typeof val === 'boolean' ? (
                  <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
                    <input
                      type="checkbox"
                      checked={val}
                      onChange={e => updateComponentParam(selectedComp.id, key, e.target.checked)}
                    />
                    {val ? 'Enabled' : 'Disabled'}
                  </label>
                ) : typeof val === 'number' ? (
                  <input
                    type="number"
                    value={val}
                    onChange={e => updateComponentParam(selectedComp.id, key, parseFloat(e.target.value) || 0)}
                    style={inputStyle}
                  />
                ) : (
                  <input
                    value={val}
                    onChange={e => updateComponentParam(selectedComp.id, key, e.target.value)}
                    style={inputStyle}
                  />
                )}
              </div>
            ))}

            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <button onClick={() => startConnection(selectedComp.id)} style={{ ...btnStyle, background: '#1d4ed8' }}>
                🔗 Connect to...
              </button>
              <button onClick={() => deleteComponent(selectedComp.id)} style={{ ...btnStyle, background: '#7f1d1d' }}>
                🗑️ Delete
              </button>
            </div>
          </div>
        ) : connections.find(c => c.id === selectedId) ? (
          <div>
            {(() => {
              const conn = connections.find(c => c.id === selectedId)!;
              const fromComp = components.find(c => c.id === conn.from);
              const toComp = components.find(c => c.id === conn.to);
              return (
                <>
                  <div style={{ fontSize: 12, marginBottom: 12 }}>
                    <b>{fromComp?.name}</b> → <b>{toComp?.name}</b>
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <label style={{ fontSize: 10, color: '#94a3b8' }}>Type</label>
                    <select
                      value={conn.type}
                      onChange={e => setConnections(prev => prev.map(c => c.id === conn.id ? { ...c, type: e.target.value as DTConnection['type'] } : c))}
                      style={inputStyle}
                    >
                      <option value="electricity">⚡ Electricity</option>
                      <option value="heat">🔥 Heat</option>
                      <option value="both">🔄 Both</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <label style={{ fontSize: 10, color: '#94a3b8' }}>Capacity (kW)</label>
                    <input
                      type="number"
                      value={conn.capacity_kw || 0}
                      onChange={e => setConnections(prev => prev.map(c => c.id === conn.id ? { ...c, capacity_kw: parseFloat(e.target.value) || 0 } : c))}
                      style={inputStyle}
                    />
                  </div>
                  <button onClick={() => deleteConnection(conn.id)} style={{ ...btnStyle, background: '#7f1d1d', marginTop: 12 }}>
                    🗑️ Delete Connection
                  </button>
                </>
              );
            })()}
          </div>
        ) : (
          <div style={{ color: '#64748b', fontSize: 12 }}>
            Select a component or connection to edit its properties
          </div>
        )}
      </div>
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  padding: '8px 12px',
  background: '#334155',
  border: 'none',
  borderRadius: 4,
  color: '#e2e8f0',
  fontSize: 12,
  cursor: 'pointer'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '6px 8px',
  background: '#1e293b',
  border: '1px solid #334155',
  borderRadius: 4,
  color: '#e2e8f0',
  fontSize: 12
};

export default DigitalTwinBuilder;
