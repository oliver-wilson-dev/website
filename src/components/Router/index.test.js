import React from 'react';
import { mount } from 'enzyme';
import { useLocation } from 'react-router-dom';
import window from 'global';

let Router; let
  render;

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  BrowserRouter: ({ children }) => <div>{children}</div>,
  StaticRouter: ({ children }) => <div>{children}</div>
}));

jest.mock('global', () => ({}));

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


  describe('when on the client', () => {
    beforeEach(() => {
      jest.doMock('../../utils', () => ({
        IS_SERVER: false
      }));

      jest.isolateModules(() => {
        Router = require('./index').default;
      });

      render = () => mount(<Router><h1>Hello world</h1></Router>);
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

  describe('when on the server', () => {
    beforeEach(() => {
      jest.doMock('../../utils', () => ({
        IS_SERVER: true
      }));

      jest.isolateModules(() => {
        Router = require('./index').default;
      });

      render = () => mount(<Router><h1>Hello world</h1></Router>);
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
});
