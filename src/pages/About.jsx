import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - WhyClaimDenied</title>
        <meta name="description" content="Learn about the mission behind WhyClaimDenied. Independent, clear information to help you understand insurance claim denials." />
      </Helmet>
      
      <Header />
      
      <main className="container">
        <h1>About Us</h1>
        
        <p>
          Insurance is complicated. A denial can feel personal, confusing, and unfair. Most people don’t deal with claims every day, so when a letter shows up saying “denied,” it’s hard to know what it really means.
        </p>

        <p>
          <strong>WhyClaimDenied</strong> is an independent educational resource for regular people who are trying to understand the claims process and common denial reasons. It’s for patients, homeowners, drivers, and families who want plain-language explanations, not industry talk.
        </p>

        <p>
          We’re a small publisher. That’s a feature, not a gimmick. It means we can keep the focus on clarity and usefulness instead of chasing trends.
        </p>

        <p>
          We’re not an insurance company, a law firm, or a government agency. We don’t handle claims, negotiate with insurers, or tell you what you “should” do in a specific case. This site is meant to help you read what you’ve been given, understand the terms being used, and spot the questions that matter.
        </p>

        <h2>Our Mission</h2>
        <p>
          The goal is simple: clear, neutral information that helps you ask better questions. If you understand <em>why</em> a decision was made, you’re in a better position to respond in a way that makes sense.
        </p>

        <p>
          You might notice we focus on basics that get skipped elsewhere: what “medical necessity” is supposed to mean, how prior authorization fits in, what documentation usually matters, and why insurers use certain phrases. We try to write in a way that’s useful even if you’re stressed and reading quickly.
        </p>

        <h2>How Our Content Is Created</h2>
        <p>
          We build articles by researching insurer communications, public guidance, and official sources where available. When we mention rules or programs, we try to trace them back to a primary source instead of repeating rumors from forums. If we can’t confirm something, we don’t present it as a fact.
        </p>

        <h2>How We Stay Independent</h2>
        <p>
          To keep the site free, we may run ads. Those ads don’t decide what we publish, what we prioritize, or how we explain a denial reason. We don’t take payment to change our conclusions or to favor any insurer.
        </p>

        <p>
          If you ever see something that looks off, tell us by using whatever contact method is listed on the site. We can’t respond to every message, but we do take corrections seriously.
        </p>

        <p>
          Thanks for using WhyClaimDenied as a starting point.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default About;
