import cookieDisclaimerReducer, { initialState } from '.';
import { LEARN_MORE_CLICKED } from '../../actions/constants';
import showLearnMore from './reduceCases/showLearnMore';

jest.mock('./reduceCases/showLearnMore');

describe('cookieDisclaimer reducer', () => {
  describe('when the action type is is LEARN_MORE_CLICKED', () => {
    const showLearnMoreCallback = jest.fn();
    beforeEach(() => {
      jest.clearAllMocks();
      showLearnMore.mockReturnValue(showLearnMoreCallback);
    });
    describe('and a state is provided', () => {
      it('should call showLearnMore', () => {
        const state = { someOtherProperty: 'some value' };

        cookieDisclaimerReducer(state, { type: LEARN_MORE_CLICKED });

        expect(showLearnMore)
          .toHaveBeenCalledWith({ state });
      });

      it('should call the showLearnMoreCallback', () => {
        const state = { someOtherProperty: 'some value' };
        cookieDisclaimerReducer(state, { type: LEARN_MORE_CLICKED });

        expect(showLearnMoreCallback)
          .toHaveBeenCalled();
      });
    });

    describe('and no state is provided', () => {
      it('should call showLearnMore with the initialState', () => {
        cookieDisclaimerReducer(undefined, { type: LEARN_MORE_CLICKED });

        expect(showLearnMore).toHaveBeenCalledWith({ state: initialState });
      });
    });
  });

  describe('when the action type is is not recognised', () => {
    const action = { type: Symbol('some-other-action-type') };
    describe('and a state is provided', () => {
      it('should return state', () => {
        const state = { someOtherProperty: 'some value' };
        expect(cookieDisclaimerReducer(state, action)).toEqual(state);
      });
    });

    describe('and no state is provided', () => {
      it('should return the default state, with the theme property LIGHT_THEME', () => {
        showLearnMore.mockReturnValueOnce(jest.fn());
        expect(cookieDisclaimerReducer(undefined, action)).toEqual(initialState);
      });
    });
  });
});
