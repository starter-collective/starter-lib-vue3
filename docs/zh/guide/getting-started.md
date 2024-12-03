# 快速开始

## 安装

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

它将作为 `window.StarterLibVue3` 暴露在全局对象中

## 使用示例

```vue
<script setup>
import { SayHello } from 'starter-lib-vue3'
</script>

<template>
  <SayHello name="Kieran" />
</template>
```

更多详情请参考[组件列表](/components/index)。
