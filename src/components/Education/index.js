import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';
import styles from './index.css';

const Education = ({
  title,
  content,
  universityName,
  courseName: { precedingInformation: courseNamePrefix, name: courseName },
  degreeClassification: { precedingInformation: degreePrefix, name: degreeClassification },
}) => (
  <Section title={title}>
    <h3 className={styles.universityTitle}>{universityName}</h3>
    <h4 className={styles.degreeTitle}>
      {courseNamePrefix}
    </h4>
    <span>{courseName}</span>
    <h4 className={styles.degreeClassification}>
      {degreePrefix}
      :
      <span>{degreeClassification}</span>
    </h4>
    {content.map(paragraph => (<p key={paragraph}>{paragraph}</p>))}
  </Section>
);

Education.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  courseName: PropTypes.object.isRequired,
  degreeClassification: PropTypes.object.isRequired,
  universityName: PropTypes.string.isRequired
};

export default Education;
