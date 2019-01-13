import React from 'react';
import cn from 'classnames';
import styles from './index.css';

const Landing = () => (
  <div className={cn(styles.container, styles.landing)}>
    <h1 className={styles.landingHeader}>Oliver Wilson</h1>
    <h2 className={styles.landingSubHeader}>
      Web developer
    </h2>
  </div>
);

export default Landing;
