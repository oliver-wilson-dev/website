import React from 'react';
import { shallow, mount } from 'enzyme';
import SectionSlider from '.';
import styles from './index.css';

jest.mock('../SectionTile', () => {
  const SectionTile = () => <div />;

  return SectionTile;
});

jest.mock('./left-arrow.svg', () => {
  const LeftArrow = () => null;

  return LeftArrow;
});

jest.mock('./right-arrow.svg', () => {
  const RightArrow = () => null;

  return RightArrow;
});

const defaultChildren = [
  <p key="1">hello world</p>,
  <p key="2">goodbye world</p>
];

const render = (children = defaultChildren, renderMethod = shallow) => renderMethod(
  <SectionSlider>
    {children}
  </SectionSlider>
);

describe('SectionSlider', () => {
  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe('when clicking the right arrow', () => {
    it('should apply the btnDisabled class to the right arrow', () => {
      const component = render();

      component.find(`.${styles.arrowBtn}`).at(1).simulate('click');

      component.update();

      expect(component.find(`.${styles.arrowBtn}`).at(1).hasClass(styles.btnDisabled)).toBe(true);
    });

    describe('and then clicking it again', () => {
      it('should render correctly', () => {
        const component = render();

        component.find(`.${styles.arrowBtn}`).at(1).simulate('click');

        component.update();

        component.find(`.${styles.arrowBtn}`).at(1).simulate('click');

        component.update();

        expect(component).toMatchSnapshot();
      });
    });

    describe('and then clicking the left arrow', () => {
      it('should apply the btnDisabled class to the left arrow', () => {
        const component = render();

        component.find(`.${styles.arrowBtn}`).at(1).simulate('click');

        component.update();

        component.find(`.${styles.arrowBtn}`).at(0).simulate('click');

        component.update();

        expect(component.find(`.${styles.arrowBtn}`).at(0).hasClass(styles.btnDisabled)).toBe(true);
      });

      describe('and then clicking it again', () => {
        it('should render correctly', () => {
          const component = render();

          component.find(`.${styles.arrowBtn}`).at(1).simulate('click');

          component.update();

          component.find(`.${styles.arrowBtn}`).at(0).simulate('click');

          component.update();

          component.find(`.${styles.arrowBtn}`).at(0).simulate('click');

          component.update();

          expect(component).toMatchSnapshot();
        });
      });
    });

    describe('when swiping left and then right', () => {
      it('should show correct tiles', () => {
        const component = render(defaultChildren, mount);

        const touchStart = (x = '0', y = '0') => {
          component.find(`.${styles.tileContainer}`).simulate('touchStart', { targetTouches: [{ clientX: x, clientY: y }], stopPropagation: jest.fn() });
          component.update();
        };

        const touchEnd = (x = '0', y = '0') => {
          component.find(`.${styles.tileContainer}`).simulate('touchEnd', { changedTouches: [{ clientX: x, clientY: y }], stopPropagation: jest.fn() });
          component.update();
        };

        touchStart('0');
        touchEnd('200');


        expect(component.find(`.${styles.arrowBtn}`).at(0).hasClass(styles.btnDisabled)).toBe(true);
        expect(component.find(`.${styles.arrowBtn}`).at(1).hasClass(styles.btnDisabled)).toBe(false);

        touchStart('200');
        touchEnd('0');

        expect(component.find(`.${styles.arrowBtn}`).at(0).hasClass(styles.btnDisabled)).toBe(false);
        expect(component.find(`.${styles.arrowBtn}`).at(1).hasClass(styles.btnDisabled)).toBe(true);
      });
    });
    describe('when swiping and the swipe is less than 75px', () => {
      it('should show correct tiles', () => {
        const component = render(defaultChildren, mount);

        const touchStart = (x = '0', y = '0') => {
          component.find(`.${styles.tileContainer}`).simulate('touchStart', { targetTouches: [{ clientX: x, clientY: y }], stopPropagation: jest.fn() });
          component.update();
        };

        const touchEnd = (x = '0', y = '0') => {
          component.find(`.${styles.tileContainer}`).simulate('touchEnd', { changedTouches: [{ clientX: x, clientY: y }], stopPropagation: jest.fn() });
          component.update();
        };

        touchStart('0');
        touchEnd('50');


        expect(component.find(`.${styles.arrowBtn}`).at(0).hasClass(styles.btnDisabled)).toBe(true);
        expect(component.find(`.${styles.arrowBtn}`).at(1).hasClass(styles.btnDisabled)).toBe(false);

        touchStart('50');
        touchEnd('-10');

        expect(component.find(`.${styles.arrowBtn}`).at(0).hasClass(styles.btnDisabled)).toBe(true);
        expect(component.find(`.${styles.arrowBtn}`).at(1).hasClass(styles.btnDisabled)).toBe(false);
      });
    });
  });
});
