import { defineConfig } from 'vitepress'
import pkg from '../../../package.json'
import { GITHUB_URL } from './constants'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: 'Vue 3 组件库启动模板，提供 VitePress 文档，支持构建 ESM、CJS 和 IIFE 格式。',
  themeConfig: {
    editLink: {
      pattern: `${GITHUB_URL}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页面',
    },
    nav: [
      { text: '指南', link: '/zh/guide/what-is', activeMatch: '/zh/guide/' },
      { text: '组件', link: '/zh/components', activeMatch: '/zh/components/' },
      {
        text: `v${pkg.version}`,
        items: [
          {
            text: '更新日志',
            link: `${GITHUB_URL}/releases`,
          },
        ],
      },
    ],
    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '什么是 starter-lib-vue3？', link: '/zh/guide/what-is' },
          { text: '快速开始', link: '/zh/guide/getting-started' },
        ],
      },
      {
        text: '组件',
        collapsed: false,
        items: [
          { text: 'SayHello', link: '/zh/components/say-hello' },
        ],
      },
    ],
    lastUpdated: {
      text: '最后更新于',
    },
    footer: {
      message: '基于 MIT 许可证发布。',
      copyright: '版权 © 2024-present Kieran Wang',
    },
  },
})
