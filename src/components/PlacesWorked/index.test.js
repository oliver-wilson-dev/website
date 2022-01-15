import React from 'react';
import { shallow } from 'enzyme';
import PlacesWorked from '.';
import Section from '../Section';
import styles from './index.css';

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

jest.mock('./sainsburys-logo.svg', () => {
  const SainsburysLogo = () => null;

  return SainsburysLogo;
});

describe('PlacesWorked', () => {
  const render = () => shallow(<PlacesWorked />);

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should pass the additionalStyles to the section component', () => {
    const wrapper = render();

    expect(wrapper.find(Section).prop('additionalStyles')).toEqual({
      section: styles.sectionWrapper,
      container: styles.sectionContainer
    });
  });
});
