import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import LearnMoreOverlay from '.';
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

const defaultProps = {
  learnMoreClicked: jest.fn()
};

const render = (renderMethod = shallow) => renderMethod(<LearnMoreOverlay {...defaultProps} />);

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

    it('should call preventScroll', () => {
      const component = render(mount);

      act(() => {
        component.find(`.${styles.background}`).props().onTransitionEnd();
      });

      component.update();

      expect(preventScroll).toHaveBeenCalledTimes(1);
    });
  });

  describe('when clicking the close button', () => {
    it('should call the learnMoreClicked prop', () => {
      const component = render(mount);

      component.find(`.${styles.crossBtn}`).simulate('click');

      let onTransitionEnd;
      act(() => {
        ({ onTransitionEnd } = component.find(`.${styles.background}`).props());
        onTransitionEnd();
      });

      component.update();

      expect(defaultProps.learnMoreClicked).toHaveBeenCalled();
    });

    it('should call allowScroll', () => {
      const component = render(mount);

      component.find(`.${styles.crossBtn}`).simulate('click');

      let onTransitionEnd;
      act(() => {
        ({ onTransitionEnd } = component.find(`.${styles.background}`).props());
        onTransitionEnd();
      });

      component.update();

      expect(allowScroll).toHaveBeenCalledTimes(1);
    });
  });
});
