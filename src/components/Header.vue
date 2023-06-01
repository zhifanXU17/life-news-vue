<template>
  <header
    class="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 shadow-sm flex items-center"
  >
    <nav
      class="container px-4 md:mx-auto flex items-center justify-between md:justify-start"
    >
      <svg
        t="1681491394749"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="7454"
        class="w-8 md:w-24 h-6"
      >
        <path
          d="M0 0h1024v1024H0z"
          fill="#FFFFFF"
          p-id="7455"
          data-spm-anchor-id="a313x.7781069.0.i5"
          class="selected"
        ></path>
        <path
          d="M689.12 613.632l-30.336 10.24 30.336-10.24z m47.104 318.08a32 32 0 1 0 63.552-7.424l-63.552 7.424zM65.056 744.32a32 32 0 1 0 61.888 16.224l-61.888-16.224zM287.648 204.544l25.952 18.688-25.92-18.688z m12-9.792l-14.464-28.544 14.464 28.544z m182.208-77.984l-10.24-30.336 10.24 30.336z m285.344 61.504l7.488 31.104-7.488-31.104z m79.488-21.216l-9.024-30.72 9.024 30.72z m56.32 21.44l-28.96 13.664 28.928-13.664z m-0.064 176.096l20.128 24.864-20.16-24.864z m-165.28 117.856l17.6 26.752-17.6-26.752zM591.712 121.312l19.52-25.376-19.52 25.376z m-33.472 524.064a32 32 0 0 0 35.52 53.248l-35.52-53.248zM256 336a32 32 0 0 0-64 0h64z m402.784 287.872c28.256 83.744 65.856 208.48 77.44 307.84l63.552-7.424c-12.384-106.496-51.936-236.672-80.32-320.896l-60.672 20.48z m-531.84 136.672C234.88 349.44 299.52 242.88 313.6 223.264l-51.904-37.44c-21.568 29.92-88.512 146.56-196.64 558.496l61.888 16.224z m187.2-537.28c23.424-11.872 101.76-50.528 177.92-76.16L471.616 86.4c-80.672 27.2-162.368 67.552-186.432 79.776l28.928 57.056z m460.544-13.888a1709.984 1709.984 0 0 0 81.024-21.6l-18.048-61.44c-19.776 5.824-46.656 13.28-77.952 20.8l14.976 62.24z m99.36-17.216c11.968 25.376 20.544 57.344 21.792 85.568 1.344 30.144-5.792 46.144-13.056 52l40.288 49.728c31.808-25.728 38.304-68.992 36.704-104.576-1.664-37.536-12.608-77.76-27.84-110.08l-57.92 27.36z m8.736 137.568c-33.312 26.976-94.272 71.008-162.688 116l35.168 53.472c69.376-45.632 132.224-90.944 167.808-119.744l-40.288-49.728z m-390.72-182.656c26.656-8.96 38.4-13.28 49.024-13.728 6.816-0.32 15.04 0.96 31.104 13.312l39.04-50.72c-24.128-18.56-46.784-27.648-72.864-26.56-22.24 0.96-45.376 9.856-66.752 17.056l20.48 60.64z m363.648 40.704a21.76 21.76 0 0 1 13.024-0.064c2.88 1.024 4.416 2.56 5.312 4.448l57.856-27.328c-18.4-39.008-61.664-48.032-94.24-38.464l18.048 61.408z m-136.288 415.616a90.56 90.56 0 0 1 35.84-104.192l-35.168-53.472a154.56 154.56 0 0 0-61.312 178.144l60.64-20.48zM572.192 146.656c23.616 18.176 57.664 36.992 92.8 49.792 33.984 12.384 74.848 21.312 109.696 12.928l-14.976-62.24c-16.128 3.904-42.24 0.32-72.832-10.816-29.504-10.752-57.696-26.56-75.648-40.384l-39.04 50.72z m-258.56 76.576c-0.384 0.512-0.64 0.736-0.64 0.704a7.264 7.264 0 0 1 1.12-0.64l-28.928-57.088a64.544 64.544 0 0 0-23.488 19.616L313.6 223.264z m280.128 475.392c46.688-31.136 105.888-69.248 125.28-146.88l-62.08-15.52c-12.608 50.4-49.408 76.256-98.72 109.152l35.52 53.248zM416 528a80 80 0 0 1-80 80v64a144 144 0 0 0 144-144h-64zM336 608A80 80 0 0 1 256 528H192a144 144 0 0 0 144 144v-64z m144-80c0-52.224-3.552-140-25.792-215.68-11.104-37.76-27.584-75.136-52.8-103.552C375.424 179.424 340.256 160 295.296 160v64c24.224 0 42.72 9.696 58.304 27.232 16.384 18.528 29.44 45.824 39.232 79.168 19.552 66.56 23.2 146.816 23.2 197.6h64z m-224 0v-192H192v192h64z"
          fill="#14b8a6"
          p-id="7456"
        ></path>
      </svg>

      <form class="flex items-center" @submit.prevent="handleSearch">
        <div class="relative w-56 hd:w-64">
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
            autocomplete="off"
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
        <router-link to="/tools" custom v-slot="{ navigate, isActive }">
          <li
            @click="navigate"
            class="px-4 hover:cursor-pointer hover:text-teal-500 hover:animate-link-animation dark:text-white dark:hover:text-teal-500"
            :class="isActive ? 'text-teal-500' : ''"
          >
            工具
          </li>
        </router-link>
        <router-link to="/news" custom v-slot="{ navigate, isActive }">
          <li
            @click="navigate"
            class="px-4 hover:cursor-pointer hover:text-teal-500 hover:animate-link-animation dark:text-white dark:hover:text-teal-500"
            :class="isActive ? 'text-teal-500' : ''"
          >
            热搜
          </li>
        </router-link>
        <router-link to="/hub" custom v-slot="{ navigate, isActive }">
          <li
            @click="navigate"
            class="px-4 hover:cursor-pointer hover:text-teal-500 hover:animate-link-animation dark:text-white dark:hover:text-teal-500"
            :class="isActive ? 'text-teal-500' : ''"
          >
            社区
          </li>
        </router-link>
        <router-link to="/entertainment" custom v-slot="{ navigate, isActive }">
          <li
            @click="navigate"
            class="px-4 hover:cursor-pointer hover:text-teal-500 hover:animate-link-animation dark:text-white dark:hover:text-teal-500"
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
        @click="handleShowMenu"
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

      <ul
        class="md:hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 py-2 text-sm text-gray-700 dark:text-gray-200 absolute top-14 right-4"
        v-show="isOpenMenu"
      >
        <li
          @click="handleClickRoute('/technology')"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          科技
        </li>

        <li
          @click="handleClickRoute('/finance')"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          财经
        </li>

        <li
          @click="handleClickRoute('/hub')"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          社区
        </li>

        <li
          @click="handleClickRoute('/entertainment')"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          娱乐
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { isDark as isDarkMode } from '@bassist/utils'
import { useStorage } from '@/hooks'
import type { PrefersColorScheme } from '@bassist/utils'
import { ref } from 'vue'
import router from '../router'
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

const isOpenMenu = ref<boolean>(false)
const handleShowMenu = () => {
  isOpenMenu.value = !isOpenMenu.value
}

const handleClickRoute = (href: string) => {
  router.push(href)
  handleShowMenu()
}
</script>

<style></style>
