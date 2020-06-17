import React from 'react';
import { shallow } from 'enzyme';
import SubPage from '.';

const render = () => shallow(<SubPage><h1>hello world</h1></SubPage>);

describe('SubPage', () => {
  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
