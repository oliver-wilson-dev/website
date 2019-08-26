import React from 'react';
import { shallow } from 'enzyme';
import ToggleSwitch from './index';


const defaultProps = {
  toggleTheme: jest.fn(),
  checkBoxChecked: false
};
const render = overrideProps => shallow(<ToggleSwitch {...defaultProps} {...overrideProps} />);

describe('ToggleSwitch', () => {
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
    it("should set the default click value to the value of the prop 'checkBoxChecked' prop", () => {
      expect(render({ checkBoxChecked: true })).toMatchSnapshot();
    });
  });
});
