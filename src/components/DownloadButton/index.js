import React from 'react';
import cn from 'classnames';
import styles from './index.css';

const DownloadButton = () => (
  <div className={cn(styles.downloadButtonContainer, styles.flexCenter)}>
    <a className={styles.downloadButton} download="Oliver Wilson Curriculum Vitae.pdf" target="_blank" rel="noopener noreferrer" href="public/documents/CV.pdf">
        downlaod my cv
    </a>
  </div>
);

export default DownloadButton;
