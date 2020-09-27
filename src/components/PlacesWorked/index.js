/* eslint-disable max-len */
import React from 'react';
import styles from './index.css';
import AsosLogo from './asos-logo.svg';
import ItvLogo from './itv-logo.svg';
import Section from '../Section';

const PlacesWorked = () => (
  <Section additionalStyles={{
    section: styles.sectionWrapper,
    container: styles.sectionContainer
  }}
  >
    <h3 className={styles.statement}>
      Proudly contributing towards projects in the fashion and television industries for over three years.
    </h3>
    <div className={styles.companyLogoWrapper}>
      <AsosLogo className={styles.companyLogo} />
      <ItvLogo className={styles.itvLogo} />
    </div>
  </Section>
);

export default PlacesWorked;
