<template>
  <!-- 便利贴 -->
  <div class="note pt-9">
    <div
      id="jinrishici-sentence"
      class="note-container flex justify-center px-14 py-5"
    >
      {{ gushi }}
    </div>
    <div class="note-bottom pb-9"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const gushi = ref('')

const getGushi = () => {
  fetch('https://v1.jinrishici.com/all.json')
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      gushi.value = jsonData.content
    })
    .catch((err) => {
      console.log('获取古诗词错误：', err)
    })
}

onMounted(() => {
  getGushi()
})
</script>

<style>
.note {
  background: url('@/assets/img/bg-note-top.png') top center no-repeat;
}

.note-container {
  background: url('@/assets/img/bg-note-middle.png') top center repeat-y;
}

.note-bottom {
  background: url('@/assets/img/bg-note-bottom.png') bottom center no-repeat;
}
</style>
