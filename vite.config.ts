import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')
const process = require('process')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': path.join(__dirname, 'src')
  },
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  // mode: 'production',
  server: {
    port: 8080,
    open: true,
  },
})
