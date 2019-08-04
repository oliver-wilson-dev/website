import React from 'react';
import { shallow } from 'enzyme';
import Greeting from '.';
import Section from '../Section';

const defaultProps = {
  content: ['test-paragraph', 'test-paragraph'],
  openingLine: {
    start: 'test-start',
    joke: 'test-joke',
    end: 'test-end'
  },
  title: 'test-title',
};

const render = overrideProps => shallow(<Greeting {...defaultProps} {...overrideProps} />);

jest.mock('../Section', () => {
  const Section = () => null;

  return Section;
});

describe('<Greeting/> component', () => {
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
