import getCookie from './getCookie';

const cookieName = 'test-cookie-name';
const cookieValue = 'test-cookie-value';

jest.mock('global', () => ({
  document: {
    cookie: 'test-cookie-name=test-cookie-value; test-some-other-name=test-another-cookie-value;'
  }
}));

describe('getCookie', () => {
  describe('when the cookie being searched for exists', () => {
    it('should get the cookie of the same name as the name parameter passed in', () => {
      expect(getCookie({ name: cookieName })).toBe(cookieValue);
    });
  });

  describe('when the cookie being searched does not exist', () => {
    it('should return null', () => {
      expect(getCookie({ name: "test-cookie-that-doesn't-exist" })).toBeUndefined();
    });
  });
});
