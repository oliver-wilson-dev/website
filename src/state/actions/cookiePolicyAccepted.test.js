import cookiePolicyAccepted from './cookiePolicyAccepted';
import { USER_ACCEPTED_COOKIE_POLICY } from './constants';

describe('learnMoreClicked', () => {
  it('should dispatch an action of the type type property USER_ACCEPTED_COOKIE_POLICY', () => {
    const mockDispatch = jest.fn();
    cookiePolicyAccepted()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({ type: USER_ACCEPTED_COOKIE_POLICY });
  });
});
