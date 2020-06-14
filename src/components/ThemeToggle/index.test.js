import React from 'react';
import { shallow } from 'enzyme';
import ThemeToggle from './index';
import { LIGHT_THEME, DARK_THEME } from '../../state/actions/constants';


const defaultProps = {
  toggleTheme: jest.fn(),
  theme: LIGHT_THEME
};
const render = overrideProps => shallow(<ThemeToggle {...defaultProps} {...overrideProps} />);

describe('ThemeToggle', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it("should have a label with the htmlFor property that has the same value as the input element's id", () => {
    const component = render();
    expect(component.find('label').prop('htmlFor')).toBe(
      component.find('input').prop('id')
    );
  });

  it('should call the toggleTheme prop when the input is clicked', () => {
    const mockToggleTheme = jest.fn();
    const component = render({ toggleTheme: mockToggleTheme });
    component.find('input').simulate('click');

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  describe('when the theme had been toggled from a previous browse to the website', () => {
    it("should set the default click value to the value of the prop 'theme' prop", () => {
      expect(render({ theme: DARK_THEME })).toMatchSnapshot();
    });
  });
});
