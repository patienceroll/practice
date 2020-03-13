import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [{ path: '/login', component: './login/index' }],
    },
  ],
  cssLoaderOptions: {
    localIdentName: '[local]',
  },
});
