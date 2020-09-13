import toggleShowSideNav from './toggleShowSideNav';

const mockState = {
  [Symbol('test-key')]: Symbol('test-value'),
  showSideNav: false
};

describe('toggleShowSideNav', () => {
  it('should return a function', () => {
    expect(toggleShowSideNav({ state: mockState }))
      .toEqual(expect.any(Function));
  });

  it('should return the expected representation of state', () => {
    expect(toggleShowSideNav({ state: mockState })()).toEqual({
      ...mockState,
      showSideNav: !mockState.showSideNav
    });
  });
});
