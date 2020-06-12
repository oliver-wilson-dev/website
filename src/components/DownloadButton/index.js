import React from 'react';
import classnames from 'classnames';
import styles from './index.css';
import DownloadButtonIcon from './download.svg';

const DownloadButton = () => (
  <div className={classnames(styles.downloadButtonContainer, styles.flexCenter)}>
    <a
      className={styles.downloadButton}
      download="Oliver Wilson Curriculum Vitae.pdf"
      target="_blank"
      rel="noopener noreferrer"
      href="public/documents/CV.pdf"
    >
      download my cv
      <DownloadButtonIcon className={styles.downloadButtonIcon} />
    </a>
  </div>
);

export default DownloadButton;
