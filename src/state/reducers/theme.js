import { TOGGLE_THEME, LIGHT_THEME, DARK_THEME } from '../actions/constants';

const initialState = {
  theme: LIGHT_THEME
};

export default (state = initialState, action) => new Proxy({
  [TOGGLE_THEME]: { ...state, theme: state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME },
}, {
  get: (reduceCases, actionType) => (actionType in reduceCases ? reduceCases[actionType] : state)
})[action.type];
