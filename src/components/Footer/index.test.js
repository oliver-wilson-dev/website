import React from 'react';
import { shallow } from 'enzyme';

jest
  .useFakeTimers('modern')
  .setSystemTime(new Date('1996-05-07'));

jest.mock('../SocialMedia', () => {
  const SocialMedia = () => null;

  return SocialMedia;
});

const defaultProps = {
  learnMoreClicked: jest.fn()
};

const render = (props = {}) => {
  let Footer;
  jest.isolateModules(() => {
    Footer = require('.').default;
  });

  return shallow(<Footer {...defaultProps} {...props} />);
};

describe('<Footer/>', () => {
  it('should exist', () => {
    expect(render().exists()).toBe(true);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  describe('when the learn more button is clicked', () => {
    it('should call the learnMoreClicked prop', () => {
      const component = render();

      component.find('button').simulate('click');

      expect(defaultProps.learnMoreClicked).toHaveBeenCalled();
    });
  });
});
