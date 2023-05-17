import React, { memo, Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
const Intro = React.lazy(() => import('./intro'));

const WebRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default memo(WebRoutes);
