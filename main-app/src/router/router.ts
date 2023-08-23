import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),  // 这是你的主应用主页
  },
  {
    path: '/react',
    name: 'ReactApp',
    component: () => import('@/views/ReactApp.vue'),  // 用于加载 React 子应用的容器
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
