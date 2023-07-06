import { defineConfig } from 'tsup'

export default defineConfig({
  // entry: ['src/index.ts'],
  entry: ['src/index.ts', 'src/icons/**/*.tsx'],
  format: ['cjs', 'esm'],
  treeshake: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  external: ['react', 'react-dom'],
})
