import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import additionalStyles from '../App/index.css';
import styles from './index.css';
import SocialMedia from '../SocialMedia';


const Footer = ({ learnMoreClicked }) => (
  <footer className={cn(additionalStyles.flexCenter, styles.container)}>
    <div className={styles.textContainer}>
      <span className={styles.footerDisclaimerText}>
        By using this site you agree to our cookie policy.
        {' '}
        <button className={cn(styles.buttonLink)} type="button" onClick={learnMoreClicked}>
          Read the cookie policy here
          <span>.</span>
        </button>
      </span>
      <div className={styles.footerDisclaimerText}>
        Icons made by
        {' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
        {' '}
        from
        {' '}
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
      <span className={styles.footerDisclaimerText}>
        The code for this website can be found on
        {' '}
        <a href="https://github.com/oliver-wilson-dev/oliver-wilson-dev.github.io" target="_blank" rel="noopener noreferrer">github</a>
        .
      </span>
      <span className={styles.footerDisclaimerText}>©2020, Oliver Wilson</span>
    </div>
    <SocialMedia />
  </footer>
);

Footer.propTypes = {
  learnMoreClicked: PropTypes.func.isRequired,
};

export default Footer;
