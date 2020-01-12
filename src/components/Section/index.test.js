import React from 'react';
import { mount } from 'enzyme';
import Section from '.';

jest.mock('../SectionTile', () => {
  const SectionTile = () => null;

  return SectionTile;
});

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
          children: [<SomeComponent />, <SomeComponent />]
        }
      }).exists()).toBe(true);
    });

    it('should render correctly', () => {
      expect(render({
        overrideProps: {
          children: [<SomeComponent />, <SomeComponent />]
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
          children: [<SomeComponent />, htmlElement]
        }
      })).toMatchSnapshot();
    });
  });
});
