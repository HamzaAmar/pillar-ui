import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import esbuild from 'rollup-plugin-esbuild'
import preserveDirectives from 'rollup-preserve-directives'
import { dts } from 'rollup-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

const { peerDependencies = {}, dependencies = {} } = pkg

const DIR = 'dist'

// Custom plugin to remove empty chunks
const removeEmptyChunks = {
  name: '@rollup-plugin/remove-empty-chunks',
  generateBundle(_, bundle) {
    for (const [name, chunk] of Object.entries(bundle)) {
      if (chunk.type === 'chunk' && chunk.code.length === 0) {
        delete bundle[name]
      }
    }
  },
}

/** @type {*} */
const plugins = [
  nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
  esbuild({
    sourceMap: true,
    tsconfig: 'tsconfig.json',
    minify: true,
    platform: 'browser',
    sourcesContent: true,
  }),
  preserveDirectives(),
  replace({ preventAssignment: true }),
  removeEmptyChunks,
  // // :TODO Try to add this plugin but it is not working :TODO
]

// External dependencies
const external = [...Object.keys(dependencies), ...Object.keys(peerDependencies), 'react/jsx-runtime']
// Output configuration
const output = [
  {
    format: 'es',
    exports: 'named',
    entryFileNames: '[name].mjs',
    dir: `${DIR}/esm`,
    preserveModules: true,
    sourcemap: true,
  },
  {
    format: 'cjs',
    exports: 'named',
    entryFileNames: '[name].cjs',
    dir: `${DIR}/cjs`,
    preserveModules: true,
    sourcemap: true,
  },
]
// const entries = await glob('src/core/**/index.tsx')
// Configuration for both ESM and CJS builds
const config = [
  {
    input: './src/index.ts',
    onLog(level, log, handler) {
      if (log.code === 'EMPTY_BUNDLE') return
      return handler(level, log)
    },
    onwarn(warning, warn) {
      if (warning.code === 'SOURCEMAP_ERROR') return
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
      warn(warning)
    },
    output,
    external,
    plugins,
  },
  {
    input: './src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es', sourcemap: true }],
    plugins: [dts()],
  },
]

export default config
