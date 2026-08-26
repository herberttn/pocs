# Dependency debts
The following list describes dependencies that have breaking changes that cannot be complied with without some kind of refactor (usually due to some technical debt of Oswald itself or due to the dependency not complying with ecosystem standards). Ideally, the descriptions should explain the breaking change, why Oswald cannot currently comply with it, and what would be necessary to bump said dependency.

> [!IMPORTANT]
> - This is mostly for the Oswald team to keep track of why certain dependencies are stale.
> - Most dependencies listed here are internal dependencies of Oswald only.
> - Some breaking changes listed here break in Oswald's repository only. 
> - Dependencies may be transitive.
> - List may not be exhaustive.

## Dependencies

| Dependency                                                                  | Working (tested) | Breaking (tested) |
|-----------------------------------------------------------------------------|------------------|-------------------|
| [`react-router-dom`](https://www.npmjs.com/package/react-router-dom)        | `v6.3.0`         | `v6.4.0+`         |
| [`react-router`](https://www.npmjs.com/package/react-router)                | `v6.3.0`         | `v6.4.0+`         |
| [`recharts`](https://www.npmjs.com/package/recharts)                        | `v2.1.12`        | `v2.1.13+`        |
| [`tslog`](https://www.npmjs.com/package/tslog)                              | `v3.3.4`         | `v4+`             |

## Details

### `react-router v6.4.0`
We know it's breaking, I don't remember why at the moment. We failed to document the break and just stopped bumping at some point. We will retry eventually.

### `react-router-dom v6.4.0`
We know it's breaking, I don't remember why at the moment. We failed to document the break and just stopped bumping at some point. We will retry eventually.

### `recharts v2.1.13`
This patch upgraded major versions of dependencies, which broke ESM support on native import trees only (so it works on bundled production but breaks tests). Maintainers only acknowledged the problem by adding a workaround to the changelog, and have not fixed the broken patch. I don't think they will ever make it right.

The solution is to wait for `recharts` to be migrated to ESM itself (or dynamically import the ESM dependencies) or for tooling to figure it out something. As of this moment (time of writing), I think the right the fix for us to pin it.

> See:
> - https://github.com/recharts/recharts/issues/2915
> - https://github.com/recharts/recharts/issues/2918
> - https://github.com/recharts/recharts/pull/2919

### `tslog v4`
It was migrated to `ESM` but some types have changed and some things are now missing. Just need to migrate and test, but it hasn't been done yet.

> See:
> - https://github.com/fullstack-build/tslog/releases/tag/v4.0.0
