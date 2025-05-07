/// <reference types="vitest/config" />

import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import { viteBundleStyles } from 'vite-plugin-bundle-styles'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    // Vue & Jsx plugin.
    // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue
    // https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx
    vue(),
    vueJsx(),

    // Generate types.
    // https://github.com/qmhc/vite-plugin-dts
    dts({
      tsconfigPath: 'tsconfig.json',
      outDir: './dist/es',
      entryRoot: './src',
      exclude: ['node_modules', 'tests', 'vite.config.ts'],
    }),
    dts({
      tsconfigPath: 'tsconfig.json',
      outDir: './dist/lib',
      entryRoot: './src',
      exclude: ['node_modules', 'tests', 'vite.config.ts'],
    }),

    // Copy volar.d.ts to dist folder.
    // https://github.com/sapphi-red/vite-plugin-static-copy
    viteStaticCopy({
      targets: [
        { src: './src/volar.d.ts', dest: './' },
      ],
      hook: 'writeBundle',
    }),

    // Bundle styles from components.
    // https://github.com/kieranwv/vite-plugin-bundle-styles
    viteBundleStyles({
      target: './src',
    }),
  ],

  // Vitest config.
  // https://github.com/vitest-dev/vitest
  test: {
    include: ['tests/**/*'],
    environment: 'jsdom',
  },

  // Build config.
  // Vite Library mode, read more: https://vite.dev/guide/build.html#library-mode
  // https://vitejs.dev/config/#build-options
  build: {
    emptyOutDir: true,
    cssTarget: 'chrome61',
    minify: true,
    cssCodeSplit: true,
    lib: {
      entry: 'src/index.ts',
      name: 'StarterLibVue3',
      fileName: format => `index.${format}.js`,
      cssFileName: 'style',
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
          dir: './dist/es',
          assetFileNames: (assetInfo) => {
            if (assetInfo.names && assetInfo.names.some(name => name.endsWith('.css'))) {
              return path.join(path.dirname(assetInfo.names[0]), 'style.css')
            }
            return '[name].[ext]'
          },
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'src',
          dir: './dist/lib',
          assetFileNames: (assetInfo) => {
            if (assetInfo.names && assetInfo.names.some(name => name.endsWith('.css'))) {
              return path.join(path.dirname(assetInfo.names[0]), 'style.css')
            }
            return '[name].[ext]'
          },
        },
        {
          format: 'umd',
          entryFileNames: 'index.js',
          exports: 'named',
          name: 'StarterLibVue3',
          dir: './dist/umd',
          globals: {
            vue: 'Vue',
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.names && assetInfo.names.some(name => name.endsWith('.css'))) {
              return path.join(path.dirname(assetInfo.names[0]), 'style.css')
            }
            return '[name].[ext]'
          },
        },
      ],
    },
  },
})
