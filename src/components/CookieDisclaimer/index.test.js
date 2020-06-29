import React from 'react';
import { shallow } from 'enzyme';
import CookieDisclaimerMessage from '../../containers/CookieDisclaimerMessage';
import CookieDisclaimer from '.';

jest.mock('../../containers/CookieDisclaimerMessage', () => {
  const CookieDisclaimerMessage = () => null;

  return CookieDisclaimerMessage;
});

jest.mock('../../containers/LearnMoreOverlay', () => {
  const LearnMoreOverlay = () => null;

  return LearnMoreOverlay;
});

const defaultProps = {
  showLearnMore: true,
  showCookiePopup: true
};

const render = (renderMethod = shallow, props = {}) => renderMethod(
  <CookieDisclaimer
    {...defaultProps}
    {...props}
  />
);

describe('Cookie Disclaimer component', () => {
  describe('when learnShowMore is true', () => {
    it('should render correctly', () => {
      expect(render()).toMatchSnapshot();
    });

    describe('and showCookiePopup is false', () => {
      it('should return null', () => {
        expect(render(shallow, { showCookiePopup: false })
          .contains(<CookieDisclaimerMessage />)).toBe(false);
      });
    });
  });

  describe('when learnShowMore is false', () => {
    it('should render correctly', () => {
      expect(render(shallow, { showLearnMore: false })).toMatchSnapshot();
    });

    describe('and showCookiePopup is false', () => {
      it('should return null', () => {
        expect(render(shallow, { showCookiePopup: false })
          .contains(<CookieDisclaimerMessage />)).toBe(false);
      });
    });
  });
});
