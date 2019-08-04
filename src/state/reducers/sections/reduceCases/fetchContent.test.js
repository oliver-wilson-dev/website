import fetchContent from './fetchContent';

const mockState = { [Symbol('test-key')]: Symbol('test-value') };
const mockSections = Symbol('test-sections');

describe('fetchContent', () => {
  it('should return a function', () => {
    expect(fetchContent({ payload: { sections: mockSections, }, state: mockState }))
      .toEqual(expect.any(Function));
  });
  it('should return the expected representation of state', () => {
    expect(fetchContent({ payload: { sections: mockSections, }, state: mockState })()).toEqual({
      ...mockState,
      sectionsContentFetched: true,
      sections: mockSections
    });
  });
});
