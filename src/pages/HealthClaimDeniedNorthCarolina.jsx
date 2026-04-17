import { Helmet } from 'react-helmet-async';
import { Link } from '../components/Link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CalloutBox from '../components/CalloutBox';
import StateHubLinks from '../components/StateHubLinks';
import BlogTeasersByState from '../components/BlogTeasersByState';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema, generateFAQSchema } from '../seo/schema';

import StateHeroImage from '../components/StateHeroImage'
const HealthClaimDeniedNorthCarolina = () => {
  const meta = getMetaData('healthNC');
  const faqs = [
    {
      question: 'What are the most common health denial categories?',
      answer:
        'Prior authorization issues, “not medically necessary” decisions, out-of-network restrictions, coding or documentation problems, and exclusions are common denial themes.',
    },
    {
      question: 'What should I request from the plan or insurer?',
      answer:
        'Ask for the exact plan language or medical policy criteria used, the denial rationale in writing, and a checklist of what would be required for reconsideration or appeal.',
    },
    {
      question: 'Where can I find North Carolina consumer help?',
      answer:
        'The North Carolina Department of Insurance provides consumer resources and complaint intake for insurance-related issues. Start with your plan’s internal appeal process first.',
    },
  ];

  const heroImageCanonical = new URL('/images/states/north-carolina/health-1600.webp', meta.canonical).toString();

  const articleSchema = generateArticleSchema({ headline: meta.title, description: meta.description, canonicalUrl: meta.canonical, imageUrl: heroImageCanonical});
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Header />

      <Breadcrumbs items={[{ label: 'North Carolina', link: '/' }, { label: 'Health Claim Denials', link: null }]} />

      <main className="container">
        <h1>Health Insurance Claims Denied in North Carolina</h1>
        <StateHeroImage stateSlug="north-carolina" domain="health" alt="Health Insurance Claims Denied in North Carolina" />
        <p className="intro">
          Health claim denials are often fixable when you respond to the exact criterion the plan applied. A strong appeal is organized, document-driven, and written so a reviewer can
          verify each disputed point quickly.
        </p>

        <p>
          Looking for auto claims? See <Link to="/auto-insurance-claims-denied-north-carolina">Auto Insurance Claims Denied in North Carolina</Link>.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 1]
        </div>

        <section>
          <h2>How the denial process usually works</h2>
          <p>
            A health denial may be triggered by a missing authorization, a medical necessity review, a network rule, a documentation gap, or a benefit exclusion. Denial letters often contain
            the most important information: the code or category used, the stated rationale, and the appeal instructions.
          </p>
          <p>
            Your fastest move is to request the specific criteria that were applied (for example, a medical policy title/version or a plan section) and to ask what documentation would change
            the decision. Then submit only the chart excerpts and provider support that answer the criteria point-by-point.
          </p>
        </section>

        <section>
          <h2>Common health denial reasons in North Carolina</h2>
          <ul>
            <li><Link to="/health-insurance-claims-denied-north-carolina/prior-authorization-missing">Prior authorization missing</Link></li>
            <li><Link to="/health-insurance-claims-denied-north-carolina/not-medically-necessary">Not medically necessary</Link></li>
            <li><Link to="/health-insurance-claims-denied-north-carolina/out-of-network-provider">Out-of-network provider</Link></li>
            <li><Link to="/health-insurance-claims-denied-north-carolina/coding-or-documentation-error">Coding or documentation error</Link></li>
            <li><Link to="/health-insurance-claims-denied-north-carolina/experimental-or-investigational">Experimental or investigational</Link></li>
            <li><Link to="/health-insurance-claims-denied-north-carolina/benefit-or-service-excluded">Benefit or service excluded</Link></li>
            <li><Link to="/health-insurance-claims-denied-north-carolina/timely-filing-issue">Timely filing issue</Link></li>
            <li><Link to="/health-insurance-claims-denied-north-carolina/coordination-of-benefits">Coordination of benefits</Link></li>
          </ul>
        </section>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 2]
        </div>

        <section>
          <h2>Appeals and consumer help in North Carolina</h2>
          <p>
            Start with the plan’s internal appeal process and submit a complete packet with proof of delivery. If you cannot get a clear explanation or the plan is not following its stated
            process, North Carolina’s Department of Insurance offers consumer resources and complaint intake.
          </p>
        </section>

        <CalloutBox title="Make the appeal easier to approve">
          <p>
            Ask for the medical policy criteria used in the denial. Then reply point-by-point with your provider’s letter and only the supporting records that match each criterion.
          </p>
        </CalloutBox>

        <section>
          <h2>Related guides</h2>
          <ul>
            <li><Link to="/health-insurance-claims-denied-georgia">Health Insurance Claims Denied in Georgia</Link></li>
            <li><Link to="/health-insurance-claims-denied-florida">Health Insurance Claims Denied in Florida</Link></li>
            <li><Link to="/health-insurance-claims-denied-pennsylvania">Health Insurance Claims Denied in Pennsylvania</Link></li>
          </ul>
        </section>

        <BlogTeasersByState state="north-carolina" />
        <StateHubLinks currentState="North Carolina" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedNorthCarolina;
