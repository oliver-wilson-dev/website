import React from 'react';
import { shallow } from 'enzyme';
import Section from '.';

const defaultProps = {
  title: 'test-title',
  children: <p>this is some content</p>
};
const render = () => shallow(<Section {...defaultProps} />);

describe('<Section/>', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
