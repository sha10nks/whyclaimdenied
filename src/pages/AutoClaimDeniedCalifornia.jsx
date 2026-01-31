import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CalloutBox from '../components/CalloutBox';
import StateHubLinks from '../components/StateHubLinks';
import { getMetaData } from '../seo/meta';
import { generateArticleSchema, generateFAQSchema } from '../seo/schema';

const AutoClaimDeniedCalifornia = () => {
  const meta = getMetaData('autoCA');
  const faqs = [
    {
      question: 'How long does an auto insurer have to accept or deny a claim in California?',
      answer:
        'California regulations set timelines once an insurer receives “proof of claim.” In general, the rule is that the insurer must accept or deny the claim, in whole or in part, no later than 40 calendar days after receiving proof of claim, unless an exception applies. If the insurer needs more time, it must send written notice within that timeframe and then provide continuing written status updates every 30 days until a decision is made.',
    },
    {
      question: 'Can I complain to the California Department of Insurance about a denied claim?',
      answer:
        'Yes. If you believe the insurer handled your claim unfairly or isn’t following California rules, you can submit a consumer complaint (Request for Assistance) to the California Department of Insurance. The Department can review the handling of the claim and contact the insurer for a response.',
    },
    {
      question: 'What if my policy was cancelled for nonpayment and I did not know?',
      answer:
        'In California, auto policy cancellation has notice requirements. For nonpayment, the notice period is shorter than other reasons. Check the cancellation notice date, the due date, and whether the nonpayment was cured during the notice window. If something doesn’t line up, raise it in writing and keep a copy of everything you send.',
    },
    {
      question: 'Do I have to accept the insurer’s first denial explanation?',
      answer:
        'No. A denial letter is the insurer’s position, not a judge’s decision. Your next step is to request the exact policy language relied on, organize your evidence, and respond in writing. If you still can’t get a clear, rule-based explanation, a complaint to the regulator can help push the file into a more accountable process.',
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

      <Breadcrumbs items={[{ label: 'California', link: '/' }, { label: 'Auto Claim Denials', link: null }]} />

      <main className="container">
        <h1>Auto Insurance Claims Denied in California</h1>

        <p className="intro">
          A denied auto claim can leave you stuck with repair bills, rental costs, or a car you can’t safely drive. The hard part is that denial letters often sound final, even when they’re based on a fixable issue.
        </p>

        <p>
          This page focuses on California-specific rules and practical next steps. It’s written for regular people dealing with a real claim. It’s not legal advice, and it’s not a substitute for reading your policy.
        </p>

        <p>
          Looking for health coverage denials instead? See our <Link to="/health-insurance-claims-denied-california">Health Insurance Claims Denied in California</Link> guide.
        </p>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 1]
        </div>

        <section>
          <h2>Intro: Why auto claims get denied</h2>
          <p>
            Most denials fall into a few categories: the insurer says there was no coverage, the loss doesn’t fit the policy terms, required steps weren’t completed, or the facts are still being disputed.
          </p>
          <p>
            In California, auto insurers are regulated. That doesn’t mean every denial is wrong, but it does mean claim handling is not “anything goes.” The rules matter when you’re asking for a clear explanation, a timely decision, or a proper investigation.
          </p>
        </section>

        <section>
          <h2>Common auto claim denial reasons (California-relevant)</h2>
          <p>
            These are common patterns. Each link goes to a focused page with California rules to check and a simple checklist for what to do next.
          </p>
          <ul>
            <li>
              <Link to="/auto-insurance-claims-denied-california/no-coverage-at-time-of-loss">No coverage at time of loss</Link>
            </li>
            <li>
              <Link to="/auto-insurance-claims-denied-california/policy-lapse-or-cancellation">Policy lapse or cancellation</Link>
            </li>
            <li>
              <Link to="/auto-insurance-claims-denied-california/missed-reporting-deadline">Missed reporting deadline</Link>
            </li>
            <li>
              <Link to="/auto-insurance-claims-denied-california/excluded-driver">Excluded driver</Link>
            </li>
            <li>
              <Link to="/auto-insurance-claims-denied-california/misrepresentation-or-concealment">Misrepresentation or concealment</Link>
            </li>
            <li>
              <Link to="/auto-insurance-claims-denied-california/non-covered-use">Non-covered use</Link>
            </li>
            <li>
              <Link to="/auto-insurance-claims-denied-california/failure-to-cooperate">Failure to cooperate</Link>
            </li>
            <li>
              <Link to="/auto-insurance-claims-denied-california/disputed-liability">Disputed liability or fault</Link>
            </li>
          </ul>
        </section>

        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          [AdSense Block 2]
        </div>

        <section>
          <h2>Key California auto insurance laws &amp; deadlines</h2>
          <p>
            Here are the California rules that come up most often when you’re trying to make sense of a denial letter and the insurer’s timeline.
          </p>

          <h3>Claims handling timelines (California regulations)</h3>
          <ul>
            <li>
              <strong>15 calendar days:</strong> After notice of claim, insurers generally must acknowledge the claim and begin handling it within 15 calendar days.
            </li>
            <li>
              <strong>40 calendar days:</strong> After receiving proof of claim, insurers generally must accept or deny the claim, in whole or in part, within 40 calendar days.
            </li>
            <li>
              <strong>30-day status updates:</strong> If more time is needed, the insurer must send written notice within the original timeframe and then send continuing written status updates every 30 days until a decision is made.
            </li>
            <li>
              <strong>30 calendar days to pay:</strong> After accepting a claim (and after a properly executed release when needed), insurers generally must issue payment within 30 calendar days.
            </li>
          </ul>

          <p>
            Official sources: California Department of Insurance Fair Claims Settlement Practices Regulations and California Code of Regulations Title 10, sections 2695.5 and 2695.7.
            {' '}
            <a href="https://www.insurance.ca.gov/01-consumers/130-laws-regs-hearings/05-CCR/fair-claims-regs.cfm" target="_blank" rel="noreferrer">
              CDI Fair Claims regs
            </a>
            {' · '}
            <a href="https://www.law.cornell.edu/regulations/california/10-CCR-2695.5" target="_blank" rel="noreferrer">
              10 CCR 2695.5
            </a>
            {' · '}
            <a href="https://www.law.cornell.edu/regulations/california/10-CCR-2695.7" target="_blank" rel="noreferrer">
              10 CCR 2695.7
            </a>
          </p>

          <h3>Cancellation notice for nonpayment (California Insurance Code)</h3>
          <p>
            If the denial is tied to “no coverage” because the policy was cancelled for nonpayment, California Insurance Code section 662 includes notice requirements and explains how the nonpayment notice period works.
            {' '}
            <a
              href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=INS&sectionNum=662"
              target="_blank"
              rel="noreferrer"
            >
              Insurance Code 662
            </a>
          </p>
        </section>

        <section>
          <h2>What to do immediately after a denial</h2>
          <ol>
            <li>
              <strong>Get the exact reason in writing.</strong> Ask the insurer to point to the specific policy provisions and the key facts they relied on.
            </li>
            <li>
              <strong>Ask what would change the decision.</strong> You’re trying to learn whether this is a missing-document problem, a coverage dispute, or a factual disagreement.
            </li>
            <li>
              <strong>Request your claim file.</strong> Keep it simple. Ask for the documents and notes used to reach the decision.
            </li>
            <li>
              <strong>Put your timeline in order.</strong> Create a one-page list of dates, who you spoke to, and what was said.
            </li>
            <li>
              <strong>Respond in writing.</strong> Short, calm, and specific beats a long emotional story.
            </li>
          </ol>
        </section>

        <CalloutBox title="Here’s the tricky part">
          <p>
            A lot of denials aren’t really about the headline reason. They’re about what the file is missing. If you can get the insurer to say “we need X to decide,” you can often move the claim forward faster than arguing abstractly.
          </p>
        </CalloutBox>

        <section>
          <h2>Appeals &amp; complaints in California (CDI process)</h2>
          <p>
            If the insurer won’t explain the denial clearly, keeps changing reasons, or is ignoring the timeline, you can file a consumer complaint with the California Department of Insurance.
          </p>
          <p>
            The CDI’s consumer process is commonly called a Request for Assistance (RFA). You can start here:
            {' '}
            <a href="https://www.insurance.ca.gov/01-consumers/101-help/" target="_blank" rel="noreferrer">
              File a complaint (CDI)
            </a>
          </p>
          <p>
            You’ll usually need the denial letter, your declarations page, and a short explanation of what happened. Keep it factual. You’re giving the regulator something they can review.
          </p>
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
          <h2>Closing: A quick consumer-rights reminder</h2>
          <p>
            A denial is not a personal judgment. It’s a coverage position that has to be supported by a policy and handled under California rules. If the decision feels vague or rushed, push the file back into specifics.
          </p>
        </section>

        <StateHubLinks currentState="California" />
      </main>

      <Footer />
    </>
  );
};

export default AutoClaimDeniedCalifornia;
