import {createRouter, createWebHistory} from 'vue-router'
import {loadMicroApp, start, registerMicroApps} from 'qiankun' // 注意，我们移除了 unloadMicroApp

const routes = [
  {path: '/', component: () => import('@/view/index.vue')},
  {path: '/vue2', component: () => import('@/view/vue2App.vue')}
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

let microAppRef = null

router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/vue2') && !microAppRef) {
    microAppRef = loadMicroApp({
      name: 'vue2-subapp',
      entry: '//localhost:20233',
      container: '#subapp-container'
    })
  } else if (from.path.startsWith('/vue2') && microAppRef) {
    microAppRef.unmount()  // 使用 microApp 的 unmount 方法来卸载
    microAppRef = null
  }
  next()
})

// 仅在应用初始化时注册和启动子应用
registerMicroApps([
  {
    name: 'vue2-subapp',
    entry: '//localhost:20233',
    container: '#subapp-container',
    activeRule: () => false // 永远不会自动激活
  }
])
start()

export default router
