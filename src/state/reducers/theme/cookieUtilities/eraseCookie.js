import global from 'global';
import { COOKIE_MAX_AGE_TO_ERASE } from './constants';

const eraseCookie = ({ name }) => {
  global.document.cookie = `${name}=; ${COOKIE_MAX_AGE_TO_ERASE};`;
};

export default eraseCookie;
