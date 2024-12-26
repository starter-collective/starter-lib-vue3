import { defineConfig } from 'vitepress'
import pkg from '../../../package.json'
import { GITHUB_URL } from './constants'

export const en = defineConfig({
  lang: 'en-US',
  description: 'Vue 3 component library starter template, provides VitePress documentation, supports building ESM, CJS and IIFE formats.',
  themeConfig: {
    editLink: {
      pattern: `${GITHUB_URL}/edit/main/docs/:path`,
      text: 'Edit this page on GitHub',
    },
    nav: [
      { text: 'Guide', link: '/guide/what-is', activeMatch: '/guide/' },
      { text: 'Components', link: '/components', activeMatch: '/components/' },
      {
        text: `v${pkg.version}`,
        items: [
          {
            text: 'Changelog',
            link: `${GITHUB_URL}/releases`,
          },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'What is starter-lib-vue3?', link: '/guide/what-is' },
          { text: 'Get Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'Components',
        collapsed: false,
        items: [
          { text: 'SayHello', link: '/components/say-hello' },
        ],
      },
    ],
    lastUpdated: {
      text: 'Last Updated',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Kieran Wang',
    },
  },
})
