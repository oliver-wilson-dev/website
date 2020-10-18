import React from 'react';
import { shallow } from 'enzyme';
import Home from '.';

jest.mock('../Landing', () => {
  const Landing = () => null;

  return Landing;
});

jest.mock('../../containers/Sections', () => {
  const Sections = () => null;

  return Sections;
});

jest.mock('../../containers/Page', () => {
  const Page = () => null;

  return Page;
});

const render = () => shallow(<Home />);

describe('Home', () => {
  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
