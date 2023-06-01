<template>
  <div
    class="flex flex-col min-h-screen bg-neutral-100 dark:bg-gray-900 font-LXGWWenKai text-sm md:text-base"
  >
    <Header />

    <router-view></router-view>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
