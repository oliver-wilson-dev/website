import React from 'react';
import cn from 'classnames';
import styles from './index.css';
import sharedStyles from '../../styles/shared.css';

const Landing = () => (
  <div className={cn(styles.container, styles.landing)}>
    <h1 className={sharedStyles.pageHeader}>Oliver Wilson</h1>
    <h2 className={styles.landingSubHeader}>
      Web developer
    </h2>
  </div>
);

export default Landing;
