import global from 'global';
import { COOKIE_PATH } from './constants';

const setCookie = ({ name, value }) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);

  const nameAndValue = `${name}=${value || ''};`;
  const expires = `expires=${date.toUTCString()};`;

  global.document.cookie = `${nameAndValue} ${expires} ${COOKIE_PATH}`;
};

export default setCookie;
