import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import ToolSessionProvider from './tools/ToolSessionContext.jsx';

export default function AppShell({ router, helmetContext }) {
  return (
    <HelmetProvider context={helmetContext}>
      <ToolSessionProvider>
        <Suspense fallback={<main className="container">Loading…</main>}>
          <RouterProvider router={router} />
        </Suspense>
      </ToolSessionProvider>
    </HelmetProvider>
  );
}
