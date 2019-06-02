import toggleTheme from './toggleTheme';
import { TOGGLE_THEME } from './constants';

describe('toggleTheme', () => {
  it('should return an object with the type property TOGGLE_THEME', () => {
    expect(toggleTheme()).toEqual({ type: TOGGLE_THEME });
  });
});
