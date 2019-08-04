import React from 'react';
import { shallow } from 'enzyme';
import Contact from '.';
import Section from '../Section';

const defaultProps = {
  title: 'test-title',
  phone: 'test-phone-number',
  email: 'test-email'
};

const render = overrideProps => shallow(<Contact {...defaultProps} {...overrideProps} />);

jest.mock('../Section', () => {
  const Section = () => null;

  return Section;
});

describe('<Contact/> component', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should match snapshot', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should render a Section component and pass it the "title" prop', () => {
    const testTitle = 'test-title';
    expect(render({ title: testTitle }).find(Section).prop('title')).toBe(testTitle);
  });
});
