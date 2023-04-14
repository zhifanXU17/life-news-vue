<template>
  <div>
    <input
      type="text"
      v-model.trim="rbgValue"
      class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const rbgValue = ref('')
</script>

<style></style>
