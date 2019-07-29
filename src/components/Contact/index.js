import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import styles from './index.css';

const Greeting = ({ title, phone: phoneNumber, email }) => (
  <Section title={title}>
    <div>
      <h4 className={styles.contactDetail}>
        Phone:
      </h4>
      <span>{phoneNumber}</span>
    </div>
    <div>
      <h4 className={styles.contactDetail}>
        Email:
      </h4>
      <span>{email}</span>
    </div>
  </Section>
);

Greeting.propTypes = {
  title: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Greeting;
