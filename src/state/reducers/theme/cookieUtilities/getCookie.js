import global from 'global';

const getCookie = ({ name }) => {
  const cookies = global.document.cookie.split(';');

  const foundCookie = cookies
    .find(cookie => !cookie.indexOf(`${name}=`));

  return foundCookie ? foundCookie.split('=')[1] : undefined;
};

export default getCookie;
