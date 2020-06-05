import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

jest.mock('../../containers/ToggleSwitch', () => {
  const ToggleSwitch = () => null;

  return ToggleSwitch;
});

const defaultProps = { theme: 'test-theme' };

const render = overrideProps => shallow(<Header {...defaultProps} {...overrideProps} />);

describe('<Header/> component', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
