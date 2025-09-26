import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 说明：
// - 我们让 Nginx 处理 /api 的反代，前端直接 fetch('/api/...') 即可。
// - dev 模式下通过 443 反代到 5173，HMR 必须用 wss@443。
// - preview 模式不支持 server.proxy，这没关系，因为 /api 已被 Nginx 截获。

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,               // 允许外部访问（0.0.0.0/反代）
    port: 5173,
    strictPort: true,
    allowedHosts: ['dt.scicloud.site'],
    hmr: {
      protocol: 'wss',
      host: 'dt.scicloud.site',
      clientPort: 443,
    },
    // 可留可去：如果你偶尔本机直连后端，不通过 Nginx，可以开这个 proxy。
    // 通过 Nginx 访问时，这段不会起作用（因为 /api 在 Nginx 已被截获）。
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },

  preview: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['dt.scicloud.site'],  // 关键：放行主域
    // preview 无 proxy；/api 已由 Nginx 处理
  },
})
