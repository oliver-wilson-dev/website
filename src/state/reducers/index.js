import { combineReducers } from 'redux';
import theme from './theme';
import sections from './sections';

export default combineReducers({
  sections,
  theme
});
