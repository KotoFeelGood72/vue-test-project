import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'profile',
      path: '/profile',
      component: () => import('@/views/ProfileView/ProfileView.vue'),
    },
  ],
})

export default router
