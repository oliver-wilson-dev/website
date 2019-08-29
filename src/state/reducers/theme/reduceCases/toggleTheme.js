import { LIGHT_THEME, DARK_THEME } from '../../../actions/constants';
import { eraseCookie, setCookie } from '../cookieUtilities';
import THEME_COOKIE from '../constants';

const toggleTheme = ({ state }) => () => {
  const newTheme = state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
  if (newTheme === DARK_THEME) {
    setCookie({ name: THEME_COOKIE, value: newTheme });
  } else {
    eraseCookie({ name: THEME_COOKIE });
  }

  return {
    ...state,
    theme: newTheme
  };
};


export default toggleTheme;
