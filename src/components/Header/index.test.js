import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import styles from './index.css';

jest.mock('react-router-dom', () => ({ Link: ({ children }) => <button type="button">{children}</button> }));

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

jest.mock('../../containers/SideNav', () => {
  const SideNav = () => null;

  return SideNav;
});

const defaultProps = { toggleShowSideNav: jest.fn() };

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
    it('should call toggleShowSideNav', () => {
      const component = render();

      component.find(`.${styles.burgerMenu}`).simulate('click');

      expect(defaultProps.toggleShowSideNav).toHaveBeenCalledTimes(1);
    });
  });
});
