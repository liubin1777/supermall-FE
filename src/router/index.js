import React from 'react';
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Service from '@root/service';
import Util from '@util/index';
import Loading from '@component/Loading';
import ErrorBoundary from '@page/error';
import pagePaths, { TabBarConfig } from './page';
import TabBarPage from '@page/tabbar/index';
import HomePage from '@page/home/index';

// Toast
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = (
  <ErrorBoundary>
    <HistoryRouter history={Service.navigate.history}>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<TabBarPage />}>
            {TabBarConfig.map((item, idx) => {
              return (
                <Route
                  path={item.path}
                  element={item.page}
                  key={'tabbar' + idx}
                />
              );
            })}
          </Route>
          {pagePaths.map((item, idx) => {
            let page = item.page;

            // 异步加载页面
            if (Util.check.isPromise(item.page)) {
              const LazyPage = React.lazy(() => item.page);
              page = <LazyPage />;
            }

            return <Route path={item.path} element={page} key={idx} />;
          })}
        </Routes>
      </React.Suspense>
    </HistoryRouter>

    {/* Toast */}
    <ToastContainer
      position="top-center"
      hideProgressBar={false}
      theme="light"
      limit="1"
      autoClose={2000}
      transition={Slide}
      closeButton={false}
    />
  </ErrorBoundary>
);

// toast('Wow so easy !');

export default router;
