# 立即开始

本节将帮助您设置并开始使用 `starter-lib-vue3`。

## 使用包管理器

::: code-group

```sh [npm]
npm install starter-lib-vue3
```

```sh [yarn]
yarn add starter-lib-vue3
```

```sh [pnpm]
pnpm install starter-lib-vue3
```

:::

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```ts
// main.ts
import StarterLibVue3 from 'starter-lib-vue3'
import { createApp } from 'vue'
import App from './App.vue'
import 'starter-lib-vue3/style.css'

const app = createApp(App)

app.use(StarterLibVue3)
app.mount('#app')
```

```vue
<!-- App.vue -->
<template>
  <SayHello name="Kieran" />
</template>
```

## 浏览器直接引入

直接通过浏览器的 HTML `script` 标签导入就可以使用全局变量 `StarterLibVue3` 了。

```js
<script src="https://unpkg.com/starter-lib-vue3"></script>
```

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 unpkg 举例。 你也可以使用其它的 CDN 供应商。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>starter-lib-vue3</title>
  <link rel="stylesheet" href="https://unpkg.com/starter-lib-vue3/dist/style.css">
</head>

<body>
  <div id="app"></div>

  <script src="https://unpkg.com/starter-lib-vue3"></script>
  <script src="./wxdata-ui.umd.cjs"></script>
  <script>
    const app = Vue.createApp({
      template: '<SayHello name="Kieran" />'
    })
    app.use(StarterLibVue3).mount('#app')
  </script>
</body>

</html>
```

## Volar 支持

如果您使用 Volar，请在 `tsconfig.json` 中通过 `compilerOptions.type` 指定全局组件类型。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["starter-lib-vue3/volar"]
  }
}
```

现在，你可以通过 Volar 获得组件的类型提示了。
