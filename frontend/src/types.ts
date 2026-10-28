export interface SimulationRun {
  id: string;
  name?: string | null;
  status: string;
  session_id?: string | null;
  scenario_id?: string | null;
  digital_twin_id?: string | null;
  created_at: string;
  updated_at: string;
  notes?: string | null;
  config: Record<string, unknown>;
}

export interface SimulationMetrics {
  timestep?: number | null;
  steps_taken?: number | null;
  total_steps?: number | null;
  fund_nav?: number | null;
  budget?: number | null;
  last_revenue?: number | null;
  cumulative_revenue?: number | null;
  done?: boolean;
}

export interface ObservationValues {
  t?: number;
  wind?: number;
  solar?: number;
  hydro?: number;
  load?: number;
  price?: number;
  timestamp?: string | null;
}

export interface SimulationStatePayload {
  session_id: string;
  observation: Record<string, number[] | number | unknown>;
  rewards: Record<string, number>;
  terminations: Record<string, boolean>;
  truncations: Record<string, boolean>;
  info: Record<string, unknown>;
  metrics: SimulationMetrics;
}

export type WebSocketMessage =
  | { type: 'state'; payload: SimulationStatePayload }
  | { type: 'pong' }
  | { type: 'error'; message: string }
  | { type: string; [key: string]: unknown };

// Scenarios
export interface Scenario {
  id: string;
  name: string;
  description?: string | null;
  details?: string | null;
  created_at: string;
  updated_at: string;
  config_overrides: Record<string, unknown>;
  digital_twin_id?: string | null;
}

export interface ScenarioCreate {
  name: string;
  description?: string;
  details?: string;
  config_overrides: Record<string, unknown>;
  /** Linked digital twin; "" means none (and unlinks on update) */
  digital_twin_id?: string;
}

// PED
export interface PedMetrics {
  steps: number;
  period_hours: number;
  total_gen_mwh: number;
  total_demand_mwh: number;
  ped_absolute_mwh: number;
  ped_ratio: number;
}

export interface CompareRunRow {
  run_id: string;
  name?: string | null;
  status: string;
  comparable: boolean;
  available_steps?: number | null;
  compared_steps?: number | null;
  period_hours?: number | null;
  total_gen_mwh?: number | null;
  total_demand_mwh?: number | null;
  ped_absolute_mwh?: number | null;
  ped_ratio?: number | null;
}

export interface CompareRunsResponse {
  common_steps?: number | null;
  common_period_hours?: number | null;
  rows: CompareRunRow[];
}

export interface EnergySeries {
  start: number;
  end: number;
  steps: number[];
  timestamps?: string[] | null;
  dt_hours?: number;
  gen_mw: number[];
  load_mw: number[];
  solar_mw?: number[];
  wind_mw?: number[];
  hydro_mw?: number[];
}

export interface DispatchKpis {
  total_gen_mwh: number;
  total_demand_mwh: number;
  ped_absolute_mwh: number;
  ped_ratio: number;
  self_consumption_mwh: number;
  export_mwh: number;
  battery_throughput_mwh: number;
  grid_import_mwh: number;
  self_consumption_ratio?: number;
  self_sufficiency_ratio?: number;
}

export interface DispatchResult {
  config: Record<string, number | boolean>;
  kpis: DispatchKpis;
  start: number;
  end: number;
  steps: number[];
  series_mw: Record<string, number[]>;
  series_mwh: Record<string, number[]>;
  soc_mwh: number[];
  dt_hours: number;
}

// Digital Twin Builder Types
export type DTComponentType = 
  | 'smart_building'
  | 'solar_pv'
  | 'battery_storage'
  | 'wind_turbine'
  | 'district_heating'
  | 'smart_grid'
  | 'ev_charger'
  | 'heat_pump'
  | 'chp_unit'
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
