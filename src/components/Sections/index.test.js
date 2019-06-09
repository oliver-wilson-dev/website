import React from 'react';
import { shallow } from 'enzyme';
import Sections from '.';
import Section from '../Section';
import sectionContent from '../../content';

jest.mock('../Section', () => {
  const Section = () => null;

  return Section;
});

jest.mock('../../content', () => ({
  firstSection: { title: 'title', content: 'content' },
  secondSection: { title: 'a second title', content: 'some more content' }
}));

const render = () => shallow(<Sections />);

describe('<Sections/>', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should render as many section components for the number of sectionContent values there are', () => {
    expect(render().find(Section)).toHaveLength(2);
  });

  test.each([{
    content: sectionContent.firstSection,
    section: render().find(Section).first()
  }, {
    content: sectionContent.secondSection,
    section: render().find(Section).at(1)
  }])(
    'should render a Section with the content %p',
    ({ content, section }) => {
      expect(section.props()).toEqual(content);
    },
  );
});
