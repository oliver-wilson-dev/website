import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

import styles from './index.css';
import Landing from '../Landing';
import Sections from '../../containers/Sections';
import ToggleSwitch from '../../containers/ToggleSwitch';
import { DARK_THEME } from '../../state/actions/constants';

jest.mock('../../containers/ToggleSwitch', () => {
  const ToggleSwitch = () => null;

  return ToggleSwitch;
});

jest.mock('../../containers/CookieDisclaimer', () => {
  const CookieDisclaimer = () => null;

  return CookieDisclaimer;
});

jest.mock('../Landing', () => {
  const Landing = () => null;

  return Landing;
});

jest.mock('../../containers/Sections', () => {
  const Sections = () => null;

  return Sections;
});

const defaultProps = { theme: 'test-theme' };

const render = overrideProps => shallow(<App {...defaultProps} {...overrideProps} />);

describe('<App/> component', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should render a div with the data-theme attribute equal to the value of the theme prop', () => {
    const mockTheme = 'test-theme';
    expect(render({ theme: mockTheme }).find('div').first().prop('data-theme')).toBe(mockTheme);
  });

  it(`should render a div with the className ${styles.app}`, () => {
    expect(render().find('div').first().prop('className')).toBe(styles.app);
  });

  it(`should render a div with the className ${styles.appContent}`, () => {
    expect(render().find('div > div').prop('className')).toBe(styles.appContent);
  });

  it('should render a <Landing/> component', () => {
    expect(render().find(Landing).exists()).toBe(true);
  });

  it('should render a <Sections/> component', () => {
    expect(render().find(Sections).exists()).toBe(true);
  });

  it('should render a <ToggleSwitch/> component', () => {
    expect(render().find(ToggleSwitch).exists()).toBe(true);
  });

  describe('when the theme is dark', () => {
    it('should render correctly', () => {
      expect(render({ theme: DARK_THEME })).toMatchSnapshot();
    });
  });
});
