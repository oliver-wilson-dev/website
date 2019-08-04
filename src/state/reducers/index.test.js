import { combineReducers } from 'redux';
import theme from './theme';

jest.mock('redux', () => ({
  combineReducers: jest.fn()
}));
jest.mock('./theme');

const mockCombineReducers = Symbol('test-combine-reducers');

describe('reducer', () => {
  beforeEach(() => {
    theme.mockReturnValueOnce(Symbol('test-theme-reducer'));
    combineReducers.mockReturnValueOnce(mockCombineReducers);
  });

  it('should return the result of combineReducers', () => {
    expect(require('./').default).toBe(mockCombineReducers);
  });

  it('should call combineReducers with the imported reducers', () => {
    require('./');
    expect(combineReducers).toHaveBeenCalledWith({ theme });
  });
});
