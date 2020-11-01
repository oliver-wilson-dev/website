/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import styles from './index.css';

const Greeting = ({
  title, content, openingLine, reasonForCreation
}) => (
  <Section title={title}>
    <p>
      {openingLine.start}
      {' '}
      {<span className={styles.strikethroughJoke}>{openingLine.joke}</span>}
      {' '}
      {openingLine.end}
    </p>
    <div>
      <span>{reasonForCreation.start}</span>
      <ul className={styles.reasonsList}>
        {reasonForCreation.reasons.map((reason, index) => (
          <li key={index}>
            <span className={styles.listOrderIndicator}>
              {index}
              .
            </span>
            {reason}
          </li>
        ))}
      </ul>
    </div>
    {content.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
  </Section>
);

Greeting.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  openingLine: PropTypes.object.isRequired,
  reasonForCreation: PropTypes.object.isRequired,
};

export default Greeting;
