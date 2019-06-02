import React from 'react';
import styles from '../index.css';

export default {
  title: 'Nice to meet you!',
  content:
  <div>
    <p>
      <span className={styles.paragraphEmoji} role="img" aria-label="university emoji">👋</span>
      {' '}
        Hi, my name is Oliver Wilson and I am
      {' '}
      <span className={styles.strikethroughJoke}>a machine that turns coffee into code</span>
      {' '}
        a web developer.
    </p>
    <p>
      {`I've created this website as a small project for me to experiment with new technologies
        and allow potential employers to gain an understanding of my skill set and interests.`}
    </p>
  </div>
};
