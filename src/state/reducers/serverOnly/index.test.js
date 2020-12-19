import serverOnlyReducer from './index';

describe('serverOnly reducer', () => {
  describe('when there is no initial state', () => {
    it('should return the default state', () => {
      expect(serverOnlyReducer()).toEqual({ location: '' });
    });
  });
  describe('when there is an initial state', () => {
    it('should return state', () => {
      const state = {
        location: Symbol('test-location')
      };
      expect(serverOnlyReducer(state)).toEqual(state);
    });
  });
});
