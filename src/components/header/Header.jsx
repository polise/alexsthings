/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="header">
    <div className="header__title">
      <h1>Alex's Things</h1>
      <h2>Slice by slice</h2>
    </div>
    <div className="header__sections">
      <div className="section">
        <Link to="/">
          home
        </Link>
      </div>
      <div className="section">
        <Link to="/about">
          about this site
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
