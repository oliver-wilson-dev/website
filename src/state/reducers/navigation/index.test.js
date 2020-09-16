import navigationReducer from '.';

import { TOGGLE_SHOW_SIDE_NAV } from '../../actions/constants';
import toggleShowSideNav from './reduceCases/toggleShowSideNav';

jest.mock('./reduceCases/toggleShowSideNav');

describe('navigationReducer', () => {
  const mockToggleShowSideNavReturn = Symbol('test-new-state');

  const toggleShowSideNavCB = jest.fn(() => mockToggleShowSideNavReturn);
  beforeEach(() => {
    toggleShowSideNav.mockReturnValue(toggleShowSideNavCB);
  });


  describe('when called with the action type TOGGLE_SHOW_SIDE_NAV', () => {
    describe('when a state is provided', () => {
      it('should call toggleShowSideNav with the state', () => {
        const state = Symbol('test-state');
        navigationReducer(state, { type: TOGGLE_SHOW_SIDE_NAV });

        expect(toggleShowSideNav).toHaveBeenCalledWith({ state });
      });

      it('should return the result of toggleShowSideNav', () => {
        const state = Symbol('test-state');
        expect(navigationReducer(state, { type: TOGGLE_SHOW_SIDE_NAV }))
          .toEqual(mockToggleShowSideNavReturn);
      });
    });

    describe('when a state is not provided', () => {
      it('should call toggleShowSideNav with the initial state', () => {
        navigationReducer(undefined, { type: TOGGLE_SHOW_SIDE_NAV });

        expect(toggleShowSideNav).toHaveBeenCalledWith({
          state: {
            showSideNav: false
          }
        });
      });

      it('should return the result of toggleShowSideNav', () => {
        expect(navigationReducer(undefined, { type: TOGGLE_SHOW_SIDE_NAV }))
          .toEqual(mockToggleShowSideNavReturn);
      });
    });
  });

  describe('when called with an unknown action type', () => {
    describe('when called with a state', () => {
      it('should return the state', () => {
        const state = Symbol('test-state');
        expect(navigationReducer(state, 'some-other-action')).toEqual(state);
      });
    });

    describe('when no state is provided', () => {
      it('should return the initial state', () => {
        expect(navigationReducer(undefined, 'some-other-action')).toEqual({
          showSideNav: false
        });
      });
    });
  });
});
