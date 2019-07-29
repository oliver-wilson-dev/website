import React from 'react';
import { shallow } from 'enzyme';
import Education from '.';
import Section from '../Section';

const defaultProps = {
  title: 'test-title',
  content: ['test-paragraph', 'test-paragraph'],
  courseName: {
    precedingInformation: 'test-course-name-prefix',
    name: 'test-course-name'
  },
  degreeClassification: {
    precedingInformation: 'test-degree-prefix',
    name: 'test-degree-classification'
  },
  universityName: 'test-university-name'
};

const render = overrideProps => shallow(<Education {...defaultProps} {...overrideProps} />);

jest.mock('../Section', () => {
  const Section = () => null;

  return Section;
});

describe('<Education/> component', () => {
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
