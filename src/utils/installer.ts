import type { Plugin } from 'vue'
import type { InstallOptions } from './types'
import { version } from '../../package.json'
import { provideGlobalConfig } from './global-config'

export const INSTALLED_KEY = Symbol('STARTER_LIB_VUE3_INSTALLED_KEY')

export function createInstaller(components: Plugin[] = []): { install: (app: any, options?: InstallOptions) => void, version: string } {
  const install = (app: any, options?: InstallOptions): void => {
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
