import { getUseLightTheme, getSections, getSectionsContentFetched } from '.';

describe('getUseLightTheme', () => {
  it('returns the useLightTheme property in state', () => {
    const mockUseLightTheme = Symbol('test-use-light-theme');
    expect(getUseLightTheme({ theme: { useLightTheme: mockUseLightTheme } })).toEqual(
      mockUseLightTheme
    );
  });
});

describe('getSections', () => {
  it('returns the someOtherSelector property in state', () => {
    const mockSections = Symbol('test-sections');
    expect(getSections({ sections: { sections: mockSections } })).toEqual(
      mockSections
    );
  });
});

describe('getSectionsContentFetched', () => {
  it('returns the someOtherSelector property in state', () => {
    const mockSectionsContentFetched = Symbol('test-sections-content-fetched');
    expect(getSectionsContentFetched({ sections: { sectionsContentFetched: mockSectionsContentFetched } })).toEqual(
      mockSectionsContentFetched
    );
  });
});
