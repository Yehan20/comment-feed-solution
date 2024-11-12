import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['I'].includes(tag),
      }
    }
  })],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  }
})
