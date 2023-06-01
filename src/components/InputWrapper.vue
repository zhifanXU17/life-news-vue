<template>
  <div class="flex mb-4 items-center justify-between gap-2">
    <div class="relative flex-1">
      <img
        :src="icon"
        class="w-5 h-5 absolute inset-y-0 left-2 top-2.5 pointer-events-none"
        alt="icon"
      />

      <input
        type="text"
        :value="modelValue"
        @input="updateValue"
        :disabled="disabled"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :class="disabled ? 'cursor-not-allowed' : ''"
        :placeholder="label"
      />
    </div>

    <span class="w-12">{{ unit }}</span>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

defineProps<{
  label: string
  icon: string
  modelValue: number | null | string
  disabled?: boolean
  unit: string
}>()

const emit = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'update:modelValue', value: number | null): void
}>()

const updateValue = (e: Event) => {
  const value = (e.target as HTMLInputElement).value

  if (value === null || value === '') {
    emit('update:modelValue', null)
  } else {
    emit('update:modelValue', parseFloat(value))
  }
}
</script>

<style scoped lang="scss"></style>
