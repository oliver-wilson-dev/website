import { combineReducers } from 'redux';
import theme from './theme';
import sections from './sections';
import cookieDisclaimer from './cookieDisclaimer';
import navigation from './navigation';

export default combineReducers({
  sections,
  theme,
  cookieDisclaimer,
  navigation
});
