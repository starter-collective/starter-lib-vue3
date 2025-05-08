declare module 'vue' {
  export interface GlobalComponents {
    StSayHello: typeof import('starter-lib-vue3')['StSayHello']
  }
}

export { }
