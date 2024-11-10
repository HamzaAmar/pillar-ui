import { fileURLToPath } from 'node:url'
import { extname, relative } from 'path'
import react from '@vitejs/plugin-react'
// import { glob } from 'glob'
import glob from 'fast-glob'
import { preserveDirectives } from 'rollup-plugin-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from '../package.json' assert { type: 'json' }

const input = await glob('src/core/**/index.tsx')

export default defineConfig(() => ({
  plugins: [
    react(),
    dts({
      entryRoot: 'src',
      exclude: [],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace(`${pkg.name}/src/`, ''),
        content,
      }),
    }),
    preserveDirectives(),
  ],
  define: {
    'process.env': {},
  },

  build: {
    emptyOutDir: false,
    copyPublicDir: false,
    sourcemap: true,
    manifest: true,
    minify: false,
    target: ['esnext'],

    // lib: {
    //     entry: Object.fromEntries(
    //       glob
    //         .sync('src/core/**/*.{ts,tsx,js,jsx,mjs,cjs}', {
    //           ignore: 'src/**/*.{stories,test,specs}.{ts,tsx,js,jsx,mjs,cjs}',
    //         })
    //         .map((file) => [
    //           // The name of the entry point
    //           // lib/nested/foo.ts becomes nested/foo
    //           relative('src', file.slice(0, file.length - extname(file).length)),
    //           // The absolute path to the entry file
    //           // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
    //           fileURLToPath(new URL(file, import.meta.url)),
    //         ])
    //     ),
    //   name: 'Pillar-ui/core',
    //   formats: ['es', 'cjs'],
    //   fileName: (format, entry) => {
    //     const extention = format === 'es' ? 'mjs' : 'cjs'
    //     return `${entry}.${extention}`
    //   },
    // },

    lib: {
      entry: input,
      name: 'Pillar-ui/core',
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },

    rollupOptions: {
      logLevel: 'silent',
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
        ...Object.keys(pkg.devDependencies),
      ],
      output: [
        {
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          entryFileNames: '[name].cjs',
          dir: resolve('dist1/cjs'),

          //   banner: (x) => renderBanner(x.fileName),
        },
        {
          format: 'es',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
          entryFileNames: '[name].js',
          dir: resolve('dist1/esm'),

          //   banner: (x) => renderBanner(x.fileName),
        },
      ],
    },
  },
}))
