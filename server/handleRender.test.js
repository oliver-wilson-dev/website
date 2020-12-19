import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import handleRender from './handleRender';
import {
  LIGHT_THEME,
  DARK_THEME,
  COOKIE_POLICY_ACCEPTED,
  COOKIE_POLICY
} from '../src/state/actions/constants';
import reducer from '../src/state/reducers';

jest.mock('react-dom/server', () => ({
  renderToString: jest.fn()
}));

jest.mock('redux-thunk', () => Symbol('thunk'));

jest.mock('fs', () => ({
  readFile: jest.fn()
}));

jest.mock('path', () => ({
  resolve: jest.fn(),
}));

jest.mock('redux', () => ({
  combineReducers: jest.fn(),
  createStore: jest.fn(),
  applyMiddleware: jest.fn(),
}));

jest.mock('react-redux', () => ({
  Provider: jest.fn(() => null)
}));

jest.mock('../src/state/reducers', () => Symbol('test-reducer'));

jest.mock('../src/containers/App', () => {
  const App = () => null;

  return App;
});

const mockFetchContentRes = jest.fn();

jest.mock('../src/state/actions/fetchContent', () => ({
  __esModule: true,
  default: () => mockFetchContentRes
}));

describe('handleRender', () => {
  const mockGetStateRes = { something: 'mock get state res' };
  const mockStore = {
    dispatch: Symbol('test-dispatch'),
    getState: jest.fn(() => mockGetStateRes)
  };
  const mockHtml = 'test-html';

  const mockApplyMiddleware = Symbol('middleware');

  const mockResStatusSend = jest.fn();
  const mockResStatus = jest.fn(() => ({
    send: mockResStatusSend
  }));

  const url = Symbol('test-url');
  const context = { statusCode: 200 };

  beforeEach(() => {
    createStore.mockReturnValue(mockStore);
    applyMiddleware.mockReturnValue(mockApplyMiddleware);
    renderToString.mockReturnValue(mockHtml);
  });

  describe('when a cookie theme has not been set', () => {
    it('should call createStore with the correct reducer, initialState and applyMiddleware result', async () => {
      const cookies = {
        theme: undefined,
        [COOKIE_POLICY]: ''
      };

      const res = {
        status: mockResStatus,
        send: jest.fn()
      };

      await handleRender({ cookies, url }, res);

      expect(createStore).toHaveBeenCalledWith(reducer,
        {
          cookieDisclaimer: {
            showCookiePopup: true,
            showLearnMore: false
          },
          navigation: {
            showSideNav: false
          },
          sections: {
            sections: {},
            sectionsContentFetched: false
          },
          theme: {
            checkBoxChecked: false,
            theme: LIGHT_THEME
          },
          serverOnly: {
            location: url,
            context
          },
        },
        mockApplyMiddleware);
    });
  });

  describe('when a cookie theme has been set', () => {
    it('should call createStore with the correct reducer, initialState and applyMiddleware result', async () => {
      const cookies = {
        theme: Symbol('test-theme'),
        [COOKIE_POLICY]: ''
      };

      const res = {
        status: mockResStatus,
        send: jest.fn()
      };

      await handleRender({ cookies, url }, res);

      expect(createStore).toHaveBeenCalledWith(reducer,
        {
          cookieDisclaimer: {
            showCookiePopup: true,
            showLearnMore: false
          },
          navigation: {
            showSideNav: false
          },
          sections: {
            sections: {},
            sectionsContentFetched: false
          },
          theme: {
            checkBoxChecked: false,
            theme: cookies.theme
          },
          serverOnly: {
            location: url,
            context
          },
        },
        mockApplyMiddleware);
    });

    describe('and the theme is the dark theme', () => {
      it('should call createStore with the correct reducer, initialState and applyMiddleware result', async () => {
        const cookies = {
          theme: DARK_THEME,
          [COOKIE_POLICY]: ''
        };

        const res = {
          status: mockResStatus,
          send: jest.fn()
        };

        await handleRender({ cookies, url }, res);

        expect(createStore).toHaveBeenCalledWith(reducer,
          {
            cookieDisclaimer: {
              showCookiePopup: true,
              showLearnMore: false
            },
            navigation: {
              showSideNav: false
            },
            sections: {
              sections: {},
              sectionsContentFetched: false
            },
            theme: {
              checkBoxChecked: true,
              theme: DARK_THEME
            },
            serverOnly: {
              location: url,
              context
            },
          },
          mockApplyMiddleware);
      });
    });
  });

  describe('when the cookie policy has been accepted', () => {
    it('should call createStore with the correct reducer, initialState and applyMiddleware result', async () => {
      const cookies = {
        theme: DARK_THEME,
        [COOKIE_POLICY]: COOKIE_POLICY_ACCEPTED
      };

      const res = {
        status: mockResStatus,
        send: jest.fn()
      };

      await handleRender({ cookies, url }, res);

      expect(createStore).toHaveBeenCalledWith(reducer,
        {
          cookieDisclaimer: {
            showCookiePopup: false,
            showLearnMore: false
          },
          navigation: {
            showSideNav: false
          },
          sections: {
            sections: {},
            sectionsContentFetched: false
          },
          theme: {
            checkBoxChecked: true,
            theme: DARK_THEME
          },
          serverOnly: {
            location: url,
            context
          },
        },
        mockApplyMiddleware);
    });
  });

  it('should call applyMiddleware with the thunk middleware', async () => {
    const cookies = {
      theme: DARK_THEME,
      [COOKIE_POLICY]: COOKIE_POLICY_ACCEPTED
    };

    const res = {
      status: mockResStatus,
      send: jest.fn()
    };

    await handleRender({ cookies, url }, res);

    expect(applyMiddleware).toHaveBeenCalledWith(thunk);
  });

  it('should call fetchContent', async () => {
    const cookies = {
      theme: DARK_THEME,
      [COOKIE_POLICY]: COOKIE_POLICY_ACCEPTED
    };

    const res = {
      status: mockResStatus,
      send: jest.fn()
    };

    await handleRender({ cookies, url }, res);

    expect(mockFetchContentRes).toHaveBeenCalledWith(mockStore.dispatch);
  });

  it('should call renderToString', async () => {
    const cookies = {
      theme: DARK_THEME,
      [COOKIE_POLICY]: COOKIE_POLICY_ACCEPTED
    };

    const res = {
      status: mockResStatus,
      send: jest.fn()
    };

    await handleRender({ cookies, url }, res);

    expect(renderToString).toHaveBeenCalled();
  });

  it('should a 500 response', async () => {
    const cookies = {
      theme: DARK_THEME,
      [COOKIE_POLICY]: COOKIE_POLICY_ACCEPTED
    };

    const res = {
      status: mockResStatus,
      send: jest.fn()
    };

    fs.readFile.mockImplementation((_, __, fn) => {
      fn('test-error', 'data');
    });

    await handleRender({ cookies, url }, res);

    expect(res.status).toHaveBeenCalledWith(500);
  });

  it('should return the app string', async () => {
    const cookies = {
      theme: DARK_THEME,
      [COOKIE_POLICY]: COOKIE_POLICY_ACCEPTED
    };

    const res = {
      status: mockResStatus,
      send: jest.fn()
    };

    fs.readFile.mockImplementation((_, __, fn) => {
      fn(false, '<div id="app"></div>');
    });

    await handleRender({ cookies, url }, res);

    expect(mockResStatus).toHaveBeenCalledWith(context.statusCode);
    expect(mockResStatusSend).toHaveBeenCalled();
  });
});
