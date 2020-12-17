import window from 'global';
import { IS_CLIENT } from '../clientOrServer';

const getCookie = ({ name }) => {
  if (IS_CLIENT) {
    const cookies = window.document.cookie.split(';').map(cookie => cookie.trim());

    const foundCookie = cookies
      .find(cookie => cookie.split('=')[0] === name);

    return foundCookie ? foundCookie.split('=')[1] : undefined;
  }

  return undefined;
};

export default getCookie;
