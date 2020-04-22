import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const ProjectImages = ({ projectImages }) => (
  <div className={styles.projectImages}>
    {projectImages.map(({ linkToProject, image: { alt, src } }) => (
      <div key={linkToProject} className={styles.projectImage}>
        <a href={linkToProject}>
          <img alt={alt} src={src} />
        </a>
      </div>
    ))}
  </div>
);

ProjectImages.propTypes = {
  projectImages: PropTypes.arrayOf(
    PropTypes.shape({
      linkToProject: PropTypes.string,
      image: PropTypes.shape({
        alt: PropTypes.string,
        src: PropTypes.string
      })
    })
  )
};

export default ProjectImages;
