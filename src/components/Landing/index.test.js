import React from 'react';
import { shallow } from 'enzyme';
import Landing from '.';

const render = () => shallow(<Landing />);

describe('<Landing/>', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
