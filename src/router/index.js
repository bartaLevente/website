import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Kezdőlap',
      },
      children: [

      ],
    },
    {
      path: '/:catchAll(.*)',
      redirect: { name: 'home' },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
