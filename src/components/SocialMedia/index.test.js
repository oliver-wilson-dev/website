import React from 'react';
import { shallow } from 'enzyme';
import SocialMedia from '.';

jest.mock('./linkedin.svg', () => {
  const LinkedIn = () => null;

  return LinkedIn;
});

jest.mock('./github.svg', () => {
  const Github = () => null;

  return Github;
});

const render = () => shallow(<SocialMedia />);

describe('<SocialMedia/>', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
