import React from 'react';
import { shallow } from 'enzyme';
import SectionSlider from '.';
import styles from './index.css';

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

const render = (children = defaultChildren) => shallow(
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
  });
});
