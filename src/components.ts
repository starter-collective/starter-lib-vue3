import type { Plugin } from 'vue'
import StSayHello from './say-hello'

export * from './say-hello'

export const components = [
  StSayHello,
] as Plugin[]

export default components
