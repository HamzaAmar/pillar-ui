import { defineConfig } from 'tsup'
// import { injectUseClient } from './scripts/postbuild.mjs'

export default defineConfig([
  // This one responsible for generating the index.ts file and the d.ts
  {
    entry: ['./src/index.ts'],
    format: ['cjs', 'esm'],
    bundle: false,
    dts: true,
  },
  {
    sourcemap: true,
    entry: ['./src/index.ts', './src/**/index.ts'],
    format: ['cjs', 'esm'],
    splitting: false,
    outDir: 'dist/',
    minify: true,
    minifyWhitespace: true,
    treeshake: true,
    external: ['react', 'react-dom'],
    bundle: false,
    esbuildOptions(options) {
      options.outbase = './src'
    },
  },
])
