import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-links">
          <Link to="/about">About Us</Link> | 
          <Link to="/contact">Contact</Link> | 
          <Link to="/privacy">Privacy Policy</Link> | 
          <Link to="/terms">Terms of Use</Link>
        </div>
        <p className="footer-copyright">&copy; {new Date().getFullYear()} WhyClaimDenied. All rights reserved.</p>
        <p className="footer-disclaimer">
          <strong>Disclaimer:</strong> WhyClaimDenied is an independent informational resource. We are not a law firm, 
          insurance company, or financial advisory service. The content on this website is for educational purposes only 
          and should not be considered legal or professional advice. Always consult with a qualified professional regarding your specific situation.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
