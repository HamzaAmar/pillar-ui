import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  dts: true,
  minify: true,
  treeshake: true,
  external: ['react', 'react-dom'],
})
