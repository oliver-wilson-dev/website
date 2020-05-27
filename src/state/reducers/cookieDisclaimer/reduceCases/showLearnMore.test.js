import showLearnMore from './showLearnMore';

const mockState = { [Symbol('test-key')]: Symbol('test-value') };

describe('showLearnMore', () => {
  it('should return a function', () => {
    expect(showLearnMore({ state: mockState }))
      .toEqual(expect.any(Function));
  });
  it('should return the expected representation of state', () => {
    expect(showLearnMore({ state: mockState })()).toEqual({
      ...mockState,
      showLearnMore: true
    });
  });
});
