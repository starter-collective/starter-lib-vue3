/// <reference types="vitest/config" />

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
      outDir: './dist',
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
      cssFileName: 'style',
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      input: 'src/index.ts',
      output: [
        {
          format: 'es',
          entryFileNames: 'index.js',
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'cjs',
          entryFileNames: 'index.cjs',
        },
        {
          format: 'iife',
          entryFileNames: 'index.global.js',
          name: 'StarterLibVue3',
        },
      ],
    },
  },
})
