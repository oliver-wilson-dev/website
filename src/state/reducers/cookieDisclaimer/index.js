import { LEARN_MORE_CLICKED, USER_ACCEPTED_COOKIE_POLICY } from '../../actions/constants';
import showLearnMore from './reduceCases/showLearnMore';
import userAcceptedCookiePolicy from './reduceCases/userAcceptedCookiePolicy';
import getInitialState from './getInitialState';

const cookieDisclaimerReducer = (state = getInitialState(), action) => new Proxy({
  [LEARN_MORE_CLICKED]: showLearnMore({ state }),
  [USER_ACCEPTED_COOKIE_POLICY]: userAcceptedCookiePolicy({ state }),
}, {
  get: (reduceCases, actionType) => (
    actionType in reduceCases
      ? reduceCases[actionType]()
      : state
  )
})[action.type];

export default cookieDisclaimerReducer;
