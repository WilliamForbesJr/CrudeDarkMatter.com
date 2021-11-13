import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import logoImg from '../images/CoverArt_512.png';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="logo flex flex__align--center">
      <img src={logoImg} style={{ maxHeight: '40px' }} />
      <h1 className="logo">Crude Dark Matter</h1>
    </div>
    <nav className="header__nav animate-underline animate-underline--left">
      <Link to="/">Home </Link>
      <a href="#">Press Kit</a>
      <Link to="/about">About </Link>
      <a href="#">Contact</a>
      <a href="#">Blog</a>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
