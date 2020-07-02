import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import SideNav from './index';

import styles from './index.css';
import { preventScroll, allowScroll } from '../../utils';

jest.mock('react-router-dom', () => ({ Link: ({ children }) => <button type="button">{children}</button> }));

jest.mock('../../utils', () => ({
  preventScroll: jest.fn(),
  allowScroll: jest.fn()
}));

jest.mock('../Icons/cross.svg', () => {
  const CrossIcon = () => null;

  return CrossIcon;
});

jest.mock('../DownloadButton', () => {
  const DownloadButton = () => null;

  return DownloadButton;
});

jest.mock('../../containers/ThemeToggle', () => {
  const ThemeToggle = () => null;

  return ThemeToggle;
});

jest.mock('../../containers/SideNav', () => {
  const SideNav = () => null;

  return SideNav;
});

const defaultProps = { showSideNav: false, toggleShowSideNav: jest.fn() };

const render = (
  overrideProps,
  renderMethod = shallow
) => renderMethod(<SideNav {...defaultProps} {...overrideProps} />);

describe('<SideNav/> component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe('when the showSideNav prop is true', () => {
    it('should open the sub navigation', () => {
      const component = render({ showSideNav: true });

      expect(component).toMatchSnapshot();
    });

    it('should call preventScroll', () => {
      const component = render({ showSideNav: false }, mount);

      component.setProps({ ...defaultProps, showSideNav: true });

      expect(preventScroll).toHaveBeenCalledTimes(1);
    });

    describe('and then clicking the overlay', () => {
      it('should call toggleShowSideNav to close the menu', () => {
        const component = render({ showSideNav: false }, mount);

        component.setProps({ ...defaultProps, showSideNav: true });

        act(() => {
          component.find(`.${styles.menuContainer}`).props().onClick();
        });

        expect(defaultProps.toggleShowSideNav).toHaveBeenCalledTimes(1);
      });
    });

    describe('and then clicking on the whitespace on the menu', () => {
      it('should not close the menu', () => {
        const mockEvent = {
          stopPropagation: jest.fn()
        };
        const component = render({ showSideNav: false }, mount);

        component.setProps({ ...defaultProps, showSideNav: true });

        act(() => {
          component.find(`.${styles.menuContent}`).simulate('click', mockEvent);
        });

        expect(component).toMatchSnapshot();
        expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
      });
    });

    describe('and then clicking a menu item', () => {
      it('should then close the menu', () => {
        const component = render({ showSideNav: false }, mount);

        component.setProps({ ...defaultProps, showSideNav: true });

        act(() => {
          component.find(`.${styles.link}`).first().props().onClick();
        });

        expect(component).toMatchSnapshot();
      });
    });

    describe('and then clicking the close icon', () => {
      it('should call allowScroll', () => {
        const component = render({ showSideNav: false }, mount);

        component.setProps({ ...defaultProps, showSideNav: true });

        component.update();

        act(() => {
          component.find(`.${styles.crossIcon}`).props().onClick();
        });

        expect(defaultProps.toggleShowSideNav).toHaveBeenCalledTimes(1);

        component.setProps({ ...defaultProps, showSideNav: false });

        component.update();

        expect(allowScroll).toHaveBeenCalledTimes(1);
      });
    });
  });
});
