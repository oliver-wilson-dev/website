import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import ProjectImage from './ProjectImage';

const defaultProps = {
  alt: 'test-alt',
  src: 'test-src',
  linkToProject: 'test-linkToProject',
};


const render = ({ props = {}, renderMethod = shallow } =
{ props: {}, renderMethod: shallow }) => renderMethod(
  <ProjectImage {...defaultProps} {...props} />
);

describe('ProjectImage', () => {
  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should not set a src property', () => {
    expect(render().find('img').prop('src')).toBe(undefined);
  });

  describe('when mounted on the client', () => {
    it('should render correctly', () => {
      expect(render({ renderMethod: mount })).toMatchSnapshot();
    });

    it('should set the src property', () => {
      const src = 'test-src';
      expect(render({ renderMethod: mount, props: { src } }).find('img').prop('src'))
        .toBe(src);
    });

    describe('when the onError callback is triggered', () => {
      it('should render correctly', () => {
        const component = render({ renderMethod: mount });

        act(() => {
          component.find('img').prop('onError')();
        });

        component.update();
        expect(component).toMatchSnapshot();
      });
    });
  });
});
