import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '.';

jest.mock('../../routes', () => ({
  home: {
    path: 'test-home-path'
  }
}));

jest.mock('react-router-dom', () => ({
  Link: () => null
}));

jest.mock('./search.svg', () => {
  const SearchIcon = () => null;

  return SearchIcon;
});

jest.mock('../../containers/Page', () => {
  const SubPage = ({ children }) => <div>{children}</div>;

  return SubPage;
});

const render = (props = {}) => shallow(<NotFoundPage {...props} />);

describe('NotFoundPage', () => {
  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe('when provided with a staticContext', () => {
    it('should set the statusCode property to 404', () => {
      const staticContext = { statusCode: Symbol('test-initial-status-code-value') };

      render({ staticContext });

      expect(staticContext.statusCode).toBe(404);
    });
  });
});
