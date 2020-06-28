import { COOKIE_POLICY, COOKIE_POLICY_ACCEPTED } from '../../actions/constants';
import { getCookie } from '../../../utils/cookieUtilities';

const getInitialState = () => {
  const showCookiePopup = getCookie({ name: COOKIE_POLICY }) !== COOKIE_POLICY_ACCEPTED;

  return {
    showCookiePopup,
    showLearnMore: false,
  };
};

export default getInitialState;
