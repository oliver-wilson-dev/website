import React from 'react';
import styles from '../index.css';
import { EMAIL, PHONE_NUMBER } from './constants';

export default {
  title: 'Get in touch',
  content:
  <div>
    <p>
      <h4 className={styles.contactDetail}>
        Phone:
      </h4>
      <span>{PHONE_NUMBER}</span>
    </p>
    <p>
      <h4 className={styles.contactDetail}>
        Email:
      </h4>
      <span>{EMAIL}</span>
    </p>
  </div>,
};
