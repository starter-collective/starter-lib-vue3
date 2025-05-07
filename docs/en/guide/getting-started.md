# Getting Started

This section will help you set up and start using `starter-lib-vue3`.

## Using Package Manager

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

### Full Import

If you're not concerned about the final bundle size, using full import is more convenient.

```ts
// main.ts
import StarterLibVue3 from 'starter-lib-vue3'
import { createApp } from 'vue'
import App from './App.vue'
import 'starter-lib-vue3/style'

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

### Auto Import On Demand

You can achieve component auto import by installing the `unplugin-vue-components` and `unplugin-auto-import` plugins.

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

Then add the following code to your `Vite` configuration file:

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

Now you can directly use starter-lib-vue3 components in SFC files, and their styles will be automatically imported.

```vue
<script>
// No need to manually import :P
// import { StSayHello } from 'starter-lib-vue3'
// import 'starter-lib-vue3/dist/es/say-hello/style.css'
</script>

<template>
  <StSayHello name="Kieran" />
</template>
```

### Manual Import On Demand

You can manually import the components you need (components consist of logic files and style files):

```vue
<script>
import { StSayHello } from 'starter-lib-vue3'
import 'starter-lib-vue3/dist/es/say-hello/style.css'

export default {
  components: { StSayHello },
}
</script>

<template>
  <StSayHello name="Kieran" />
</template>
```

## Browser Direct Import

You can use the global variable `StarterLibVue3` by directly importing through the browser's HTML `script` tag.

```js
<script src="https://unpkg.com/starter-lib-vue3"></script>
```

Different CDN providers have different import methods. Here we use unpkg as an example. You can also use other CDN providers.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>starter-lib-vue3</title>
</head>

<body>
  <div id="app"></div>

  <script src="https://unpkg.com/starter-lib-vue3"></script>
  <script>
    const app = Vue.createApp({
      template: '<StSayHello name="Kieran" />'
    })
    app.use(StarterLibVue3).mount('#app')
  </script>
</body>

</html>
```

## Volar Support

If you're using Volar, please specify global component types via `compilerOptions.type` in `tsconfig.json`.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["starter-lib-vue3/volar"]
  }
}
```

Now, you can get component type hints through Volar.
