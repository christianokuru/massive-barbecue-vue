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
        title: 'Massive Barbecue - Home',
        description: 'Welcome to Massive Barbecue. Explore our delicious barbecue menu, gallery, and more.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'Massive Barbecue - About Us',
        description: 'Learn more about Massive Barbecue, our story, and our commitment to great food.',
      },
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue'),
      meta: {
        title: 'Massive Barbecue - Menu',
        description: 'Check out our mouth-watering barbecue menu. Something for everyone!',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Massive Barbecue - Contact Us',
        description: 'Get in touch with us for bookings, inquiries, or feedback.',
      },
    },
  ],
});

// Update document metadata dynamically
router.beforeEach((to, from, next) => {
  const defaultTitle = 'Massive Barbecue';
  const defaultDescription = 'Welcome to Massive Barbecue. Savor the best barbecue in town!';
  
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
