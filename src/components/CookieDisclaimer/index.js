import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './index.css';

const CookieDisclaimer = () => {
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
          styles.notificationElement,
        )}
        >
          Attention! This site uses cookies.
        </span>
        <button className={cn(styles.tick, styles.notificationElement)} type="button" onClick={acknowledgeBanner} />
      </div>
    </div>
  );
};

export default CookieDisclaimer;
