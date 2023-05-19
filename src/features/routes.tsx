import React, { memo, Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { HeaderRoute } from 'common/designSystem/HeaderRoute';
const Intro = React.lazy(() => import('./intro'));
const BasicLifeFormsViewer = React.lazy(() => import('./BasicLifeFormsViewer'));
const TreeViewer = React.lazy(() => import('./TreeViewer'));

const WebRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<HeaderRoute component={Intro} />} />
          <Route path="/:id" element={<HeaderRoute component={BasicLifeFormsViewer} />} />
          <Route path="/tree/:id" element={<HeaderRoute component={TreeViewer} />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default memo(WebRoutes);
