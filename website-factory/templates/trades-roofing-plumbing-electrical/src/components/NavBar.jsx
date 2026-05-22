import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import brandDNA from '../config/brand-dna';

const navLinks = [
  { label: 'Roof Replacement', to: '/services/roof-replacement' },
  { label: 'Roof Repair', to: '/services/roof-repair' },
  { label: 'Storm Damage', to: '/services/storm-damage' },
  { label: 'Gutters', to: '/services/gutters' },
  { label: 'Free Estimate', to: '/contact' },
];

function handleLogoError(e) {
  e.currentTarget.style.display = 'none';
  e.currentTarget.nextSibling.style.display = 'inline';
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-primary transition-shadow duration-300 ${
        scrolled ? 'shadow-floating backdrop-blur-sm bg-primary/[var(--glass-opacity)]' : ''
      }`}
      style={{ height: 'var(--nav-height, 72px)' }}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
          aria-label={`${brandDNA.company.name} - go to homepage`}
          onClick={closeMenu}
        >
          <img
            src="/logo-white.svg"
            alt={brandDNA.company.name}
            className="h-10 max-h-10 w-auto object-contain"
            width="160"
            height="40"
            onError={handleLogoError}
          />
          <span className="font-heading font-bold text-xl text-white" style={{ display: 'none' }}>
            {brandDNA.company.name}
          </span>
        </Link>

        {/* Desktop centre nav */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `font-body font-medium text-sm text-white underline-offset-4 transition-colors duration-200 hover:text-accent-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded ${
                    isActive ? 'underline decoration-accent' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop right — phone CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="font-body text-sm text-neutral">Call:</span>
          <a
            href={brandDNA.contact.phoneTelLink}
            className="font-heading font-bold text-base text-accent hover:text-accent-light transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            aria-label={`Call us at ${brandDNA.contact.phone}`}
          >
            {brandDNA.contact.phone}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex lg:hidden items-center justify-center w-10 h-10 text-white rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden bg-primary-dark transition-all motion-safe:duration-300 ${
          menuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-6 pb-4 pt-2 gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block py-3 font-body font-medium text-base text-white border-b border-primary-slate hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                    isActive ? 'text-accent' : ''
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={brandDNA.contact.phoneTelLink}
              className="block py-3 font-heading font-bold text-base text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
              aria-label={`Call us at ${brandDNA.contact.phone}`}
              onClick={closeMenu}
            >
              {brandDNA.contact.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
