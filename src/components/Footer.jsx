import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} WhyClaimDenied. All rights reserved.</p>
        <p>Informational use only. Not legal or financial advice.</p>
      </div>
    </footer>
  );
};

export default Footer;
