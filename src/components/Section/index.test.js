import React from 'react';
import { mount } from 'enzyme';
import Section from '.';
import useFadeInClasses from '../../hooks/useFadeInClasses';

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

  describe('when children are provided', () => {
    const htmlElement = <p key="test-key">some component</p>;
    const SomeComponent = () => htmlElement;

    it('should exist', () => {
      expect(render({
        overrideProps: {
          children: [<SomeComponent key="1" />, htmlElement]
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

  describe('when there is no title', () => {
    it('should render correctly', () => {
      expect(render({ title: undefined }).exists()).toBe(true);
    });
  });

  describe('when additionalStyles are provided', () => {
    describe('when a section class is provided', () => {
      it('should add the class to the section element', () => {
        const sectionClass = 'test-section-class';
        const wrapper = render({
          overrideProps: {
            additionalStyles: {
              section: sectionClass
            }
          }
        });

        expect(wrapper.find('section').hasClass(sectionClass)).toBe(true);
      });
    });

    describe('when a container class is provided', () => {
      it('should add the class to the section element', () => {
        const containerClass = 'test-container-class';
        const wrapper = render({
          overrideProps: {
            additionalStyles: {
              container: containerClass
            }
          }
        });

        expect(wrapper.find(`.${containerClass}`).exists()).toBe(true);
      });
    });
  });
});
