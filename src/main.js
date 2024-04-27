import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';
import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import PrimeVue from 'primevue/config';
import cookies from 'vue-cookies';
import App from './App.vue';
import router from './router';
import { clerkPlugin } from 'vue-clerk/plugin';

const vueApp = createApp(App);

registerPlugins(vueApp);

vueApp
  .use(router)
  .use(DevUI)
  .use(ElementPlus)
  .use(PrimeVue)
  .use(cookies)
  .use(clerkPlugin, {
    publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
  })
  .mount('#app');
