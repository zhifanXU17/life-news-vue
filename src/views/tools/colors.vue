<template>
  <div class="p-4">
    <div class="flex items-center gap-4 mb-4">
      <label for="customColor" class="w-20">选择颜色</label>
      <input
        type="text"
        id="customColor"
        v-model.trim="customColor"
        class="flex-1"
      />
    </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="w-full text-center text-sm text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-3 py-3">格式</th>
            <th scope="col" class="px-6 py-3">结果</th>
            <th scope="col" class="p-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            v-for="color in colors"
            :key="color.name"
          >
            <th
              scope="row"
              class="px-2 py-4 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ color.name }}
            </th>
            <td class="px-6 py-4 border-r">{{ color.value }}</td>
            <td class="p-2">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
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
                <span class="sr-only">Icon description</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
const customColor = ref('')

interface Color {
  name: string
  value: string
}

const colors = reactive<Color[]>([
  {
    name: '16进制',
    value: '',
  },
  {
    name: 'RGB',
    value: '',
  },
  {
    name: 'RGBA',
    value: '',
  },
  {
    name: 'HSL',
    value: '',
  },
  {
    name: 'HSV',
    value: '',
  },
])
</script>

<style></style>
