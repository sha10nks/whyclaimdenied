import { createElement } from 'react';
import { Suspense } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'node:stream';

import { HelmetProvider } from 'react-helmet-async';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router-dom/server';
import { routes } from './router';
import { BASE_URL } from './seo/meta';

const helmetToHead = (helmet) => {
  if (!helmet) return '';
  return [
    helmet.title?.toString?.() || '',
    helmet.priority?.toString?.() || '',
    helmet.meta?.toString?.() || '',
    helmet.link?.toString?.() || '',
    helmet.script?.toString?.() || '',
    helmet.noscript?.toString?.() || '',
    helmet.style?.toString?.() || '',
  ].join('');
};

export const render = async (url) => {
  const helmetContext = {};
  const handler = createStaticHandler(routes);
  const request = new Request(`${BASE_URL}${url}`);
  const context = await handler.query(request);
  const router = createStaticRouter(handler.dataRoutes, context);
  const element = createElement(
    HelmetProvider,
    { context: helmetContext },
    createElement(
      Suspense,
      { fallback: createElement('main', { className: 'container' }, 'Loading…') },
      createElement(StaticRouterProvider, { router, context })
    )
  );

  return await new Promise((resolve, reject) => {
    let didError = false;

    const stream = renderToPipeableStream(element, {
      onAllReady() {
        const body = new PassThrough();
        let html = '';
        body.on('data', (chunk) => {
          html += chunk.toString();
        });
        body.on('end', () => {
          const helmet = helmetContext.helmet;
          resolve({
            appHtml: html,
            headHtml: helmetToHead(helmet),
            htmlAttributes: helmet?.htmlAttributes?.toString?.() || '',
            bodyAttributes: helmet?.bodyAttributes?.toString?.() || '',
            didError,
          });
        });

        stream.pipe(body);
      },
      onShellError(err) {
        reject(err);
      },
      onError() {
        didError = true;
      },
    });

    setTimeout(() => {
      try {
        stream.abort();
      } catch {
        // ignore
      }
    }, 15000);
  });
};
