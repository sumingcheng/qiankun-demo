import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {registerMicroApps, start} from 'qiankun'
import router from '@/router/router'

createApp(App).use(router).mount('#app')

// 子应用列表
const apps: Array<any> = [
  {
    name: 'react-app',
    entry: '//localhost:5173',
    container: '#react-container',
    activeRule: '/react-app',
  },
]

// 注册子应用
registerMicroApps(apps)

// 启动 qiankun
start()
