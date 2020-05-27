import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';

const CookieDisclaimerMessage = ({ learnMoreClicked }) => {
  const [acknowledged, setAcknowledged] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onTransitionEnd = () => {
    if (acknowledged) setClosed(true);
  };

  const acknowledgeBanner = () => {
    setAcknowledged(true);
  };

  const learnMore = () => {
    acknowledgeBanner();
    learnMoreClicked();
  };

  return !closed && (
    <div
      className={cn(styles.container, {
        [styles.loaded]: loaded && !acknowledged,
        [styles.closed]: acknowledged
      })}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={styles.positionWrapper}>
        <div className={cn(styles.cookieEmoji, styles.notificationElement)} role="img" aria-label="cookie emoji" />
        <span className={cn(
          styles.message,
          styles.text,
          styles.notificationElement,
        )}
        >
          Attention! This site uses cookies.
          {' '}
          <button className={cn(styles.learnMoreBtn, styles.text)} type="button" onClick={learnMore}>Learn More</button>
        </span>
        <button className={cn(styles.tick, styles.notificationElement)} type="button" onClick={acknowledgeBanner} />
      </div>
    </div>
  );
};

CookieDisclaimerMessage.propTypes = {
  learnMoreClicked: PropTypes.func.isRequired
};

export default CookieDisclaimerMessage;
