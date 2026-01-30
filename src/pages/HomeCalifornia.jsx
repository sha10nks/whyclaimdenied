import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import CalloutBox from '../components/CalloutBox';
import { californiaFAQs } from '../data/californiaFAQs';
import { getMetaData } from '../seo/meta';
import { generateFAQSchema } from '../seo/schema';

const HomeCalifornia = () => {
  const meta = getMetaData('home');
  const schema = generateFAQSchema(californiaFAQs);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      
      <Header />
      
      <main className="container">
        <h1>Why Auto Insurance Claims Get Denied in California</h1>
        
        <p>
          It’s the letter no one wants to receive. You’ve been in an accident, filed your claim, and waited for the payout—only to be told "no." 
          If your auto insurance claim was denied in California, you are not out of options, but you do need to understand exactly why it happened.
        </p>
        
        <p>
          In California, insurance companies are businesses, but they are also strictly regulated by the Department of Insurance. 
          They cannot simply refuse to pay you without a valid, documented reason. Understanding the rules they must play by is the 
          first step to getting your claim back on track.
        </p>

        {/* AdSense Placeholder */}
        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          {/* AdSense Unit: Top of Content */}
          [AdSense Block 1]
        </div>

        <section>
          <h2>Common Reasons Auto Claims Are Denied</h2>
          <p>
            While every accident is unique, most denials fall into a few specific categories. Before you file an appeal, 
            check if your situation matches one of these common scenarios:
          </p>
          <ul>
            <li>
              <strong>Excluded Drivers:</strong> If the person driving your car was specifically excluded from your policy (often done to lower rates), 
              the insurer is not obligated to pay for damages they cause.
            </li>
            <li>
              <strong>Lapsed Coverage:</strong> If you missed a premium payment, your policy might have been canceled. In California, insurers must 
              provide a specific grace period and notice before canceling, but if you are truly lapsed, the claim will be denied.
            </li>
            <li>
              <strong>Delay in Reporting:</strong> Most policies require you to report accidents "promptly." Waiting weeks or months can give the insurer 
              grounds to deny the claim, arguing that the delay prevented them from investigating properly.
            </li>
            <li>
              <strong>Policy Limits Exceeded:</strong> If the damage costs $40,000 but your liability limit is only $25,000, the insurer will pay 
              up to the limit and deny the rest. This isn't technically a "denial" of the claim, but it often feels like one.
            </li>
          </ul>
        </section>

        <CalloutBox title="California Consumer Right">
          <p>
            <strong>You have the right to a written explanation.</strong>
          </p>
          <p>
            Under the California Fair Claims Settlement Practices Regulations, an insurance company cannot just say "no" over the phone. 
            If they deny your claim, they must send you a letter listing the <strong>specific legal and factual basis</strong> for the denial. 
            They must cite the exact section of your policy or the specific law they are relying on.
          </p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#555' }}>
            <em>Source: California Code of Regulations, Title 10, § 2695.7</em>
          </p>
        </CalloutBox>

        <section>
          <h2>What To Do After a Claim Is Denied</h2>
          <p>
            A denial letter is not the final verdict; it is often just the beginning of a negotiation. If you believe your claim 
            was wrongfully denied, follow these steps:
          </p>
          <ol>
            <li>
              <strong>Read the Denial Letter Twice:</strong> Compare the reason they gave you with the actual wording in your insurance policy. 
              Adjusters make mistakes, and they sometimes cite clauses that don't apply to your specific situation.
            </li>
            <li>
              <strong>Gather Evidence:</strong> If they claim the accident happened outside coverage dates, find your proof of payment. 
              If they claim you were at fault, gather witness statements or police reports that prove otherwise.
            </li>
            <li>
              <strong>File an Internal Appeal:</strong> Most insurers have an internal review process. Submit your new evidence formally 
              and ask for a reconsideration.
            </li>
            <li>
              <strong>Contact the Department of Insurance:</strong> If the insurer refuses to budge and you believe they are violating 
              California law, you can file a "Request for Assistance" with the California Department of Insurance.
            </li>
          </ol>
          <p style={{ marginTop: '1.5rem' }}>
            <Link to="/why-claims-get-denied-california">
              Read our deep dive on What to Do When Your Claim is Denied in California &rarr;
            </Link>
          </p>
        </section>

        {/* AdSense Placeholder */}
        <div className="ad-placeholder">
          <span className="ad-label">Advertisement</span>
          {/* AdSense Unit: In-Article */}
          [AdSense Block 2]
        </div>

        <section>
          <h2>California-Specific Deadlines You Must Know</h2>
          <p>
            California law sets strict timelines for how quickly insurance companies must communicate with you. 
            If they miss these deadlines, they may be acting in "bad faith."
          </p>
          <ul>
            <li><strong>15 Days:</strong> The insurer must acknowledge your claim, provide necessary forms, and begin their investigation within 15 calendar days of receiving your notice of claim.</li>
            <li><strong>40 Days:</strong> Once they have all the proof of claim they need (photos, forms, reports), they must accept or deny your claim within 40 calendar days.</li>
            <li><strong>30 Days:</strong> If they need more time to investigate, they must notify you in writing every 30 days specifying why they cannot yet make a decision.</li>
          </ul>
        </section>

        <section>
          <h2>Frequently Asked Questions</h2>
          <FAQ questions={californiaFAQs} />
        </section>

      </main>

      <Footer />
    </>
  );
};

export default HomeCalifornia;
