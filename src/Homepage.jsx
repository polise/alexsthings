import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from './components/header/Header';
import './Homepage.scss';

const Homepage = () => (
  <div className="homepage">
    <Header />

    <Link to="/about">
      <button>About this site</button>
    </Link>
  </div>
);

Homepage.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  message: PropTypes.string.isRequired,
};

export default Homepage;
