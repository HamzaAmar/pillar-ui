import { resolve } from 'node:path'
import alias from '@rollup/plugin-alias'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import esbuild from 'rollup-plugin-esbuild'
import { preserveDirectives } from 'rollup-plugin-preserve-directives'
import { rollup, watch as watchRollup } from 'rollup'
import pkg from '../package.json' assert { type: 'json' }
import { dts } from 'rollup-plugin-dts'

const DIR = 'dist1'
const name = '@pillar-ui/core'
const dir = process.cwd()

async function getConfig({ dir }) {
  const { peerDependencies = {}, dependencies = {} } = pkg

  // const input = await glob('src/core/**/index.tsx')
  const input = '../src/index.ts'
  const outputs = [
    {
      format: 'es',
      exports: 'named',
      entryFileNames: '[name].js',
      dir: resolve(dir, `${DIR}/esm`),
      preserveModules: true,
    },
    {
      format: 'cjs',
      exports: 'named',
      entryFileNames: '[name].cjs',
      dir: resolve(dir, `${DIR}/cjs`),
      preserveModules: true,
    },
  ]
  const external = [...Object.keys(dependencies), ...Object.keys(peerDependencies)]
  const plugins = [
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    alias({ entries: [] }),
    esbuild({
      sourceMap: true,
      tsconfig: resolve(dir, 'tsconfig.json'),
      minify: true,
      platform: 'browser',
    }),
    replace({ preventAssignment: true }),
    preserveDirectives(),
    {
      name: '@rollup-plugin/remove-empty-chunks',
      generateBundle(_, bundle) {
        for (const [name, chunk] of Object.entries(bundle)) {
          if (chunk.type === 'chunk' && chunk.code.length === 0) {
            delete bundle[name]
          }
        }
      },
    },
  ]
  // return {
  //   input,
  //   onLog(level, log, handler) {
  //     if (log.code === 'EMPTY_BUNDLE') return
  //     return handler(level, log)
  //   },
  //   onwarn(warning, warn) {
  //     console.error('build failed with error:')
  //     if (warning.code === 'SOURCEMAP_ERROR') return
  //     if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
  //     warn(warning)
  //   },
  //   output: outputs,
  //   external,
  //   plugins,
  // }

  return {
    input,
    onLog(level, log, handler) {
      if (log.code === 'EMPTY_BUNDLE') return
      return handler(level, log)
    },
    onwarn(warning, warn) {
      if (warning.code === 'SOURCEMAP_ERROR') return
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
      warn(warning)
    },
    output: outputs,
    external,
    plugins,
  }
}

export async function main() {
  // const dir = process.cwd()
  // const flags = process.argv.slice(2)
  // const watch = flags.includes('--watch')
  // const clean = flags.includes('--clean')
  // // const dts = flags.includes('--dts')
  // console.log(`[${name}] Building...`)
  // if (clean) {
  //   //
  //   const distDir = join(dir, DIR)
  //   rmSync(distDir, { recursive: true, force: true })
  // }
  // const config = await getConfig({ dir })
  // if (watch) {
  //   //
  //   config.watch = {
  //     include: config.input,
  //     chokidar: { ignoreInitial: true },
  //   }
  //   const watcher = watchRollup(config)
  //   console.log(`[${name}][JS] Watching source files...`)
  //   watcher.on('change', () => {
  //     console.log(`[${name}][JS] File changed, rebuilding...`)
  //   })
  //   //
  // } else {
  //   //
  //   const build = await rollup(config)
  //   console.log(`[${name}][JS] Building...`, build)
  //   await Promise.all(config.output.map((output) => build.write(output)))
  //   console.log(`[${name}][JS] Generated CJS and ESM files ✅`)
  // }
  const config = await getConfig({ dir })
  const build = await rollup(config)
  console.log(`[${name}][JS] Building...`, build)
  await Promise.all(config.output.map((output) => build.write(output)))
  console.log(`[${name}][JS] Generated CJS and ESM files ✅`)
}

main().catch((err) => {
  console.error('Error Occur while building @pillar-ui core components', err)
  process.exit(1)
})
