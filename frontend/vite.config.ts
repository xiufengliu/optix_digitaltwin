import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // 3A：开发模式（npm run dev）
  server: {
    host: true,                // 允许 0.0.0.0（由 Nginx 反代）
    port: 5173,
    strictPort: true,
    allowedHosts: ['dt.scicloud.site'],     // ← 放行主域（dev）
    hmr: {
      protocol: 'wss',
      host: 'dt.scicloud.site',
      clientPort: 443,
    },
    // （可选）本机直连后端才用；经 Nginx 访问 /api 时由 Nginx 截获
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },

  // 兜底：如果误跑了 preview，也不再被 host 校验卡住
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['dt.scicloud.site'],     // ← 放行主域（preview）
  },
})
