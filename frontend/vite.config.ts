import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
