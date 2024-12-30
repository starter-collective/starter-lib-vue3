# Getting Started

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

If you're not too concerned about the bundled file size, using full import is more convenient.

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

## Browser Direct Import

You can use the global variable `StarterLibVue3` by importing directly through the browser's HTML `script` tag.

```js
<script src="https://unpkg.com/starter-lib-vue3"></script>
```

There are different import methods depending on the CDN provider. Here we use unpkg as an example. You can also use other CDN providers.

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

## Volar Support

If you're using Volar, specify global component types via `compilerOptions.type` in `tsconfig.json`.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["starter-lib-vue3/volar"]
  }
}
```

Now you can get component type hints through Volar.
