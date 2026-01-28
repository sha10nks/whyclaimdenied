import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="logo">
          WhyClaimDenied
        </Link>
        <nav>
          {/* Add navigation items here if needed later */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
