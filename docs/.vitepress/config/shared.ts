import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'Vue3 Component Library Starter Template',
  rewrites: {
    'en/:rest*': ':rest*',
  },
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  sitemap: {
    hostname: 'https://starter-lib-vue3.netlify.app/',
    transformItems(items) {
      return items.filter(item => !item.url.includes('migration'))
    },
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#FF057C' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Vue3 Component Library Starter Template' }],
    ['meta', { property: 'og:site_name', content: 'Vue3 Component Library Starter Template' }],
    ['meta', { property: 'og:image', content: '/logo.png' }],
    ['meta', { property: 'og:url', content: 'https://starter-lib-vue3.netlify.app/' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/starter-collective/starter-lib-vue3' },
    ],
    search: {
      provider: 'local',
    },
  },
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
})
