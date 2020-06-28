import userAcceptedCookiePolicy from './userAcceptedCookiePolicy';
import { COOKIE_POLICY, COOKIE_POLICY_ACCEPTED } from '../../../actions/constants';
import { setCookie } from '../../../../utils/cookieUtilities';

jest.mock('../../../../utils/cookieUtilities');

const mockState = { [Symbol('test-key')]: Symbol('test-value') };

describe('userAcceptedCookiePolicy', () => {
  it('should return a function', () => {
    expect(userAcceptedCookiePolicy({ state: mockState }))
      .toEqual(expect.any(Function));
  });

  it('should return the expected representation of state', () => {
    expect(userAcceptedCookiePolicy({ state: mockState })()).toEqual({
      ...mockState,
      showCookiePopup: false
    });
  });

  it('should call setCookie with the correct key and value', () => {
    userAcceptedCookiePolicy({ state: mockState })();

    expect(setCookie).toHaveBeenCalledWith({ name: COOKIE_POLICY, value: COOKIE_POLICY_ACCEPTED });
  });
});
