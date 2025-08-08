import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'profile',
      path: '/',
      children: [
        {
          name: 'profile-edit',
          path: 'edit',
          component: () => import('@/views/ProfileView/ProfileEditView.vue'),
        },
        {
          name: 'profile-view',
          path: '',
          component: () => import('@/views/ProfileView/ProfileView.vue'),
        },
      ],
    },
  ],
})

export default router
