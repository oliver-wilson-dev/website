import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';
import ProjectImages from './ProjectImages';

const Workplace = ({
  companyName,
  content,
  emoji,
  employmentPeriod,
  jobTitle,
  projectImages = []
}) => (
  <React.Fragment>
    <h3 className={styles.companyTitle}>{companyName}</h3>
    <h4 className={styles.jobRole}>
      {jobTitle}
    </h4>
    <h4>{employmentPeriod}</h4>
    {content.map((paragraph, index) => (index === 0
      ? (
        <p key={paragraph}>
          <span className={styles.paragraphEmoji} role="img" aria-label="laptop emoji">{emoji}</span>
          {paragraph}
        </p>
      )
      : <p key={paragraph}>{paragraph}</p>))}
    {!!projectImages.length && <ProjectImages projectImages={projectImages} />}
  </React.Fragment>
);

export default Workplace;

Workplace.propTypes = {
  companyName: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  emoji: PropTypes.string.isRequired,
  employmentPeriod: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  projectImages: PropTypes.array
};
