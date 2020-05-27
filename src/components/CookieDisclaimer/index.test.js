import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import styles from './index.css';

import CookieDisclaimerMessage from '../../containers/CookieDisclaimerMessage';
import LearnMoreOverlay from '../LearnMoreOverlay';

import CookieDisclaimer from '.';

jest.mock('../../containers/CookieDisclaimerMessage', () => {
  const CookieDisclaimerMessage = () => null;

  return CookieDisclaimerMessage;
});

jest.mock('../LearnMoreOverlay', () => {
  const LearnMoreOverlay = () => null;

  return LearnMoreOverlay;
});

const defaultProps = {
  showLearnMore: true
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
  });

  describe('when learnShowMore is false', () => {
    it('should render correctly', () => {
      expect(render(shallow, { showLearnMore: false })).toMatchSnapshot();
    });
  });
});
