import type { ComponentResolver } from 'unplugin-vue-components'

export function StarterLibVue3Resolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^Wx[A-Z]/)) {
        return {
          name,
          from: 'starter-lib-vue3',
        }
      }
    },
  }
}
