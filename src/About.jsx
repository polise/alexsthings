/* eslint a11y/anchor-is-valid: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/header/Header';

const About = () => (
  <div className="about">
    <Header />
    <h1>About this:</h1>
    <p>
      I want to hear the wind and not think about Instagram.
    </p>
    <p>
      I am Alex and these are my things.
    </p>
    <Link to="/">
      <button>
        Go Home
      </button>
    </Link>
  </div>
);

export default About;
