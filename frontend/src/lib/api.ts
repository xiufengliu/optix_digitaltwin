// Small fetch helpers shared by every view. The API base may carry a path
// prefix (e.g. https://host/api), so URLs are always resolved relative to it.

export function resolveApiBase(): string {
  const envBase = import.meta.env?.VITE_API_BASE as string | undefined;
  if (envBase && envBase.trim()) return envBase.trim();
  const origin = window.location.origin.replace(/\/+$/, '');
  // Dev: the Vite proxy serves the backend under /api. Production: nginx
  // proxies /runs, /scenarios, /digital-twins and /health at the site root.
  return import.meta.env.DEV ? origin + '/api' : origin;
}

export function apiUrl(base: string, path: string): string {
  const root = base.endsWith('/') ? base : base + '/';
  return new URL(path.replace(/^\/+/, ''), root).toString();
}

export class ApiError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
  }
}

async function errorFrom(response: Response): Promise<ApiError> {
  let detail = '';
  try {
    const text = await response.text();
    try {
      const body = JSON.parse(text);
      detail = typeof body?.detail === 'string' ? body.detail : JSON.stringify(body?.detail ?? body);
    } catch {
      detail = text;
    }
  } catch {}
  return new ApiError(detail || `Request failed (${response.status})`, response.status);
}

export async function apiFetch<T>(
  base: string,
  path: string,
  init: { method?: string; body?: unknown; signal?: AbortSignal } = {},
): Promise<T> {
  const response = await fetch(apiUrl(base, path), {
    method: init.method ?? 'GET',
    signal: init.signal,
    headers: init.body !== undefined ? { 'Content-Type': 'application/json' } : undefined,
    body: init.body !== undefined ? JSON.stringify(init.body) : undefined,
  });
  if (!response.ok) throw await errorFrom(response);
  return (await response.json()) as T;
}

export function isAbort(error: unknown): boolean {
  return (error as Error)?.name === 'AbortError';
}
