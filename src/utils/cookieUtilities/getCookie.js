import global from 'global';

const getCookie = ({ name }) => {
  const cookies = global.document.cookie.split(';').map(cookie => cookie.trim());

  const foundCookie = cookies
    .find(cookie => cookie.split('=')[0] === name);

  return foundCookie ? foundCookie.split('=')[1] : undefined;
};

export default getCookie;
