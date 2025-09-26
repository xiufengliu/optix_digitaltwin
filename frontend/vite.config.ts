// frontend/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // ★ 关键：硬注入绝对 API 基址，避免任何 base 为空/相对导致的 new URL 报错
  define: {
    'import.meta.env.VITE_API_BASE': JSON.stringify('https://dt.scicloud.site/api'),
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
