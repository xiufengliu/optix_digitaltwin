export interface SimulationRun {
  id: string;
  name?: string | null;
  status: string;
  session_id?: string | null;
  scenario_id?: string | null;
  created_at: string;
  updated_at: string;
  notes?: string | null;
  config: Record<string, unknown>;
}

export interface SimulationMetrics {
  timestep?: number | null;
  steps_taken?: number | null;
  fund_nav?: number | null;
  budget?: number | null;
  last_revenue?: number | null;
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
}

export interface ScenarioCreate {
  name: string;
  description?: string;
  details?: string;
  config_overrides: Record<string, unknown>;
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

export interface EnergySeries {
  start: number;
  end: number;
  steps: number[];
  timestamps?: string[] | null;
  gen_mw: number[];
  load_mw: number[];
}
