import { defineConfig } from 'tsup'

export default defineConfig((option) => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  minify: !option.watch,
}))
