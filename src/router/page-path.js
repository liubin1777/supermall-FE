import Page404 from '@page/404';
import PageHome from '@page/home/index';

export default [
  {
    path: '/',
    page: <PageHome />,
  },
  {
    path: '/me',
    page: import('../pages/me'),
  },
  {
    path: '/cart',
    page: import('../pages/cart'),
  },
  {
    path: '/cart',
    page: import('../pages/goods-detail'),
  },
  {
    path: '/login',
    page: import('../pages/login'),
  },
  {
    path: '*',
    page: <Page404 />,
  },
];