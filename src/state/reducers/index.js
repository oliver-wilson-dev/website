import { combineReducers } from 'redux';
import theme from './theme';
import sections from './sections';
import cookieDisclaimer from './cookieDisclaimer';

export default combineReducers({
  sections,
  theme,
  cookieDisclaimer
});
