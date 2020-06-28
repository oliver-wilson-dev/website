import cookieDisclaimerReducer from '.';
import { LEARN_MORE_CLICKED, USER_ACCEPTED_COOKIE_POLICY } from '../../actions/constants';
import showLearnMore from './reduceCases/showLearnMore';
import userAcceptedCookiePolicy from './reduceCases/userAcceptedCookiePolicy';
import getInitialState from './getInitialState';

jest.mock('./reduceCases/showLearnMore');
jest.mock('./reduceCases/userAcceptedCookiePolicy');
jest.mock('./getInitialState');

describe('cookieDisclaimer reducer', () => {
  const mockInitialState = {
    [Symbol('test-key')]: Symbol('test-value')
  };
  beforeEach(() => {
    getInitialState.mockReturnValue(mockInitialState);
  });


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

        expect(showLearnMore).toHaveBeenCalledWith({ state: mockInitialState });
      });
    });
  });

  describe('when the action type is USER_ACCEPTED_COOKIE_POLICY', () => {
    const userAcceptedCookiePolicyCallback = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();
      userAcceptedCookiePolicy.mockReturnValue(userAcceptedCookiePolicyCallback);
    });

    describe('and a state is provided', () => {
      it('should call showLearnMore', () => {
        const state = { someOtherProperty: 'some value' };

        cookieDisclaimerReducer(state, { type: USER_ACCEPTED_COOKIE_POLICY });

        expect(userAcceptedCookiePolicy)
          .toHaveBeenCalledWith({ state });
      });

      it('should call the showLearnMoreCallback', () => {
        const state = { someOtherProperty: 'some value' };
        cookieDisclaimerReducer(state, { type: USER_ACCEPTED_COOKIE_POLICY });

        expect(userAcceptedCookiePolicyCallback)
          .toHaveBeenCalled();
      });
    });

    describe('and no state is provided', () => {
      it('should call showLearnMore with the initialState', () => {
        cookieDisclaimerReducer(undefined, { type: USER_ACCEPTED_COOKIE_POLICY });

        expect(userAcceptedCookiePolicy).toHaveBeenCalledWith({ state: mockInitialState });
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
        expect(cookieDisclaimerReducer(undefined, action)).toEqual(mockInitialState);
      });
    });
  });
});
