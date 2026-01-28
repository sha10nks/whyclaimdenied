import React from 'react';
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
        <h1>Why Insurance Claims Get Denied in California</h1>
        
        <p>
          Dealing with a denied insurance claim can be stressful and confusing. Whether it's for auto repair, 
          health services, or property damage, understanding why your claim was denied is the first step 
          toward resolving the issue. In California, specific regulations govern how insurance companies 
          must handle claims.
        </p>

        {/* AdSense Placeholder */}
        <div className="ad-placeholder">
          {/* AdSense Unit: Top of Content */}
          Advertisement
        </div>

        <section>
          <h2>Common Reasons Claims Are Denied</h2>
          <ul>
            <li><strong>Policy Exclusions:</strong> The specific incident or damage is not covered by your policy.</li>
            <li><strong>Lapsed Coverage:</strong> Missed premiums leading to a policy cancellation.</li>
            <li><strong>Late Filing:</strong> Failing to report the incident within the required time frame.</li>
            <li><strong>Insufficient Documentation:</strong> Lack of proof or evidence to support your claim.</li>
          </ul>
        </section>

        <CalloutBox title="California Fact">
          In California, insurance companies are required to provide a "reasonable explanation" for any 
          claim denial in writing, citing the specific policy provision or law.
        </CalloutBox>

        <section>
          <h2>What To Do After a Claim Is Denied</h2>
          <p>
            If your claim is denied, do not panic. You have options. Review your denial letter carefully, 
            gather more evidence, and consider filing an appeal.
          </p>
          <p>
            <Link to="/why-claims-get-denied-california">
              Read our deep dive on What to Do When Your Claim is Denied in California &rarr;
            </Link>
          </p>
        </section>

        {/* AdSense Placeholder */}
        <div className="ad-placeholder">
          {/* AdSense Unit: In-Article */}
          Advertisement
        </div>

        <section>
          <h2>California-Specific Rules</h2>
          <p>
            California has strong consumer protection laws. The Department of Insurance oversees insurer conduct. 
            You should be aware of the "Fair Claims Settlement Practices Regulations" which set deadlines 
            for insurers to acknowledge, investigate, and pay claims.
          </p>
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
