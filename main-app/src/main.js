import {createApp} from 'vue'
import App from './App.vue'
import {start, registerMicroApps} from 'qiankun'

createApp(App).mount('#app')

// 注册子应用
const apps = [
  {
    name: 'vue2-subapp', // 子应用的名称
    entry: '//localhost:20233', // 子应用的入口
    container: '#subapp-container', // 容器的id
    activeRule: '/vue2' // 激活子应用的路由前缀
  }
]

// 使用 qiankun 的 registerMicroApps 函数注册子应用
registerMicroApps(apps)

// 使用 qiankun 的 start 函数启动微前端应用
start()
