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
    // host: '10.9.37.4',
    // port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://rap2api.taobao.org/app/mock/data',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/music-api': {
        target: 'https://api.uomg.com/api/rand.music?format=json&sort=%E7%83%AD%E6%AD%8C%E6%A6%9C',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/music-api/, '')
      },
      '/music-lyric': {
        // target:'https://api.imjad.cn/cloudmusic/?type=lyric&id=1479526505'
        target: 'https://api.imjad.cn/cloudmusic/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/music-lyric/, '')
      },
      '/one-api': {
        target: 'https://api.tianapi.com/txapi/one/index?key=7764228bedff0b2310879d47173c4603&rand=1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/one-api/, '')
      },
      '/diary-api': {
        target: 'http://api.tianapi.com/txapi/tiangou/index?key=7764228bedff0b2310879d47173c4603',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/diary-api/, '')
      },

    },
  },
})
