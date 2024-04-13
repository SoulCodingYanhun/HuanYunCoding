/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Router
import router from './router'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

// 注册插件
registerPlugins(app)

// 使用路由器
app.use(router)

// 挂载应用
app.mount('#app')
