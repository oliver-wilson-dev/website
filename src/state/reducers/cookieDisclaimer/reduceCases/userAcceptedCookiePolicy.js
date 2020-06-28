import { COOKIE_POLICY, COOKIE_POLICY_ACCEPTED } from '../../../actions/constants';
import { setCookie } from '../../../../utils/cookieUtilities';

const userAcceptedCookiePolicy = ({ state }) => () => {
  setCookie({ name: COOKIE_POLICY, value: COOKIE_POLICY_ACCEPTED });

  return {
    ...state,
    showCookiePopup: false
  };
};


export default userAcceptedCookiePolicy;
