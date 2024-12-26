<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { useData } from 'vitepress'
import { computed, ref } from 'vue'
import { GITHUB_EDIT_URL } from '../config/constants'
import ExampleComponent from './ExampleComponent.vue'
import ExampleOperate from './ExampleOperate.vue'
import ExampleSourceCode from './ExampleSourceCode.vue'

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  rawSource: {
    type: String,
    required: true,
  },
})

const { isDark } = useData()

const components = import.meta.glob('../../examples/**/*.vue', { eager: true })

const pathComponents = computed(() => {
  const _obj = {}
  Object.keys(components).forEach((key) => {
    _obj[key.replace('../../components/', '').replace('.vue', '')]
      = components[key].default
  })
  return _obj
})

const showCode = ref(false)

function toggleHandle() {
  showCode.value = !showCode.value
}

const { copy } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

function copyHandle() {
  copy()
}

const path = computed(() => {
  return props.path.replace(/\/\//g, '/')
})

function openHandle() {
  window.open(`${GITHUB_EDIT_URL}/docs/${path.value}`)
}
</script>

<template>
  <ClientOnly>
    <div class="example" :class="{ dark: isDark }">
      <div class="example-component-wrapper">
        <ExampleComponent :file="path" :comp="pathComponents[path]" />
      </div>
      <div class="example-operate-wrapper">
        <ExampleOperate @toggle="toggleHandle" @copy="copyHandle" @open="openHandle" />
      </div>
      <div v-show="showCode" class="example-source-code-wrapper">
        <ExampleSourceCode :source="source" />
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped>
.example {
  border: 1px solid;
  border-color: var(--vp-c-divider);
  border-radius: 4px;
  padding: 0;
}

.example-component-wrapper,
.example-operate-wrapper {
  padding: 0.5rem;
}

.example-source-code-wrapper,
.example-operate-wrapper {
  border-top: 1px solid;
  border-color: var(--vp-c-divider);
}

.example-operate-wrapper {
  background-color: var(--vp-c-bg-soft);
}
</style>
