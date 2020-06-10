import React from 'react';
import { mount } from 'enzyme';
import Section from '.';
import useFadeInClasses from '../../hooks/useFadeInClasses';

jest.mock('../SectionSlider', () => {
  const SectionTile = ({ children }) => <div>{children}</div>;

  return SectionTile;
});

jest.mock('../SectionTile', () => {
  const SectionTile = () => null;

  return SectionTile;
});

jest.mock('../../hooks/useFadeInClasses');

const defaultProps = {
  title: 'test-title',
  children: [<p key="test-key">this is some content</p>]
};

const render = ({ overrideProps } = { overrideProps: {} }) => mount(
  <Section
    {...defaultProps}
    {...overrideProps}
  />
);

describe('<Section/>', () => {
  beforeEach(() => {
    useFadeInClasses.mockReturnValue({ fadeInClasses: 'test-fade-in-classes' });
  });


  describe('when the children are HTML elements', () => {
    it('should exist', () => {
      expect(render().exists()).toBe(true);
    });

    it('should render correctly', () => {
      expect(render()).toMatchSnapshot();
    });
  });

  describe('when the children are react components', () => {
    const SomeComponent = () => <p>some component</p>;
    it('should exist', () => {
      expect(render({
        overrideProps: {
          children: [<SomeComponent key="1" />, <SomeComponent key="2" />]
        }
      }).exists()).toBe(true);
    });

    it('should render correctly', () => {
      expect(render({
        overrideProps: {
          children: [<SomeComponent key="1" />, <SomeComponent key="2" />]
        }
      })).toMatchSnapshot();
    });
  });

  describe('when the children are both components and HTML elements', () => {
    const htmlElement = <p key="test-key">some component</p>;
    const SomeComponent = () => htmlElement;

    it('should exist', () => {
      expect(render({
        overrideProps: {
          children: [<SomeComponent />, htmlElement]
        }
      }).exists()).toBe(true);
    });

    it('should render correctly', () => {
      expect(render({
        overrideProps: {
          children: [<SomeComponent key="1" />, htmlElement]
        }
      })).toMatchSnapshot();
    });
  });
});
