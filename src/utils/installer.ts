import type { App, Plugin } from 'vue'
import type { InstallOptions } from './types'
import { version } from '../../package.json'
import { provideGlobalConfig } from './global-config'

export const INSTALLED_KEY = Symbol('INSTALLED_KEY')

declare module 'vue' {
  interface App {
    [INSTALLED_KEY]?: boolean
  }
}

export function createInstaller(components: Plugin[] = []): { install: (app: App, options?: InstallOptions) => void, version: string } {
  const install = (app: App, options?: InstallOptions): void => {
    if (app[INSTALLED_KEY])
      return

    app[INSTALLED_KEY] = true
    components.forEach(c => app.use(c))

    if (options)
      provideGlobalConfig(options, app, true)
  }

  return {
    install,
    version,
  }
}
