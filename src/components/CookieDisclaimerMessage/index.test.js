import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import styles from './index.css';

import CookieDisclaimer from '.';

const defaultProps = {
  learnMoreClicked: jest.fn()
};

const render = (renderMethod = shallow, props = {}) => renderMethod(
  <CookieDisclaimer
    {...defaultProps}
    {...props}
  />
);

describe('Cookie Disclaimer component', () => {
  describe('when first loaded', () => {
    it('should render correctly', () => {
      expect(render()).toMatchSnapshot();
    });

    it('should then apply the loaded class', () => {
      expect(render(mount)).toMatchSnapshot();
    });

    describe('and the initial animation happens', () => {
      it('should not close', () => {
        const component = render(mount);
        const container = component.find(`.${styles.container}`);
        container.props().onTransitionEnd();

        expect(container.hasClass(styles.loaded)).toBe(true);
        expect(container.hasClass(styles.closed)).toBe(false);
      });
    });

    describe('when the user accepts the policy', () => {
      it('should render correctly', () => {
        const component = render(mount);

        component.find(`.${styles.tick}`).simulate('click');

        expect(component).toMatchSnapshot();
      });

      describe('after the transition ends', () => {
        it('should render null', () => {
          const component = render();

          component.find(`.${styles.tick}`).simulate('click');

          act(() => {
            /* fire events that update state */
            component.find(`.${styles.closed}`).props().onTransitionEnd();
          });

          component.update();

          expect(component).toMatchSnapshot();
        });
      });
    });

    describe('when the user clicks learn more', () => {
      it('should render correctly', () => {
        const component = render(mount);

        component.find(`.${styles.learnMoreBtn}`).simulate('click');

        expect(component).toMatchSnapshot();
      });

      it('should call the learnMoreClickedProp', () => {
        const props = {
          learnMoreClicked: jest.fn()
        };

        const component = render(mount, props);

        component.find(`.${styles.learnMoreBtn}`).simulate('click');

        expect(props.learnMoreClicked).toHaveBeenCalledTimes(1);
      });

      describe('after the transition ends', () => {
        it('should render null', () => {
          const component = render();

          component.find(`.${styles.learnMoreBtn}`).simulate('click');

          act(() => {
            /* fire events that update state */
            component.find(`.${styles.closed}`).props().onTransitionEnd();
          });

          component.update();

          expect(component).toMatchSnapshot();
        });
      });
    });
  });
});
