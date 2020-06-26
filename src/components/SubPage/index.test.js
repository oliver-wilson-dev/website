import React from 'react';
import { shallow } from 'enzyme';
import SubPage from '.';

const render = (props = {}) => shallow(<SubPage {...props}><h1>hello world</h1></SubPage>);

describe('SubPage', () => {
  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe('when provided with an additionalStyles prop', () => {
    it('should apply that class to the wrapper div', () => {
      const mockClass = 'test-additional-styles';
      const component = render({ additionalStyles: mockClass });

      expect(component.find(`.${mockClass}`).exists()).toBe(true);
    });
  });
});
