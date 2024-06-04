import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: import('@/views/YiFeiHome/index.vue')
    }
  ]
})

export default router
