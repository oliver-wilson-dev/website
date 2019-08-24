import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from '.';

const render = () => shallow(<LoadingSpinner />);

describe('<LoadingSpinner />', () => {
  it('should render correctly', () => {
    expect(render().exists()).toBe(true);
    expect(render()).toMatchSnapshot();
  });
});
