import type { App, Component } from 'vue'

export function withInstall<T extends Component>(comp: T): T {
  (comp as Record<string, unknown>).install = (app: App) => {
    const compName = comp.name
    if (!compName)
      return
    app.component(compName, comp)
  }
  return comp
}
