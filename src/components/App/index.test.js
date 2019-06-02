import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

import styles from './index.css';
import DownloadButton from '../DownloadButton';
import Footer from '../Footer';
import Landing from '../Landing';
import Sections from '../Sections';
import SocialMedia from '../SocialMedia';
import ToggleSwitch from '../../containers/ToggleSwitch';

jest.mock('../../containers/ToggleSwitch', () => {
  const ToggleSwitch = () => null;

  return ToggleSwitch;
});

jest.mock('../DownloadButton', () => {
  const DownloadButton = () => null;

  return DownloadButton;
});

jest.mock('../Footer', () => {
  const Footer = () => null;

  return Footer;
});

jest.mock('../Landing', () => {
  const Landing = () => null;

  return Landing;
});

jest.mock('../Sections', () => {
  const Sections = () => null;

  return Sections;
});

jest.mock('../SocialMedia', () => {
  const SocialMedia = () => null;

  return SocialMedia;
});

const render = overrideProps => shallow(<App useLightTheme {...overrideProps} />);

describe('<App/> component', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });


  it('should render a div with the data-theme attribute equal to the value of the useLightTheme prop', () => {
    const mockUseLightTheme = Symbol('test-light-theme');
    expect(render({ useLightTheme: mockUseLightTheme }).find('div').first().prop('data-theme')).toBe(mockUseLightTheme);
  });


  it(`should render a div with the className ${styles.app}`, () => {
    expect(render().find('div').first().prop('className')).toBe(styles.app);
  });

  it(`should render a div with the className ${styles.appContent}`, () => {
    expect(render().find('div > div').prop('className')).toBe(styles.appContent);
  });

  it('should render a <DownloadButton/> component', () => {
    expect(render().find(DownloadButton).exists()).toBe(true);
  });

  it('should render a <Footer/> component', () => {
    expect(render().find(Footer).exists()).toBe(true);
  });

  it('should render a <Landing/> component', () => {
    expect(render().find(Landing).exists()).toBe(true);
  });

  it('should render a <Sections/> component', () => {
    expect(render().find(Sections).exists()).toBe(true);
  });

  it('should render a <SocialMedia/> component', () => {
    expect(render().find(SocialMedia).exists()).toBe(true);
  });

  it('should render a <ToggleSwitch/> component', () => {
    expect(render().find(ToggleSwitch).exists()).toBe(true);
  });
});
