import React from 'react';
import { shallow } from 'enzyme';
import Page from '.';
import useBackgroundClasses from '../../hooks/useBackgroundClasses';

jest.mock('../../hooks/useBackgroundClasses');

const render = (props = {}) => shallow(<Page {...props}><h1>hello world</h1></Page>);

describe('Page', () => {
  const mockBackgroundClasses = 'test-background-classes';
  beforeEach(() => {
    useBackgroundClasses.mockReturnValue(mockBackgroundClasses);
  });


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
