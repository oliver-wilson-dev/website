import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Section from '../Section';
import styles from './index.css';

const Experience = ({
  companyName,
  content,
  emoji,
  employmentPeriod,
  jobTitle,
  title
}) => (
  <Section title={title}>
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
    <div className={styles.projectImages}>
      <div className={styles.projectImage}>
        <a href="https://www.asos.com/search/?q=jeans">
          <img alt="ASOS Product Listing Page" src="https://github.com/oliver-wilson-dev/oliver-wilson-dev.github.io/blob/master/public/img/plp.png?raw=true" />
        </a>
      </div>
      <div className={classnames(styles.projectImage, styles.lastProjectImage)}>
        <a href="https://www.asos.com/saved-lists/">
          <img alt="ASOS Saved Lists Page" src="https://github.com/oliver-wilson-dev/oliver-wilson-dev.github.io/blob/master/public/img/saved-lists.png?raw=true" />
        </a>
      </div>
    </div>
  </Section>
);

Experience.propTypes = {
  companyName: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  emoji: PropTypes.string.isRequired,
  employmentPeriod: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Experience;
