import React from 'react';
import { mount } from 'enzyme';
import Section from '.';

const defaultProps = {
  title: 'test-title',
  children: <p>this is some content</p>
};

const render = (props = {}) => mount(<Section {...defaultProps} {...props} />);

describe('<SectionTile/>', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe('when passing additional styles', () => {
    it('should apply those styles', () => {
      const testClass = 'test-additional-style';
      const component = render({
        additionalStyles: {
          'test-additional-style': true
        }
      });

      expect(component.find(`.${testClass}`).exists()).toBe(true);
    });
  });

  describe('when the display box content should be expandable', () => {
    const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');

    beforeAll(() => {
      Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { configurable: true, value: 250 });
    });

    afterAll(() => {
      Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
    });

    it('should render an expandable button', () => {
      expect(render()).toMatchSnapshot();
    });

    describe('and the section is expanded', () => {
      it('should render correctly', () => {
        const wrapper = render();
        wrapper.find('button').simulate('click');
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
