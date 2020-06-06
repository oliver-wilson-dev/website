import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import LearnMoreOverlay from '.';
import styles from './index.css';

const render = (renderMethod = shallow) => renderMethod(<LearnMoreOverlay />);

describe('<Landing/>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


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
        component.find(`.${styles.background}`).props().onTransitionEnd();
      });

      component.update();

      expect(component).toMatchSnapshot();
    });
  });

  describe('when clicking the close button', () => {
    it('should render correctly', () => {
      const component = render(mount);

      component.find(`.${styles.cross}`).simulate('click');

      act(() => {
        component.find(`.${styles.background}`).props().onTransitionEnd();
      });

      component.update();

      expect(component).toMatchSnapshot();
    });

    describe('when the user had not scrolled before opening the modal', () => {
      it('should scroll the user to the scrollY position', () => {
        const component = render(mount);
        const mockScrollY = undefined;
        document.body.style.top = mockScrollY;

        Object.defineProperty(document.body.style, 'top', { value: mockScrollY, writable: true });

        component.find(`.${styles.cross}`).simulate('click');

        act(() => {
          component.find(`.${styles.background}`).props().onTransitionEnd();
        });

        component.update();

        expect(window.scrollTo.mock.calls[0][1]).toBe(-0);
      });
    });

    describe('when the user had scrolled before opening the modal', () => {
      it('should scroll the user to the scrollY position', () => {
        const mockScrollY = 500;
        window.scrollY = mockScrollY;
        const component = render(mount);

        component.find(`.${styles.cross}`).simulate('click');

        act(() => {
          component.find(`.${styles.background}`).props().onTransitionEnd();
        });

        component.update();

        expect(window.scrollTo.mock.calls[0][1]).toBe(mockScrollY);
      });
    });
  });
});
