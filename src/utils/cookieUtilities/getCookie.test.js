const cookieName = 'test-cookie-name';
const cookieValue = 'test-cookie-value';

jest.mock('global', () => ({
  document: {
    cookie: 'test-cookie-name=test-cookie-value; test-some-other-name=test-another-cookie-value;'
  }
}));

let getCookie;

describe('getCookie', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('when on the client', () => {
    beforeEach(() => {
      jest.doMock('../clientOrServer', () => ({
        IS_CLIENT: true
      }));

      getCookie = require('./getCookie').default;
    });


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

  describe('when not on the client (on the server)', () => {
    beforeEach(() => {
      jest.doMock('../clientOrServer', () => ({
        IS_CLIENT: false
      }));

      getCookie = require('./getCookie').default;
    });

    it('should return undefined', () => {
      expect(getCookie({ name: cookieName })).toBeUndefined();
    });
  });
});
