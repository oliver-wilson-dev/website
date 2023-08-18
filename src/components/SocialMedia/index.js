import React from 'react';
import cn from 'classnames';
import styles from './index.css';
import sharedStyles from '../App/index.css';
import LinkedIn from './linkedin.svg';
import Github from './github.svg';
import Email from './email.svg';

const SocialMedia = () => (
  <div className={cn(styles.socialContainer, sharedStyles.flexCenter)}>
    <a className={styles.socialLink} href="https://www.linkedin.com/in/oliver-wilson-profile/" rel="noopener noreferrer" target="_blank" aria-label="A link to my LinkedIn page">
      <LinkedIn className={styles.socialLogo} />
    </a>
    <a className={styles.socialLink} href="https://github.com/oliver-wilson-dev/" rel="noopener noreferrer" target="_blank" aria-label="A link to my Github page">
      <Github className={styles.socialLogo} />
    </a>
    <a className={styles.socialLink} href="mailto:contact@oliverwilson.dev" aria-label="My email address">
      <Email className={styles.socialLogo} />
    </a>
  </div>
);

export default SocialMedia;
