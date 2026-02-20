import { Helmet } from 'react-helmet-async';
import BlogLayout from '../../../layouts/BlogLayout';
import Breadcrumbs from '../../../components/Breadcrumbs';
import LinkList from '../../../components/LinkList';

export default function BlogIllinoisWhyAutoDenied() {
  return (
    <BlogLayout>
      <Helmet>
        <title>Why Auto Claims Get Denied in Illinois | WhyClaimDenied</title>
        <meta name="description" content="Common Illinois auto claim denial patterns and what to do next." />
        <link rel="canonical" href="https://whyclaimdenied.com/blog/illinois/why-auto-claims-denied" />
      </Helmet>
      <Breadcrumbs items={[{ label: 'Blog', link: '/blog' }, { label: 'Illinois', link: '/blog/illinois' }, { label: 'Why Auto Claims Denied', link: null }]} />
      <h1>Illinois Auto Claim Denials: Why They Happen</h1>
      <div className="postContent">
        <p>Denials often cite no coverage, policy exclusions, missed requirements, or unresolved liability. Address the exact reason in writing with evidence.</p>
        <h2>Related Illinois Guides</h2>
        <LinkList
          items={[
            { to: '/auto-insurance-claims-denied-illinois', label: 'Auto Insurance Claims Denied in Illinois' },
            { to: '/auto-insurance-claims-denied-illinois/missed-reporting-deadline', label: 'Missed Reporting Deadline (Auto)' },
          ]}
        />
      </div>
    </BlogLayout>
  );
}

