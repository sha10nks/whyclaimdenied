import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    let didScrollIntoView = false;

    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView();
        didScrollIntoView = true;
      }
    }

    if (!didScrollIntoView) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return null;
}
