import getInitialState from './getInitialState';
import { COOKIE_POLICY, COOKIE_POLICY_ACCEPTED } from '../../actions/constants';
import { getCookie } from '../../../utils/cookieUtilities';

jest.mock('../../../utils/cookieUtilities');


describe('getInitialState', () => {
  it('should call getCookie with the cookie policy constant', () => {
    getInitialState();
    expect(getCookie).toHaveBeenCalledWith({ name: COOKIE_POLICY });
  });
  describe('when the cookie policy cookie already has a value indicating it has been accepted', () => {
    it('should return a representation of state detailing that showCookiePopup is false', () => {
      getCookie.mockReturnValueOnce(COOKIE_POLICY_ACCEPTED);

      expect(getInitialState()).toEqual({
        showCookiePopup: false,
        showLearnMore: false,
      });
    });
  });

  describe('when there is not a cookie value already saved', () => {
    it('should return a representation of state with the theme set to light and indicating the checkbox is unchecked/false', () => {
      getCookie.mockReturnValueOnce(undefined);

      expect(getInitialState()).toEqual({
        showCookiePopup: true,
        showLearnMore: false,
      });
    });
  });
});
