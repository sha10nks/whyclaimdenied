import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import CalloutBox from '../components/CalloutBox';
import { getMetaData } from '../seo/meta';

const ClaimDeniedCalifornia = () => {
  const meta = getMetaData('claimDenied');

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      
      <Header />
      
      <Breadcrumbs items={[{ label: 'Claim Denied Guide', link: null }]} />

      <main className="container">
        <h1>What to Do When Your Claim is Denied in California</h1>
        
        <p className="intro">
          Receiving a denial letter is not the end of the road. In California, you have specific rights 
          and a clear process to challenge an insurer's decision.
        </p>

        <section>
          <h2>1. Review the Denial Letter</h2>
          <p>
            California insurers must send a written explanation. Look for the specific reason code or 
            policy language they are citing. Compare this with your actual policy documents.
          </p>
        </section>

        <div className="ad-placeholder">
          {/* AdSense Unit: In-Article */}
          Advertisement
        </div>

        <section>
          <h2>2. Gather Your Evidence</h2>
          <p>
            Documentation is key. Organize:
          </p>
          <ul>
            <li>Photos of damage or injuries</li>
            <li>Police reports or medical records</li>
            <li>Communication logs with your adjuster</li>
            <li>Receipts for any expenses incurred</li>
          </ul>
        </section>

        <CalloutBox title="Did You Know?">
          You can request a copy of your entire claim file from the insurance company. This often contains 
          adjuster notes that can help your case.
        </CalloutBox>

        <section>
          <h2>3. File an Internal Appeal</h2>
          <p>
            Most insurers have an internal review process. Write a formal appeal letter addressing the 
            specific reason for denial and attaching your new evidence.
          </p>
        </section>

        <section>
          <h2>4. Contact the California Department of Insurance</h2>
          <p>
            If you believe the denial was unfair or illegal, you can file a Request for Assistance (RFA) 
            with the California Department of Insurance (CDI). They can investigate whether the insurer 
            followed state laws.
          </p>
        </section>

        <section>
          <h2>Next Steps</h2>
          <p>
            If administrative appeals fail, you may need to consult with a consumer protection attorney 
            who specializes in insurance bad faith.
          </p>
          <p>
            <Link to="/">Return to Home &rarr;</Link>
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default ClaimDeniedCalifornia;
