import type { App, AppContext, InjectionKey, Plugin, Ref } from 'vue'

export type MaybeRef<T> = T | Ref<T>

export interface InstallOptions {
  zIndex?: MaybeRef<number>
  size?: MaybeRef<string>
}

export type ProvideFn = (<T>(key: string | InjectionKey<T>, value: T) => App<any>) | (<T>(key: string | number | InjectionKey<T>, value: T) => void) | undefined

export type InstallWithSFC<T> = T & Plugin

export type InstallWithContext<T> = InstallWithSFC<T> & {
  _context: AppContext | null
}
