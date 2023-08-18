import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import styles from './index.css';

const Contact = ({ title, email }) => (
  <Section title={title}>
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
  email: PropTypes.string.isRequired
};

export default Contact;
