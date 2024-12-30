declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SayHello: typeof import('starter-lib-vue3')['SayHello']
  }
}

export { }
