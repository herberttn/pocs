const { preview } = require('vite');

(async () => {
  const previewServer = await preview({
    // any valid user config options, plus `mode` and `configFile`
    preview: {
      port: 8080,
      open: true
    }
  })

  previewServer.printUrls();
})();
