import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import styles from './index.css';

const Greeting = ({ title, content, openingLine }) => (
  <Section title={title}>
    <p>
      <span className={styles.paragraphEmoji} role="img" aria-hidden>👋</span>
      {openingLine.start}
      {' '}
      {<span className={styles.strikethroughJoke}>{openingLine.joke}</span>}
      {' '}
      {openingLine.end}
    </p>
    {content.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
  </Section>
);

Greeting.propTypes = {
  content: PropTypes.array.isRequired,
  openingLine: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Greeting;
