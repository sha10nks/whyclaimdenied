import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use - WhyClaimDenied</title>
        <meta name="description" content="Terms of use for WhyClaimDenied. Please read these simple guidelines before using our informational website." />
      </Helmet>
      
      <Header />
      
      <main className="container">
        <h1>Terms of Use</h1>
        
        <p>
          Welcome to WhyClaimDenied. We believe in keeping things simple, including our ground rules. 
          By using this website, you agree to the following terms.
        </p>

        <h2>1. This is Information, Not Advice</h2>
        <p>
          The most important thing to know is that we are an educational website, not a law firm or financial advisor. 
          The content here is for general informational purposes only. It is not legal advice, medical advice, or 
          professional insurance advice.
        </p>
        <p>
          Every insurance policy and situation is unique. You should always consult with a qualified professional 
          (like a licensed attorney or public adjuster) before making important decisions about your specific claim.
        </p>

        <h2>2. Use Responsibly</h2>
        <p>
          You are free to read, learn from, and share our content. However, please do not copy our work and present 
          it as your own. We work hard to create original, helpful guides.
        </p>

        <h2>3. Accuracy and Updates</h2>
        <p>
          Insurance laws and regulations change frequently. While we strive to keep our information accurate and up-to-date, 
          we cannot guarantee that every page reflects the most current legal standards at all times. Always verify 
          critical information with official sources.
        </p>

        <h2>4. Your Decisions Are Yours</h2>
        <p>
          We provide the map, but you drive the car. We are not responsible for the outcome of your insurance claim 
          or any actions you take based on the information found on this site.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default Terms;
