/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';
import CrossIcon from './cross.svg';

const LearnMoreOverlay = ({ learnMoreClicked }) => {
  const [acknowledged, setAcknowledged] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    document.body.style.top = `-${window.scrollY}px`;
    document.body.classList.add(styles.bodyFixed);
  }, []);

  const onTransitionEnd = () => {
    if (acknowledged) {
      const scrollY = document.body.style.top;
      document.body.classList.remove(styles.bodyFixed);
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);

      setLoaded(false);

      learnMoreClicked();
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
            className={styles.crossBtn}
            type="button"
            onClick={acknowledgeBanner}
          >
            <CrossIcon className={styles.crossIcon} />
          </button>
        </div>
        <div className={cn(styles.information, styles.text)}>
          <span>Last updated: 6th June 2020</span>
          <h3>What are cookies?</h3>
          <p className={styles.paragraph}>A “cookie” is a string of information which assigns you a unique identifier that we store on your computer. Your browser then provides that unique identifier to use each time you submit a query to the Site. We use cookies on the Site to, among other things, keep track of services you have used, record registration information, record your user preferences, keep you logged into the Site, facilitate purchase procedures, and track the pages you visit. Cookies help us understand how the Site is being used and improve your user experience.</p>
          <h3>What cookies does this site use?</h3>
          <ul className={styles.listOfCookies}>
            <li className={styles.cookieDescription}>This site stores cookie data based on the theme selector if you choose to use it. A cookie is written detailing the theme choice which enables the site to remember your theme selection and preserve that selection when you refresh the page.</li>
            <li className={styles.cookieDescription}>This site uses cookies to record that you&apos;ve acknowledged this cookie policy so that we don&apos;t have to show it to you more than we need to.</li>
          </ul>
          <h3>Your control of cookies</h3>
          <p className={styles.paragraph}>This site uses cookies, but you can control these through your browser settings. Most browsers allow you to manage cookies saved on your device – just head to the help section of your browser.</p>
          <p className={styles.paragraph}>Most browsers are set to accept cookies by default. However, you can remove or reject cookies in your browser’s settings. Please be aware that such action could affect the availability and functionality of the Site.</p>

          <h3>Amendments to this cookie policy</h3>
          <p className={styles.paragraph}>We reserve the right to make changes to this Cookie Policy at any time and for any reason. We will alert you about any changes by updating the “Last Updated” date of this Cookie Policy. Any changes or modifications will be effective immediately upon posting the updated Cookie Policy on the Site, and you waive the right to receive specific notice of each such change or modification.</p>
          <p className={styles.paragraph}>You are encouraged to periodically review this Cookie Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Cookie Policy by your continued use of the Site after the date such revised Cookie Policy is posted.</p>
        </div>
      </div>
    </div>
  );
};

LearnMoreOverlay.propTypes = {
  learnMoreClicked: PropTypes.func.isRequired
};

export default LearnMoreOverlay;
