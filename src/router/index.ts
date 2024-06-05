import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: import('@/views/YiFeiHome/index.vue'),
      redirect: '/wall',
      children: [
        {
          path: '/wall',
          component: import('@/views/YiFeiHome/children/WallMessage.vue')
        }
      ]
    }
  ]
})

export default router
