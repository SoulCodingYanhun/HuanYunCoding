import { createRouter, createWebHashHistory } from 'vue-router'

// 定义路由路径和组件
const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/view/Home.vue')  // 主页组件
  },
  {
    name: 'API',
    path: '/api',
    component: () => import('@/view/API.vue')  // API页面组件
  },
  {
    name: 'Forum',
    path: '/forum',
    component: () => import('@/view/Forum.vue')  // 论坛页面组件
  },
  {
    name: 'UserProfile',
    path: '/user/me',
    component: () => import('@/view/User.vue')  // 用户个人资料页面组件
  },
  {
    name: 'Login',
    path: '/user/login',
    component: () => import('../view/Login.vue')  // 登录页面组件
  },
  {
    name: 'Register',
    path: '/user/register',
    component: () => import('../view/Register.vue')  // 注册页面组件
  },
  {
    name: 'OtherLoginRegister',
    path: '/user/lr',
    component: () => import('../view/OtherLoginRegister.vue')  // 其他登录注册页面组件
  }
]

// 创建路由实例，使用哈希模式
const router = createRouter({
  history: createWebHashHistory(),  // 使用哈希模式
  routes,  // 路由路径和组件
})

export default router
