import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {registerMicroApps, start} from 'qiankun'
import router from '@/router/router'

createApp(App).use(router).mount('#app')

// 子应用列表
const apps: Array<any> = [
  {
    name: 'reactapp', // 与子应用 package.json 中的 name 字段保持一致
    entry: '//localhost:23333', // 子应用的地址
    container: '#reactContainer', // 子应用挂载的元素
    activeRule: '/react', // 子应用激活的路由前缀
  },
]

// 注册子应用
registerMicroApps(apps)

// 启动 qiankun
start()
