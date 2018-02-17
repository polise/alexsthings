import React from 'react';
import PropTypes from 'prop-types';

const InputPreview = props => (
  <div>
    <input
      type="text"
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    />
  </div>
);

InputPreview.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputPreview;
