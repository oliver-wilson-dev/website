import React from 'react';
import { shallow } from 'enzyme';
import SocialMedia from '.';

const render = () => shallow(<SocialMedia />);

describe('<SocialMedia/>', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
