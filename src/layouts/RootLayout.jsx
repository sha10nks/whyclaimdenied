import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../components/ScrollToTop';

export default function RootLayout() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WhyClaimDenied',
    url: 'https://whyclaimdenied.com',
    description: 'Independent educational resource explaining insurance claim denials by U.S. state.',
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WhyClaimDenied',
    url: 'https://whyclaimdenied.com',
    inLanguage: 'en-US',
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
