// main.js
// 导入Vue应用所需的所有插件、组件和工具

// Vue相关
import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';

// 第三方组件和样式
import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import PrimeVue from 'primevue/config';
import cookies from 'vue-cookies';

// 自定义组件
import App from './App.vue';

// 路由
import router from './router';

// Vue Clerk
import { clerkPlugin } from 'vue-clerk/plugin'

// 创建Vue应用实例
const vueApp = createApp(App);

// 注册所有插件
registerPlugins(vueApp);

// 使用路由器和第三方组件
vueApp
  .use(router)
  .use(DevUI)
  .use(ElementPlus)
  .use(PrimeVue)
  .use(cookies)
  .use(clerkPlugin, {
    publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
  })
  // 挂载应用
  .mount('#app');
