import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
// 全局样式导入
import '@/styles/index.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
