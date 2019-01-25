import React from 'react';
import { shallow } from 'enzyme';
import DeleteButton from '.';

const render = () => shallow(<DeleteButton />);

describe('<DeleteButton/>', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
