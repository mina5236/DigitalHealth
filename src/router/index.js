import { createRouter, createWebHistory } from 'vue-router'
import NameView from '@/views/NameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'name',
      component: NameView,
    },
    {
      path: '/extra',
      name: 'extra',
      component: () => import('../views/ExtraInfoView.vue'),
    },
    {
      path: '/summary',
      name: 'summary',
      component: () => import('../views/SummaryView.vue'),
    },
  ],
})

export default router
