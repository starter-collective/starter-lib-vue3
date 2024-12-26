<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
})

const decoded = computed(() => {
  return decodeURIComponent(props.source)
})
</script>

<template>
  <div class="example-source-code language-vue" v-html="decoded" />
</template>

<style scoped>
.example-source-code {
  overflow-x: auto;
  padding: 0 !important;
  margin: 0 !important;
  border-radius: 0 !important;
  z-index: 99;
}

.language-vue{
  position: unset !important;
}
</style>
