import { combineReducers } from 'redux';
import theme from './theme';
import sections from './sections';
import cookieDisclaimer from './cookieDisclaimer';
import navigation from './navigation';
import serverOnly from './serverOnly';

export default combineReducers({
  sections,
  theme,
  cookieDisclaimer,
  navigation,
  serverOnly
});
