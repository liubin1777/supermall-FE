import React from 'react';
import './index.css';
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from 'react-router-dom';
import service from '@root/service';
import Loading from './components/loading';

const routerPaths = [
  {
    path: '/',
    page: import('./pages/home/index')
  },
  {
    path: '/me',
    page: import('./pages/me')
  },
  {
    path: '/order-list',
    page: import('./pages/order-list')
  },
  {
    path: '/login',
    page: import('./pages/login')
  },
  {
    path: '*',
    page: <div>Page Gone 404</div>
  }
]

const router = (
  <HistoryRouter history={service.navigate.history}>
    <React.Suspense fallback={<Loading />}>
      <Routes>
        {routerPaths.map((item, idx) => {
          const LazyComponent = React.lazy(() => item.page);
          return (<Route path={item.path} element={<LazyComponent />} key={idx} />);
        })}
      </Routes>
    </React.Suspense>
  </HistoryRouter>
)

export default router;