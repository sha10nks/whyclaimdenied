import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - WhyClaimDenied</title>
        <meta name="description" content="We don’t run user accounts or ask for personal info. This page explains cookies, Google Analytics, and Google AdSense on WhyClaimDenied." />
      </Helmet>
      
      <Header />
      
      <main className="container">
        <h1>Privacy Policy</h1>
        
        <p>
          Privacy matters. Here’s what actually happens when you visit WhyClaimDenied.
        </p>

        <h2>No Accounts, No Direct Personal Info</h2>
        <p>
          This site is built for reading, not logging in. We don’t offer user accounts. We don’t ask for your name, email address, or phone number. We also don’t have a place for you to submit medical records, policy documents, or claim files.
        </p>

        <p>
          We don’t try to learn who you are from what you read. We care about what topics are confusing so we can improve the guides, but we don’t need your identity to do that.
        </p>

        <p>
          If you choose to contact us through any method listed on the site, you’re choosing to share whatever you send. We don’t sell contact messages or turn them into a marketing list.
        </p>

        <h2>Cookies and Third-Party Services</h2>
        <p>
          We use a couple of well-known services to understand traffic and support the site with ads. Those services can store small files called cookies in your browser. Cookies help a site remember basic information, like whether your browser has visited before.
        </p>

        <p>
          Some cookies are used for measurement (counting visits and page views). Some are used for advertising (showing ads, limiting repeats, and measuring whether an ad was displayed). We keep it practical: the site should work whether you accept cookies or not.
        </p>

        <p>
          When your browser loads these services, they may receive technical information as part of how the web works. That can include things like your IP address, browser type, device type, and which page you visited.
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> Helps us understand how people use the site (for example, which pages are read and roughly how long someone stays). The reports we look at are aggregated. We’re not trying to identify you.
          </li>
          <li>
            <strong>Google AdSense:</strong> We show ads to support the site. Google and its partners may use cookies to show and measure ads, including showing ads that are more relevant based on your visits to this site and other sites.
          </li>
        </ul>

        <p>
          You might notice that ads can change from visit to visit. That’s usually cookie-related. Some browsers also block certain ad and analytics requests by default.
        </p>

        <p>
          Cookies can be “first-party” (set by the site you’re visiting) or “third-party” (set by a service loaded on the page). On WhyClaimDenied, the third-party cookies are mainly about analytics and ads.
        </p>

        <p>
          We don’t have access to, and don’t control, how third parties build their own profiles or ad systems. What we can do is keep our own side simple: we don’t ask for logins, and we don’t try to match site activity to a real-world identity.
        </p>

        <h2>Your Control</h2>
        <p>
          You can block or delete cookies in your browser settings. You’ll still be able to read the site, but some parts may behave differently (like ad personalization or certain analytics measurements). You can also review Google’s ad settings if you want more control over how Google personalizes ads.
        </p>

        <p>
          If you want to limit analytics specifically, Google also offers tools that can reduce or opt out of certain Analytics tracking in your browser. We don’t run our own tracking system beyond what’s described on this page.
        </p>

        <p>
          If you prefer, you can use private browsing modes, browser extensions, or privacy-focused browsers. That choice is up to you. We don’t punish readers for it.
        </p>

        <h2>Children’s Privacy</h2>
        <p>
          WhyClaimDenied is written for a general audience. It’s not meant for children, and we don’t knowingly try to collect personal information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          If we change how we handle data, we’ll update this page so you can see what’s different.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;
