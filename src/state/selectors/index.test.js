import {
  getTheme, getSections, getSectionsContentFetched, getCheckboxCheckedStatus, getShowLearnMore
} from '.';

describe('getTheme', () => {
  it('returns the theme property in state', () => {
    const mockTheme = Symbol('test-use-light-theme');
    expect(getTheme({ theme: { theme: mockTheme } })).toEqual(
      mockTheme
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
    expect(getSectionsContentFetched(
      {
        sections: { sectionsContentFetched: mockSectionsContentFetched }
      }
    )).toEqual(
      mockSectionsContentFetched
    );
  });
});

describe('getCheckboxCheckedStatus', () => {
  it('returns the checkBoxChecked property in state', () => {
    const mockGetCheckboxCheckedStatus = Symbol('test-sections-content-fetched');
    expect(getCheckboxCheckedStatus(
      {
        theme: { checkBoxChecked: mockGetCheckboxCheckedStatus }
      }
    )).toEqual(
      mockGetCheckboxCheckedStatus
    );
  });
});

describe('getShowLearnMore', () => {
  it('returns the checkBoxChecked property in state', () => {
    const mockShowLearnMore = Symbol('test-show-learn-more');
    expect(getShowLearnMore(
      {
        cookieDisclaimer: { showLearnMore: mockShowLearnMore }
      }
    )).toEqual(
      mockShowLearnMore
    );
  });
});
