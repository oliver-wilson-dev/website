import toggleTheme from './toggleTheme';
import { TOGGLE_THEME } from './constants';

describe('toggleTheme', () => {
  it('should return an object with the type property TOGGLE_THEME', () => {
    const mockDispatch = jest.fn();
    toggleTheme()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({ type: TOGGLE_THEME });
  });
});
