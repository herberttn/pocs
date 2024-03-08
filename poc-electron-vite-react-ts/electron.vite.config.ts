import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    // multi page
    // build: {
    //   rollupOptions: {
    //     input: {
    //       pone: resolve(__dirname, 'src/renderer/pone/index.html'),
    //       ptwo: resolve(__dirname, 'src/renderer/ptwo/index.html')
    //     }
    //   }
    // },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react()]
  }
})
