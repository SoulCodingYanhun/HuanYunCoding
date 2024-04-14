import { createRouter, createWebHashHistory } from 'vue-router'

// 定义路由路径和组件
const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/view/Home.vue')
  },
  {
    name: 'API',
    path: '/api',
    component: () => import('@/view/API.vue')
  },
  {
    name: 'Forum',
    path: '/forum',
    component: () => import('@/view/Forum.vue')
  },
  {
    name: 'UserProfile',
    path: '/user/me',
    component: () => import('@/view/User.vue')
  },
  {
    name: 'Login',
    path: '/user/login',
    component: () => import('../view/Login.vue')
  },
  {
    name: 'Register',
    path: '/user/register',
    component: () => import('../view/Register.vue')
  },
  {
    name: 'OtherLoginRegister',
    path: '/user/lr',
    component: () => import('../view/OtherLoginRegister.vue')
  }
]

// 创建路由实例，使用哈希模式
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
