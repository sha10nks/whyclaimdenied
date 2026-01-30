import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - WhyClaimDenied</title>
        <meta name="description" content="Our privacy policy is simple: we don't collect your personal data. Learn how we handle cookies and third-party services." />
      </Helmet>
      
      <Header />
      
      <main className="container">
        <h1>Privacy Policy</h1>
        
        <p>
          Your privacy matters. We want to be completely transparent about what happens when you visit WhyClaimDenied.
        </p>

        <h2>We Do Not Collect Personal Data</h2>
        <p>
          This website is designed for reading, not for signing up. We do not have user accounts, we do not ask for your name, 
          and we do not collect your email address or phone number. You can browse our guides completely anonymously.
        </p>

        <h2>Cookies and Third-Party Services</h2>
        <p>
          Like almost all websites, we use third-party tools to help us keep the lights on and understand how our site is used. 
          These tools may store small files called "cookies" on your device.
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> Helps us see which pages are popular so we can write better content. 
            The data is anonymous and aggregated (e.g., "50 people read this article today").
          </li>
          <li>
            <strong>Google AdSense:</strong> We display ads to fund our work. Google and its partners may use cookies 
            to show you ads based on your previous visits to this or other websites.
          </li>
        </ul>

        <h2>Your Control</h2>
        <p>
          You can disable cookies at any time through your browser settings. This will not stop you from reading 
          any of the content on our site.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          If we ever change how we handle data, we will update this page immediately.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default Privacy;
