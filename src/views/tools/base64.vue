<template>
  <div class="p-6 space-y-6">
    <label
      for="message"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      明文
    </label>
    <textarea
      id="message"
      v-model="message"
      ref="messageRef"
      rows="4"
      class="block p-2.5 w-full text-sm outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
    <div class="mt-4 min-h-[1.5rem]">
      <p v-show="isEmptyMessage" class="text-red-600 dark:text-red-500">
        明文不能为空
      </p>
      <p v-show="isValidMessage" class="text-sm text-red-600 dark:text-red-500">
        明文输入了非法字符
      </p>
    </div>

    <button
      type="button"
      @click="handleEncode"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 mr-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
        />
      </svg>
      Base64 编码
    </button>

    <button
      type="button"
      @click="handleDecode"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 mr-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
        />
      </svg>
      Base64 解码
    </button>

    <label
      for="codedText"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Base64
    </label>
    <textarea
      id="codedText"
      v-model="codedText"
      ref="codedTextRef"
      rows="4"
      class="block p-2.5 w-full text-sm outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
    ></textarea>
    <div class="min-h-[1.5rem] mt-4">
      <p v-show="isEmptyCodedText" class="text-red-600 dark:text-red-500">
        密文不能为空
      </p>
      <p v-show="isValidCodedText" class="text-red-600 dark:text-red-500">
        密文输入了非法字符
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Base64 } from 'js-base64'

const message = ref('')
const isEmptyMessage = ref(false)
const isValidMessage = ref(false)
const messageRef = ref<HTMLTextAreaElement | null>(null)

const codedText = ref('')
const isEmptyCodedText = ref(false)
const isValidCodedText = ref(false)
const codedTextRef = ref<HTMLTextAreaElement | null>(null)

const initCheckStatus = () => {
  isEmptyMessage.value = false
  isValidMessage.value = false

  isEmptyCodedText.value = false
  isValidCodedText.value = false
}
const handleEncode = () => {
  initCheckStatus()
  if (message.value === '') {
    isEmptyMessage.value = true
    const errorClassList = ' ring-1 ring-red-500'
    if (messageRef.value?.classList) {
      messageRef.value.classList.value += errorClassList
    }
    return
  }

  if (Base64.isValid(message.value)) {
    isValidMessage.value = false
    codedText.value = Base64.encode(message.value)
  } else {
    isValidMessage.value = true
    const errorClassList = ' ring-1 ring-red-500'
    if (messageRef.value?.classList) {
      messageRef.value.classList.value += errorClassList
    }
  }
}

const handleDecode = () => {
  initCheckStatus()
  if (codedText.value === '') {
    isEmptyCodedText.value = true
    const errorClassList = ' ring-1 ring-red-500'
    if (codedTextRef.value?.classList) {
      codedTextRef.value.classList.value += errorClassList
    }
    return
  }

  if (Base64.isValid(codedText.value)) {
    isValidCodedText.value = false
    message.value = Base64.decode(codedText.value)
  } else {
    isValidCodedText.value = true
    const errorClassList = ' ring-1 ring-red-500'
    if (codedTextRef.value?.classList) {
      codedTextRef.value.classList.value += errorClassList
    }
  }
}
</script>

<style scoped></style>
