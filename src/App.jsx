import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';
import router from './router';

function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<main className="container">Loading…</main>}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
