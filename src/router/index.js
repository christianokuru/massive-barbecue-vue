import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Massive Barbeque - Home',
        description: 'Welcome to Massive Barbeque. Explore our delicious Barbeque menu, gallery, and more.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'Massive Barbeque - About Us',
        description: 'Learn more about Massive Barbeque, our story, and our commitment to great food.',
      },
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue'),
      meta: {
        title: 'Massive Barbeque - Menu',
        description: 'Check out our mouth-watering Barbeque menu. Something for everyone!',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Massive Barbeque - Contact Us',
        description: 'Get in touch with us for bookings, inquiries, or feedback.',
      },
    },
  ],
});

// Update document metadata dynamically
router.beforeEach((to, from, next) => {
  const defaultTitle = 'Massive Barbeque';
  const defaultDescription = 'Welcome to Massive Barbeque. Savor the best Barbeque in town!';
  
  // Update document title
  document.title = to.meta?.title || defaultTitle;

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', to.meta?.description || defaultDescription);
  }

  next();
});

export default router;
