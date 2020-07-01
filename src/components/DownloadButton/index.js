import React from 'react';
import styles from './index.css';
import DownloadButtonIcon from './download.svg';

const DownloadButton = () => (
  <a
    className={styles.downloadButton}
    download="Oliver Wilson Curriculum Vitae.pdf"
    target="_blank"
    rel="noopener noreferrer"
    href="public/documents/CV.pdf"
  >
    <p className={styles.downloadButtonTextWrapper}>
      <span className={styles.downloadButtonText}>download</span>
      {' '}
      <span className={styles.downloadButtonText}>my cv</span>
    </p>
    <DownloadButtonIcon className={styles.downloadButtonIcon} />
  </a>
);

export default DownloadButton;
