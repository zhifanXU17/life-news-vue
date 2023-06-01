<template>
  <div
    class="container mx-auto p-2 flex-1 md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4"
  >
    <!-- 颜色转换工具 -->
    <Tool
      :img-url="TulipUrl"
      :img-alt="'tulip image'"
      :href="'colors'"
      :title="'颜色转换工具'"
      :tool-description="'一个色彩转换小工具，用于转换 RGB、RGBA、HEX、HSL 等各种格式。'"
      @open-modal="handleOpenModal"
    />

    <!-- Base64 工具 -->
    <Tool
      :img-url="LilyUrl"
      :img-alt="'lily image'"
      :href="'base64'"
      :title="'Base64 工具'"
      :tool-description="'Base64 可用于避过反垃圾邮件工具等工具，因为那些工具通常都不会翻译Base64 的消息。'"
      @open-modal="handleOpenModal"
    />

    <!-- 房贷计算工具 -->
    <Tool
      :img-url="DaisyUrl"
      :img-alt="'daisy image'"
      :href="'loans'"
      :title="'房贷计算工具'"
      :tool-description="'本计算器提供等额本息、等额本金，及住房公积金贷款特有的自由还款方式的计算参考。在贷款期限方面，支持非整年的期数。贷款利率除提供常用备选利率外，还支持自定义输入。计算结果包含月供、公积金月最低还款额、本息总额等。'"
      @open-modal="handleOpenModal"
    />

    <div class="hidden md:block">
      <!-- 便利贴 -->
      <StickyNote />
    </div>
  </div>

  <router-view v-slot="{ Component }">
    <div
      v-show="isOpen"
      class="z-10 fixed top-0 left-0 w-full h-full bg-half-transparent flex items-center justify-center px-4 py-16"
    >
      <!-- Modal content -->
      <div
        class="z-50 w-full h-full md:w-1/2 overflow-x-hidden overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700"
      >
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ modalTitle }}
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            @click="handleClose"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <component :is="Component" />
      </div>
    </div>
  </router-view>
</template>

<script setup lang="ts">
import StickyNote from '@/components/StickyNote.vue'
import Tool from '@/components/Tool.vue'
import router from '@/router'
import { ref } from 'vue'

import TulipUrl from '@/assets/img/flowers/tulip.svg'
import LilyUrl from '@/assets/img/flowers/lily.svg'
import DaisyUrl from '@/assets/img/flowers/daisy.svg'

const isOpen = ref(false)
const modalTitle = ref('')
const handleOpenModal = (href: string, title: string) => {
  modalTitle.value = title
  isOpen.value = true
  router.push(`/tools/${href}`)
}
const handleClose = () => {
  modalTitle.value = ''
  isOpen.value = false
  router.push('/tools')
}
</script>

<style scoped></style>
