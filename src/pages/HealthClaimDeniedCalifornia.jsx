import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CalloutBox from '../components/CalloutBox';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema, generateFAQSchema } from '../seo/schema';

const HealthClaimDeniedCalifornia = () => {
  const meta = getMetaData('healthCA');
  const faqs = [
    {
      question: 'Who regulates my health coverage in California: DMHC or CDI?',
      answer:
        'In California, some health coverage is regulated by the Department of Managed Health Care (DMHC) and some is regulated by the California Department of Insurance (CDI). Your plan documents usually say which agency oversees your coverage. If you file a complaint with the wrong agency, they may tell you where to go next.',
    },
    {
      question: 'What’s the difference between an appeal and an external review?',
      answer:
        'An appeal (sometimes called a grievance) is the plan’s internal review of its own denial. An external review is handled outside the plan by a program created by law. In California, depending on your coverage type and denial reason, an Independent Medical Review may be available.',
    },
    {
      question: 'Can a denial be caused by billing or coding mistakes?',
      answer:
        'Yes. Many “denials” are administrative: a code mismatch, missing documentation, a wrong member ID, or a claim sent to the wrong payer. The fix is often a corrected claim or a focused written appeal that matches what the plan asked for.',
    },
    {
      question: 'What should I do first when a health claim is denied?',
      answer:
        'Start by getting the denial reason in writing and requesting the criteria used for the decision when the denial is clinical (for example, medical necessity). Then gather records and send a short written appeal that answers the specific reason given.',
    },
  ];

  const articleSchema = generateArticleSchema({
    headline: meta.title,
    description: meta.description,
    canonicalUrl: meta.canonical,
  });
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

      <Breadcrumbs
        items={[
          { label: 'California', link: '/' },
          { label: 'Health Claim Denials', link: null },
        ]}
      />

      <main className="container">
        <h1>Health Insurance Claims Denied in California</h1>

        <p className="intro">
          Health insurance denials are frustrating because they hit when you’re already dealing with treatment, pain, scheduling, and paperwork. The denial letter can feel like a dead end. It usually isn’t.
        </p>

        <p>
          This page is a California-focused guide to common denial patterns and the complaint and review options that exist in state-regulated coverage. If your plan is self-funded through a large employer (ERISA), the rules can be different. Your plan documents should tell you what you have.
        </p>

        <p>
          Dealing with an auto claim denial instead? Go to <Link to="/auto-insurance-claims-denied-california">Auto Insurance Claims Denied in California</Link>.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 1]
        </div>

        <section>
          <h2>Intro: Why health claims get denied</h2>
          <p>
            Some denials are clinical. The plan says the service wasn’t medically necessary, wasn’t covered, or required prior authorization. Other denials are administrative: coding, missing documentation, or a claim filed in the wrong format.
          </p>
          <p>
            In California, there are two main state regulators involved in health coverage. The Department of Managed Health Care (DMHC) regulates many health care service plans under the Knox-Keene Act. The California Department of Insurance (CDI) regulates certain health insurance policies. The right path depends on the coverage you have.
          </p>
          <p>
            Helpful starting points:
            {' '}
            <a href="https://www.dmhc.ca.gov/fileacomplaint/frequentlyaskedquestions.aspx" target="_blank" rel="noreferrer">
              DMHC complaint FAQ
            </a>
            {' · '}
            <a
              href="https://www.insurance.ca.gov/01-consumers/105-type/95-guides/05-health/healthcareguidecomplaintprocess.cfm"
              target="_blank"
              rel="noreferrer"
            >
              CDI complaint process (health)
            </a>
          </p>
        </section>

        <section>
          <h2>Common health claim denial reasons (California-relevant)</h2>
          <ul>
            <li>
              <Link to="/health-insurance-claims-denied-california/prior-authorization-missing">Prior authorization missing</Link>
            </li>
            <li>
              <Link to="/health-insurance-claims-denied-california/not-medically-necessary">Not medically necessary</Link>
            </li>
            <li>
              <Link to="/health-insurance-claims-denied-california/out-of-network-provider">Out-of-network provider</Link>
            </li>
            <li>
              <Link to="/health-insurance-claims-denied-california/coding-or-documentation-error">Coding or documentation error</Link>
            </li>
            <li>
              <Link to="/health-insurance-claims-denied-california/experimental-or-investigational">Experimental or investigational</Link>
            </li>
            <li>
              <Link to="/health-insurance-claims-denied-california/benefit-or-service-excluded">Benefit or service excluded</Link>
            </li>
            <li>
              <Link to="/health-insurance-claims-denied-california/timely-filing-issue">Timely filing issue</Link>
            </li>
            <li>
              <Link to="/health-insurance-claims-denied-california/coordination-of-benefits">Coordination of benefits</Link>
            </li>
          </ul>
        </section>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 2]
        </div>

        <section>
          <h2>Key California health insurance laws &amp; deadlines</h2>
          <p>
            The most important deadlines are usually in your denial notice and your plan documents. Still, California law sets baseline rules for many state-regulated plans.
          </p>

          <h3>Grievances for many DMHC-regulated plans</h3>
          <p>
            California’s Knox-Keene system includes an internal grievance process. A key rule in the DMHC regulations is that plans must receive, review, and resolve grievances within 30 calendar days of receipt.
            {' '}
            <a href="https://www.law.cornell.edu/regulations/california/28-CCR-1300.68" target="_blank" rel="noreferrer">
              28 CCR 1300.68
            </a>
          </p>

          <h3>When you can contact the regulator</h3>
          <p>
            The DMHC’s consumer complaint process commonly expects you to file with your plan first and participate in the plan’s process for 30 days before submitting a complaint to the DMHC, unless the case is urgent.
            {' '}
            <a href="https://www.dmhc.ca.gov/fileacomplaint/frequentlyaskedquestions.aspx" target="_blank" rel="noreferrer">
              DMHC FAQ
            </a>
          </p>

          <h3>Independent Medical Review (IMR) and external review</h3>
          <p>
            California has an Independent Medical Review program for certain types of disputes in state-regulated coverage. Eligibility depends on the type of plan and the type of denial.
          </p>
        </section>

        <section>
          <h2>What to do immediately after a denial</h2>
          <ol>
            <li>
              <strong>Read the exact denial reason.</strong> You’re looking for one sentence that explains what was missing or what rule the plan used.
            </li>
            <li>
              <strong>Ask for the criteria used.</strong> If the denial is clinical, request the medical policy or criteria the plan relied on.
            </li>
            <li>
              <strong>Get your records.</strong> For medical necessity disputes, the notes matter more than opinions.
            </li>
            <li>
              <strong>Appeal in writing.</strong> Keep it short. Quote the denial reason and answer it directly.
            </li>
            <li>
              <strong>Track deadlines.</strong> Health appeals are time-sensitive. Put the due date on a calendar the same day.
            </li>
          </ol>
        </section>

        <CalloutBox title="A quick reality check">
          <p>
            Health denials are often solved by matching the paperwork to the plan’s stated reason. You don’t need to write like a lawyer. You need the right documentation in the right format.
          </p>
        </CalloutBox>

        <section>
          <h2>Appeals &amp; complaints in California (DMHC and CDI)</h2>
          <p>
            Start with your plan’s internal appeal or grievance process. If you’re not getting a timely answer, or the response doesn’t match the evidence, the next step depends on who regulates the coverage.
          </p>
          <ul>
            <li>
              <strong>DMHC:</strong> Consumer complaints and Independent Medical Review for many state-regulated health plans.
              {' '}
              <a href="https://www.dmhc.ca.gov/fileacomplaint/frequentlyaskedquestions.aspx" target="_blank" rel="noreferrer">
                DMHC FAQ
              </a>
            </li>
            <li>
              <strong>CDI:</strong> Complaints about certain health insurance policies regulated by the Department of Insurance.
              {' '}
              <a
                href="https://www.insurance.ca.gov/01-consumers/101-help/"
                target="_blank"
                rel="noreferrer"
              >
                File a complaint (CDI)
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>FAQs</h2>
          <div className="faq-section">
            {faqs.map((item) => (
              <div key={item.question} className="faq-item">
                <div className="faq-question" role="heading" aria-level={3}>
                  {item.question}
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Closing: Consumer rights reminder</h2>
          <p>
            If you’re being denied care, you deserve a clear reason and a fair review. Don’t let a vague denial letter end the conversation. Get the criteria, get the records, and use the appeal path that matches your coverage.
          </p>
        </section>

        <StateHubLinks currentState="California" />
      </main>

      <Footer />
    </>
  );
};

export default HealthClaimDeniedCalifornia;
