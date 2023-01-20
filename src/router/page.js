import TabBarPage from '@page/tabbar/index';
import _404Page from '@page/404';
import HomePage from '@page/home/index';
import CartPage from '@page/cart/index';
import FindPage from '@page/find/index';
import NewPage from '@page/new/index';
import MePage from '@page/me/index';

export const TabBarConfig = [
  {
    name: '首页',
    path: '/home',
    page: <HomePage />,
    img_n: 'http://127.0.0.1:9090/assets/home/tabbar/icon-tabbar-home-n.png',
    img_s: 'http://127.0.0.1:9090/assets/home/tabbar/icon-tabbar-home-s.png',
  },
  {
    name: '新品',
    path: '/new',
    page: <NewPage />,
    img_n: 'http://127.0.0.1:9090/assets/home/tabbar/icon-tabbar-new-n.png',
    img_s: 'http://127.0.0.1:9090/assets/home/tabbar/icon-tabbar-new-s.png',
  },
  {
    name: '发现',
    path: '/find',
    page: <FindPage />,
    img_n: 'http://127.0.0.1:9090/assets/home/tabbar/icon-tabbar-find-n.png',
    img_s: 'http://127.0.0.1:9090/assets/home/tabbar/icon-tabbar-find-s.png',
  },
  {
    name: '购物车',
    path: '/cart',
    page: <CartPage />,
    img_n: 'http://127.0.0.1:9090/assets/home/tabbar/icon-tabbar-cart-n.png',
    img_s: 'http://127.0.0.1:9090/assets/home/tabbar/icon-tabbar-cart-s.png',
  },
  {
    name: '我的',
    path: '/me',
    page: <MePage />,
    img_n: 'http://127.0.0.1:9090/assets/home/tabbar/icon-tabbar-me-n.png',
    img_s: 'http://127.0.0.1:9090/assets/home/tabbar/icon-tabbar-me-s.png',
  },
];

export default [
  {
    path: '/goods-detail',
    page: import('../pages/goods-detail'),
  },
  {
    path: '/login',
    page: import('../pages/login'),
  },
  {
    path: '*',
    page: <_404Page />,
  },
];
