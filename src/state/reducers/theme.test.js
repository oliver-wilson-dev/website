import theme from './theme';
import { TOGGLE_THEME, LIGHT_THEME, DARK_THEME } from '../actions/constants';

describe('theme reducer', () => {
  describe('when the action type is is TOGGLE_THEME', () => {
    describe('and a state is provided', () => {
      describe('and the theme is LIGHT_THEME', () => {
        it('should return state, with the theme property DARK_THEME', () => {
          const state = { theme: LIGHT_THEME, someOtherProperty: 'some value' };
          expect(theme(state, { type: TOGGLE_THEME })).toEqual({ ...state, theme: DARK_THEME });
        });
      });

      describe('and the theme is DARK_THEME', () => {
        it('should return state, with the theme property LIGHT_THEME', () => {
          const state = { theme: DARK_THEME, someOtherProperty: 'some value' };
          expect(theme(state, { type: TOGGLE_THEME })).toEqual({ ...state, theme: LIGHT_THEME });
        });
      });
    });

    describe('and no state is provided', () => {
      it('should return the default state, with the theme property DARK_THEME', () => {
        expect(theme(undefined, { type: TOGGLE_THEME })).toEqual({ theme: DARK_THEME });
      });
    });
  });

  describe('when the action type is is not recognised', () => {
    const action = { type: Symbol('some-other-action-type') };
    describe('and a state is provided', () => {
      it('should return state', () => {
        const state = { theme: LIGHT_THEME, someOtherProperty: 'some value' };
        expect(theme(state, action)).toEqual(state);
      });
    });

    describe('and no state is provided', () => {
      it('should return the default state, with the theme property LIGHT_THEME', () => {
        expect(theme(undefined, action)).toEqual({ theme: LIGHT_THEME });
      });
    });
  });
});
