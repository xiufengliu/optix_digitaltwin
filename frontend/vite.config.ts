// frontend/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Inject API base (overridden at build time by CLI env if provided)
  define: {
    'import.meta.env.VITE_API_BASE': JSON.stringify(process.env.VITE_API_BASE || 'https://dt.scicloud.site/api'),
  },

  build: {
    sourcemap: true,
    target: 'es2019',
  },

  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['dt.scicloud.site'],
    hmr: { protocol: 'wss', host: 'dt.scicloud.site', clientPort: 443 },
    proxy: { '/api': { target: process.env.BACKEND_URL || 'http://127.0.0.1:8000', changeOrigin: true } },
  },

  preview: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['dt.scicloud.site'],
  },
})
