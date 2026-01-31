import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema } from '../seo/schema';

const AutoClaimDeniedCaliforniaMisrepresentationOrConcealment = () => {
  const meta = getMetaData('autoCA_misrep');
  const articleSchema = generateArticleSchema({
    headline: meta.title,
    description: meta.description,
    canonicalUrl: meta.canonical,
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <Header />

      <Breadcrumbs
        items={[
          { label: 'California', link: '/' },
          { label: 'Auto Claim Denials', link: '/auto-insurance-claims-denied-california' },
          { label: 'Misrepresentation or Concealment', link: null },
        ]}
      />

      <main className="container">
        <h1>Misrepresentation or Concealment (California Auto Claims)</h1>

        <p className="intro">
          If an insurer denies because of misrepresentation or concealment, they are saying something important in the policy application or claim process was not truthful or not complete. These denials can lead to a claim denial, a policy rescission, or both.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block]
        </div>

        <section>
          <h2>Why this denial happens</h2>
          <p>
            In auto insurance, disputes often come from application details: where the vehicle is garaged, who the regular drivers are, annual mileage, prior accidents, or whether the vehicle is used for certain purposes.
          </p>
          <p>
            Some denials are based on clear errors. Others are based on assumptions. The difference matters. You’re entitled to ask what statement the insurer believes was false or omitted and what evidence they relied on.
          </p>
        </section>

        <section>
          <h2>California rule to know</h2>
          <p>
            California Insurance Code section 331 states that concealment, whether intentional or unintentional, entitles the injured party to rescind insurance.
            {' '}
            <a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=331" target="_blank" rel="noreferrer">
              Insurance Code 331
            </a>
          </p>
          <p>
            That does not mean the insurer can say “misrepresentation” without specifics. Ask them to identify the statement, when it was made, and why it was material.
          </p>
        </section>

        <section>
          <h2>What to do next</h2>
          <ol>
            <li>
              <strong>Get the application and underwriting file.</strong> You need the exact questions and answers.
            </li>
            <li>
              <strong>Ask for the “materiality” explanation.</strong> If the insurer claims the fact would have changed the policy, ask them to explain how.
            </li>
            <li>
              <strong>Correct the record.</strong> If the insurer is relying on an incorrect assumption (garaging address, driver list), provide proof.
            </li>
            <li>
              <strong>Keep it calm.</strong> Misrepresentation disputes escalate fast. Stick to documents and dates.
            </li>
            <li>
              <strong>Consider regulator review.</strong> CDI’s consumer complaint process can help you get a documented response.
            </li>
          </ol>
        </section>

        <section>
          <h2>Back to the California auto denial guide</h2>
          <p>
            <Link to="/auto-insurance-claims-denied-california">Return to Auto Insurance Claims Denied in California</Link>
          </p>
        </section>

        <StateHubLinks currentState="California" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedCaliforniaMisrepresentationOrConcealment;
