import React from 'react';
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
          Insurance is complicated. When a claim gets denied, it often feels personal, confusing, and unfair. 
          That’s why this site exists.
        </p>

        <p>
          <strong>WhyClaimDenied</strong> is an independent educational resource designed to help everyday people 
          make sense of the insurance claims process. We are not an insurance company, a law firm, or a government agency. 
          We are a small team of researchers and writers dedicated to translating complex policy language into plain English.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our goal is simple: to provide clear, neutral, and accurate information that empowers you to ask the right questions. 
          We believe that understanding <em>why</em> a decision was made is the first step toward fixing it.
        </p>

        <h2>How We Stay Independent</h2>
        <p>
          To keep this site free for everyone, we may display advertisements or use affiliate links. However, our content 
          is never influenced by these partnerships. We do not accept payment to alter our explanations or to favor 
          specific insurance carriers.
        </p>

        <p>
          Thank you for trusting us as your starting point for insurance information.
        </p>
      </main>

      <Footer />
    </>
  );
};

export default About;
