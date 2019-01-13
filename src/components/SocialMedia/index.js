import React from 'react';
import cn from 'classnames';
import styles from './index.css';
import sharedStyles from '../App/index.css';

const SocialMedia = () => (
  <div className={cn(styles.socialContainer, sharedStyles.flexCenter)}>
    <a className={styles.socialLink} href="https://www.linkedin.com/in/oliver-wilson-profile/">
      <img className={styles.socialLogo} src="public/img/linkedin.svg" alt="my linkedin profile" />
    </a>
    <a className={styles.socialLink} href="https://github.com/asos-oliverwilson">
      <img className={styles.socialLogo} src="public/img/github.svg" alt="my linkedin profile" />
    </a>
  </div>
);

export default SocialMedia;
