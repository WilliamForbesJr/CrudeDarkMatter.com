import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import logoImg from '../images/CoverArt_512.png';

const Header = ({ siteTitle }) => {
  // Mobile Menu toggle state
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="logo flex flex__align--center">
        <img src={logoImg} style={{ maxHeight: '40px' }} />
        <h1 className="logo">Crude Dark Matter</h1>
      </div>
      <nav className="nav">
        <ul className={`header__nav ${menuOpen ? 'header__nav--active' : ''}`}>
          <Link className="header__nav-item" to="/">Home </Link>
          <a className="header__nav-item" href="#">Press Kit</a>
          <Link className="header__nav-item" to="/about">About </Link>
          <a className="header__nav-item" href="#">Contact</a>
          <a className="header__nav-item" href="#">Blog</a>
        </ul>
        <div
          className={`header__hamburger ${menuOpen ? 'header__hamburger--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span class="header__hamburger-bar"></span>
          <span class="header__hamburger-bar"></span>
          <span class="header__hamburger-bar"></span>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
