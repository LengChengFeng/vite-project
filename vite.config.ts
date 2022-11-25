import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 设置跨域
  server: {
    // https: false,
    open: true, // 启动自动打开浏览器
    host: '0.0.0.0',  //启动本地ip
    port: 5176,
    // secure:false,
    proxy: {
    },
  },
  //设置全局变量 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/css/common.scss";`
      }
    }
  },
})
