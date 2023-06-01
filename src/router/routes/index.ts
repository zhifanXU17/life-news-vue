import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/tools',
    name: 'tools',
    component: () => import('@/views/tools.vue'),
    meta: {
      title: 'tools',
    },
    children: [
      {
        path: 'colors',
        name: 'colors',
        component: () => import('@/views/tools/colors.vue'),
      },
      {
        path: 'base64',
        name: 'base64',
        component: () => import('@/views/tools/base64.vue'),
      },
      {
        path: 'loans',
        name: 'loans',
        component: () => import('@/views/tools/loans.vue'),
      },
    ],
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news.vue'),
    meta: {
      title: 'news',
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
