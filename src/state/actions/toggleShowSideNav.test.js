import toggleShowSideNav from './toggleShowSideNav';
import { TOGGLE_SHOW_SIDE_NAV } from './constants';

describe('toggleShowSideNav', () => {
  it('should return an object with the type property TOGGLE_SHOW_SIDE_NAV', () => {
    const mockDispatch = jest.fn();
    toggleShowSideNav()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({ type: TOGGLE_SHOW_SIDE_NAV });
  });
});
