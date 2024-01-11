import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  treeshake: true,
  splitting: false,
  sourcemap: true,
  dts: true,
  minify: true,
  external: ['react', 'react-dom'],
})
