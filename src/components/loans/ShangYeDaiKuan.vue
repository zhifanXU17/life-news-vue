<template>
  <div class="px-2 py-6">
    <div class="flex items-center justify-between gap-4">
      <label for="method" class="w-20 font-bold">计算方式</label>
      <select
        id="method"
        v-model="type"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="totalLoanAmount">按贷款总额</option>
        <option value="totalHousePrice">按房屋总价</option>
      </select>
    </div>

    <form onsubmit="" v-if="type === 'totalLoanAmount'"></form>

    <form onsubmit="" v-else></form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const type = ref('totalLoanAmount')

// const loanForm = reactive({
//   count: 0,
//   LPR: 3.65,
// })

// const HouseForm = reactive({})
</script>

<style scoped></style>
