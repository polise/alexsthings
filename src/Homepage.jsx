import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/header/Header';
import './Homepage.scss';

const Homepage = () => (
  <div className="homepage">
    <Header />
    <div className="page">
      <p>This is the part where the page goes.</p>
    </div>
  </div>
);

Homepage.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  message: PropTypes.string.isRequired,
};

export default Homepage;
