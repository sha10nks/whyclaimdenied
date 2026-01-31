import { Link } from 'react-router-dom';
import { useEffect, useId, useState } from 'react';

const Header = () => {
  const navId = useId();
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
