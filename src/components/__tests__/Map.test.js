import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

test('renders without crashing', () => {
  let mountedMap = shallow(<Map />);
});
