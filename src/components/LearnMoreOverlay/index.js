/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './index.css';

const LearnMoreOverlay = () => {
  const [acknowledged, setAcknowledged] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const onTransitionEnd = () => {
    if (acknowledged) {
      document.body.style.overflow = 'unset';
      setLoaded(false);
    }
  };

  const acknowledgeBanner = () => {
    setAcknowledged(true);
  };

  return (
    <div
      className={cn(styles.background, {
        [styles.background__loaded]: loaded,
        [styles.background__closed]: acknowledged,
      })}

      onTransitionEnd={onTransitionEnd}
    >
      <div className={styles.layout}>
        <div className={styles.overlayHeader}>
          <h2 className={styles.title}>Cookie Policy</h2>
          <button
            className={styles.cross}
            type="button"
            onClick={acknowledgeBanner}
          />
        </div>
        <div className={cn(styles.information, styles.text)}>
          <p>This site uses cookies, but you can control these through your browser settings. Most browsers allow you to manage cookies saved on your device – just head to the help section of your browser.</p>
          <h3>What are cookies?</h3>
          <p>Cookies are data files that can hold small amounts of info and are stored on your device (computer, smartphone etc) when you visit a website.</p>
          <h3>What cookies does this site use?</h3>
          <ul className={styles.listOfCookies}>
            <li className={styles.cookieDescription}>This site stores cookie data based on the theme selector if you choose to use it. A cookie is written detailing the theme choice which enables the site to remember your theme selection and preserve that selection when you refresh the page.</li>
            <li className={styles.cookieDescription}>This site uses cookies to record that you&apos;ve acknowledged this cookie policy so that we don&apos;t have to show it to you more than we need to.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default LearnMoreOverlay;
