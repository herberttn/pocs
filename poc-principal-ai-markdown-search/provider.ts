import { readFile, stat } from 'node:fs/promises';
import { join, basename } from 'node:path';
import process from 'node:process';

import { type FindOptions, MarkdownFileProvider, mergeExclusions } from '@principal-ai/markdown-search';
import type { MarkdownFile } from '@principal-ai/markdown-search';
import { glob } from 'glob';

export class FileSystemMarkdownFileProvider implements MarkdownFileProvider {
  private rootPath: string;

  constructor(rootPath: string = process.cwd()) {
    this.rootPath = rootPath;
  }

  async findMarkdownFiles(options?: FindOptions): Promise<MarkdownFile[]> {
    const { include = ['**/*.{md,mdx}'], exclude = [] } = options || {};

    const exclusions = mergeExclusions(exclude) as string[];
    const files: MarkdownFile[] = [];

    // Use Bun's Glob for fast file discovery
    for (const pattern of include) {
      for await (const file of await glob(pattern, { cwd: this.rootPath, nodir: true })) {
        // Check if file should be excluded
        const shouldExclude = exclusions.some(excludePattern => {
          if (excludePattern.includes('*')) {
            // Convert glob pattern to regex
            const regex = new RegExp(
              excludePattern
              .replace(/\./g, '\\.')
              .replace(/\*/g, '.*')
              .replace(/\?/g, '.')
            );
            return regex.test(file);
          }
          return file.includes(excludePattern);
        });

        if (!shouldExclude) {
          const fullPath = join(this.rootPath, file);
          const stats = await stat(fullPath);

          files.push({
            path: fullPath,
            name: basename(file),
            size: stats.size,
            modifiedAt: stats.mtime,
            uri: `file://${fullPath}`,
          });
        }
      }
    }

    return files;
  }

  async readMarkdownFile(path: string): Promise<string> {
    return await readFile(path, 'utf-8');
  }

  async getFileInfo(path: string): Promise<MarkdownFile> {
    const stats = await stat(path);

    return {
      path,
      name: basename(path),
      size: stats.size,
      modifiedAt: stats.mtime,
      uri: `file://${path}`,
    };
  }
}
