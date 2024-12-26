<script setup lang="ts">
defineProps({
  file: {
    type: String,
    required: true,
  },
  comp: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="example-component">
    <ClientOnly>
      <component :is="comp" v-if="comp" v-bind="$attrs" />
    </ClientOnly>
  </div>
</template>

<style scoped>
.example-component {
  padding: 1.5rem;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
