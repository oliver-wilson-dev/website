/* eslint-disable max-len */
import React from 'react';
import sharedStyles from '../../styles/shared.css';
import styles from './index.css';

import Page from '../../containers/Page';

const About = () => (
  <Page>
    <section>
      <h1 className={sharedStyles.pageHeader}>About Page</h1>
      <p className={styles.aboutParagraph}>I haven&apos;t taken the time to write much about myself yet, but when I do, this will be where to find it.</p>
    </section>
  </Page>
);

export default About;
