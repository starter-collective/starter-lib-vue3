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

### 完整导入

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
  <StSayHello name="Kieran" />
</template>
```

### 按需自动导入

通过安装 `unplugin-vue-components` 和 `unplugin-auto-import` 插件，实现组件按需自动导入。

::: code-group

```sh [pnpm]
pnpm add unplugin-vue-components unplugin-auto-import -D
```

```sh [yarn]
yarn add unplugin-vue-components unplugin-auto-import -D
```

```sh [npm]
npm install unplugin-vue-components unplugin-auto-import -D
```

:::

然后把下列代码插入到你的 `Vite` 配置文件中：

```ts
// vite.config.ts
import { StarterLibVue3Resolver } from 'starter-lib-vue3'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [StarterLibVue3Resolver()],
    }),
    Components({
      resolvers: [StarterLibVue3Resolver()],
    }),
  ],
})
```

现在你可以在 SFC 文件中直接使用 starter-lib-vue3 的组件，并且其样式也是自动化的导入。

```vue
<script>
// 无需手动引入 :P
// import { StSayHello } from 'starter-lib-vue3'
// import 'starter-lib-vue3/dist/es/say-hello/SayHello.css'
</script>

<template>
  <StSayHello name="Kieran" />
</template>
```

### 按需手动导入

你可已手动导入你需要的组件（组件由逻辑文件和样式文件组成）：

```vue
<script>
import { StSayHello } from 'starter-lib-vue3'
import 'starter-lib-vue3/dist/es/say-hello/SayHello.css'

export default {
  components: { StSayHello },
}
</script>

<template>
  <StSayHello name="Kieran" />
</template>
```

## 浏览器直接导入

直接通过浏览器的 HTML `script` 标签导入就可以使用全局变量 `StarterLibVue3` 了。

```js
<script src="https://unpkg.com/starter-lib-vue3"></script>
```

根据不同的 CDN 提供商有不同的导入方式， 我们在这里以 unpkg 举例。 你也可以使用其它的 CDN 供应商。

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
      template: '<StSayHello name="Kieran" />'
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
