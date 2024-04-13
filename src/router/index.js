import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../view/Home.vue') },
  { path: '/api', component: () => import('../view/API.vue') },
  { path: '/forum', component: () => import('../view/Forum.vue') },
  { path: '/user/me', component: () => import('../view/User.vue') },
  { path: '/user/me/login', component: () => import('../view/Login.vue') },
  { path: '/user/me/register', component: () => import('../view/Register.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
