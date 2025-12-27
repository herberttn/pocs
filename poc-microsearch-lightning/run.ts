import { addDocumentsFromPath, search } from '@microsearch/lightning';

// Index your documents
await addDocumentsFromPath('./content');

// Search with lightning speed
const results = await search('playwright vitest');

// Use the results
results.forEach(result => {
  console.log(`📄 ${result.title}`);
  console.log(`⭐ Score: ${result.score}`);
  console.log(`💬 ${result.snippet}`);
});
