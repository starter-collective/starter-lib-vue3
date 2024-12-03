# Get Started

## Installation

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

## CDN

```js
<script src="https://unpkg.com/starter-lib-vue3"></script>
```

It will be exposed to global as `window.StarterLibVue3`

## Usage Example

```vue
<script setup>
import { SayHello } from 'starter-lib-vue3'
</script>

<template>
  <SayHello name="Kieran" />
</template>
```

Refer to [component list](/components/index) for more details.
