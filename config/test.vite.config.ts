import baseConfig from './base.vite.config'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  ...baseConfig,
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  },
})
