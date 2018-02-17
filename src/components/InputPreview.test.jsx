import React from 'react';
import { shallow } from 'enzyme';
import InputPreview from './InputPreview';

describe('InputPreview', () => {
  const props = {
    value: 'test',
    onChange: () => null,
  };

  it('renders an input with the correct type', () => {
    const inputPreview = shallow(<InputPreview {...props} />);
    expect(inputPreview.find('input').prop('type')).toBe('text');
  });
});
