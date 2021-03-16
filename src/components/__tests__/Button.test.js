import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

test('renders without crashing', () => {
  let mountedButton = shallow(<Button />);
});
