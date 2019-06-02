import theme from './theme';
import { TOGGLE_THEME } from '../actions/constants';

describe('theme reducer', () => {
  describe('when the action type is is TOGGLE_THEME', () => {
    describe('and a state is provided', () => {
      it('should return state, with the useLightTheme property inverted', () => {
        const state = { useLightTheme: true, someOtherProperty: 'some value' };
        expect(theme(state, { type: TOGGLE_THEME })).toEqual({ ...state, useLightTheme: false });
      });
    });

    describe('and no state is provided', () => {
      it('should return the default state, with the useLightTheme property false', () => {
        expect(theme(undefined, { type: TOGGLE_THEME })).toEqual({ useLightTheme: false });
      });
    });
  });

  describe('when the action type is is not recognised', () => {
    const action = { type: Symbol('some-other-action-type') };
    describe('and a state is provided', () => {
      it('should return state', () => {
        const state = { useLightTheme: true, someOtherProperty: 'some value' };
        expect(theme(state, action)).toEqual(state);
      });
    });

    describe('and no state is provided', () => {
      it('should return the default state, with the useLightTheme property true', () => {
        expect(theme(undefined, action)).toEqual({ useLightTheme: true });
      });
    });
  });
});
