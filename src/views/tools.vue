<template>
  <div
    class="container mx-auto flex-1 p-2 md:grid md:grid-cols-4 md:grid-rows-3 md:gap-4 md:px-0 md:py-6 relative overflow-auto"
  >
    <!-- 颜色转换工具 -->
    <div
      class="p-6 mb-2 md:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex gap-4"
    >
      <img
        src="@/assets/img/flowers/郁金香.svg"
        class="w-1/2"
        alt="tulip image"
      />

      <div>
        <h5
          class="mb-2 text-lg flex items-center font-bold tracking-tight text-gray-900 dark:text-white hover:cursor-pointer"
          @click="handleClick('colors', '颜色转换工具')"
        >
          <span class="mr-2">颜色转换工具</span>
          <svg
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </h5>

        <p class="mb-3 text-gray-700 dark:text-gray-400">
          一个色彩转换小工具，用于转换 RGB、RGBA、HEX、HSL 等各种格式。
        </p>
      </div>
    </div>

    <!-- Base64 工具 -->
    <div
      class="p-6 mb-2 md:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex gap-4"
    >
      <img
        src="@/assets/img/flowers/百合花.svg"
        class="w-1/2"
        alt="lily image"
      />

      <div>
        <h5
          class="mb-2 text-lg flex items-center font-bold tracking-tight text-gray-900 dark:text-white hover:cursor-pointer"
          @click="handleClick('base64', 'Base64 工具')"
        >
          <span class="mr-2">Base64 工具</span>
          <svg
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </h5>

        <p class="mb-3 text-gray-700 dark:text-gray-400">
          Base64 可用于避过反垃圾邮件工具等工具，因为那些工具通常都不会翻译
          Base64 的消息。
        </p>
      </div>
    </div>

    <div class="hidden md:block">
      <!-- 便利贴 -->
      <StickyNote />
    </div>
  </div>

  <Transition name="bounce">
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
        <div class="p-6 space-y-6">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import StickyNote from '@/components/StickyNote.vue'
import router from '@/router'
import { ref } from 'vue'

const isOpen = ref(false)
const modalTitle = ref('')
const handleClick = (href: string, title: string) => {
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

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.3s ease-in-out;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
