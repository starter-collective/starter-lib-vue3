import type { ComponentResolver } from 'unplugin-vue-components'
// import { toLowerCase } from './utils/format'

export function StarterLibVue3Resolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^St[A-Z]/)) {
        return {
          name,
          from: 'starter-lib-vue3',
          // sideEffects: [
          //   `starter-lib-vue3/dist/es/${toLowerCase(name.replace('St', ''))}/style.js`,
          // ],
        }
      }
    },
  }
}
