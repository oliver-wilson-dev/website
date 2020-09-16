import React from 'react';
import { shallow } from 'enzyme';
import PlacesWorked from '.';

jest.mock('../Section', () => {
  const Section = () => null;

  return Section;
});

jest.mock('./asos-logo.svg', () => {
  const AsosLogo = () => null;

  return AsosLogo;
});

jest.mock('./itv-logo.svg', () => {
  const ItvLogo = () => null;

  return ItvLogo;
});

describe('PlacesWorked', () => {
  const render = () => shallow(<PlacesWorked />);

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
