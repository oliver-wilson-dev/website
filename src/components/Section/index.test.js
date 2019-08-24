import React from 'react';
import { mount } from 'enzyme';
import Section from '.';

const defaultProps = {
  title: 'test-title',
  children: <p>this is some content</p>
};

const render = () => mount(<Section {...defaultProps} />);

describe('<Section/>', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe('when the display box content should be expandable', () => {
    it('should render an expandable button', () => {
      function mockGetRef() {
        this.displayBoxRef = { offsetHeight: 250 };
      }
      jest.spyOn(Section.prototype, 'getRef').mockImplementation(mockGetRef);

      expect(render()).toMatchSnapshot();
    });
    describe('and the section is expanded', () => {
      it('should render correctly', () => {
        function mockGetRef() {
          this.displayBoxRef = { offsetHeight: 250 };
        }
        jest.spyOn(Section.prototype, 'getRef').mockImplementation(mockGetRef);
        const wrapper = render();
        wrapper.find('button').simulate('click');
        expect(wrapper).toMatchSnapshot();
      });
    });
  });
});
