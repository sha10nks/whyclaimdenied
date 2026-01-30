import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo">
          <Link to="/" className="logo-text" aria-label="WhyClaimDenied home">
            <img className="logo-image" src="/Logo.svg" alt="WhyClaimDenied" />
          </Link>
          <span className="logo-subtitle">Independent information on insurance claim denials</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
