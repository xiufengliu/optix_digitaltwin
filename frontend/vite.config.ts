import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // dev（npm run dev）
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['dt.scicloud.site'],
    hmr: { protocol: 'wss', host: 'dt.scicloud.site', clientPort: 443 },
    // （可留可去）本机直连后端时才用；经 Nginx 访问时 /api 已被 Nginx 截获
    proxy: { '/api': { target: process.env.BACKEND_URL || 'http://127.0.0.1:8000', changeOrigin: true } },
  },

  // preview（npm run preview）
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['dt.scicloud.site'],
  },
})
