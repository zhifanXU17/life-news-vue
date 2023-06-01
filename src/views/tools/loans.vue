<template>
  <div class="p-6">
    <InputWrapper
      :icon="Ruler"
      :label="'房子尺寸'"
      v-model="houseSize"
      :unit="'㎡'"
    />
    <InputWrapper
      :icon="Yuan"
      :label="'每平米价格'"
      v-model="costOfSquareMeter"
      :unit="'㎡/元'"
    />
    <InputWrapper
      :icon="House"
      :label="'房子总价'"
      v-model="totalCost"
      :unit="'元'"
      :disabled="true"
    />

    <ul
      class="w-full flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
    >
      <li
        v-for="tab in tabs"
        :key="tab.name"
        class="basis-1/3 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300 dark:hover:text-gray-300 hover:cursor-pointer hover:text-teal-500"
        :class="currentTab === tab.key ? 'text-teal-500' : ''"
        @click="currentTab = tab.key"
      >
        {{ tab.name }}
      </li>
    </ul>

    <KeepAlive>
      <component :is="tabs.find((item) => item.key === currentTab)?.content" />
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import type { Ref } from 'vue'

import InputWrapper from '@/components/InputWrapper.vue'

import Yuan from '@/assets/img/currency-yuan.svg'
import House from '@/assets/img/house.svg'
import Ruler from '@/assets/img/ruler.svg'

const houseSize: Ref<null | number> = ref(null)
const costOfSquareMeter: Ref<null | number> = ref(null)

const totalCost = computed(() => {
  if (houseSize.value !== null && costOfSquareMeter.value !== null) {
    return (houseSize.value * costOfSquareMeter.value).toLocaleString(
      'zh-Hans-CN',
      {
        style: 'currency',
        currency: 'CNY',
      }
    )
  }
  return null
})

import ShangYeDaiKuan from '@/components/loans/ShangYeDaiKuan.vue'
import GongJiJin from '@/components/loans/GongJiJin.vue'
import ZuHeDai from '@/components/loans/ZuHeDai.vue'

const currentTab = ref('ShangYeDaiKuan')
const tabs = reactive([
  {
    name: '商业贷款',
    key: 'ShangYeDaiKuan',
    content: ShangYeDaiKuan,
  },
  {
    name: '公积金',
    key: 'GongJiJin',
    content: GongJiJin,
  },
  {
    name: '组合贷',
    key: 'ZuHeDai',
    content: ZuHeDai,
  },
])
</script>

<style scoped></style>
