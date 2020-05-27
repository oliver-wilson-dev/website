import learnMoreClicked from './learnMoreClicked';
import { LEARN_MORE_CLICKED } from './constants';

describe('learnMoreClicked', () => {
  it('should return an object with the type property LEARN_MORE_CLICKED', () => {
    const mockDispatch = jest.fn();
    learnMoreClicked()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith({ type: LEARN_MORE_CLICKED });
  });
});
