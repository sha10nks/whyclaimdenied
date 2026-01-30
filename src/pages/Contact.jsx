import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - WhyClaimDenied</title>
        <meta name="description" content="Get in touch with the WhyClaimDenied team for website feedback or corrections." />
      </Helmet>
      
      <Header />
      
      <main className="container">
        <h1>Contact Us</h1>
        
        <p>
          We appreciate your interest in WhyClaimDenied. If you’ve spotted an error in one of our guides 
          or have a suggestion for a new topic, we’d love to hear from you.
        </p>

        <h2>Important: We Cannot Review Your Claim</h2>
        <p>
          Please note that <strong>we are not insurance adjusters or attorneys</strong>. We cannot review your specific 
          claim documents, offer legal advice, or intervene with your insurance company. Emails requesting 
          personal claim assistance will not receive a response.
        </p>

        <h2>How to Reach Us</h2>
        <p>
          For general website inquiries, feedback, or press questions, please email us at:
        </p>
        
        <p style={{ fontSize: '1.1rem', fontWeight: '500', color: '#333' }}>
          hello [at] whyclaimdenied [dot] com
        </p>
        
        <p>
          We aim to respond to general inquiries within 3-5 business days.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
