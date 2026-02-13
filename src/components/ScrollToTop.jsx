import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const allowedHosts = new Set(['whyclaimdenied.com', 'www.whyclaimdenied.com']);
    const isNonProductionHost = !allowedHosts.has(window.location.hostname);

    const doNotTrackEnabled =
      navigator.doNotTrack === '1' ||
      window.doNotTrack === '1' ||
      navigator.msDoNotTrack === '1' ||
      navigator.globalPrivacyControl === true;

    const placementId1 = Number(import.meta.env.VITE_EZOIC_AD_1);
    const placementId2 = Number(import.meta.env.VITE_EZOIC_AD_2);

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

    if (isNonProductionHost || doNotTrackEnabled) return;
    if (!placementId1 && !placementId2) return;

    const showAd = (placementId) => {
      if (!placementId) return;

      window.ezstandalone = window.ezstandalone || {};
      window.ezstandalone.cmd = window.ezstandalone.cmd || [];

      if (typeof window.ezstandalone.cmd.push !== 'function') return;
      window.ezstandalone.cmd.push(() => {
        if (typeof window.ezstandalone.showAds === 'function') {
          window.ezstandalone.showAds(placementId);
        }
      });
    };

    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                const el = entry.target;
                const placementId = Number(el.getAttribute('data-ezoic-placement-id'));
                if (!placementId) continue;
                if (el.getAttribute('data-ezoic-requested') === '1') continue;
                el.setAttribute('data-ezoic-requested', '1');
                showAd(placementId);
                observer.unobserve(el);
              }
            },
            { rootMargin: '200px 0px' },
          )
        : null;

    const hydrate = () => {
      const placeholders = document.querySelectorAll('.ad-placeholder');

      for (const wrapper of placeholders) {
        const existing = wrapper.querySelector('[id^="ezoic-pub-ad-placeholder-"]');
        if (existing) continue;

        const text = wrapper.textContent || '';
        const match = text.match(/\[AdSense Block\s*(\d+)\]/i);
        const blockNumber = match ? Number(match[1]) : null;
        const placementId = blockNumber === 1 ? placementId1 : blockNumber === 2 ? placementId2 : null;
        if (!placementId) continue;

        for (const node of Array.from(wrapper.childNodes)) {
          if (node.nodeType === Node.TEXT_NODE && /\[AdSense Block/i.test(node.textContent || '')) {
            node.textContent = '';
          }
        }

        const placeholderDiv = document.createElement('div');
        placeholderDiv.id = `ezoic-pub-ad-placeholder-${placementId}`;
        wrapper.appendChild(placeholderDiv);

        wrapper.setAttribute('data-ezoic-placement-id', String(placementId));
        if (observer) observer.observe(wrapper);
        else showAd(placementId);
      }
    };

    const raf = requestAnimationFrame(hydrate);
    return () => {
      cancelAnimationFrame(raf);
      if (observer) observer.disconnect();
    };
  }, [location.pathname, location.hash]);

  return null;
}
