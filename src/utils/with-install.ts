import type { App } from 'vue'
import type { InstallWithContext, InstallWithSFC } from './types'

export function installWithSFC<T, E extends Record<string, any>>(main: T, extra?: E): InstallWithSFC<T> & E {
  (main as InstallWithSFC<T>).install = (app: App): void => {
    for (const comp of [main, ...Object.values(extra ?? {})])
      app.component(comp.name, comp)
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra))
      (main as any)[key] = comp
  }
  return main as InstallWithSFC<T> & E
}

export function installWithFunction<T>(fn: T, name: string): InstallWithContext<T> {
  (fn as InstallWithSFC<T>).install = (app: App) => {
    ; (fn as InstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }

  return fn as InstallWithContext<T>
}
