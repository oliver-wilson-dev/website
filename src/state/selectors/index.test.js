import { getUseLightTheme, someOtherSelector } from '.';

describe('getUseLightTheme', () => {
  it('returns the useLightTheme property in state', () => {
    const mockUseLightTheme = Symbol('test-use-light-theme');
    expect(getUseLightTheme({ theme: { useLightTheme: mockUseLightTheme } })).toEqual(
      mockUseLightTheme
    );
  });
});

describe('someOtherSelector', () => {
  it('returns the someOtherSelector property in state', () => {
    const mockSomeOtherProperty = Symbol('test-use-light-theme');
    expect(someOtherSelector({ theme: { someOtherProperty: mockSomeOtherProperty } })).toEqual(
      mockSomeOtherProperty
    );
  });
});
