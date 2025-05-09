import type { App, Plugin } from 'vue'
import { version } from '../../package.json'

export const INSTALLED_KEY = Symbol('INSTALLED_KEY')

declare module 'vue' {
  interface App {
    [INSTALLED_KEY]?: boolean
  }
}

export function createInstaller(components: Plugin[] = []): { install: (app: App) => void, version: string } {
  const install = (app: App): void => {
    if (app[INSTALLED_KEY])
      return

    app[INSTALLED_KEY] = true
    components.forEach(c => app.use(c))
  }

  return {
    install,
    version,
  }
}
