import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')
const NODE_ENV = process.env.NODE_ENV

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': resolve(__dirname, 'src')
  },
  // base: NODE_ENV === 'production' ? './' : '/',
  // publicDir: './',
  base: './',
  build: {
    assetsDir: './static',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  // mode: 'production',
  server: {
    host: '10.9.37.4',
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://rap2api.taobao.org/app/mock/data',
        changeOrigin: true,
        secure: false,  // https
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }

  },
})
