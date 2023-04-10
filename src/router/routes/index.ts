import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/technology',
    name: 'technology',
    component: () => import('@/views/technology.vue'),
    meta: {
      title: 'technology',
    },
  },
  {
    path: '/finance',
    name: 'finance',
    component: () => import('@/views/finance.vue'),
    meta: {
      title: 'finance',
    },
  },
  {
    path: '/hub',
    name: 'hub',
    component: () => import('@/views/hub.vue'),
    meta: {
      title: 'hub',
    },
  },
  {
    path: '/entertainment',
    name: 'entertainment',
    component: () => import('@/views/entertainment.vue'),
    meta: {
      title: 'entertainment',
    },
  },
]

export default routes
