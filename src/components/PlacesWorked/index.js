/* eslint-disable max-len */
import React from 'react';
import styles from './index.css';
import AsosLogo from './asos-logo.svg';
import ItvLogo from './itv-logo.svg';
import SainsburysLogo from './sainsburys-logo.svg';
import Section from '../Section';

const PlacesWorked = () => (
  <Section additionalStyles={{
    section: styles.sectionWrapper,
    container: styles.sectionContainer
  }}
  >
    <h3 className={styles.statement}>
      Proudly contributing to projects in the fashion, television and food industries for over five years.
    </h3>
    <div className={styles.companyLogoWrapper}>
      <AsosLogo className={styles.asosLogo} />
      <SainsburysLogo className={styles.sainsburysLogo} />
      <ItvLogo className={styles.itvLogo} />
    </div>
  </Section>
);

export default PlacesWorked;
