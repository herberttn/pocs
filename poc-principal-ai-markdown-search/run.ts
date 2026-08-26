import { resolve } from 'node:path';

import { SearchEngine, NodeStorageAdapter, SearchEngineFactory } from '@principal-ai/markdown-search';

import { FileSystemMarkdownFileProvider } from './provider.js';

const searchEngine = new SearchEngine({
  markdownProvider: new FileSystemMarkdownFileProvider(resolve(import.meta.dirname, './content')),
  storage: new NodeStorageAdapter('.storage'),
  searchEngine: SearchEngineFactory.create('flexsearch', {
    tokenize: 'forward',
    resolution: 9,
    depth: 3,
  })
});

await searchEngine.initialize();
await searchEngine.indexFiles({
  // onProgress: (progress: any) => {
  //   console.log(progress);
  // },
  batchSize: 10,
  indexChunks: true, // Index individual code blocks, tables, etc.
});

const results = await searchEngine.search('component lifecycle');

results.forEach(result => {
  console.log();
  console.log(result);
  console.log(result.matches);
});
