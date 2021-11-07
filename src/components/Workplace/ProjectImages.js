import React from 'react';
import PropTypes from 'prop-types';
import ProjectImage from './ProjectImage';
import styles from './index.css';

const ProjectImages = ({ projectImages }) => (
  <div className={styles.projectImages}>
    {projectImages.map(({ linkToProject, image: { alt, src } }) => (
      <ProjectImage key={linkToProject} alt={alt} src={src} linkToProject={linkToProject} />
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
