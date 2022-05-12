import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    minify: false,
  },
  clearScreen: false,
  plugins: [
    react(),
    poc(),
  ],
});

function poc() {
  return {
    name: 'poc-vite-react-ts-dynamic-html', // required, will show up in warnings and errors

    // just logging
    transform(code: string, id: string) {
      if (id?.endsWith('.html')) {
        console.log('='.repeat(process.stdout.columns));
        console.log('transform hook HTML matched:', { code, id });

        // error expected, to show that the changed html is used to build
        const changed = code.replace('</body>', `<script type="module" src="/src/main2.tsx"></script>\n</body>`);

        console.log('changed HTML:', changed);
        return changed;
      }
    },

  }
}
