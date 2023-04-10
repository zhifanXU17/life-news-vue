<template>
  <div class="min-h-screen bg-neutral-100 dark:bg-gray-900 font-LXGWWenKai">
    <header
      class="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 shadow-sm flex items-center"
    >
      <nav
        class="container px-4 md:mx-auto flex items-center justify-between md:justify-start"
      >
        <form class="flex items-center" @submit.prevent="handleSearch">
          <div class="relative w-64">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              v-model.trim="searchItem"
              id="simple-search"
              class="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>

        <ul
          class="hidden px-14 max-w-sm md:flex items-center justify-between mr-auto"
        >
          <router-link to="/technology" custom v-slot="{ navigate, isActive }">
            <li
              @click="navigate"
              class="px-4 hover:cursor-pointer hover:text-teal-500 dark:text-white dark:hover:text-teal-500"
              :class="isActive ? 'text-teal-500' : ''"
            >
              科技
            </li>
          </router-link>
          <router-link to="/finance" custom v-slot="{ navigate, isActive }">
            <li
              @click="navigate"
              class="px-4 hover:cursor-pointer hover:text-teal-500 dark:text-white dark:hover:text-teal-500"
              :class="isActive ? 'text-teal-500' : ''"
            >
              财经
            </li>
          </router-link>
          <router-link to="/hub" custom v-slot="{ navigate, isActive }">
            <li
              @click="navigate"
              class="px-4 hover:cursor-pointer hover:text-teal-500 dark:text-white dark:hover:text-teal-500"
              :class="isActive ? 'text-teal-500' : ''"
            >
              社区
            </li>
          </router-link>
          <router-link
            to="/entertainment"
            custom
            v-slot="{ navigate, isActive }"
          >
            <li
              @click="navigate"
              class="px-4 hover:cursor-pointer hover:text-teal-500 dark:text-white dark:hover:text-teal-500"
              :class="isActive ? 'text-teal-500' : ''"
            >
              娱乐
            </li>
          </router-link>
        </ul>

        <button
          type="button"
          class="text-white w-10 h-10 rounded bg-purple-700 dark:bg-orange-400 flex items-center justify-center focus:outline-none focus:ring-4 animate-darkMode-Button"
          @click="toggleTheme"
          v-if="!isDark"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <button
          v-else
          type="button"
          @click="toggleTheme"
          class="text-white w-10 h-10 rounded bg-orange-400 flex items-center justify-center focus:outline-none focus:ring-4 animate-darkMode-Button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
            />
          </svg>
        </button>

        <button
          type="button"
          class="md:hidden w-10 h-10 rounded border border-gray-400 dark:text-white flex items-center justify-center focus:outline-none focus:ring-4 animate-darkMode-Button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </header>

    <router-view class="container mx-auto"></router-view>
  </div>
</template>

<script setup lang="ts">
import { isDark as isDarkMode } from '@bassist/utils'
import { useStorage } from '@/hooks'
import type { PrefersColorScheme } from '@bassist/utils'
import { ref } from 'vue'

const searchItem = ref<string>('')
const handleSearch = () => {
  window.open(`https://cn.bing.com/search?q=${searchItem.value}`)
}

const { storage } = useStorage()
const STORAGE_KEY = 'theme-appearance'
const isDark = ref<boolean>(isDarkMode())

function getLocalTheme() {
  return storage.get(STORAGE_KEY)
}

const defaultThemeIsDark = getLocalTheme()
  ? getLocalTheme() === 'dark'
  : isDarkMode()

function updateTheme(isDarkTheme: boolean) {
  const newTheme: PrefersColorScheme = isDarkTheme ? 'dark' : 'light'
  storage.set(STORAGE_KEY, newTheme)
  isDark.value = newTheme === 'dark'

  const root = document.querySelector('html')
  root!.className = newTheme
}

updateTheme(defaultThemeIsDark)

function toggleTheme() {
  const isCurrentThemeDark = getLocalTheme() === 'dark'
  updateTheme(!isCurrentThemeDark)
}
</script>
