import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './index.css';

/*
  Setting the image src when rendering on the client because on the server
  no onerror event is respected.

  https://stackoverflow.com/questions/51639891/detect-broken-image-when-using-hydrate-instead-of-render-from-react-dom
*/

const ProjectImage = ({ alt, src: srcProp, linkToProject }) => {
  const [imgLoadFailed, setImgLoadFailed] = useState(false);
  const [src, setSrc] = useState(undefined);

  useEffect(() => setSrc(srcProp), []);

  const onError = useCallback(() => setImgLoadFailed(true), [setImgLoadFailed]);

  if (imgLoadFailed) return null;

  return (
    <div
      className={styles.projectImageWrapper}
    >
      <a href={linkToProject}>
        <img
          alt={alt}
          src={src}
          loading="lazy"
          onError={onError}
          className={styles.image}
        />
      </a>
    </div>
  );
};

ProjectImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  linkToProject: PropTypes.string,
};

export default ProjectImage;
