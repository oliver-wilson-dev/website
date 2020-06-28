import global from 'global';
import eraseCookie from './eraseCookie';
import { COOKIE_MAX_AGE_TO_ERASE } from './constants';

const mockCookieName = 'test-cookie-name';
jest.mock('global', () => ({
  document: { cookie: mockCookieName }
}));

describe('eraseCookie', () => {
  it('should set the cookie of the same name as the name parameter passed in', () => {
    const mockName = 'test-name';
    eraseCookie({ name: mockName });
    expect(global.document.cookie).toBe(`${mockName}=; ${COOKIE_MAX_AGE_TO_ERASE};`);
  });
});
