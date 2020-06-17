import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadingSpinner from '.';
import styles from './index.css';

const defaultProps = {
  loading: true
};

const render = (overrideProps = {}, renderMethod = shallow) => renderMethod(<LoadingSpinner {...defaultProps} {...overrideProps} />);

describe('<LoadingSpinner />', () => {
  it('should render correctly', () => {
    expect(render().exists()).toBe(true);
    expect(render()).toMatchSnapshot();
  });

  describe('when the component is not loading', () => {
    it('should render correctly', () => {
      const component = render();
      component.setProps({ loading: false });
      component.find(`.${styles.loadingSpinner}`).simulate('transitionEnd');
      expect(component).toMatchSnapshot();
    });

    it('should add the hide class to the loadingSpinner div', () => {
      const component = render(undefined, mount);
      component.setProps({ loading: false });
      component.update();
      expect(component.find(`.${styles.hide}`).exists()).toBe(true);
    });
  });
});
