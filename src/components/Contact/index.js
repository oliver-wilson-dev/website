import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import styles from './index.css';

const Contact = ({ title, phone: phoneNumber, email }) => (
  <Section title={title}>
    <div aria-label={`my phone number is ${phoneNumber}`}>
      <h4 className={styles.contactDetail} aria-hidden>
        Phone:
      </h4>
      <span aria-hidden>{phoneNumber}</span>
    </div>
    <div aria-label={`my email address is ${email}`}>
      <h4 className={styles.contactDetail} aria-hidden>
        Email:
      </h4>
      <span aria-hidden>{email}</span>
    </div>
  </Section>
);

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Contact;
