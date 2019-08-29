import toggleTheme from './toggleTheme';
import { LIGHT_THEME, DARK_THEME } from '../../../actions/constants';
import THEME_COOKIE from '../constants';
import { eraseCookie, setCookie } from '../cookieUtilities';

jest.mock('../cookieUtilities');

const mockState = {
  theme: LIGHT_THEME,
  'some-property': Symbol('test-some-other-property')
};

describe('toggleTheme', () => {
  describe('when the theme is light', () => {
    it('should return the dark theme and all of the other properties in state', () => {
      expect(toggleTheme({ state: mockState })()).toEqual({
        'some-property': mockState['some-property'],
        theme: DARK_THEME
      });
    });

    it('should call setCookie with the appropriate values', () => {
      toggleTheme({ state: mockState })();
      expect(setCookie).toHaveBeenCalledWith({ name: THEME_COOKIE, value: DARK_THEME });
    });
  });

  describe('when the theme is dark', () => {
    const mockState = {
      theme: DARK_THEME,
      'some-property': Symbol('test-some-other-property')
    };
    it('should return the light theme and all of the other properties in state', () => {
      expect(toggleTheme({ state: mockState })()).toEqual({
        'some-property': mockState['some-property'],
        theme: LIGHT_THEME
      });
    });

    it('should call eraseCookie with the appropriate values', () => {
      toggleTheme({ state: mockState })();
      expect(eraseCookie).toHaveBeenCalledWith({ name: THEME_COOKIE });
    });
  });
});
