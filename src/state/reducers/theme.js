import { TOGGLE_THEME } from '../actions/constants';

const initialState = {
  useLightTheme: true
};

export default (state = initialState, action) => new Proxy({
  [TOGGLE_THEME]: { ...state, useLightTheme: !state.useLightTheme },
}, {
  get: (reduceCases, actionType) => (actionType in reduceCases ? reduceCases[actionType] : state)
})[action.type];
