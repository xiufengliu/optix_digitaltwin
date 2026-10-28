// frontend/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Use same origin by default (empty string means relative to current host)
  define: {
    'import.meta.env.VITE_API_BASE': JSON.stringify(process.env.VITE_API_BASE || ''),
  },

  build: {
    sourcemap: true,
    target: 'es2019',
  },

  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: process.env.VITE_ALLOWED_HOSTS ? process.env.VITE_ALLOWED_HOSTS.split(',') : [],
    hmr: process.env.VITE_HMR_HOST ? { 
      protocol: process.env.VITE_HMR_PROTOCOL || 'wss', 
      host: process.env.VITE_HMR_HOST, 
      clientPort: parseInt(process.env.VITE_HMR_PORT || '443')
    } : undefined,
    // Proxy API calls during dev; strip the /api prefix so backend sees root paths
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'http://127.0.0.1:8000',
        changeOrigin: true,
        ws: true, // /runs/{id}/ws
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

  preview: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: process.env.VITE_ALLOWED_HOSTS ? process.env.VITE_ALLOWED_HOSTS.split(',') : [],
  },
})
