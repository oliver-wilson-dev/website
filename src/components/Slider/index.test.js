import React from 'react';
import { shallow } from 'enzyme';
import Slider from './index';

const headingText = 'hello world';

const render = () => shallow(<Slider>{headingText}</Slider>);

describe('Slider', () => {
  it('should render correctly', () => {
    const component = render();

    expect(component).toMatchSnapshot();
  });
});
