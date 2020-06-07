import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

jest.mock('../SocialMedia', () => {
  const SocialMedia = () => null;

  return SocialMedia;
});

const defaultProps = {
  learnMoreClicked: jest.fn(),
  sectionsContentFetched: true
};

const render = (props = {}) => shallow(<Footer {...defaultProps} {...props} />);

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

  describe('when sectionsContentFetched is false', () => {
    it('should render null', () => {
      expect(render({ sectionsContentFetched: false })).toMatchSnapshot();
    });
  });
});
