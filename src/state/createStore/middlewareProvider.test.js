import thunk from 'redux-thunk';
import getMiddlewares from './middlewareProvider';

jest.mock('redux-thunk');

describe('getMiddlewares', () => {
  it('should provide an array with thunk in it', () => {
    expect(getMiddlewares()).toEqual([thunk]);
  });
});
