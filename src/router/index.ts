import { createRouter, createWebHistory } from 'vue-router'

import Classics from '@/page/classic/classics.vue'
import Home from '@/page/landing/Home.vue'
import Slots from '@/page/slot/Slots.vue'
import Sports from '@/page/sports/sports.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/slots',
      component: Slots,
    },
    {
      path: '/classics',
      component: Classics,
    },
    {
      path: '/sports',
      component: Sports,
    },
  ],
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 }
  },
})

export default router
