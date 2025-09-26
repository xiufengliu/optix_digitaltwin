import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 说明：
// - preview 段：用于 `npm run preview`（生产演示/临时上线）。必须加 allowedHosts 放行外部域名。
// - server 段：用于 `npm run dev`（开发调试）。如果通过 Nginx(443) 反代 dev server，需配置 allowedHosts + HMR 走 wss。
// - 注意：preview 模式不读取 server.proxy，因此 /api 请交给 Nginx 反代到后端。
// - 如果你本地单机开发直连后端，不走 Nginx，再用 server.proxy。

export default defineConfig({
  plugins: [react()],

  // 开发模式（npm run dev）——只有你需要 https 反代 dev server 时才用到
  server: {
    host: true,                // 允许外部访问（0.0.0.0）
    port: 5173,
    strictPort: true,
    // 放行域名（Vite 5+），便于通过 dt.scicloud.site 反代到 dev server
    allowedHosts: ['dt.scicloud.site'],

    // 仅 dev 有效：本地直接跑后端时可用 proxy；若走 Nginx 同域 /api，前端直接请求 /api 即可
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },

    // 如果使用 Nginx(443) 反代 dev，HMR 需走 WSS，经 443，避免 mixed content
    hmr: {
      protocol: 'wss',
      host: 'dt.scicloud.site',
      clientPort: 443,
    },
  },

  // 预览/演示模式（npm run preview）——你当前 Supervisor 正在用的模式
  preview: {
    host: true,                // 接受外部访问
    port: 5173,
    strictPort: true,
    allowedHosts: ['dt.scicloud.site'],   // ← 关键：放行该域名
    // 注意：preview 模式没有 proxy 配置；/api 需由 Nginx 反代
  },
})
