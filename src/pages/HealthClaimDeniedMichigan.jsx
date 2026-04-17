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
const HealthClaimDeniedMichigan = () => {
  const meta = getMetaData('healthMI');
  const faqs = [
    {
      question: 'Why do health claims get denied?',
      answer:
        'Most health denials are tied to a specific plan rule or medical policy: prior authorization, medical necessity criteria, network restrictions, documentation gaps, exclusions, or timely filing issues.',
    },
    {
      question: 'What should I ask the plan to provide?',
      answer:
        'Ask for the exact plan section or medical policy used (name/version/date if available), and request a checklist of what documentation would change the decision.',
    },
    {
      question: 'Where can Michigan consumers get help?',
      answer:
        'Michigan’s Department of Insurance and Financial Services (DIFS) provides consumer information and complaint intake. Start with your plan’s internal appeal process first.',
    },
  ];

  const heroImageCanonical = new URL('/images/states/michigan/health-1600.webp', meta.canonical).toString();

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

      <Breadcrumbs items={[{ label: 'Michigan', link: '/' }, { label: 'Health Claim Denials', link: null }]} />

      <main className="container">
        <h1>Health Insurance Claims Denied in Michigan</h1>
        <StateHeroImage stateSlug="michigan" domain="health" alt="Health Insurance Claims Denied in Michigan" />
        <p className="intro">
          Most health denials can be understood—and often improved—when you treat the denial letter like a checklist. Ask for the criteria the plan used and respond point-by-point with
          provider support and the right records.
        </p>

        <p>
          Looking for auto claims? See <Link to="/auto-insurance-claims-denied-michigan">Auto Insurance Claims Denied in Michigan</Link>.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 1]
        </div>

        <section>
          <h2>Common health denial categories</h2>
          <p>
            Denials often come from a plan rule, not a judgment about fairness. That’s why the most effective appeals are criteria-driven: obtain the medical policy or plan language and reply
            to each criterion with the supporting chart note excerpts, provider letters, and a short timeline.
          </p>
        </section>

        <section>
          <h2>Common health denial reasons in Michigan</h2>
          <ul>
            <li><Link to="/health-insurance-claims-denied-michigan/prior-authorization-missing">Prior authorization missing</Link></li>
            <li><Link to="/health-insurance-claims-denied-michigan/not-medically-necessary">Not medically necessary</Link></li>
            <li><Link to="/health-insurance-claims-denied-michigan/out-of-network-provider">Out-of-network provider</Link></li>
            <li><Link to="/health-insurance-claims-denied-michigan/coding-or-documentation-error">Coding or documentation error</Link></li>
            <li><Link to="/health-insurance-claims-denied-michigan/experimental-or-investigational">Experimental or investigational</Link></li>
            <li><Link to="/health-insurance-claims-denied-michigan/benefit-or-service-excluded">Benefit or service excluded</Link></li>
            <li><Link to="/health-insurance-claims-denied-michigan/timely-filing-issue">Timely filing issue</Link></li>
            <li><Link to="/health-insurance-claims-denied-michigan/coordination-of-benefits">Coordination of benefits</Link></li>
          </ul>
        </section>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 2]
        </div>

        <section>
          <h2>Appeals and consumer resources</h2>
          <p>
            Start with your plan’s internal appeal and follow the submission instructions exactly. If you cannot get a written explanation or the process breaks down, Michigan DIFS provides
            consumer information and complaint intake.
          </p>
        </section>

        <CalloutBox title="Ask for the criteria">
          <p>
            If your denial says “not medically necessary,” request the medical policy and the exact criteria used. Appeals are stronger when you answer each criterion directly with a provider letter
            and the chart excerpts that support the criterion.
          </p>
        </CalloutBox>

        <section>
          <h2>Related guides</h2>
          <ul>
            <li><Link to="/health-insurance-claims-denied-ohio">Health Insurance Claims Denied in Ohio</Link></li>
            <li><Link to="/health-insurance-claims-denied-illinois">Health Insurance Claims Denied in Illinois</Link></li>
            <li><Link to="/health-insurance-claims-denied-pennsylvania">Health Insurance Claims Denied in Pennsylvania</Link></li>
          </ul>
        </section>

        <BlogTeasersByState state="michigan" />
        <StateHubLinks currentState="Michigan" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedMichigan;

