import React from 'react';

import { shallow, mount } from 'enzyme';
import useFadeInClasses from '.';
import sectionStyles from './index.css';

jest.mock('../../utils', () => ({
  IS_SERVER: false
}));

describe('useFadeInClasses hook', () => {
  const DummyComponent = () => {
    const { fadeInClasses } = useFadeInClasses();
    return (<h1 test-data-classes={fadeInClasses}>Dummy Component</h1>);
  };

  const render = (renderMethod = shallow) => renderMethod(<DummyComponent />);

  it('should return the correct initial classes', () => {
    const component = render();

    expect(component.prop('test-data-classes')).toEqual({
      [sectionStyles.hiddenFadeIn]: true,
      [sectionStyles.show]: false
    });
  });

  it('should return the correct classes once the component has rendered', () => {
    const component = render(mount);

    expect(component.childAt(0).prop('test-data-classes')).toEqual({
      [sectionStyles.hiddenFadeIn]: true,
      [sectionStyles.show]: true
    });
  });
});
