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
.starter-lib-vue3-say-hello{
  background: #42b883;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
}
</style>
