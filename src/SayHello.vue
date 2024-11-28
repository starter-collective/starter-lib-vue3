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
    Hi
  </button>
</template>

<style>
.starter-lib-vue3-say-hello{
  background-color: #FF057C;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
