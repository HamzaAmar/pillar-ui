import { fileURLToPath } from 'node:url'
import { extname, relative } from 'path'
import react from '@vitejs/plugin-react'
// import { glob } from 'glob'
import { preserveDirectives } from 'rollup-plugin-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json' assert { type: 'json' }

// const input = await glob('src/core/**/index.tsx')

// console.log('input', input, 'pkg', pkg)
const { peerDependencies = {}, dependencies = {}, name } = pkg

export default defineConfig(() => ({
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      exclude: [],
      //   beforeWriteFile: (filePath, content) => ({
      //     filePath: filePath.replace(`${name}/src/`, ''),
      //     content,
      //   }),

      beforeWriteFile: (filePath, content) => {
        return {
          filePath: filePath.replace(`${name}/src/`, ''),
          content,
        }
      },
    }),
    preserveDirectives(),
  ],
  //   define: {
  //     'process.env': {},
  //   },
  build: {
    emptyOutDir: false,
    copyPublicDir: false,
    sourcemap: true,
    manifest: true,
    target: ['esnext'],
    lib: {
      //   entry: input,
      entry: 'src/index.ts',
      name: 'Pillar-ui/core',
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    rollupOptions: {
      logLevel: 'silent',
      external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
      output: [
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          entryFileNames: '[name].cjs',
          dir: 'dist1/cjs',
          //   banner: (x) => renderBanner(x.fileName),
        },
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          entryFileNames: '[name].js',
          dir: 'dist1/esm',
          //   banner: (x) => renderBanner(x.fileName),
        },
      ],
    },
  },
}))
