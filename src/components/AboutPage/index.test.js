import React from 'react';
import { shallow } from 'enzyme';
import About from '.';

jest.mock('../../containers/Page', () => {
  const SubPage = ({ children }) => <div>{children}</div>;

  return SubPage;
});

const render = () => shallow(<About />);

describe('About', () => {
  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
