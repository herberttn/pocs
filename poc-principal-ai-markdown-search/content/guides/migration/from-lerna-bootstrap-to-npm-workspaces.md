---
sidebar_label: from lerna to npm workspaces
---

# from `lerna` to `npm` workspaces
If your project is a monorepo that uses the `lerna bootstrap` command to manage dependencies, you can migrate from it to use the new, simpler and more reliable `npm` workspaces.

### Requirements
1. `lerna bootstrap` based monorepo
2. `node >= v16.11` or greater
3. `npm` version that comes bundled with `node`

### Migrating to `npm` workspaces
1. In your terminal, run the following commands:
   ```shell
   npx lerna clean --yes
   npx lerna link convert
   ```

2. In your `lerna.json` file
   1. Remove `packages: [...]`
   2. Add `useWorkspaces: true`

3. In your **root** `package.json` file
   1. Add `workspaces: [...]` using a glob syntax like `packages/*` (usually the same value removed from `lerna.json` works)
   2. Remove `scripts` that use the `lerna bootstrap` command, as your dependency tree will probably break if you use it
   3. Add all your packages to `dependencies`, like so:
      ```json5
      {
        "dependencies": {
          "my-package-a-name": "file:packages/package-a",
        },
      }
      ```

4. Delete the following:
   1. `node_modules` directory
   2. `package-lock.json` file

6. Run the following commands:
   ```shell
   npm install
   ```

7. Commit all the changes, including the `package-lock.json` file
   
### Using `npm` workspaces
> Official documentation: https://docs.npmjs.com/cli/v7/using-npm/workspaces

So now, after the migration, it's time to learn how to best use it.
- When you just want to install all the dependencies of the project because it's the first time you install them (or because someone changed any dependency), use the following command. This will install all dependencies as mandated by the `package-lock.json` file, allowing everyone to install the exact same dependency tree (as long as everyone uses this command of course).
  ```shell
  npm ci
  ```
- When you change any dependency in any `package.json` file, use the following command to apply your changes and update the `package-lock.json` file, which will be used by subsequent installs (like it's explained above). There is no need to delete the `package-lock.json` file before, this is only done when migrating it. After that `npm` will maintain the file automatically.
  ```shell
  npm install
  ```
- **Never use this command**
  ```shell
  lerna bootstrap
  ```
