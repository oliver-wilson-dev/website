import React from 'react';
import styles from '../index.css';
import { EMAIL, PHONE_NUMBER } from './constants';

export default {
  title: 'Get in touch',
  content:
  <div>
    <div>
      <h4 className={styles.contactDetail}>
        Phone:
      </h4>
      <span>{PHONE_NUMBER}</span>
    </div>
    <div>
      <h4 className={styles.contactDetail}>
        Email:
      </h4>
      <span>{EMAIL}</span>
    </div>
  </div>,
};
