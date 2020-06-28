import global from 'global';
import setCookie from './setCookie';
import { COOKIE_PATH } from './constants';

jest.mock('global', () => ({
  document: {
    cookie: ''
  }
}));

const mockFullYear = new Date().getFullYear();
const mockDateToUTCString = 'test-date';
const mockSetFullYear = jest.fn();
const mockGetFullYear = jest.fn(() => mockFullYear);
const mockToUTCString = jest.fn(() => mockDateToUTCString);


// eslint-disable-next-line no-global-assign
Date = class extends Date {
  constructor() {
    return {
      setFullYear: mockSetFullYear,
      getFullYear: mockGetFullYear,
      toUTCString: mockToUTCString
    };
  }
};

describe('setCookie', () => {
  afterEach(() => {
    global.document.cookie = '';
  });

  it('should call date.setFullYear with the result of date.getFullYear + 1', () => {
    setCookie({ name: 'name', value: 'value' });
    expect(mockSetFullYear).toHaveBeenCalledWith(mockFullYear + 1);
  });

  describe('when a value for the cookie is provided', () => {
    it('should set the cookie for that cookie name', () => {
      const mockName = 'test-name';
      const mockValue = 'test-value';

      setCookie({ name: mockName, value: mockValue });
      expect(global.document.cookie).toEqual(`${mockName}=${mockValue}; expires=${mockDateToUTCString}; ${COOKIE_PATH}`);
    });
  });

  describe('when a value for the cookie is not provided', () => {
    it('should work', () => {
      const mockName = 'test-name';

      setCookie({ name: mockName });
      expect(global.document.cookie).toEqual(`${mockName}=; expires=${mockDateToUTCString}; ${COOKIE_PATH}`);
    });
  });
});
