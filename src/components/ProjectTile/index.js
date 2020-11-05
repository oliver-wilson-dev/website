import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';
import sharedStyles from '../../styles/shared.css';

const ProjectTile = ({
  name,
  codeHref,
  demoHref,
  description,
  technologies
}) => (
  <article className={styles.projectTile}>
    <header>
      <h3>{name}</h3>
      {technologies && (
      <React.Fragment>
        <h4 className={styles.techHeader}>Technologies</h4>
        <p className={styles.techList}>
          {technologies.join(', ')}
        </p>
      </React.Fragment>
      )}
    </header>
    <p>{description}</p>
    {(codeHref || demoHref) && (
      <footer className={styles.footer}>
        {demoHref && <a href={demoHref} className={cn(sharedStyles.buttonLink, styles.buttonLink)} rel="noopener noreferrer" target="_blank">View demo</a>}
        {codeHref && <a href={codeHref} className={cn(sharedStyles.buttonLink, styles.buttonLink)} rel="noopener noreferrer" target="_blank">View code</a>}
      </footer>
    )}
  </article>
);

ProjectTile.propTypes = {
  codeHref: PropTypes.string,
  demoHref: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectTile;
