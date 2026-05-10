import { Link } from './Link';

const BUILD_DATE = typeof __BUILD_TIMESTAMP__ === 'string' ? __BUILD_TIMESTAMP__ : null

const buildYear = () => {
  if (BUILD_DATE) {
    const d = new Date(BUILD_DATE)
    if (!Number.isNaN(d.getTime())) return d.getFullYear()
  }
  return new Date().getFullYear()
}

const Footer = () => {
  const year = buildYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <Link to="/" className="footer-logo-link" aria-label="WhyClaimDenied home">
          <img className="footer-logo-image" src="/Logo.svg" alt="WhyClaimDenied" />
        </Link>
        <div className="footer-links">
          <Link to="/about">About Us</Link> | 
          <Link to="/blog">Blog</Link> | 
          <Link to="/contact">Contact</Link> | 
          <Link to="/privacy">Privacy Policy</Link> | 
          <Link to="/terms">Terms of Use</Link>
        </div>
        <p className="footer-copyright">&copy; {year} WhyClaimDenied. All rights reserved.</p>
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
