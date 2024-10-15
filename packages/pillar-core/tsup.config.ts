import { defineConfig } from 'tsup'
import { injectUseClient } from './scripts/postbuild.mjs'
// import { injectUseClient } from './scripts/postbuild.mjs'

export default defineConfig([
  // This one responsible for generating the index.ts file and the d.ts
  {
    entry: ['./src/index.ts'],
    format: ['cjs', 'esm'],
    bundle: false,
    dts: true,
  },
  /*
  This One responsible for generating the core files for the components
  the problem if I try to add dts in here is that it will not work I gave me this error 
  node:events:489
      throw er; // Unhandled 'error' event
      ^

  Error [ERR_WORKER_OUT_OF_MEMORY]: Worker terminated due to reaching memory limit: JS heap out of memory
      at new NodeError (node:internal/errors:399:5)
      at [kOnExit] (node:internal/worker:310:26)
      at Worker.<computed>.onexit (node:internal/worker:226:20)
  Emitted 'error' event on Worker instance at:
      at [kOnExit] (node:internal/worker:310:12)
      at Worker.<computed>.onexit (node:internal/worker:226:20) {
    code: 'ERR_WORKER_OUT_OF_MEMORY'
}
  */
  {
    sourcemap: true,
    entry: ['./src/index.ts', './src/core/**/index.tsx'],
    format: ['cjs', 'esm'],
    splitting: false,
    outDir: 'dist/',
    minify: true,
    minifyWhitespace: true,
    treeshake: true,
    external: ['react', 'react-dom'],
    bundle: false,
    onSuccess: async () => {
      await injectUseClient()
    },
    esbuildOptions(options) {
      options.outbase = './src'
    },
  },
])
