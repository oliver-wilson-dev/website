import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

const render = () => shallow(<Footer />);

describe('<Footer/>', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
