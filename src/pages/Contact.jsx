import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | WhyClaimDenied</title>
        <meta
          name="description"
          content="Contact WhyClaimDenied with questions, corrections, or feedback about insurance claim denial information."
        />
      </Helmet>

      <Header />

      <main className="container">
        <h1>Contact Us</h1>

        <p>Have a question, correction, or suggestion? We read every message.</p>

        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" />
            </label>
          </p>

          <label className="contact-label">
            <span className="contact-label-text">Name (optional)</span>
            <input className="contact-input" type="text" name="name" autoComplete="name" />
          </label>

          <label className="contact-label">
            <span className="contact-label-text">Email</span>
            <input className="contact-input" type="email" name="email" required autoComplete="email" />
          </label>

          <label className="contact-label">
            <span className="contact-label-text">Message</span>
            <textarea className="contact-textarea" name="message" rows="6" required />
          </label>

          <button className="contact-submit" type="submit">
            Send Message
          </button>
        </form>

        <p className="contact-note">
          We don’t offer legal advice and may not be able to respond to every message, but we review all submissions.
        </p>
      </main>

      <Footer />
    </>
  );
}
