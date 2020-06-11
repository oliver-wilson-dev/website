import React from 'react';
import cn from 'classnames';
import styles from './index.css';
import sharedStyles from '../App/index.css';
import LinkedIn from './linkedin.svg';
import Github from './github.svg';

const SocialMedia = () => (
  <div className={cn(styles.socialContainer, sharedStyles.flexCenter)}>
    <a className={styles.socialLink} href="https://www.linkedin.com/in/oliver-wilson-profile/" rel="noopener noreferrer" target="_blank">
      <LinkedIn className={styles.socialLogo} />
    </a>
    <a className={styles.socialLink} href="https://github.com/oliver-wilson-dev/" rel="noopener noreferrer" target="_blank">
      <Github className={styles.socialLogo} />
    </a>
  </div>
);

export default SocialMedia;
