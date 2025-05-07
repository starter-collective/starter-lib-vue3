<script lang="ts" setup>
const { name } = defineProps<{
  name: string
}>()

function sayHello() {
  // eslint-disable-next-line no-alert
  alert(`Hello, ${name}!`)
}
</script>

<template>
  <button class="starter-lib-vue3-say-hello" @click="sayHello()">
    Say, hi!
  </button>
</template>

<style>
@import url('./style.css');
</style>
