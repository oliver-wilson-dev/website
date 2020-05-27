import { LEARN_MORE_CLICKED } from '../../actions/constants';
import showLearnMore from './reduceCases/showLearnMore';

export const initialState = {
  showLearnMore: false,
};

const cookieDisclaimerReducer = (state = initialState, action) => new Proxy({
  [LEARN_MORE_CLICKED]: showLearnMore({ state }),
}, {
  get: (reduceCases, actionType) => (
    actionType in reduceCases
      ? reduceCases[actionType]()
      : state
  )
})[action.type];

export default cookieDisclaimerReducer;
