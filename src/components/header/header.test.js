import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './header';

it('renders correctly', () => {
  const component = shallow(<Header />);

  expect(toJson(component)).toMatchSnapshot();
});

it('contains <h1> tag', () => {
  const component = shallow(<Header />);

  expect(component.find('h1')).toHaveLength(1);
});
