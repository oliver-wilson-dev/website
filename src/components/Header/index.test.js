import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Header from './index';
import styles from './index.css';
import { preventScroll, allowScroll } from '../../utils';

jest.mock('../../utils', () => ({
  preventScroll: jest.fn(),
  allowScroll: jest.fn()
}));

jest.mock('../Icons/cross.svg', () => {
  const CrossIcon = () => null;

  return CrossIcon;
});

jest.mock('./burgerMenu.svg', () => {
  const BurgerMenu = () => null;

  return BurgerMenu;
});

jest.mock('../../containers/ThemeToggle', () => {
  const ThemeToggle = () => null;

  return ThemeToggle;
});

const defaultProps = { theme: 'test-theme' };

const render = (
  overrideProps,
  renderMethod = shallow
) => renderMethod(<Header {...defaultProps} {...overrideProps} />);

describe('<Header/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });


  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe('when clicking the burgerMenu icon', () => {
    it('should open the sub navigation', () => {
      const component = render();

      component.find(`.${styles.burgerMenu}`).simulate('click');

      expect(component).toMatchSnapshot();
    });

    it('should call preventScroll', () => {
      const component = render({}, mount);

      act(() => {
        component.find(`.${styles.burgerMenu}`).props().onClick();
      });

      expect(preventScroll).toHaveBeenCalledTimes(1);
    });

    describe('and then clicking the close icon', () => {
      it('should call allowScroll', () => {
        const component = render({}, mount);

        // can't click on the svg element in jest for some reason
        act(() => {
          component.find(`.${styles.burgerMenu}`).props().onClick();
        });

        component.update();

        act(() => {
          component.find(`.${styles.crossIcon}`).props().onClick();
        });

        expect(allowScroll).toHaveBeenCalledTimes(1);
      });
    });
  });
});
