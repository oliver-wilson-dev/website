import { useMemo } from 'react';
import useBackgroundClasses from './index';
import styles from './index.css';
import { DARK_THEME } from '../../state/actions/constants';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useMemo: jest.fn()
}));
describe('useBackgroundClasses', () => {
  useMemo.mockImplementation(fn => fn());

  it('should call useMemo with the theme prop in the dependency array', () => {
    const mockTheme = Symbol('test-theme');

    useBackgroundClasses({ theme: mockTheme });

    expect(useMemo).toHaveBeenCalledWith(expect.any(Function), [mockTheme]);
  });

  describe('when the theme is not DARK_THEME', () => {
    it('should return the standard background class', () => {
      const mockTheme = Symbol('test-theme');

      expect(useBackgroundClasses({ theme: mockTheme })).toBe(styles.themeBackground);
    });
  });

  describe('when the theme is DARK_THEME', () => {
    it('should return the standard background class and the dark theme class', () => {
      expect(useBackgroundClasses({ theme: DARK_THEME })).toBe(`${styles.themeBackground} ${styles.themeBackground__dark}`);
    });
  });
});
