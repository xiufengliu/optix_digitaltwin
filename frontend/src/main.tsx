import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './ErrorBoundary';
import './styles.css';

function showBootError(title: string, detail?: unknown) {
  try {
    const id = '__boot_error_overlay__';
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('div');
      el.id = id;
      el.setAttribute('role', 'alert');
      el.style.position = 'fixed';
      el.style.inset = '0';
      el.style.zIndex = '9999';
      el.style.background = 'rgba(15,23,42,0.96)';
      el.style.color = '#fca5a5';
      el.style.fontFamily = 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial';
      el.style.padding = '24px';
      document.body.appendChild(el);
    }
    const pre = typeof detail === 'string' ? detail : (detail instanceof Error ? detail.stack || detail.message : JSON.stringify(detail));
    el.innerHTML = `<h2 style="margin:0 0 8px 0; color:#fecaca">${title}</h2><pre style="white-space:pre-wrap; font-size:14px; color:#fca5a5">${pre ?? ''}</pre>`;
  } catch {}
}

// Surface early runtime errors (outside React) to help diagnose production issues
window.addEventListener('error', (e) => {
  showBootError('Runtime error', e?.error || e?.message);
});
window.addEventListener('unhandledrejection', (e) => {
  // @ts-ignore
  showBootError('Unhandled promise rejection', e?.reason);
});

try {
  let rootEl = document.getElementById('root') as HTMLElement | null;
  if (!rootEl) {
    rootEl = document.createElement('div');
    rootEl.id = 'root';
    document.body.appendChild(rootEl);
  }
  console.log('[UI] Mounting app. API base =', (import.meta as any)?.env?.VITE_API_BASE);
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  );
} catch (err) {
  console.error('[UI] Failed to mount app', err);
  showBootError('Failed to mount app', err);
}
