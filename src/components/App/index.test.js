import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import Header from '../../containers/Header';
import { DARK_THEME } from '../../state/actions/constants';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  Route: () => null,
  Switch: () => null
}));

jest.mock('../Router', () => {
  const Router = () => null;

  return Router;
});

jest.mock('../NotFound', () => {
  const NotFound = () => null;

  return NotFound;
});

jest.mock('../../containers/Header', () => {
  const Header = () => null;

  return Header;
});

jest.mock('../../containers/Footer', () => {
  const Footer = () => null;

  return Footer;
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

  it('should render a <Header/> component', () => {
    expect(render().find(Header).exists()).toBe(true);
  });

  describe('when the theme is dark', () => {
    it('should render correctly', () => {
      expect(render({ theme: DARK_THEME })).toMatchSnapshot();
    });
  });
});
