import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import LearnMoreOverlay from '.';
import styles from './index.css';

const render = (renderMethod = shallow) => renderMethod(<LearnMoreOverlay />);

describe('<Landing/>', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render(mount)).toMatchSnapshot();
  });

  describe('after the first animation', () => {
    it('should render correctly', () => {
      const component = render(mount);

      act(() => {
        component.find(`.${styles.container}`).props().onTransitionEnd();
      });

      expect(component).toMatchSnapshot();
    });
  });

  describe('when clicking the close button', () => {
    it('should render null', () => {
      const component = render(mount);

      component.find(`.${styles.cross}`).simulate('click');

      act(() => {
        component.find(`.${styles.container}`).props().onTransitionEnd();
      });

      expect(component).toMatchSnapshot();
    });
  });
});
