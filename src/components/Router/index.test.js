import React from 'react';
import { mount } from 'enzyme';
import { useLocation } from 'react-router-dom';
import Router from './index';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  HashRouter: ({ children }) => <div>{children}</div>
}));

const render = () => mount(<Router><h1>Hello world</h1></Router>);

describe('Router component', () => {
  const mockScrollTo = jest.fn();

  beforeAll(() => {
    window.scrollTo = mockScrollTo;
  });

  afterAll(() => {
    window.scrollTo.mockReset();
  });

  beforeEach(() => {
    useLocation.mockReturnValueOnce({ pathname: 'test-path' });
  });


  it('should call window.scrollTo on first render', () => {
    render();

    expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
  });

  describe('when re-rending', () => {
    it('should call window.scrollTo', () => {
      const wrapper = render();

      useLocation.mockReturnValueOnce({ pathname: 'some-path' });

      wrapper.update();

      expect(mockScrollTo).toHaveBeenCalledWith(0, 0);
    });
  });
});
