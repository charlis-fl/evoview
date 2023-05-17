import React, { memo, Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Loader from 'common/designSystem/loader';
const Intro = React.lazy(() => import('./intro'));

const WebRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path={'/intro'} element={<Intro />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default memo(WebRoutes);
