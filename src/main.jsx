import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/layout.css';

const container = document.getElementById('root');

const rootElement = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (container && container.hasChildNodes()) {
  hydrateRoot(container, rootElement);
} else if (container) {
  createRoot(container).render(rootElement);
}
