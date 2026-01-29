import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-text">
            <img className="logo-image" src="/Logo.svg" alt="WhyClaimDenied" />
          </Link>
          <span className="logo-subtitle">Independent information on insurance claim denials</span>
        </div>
        <nav>
          {/* Add navigation items here if needed later */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
