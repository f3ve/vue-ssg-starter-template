import '@/styles/globals.scss';

import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';

import { setupLayouts } from 'virtual:generated-layouts';
import generatedLayouts from 'virtual:generated-pages';

const routes = setupLayouts(generatedLayouts);

export const createApp = ViteSSG(
  App,
  {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition;
      return { top: 0 };
    },
    routes,
  },
  ({ app }) => {
    app.use(createPinia());
  }
);
