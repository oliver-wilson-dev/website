import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import additionalStyles from '../App/index.css';
import styles from './index.css';
import SocialMedia from '../SocialMedia';

const year = new Date().getFullYear();

const Footer = ({ learnMoreClicked }) => (
  <footer className={cn(additionalStyles.flexCenter, styles.container)}>
    <div className={styles.textContainer}>
      <span className={styles.footerDisclaimerText}>
        By using this site you agree to our cookie policy.
        {' '}
        <button className={styles.buttonLink} type="button" onClick={learnMoreClicked}>
          <span className={styles.buttonLinkText}>Read the cookie policy here</span>
          <span>.</span>
        </button>
      </span>
      <span className={styles.footerDisclaimerText}>
        Icons made by
        {' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
        {' '}
        from
        {' '}
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </span>
      <span className={styles.footerDisclaimerText}>
        The code for this website can be found on
        {' '}
        <a href="https://github.com/oliver-wilson-dev/personal-website" target="_blank" rel="noopener noreferrer">github</a>
        .
      </span>
      <span className={styles.footerDisclaimerText}>
        ©
        {' '}
        {year}
        {' '}
        Oliver Wilson
      </span>
    </div>
    <SocialMedia />
  </footer>
);

Footer.propTypes = {
  learnMoreClicked: PropTypes.func.isRequired,
};

export default Footer;
