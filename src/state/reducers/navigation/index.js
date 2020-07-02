import { TOGGLE_SHOW_SIDE_NAV } from '../../actions/constants';
import toggleShowSideNav from './reduceCases/toggleShowSideNav';

const initialState = {
  showSideNav: false
};

const navigationReducer = (state = initialState, action) => new Proxy({
  [TOGGLE_SHOW_SIDE_NAV]: toggleShowSideNav({ state }),
}, {
  get: (reduceCases, actionType) => (actionType in reduceCases
    ? reduceCases[actionType]()
    : state)
})[action.type];

export default navigationReducer;
