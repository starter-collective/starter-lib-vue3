<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, ref } from 'vue'

const emit = defineEmits(['toggle', 'copy', 'open'])

const { lang } = useData()

const code = ref(false)

const copy = ref(false)

const codeText = computed(() => {
  if (!code.value) {
    return lang.value === 'en-US' ? 'Show Code' : '显示代码'
  }
  else {
    return lang.value === 'en-US' ? 'Hide Code' : '隐藏代码'
  }
})

const copyCodeText = computed(() => {
  if (!copy.value) {
    return lang.value === 'en-US' ? 'Copy Code' : '复制代码'
  }
  else {
    return lang.value === 'en-US' ? 'Copied to clipboard' : '已复制到剪贴板'
  }
})

const viewCodeText = computed(() => lang.value === 'en-US' ? 'View Source Code' : '查看源码')

function toggleSourceCode() {
  code.value = !code.value
  emit('toggle')
}

function copySourceCode() {
  copy.value = true
  setTimeout(() => {
    copy.value = false
  }, 3000)
  emit('copy')
}

function openSourceCode() {
  emit('open')
}
</script>

<template>
  <div class="example-operate">
    <i class="icon" :title="codeText" @click="toggleSourceCode">
      <svg v-if="!code" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23zm11.42 9.484L17.64 6l1.932.517L14.352 26z"
        />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="m17.713 13.471l1.863-6.953L17.645 6l-1.565 5.838zm6.494 6.494l1.414 1.414L31 16l-7-7l-1.414 1.414L28.172 16zM30 28.586L3.414 2L2 3.414l5.793 5.793L1 16l7 7l1.414-1.414L3.828 16l5.379-5.379l5.677 5.677l-2.461 9.184l1.932.518l2.162-8.069L28.586 30z"
        />
      </svg>
    </i>
    <i class="icon" :title="copyCodeText" @click="copySourceCode">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M28 10v18H10V10zm0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"
        />
        <path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z" />
      </svg>
    </i>
    <i class="icon" :title="viewCodeText" @click="openSourceCode">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
        <path
          fill="currentColor" fill-rule="evenodd"
          d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.7 3.7 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
        />
      </svg>
    </i>
  </div>
</template>

<style scoped>
.example-operate {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.example-operate .icon {
  cursor: pointer;
  color: #aaa;
  position: relative;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.example-operate .icon:hover {
  opacity: 0.8;
  transition: all 0.3s ease-in-out;
}

.example-operate .icon:hover::after {
  cursor: auto;
  content: attr(title);
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.25rem 0.5rem;
  background-color: #333;
  color: #fff;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: 999;
  font-style: normal;
}
</style>
