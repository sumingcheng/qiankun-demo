import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {registerMicroApps, start} from 'qiankun'

createApp(App).mount('#app')

// 子应用列表
const apps: Array<any> = [
  // 我们稍后会在这里添加子应用
]

// 注册子应用
registerMicroApps(apps)

// 启动 qiankun
start()
