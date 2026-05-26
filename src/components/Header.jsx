import { Link } from './Link';
import { useEffect, useState } from 'react';

const Header = () => {
  const navId = 'primary-nav';
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 720) setMenuOpen(false);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link to="/" className="logo-text" aria-label="WhyClaimDenied home" onClick={closeMenu}>
              <img className="logo-image" src="/Logo.svg" alt="WhyClaimDenied" />
            </Link>
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-controls={navId}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="nav-toggle-icon" aria-hidden="true">
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
              <span className="nav-toggle-bar" />
            </span>
          </button>

          <nav id={navId} className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Primary">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <details className="nav-dropdown" onClick={(e) => e.stopPropagation()}>
              <summary className="nav-link nav-dropdown-summary">Tools</summary>
              <div className="nav-dropdown-menu" role="menu" aria-label="Tools">
                <Link to="/tools/appeal-letter-generator" className="nav-dropdown-item" onClick={closeMenu}>
                  Insurance Appeal Letter Generator
                </Link>
                <Link to="/tools/denial-letter-analyzer" className="nav-dropdown-item" onClick={closeMenu}>
                  Insurance Denial Letter Analyzer
                </Link>
              </div>
            </details>
            <Link to="/guides" className="nav-link" onClick={closeMenu}>
              Guides
            </Link>
            <Link to="/blog" className="nav-link" onClick={closeMenu}>
              Blog
            </Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
