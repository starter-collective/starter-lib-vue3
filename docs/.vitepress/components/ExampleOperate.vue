<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['toggle', 'copy', 'open'])

const code = ref(false)

function toggleSourceCode() {
  code.value = !code.value
  emit('toggle')
}

const copy = ref(false)
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
    <i class="icon" :title="!code ? '展示代码' : '隐藏代码'" @click="toggleSourceCode">
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
    <i class="icon" :title="copy ? '已复制到剪贴板' : '复制代码'" @click="copySourceCode">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M28 10v18H10V10zm0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"
        />
        <path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z" />
      </svg>
    </i>
    <i class="icon" title="访问源码" @click="openSourceCode">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M5.544 2.673a1.549 1.549 0 0 1 1.8.097v.001c.246.198.426.466.515.769l1.446 4.428h5.39L16.14 3.54a1.54 1.54 0 0 1 .515-.769l.004-.004a1.554 1.554 0 0 1 1.795-.095l.002.001c.274.174.486.43.605.732l.004.01l2.473 6.451a5.45 5.45 0 0 1-1.813 6.303l-6.73 5.064h-.002a1.66 1.66 0 0 1-2 0l-6.731-5.065a5.452 5.452 0 0 1-1.806-6.294l2.48-6.469c.12-.302.333-.558.607-.732m.811 2.063L4.16 10.464c-.28.737-.337 1.604-.12 2.362c.217.755.671 1.42 1.295 1.896l6.66 5.01l6.653-5.005a3.65 3.65 0 0 0 1.308-1.904c.22-.76.159-1.638-.123-2.378l-2.189-5.71L16 9.769H8z"
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

.example-operate .icon:hover ::after {
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
