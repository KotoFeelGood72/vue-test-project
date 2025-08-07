import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      name: 'profile',
      path: '',
      children: [
        {
          path: 'edit',
          component: () => import('@/views/ProfileView/ProfileEditView.vue'),
        },
        {
          path: '/profile',
          component: () => import('@/views/ProfileView/ProfileView.vue'),
        },
      ],
    },
  ],
})

export default router
