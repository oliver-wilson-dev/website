import React from 'react';
import { shallow } from 'enzyme';
import Experience from '.';
import Section from '../Section';

const defaultProps = {
  companyName: 'test-company-name',
  content: ['test-paragraph', 'test-paragraph'],
  emoji: 'test-emoji',
  employmentPeriod: 'test-employment-period',
  jobTitle: 'test-job-title',
  title: 'test-title',
};

const render = overrideProps => shallow(<Experience {...defaultProps} {...overrideProps} />);

jest.mock('../Section', () => {
  const Section = () => null;

  return Section;
});

describe('<Experience/> component', () => {
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
