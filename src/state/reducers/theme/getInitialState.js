import { LIGHT_THEME } from '../../actions/constants';
import { getCookie } from './cookieUtilities';
import THEME_COOKIE from './constants';

const getInitialState = () => {
  const themeCookie = getCookie({ name: THEME_COOKIE });
  return {
    theme: themeCookie || LIGHT_THEME,
    checkBoxChecked: !!themeCookie || false
  };
};

export default getInitialState;
