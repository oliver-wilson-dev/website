import { TOGGLE_THEME } from '../../actions/constants';
import toggleTheme from './reduceCases/toggleTheme';
import getInitialState from './getInitialState';

const themeReducer = (state = getInitialState(), action) => new Proxy({
  [TOGGLE_THEME]: toggleTheme({ state }),
}, {
  get: (reduceCases, actionType) => (actionType in reduceCases
    ? reduceCases[actionType]()
    : state)
})[action.type];

export default themeReducer;
