import React from 'react';
import PropTypes from 'prop-types';
import CookieDisclaimerMessage from '../../containers/CookieDisclaimerMessage';
import LearnMoreOverlay from '../LearnMoreOverlay';

const CookieDisclaimer = ({ showLearnMore }) => (
  <>
    {showLearnMore && <LearnMoreOverlay />}
    <CookieDisclaimerMessage />
  </>
);

CookieDisclaimer.propTypes = {
  showLearnMore: PropTypes.bool.isRequired
};

export default CookieDisclaimer;
