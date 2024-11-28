/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

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
      outDir: './dist/types',
      entryRoot: './src',
      exclude: ['node_modules', 'tests', 'vite.config.ts'],
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
    emptyOutDir: false,
    cssTarget: 'chrome61',
    minify: true,
    lib: {
      entry: 'src/index.ts',
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      input: 'src/index.ts',
      output: [
        {
          format: 'es',
          dir: 'dist/es',
          entryFileNames: '[name].js',
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'cjs',
          dir: 'dist/lib',
          entryFileNames: '[name].js',
        },
        {
          format: 'iife',
          dir: 'dist/iife',
          entryFileNames: 'index.js',
          name: 'StarterLibVue3',
        },
      ],
    },
  },
})
