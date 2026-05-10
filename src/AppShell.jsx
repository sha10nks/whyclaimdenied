import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

export default function AppShell({ router, helmetContext }) {
  return (
    <HelmetProvider context={helmetContext}>
      <Suspense fallback={<main className="container">Loading…</main>}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}
