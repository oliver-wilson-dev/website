import React from 'react';
import { shallow } from 'enzyme';
import StaticRouter from './index';

jest.mock('react-router-dom', () => ({
  StaticRouter: ({ children }) => <div>{children}</div>,
}));

const defaultProps = {
  location: 'test-location',
  context: {}
};

const render = () => shallow(
  <StaticRouter {...defaultProps}>
    <h1>hello world</h1>
  </StaticRouter>
);

describe('StaticRouter', () => {
  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
