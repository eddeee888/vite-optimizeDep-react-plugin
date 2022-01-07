# Vite - optimizeDeps and react JSX runtime not working together

## Problem

If we mark a package to pre-bundle with `optimizeDeps` all components from the package must have `import React` statements even if `@vitejs/plugin-react` is used.

In this example, `@/ui` is marked for pre-bundling so that we don't send 4 separate files to the browser. However, when we do this, each component ( `Word`, `Is`, `Bird` ) must have `import React` statements, otherwise it will throw errors at runtime.

## Ideal scenario

`@vitejs/plugin-react` should work for packages marked for pre-bundling as well.
