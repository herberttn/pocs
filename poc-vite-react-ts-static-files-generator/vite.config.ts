import { basename } from 'path';
import { NormalizedOutputOptions, RenderedChunk } from 'rollup';
import type { CustomPluginOptions, NormalizedInputOptions } from 'rollup';
import { defineConfig, send, ViteDevServer } from 'vite';
import type { ResolvedConfig } from 'vite';
import react from '@vitejs/plugin-react';

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

const FAKE_URL = '/assets/messages/messages-en.json';
const FAKE_CONTENT = JSON.stringify({ poc: 'Proof of concept' }, null, 2);

function makePlaceholder(ref: string): string {
  return `__POC_MESSAGES_${ref}__`;
}

function poc() {
  const virtualModuleId = 'virtual:poc-messages';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;

  let config: ResolvedConfig;
  let ref: string;

  return {
    name: 'poc-messages', // required, will show up in warnings and errors

    // get config to use later
    configResolved(config_: ResolvedConfig) {
      console.log('='.repeat(process.stdout.columns));
      console.log('configResolved:', { config_ });
      config = config_;
    },

    // if serving, skip
    // if building, emit asset file
    buildStart(options: NormalizedInputOptions) {
      if (config.command === 'serve') {
        return;
      }

      console.log('='.repeat(process.stdout.columns));
      console.log('buildStart hook:', { options });

      const asset = {
        name: basename(FAKE_URL),
        source: FAKE_CONTENT,
        type: 'asset',
      };

      ref = this.emitFile(asset);

      console.log('buildStart/asset:', { asset, ref });
    },

    // resolve magic import, standard implementation
    resolveId(
      id: string,
      importer: string | undefined,
      options: { custom?: CustomPluginOptions; isEntry: boolean }
    ) {
      if (id === virtualModuleId) {
        console.log('='.repeat(process.stdout.columns));
        console.log('resolveId hook:', { id, importer, options });
        return resolvedVirtualModuleId;
      }
    },

    // export url to the asset to be used in the magic import
    // if serving, use original name
    // if building, use placeholder to replace with the generated name later
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        console.log('='.repeat(process.stdout.columns));
        console.log('load hook matched:', id);

        const url = config.command === 'serve'
          ? FAKE_URL
          : makePlaceholder(ref);

        const code = `
          const url = '${url}';
          export default url;
        `;
        console.log(code);

        return code;
      }
    },

    // just logging
    transform(code: string, id: string) {
      if (id === resolvedVirtualModuleId) {
        console.log('='.repeat(process.stdout.columns));
        console.log('transform hook matched:', { code, id });
      }
    },

    // if serving, hook not executed
    // if building, replace placeholder with generated name
    renderChunk(
      code: string,
      chunk: RenderedChunk,
      options: NormalizedOutputOptions
    ) {
      console.log('='.repeat(process.stdout.columns));
      console.log('renderChunk hook:', { code, chunk, options });

      const placeholder = makePlaceholder(ref);
      const url = '/' + this.getFileName(ref);
      console.log('renderChunk hook:', { placeholder, url });

      return code.replace(placeholder, url);
    },

    // if serving, serve the asset
    // if building, hook not executed
    configureServer(server: ViteDevServer) {
      console.log('='.repeat(process.stdout.columns));
      console.log('configureServer hook');

      return () => {
        console.log('='.repeat(process.stdout.columns));
        console.log('configureServer post hook');

        server.middlewares.use((req, res, next) => {
          if (res.writableEnded) {
            return next();
          }

          const url = req.url;
          console.log('middleware requested url:', url);

          if (url === FAKE_URL) {
            send(req, res, FAKE_CONTENT, 'json', {});
            return;
          }

          next();
        });
      }
    },

  }
}
