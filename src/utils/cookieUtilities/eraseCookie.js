import window from 'global';
import { COOKIE_MAX_AGE_TO_ERASE } from './constants';

const eraseCookie = ({ name }) => {
  window.document.cookie = `${name}=; ${COOKIE_MAX_AGE_TO_ERASE};`;
};

export default eraseCookie;
