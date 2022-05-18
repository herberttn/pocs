import { defineConfig } from 'vite';
import virtual from 'vite-plugin-virtual';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    react(),
    virtual({
      'virtual:module': `
import x from 'virtual:config';
export { x };
      `,
      'virtual:config': '/qwe/asdasdas.ts'
    })
  ],
});
