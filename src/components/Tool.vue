<template>
  <div
    class="mb-2 flex p-4 gap-4 md:max-w-[24rem] md:max-h-[21rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <img class="w-36" :src="imgUrl" :alt="imgAlt" />

    <div>
      <h5
        class="mb-2 text-lg flex items-center font-bold tracking-tight text-gray-900 dark:text-white hover:cursor-pointer"
        @click="handleClick(href, title)"
      >
        <span class="mr-2">{{ title }}</span>
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
        {{ toolDescription }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  imgUrl: string
  imgAlt: string
  href: string
  title: string
  toolDescription: string
}>()

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'openModal', href: string, title: string): void
}>()

const handleClick = (href: string, title: string) => {
  emit('openModal', href, title)
}
</script>

<style scoped></style>
