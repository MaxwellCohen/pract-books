import { defineApp, route } from '@pracht/core';

export const app = defineApp({
  notFound: {
    component: './routes/not-found.tsx',
    shell: 'public',
  },
  routes: [
    route('/', './routes/home.tsx', {
      id: 'home',
      render: 'ssr',
      shell: 'public',
      streaming: true,
    }),
    route('/:id', './routes/book.tsx', {
      id: 'book',
      render: 'ssr',
      shell: 'public',
      streaming: true,
    }),
  ],
  shells: {
    public: './shells/public.tsx',
  },
  viewTransitions: true,
});
