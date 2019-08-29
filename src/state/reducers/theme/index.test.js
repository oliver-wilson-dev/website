import themeReducer from '.';
import { TOGGLE_THEME, LIGHT_THEME, DARK_THEME } from '../../actions/constants';
import getInitialState from './getInitialState';
import toggleTheme from './reduceCases/toggleTheme';

jest.mock('./getInitialState');
jest.mock('./reduceCases/toggleTheme');

describe('theme reducer', () => {
  describe('when the action type is is TOGGLE_THEME', () => {
    describe('and a state is provided', () => {
      const toggleThemeCallback = jest.fn();
      beforeEach(() => {
        jest.clearAllMocks();
        toggleTheme.mockReturnValueOnce(toggleThemeCallback);
      });


      it('should call toggleTheme', () => {
        const state = { theme: LIGHT_THEME, someOtherProperty: 'some value' };

        themeReducer(state, { type: TOGGLE_THEME });

        expect(toggleTheme)
          .toHaveBeenCalledWith({ state });
      });

      it('should call the toggleThemeCallback', () => {
        const state = { theme: LIGHT_THEME, someOtherProperty: 'some value' };
        themeReducer(state, { type: TOGGLE_THEME });

        expect(toggleThemeCallback)
          .toHaveBeenCalled();
      });
    });

    describe('and no state is provided', () => {
      it('should call toggle theme with the result of getInitialState', () => {
        const mockInitialState = Symbol('test-initial-state');
        getInitialState.mockReturnValueOnce(mockInitialState);
        toggleTheme.mockReturnValueOnce(jest.fn());

        themeReducer(undefined, { type: TOGGLE_THEME });

        expect(toggleTheme).toHaveBeenCalledWith({ state: mockInitialState });
      });
    });
  });

  describe('when the action type is is not recognised', () => {
    const action = { type: Symbol('some-other-action-type') };
    describe('and a state is provided', () => {
      it('should return state', () => {
        const state = { theme: LIGHT_THEME, someOtherProperty: 'some value' };
        expect(themeReducer(state, action)).toEqual(state);
      });
    });

    describe('and no state is provided', () => {
      it('should return the default state, with the theme property LIGHT_THEME', () => {
        const mockInitialState = Symbol('test-initial-state');
        getInitialState.mockReturnValueOnce(mockInitialState);
        toggleTheme.mockReturnValueOnce(jest.fn());
        expect(themeReducer(undefined, action)).toEqual(mockInitialState);
      });
    });
  });
});
