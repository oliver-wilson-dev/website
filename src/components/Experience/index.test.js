import React from 'react';
import { shallow } from 'enzyme';
import Experience from '.';
import Section from '../Section';

const defaultProps = {
  title: 'test-title',
  emoji: 'test-emoji',
  workplaces: [
    { companyName: 'test-company-name' }, { companyName: 'test-another-company-name' }
  ]
};

jest.mock('../Workplace', () => {
  const Workplace = () => null;

  return Workplace;
});


jest.mock('../Section', () => {
  const Section = () => null;

  return Section;
});

jest.mock('../SectionTile', () => {
  const SectionTile = () => null;

  return SectionTile;
});

const render = overrideProps => shallow(<Experience {...defaultProps} {...overrideProps} />);

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
