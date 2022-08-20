import React from 'react';
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from 'react-router-dom';
import service from '@root/service';
import Util from '@util/index';
import Loading from '@component/Loading';
import ErrorBoundary from '@page/Error';
import pagePaths from './page-path';

const router = (
  <ErrorBoundary>
    <HistoryRouter history={service.navigate.history}>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          {pagePaths.map((item, idx) => {
            let page = item.page;

            // 异步加载页面
            if (Util.check.isPromise(item.page)) {
              const lazyPage = React.lazy(() => item.page);
              page = <lazyPage />;
            }

            return <Route path={item.path} element={page} key={idx} />;
          })}
        </Routes>
      </React.Suspense>
    </HistoryRouter>
  </ErrorBoundary>
);

export default router;
